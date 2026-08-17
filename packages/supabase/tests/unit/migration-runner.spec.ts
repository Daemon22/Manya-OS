/**
 * @manya-os/supabase — MigrationRunner unit tests.
 *
 * Copyright 2024 Manya Hael Foundation. All rights reserved.
 * Licensed under the Apache License, Version 2.0.
 */

import { MigrationRunner } from '../../src/migrations/runner.js';
import { SilentLogger } from '../../src/logging.js';
import { MigrationError } from '../../src/errors.js';

const logger = new SilentLogger();

function createMockClient(rpcResult: { data?: any; error?: any } = { data: null, error: null }) {
  return {
    rpc: jest.fn().mockResolvedValue(rpcResult),
    from: jest.fn(() => ({
      select: jest.fn().mockReturnThis(),
      order: jest.fn().mockResolvedValue({ data: [], error: null }),
      insert: jest.fn().mockResolvedValue({ error: null }),
    })),
  };
}

describe('MigrationRunner', () => {
  describe('constructor', () => {
    it('creates with default migration dir', () => {
      const client = createMockClient();
      const runner = new MigrationRunner(client as any, logger);
      expect(runner).toBeDefined();
    });

    it('creates with custom migration dir', () => {
      const client = createMockClient();
      const runner = new MigrationRunner(client as any, logger, '/custom/path');
      expect(runner).toBeDefined();
    });
  });

  describe('readMigrations', () => {
    it('throws MigrationError for non-existent directory', async () => {
      const client = createMockClient();
      const runner = new MigrationRunner(client as any, logger, '/nonexistent/path');
      await expect(runner.readMigrations()).rejects.toThrow(MigrationError);
    });
  });

  describe('ensureMigrationTable', () => {
    it('calls exec_sql RPC', async () => {
      const client = createMockClient();
      const runner = new MigrationRunner(client as any, logger);
      await runner.ensureMigrationTable();
      expect(client.rpc).toHaveBeenCalled();
    });

    it('does not throw when RPC fails (table may exist)', async () => {
      const client = createMockClient({ error: { message: 'already exists' } });
      const runner = new MigrationRunner(client as any, logger);
      await expect(runner.ensureMigrationTable()).resolves.not.toThrow();
    });
  });

  describe('getAppliedVersions', () => {
    it('returns empty map when no migrations applied', async () => {
      const client = createMockClient();
      const runner = new MigrationRunner(client as any, logger);
      const result = await runner.getAppliedVersions();
      expect(result.size).toBe(0);
    });
  });

  describe('status', () => {
    it('throws for non-existent migration dir', async () => {
      const client = createMockClient();
      const runner = new MigrationRunner(client as any, logger, '/nonexistent');
      await expect(runner.status()).rejects.toThrow(MigrationError);
    });
  });

  describe('runPending', () => {
    it('returns empty array when no migrations dir', async () => {
      const client = createMockClient();
      const runner = new MigrationRunner(client as any, logger, '/nonexistent');
      await expect(runner.runPending()).rejects.toThrow(MigrationError);
    });
  });
});
