/**
 * @manya/memory — synchronization between memory instances.
 *
 * Compares two snapshots and produces an apply-able delta.
 *
 * Copyright 2024 Manya Hael Foundation. All rights reserved.
 * Licensed under the Apache License, Version 2.0.
 */
import type { MemorySnapshot, MemoryId } from '../types.js';
/** A sync delta: ids added/removed/updated on the remote side. */
export interface SyncDelta {
    addedEpisodic: MemoryId[];
    updatedEpisodic: MemoryId[];
    addedSemantic: MemoryId[];
    addedLongTerm: MemoryId[];
    updatedLongTerm: MemoryId[];
    addedLinks: number;
    conflicts: Array<{
        id: MemoryId;
        localTimestamp: number;
        remoteTimestamp: number;
    }>;
}
/** Compare local vs remote snapshot; returns the delta to apply locally. */
export declare function computeDelta(local: MemorySnapshot, remote: MemorySnapshot): SyncDelta;
/** Apply a snapshot's new/updated records onto a local snapshot (mutates local). */
export declare function applyDelta(local: MemorySnapshot, remote: MemorySnapshot, delta: SyncDelta): MemorySnapshot;
//# sourceMappingURL=sync.d.ts.map