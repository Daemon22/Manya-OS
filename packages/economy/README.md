# @manya-os/economy

Tracks and enforces a shared resource budget—tokens, credits, API calls, or
another unit—with a tamper-evident usage ledger.

Economy uses `@manya-os/ledger` for audit events and `@manya-os/memory` for
episodic notes. The caller provides a balance store scoped to the economy with
synchronous `get(key)` and `set(key, value)` methods. Choose storage with the
durability and security required by your deployment.

## Usage

```js
import { MemorySystem } from '@manya-os/memory';
import { economy } from '@manya-os/economy';

const memorySystem = new MemorySystem({ logLevel: 'silent' });
const balances = new Map();
const balanceStore = {
  get: (key) => balances.get(key),
  set: (key, value) => balances.set(key, value),
};
const budget = economy.createEconomy('household', memorySystem, balanceStore, 1_000_000);

if (economy.enforceBudget(budget, 5000)) {
  economy.trackUsage(budget, 'ara', 5000);
}

const tier = economy.routeTier(budget, 'high', {
  low: 'fast-tier',
  medium: 'balanced-tier',
  high: 'best-tier',
});

economy.verifyLedger(budget); // { valid: true, ... }
```

## Compatibility

Version 2 requires a balance store as the third `createEconomy` argument and a
`MemorySystem` instance as the second. This removes the unavailable Vault
dependency and makes storage durability and security an explicit deployment
choice.

## Why this composition

`@manya-os/ledger` provides the append-only cryptographic chain used for
auditing. Economy records each usage and each budget refusal there, while the
memory system keeps episodic notes for later recall.
