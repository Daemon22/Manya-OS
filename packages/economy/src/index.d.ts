import type { MemorySystem } from '@manya-os/memory';
import type { LedgerChain, ChainVerification } from '@manya-os/ledger';

export interface BalanceStore {
  get(key: string): unknown;
  set(key: string, value: number): void;
}

export interface Economy {
  ownerId: string;
  memorySystem: MemorySystem;
  balanceStore: BalanceStore;
  ledger: LedgerChain;
}

export function createEconomy(ownerId: string, memorySystem: MemorySystem, balanceStore: BalanceStore, startingBalance?: number): Economy;
export function getBalance(economy: Economy): number;
export function trackUsage(economy: Economy, agent: string, amount: number): { balance: number; spent: number };
export function enforceBudget(economy: Economy, amountRequested: number): boolean;
export function routeTier(economy: Economy, complexity: 'low' | 'medium' | 'high', tierMap: { low: string; medium: string; high: string }): string;
export function verifyLedger(economy: Economy): ChainVerification;

export const economy: {
  createEconomy: typeof createEconomy;
  getBalance: typeof getBalance;
  trackUsage: typeof trackUsage;
  enforceBudget: typeof enforceBudget;
  routeTier: typeof routeTier;
  verifyLedger: typeof verifyLedger;
};

export default economy;
