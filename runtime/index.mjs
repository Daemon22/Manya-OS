import http from 'node:http';
import { randomUUID } from 'node:crypto';
import { Cortex } from '@manya-os/cortex';
import { MemorySystem } from '@manya-os/memory';
import { EventFabric, createEvent } from '@manya-os/nervous-system';

const HOST = process.env.MANYA_OS_HOST || '127.0.0.1';
const PORT = Number(process.env.MANYA_OS_PORT || 3200);

const startedAt = new Date().toISOString();
const identity = `manya-os:${randomUUID()}`;
const memory = new MemorySystem();
const cortex = new Cortex({ logLevel: 'silent' });
const events = new EventFabric({ recordByDefault: true, logLevel: 'silent' });

function publish(topic, payload = {}) {
  events.publish(createEvent({
    topic,
    source: identity,
    payload,
  }));
}

function json(res, status, body) {
  const data = JSON.stringify(body);
  res.writeHead(status, {
    'content-type': 'application/json; charset=utf-8',
    'content-length': Buffer.byteLength(data),
    'cache-control': 'no-store',
  });
  res.end(data);
}

async function body(req) {
  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  if (!chunks.length) return {};
  return JSON.parse(Buffer.concat(chunks).toString('utf8'));
}

function status() {
  return {
    ok: true,
    runtime: 'manya-os',
    version: '1.0.0',
    identity,
    startedAt,
    uptimeMs: Math.round(process.uptime() * 1000),
    subsystems: {
      cortex: true,
      memory: true,
      nervousSystem: true,
    },
    events: events.metrics.snapshot(),
  };
}

const server = http.createServer(async (req, res) => {
  try {
    const url = new URL(req.url || '/', `http://${req.headers.host || HOST}`);

    if (req.method === 'GET' && url.pathname === '/api/health') {
      return json(res, 200, status());
    }

    if (req.method === 'GET' && url.pathname === '/api/runtime') {
      return json(res, 200, {
        ...status(),
        memory: memory.snapshot(),
        eventCount: events.recorder.size(),
      });
    }

    if (req.method === 'GET' && url.pathname === '/api/events') {
      return json(res, 200, events.recorder.all());
    }

    if (req.method === 'POST' && url.pathname === '/api/memory/remember') {
      const input = await body(req);
      const id = memory.remember(
        input.agent || identity,
        String(input.event || ''),
        input.context,
        input.options,
      );
      publish('memory.remembered', { id, agent: input.agent || identity });
      return json(res, 201, { id });
    }

    if (req.method === 'GET' && url.pathname === '/api/memory/recall') {
      const query = url.searchParams.get('q') || '';
      const limit = Math.min(Number(url.searchParams.get('limit') || 10), 100);
      return json(res, 200, { query, results: memory.recall(query, limit) });
    }

    if (req.method === 'POST' && url.pathname === '/api/reason') {
      const input = await body(req);
      if (!input.description || typeof input.description !== 'string') {
        return json(res, 400, { error: 'description is required' });
      }
      publish('cortex.reasoning.started', { description: input.description.slice(0, 200) });
      const result = await cortex.reason(input.description, input.options);
      const memoryId = memory.remember(identity, `Reasoned about: ${input.description}`, {
        goalId: result.goal.id,
        completed: result.plan.tasks.every((task) => task.status === 'completed'),
      });
      publish('cortex.reasoning.completed', {
        goalId: result.goal.id,
        memoryId,
        completed: result.plan.tasks.every((task) => task.status === 'completed'),
      });
      return json(res, 200, { ...result, memoryId });
    }

    if (req.method === 'POST' && url.pathname === '/api/events/publish') {
      const input = await body(req);
      if (!input.topic || typeof input.topic !== 'string') {
        return json(res, 400, { error: 'topic is required' });
      }
      const event = createEvent({
        topic: input.topic,
        source: input.source || identity,
        payload: input.payload,
      });
      const delivered = events.publish(event);
      return json(res, 202, { event, delivered });
    }

    return json(res, 404, { error: 'not_found' });
  } catch (error) {
    return json(res, 500, {
      error: error instanceof Error ? error.message : String(error),
    });
  }
});

function shutdown(signal) {
  publish('runtime.shutdown', { signal });
  events.shutdown();
  server.close(() => process.exit(0));
  setTimeout(() => process.exit(1), 3000).unref();
}

process.on('SIGINT', () => shutdown('SIGINT'));
process.on('SIGTERM', () => shutdown('SIGTERM'));

server.listen(PORT, HOST, () => {
  publish('runtime.started', { host: HOST, port: PORT });
  console.log(`Manya-OS runtime listening on http://${HOST}:${PORT}`);
});
