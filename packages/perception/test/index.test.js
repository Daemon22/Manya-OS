import { test } from 'node:test';
import assert from 'node:assert/strict';
import { MemorySystem } from '@manya-os/memory';
import { perception } from '../src/index.js';

const redactor = {
  redact(text) {
    const matches = [...text.matchAll(/\b(?:\d{3}-\d{3}-\d{4}|[\w.+-]+@[\w.-]+\.[A-Za-z]{2,})\b/g)];
    let redacted = text;
    for (const match of matches) redacted = redacted.replace(match[0], '[REDACTED]');
    return { redacted, count: matches.length, found: matches.map(([value]) => ({ value })) };
  },
  classify(text) {
    return { level: /confidential/i.test(text) ? 'confidential' : 'public', score: 0 };
  },
};
const environmentProvider = {
  snapshot: () => ({ device: { type: 'test' }, capabilities: {}, fingerprint: {}, timestamp: 1 }),
};

function setup() {
  const store = new MemorySystem({ logLevel: 'silent' });
  return { store, p: perception.createPerception(store, { redactor, environmentProvider }) };
}

test('ingestText redacts PII before it reaches working memory', () => {
  const { store, p } = setup();
  const result = perception.ingestText(p, 'sms', 'call me at 555-123-4567 or jane@example.com');
  assert.equal(result.redactionCount, 2);
  assert.ok(!result.stored.includes('555-123-4567'));
  assert.ok(!result.stored.includes('jane@example.com'));
  assert.equal(store.working.get('perception:text:sms'), result.stored);
});

test('ingestText fails closed without a privacy adapter', () => {
  const store = new MemorySystem({ logLevel: 'silent' });
  const p = perception.createPerception(store);
  assert.throws(() => perception.ingestText(p, 'sms', 'sensitive text'), /requires a redactor/);
  assert.equal(store.working.get('perception:text:sms'), null);
});

test('ingestText classifies sensitivity', () => {
  const { p } = setup();
  const result = perception.ingestText(p, 'doc', 'this document is confidential and proprietary');
  assert.equal(result.sensitivity.level, 'confidential');
});

test('ingestStructured stores JSON-serializable data', () => {
  const { store, p } = setup();
  assert.equal(perception.ingestStructured(p, 'sensor', { temp: 21.5, unit: 'C' }), true);
  assert.deepEqual(store.working.get('perception:data:sensor'), { temp: 21.5, unit: 'C' });
});

test('ingestStructured fails gracefully on circular data', () => {
  const { p } = setup();
  const circular = {};
  circular.self = circular;
  assert.equal(perception.ingestStructured(p, 'bad', circular), false);
});

test('perceiveEnvironment stores a device snapshot', () => {
  const { store, p } = setup();
  const snapshot = perception.perceiveEnvironment(p, {});
  assert.ok(snapshot.device);
  assert.ok(snapshot.fingerprint);
  assert.deepEqual(store.working.get('perception:environment'), snapshot);
});

test('perceiveEnvironment requires an environment provider', () => {
  const p = perception.createPerception(new MemorySystem({ logLevel: 'silent' }));
  assert.throws(() => perception.perceiveEnvironment(p, {}), /requires an environment provider/);
});

test('every ingestion is remembered episodically', () => {
  const { store, p } = setup();
  perception.ingestText(p, 'sms', 'hello there');
  const episodes = store.episodic.all().filter((e) => e.agent === 'Perception');
  assert.equal(episodes.length, 1);
  assert.match(episodes[0].event, /Ingested text from sms/);
});
