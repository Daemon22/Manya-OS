# @manya-os/supabase

Supabase/Postgres persistence adapters for the MANYA Intelligence OS.

Optional companion package providing durable storage for ledger, memory, keyring, and attestation packages. Core packages continue to work fully in-memory without Supabase.

## Installation

```bash
npm install @manya-os/supabase
```

### Peer Dependencies (all optional)

The adapter you need depends on which packages you want to persist:

| Adapter | Peer Dependency | Purpose |
|---|---|---|
| `SupabaseLedgerStore` | `@manya-os/ledger` | Append-only audit events |
| `SupabaseMemoryStore` | `@manya-os/memory` | Episodic, semantic, long-term memory |
| `SupabaseSessionStore` | `@manya-os/attest` | Device attestation sessions |
| `SupabaseEncryptedStorage` | `@manya-os/keyring` | Encrypted key-value storage |

## Quick Start

```typescript
import { resolveConfig, SupabaseClientFacade, SupabaseMemoryStore } from '@manya-os/supabase';

// 1. Configure
const config = resolveConfig({
  url: 'https://your-project.supabase.co',
  serviceRoleKey: 'your-service-role-key',
  logLevel: 'info',
});

// 2. Create client
const facade = new SupabaseClientFacade(config, logger);

// 3. Create adapter
const store = new SupabaseMemoryStore(facade.getClient(), config, logger);

// 4. Use with a domain package
import { MemorySystem } from '@manya-os/memory';

const memory = new MemorySystem({ store });
```

### Using Environment Variables

```typescript
import { configFromEnv, SupabaseClientFacade } from '@manya-os/supabase';

const config = configFromEnv(); // reads SUPABASE_URL + SUPABASE_SERVICE_ROLE_KEY
const facade = new SupabaseClientFacade(config, logger);
```

## Configuration

| Field | Type | Default | Description |
|---|---|---|---|
| `url` | `string` | **required** | Supabase project URL |
| `serviceRoleKey` | `string` | **required** | Service-role key (server-side only) |
| `anonKey` | `string` | — | Anonymous key (client-safe) |
| `migrateOnStart` | `boolean` | `false` | Run pending migrations on first connection |
| `migrationDir` | `string` | `./migrations` | Path to migration SQL files |
| `poolMin` | `number` | `1` | Connection pool minimum |
| `poolMax` | `number` | `10` | Connection pool maximum |
| `timeoutMs` | `number` | `30000` | Query timeout (ms) |
| `tables` | `Partial<TableNames>` | all defaults | Table name overrides |
| `retry` | `Partial<RetryConfig>` | `{ maxAttempts: 3, baseDelayMs: 1000, maxDelayMs: 10000 }` | Retry config for transient errors |
| `logLevel` | `LogLevel` | `'info'` | Log level |
| `logger` | `Logger` | — | Custom logger (overrides logLevel) |

## Database Setup

### 1. Run Migrations

Migrations are in `packages/supabase/migrations/`. Apply them via the migration runner:

```typescript
import { MigrationRunner } from '@manya-os/supabase';

const runner = new MigrationRunner(client, logger, './migrations');
const results = await runner.runPending();
```

Or apply manually via the Supabase SQL Editor.

### 2. Schema Overview

15 tables across 6 domains:

| Domain | Tables | Owner |
|---|---|---|
| Ledger | `ledger_events` | `@manya-os/ledger` |
| Memory | `memory_episodic`, `memory_semantic`, `memory_longterm`, `memory_links`, `memory_permissions` | `@manya-os/memory` |
| Attest | `attest_sessions` | `@manya-os/attest` |
| Keyring | `keyring_identities`, `keyring_credentials`, `keyring_role_assignments`, `keyring_kv` | `@manya-os/keyring` |
| Council | `council_debates`, `council_decisions` | `@manya-os/council` |
| Constitution | `constitution_audit` | `@manya-os/constitution` |
| Customs | `customs_reports` | `@manya-os/customs-shield` |

### 3. Row Level Security

- **Ledger**: Append-only (INSERT + SELECT only, no UPDATE/DELETE)
- **All other tables**: Service-role only
- RLS is enforced at the database level

## Security Model

- **Service-role key** is server-side only. Never expose to clients.
- **No secrets are logged** — all sensitive fields are redacted in structured logging.
- **EncryptedStorage stores only encrypted blobs** — decryption happens at the KeyringWallet layer.
- **`.env` files are gitignored** — use `.env.example` as a template.
- **RLS policies** enforce access control at the database level.

## Testing

### Unit Tests

```bash
npm test -- --testPathPattern=packages/supabase
```

### Integration Tests

Integration tests require a real Supabase instance:

```bash
# 1. Set up environment
cp packages/supabase/.env.example packages/supabase/.env
# Fill in SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY

# 2. Run migrations first
# 3. Run integration tests
SUPABASE_INTEGRATION_TEST=true npm test -- --testPathPattern=packages/supabase/tests/integration
```

## Architecture

```
core packages (@manya-os/ledger, memory, keyring, attest)
        |
   store interfaces (LedgerStore, MemoryStore, EncryptedStorage, SessionStore)
        |
   @manya-os/supabase adapters
        |
   Supabase/Postgres
```

- Core packages define store interfaces
- In-memory defaults ship with each core package
- `@manya-os/supabase` provides database-backed implementations
- Adapters are injected via config (no hard coupling)
- All adapters include retry logic for transient errors

## Failure Behavior

When Supabase is unavailable:
- All adapters throw typed errors (`ConnectionError`, `QueryTimeoutError`, etc.)
- Retry logic handles transient failures (exponential backoff, configurable attempts)
- Core packages continue to work with in-memory defaults if no store is provided

## Environment Variables

| Variable | Required | Description |
|---|---|---|
| `SUPABASE_URL` | Yes | Supabase project URL |
| `SUPABASE_SERVICE_ROLE_KEY` | Yes | Service-role key |
| `SUPABASE_ANON_KEY` | No | Anonymous key |
| `SUPABASE_MIGRATE_ON_START` | No | Auto-migrate on connection (`true`/`false`) |
| `SUPABASE_MIGRATION_DIR` | No | Custom migration directory |
| `SUPABASE_TIMEOUT_MS` | No | Query timeout in ms |
| `SUPABASE_INTEGRATION_TEST` | No | Enable integration tests (`true`/`false`) |

## License

Apache-2.0. See [LICENSE](../../LICENSE) for details.
