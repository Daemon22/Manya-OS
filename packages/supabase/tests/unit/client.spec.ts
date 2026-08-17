/**
 * @manya-os/supabase — SupabaseClientFacade unit tests.
 *
 * Copyright 2024 Manya Hael Foundation. All rights reserved.
 * Licensed under the Apache License, Version 2.0.
 */

import { SupabaseClientFacade } from '../../src/client.js';
import { ConnectionError } from '../../src/errors.js';
import { SilentLogger } from '../../src/logging.js';
import type { ResolvedConfig } from '../../src/config.js';
import { DEFAULT_TABLE_NAMES, DEFAULT_RETRY } from '../../src/config.js';

jest.mock('@supabase/supabase-js', () => ({
  createClient: jest.fn(() => ({
    from: jest.fn(() => ({
      select: jest.fn(() => ({
        limit: jest.fn(() => ({
          maybeSingle: jest.fn().mockResolvedValue({ data: null, error: null }),
        })),
      })),
    })),
    rpc: jest.fn().mockResolvedValue({ data: null, error: null }),
  })),
}));

const mockConfig: ResolvedConfig = {
  url: 'https://test.supabase.co',
  serviceRoleKey: 'test-key',
  migrateOnStart: false,
  migrationDir: './migrations',
  poolMin: 1,
  poolMax: 10,
  timeoutMs: 30000,
  tables: DEFAULT_TABLE_NAMES,
  retry: DEFAULT_RETRY,
  logLevel: 'silent',
};

const logger = new SilentLogger();

describe('SupabaseClientFacade', () => {
  const facades: SupabaseClientFacade[] = [];

  afterEach(() => {
    for (const f of facades) f.dispose();
    facades.length = 0;
  });

  it('creates a client facade', () => {
    const facade = new SupabaseClientFacade(mockConfig, logger);
    facades.push(facade);
    expect(facade).toBeDefined();
  });

  it('returns the underlying client', () => {
    const facade = new SupabaseClientFacade(mockConfig, logger);
    facades.push(facade);
    const client = facade.getClient();
    expect(client).toBeDefined();
  });

  it('throws ConnectionError after dispose', () => {
    const facade = new SupabaseClientFacade(mockConfig, logger);
    facade.dispose();
    expect(() => facade.getClient()).toThrow(ConnectionError);
  });

  it('dispose is idempotent', () => {
    const facade = new SupabaseClientFacade(mockConfig, logger);
    facades.push(facade);
    expect(() => facade.dispose()).not.toThrow();
    expect(() => facade.dispose()).not.toThrow();
  });

  it('ping returns boolean', async () => {
    const facade = new SupabaseClientFacade(mockConfig, logger);
    facades.push(facade);
    const result = await facade.ping();
    expect(typeof result).toBe('boolean');
  });
});
