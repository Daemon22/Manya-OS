/**
 * Manya Perception — ingests external signals into working memory.
 *
 * A caller-provided redactor is required before text can be stored. An
 * environment provider is optional and required only for device snapshots.
 */

import { MemorySystem } from '@manya-os/memory';

export function createPerception(memorySystem, adapters = {}) {
  if (!memorySystem || !memorySystem.working || typeof memorySystem.remember !== 'function') {
    throw new Error('createPerception requires a MemorySystem');
  }
  return {
    memorySystem,
    redactor: adapters.redactor,
    environmentProvider: adapters.environmentProvider,
  };
}

/** Redacts and classifies text before storing it in working memory. */
export function ingestText(perception, source, rawText, options = {}) {
  if (!source || typeof source !== 'string') throw new Error('source is required');
  if (typeof rawText !== 'string') throw new Error('rawText must be a string');
  if (!perception.redactor || typeof perception.redactor.redact !== 'function' || typeof perception.redactor.classify !== 'function') {
    throw new Error('ingestText requires a redactor with redact and classify methods');
  }

  const ttlMs = options.ttlMs ?? 300000;
  const rules = options.redactRules || ['pii'];
  const cleanText = rawText.replace(/\s+/g, ' ').trim();
  const { redacted, count, found } = perception.redactor.redact(cleanText, { rules });
  const sensitivity = cleanText.length > 0
    ? perception.redactor.classify(cleanText)
    : { level: 'public', score: 0 };

  perception.memorySystem.working.set(`perception:text:${source}`, redacted, ttlMs);
  perception.memorySystem.remember('Perception', `Ingested text from ${source}`, {
    redactionCount: count,
    sensitivityLevel: sensitivity.level,
  });
  return { stored: redacted, redactionCount: count, found, sensitivity };
}

/** Stores JSON-serializable structured data in working memory. */
export function ingestStructured(perception, source, data, ttlMs = 300000) {
  if (!source || typeof source !== 'string') throw new Error('source is required');
  let serialized;
  try {
    serialized = JSON.parse(JSON.stringify(data));
  } catch {
    perception.memorySystem.remember('Perception', `Failed to parse structured data from ${source}`);
    return false;
  }
  perception.memorySystem.working.set(`perception:data:${source}`, serialized, ttlMs);
  perception.memorySystem.remember('Perception', `Ingested structured data from ${source}`);
  return true;
}

/** Captures an environment snapshot through the configured provider. */
export function perceiveEnvironment(perception, env = globalThis, ttlMs = 10000) {
  if (!perception.environmentProvider || typeof perception.environmentProvider.snapshot !== 'function') {
    throw new Error('perceiveEnvironment requires an environment provider with a snapshot method');
  }
  const snapshot = perception.environmentProvider.snapshot(env);
  perception.memorySystem.working.set('perception:environment', snapshot, ttlMs);
  perception.memorySystem.remember('Perception', 'Perceived current environment', {
    deviceType: snapshot.device?.type,
  });
  return snapshot;
}

export const perception = { createPerception, ingestText, ingestStructured, perceiveEnvironment };
export default perception;
