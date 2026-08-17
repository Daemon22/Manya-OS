/**
 * @manya-os/supabase — Supabase client factory.
 *
 * Copyright 2024 Manya Hael Foundation. All rights reserved.
 * Licensed under the Apache License, Version 2.0.
 */

import { createClient, type SupabaseClient } from '@supabase/supabase-js';
import type { ResolvedConfig } from './config.js';
import type { Logger } from './logging.js';
import { ConnectionError } from './errors.js';

/** Wrapper around SupabaseClient with lifecycle management. */
export class SupabaseClientFacade {
  private client: SupabaseClient;
  private disposed = false;
  private timeoutId: ReturnType<typeof setTimeout> | undefined;

  constructor(
    private readonly config: ResolvedConfig,
    private readonly logger: Logger,
  ) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), config.timeoutMs);

    this.client = createClient(config.url, config.serviceRoleKey, {
      auth: { autoRefreshToken: false, persistSession: false },
      db: { schema: 'public' },
      global: {
        headers: { 'x-manya-client': '@manya-os/supabase' },
        fetch: (url: string | URL | Request, init?: RequestInit) => {
          const signal = init?.signal
            ? AbortSignal.any([init.signal, controller.signal])
            : controller.signal;
          return fetch(url, { ...init, signal });
        },
      },
    });

    this.timeoutId = timeoutId;
    this.logger.info('Supabase client created', { url: config.url });
  }

  /** Get the underlying Supabase client. */
  getClient(): SupabaseClient {
    if (this.disposed) {
      throw new ConnectionError('Client has been disposed');
    }
    return this.client;
  }

  /** Verify connectivity by running a lightweight query. */
  async ping(): Promise<boolean> {
    try {
      const { error } = await this.client
        .from('pg_catalog')
        .select('1')
        .limit(1)
        .maybeSingle();
      // pg_catalog may not be accessible via PostgREST; fallback to raw
      if (error) {
        // Try a simple RPC call instead
        const { error: rpcError } = await this.client.rpc('version');
        return !rpcError;
      }
      return true;
    } catch {
      return false;
    }
  }

  /** Dispose of the client. */
  dispose(): void {
    if (!this.disposed) {
      this.disposed = true;
      if (this.timeoutId) {
        clearTimeout(this.timeoutId);
        this.timeoutId = undefined;
      }
      this.logger.info('Supabase client disposed');
    }
  }
}
