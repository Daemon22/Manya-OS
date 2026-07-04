/**
 * @manya/memory — synchronization between memory instances.
 *
 * Compares two snapshots and produces an apply-able delta.
 *
 * Copyright 2024 Manya Hael Foundation. All rights reserved.
 * Licensed under the Apache License, Version 2.0.
 */

import type { MemorySnapshot, MemoryId } from '../types.js';
import { SyncError } from '../errors.js';

/** A sync delta: ids added/removed/updated on the remote side. */
export interface SyncDelta {
  addedEpisodic: MemoryId[];
  updatedEpisodic: MemoryId[];
  addedSemantic: MemoryId[];
  addedLongTerm: MemoryId[];
  updatedLongTerm: MemoryId[];
  addedLinks: number;
  conflicts: Array<{ id: MemoryId; localTimestamp: number; remoteTimestamp: number }>;
}

/** Compare local vs remote snapshot; returns the delta to apply locally. */
export function computeDelta(local: MemorySnapshot, remote: MemorySnapshot): SyncDelta {
  if (!local || !remote) throw new SyncError('snapshots are required');
  if (local.schemaVersion !== remote.schemaVersion) {
    throw new SyncError(`schema version mismatch: ${local.schemaVersion} vs ${remote.schemaVersion}`);
  }
  const localEpi = new Map(local.episodic.map(e => [e.id, e]));
  const remoteEpi = new Map(remote.episodic.map(e => [e.id, e]));
  const localSem = new Map(local.semantic.map(s => [s.id, s]));
  const remoteSem = new Map(remote.semantic.map(s => [s.id, s]));
  const localLt = new Map(local.longterm.map(r => [r.id, r]));
  const remoteLt = new Map(remote.longterm.map(r => [r.id, r]));

  const delta: SyncDelta = {
    addedEpisodic: [], updatedEpisodic: [],
    addedSemantic: [], addedLongTerm: [], updatedLongTerm: [],
    addedLinks: 0, conflicts: [],
  };

  for (const [id, e] of remoteEpi) {
    if (!localEpi.has(id)) delta.addedEpisodic.push(id);
    else {
      const local = localEpi.get(id)!;
      if (e.timestamp > local.timestamp) delta.updatedEpisodic.push(id);
      else if (e.timestamp < local.timestamp) delta.conflicts.push({ id, localTimestamp: local.timestamp, remoteTimestamp: e.timestamp });
    }
  }
  for (const [id] of remoteSem) if (!localSem.has(id)) delta.addedSemantic.push(id);
  for (const [id, r] of remoteLt) {
    if (!localLt.has(id)) delta.addedLongTerm.push(id);
    else if (r.lastAccessedAt > localLt.get(id)!.lastAccessedAt) delta.updatedLongTerm.push(id);
  }

  // Count new links (those present in remote but not in local).
  const localLinks = new Set(local.links.map(l => `${l.fromId}|${l.toId}|${l.relation}`));
  for (const l of remote.links) {
    if (!localLinks.has(`${l.fromId}|${l.toId}|${l.relation}`)) delta.addedLinks++;
  }
  return delta;
}

/** Apply a snapshot's new/updated records onto a local snapshot (mutates local). */
export function applyDelta(local: MemorySnapshot, remote: MemorySnapshot, delta: SyncDelta): MemorySnapshot {
  const remoteEpi = new Map(remote.episodic.map(e => [e.id, e]));
  const remoteSem = new Map(remote.semantic.map(s => [s.id, s]));
  const remoteLt = new Map(remote.longterm.map(r => [r.id, r]));

  for (const id of [...delta.addedEpisodic, ...delta.updatedEpisodic]) {
    const e = remoteEpi.get(id);
    if (e) {
      const idx = local.episodic.findIndex(x => x.id === id);
      if (idx >= 0) local.episodic[idx] = e;
      else local.episodic.push(e);
    }
  }
  for (const id of delta.addedSemantic) {
    const s = remoteSem.get(id);
    if (s) local.semantic.push(s);
  }
  for (const id of [...delta.addedLongTerm, ...delta.updatedLongTerm]) {
    const r = remoteLt.get(id);
    if (r) {
      const idx = local.longterm.findIndex(x => x.id === id);
      if (idx >= 0) local.longterm[idx] = r;
      else local.longterm.push(r);
    }
  }
  // Merge links.
  const localLinkKeys = new Set(local.links.map(l => `${l.fromId}|${l.toId}|${l.relation}`));
  for (const l of remote.links) {
    const k = `${l.fromId}|${l.toId}|${l.relation}`;
    if (!localLinkKeys.has(k)) local.links.push(l);
  }
  return local;
}
