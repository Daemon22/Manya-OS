/**
 * Manya Economy — budget tracking with caller-provided balance storage.
 *
 * Ledger events are recorded with @manya-os/ledger, while @manya-os/memory
 * stores episodic explanations. The caller chooses balance-store durability
 * and security for the deployment.
 */

import { LedgerChain, verifyChain } from '@manya-os/ledger';
import { MemorySystem } from '@manya-os/memory';

/**
 * Creates a budget for an owner.
 * @param {string} ownerId - Unique identifier for this budget.
 * @param {MemorySystem} memorySystem - The Manya-OS memory system.
 * @param {{get(key: string): unknown, set(key: string, value: number): void}} balanceStore - Caller-provided storage scoped to this budget.
 * @param {number} [startingBalance=1000000] - Initial balance, used only if no balance is stored.
 * @returns {object} An economy instance.
 */
export function createEconomy(ownerId, memorySystem, balanceStore, startingBalance = 1000000) {
  if (!ownerId || typeof ownerId !== 'string') throw new Error('ownerId is required');
  if (!memorySystem || typeof memorySystem.remember !== 'function') throw new Error('createEconomy requires a MemorySystem');
  if (!balanceStore || typeof balanceStore.get !== 'function' || typeof balanceStore.set !== 'function') {
    throw new Error('createEconomy requires a balance store with get and set methods');
  }
  if (!Number.isFinite(startingBalance) || startingBalance < 0) {
    throw new Error('startingBalance must be a non-negative finite number');
  }

  const storedBalance = balanceStore.get('balance');
  if (storedBalance === undefined) {
    balanceStore.set('balance', startingBalance);
  } else if (typeof storedBalance !== 'number' || !Number.isFinite(storedBalance)) {
    throw new Error('balance store contains an invalid balance');
  }

  const economy = { ownerId, memorySystem, balanceStore, ledger: new LedgerChain() };
  memorySystem.remember('Economy', `Initialized with balance ${balanceStore.get('balance')}`);
  return economy;
}

/** Returns the current balance. */
export function getBalance(economy) {
  return economy.balanceStore.get('balance');
}

/**
 * Records actual usage, even if it drives the balance negative.
 * @param {object} economy - The economy instance.
 * @param {string} agent - Who used the resource.
 * @param {number} amount - Non-negative quantity used.
 * @returns {{ balance: number, spent: number }}
 */
export function trackUsage(economy, agent, amount) {
  if (typeof amount !== 'number' || !Number.isFinite(amount) || amount < 0) {
    throw new Error('amount must be a non-negative finite number');
  }
  const balance = getBalance(economy) - amount;
  economy.balanceStore.set('balance', balance);
  economy.ledger.append('usage', agent, { amount, balance });
  economy.memorySystem.remember(agent, `Used ${amount}. Remaining balance: ${balance}.`);
  return { balance, spent: amount };
}

/** Checks whether a requested amount fits without spending it. */
export function enforceBudget(economy, amountRequested) {
  if (typeof amountRequested !== 'number' || !Number.isFinite(amountRequested) || amountRequested < 0) {
    throw new Error('amountRequested must be a non-negative finite number');
  }
  const balance = getBalance(economy);
  if (amountRequested > balance) {
    economy.ledger.append('budget-exceeded', economy.ownerId, { amountRequested, balance });
    economy.memorySystem.remember('Economy', `Blocked action requiring ${amountRequested}, balance is ${balance}.`);
    return false;
  }
  return true;
}

/** Picks a tier for a task from a caller-supplied map. */
export function routeTier(economy, complexity, tierMap) {
  if (!tierMap || !tierMap[complexity]) {
    throw new Error(`No tier configured for complexity "${complexity}"`);
  }
  const tier = tierMap[complexity];
  economy.memorySystem.remember('Economy', `Routed ${complexity}-complexity task to tier ${tier}.`);
  return tier;
}

/** Verifies the economy's usage ledger. */
export function verifyLedger(economy) {
  return verifyChain(economy.ledger.all());
}

export const economy = {
  createEconomy,
  getBalance,
  trackUsage,
  enforceBudget,
  routeTier,
  verifyLedger,
};

export default economy;
