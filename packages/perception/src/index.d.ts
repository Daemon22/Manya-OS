import type { MemorySystem } from '@manya-os/memory';

export interface RedactorAdapter {
  redact(text: string, options: { rules: string[] }): { redacted: string; count: number; found: object[] };
  classify(text: string): object;
}

export interface EnvironmentProvider {
  snapshot(env?: object): { device: object; capabilities: object; fingerprint: object; timestamp: number };
}

export interface Perception {
  memorySystem: MemorySystem;
  redactor?: RedactorAdapter;
  environmentProvider?: EnvironmentProvider;
}

export function createPerception(
  memorySystem: MemorySystem,
  adapters?: { redactor?: RedactorAdapter; environmentProvider?: EnvironmentProvider }
): Perception;

export function ingestText(
  perception: Perception,
  source: string,
  rawText: string,
  options?: { ttlMs?: number; redactRules?: string[] }
): { stored: string; redactionCount: number; found: object[]; sensitivity: object };

export function ingestStructured(
  perception: Perception,
  source: string,
  data: object,
  ttlMs?: number
): boolean;

export function perceiveEnvironment(
  perception: Perception,
  env?: object,
  ttlMs?: number
): { device: object; capabilities: object; fingerprint: object; timestamp: number };

export const perception: {
  createPerception: typeof createPerception;
  ingestText: typeof ingestText;
  ingestStructured: typeof ingestStructured;
  perceiveEnvironment: typeof perceiveEnvironment;
};

export default perception;
