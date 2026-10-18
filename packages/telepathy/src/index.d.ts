import type { MemorySystem } from '@manya-os/memory';
import type { KeyringWallet, Identity } from '@manya-os/keyring';

export interface TelepathyBus {
  publish(channel: string, event: object): void | Promise<void>;
  subscribe(channel: string, handler: (event: any) => void | Promise<void>, options?: object): () => void;
}

export interface Telepathy {
  wallet: KeyringWallet;
  identity: Identity;
  memorySystem: MemorySystem;
  bus: TelepathyBus;
  contacts: Map<string, { publicKey: string; algorithm: string }>;
}

export function createTelepathy(wallet: KeyringWallet, identity: Identity, memorySystem: MemorySystem, bus: TelepathyBus): Telepathy;
export function registerContact(telepathy: Telepathy, identity: Identity): void;
export function send(telepathy: Telepathy, targetAgentId: string, payload: unknown): Promise<object>;
export function listen(
  telepathy: Telepathy,
  handler: (message: { from: string; payload: unknown }) => void
): () => void;

export const telepathy: {
  createTelepathy: typeof createTelepathy;
  registerContact: typeof registerContact;
  send: typeof send;
  listen: typeof listen;
};

export default telepathy;
