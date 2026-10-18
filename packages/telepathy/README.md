# @manya-os/telepathy

Signed, verifiable inter-agent messaging.

Uses `@manya-os/keyring` for signatures and `@manya-os/memory` for audit notes.
Delivery uses a caller-provided shared bus with `publish(channel, event)` and
`subscribe(channel, handler)` methods. All identities that need to communicate
must use the same bus instance or transport.

A message is accepted only if the sender is a registered contact and the
signature verifies. Unknown senders and forged signatures are blocked and
logged — never silently dropped, never silently accepted.

## Usage

```js
import { KeyringWallet } from '@manya-os/keyring';
import { MemorySystem } from '@manya-os/memory';
import { telepathy } from '@manya-os/telepathy';

const araKeyring = keyring.create('ara', 'a-strong-passphrase');
const araMemory = memory.createMemoryStore('ara');
const araTelepathy = telepathy.createTelepathy(araKeyring, araMemory);

// Somewhere, atlas's public key becomes known to ara (e.g. via attest).
telepathy.registerContact(araTelepathy, atlasIdentity);

telepathy.listen(araTelepathy, ({ from, payload }) => {
  console.log(`${from} says:`, payload);
});

telepathy.send(araTelepathy, 'atlas', { note: 'device provisioned' });
```

## Why this composition

Telepathy doesn't invent a second cryptographic identity system — it calls
`keyring.signMessage`/`verifyMessage`, which already exist and are already
tested. The only new thing telepathy adds is a contact directory and the
routing of signed envelopes over the configured bus.
