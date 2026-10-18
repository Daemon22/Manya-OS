import { test } from 'node:test';
import assert from 'node:assert/strict';
import { MemorySystem } from '@manya-os/memory';
import { economy } from '../src/index.js';

function setup(startingBalance = 1000, values = new Map()) {
  const memorySystem = new MemorySystem({ logLevel: 'silent' });
  const balanceStore = {
    get: (key) => values.get(key),
    set: (key, value) => values.set(key, value),
  };
  return { memorySystem, balanceStore, eco: economy.createEconomy('ara', memorySystem, balanceStore, startingBalance) };
}

test('tracks usage and decrements balance', () => {
  const { eco } = setup(1000);
  const { balance, spent } = economy.trackUsage(eco, 'ara', 200);
  assert.equal(spent, 200);
  assert.equal(balance, 800);
  assert.equal(economy.getBalance(eco), 800);
});

test('enforceBudget blocks a request that exceeds the balance', () => {
  const { eco, memorySystem } = setup(100);
  assert.equal(economy.enforceBudget(eco, 50), true);
  assert.equal(economy.enforceBudget(eco, 500), false);
  assert.ok(memorySystem.episodic.all().some((e) => /Blocked action requiring 500/.test(e.event)));
});

test('routeTier uses the caller-supplied tier map', () => {
  const { eco } = setup();
  const tiers = { low: 'tier-a', medium: 'tier-b', high: 'tier-c' };
  assert.equal(economy.routeTier(eco, 'high', tiers), 'tier-c');
  assert.throws(() => economy.routeTier(eco, 'ultra', tiers), /No tier configured/);
});

test('usage ledger is tamper-evident', () => {
  const { eco } = setup(1000);
  economy.trackUsage(eco, 'ara', 100);
  economy.trackUsage(eco, 'atlas', 50);
  assert.equal(economy.verifyLedger(eco).valid, true);
  eco.ledger.get(2).prevHash = 'tampered';
  assert.equal(economy.verifyLedger(eco).valid, false);
});

test('reuses a stored balance when an economy is reopened', () => {
  const { balanceStore } = setup(1000);
  const first = economy.createEconomy('ara', new MemorySystem({ logLevel: 'silent' }), balanceStore, 1000);
  economy.trackUsage(first, 'ara', 250);
  const reopened = economy.createEconomy('ara', new MemorySystem({ logLevel: 'silent' }), balanceStore, 1000);
  assert.equal(economy.getBalance(reopened), 750);
});

test('validates balance storage and usage values', () => {
  assert.throws(() => economy.createEconomy('ara', new MemorySystem(), {}, 100), /balance store/);
  const { eco } = setup();
  assert.throws(() => economy.trackUsage(eco, 'ara', Infinity), /non-negative finite number/);
  assert.throws(() => economy.enforceBudget(eco, -1), /non-negative finite number/);
});
