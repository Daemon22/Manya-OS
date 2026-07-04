/**
 * @manya/memory — the unified memory facade.
 *
 * Wires together all subsystems: working, episodic, semantic, procedural,
 * long-term, index, links, ranking, permissions, aging, sync, backup, I/O.
 *
 * Copyright 2024 Manya Hael Foundation. All rights reserved.
 * Licensed under the Apache License, Version 2.0.
 */
import type { EpisodicEvent, LongTermRecord, MemoryId, MemorySnapshot, RetrievalResult } from './types.js';
import { WorkingMemory } from './working/working.js';
import { EpisodicMemory } from './episodic/episodic.js';
import { SemanticMemory } from './semantic/semantic.js';
import { ProceduralMemory } from './procedural/procedural.js';
import { LongTermMemory } from './longterm/longterm.js';
import { InvertedIndex } from './index/index.js';
import { LinkGraph } from './link/link.js';
import { PermissionModel } from './permissions/permissions.js';
import { DEFAULT_WEIGHTS } from './rank/rank.js';
import { effectiveImportance } from './aging/aging.js';
import { DEFAULT_CONFIG } from './config/config.js';
import type { MemoryConfig } from './config/config.js';
export declare class MemorySystem {
    readonly working: WorkingMemory;
    readonly episodic: EpisodicMemory;
    readonly semantic: SemanticMemory;
    readonly procedural: ProceduralMemory;
    readonly longterm: LongTermMemory;
    readonly index: InvertedIndex;
    readonly links: LinkGraph;
    readonly permissions: PermissionModel;
    private readonly config;
    private readonly logger;
    constructor(config?: MemoryConfig);
    /** Record an episodic event AND index it. */
    remember(agent: string, event: string, context?: Record<string, unknown>, opts?: {
        importance?: number;
        tags?: string[];
        source?: string;
    }): string;
    /** Recall events by query. Returns ranked results. */
    recall(query: string, limit?: number): RetrievalResult<EpisodicEvent>[];
    /** Learn a semantic fact AND index it. */
    learn(entity: string, attribute: string, value: unknown, confidence?: number, source?: string): string;
    /** Store a long-term record AND index it. */
    store(payload: unknown, opts?: {
        type?: 'longterm';
        importance?: number;
        tags?: string[];
        source?: string;
        id?: string;
    }): string;
    /** Retrieve a long-term record (updates access stats). */
    retrieve(id: string): LongTermRecord | null;
    /** Unified search across all memory types. Returns ranked long-term records. */
    search(query: string, limit?: number): RetrievalResult<LongTermRecord>[];
    /** Link two records. */
    link(fromId: MemoryId, toId: MemoryId, relation: string, weight?: number): boolean;
    /** Find related records via links. */
    related(id: MemoryId, relation?: string, maxDepth?: number): MemoryId[];
    /** Run aging: prune low-importance episodic events, decay long-term importance. */
    age(now?: number): {
        prunedEpisodic: number;
        agedLongTerm: number;
    };
    /** Snapshot the entire memory state. */
    snapshot(): MemorySnapshot;
    /** Restore from a snapshot. */
    restore(snapshot: MemorySnapshot): void;
    /** Backup the current state. */
    backup(): import("./backup/backup.js").Backup;
    /** Restore from a backup. */
    restoreFromBackup(backup: ReturnType<MemorySystem['backup']>): void;
    /** Synchronize with a remote snapshot. Returns the applied delta. */
    synchronize(remoteSnapshot: MemorySnapshot): import("./sync/sync.js").SyncDelta;
    /** Export the snapshot to a JSON string. */
    export(): string;
    /** Import a snapshot from a JSON string. */
    import(json: string): void;
    /** Dispose of resources (sweepers, etc.). */
    dispose(): void;
}
export { DEFAULT_CONFIG, DEFAULT_WEIGHTS, effectiveImportance };
//# sourceMappingURL=memory.d.ts.map