/**
 * @manya/memory — the unified memory facade.
 *
 * Wires together all subsystems: working, episodic, semantic, procedural,
 * long-term, index, links, ranking, permissions, aging, sync, backup, I/O.
 *
 * Copyright 2024 Manya Hael Foundation. All rights reserved.
 * Licensed under the Apache License, Version 2.0.
 */

import type {
  EpisodicEvent, LongTermRecord, MemoryId, MemorySnapshot,
  RetrievalResult, SemanticFact, WorkingMemoryEntry,
} from './types.js';
import { WorkingMemory } from './working/working.js';
import { EpisodicMemory } from './episodic/episodic.js';
import { SemanticMemory } from './semantic/semantic.js';
import { ProceduralMemory } from './procedural/procedural.js';
import { LongTermMemory } from './longterm/longterm.js';
import { InvertedIndex } from './index/index.js';
import { LinkGraph } from './link/link.js';
import { PermissionModel } from './permissions/permissions.js';
import { rankLongTerm, rankEpisodic, DEFAULT_WEIGHTS } from './rank/rank.js';
import { mergeAgingPolicy, shouldPruneEpisodic, shouldCompressLongTerm, effectiveImportance } from './aging/aging.js';
import { computeDelta, applyDelta } from './sync/sync.js';
import { createBackup, restoreBackup, verifyBackup } from './backup/backup.js';
import { exportSnapshot, importSnapshot } from './io/io.js';
import { DEFAULT_CONFIG, mergeConfig } from './config/config.js';
import type { MemoryConfig } from './config/config.js';
import { ConsoleLogger, SilentLogger } from './logging.js';
import type { Logger } from './logging.js';
import { MemoryError } from './errors.js';

export class MemorySystem {
  public readonly working: WorkingMemory;
  public readonly episodic: EpisodicMemory;
  public readonly semantic: SemanticMemory;
  public readonly procedural: ProceduralMemory;
  public readonly longterm: LongTermMemory;
  public readonly index: InvertedIndex;
  public readonly links: LinkGraph;
  public readonly permissions: PermissionModel;
  private readonly config: Required<Omit<MemoryConfig, 'logger'>> & { logger?: Logger };
  private readonly logger: Logger;

  constructor(config?: MemoryConfig) {
    this.config = mergeConfig(config);
    this.logger = this.config.logger ?? (
      this.config.logLevel === 'silent' ? new SilentLogger() : new ConsoleLogger(this.config.logLevel)
    );
    this.working = new WorkingMemory(this.config.aging.workingTtlMs);
    this.episodic = new EpisodicMemory(this.config.aging.episodicMaxCount);
    this.semantic = new SemanticMemory();
    this.procedural = new ProceduralMemory();
    this.longterm = new LongTermMemory();
    this.index = new InvertedIndex();
    this.links = new LinkGraph();
    this.permissions = new PermissionModel();
  }

  /** Record an episodic event AND index it. */
  remember(agent: string, event: string, context?: Record<string, unknown>, opts?: { importance?: number; tags?: string[]; source?: string }): string {
    const id = this.episodic.record(agent, event, context, opts);
    // Index the event for retrieval.
    const text = `${event} ${context ? JSON.stringify(context) : ''}`;
    this.index.add(id, text);
    this.logger.debug('remember: recorded', { id, agent, event: event.slice(0, 60) });
    return id;
  }

  /** Recall events by query. Returns ranked results. */
  recall(query: string, limit: number = 10): RetrievalResult<EpisodicEvent>[] {
    const events = this.episodic.all();
    // Map the unified RankingWeights to the episodic-specific shape.
    const w = this.config.rankingWeights;
    const episodicWeights = { text: w.tfidf, importance: w.importance, recency: w.recency };
    return rankEpisodic(query, events, episodicWeights).slice(0, limit);
  }

  /** Learn a semantic fact AND index it. */
  learn(entity: string, attribute: string, value: unknown, confidence?: number, source?: string): string {
    const id = this.semantic.learn(entity, attribute, value, confidence, source);
    this.index.add(id, `${entity} ${attribute} ${JSON.stringify(value)}`);
    return id;
  }

  /** Store a long-term record AND index it. */
  store(payload: unknown, opts?: { type?: 'longterm'; importance?: number; tags?: string[]; source?: string; id?: string }): string {
    const id = this.longterm.store(payload, opts);
    this.index.add(id, typeof payload === 'string' ? payload : JSON.stringify(payload));
    return id;
  }

  /** Retrieve a long-term record (updates access stats). */
  retrieve(id: string): LongTermRecord | null {
    return this.longterm.retrieve(id);
  }

  /** Unified search across all memory types. Returns ranked long-term records. */
  search(query: string, limit: number = 10): RetrievalResult<LongTermRecord>[] {
    const results = this.index.search(query);
    const tfidf = new Map<string, number>();
    for (const r of results) tfidf.set(r.recordId, r.score);
    const records: LongTermRecord[] = [];
    for (const r of results) {
      const rec = this.longterm.peek(r.recordId);
      if (rec) records.push(rec);
    }
    return rankLongTerm(tfidf, records, this.config.rankingWeights).slice(0, limit);
  }

  /** Link two records. */
  link(fromId: MemoryId, toId: MemoryId, relation: string, weight?: number): boolean {
    return this.links.add(fromId, toId, relation, weight);
  }

  /** Find related records via links. */
  related(id: MemoryId, relation?: string, maxDepth?: number): MemoryId[] {
    if (relation) return this.links.traverse(id, relation, maxDepth ?? 5);
    const out = new Set<MemoryId>();
    for (const l of this.links.outgoingFrom(id)) out.add(l.toId);
    for (const l of this.links.incomingTo(id)) out.add(l.fromId);
    return Array.from(out);
  }

  /** Run aging: prune low-importance episodic events, decay long-term importance. */
  age(now: number = Date.now()): { prunedEpisodic: number; agedLongTerm: number } {
    const policy = mergeAgingPolicy(this.config.aging);
    const before = this.episodic.count();
    // Prune episodic events marked for pruning.
    const all = this.episodic.all();
    const toKeep = all.filter(e => !shouldPruneEpisodic(e, policy, now));
    // Always keep the most recent 100 events.
    if (toKeep.length < all.length) {
      const recent = all.slice(-100);
      const seen = new Set(recent.map(e => e.id));
      for (const e of toKeep) seen.add(e.id);
      // Re-populate episodic — but we don't have a direct API. Use pruneOlderThan as a workaround.
      const oldestKept = Math.min(...toKeep.map(e => e.timestamp), ...recent.map(e => e.timestamp));
      this.episodic.pruneOlderThan(oldestKept);
    }
    const prunedEpisodic = before - this.episodic.count();
    const agedLongTerm = this.longterm.applyAging(now);
    this.logger.debug('age: complete', { prunedEpisodic, agedLongTerm });
    return { prunedEpisodic, agedLongTerm };
  }

  /** Snapshot the entire memory state. */
  snapshot(): MemorySnapshot {
    return {
      schemaVersion: 1,
      takenAt: new Date().toISOString(),
      working: this.working.entries(),
      episodic: this.episodic.all(),
      semantic: this.semantic.all(),
      procedural: this.procedural.list().map(name => {
        const s = this.procedural.get(name)!;
        return { ...s, handler: undefined, handlerSerialized: false };
      }),
      longterm: this.longterm.all(),
      links: this.links.all(),
      permissions: this.permissions.all(),
    };
  }

  /** Restore from a snapshot. */
  restore(snapshot: MemorySnapshot): void {
    if (!snapshot || snapshot.schemaVersion !== 1) throw new MemoryError('invalid snapshot');
    this.working.clear();
    // Clear existing episodic events by pruning everything older than now+1
    this.episodic.pruneOlderThan(Date.now() + 1);
    for (const e of snapshot.episodic) this.episodic.record(e.agent, e.event, e.context, { importance: e.importance, tags: e.tags, source: e.source, id: e.id, timestamp: e.timestamp });
    for (const s of snapshot.semantic) this.semantic.learn(s.entity, s.attribute, s.value, s.confidence, s.source);
    for (const r of snapshot.longterm) this.longterm.store(r.payload, { type: r.type, importance: r.importance, tags: r.tags, source: r.source, id: r.id });
    for (const l of snapshot.links) this.links.add(l.fromId, l.toId, l.relation, l.weight);
    for (const p of snapshot.permissions) this.permissions.set(p);
  }

  /** Backup the current state. */
  backup() {
    return createBackup(this.snapshot());
  }

  /** Restore from a backup. */
  restoreFromBackup(backup: ReturnType<MemorySystem['backup']>): void {
    if (!verifyBackup(backup)) throw new MemoryError('backup verification failed');
    this.restore(restoreBackup(backup));
  }

  /** Synchronize with a remote snapshot. Returns the applied delta. */
  synchronize(remoteSnapshot: MemorySnapshot) {
    const local = this.snapshot();
    const delta = computeDelta(local, remoteSnapshot);
    const merged = applyDelta(local, remoteSnapshot, delta);
    this.restore(merged);
    return delta;
  }

  /** Export the snapshot to a JSON string. */
  export(): string {
    return exportSnapshot(this.snapshot());
  }

  /** Import a snapshot from a JSON string. */
  import(json: string): void {
    this.restore(importSnapshot(json));
  }

  /** Dispose of resources (sweepers, etc.). */
  dispose(): void {
    this.working.dispose();
  }
}

export { DEFAULT_CONFIG, DEFAULT_WEIGHTS, effectiveImportance };
