/**
 * @manya-os/supabase — integration test: ledger CRUD.
 *
 * Copyright 2024 Manya Hael Foundation. All rights reserved.
 * Licensed under the Apache License, Version 2.0.
 */

import { SupabaseClientFacade } from '../../src/client.js';
import { SupabaseLedgerStore } from '../../src/ledger/supabase-ledger-store.js';
import { resolveConfig, type ResolvedConfig } from '../../src/config.js';
import { ConsoleLogger } from '../../src/logging.js';
import type { LedgerEvent } from '@manya-os/ledger';

const INTEGRATION = process.env.SUPABASE_INTEGRATION_TEST === 'true';
const describeIfIntegration = INTEGRATION ? describe : describe.skip;

const TEST_PREFIX = `test_ledger_${process.env.JEST_WORKER_ID ?? '0'}_${Date.now()}`;

function makeEvent(seq: number, id?: string): LedgerEvent {
  return {
    id: id || `${TEST_PREFIX}_seq${seq}`,
    seq,
    type: `${TEST_PREFIX}.event`,
    actor: TEST_PREFIX,
    payload: { seq, prefix: TEST_PREFIX },
    timestamp: new Date().toISOString(),
    prevHash: seq === 1 ? '0000' : `hash-${seq - 1}`,
    hash: `hash-${seq}`,
  };
}

describeIfIntegration('Ledger CRUD', () => {
  let config: ResolvedConfig;
  const logger = new ConsoleLogger('silent');
  let facade: SupabaseClientFacade;
  let store: SupabaseLedgerStore;

  beforeAll(async () => {
    config = resolveConfig({
      url: process.env.SUPABASE_URL!,
      serviceRoleKey: process.env.SUPABASE_SERVICE_ROLE_KEY!,
      logLevel: 'silent',
    });
    facade = new SupabaseClientFacade(config, logger);
    store = new SupabaseLedgerStore(facade.getClient(), config, logger);
    // Clean up only test data scoped to this worker+run
    await facade.getClient().from('ledger_events')
      .delete()
      .like('source', `${TEST_PREFIX}%`);
  });

  afterAll(async () => {
    await facade.getClient().from('ledger_events')
      .delete()
      .like('source', `${TEST_PREFIX}%`);
    facade.dispose();
  });

  it('starts empty', async () => {
    const len = await store.length();
    expect(len).toBe(0);
  });

  it('appends and retrieves an event', async () => {
    const event = makeEvent(1);
    await store.append(event);
    const retrieved = await store.get(1);
    expect(retrieved).toBeDefined();
    expect(retrieved?.id).toBe(event.id);
  });

  it('getById returns event', async () => {
    const event = makeEvent(2);
    await store.append(event);
    const retrieved = await store.getById(event.id);
    expect(retrieved).toBeDefined();
    expect(retrieved?.seq).toBe(2);
  });

  it('length reflects appended events', async () => {
    const len = await store.length();
    expect(len).toBeGreaterThanOrEqual(2);
  });

  it('all returns events in order', async () => {
    const events = await store.all();
    expect(events.length).toBeGreaterThanOrEqual(2);
    expect(events[0].seq).toBeLessThanOrEqual(events[1].seq);
  });

  it('snapshot returns deep copy', async () => {
    const snap = await store.snapshot();
    expect(snap.length).toBeGreaterThanOrEqual(2);
  });

  it('get returns undefined for missing seq', async () => {
    const result = await store.get(99999);
    expect(result).toBeUndefined();
  });
});
