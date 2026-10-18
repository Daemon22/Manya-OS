import { test } from 'node:test';
import assert from 'node:assert/strict';
import { KeyringWallet } from '@manya-os/keyring';
import { MemorySystem } from '@manya-os/memory';
import { telepathy } from '../src/index.js';

function createBus() {
  const subscribers = new Map();
  return {
    async publish(channel, event) {
      await Promise.all([...(subscribers.get(channel) ?? [])].map((handler) => handler(event)));
    },
    subscribe(channel, handler) {
      const handlers = subscribers.get(channel) ?? new Set();
      handlers.add(handler);
      subscribers.set(channel, handlers);
      return () => handlers.delete(handler);
    },
  };
}

async function setup(bus) {
  const wallet = new KeyringWallet();
  const identity = await wallet.createIdentity();
  const memorySystem = new MemorySystem({ logLevel: 'silent' });
  return { wallet, identity, memorySystem, tp: telepathy.createTelepathy(wallet, identity, memorySystem, bus) };
}

test('delivers a verified message to a known contact over the shared bus', async () => {
  const bus = createBus();
  const ara = await setup(bus);
  const atlas = await setup(bus);
  telepathy.registerContact(ara.tp, atlas.identity);
  telepathy.registerContact(atlas.tp, ara.identity);

  const received = [];
  telepathy.listen(atlas.tp, (msg) => received.push(msg));
  await telepathy.send(ara.tp, atlas.identity.id, { note: 'device provisioned' });

  assert.deepEqual(received, [{ from: ara.identity.id, payload: { note: 'device provisioned' } }]);
});

test('blocks a message from an unregistered sender', async () => {
  const bus = createBus();
  const ara = await setup(bus);
  const stranger = await setup(bus);
  const received = [];
  telepathy.listen(ara.tp, (msg) => received.push(msg));
  await telepathy.send(stranger.tp, ara.identity.id, { note: 'should be blocked' });

  assert.equal(received.length, 0);
  assert.ok(ara.memorySystem.episodic.all().some((e) => /unknown sender/.test(e.event)));
});

test('blocks a message with a forged sender field', async () => {
  const bus = createBus();
  const ara = await setup(bus);
  const atlas = await setup(bus);
  const impostor = await setup(bus);
  telepathy.registerContact(atlas.tp, ara.identity);

  const serializedPayload = JSON.stringify({ note: 'forged' });
  const signed = await impostor.wallet.sign(Buffer.from(JSON.stringify({
    sender: ara.identity.id,
    recipient: atlas.identity.id,
    payload: serializedPayload,
  })), impostor.identity.id);
  const forgedEnvelope = {
    sender: ara.identity.id,
    recipient: atlas.identity.id,
    payload: serializedPayload,
    algorithm: signed.algorithm,
    signature: signed.signature,
  };

  const received = [];
  telepathy.listen(atlas.tp, (msg) => received.push(msg));
  await bus.publish(`telepathy:${atlas.identity.id}`, { type: 'telepathy', payload: forgedEnvelope });

  assert.equal(received.length, 0);
  assert.ok(atlas.memorySystem.episodic.all().some((e) => /unverified message/.test(e.event)));
});

test('sends are remembered in the sender episodic memory', async () => {
  const bus = createBus();
  const ara = await setup(bus);
  await telepathy.send(ara.tp, 'atlas', { note: 'hello' });

  assert.ok(ara.memorySystem.episodic.all().some((e) => /sent to atlas/.test(e.event)));
});

test('requires a shared event bus', async () => {
  const wallet = new KeyringWallet();
  const identity = await wallet.createIdentity();
  const memorySystem = new MemorySystem({ logLevel: 'silent' });
  assert.throws(() => telepathy.createTelepathy(wallet, identity, memorySystem), /shared bus/);
});
