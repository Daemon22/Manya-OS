# @manya-os/perception

Ingests signals from the outside world into working memory — without
leaking sensitive content into that memory unfiltered.

Uses `@manya-os/memory` plus caller-provided privacy and environment adapters.
The redactor is required before text can be written to memory; environment
snapshots require a provider with a `snapshot(env)` method.

## Usage

```js
import { MemorySystem } from '@manya-os/memory';
import { perception } from '@manya-os/perception';

const store = new MemorySystem({ logLevel: 'silent' });
const eyes = perception.createPerception(store, { redactor, environmentProvider });
// `redactor` must implement redact(text, { rules }) and classify(text).
// `environmentProvider` must implement snapshot(env).

const { stored, sensitivity } = perception.ingestText(eyes, 'sms', 'call me at 555-123-4567');
// stored: "call me at [REDACTED]"
// sensitivity.level: "public" (or higher, depending on content)

perception.ingestStructured(eyes, 'sensor', { temp: 21.5 });
perception.perceiveEnvironment(eyes);
```

## Why this composition

Perception is the boundary between the outside world and everything else in
the ecosystem. Redaction happens here, once, before anything reaches working
memory — not as an afterthought bolted onto every downstream package that
might read from memory later.
