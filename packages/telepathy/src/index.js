/**
 * Manya Telepathy — signed, verifiable inter-agent messaging.
 *
 * Uses KeyringWallet for signatures, MemorySystem for audit notes, and a
 * caller-provided shared event bus for delivery.
 */

import { KeyringWallet } from '@manya-os/keyring';
import { MemorySystem } from '@manya-os/memory';

/**
 * Creates a telepathy instance for one identity.
 * @param {KeyringWallet} wallet - Wallet holding the sender's private key.
 * @param {{id: string, publicKey: string, algorithm: string}} identity - The wallet identity used to sign messages.
 * @param {MemorySystem} memorySystem - The Manya-OS memory system.
 * @param {{publish(channel: string, event: object): void|Promise<void>, subscribe(channel: string, handler: function, options?: object): function}} bus - Shared caller-provided event bus.
 */
export function createTelepathy(wallet, identity, memorySystem, bus) {
  if (!wallet || typeof wallet.sign !== 'function' || typeof wallet.verify !== 'function') {
    throw new Error('createTelepathy requires a KeyringWallet');
  }
  if (!identity || !identity.id || !identity.publicKey || !identity.algorithm) {
    throw new Error('createTelepathy requires a wallet identity');
  }
  if (!memorySystem || typeof memorySystem.remember !== 'function') {
    throw new Error('createTelepathy requires a MemorySystem');
  }
  if (!bus || typeof bus.publish !== 'function' || typeof bus.subscribe !== 'function') {
    throw new Error('createTelepathy requires a shared bus with publish and subscribe methods');
  }
  return { wallet, identity, memorySystem, bus, contacts: new Map() };
}

/** Registers a known contact's public identity for signature verification. */
export function registerContact(telepathy, identity) {
  if (!identity || !identity.id || !identity.publicKey || !identity.algorithm) {
    throw new Error('registerContact requires an identity with id, publicKey, and algorithm');
  }
  telepathy.contacts.set(identity.id, { publicKey: identity.publicKey, algorithm: identity.algorithm });
}

/**
 * Signs and sends a payload to a target identity.
 * @returns {Promise<object>} The signed envelope that was published.
 */
export async function send(telepathy, targetAgentId, payload) {
  if (!targetAgentId || typeof targetAgentId !== 'string') throw new Error('targetAgentId is required');
  const serializedPayload = JSON.stringify(payload);
  if (serializedPayload === undefined) throw new Error('payload must be JSON-serializable');
  const message = JSON.stringify({
    sender: telepathy.identity.id,
    recipient: targetAgentId,
    payload: serializedPayload,
  });
  const signed = await telepathy.wallet.sign(Buffer.from(message), telepathy.identity.id);
  const envelope = {
    sender: telepathy.identity.id,
    recipient: targetAgentId,
    payload: serializedPayload,
    algorithm: signed.algorithm,
    signature: signed.signature,
  };
  await telepathy.bus.publish(`telepathy:${targetAgentId}`, {
    type: 'telepathy',
    sourceToolId: telepathy.identity.id,
    payload: envelope,
  });
  telepathy.memorySystem.remember(telepathy.identity.id, `Telepathic message sent to ${targetAgentId}`);
  return envelope;
}

/**
 * Subscribes to this identity's inbound channel. Unknown senders and invalid
 * signatures are logged but never handed to the handler.
 */
export function listen(telepathy, handler) {
  return telepathy.bus.subscribe(`telepathy:${telepathy.identity.id}`, async (evt) => {
    const envelope = evt?.payload;
    const contact = envelope && telepathy.contacts.get(envelope.sender);
    if (!contact || envelope.recipient !== telepathy.identity.id) {
      telepathy.memorySystem.remember('Telepathy', `Blocked message from unknown sender ${envelope?.sender ?? 'unknown'}`);
      return;
    }
    let payload;
    let valid = false;
    try {
      payload = JSON.parse(envelope.payload);
      const message = JSON.stringify({
        sender: envelope.sender,
        recipient: envelope.recipient,
        payload: envelope.payload,
      });
      valid = await telepathy.wallet.verify(Buffer.from(message), envelope.signature, {
        publicKey: contact.publicKey,
        algorithm: contact.algorithm,
      });
    } catch {
      valid = false;
    }
    if (!valid) {
      telepathy.memorySystem.remember('Telepathy', `Blocked unverified message from ${envelope.sender}`);
      return;
    }
    telepathy.memorySystem.remember(envelope.sender, 'Telepathic message received and verified');
    handler({ from: envelope.sender, payload });
  }, { subscriberId: telepathy.identity.id });
}

export const telepathy = { createTelepathy, registerContact, send, listen };
export default telepathy;
