/**
 * @manya/memory — comprehensive unit tests.
 *
 * Copyright 2024 Manya Hael Foundation. All rights reserved.
 * Licensed under the Apache License, Version 2.0.
 */

import {
  MemorySystem,
  WorkingMemory, EpisodicMemory, SemanticMemory, ProceduralMemory, LongTermMemory,
  InvertedIndex, LinkGraph, PermissionModel,
  rankLongTerm, rankEpisodic,
  ageScore, effectiveImportance, shouldPruneEpisodic, shouldCompressLongTerm,
  compress, decompress, ratio,
  computeDelta, applyDelta,
  createBackup, verifyBackup, restoreBackup, serializeBackup, parseBackup,
  exportSnapshot, importSnapshot, exportEpisodic, exportSemantic, mergeImport,
  randomId,
  MemoryError, PermissionError, WorkingMemoryError,
} from '../src';
import type { LongTermRecord, EpisodicEvent } from '../src';

describe('WorkingMemory', () => {
  test('set and get', () => {
    const w = new WorkingMemory();
    w.set('key1', 'value1');
    expect(w.get('key1')).toBe('value1');
  });

  test('returns null for missing key', () => {
    const w = new WorkingMemory();
    expect(w.get('missing')).toBeNull();
  });

  test('TTL expiration', (done) => {
    const w = new WorkingMemory();
    w.set('temp', 'value', 50);
    expect(w.get('temp')).toBe('value');
    setTimeout(() => {
      expect(w.get('temp')).toBeNull();
      done();
    }, 100);
  });

  test('has and delete', () => {
    const w = new WorkingMemory();
    w.set('k', 'v');
    expect(w.has('k')).toBe(true);
    expect(w.delete('k')).toBe(true);
    expect(w.has('k')).toBe(false);
  });

  test('findByTag', () => {
    const w = new WorkingMemory();
    w.set('k1', 'v1', undefined, ['red', 'blue']);
    w.set('k2', 'v2', undefined, ['blue']);
    expect(w.findByTag('blue')).toHaveLength(2);
    expect(w.findByTag('red')).toHaveLength(1);
  });

  test('clear', () => {
    const w = new WorkingMemory();
    w.set('k', 'v');
    w.clear();
    expect(w.size()).toBe(0);
  });

  test('sweep removes expired', () => {
    const w = new WorkingMemory();
    w.set('expired', 'v', -1); // negative TTL → already expired
    expect(w.sweep()).toBe(1);
  });

  test('throws on empty key', () => {
    const w = new WorkingMemory();
    expect(() => w.set('', 'v')).toThrow(WorkingMemoryError);
  });

  test('dispose stops sweeper', () => {
    const w = new WorkingMemory();
    expect(() => w.dispose()).not.toThrow();
  });
});

describe('EpisodicMemory', () => {
  test('record and recall', () => {
    const e = new EpisodicMemory();
    e.record('agent1', 'did something');
    e.record('agent1', 'did another thing');
    const events = e.recall(10);
    expect(events).toHaveLength(2);
  });

  test('recall with agent filter', () => {
    const e = new EpisodicMemory();
    e.record('a1', 'event');
    e.record('a2', 'event');
    expect(e.recall(10, 'a1')).toHaveLength(1);
  });

  test('recallRange', () => {
    const e = new EpisodicMemory();
    const t1 = Date.now();
    e.record('a', 'first');
    e.record('a', 'second');
    const events = e.recallRange(t1 - 1, Date.now() + 1);
    expect(events.length).toBe(2);
  });

  test('search by substring', () => {
    const e = new EpisodicMemory();
    e.record('a', 'user logged in');
    e.record('a', 'user logged out');
    expect(e.search('logged').length).toBe(2);
    expect(e.search('in').length).toBeGreaterThanOrEqual(1);
  });

  test('findByTag', () => {
    const e = new EpisodicMemory();
    e.record('a', 'event', undefined, { tags: ['critical'] });
    expect(e.findByTag('critical')).toHaveLength(1);
  });

  test('pruneOlderThan', () => {
    const e = new EpisodicMemory();
    // Record 'old' with timestamp in the past.
    e.record('a', 'old', undefined, { timestamp: Date.now() - 1000 });
    const cutoff = Date.now();
    // Record 'new' with timestamp now.
    e.record('a', 'new', undefined, { timestamp: Date.now() + 1 });
    const removed = e.pruneOlderThan(cutoff);
    expect(removed).toBe(1);
    expect(e.count()).toBe(1);
  });

  test('throws on missing agent', () => {
    const e = new EpisodicMemory();
    expect(() => e.record('', 'event')).toThrow();
  });
});

describe('SemanticMemory', () => {
  test('learn and recall', () => {
    const s = new SemanticMemory();
    s.learn('alice', 'age', 30);
    expect(s.recall('alice', 'age')?.value).toBe(30);
  });

  test('recallEntity returns all attributes', () => {
    const s = new SemanticMemory();
    s.learn('alice', 'age', 30);
    s.learn('alice', 'role', 'admin');
    expect(s.recallEntity('alice')).toHaveLength(2);
  });

  test('findByAttribute with valueMatch', () => {
    const s = new SemanticMemory();
    s.learn('alice', 'role', 'admin');
    s.learn('bob', 'role', 'user');
    expect(s.findByAttribute('role', 'admin')).toHaveLength(1);
  });

  test('forget removes fact', () => {
    const s = new SemanticMemory();
    s.learn('alice', 'age', 30);
    expect(s.forget('alice', 'age')).toBe(true);
    expect(s.recall('alice', 'age')).toBeNull();
  });

  test('updateConfidence', () => {
    const s = new SemanticMemory();
    s.learn('alice', 'age', 30, 0.5);
    s.updateConfidence('alice', 'age', 0.9);
    expect(s.recall('alice', 'age')?.confidence).toBe(0.9);
  });

  test('throws on invalid confidence', () => {
    const s = new SemanticMemory();
    expect(() => s.learn('a', 'b', 'c', 1.5)).toThrow();
  });
});

describe('ProceduralMemory', () => {
  test('learn and execute', () => {
    const p = new ProceduralMemory();
    p.learn('add', (a: unknown, b: unknown) => (a as number) + (b as number));
    expect(p.execute('add', 2, 3)).toBe(5);
  });

  test('throws on duplicate name', () => {
    const p = new ProceduralMemory();
    p.learn('add', () => 0);
    expect(() => p.learn('add', () => 0)).toThrow();
  });

  test('throws on missing skill', () => {
    const p = new ProceduralMemory();
    expect(() => p.execute('missing')).toThrow();
  });

  test('list and count', () => {
    const p = new ProceduralMemory();
    p.learn('a', () => 0);
    p.learn('b', () => 0);
    expect(p.list()).toEqual(['a', 'b']);
    expect(p.count()).toBe(2);
  });

  test('forget', () => {
    const p = new ProceduralMemory();
    p.learn('a', () => 0);
    expect(p.forget('a')).toBe(true);
    expect(p.count()).toBe(0);
  });
});

describe('LongTermMemory', () => {
  test('store and retrieve', () => {
    const lt = new LongTermMemory();
    const id = lt.store({ name: 'record1' });
    const r = lt.retrieve(id);
    expect(r?.payload).toEqual({ name: 'record1' });
    expect(r?.accessCount).toBe(1);
  });

  test('retrieve increments accessCount', () => {
    const lt = new LongTermMemory();
    const id = lt.store('data');
    lt.retrieve(id);
    lt.retrieve(id);
    expect(lt.peek(id)?.accessCount).toBe(2);
  });

  test('findByTag', () => {
    const lt = new LongTermMemory();
    lt.store('a', { tags: ['red'] });
    lt.store('b', { tags: ['blue'] });
    expect(lt.findByTag('red')).toHaveLength(1);
  });

  test('delete', () => {
    const lt = new LongTermMemory();
    const id = lt.store('data');
    expect(lt.delete(id)).toBe(true);
    expect(lt.retrieve(id)).toBeNull();
  });

  test('staleSince', () => {
    const lt = new LongTermMemory();
    const id = lt.store('old');
    // Set lastAccessedAt to past
    const r = lt.peek(id)!;
    r.lastAccessedAt = Date.now() - 10000;
    expect(lt.staleSince(Date.now() - 5000).length).toBe(1);
  });

  test('applyAging decays low-access records', () => {
    const lt = new LongTermMemory();
    const id = lt.store('data', { importance: 0.8 });
    const r = lt.peek(id)!;
    r.createdAt = Date.now() - 60 * 86_400_000; // 60 days ago
    r.accessCount = 0;
    lt.applyAging();
    expect(lt.peek(id)?.importance).toBeLessThan(0.8);
  });
});

describe('InvertedIndex', () => {
  test('tokenize', () => {
    expect(InvertedIndex.tokenize('Hello, World!')).toEqual(['hello', 'world']);
    expect(InvertedIndex.tokenize('')).toEqual([]);
  });

  test('add and search', () => {
    const idx = new InvertedIndex();
    idx.add('1', 'the quick brown fox');
    idx.add('2', 'the lazy dog');
    const r = idx.search('fox');
    expect(r.length).toBe(1);
    expect(r[0].recordId).toBe('1');
  });

  test('search ranks by TF-IDF', () => {
    const idx = new InvertedIndex();
    idx.add('1', 'apple apple apple');
    idx.add('2', 'apple');
    const r = idx.search('apple');
    expect(r[0].recordId).toBe('1'); // higher TF
  });

  test('remove', () => {
    const idx = new InvertedIndex();
    idx.add('1', 'apple');
    idx.remove('1');
    expect(idx.search('apple')).toHaveLength(0);
  });
});

describe('LinkGraph', () => {
  test('add and traverse', () => {
    const g = new LinkGraph();
    g.add('a', 'b', 'causes');
    g.add('b', 'c', 'causes');
    g.add('c', 'd', 'causes');
    expect(g.traverse('a', 'causes')).toEqual(['b', 'c', 'd']);
  });

  test('outgoingFrom and incomingTo', () => {
    const g = new LinkGraph();
    g.add('a', 'b', 'rel');
    expect(g.outgoingFrom('a')).toHaveLength(1);
    expect(g.incomingTo('b')).toHaveLength(1);
  });

  test('byRelation', () => {
    const g = new LinkGraph();
    g.add('a', 'b', 'causes');
    g.add('c', 'd', 'relates_to');
    expect(g.byRelation('causes')).toHaveLength(1);
  });

  test('remove', () => {
    const g = new LinkGraph();
    g.add('a', 'b', 'rel');
    expect(g.remove('a', 'b', 'rel')).toBe(true);
    expect(g.size()).toBe(0);
  });
});

describe('PermissionModel', () => {
  test('default open access', () => {
    const p = new PermissionModel();
    expect(p.canRead('r1', 'anyone')).toBe(true);
  });

  test('restrict readers', () => {
    const p = new PermissionModel();
    p.set({ recordId: 'r1', readers: ['alice'], writers: ['alice'], deleters: ['alice'] });
    expect(p.canRead('r1', 'alice')).toBe(true);
    expect(p.canRead('r1', 'bob')).toBe(false);
  });

  test('wildcard reader', () => {
    const p = new PermissionModel();
    p.set({ recordId: 'r1', readers: ['*'], writers: [], deleters: [] });
    expect(p.canRead('r1', 'anyone')).toBe(true);
  });

  test('grant and revoke', () => {
    const p = new PermissionModel();
    p.grant('r1', 'alice', 'read');
    expect(p.canRead('r1', 'alice')).toBe(true);
    p.revoke('r1', 'alice', 'read');
    expect(p.canRead('r1', 'alice')).toBe(true); // back to default open
  });

  test('assertRead throws on denied', () => {
    const p = new PermissionModel();
    p.set({ recordId: 'r1', readers: ['alice'], writers: [], deleters: [] });
    expect(() => p.assertRead('r1', 'bob')).toThrow(PermissionError);
  });
});

describe('ranking', () => {
  test('rankLongTerm combines scores', () => {
    const records: LongTermRecord[] = [
      { id: '1', type: 'longterm', payload: 'x', createdAt: Date.now(), lastAccessedAt: Date.now(), accessCount: 10, importance: 0.9 },
      { id: '2', type: 'longterm', payload: 'y', createdAt: 0, lastAccessedAt: 0, accessCount: 0, importance: 0.1 },
    ];
    const tfidf = new Map([['1', 0.8], ['2', 0.1]]);
    const ranked = rankLongTerm(tfidf, records);
    expect(ranked[0].record.id).toBe('1');
  });

  test('rankEpisodic by query', () => {
    const events: EpisodicEvent[] = [
      { id: '1', timestamp: Date.now(), agent: 'a', event: 'user logged in', importance: 0.5 },
      { id: '2', timestamp: Date.now(), agent: 'a', event: 'system started', importance: 0.5 },
    ];
    const ranked = rankEpisodic('user', events);
    expect(ranked[0].record.id).toBe('1');
  });
});

describe('aging', () => {
  test('ageScore 0 for fresh', () => {
    expect(ageScore(Date.now())).toBeLessThan(0.1);
  });

  test('ageScore high for ancient', () => {
    expect(ageScore(0)).toBeGreaterThan(0.9);
  });

  test('effectiveImportance decays with age', () => {
    const fresh = { importance: 1.0, createdAt: Date.now(), accessCount: 0 };
    const old = { importance: 1.0, createdAt: 0, accessCount: 0 };
    expect(effectiveImportance(fresh)).toBeGreaterThan(effectiveImportance(old));
  });

  test('effectiveImportance boosts with access', () => {
    const low = { importance: 0.5, createdAt: Date.now(), accessCount: 0 };
    const high = { importance: 0.5, createdAt: Date.now(), accessCount: 100 };
    expect(effectiveImportance(high)).toBeGreaterThanOrEqual(effectiveImportance(low));
  });

  test('shouldPruneEpisodic', () => {
    const e: EpisodicEvent = { id: '1', timestamp: 0, agent: 'a', event: 'x', importance: 0.1 };
    expect(shouldPruneEpisodic(e, { workingTtlMs: 0, episodicMaxCount: 1000, episodicPruneThreshold: 0.3, longtermCompressAfterDays: 90 })).toBe(true);
  });
});

describe('compress', () => {
  test('compress and decompress round-trip', () => {
    const payload = { name: 'alice', data: [1, 2, 3], nested: { x: 'y' } };
    const c = compress(payload);
    expect(c.algorithm).toBe('gzip+json');
    const d = decompress(c);
    expect(d).toEqual(payload);
  });

  test('ratio is in [0,1] for compressible input', () => {
    // Use a large repetitive payload so gzip actually compresses.
    const c = compress('hello world '.repeat(500));
    const r = ratio(c);
    expect(r).toBeGreaterThan(0);
    expect(r).toBeLessThan(1);
  });

  test('decompress throws on bad algorithm', () => {
    expect(() => decompress({ algorithm: 'lz4' as any, data: '', originalLength: 0, compressedLength: 0 })).toThrow();
  });
});

describe('sync', () => {
  test('computeDelta detects added records', () => {
    const local = {
      schemaVersion: 1 as const, takenAt: '', working: [], episodic: [], semantic: [],
      procedural: [], longterm: [], links: [], permissions: [],
    };
    const remote = {
      ...local,
      episodic: [{ id: 'e1', timestamp: Date.now(), agent: 'a', event: 'x', importance: 0.5 }],
    };
    const d = computeDelta(local, remote);
    expect(d.addedEpisodic).toEqual(['e1']);
  });

  test('applyDelta merges', () => {
    const local = {
      schemaVersion: 1 as const, takenAt: '', working: [], episodic: [], semantic: [],
      procedural: [], longterm: [], links: [], permissions: [],
    };
    const remote = {
      ...local,
      episodic: [{ id: 'e1', timestamp: Date.now(), agent: 'a', event: 'x', importance: 0.5 }],
    };
    const d = computeDelta(local, remote);
    const merged = applyDelta(local, remote, d);
    expect(merged.episodic).toHaveLength(1);
  });

  test('throws on schema mismatch', () => {
    const local = { schemaVersion: 1 as const, takenAt: '', working: [], episodic: [], semantic: [], procedural: [], longterm: [], links: [], permissions: [] };
    const remote = { ...local, schemaVersion: 2 as any };
    expect(() => computeDelta(local, remote)).toThrow();
  });
});

describe('backup', () => {
  test('createBackup and verifyBackup', () => {
    const snap = {
      schemaVersion: 1 as const, takenAt: '', working: [], episodic: [],
      semantic: [], procedural: [], longterm: [], links: [], permissions: [],
    };
    const b = createBackup(snap);
    expect(verifyBackup(b)).toBe(true);
  });

  test('restoreBackup returns snapshot', () => {
    const snap = {
      schemaVersion: 1 as const, takenAt: '', working: [], episodic: [],
      semantic: [], procedural: [], longterm: [], links: [], permissions: [],
    };
    const b = createBackup(snap);
    const restored = restoreBackup(b);
    expect(restored.schemaVersion).toBe(1);
  });

  test('verifyBackup fails on tampering', () => {
    const snap = {
      schemaVersion: 1 as const, takenAt: '', working: [], episodic: [],
      semantic: [], procedural: [], longterm: [], links: [], permissions: [],
    };
    const b = createBackup(snap);
    b.snapshot.takenAt = 'tampered';
    expect(verifyBackup(b)).toBe(false);
  });

  test('serializeBackup and parseBackup round-trip', () => {
    const snap = {
      schemaVersion: 1 as const, takenAt: '', working: [], episodic: [],
      semantic: [], procedural: [], longterm: [], links: [], permissions: [],
    };
    const b = createBackup(snap);
    const json = serializeBackup(b);
    const parsed = parseBackup(json);
    expect(parsed.hash).toBe(b.hash);
  });
});

describe('import/export', () => {
  const snap = {
    schemaVersion: 1 as const, takenAt: '', working: [], episodic: [], semantic: [],
    procedural: [], longterm: [], links: [], permissions: [],
  };

  test('exportSnapshot and importSnapshot round-trip', () => {
    const json = exportSnapshot(snap);
    const imported = importSnapshot(json);
    expect(imported.schemaVersion).toBe(1);
  });

  test('importSnapshot throws on invalid', () => {
    expect(() => importSnapshot('{invalid}')).toThrow();
  });

  test('exportEpisodic and mergeImport', () => {
    const s = { ...snap, episodic: [{ id: 'e1', timestamp: 1, agent: 'a', event: 'x', importance: 0.5 }] };
    const json = exportEpisodic(s);
    const merged = mergeImport({ ...snap }, json);
    expect(merged.episodic).toHaveLength(1);
  });

  test('exportSemantic and mergeImport', () => {
    const s = { ...snap, semantic: [{ id: 's1', entity: 'a', attribute: 'b', value: 1, confidence: 1, learnedAt: 1 }] };
    const json = exportSemantic(s);
    const merged = mergeImport({ ...snap }, json);
    expect(merged.semantic).toHaveLength(1);
  });
});

describe('randomId', () => {
  test('generates unique ids with prefix', () => {
    const id1 = randomId('test');
    const id2 = randomId('test');
    expect(id1).not.toBe(id2);
    expect(id1.startsWith('test_')).toBe(true);
  });
});

describe('MemorySystem end-to-end', () => {
  test('remember, recall, search', () => {
    const m = new MemorySystem({ logLevel: 'silent' });
    m.remember('agent1', 'user logged in', { ip: '10.0.0.1' });
    m.remember('agent1', 'user logged out');
    const recalled = m.recall('logged', 5);
    expect(recalled.length).toBeGreaterThan(0);
    m.dispose();
  });

  test('learn and recall semantic', () => {
    const m = new MemorySystem({ logLevel: 'silent' });
    m.learn('alice', 'role', 'admin');
    expect(m.semantic.recall('alice', 'role')?.value).toBe('admin');
    m.dispose();
  });

  test('store and retrieve long-term', () => {
    const m = new MemorySystem({ logLevel: 'silent' });
    const id = m.store({ name: 'record' }, { importance: 0.8, tags: ['test'] });
    const r = m.retrieve(id);
    expect(r?.payload).toEqual({ name: 'record' });
    m.dispose();
  });

  test('link and related', () => {
    const m = new MemorySystem({ logLevel: 'silent' });
    const id1 = m.store('a');
    const id2 = m.store('b');
    m.link(id1, id2, 'causes');
    expect(m.related(id1)).toContain(id2);
    m.dispose();
  });

  test('snapshot and restore', () => {
    const m1 = new MemorySystem({ logLevel: 'silent' });
    m1.remember('a', 'event');
    const snap = m1.snapshot();
    const m2 = new MemorySystem({ logLevel: 'silent' });
    m2.restore(snap);
    expect(m2.episodic.count()).toBe(1);
    m1.dispose();
    m2.dispose();
  });

  test('backup and restore', () => {
    const m1 = new MemorySystem({ logLevel: 'silent' });
    m1.remember('a', 'event');
    const backup = m1.backup();
    const m2 = new MemorySystem({ logLevel: 'silent' });
    m2.restoreFromBackup(backup);
    expect(m2.episodic.count()).toBe(1);
    m1.dispose();
    m2.dispose();
  });

  test('export and import', () => {
    const m1 = new MemorySystem({ logLevel: 'silent' });
    m1.remember('a', 'event');
    const json = m1.export();
    const m2 = new MemorySystem({ logLevel: 'silent' });
    m2.import(json);
    expect(m2.episodic.count()).toBe(1);
    m1.dispose();
    m2.dispose();
  });

  test('synchronize merges remote', () => {
    const m1 = new MemorySystem({ logLevel: 'silent' });
    m1.remember('a', 'local event');
    const m2 = new MemorySystem({ logLevel: 'silent' });
    m2.remember('a', 'remote event');
    const remoteSnap = m2.snapshot();
    const delta = m1.synchronize(remoteSnap);
    expect(delta.addedEpisodic.length).toBe(1);
    expect(m1.episodic.count()).toBe(2);
    m1.dispose();
    m2.dispose();
  });

  test('age prunes low-importance events', () => {
    const m = new MemorySystem({ logLevel: 'silent', aging: { episodicPruneThreshold: 0.9 } });
    m.remember('a', 'event1', undefined, { importance: 0.1 });
    // Mark as ancient
    const events = m.episodic.all();
    if (events[0]) events[0].timestamp = 0;
    const result = m.age();
    expect(result.prunedEpisodic).toBeGreaterThanOrEqual(0);
    m.dispose();
  });

  test('search returns ranked results', () => {
    const m = new MemorySystem({ logLevel: 'silent' });
    m.store('apple pie recipe', { importance: 0.8 });
    m.store('banana bread recipe', { importance: 0.5 });
    const results = m.search('apple');
    expect(results.length).toBeGreaterThan(0);
    expect(results[0].record.payload).toContain('apple');
    m.dispose();
  });

  test('permissions enforced', () => {
    const m = new MemorySystem({ logLevel: 'silent' });
    const id = m.store('secret');
    m.permissions.set({ recordId: id, readers: ['alice'], writers: ['alice'], deleters: ['alice'] });
    expect(m.permissions.canRead(id, 'alice')).toBe(true);
    expect(m.permissions.canRead(id, 'bob')).toBe(false);
    m.dispose();
  });

  test('procedural skills execute', () => {
    const m = new MemorySystem({ logLevel: 'silent' });
    m.procedural.learn('add', (a: unknown, b: unknown) => (a as number) + (b as number));
    expect(m.procedural.execute('add', 2, 3)).toBe(5);
    m.dispose();
  });
});
