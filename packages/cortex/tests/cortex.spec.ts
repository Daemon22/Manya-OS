/**
 * @manya/cortex — comprehensive unit tests.
 *
 * Copyright 2024 Manya Hael Foundation. All rights reserved.
 * Licensed under the Apache License, Version 2.0.
 */

import {
  Cortex, CortexError,
  decompose, estimateComplexity,
  Planner, topoSort,
  ToolRegistry,
  Router,
  Scheduler,
  ConfidenceEstimator, DEFAULT_WEIGHTS,
  GoalManager,
  ResourceManager,
  WorkflowEngine,
  withRetry, backoffDelay, isRetryable, DEFAULT_RETRY_POLICY,
  Coordinator,
  DEFAULT_CONFIG,
  ToolError, PlanningError, GoalError, ResourceError, SchedulerError, RetryError,
} from '../src';
import type { Tool, Goal, Workflow } from '../src';

describe('decompose', () => {
  test('splits on conjunctions', () => {
    const tasks = decompose('fetch data and parse it');
    expect(tasks.length).toBe(2);
    expect(tasks[0].description).toContain('fetch');
    expect(tasks[1].description).toContain('parse');
  });

  test('sets dependencies between sub-tasks', () => {
    const tasks = decompose('do A and then do B');
    expect(tasks[1].dependsOn).toContain(tasks[0].id);
  });

  test('infers required tools', () => {
    const tasks = decompose('fetch http://api.example.com');
    expect(tasks[0].requiredTools).toContain('http');
  });

  test('returns single task if no decomposition possible', () => {
    const tasks = decompose('simple goal');
    expect(tasks).toHaveLength(1);
  });

  test('throws on empty input', () => {
    expect(() => decompose('')).toThrow();
  });

  test('estimateComplexity increases with conjunctions', () => {
    expect(estimateComplexity('do A')).toBeLessThan(estimateComplexity('do A and then do B followed by C'));
  });
});

describe('Planner', () => {
  const goal: Goal = {
    id: 'g1', description: 'fetch data and parse it', priority: 0.7,
    status: 'active', createdAt: Date.now(),
  };

  test('plan decomposes and orders', () => {
    const p = new Planner();
    const plan = p.plan(goal);
    expect(plan.tasks.length).toBeGreaterThan(0);
    expect(plan.goalId).toBe('g1');
    expect(plan.confidence).toBeGreaterThan(0);
    expect(plan.confidence).toBeLessThanOrEqual(1);
  });

  test('plan with sequential strategy returns single task', () => {
    const p = new Planner();
    const plan = p.plan(goal, 'sequential');
    expect(plan.tasks).toHaveLength(1);
  });

  test('topoSort orders by dependencies', () => {
    const tasks = [
      { id: 'c', goalId: 'g', description: 'c', status: 'pending' as const, createdAt: 0, dependsOn: ['b'] },
      { id: 'a', goalId: 'g', description: 'a', status: 'pending' as const, createdAt: 0 },
      { id: 'b', goalId: 'g', description: 'b', status: 'pending' as const, createdAt: 0, dependsOn: ['a'] },
    ];
    const sorted = topoSort(tasks);
    expect(sorted.map(t => t.id)).toEqual(['a', 'b', 'c']);
  });

  test('topoSort throws on cycle', () => {
    const tasks = [
      { id: 'a', goalId: 'g', description: 'a', status: 'pending' as const, createdAt: 0, dependsOn: ['b'] },
      { id: 'b', goalId: 'g', description: 'b', status: 'pending' as const, createdAt: 0, dependsOn: ['a'] },
    ];
    expect(() => topoSort(tasks)).toThrow(PlanningError);
  });

  test('replan skips dependents of failed task', () => {
    const p = new Planner();
    const plan = p.plan(goal);
    const firstTaskId = plan.tasks[0].id;
    const r = p.replan(plan, firstTaskId, { retry: false });
    expect(r.tasks.find(t => t.id === firstTaskId)?.status).toBe('skipped');
  });
});

describe('ToolRegistry', () => {
  const echoTool: Tool = {
    name: 'echo',
    description: 'echoes input',
    async: false,
    handler: (input) => ({ success: true, output: input }),
  };

  test('register and get', () => {
    const r = new ToolRegistry();
    r.register(echoTool);
    expect(r.get('echo')?.name).toBe('echo');
  });

  test('duplicate register throws', () => {
    const r = new ToolRegistry();
    r.register(echoTool);
    expect(() => r.register(echoTool)).toThrow(ToolError);
  });

  test('register without handler throws', () => {
    const r = new ToolRegistry();
    expect(() => r.register({ name: 'bad', description: '', handler: 'not a fn' as any })).toThrow(ToolError);
  });

  test('invoke returns result', async () => {
    const r = new ToolRegistry();
    r.register(echoTool);
    const result = await r.invoke('echo', 'hello');
    expect(result.success).toBe(true);
    expect(result.output).toBe('hello');
  });

  test('invoke missing tool throws', async () => {
    const r = new ToolRegistry();
    await expect(r.invoke('missing', null)).rejects.toThrow(ToolError);
  });

  test('invoke catches handler errors', async () => {
    const r = new ToolRegistry();
    r.register({
      name: 'fail',
      description: 'fails',
      handler: () => { throw new Error('boom'); },
    });
    const result = await r.invoke('fail', null);
    expect(result.success).toBe(false);
    expect(result.error).toContain('boom');
  });

  test('select by required tools', () => {
    const r = new ToolRegistry();
    r.register(echoTool);
    r.register({ name: 'fs', description: '', tags: ['io'], handler: () => ({ success: true }) });
    const t = r.select(['fs', 'echo']);
    expect(t?.name).toBe('fs'); // first match
  });

  test('select by preferred tags', () => {
    const r = new ToolRegistry();
    r.register(echoTool);
    r.register({ name: 'fs', description: '', tags: ['io'], handler: () => ({ success: true }) });
    const t = r.select(undefined, ['io']);
    expect(t?.name).toBe('fs');
  });

  test('findByTag', () => {
    const r = new ToolRegistry();
    r.register({ name: 'a', description: '', tags: ['x'], handler: () => ({ success: true }) });
    r.register({ name: 'b', description: '', tags: ['y'], handler: () => ({ success: true }) });
    expect(r.findByTag('x')).toHaveLength(1);
  });
});

describe('Router', () => {
  test('classify recall intent', () => {
    const r = new Router();
    expect(r.classify('what is the capital of France?')).toBe('recall');
  });

  test('classify execution intent', () => {
    const r = new Router();
    expect(r.classify('execute the deployment')).toBe('execution');
  });

  test('classify communication intent', () => {
    const r = new Router();
    expect(r.classify('send a message to Alice')).toBe('communication');
  });

  test('classify unknown', () => {
    const r = new Router();
    expect(r.classify('xyz qrs')).toBe('unknown');
  });

  test('route returns RoutedRequest', () => {
    const r = new Router();
    const rr = r.route('remember my name');
    expect(rr.component).toBe('memory');
    expect(rr.confidence).toBeGreaterThan(0);
  });

  test('setComponent overrides mapping', () => {
    const r = new Router();
    r.setComponent('recall', 'custom-memory');
    expect(r.route('remember my name').component).toBe('custom-memory');
  });
});

describe('Scheduler', () => {
  test('schedule and popNext', () => {
    const s = new Scheduler();
    const task = { id: 't1', goalId: 'g', description: 'x', status: 'pending' as const, createdAt: 0 };
    s.schedule(task, 'worker1');
    expect(s.size()).toBe(1);
    const next = s.popNext();
    expect(next?.taskId).toBe('t1');
    expect(s.size()).toBe(0);
  });

  test('schedule respects priority ordering', () => {
    const s = new Scheduler();
    const t1 = { id: 't1', goalId: 'g', description: 'x', status: 'pending' as const, createdAt: 0 };
    const t2 = { id: 't2', goalId: 'g', description: 'y', status: 'pending' as const, createdAt: 0 };
    s.schedule(t1, 'w', { priority: 0.3 });
    s.schedule(t2, 'w', { priority: 0.9 });
    expect(s.popNext()?.taskId).toBe('t2'); // higher priority first
  });

  test('schedule enforces dependency ordering', () => {
    const s = new Scheduler();
    const t2 = { id: 't2', goalId: 'g', description: 'y', status: 'pending' as const, createdAt: 0, dependsOn: ['t1'] };
    expect(() => s.schedule(t2, 'w')).toThrow(SchedulerError);
  });

  test('cancel removes from queue', () => {
    const s = new Scheduler();
    const t = { id: 't1', goalId: 'g', description: 'x', status: 'pending' as const, createdAt: 0 };
    s.schedule(t, 'w');
    expect(s.cancel('t1')).toBe(true);
    expect(s.size()).toBe(0);
  });

  test('resource budget check', () => {
    const s = new Scheduler();
    const t = { id: 't1', goalId: 'g', description: 'x', status: 'pending' as const, createdAt: 0, estimatedCost: 1000 };
    const budget = { maxCost: 100, maxParallel: 4, maxDurationMs: 60000, spentCost: 0, activeWorkers: 0, elapsedMs: 0 };
    expect(() => s.schedule(t, 'w', { budget })).toThrow(SchedulerError);
  });
});

describe('ConfidenceEstimator', () => {
  test('estimate combines factors', () => {
    const e = new ConfidenceEstimator();
    const r = e.estimate({
      planConfidence: 0.8,
      toolReliability: 0.9,
      evidenceCount: 5,
      agreementRate: 0.85,
      domainFamiliarity: 0.7,
    });
    expect(r.confidence).toBeGreaterThan(0.7);
    expect(r.factors).toHaveLength(5);
  });

  test('throws on no factors', () => {
    const e = new ConfidenceEstimator();
    expect(() => e.estimate({})).toThrow();
  });

  test('recordOutcome and pastSuccessRate', () => {
    const e = new ConfidenceEstimator();
    e.recordOutcome('fetch data', true);
    e.recordOutcome('fetch data', false);
    e.recordOutcome('fetch data', true);
    expect(e.pastSuccessRate('fetch data')).toBeCloseTo(2/3, 1);
  });

  test('unknown task returns 0.5', () => {
    const e = new ConfidenceEstimator();
    expect(e.pastSuccessRate('never-seen')).toBe(0.5);
  });

  test('DEFAULT_WEIGHTS sum to 1', () => {
    const sum = Object.values(DEFAULT_WEIGHTS).reduce((a, b) => a + b, 0);
    expect(sum).toBeCloseTo(1, 1);
  });
});

describe('GoalManager', () => {
  test('create goal', () => {
    const g = new GoalManager();
    const goal = g.create('do something');
    expect(goal.id).toBeDefined();
    expect(goal.status).toBe('pending');
  });

  test('transition status', () => {
    const g = new GoalManager();
    const goal = g.create('do something');
    g.transition(goal.id, 'active');
    expect(g.get(goal.id)?.status).toBe('active');
  });

  test('invalid transition throws', () => {
    const g = new GoalManager();
    const goal = g.create('do something');
    g.transition(goal.id, 'active');
    g.transition(goal.id, 'achieved');
    expect(() => g.transition(goal.id, 'active')).toThrow(GoalError);
  });

  test('active returns sorted by priority', () => {
    const g = new GoalManager();
    const a = g.create('a', { priority: 0.3 });
    const b = g.create('b', { priority: 0.9 });
    g.transition(a.id, 'active');
    g.transition(b.id, 'active');
    const active = g.active();
    expect(active[0].id).toBe(b.id);
  });

  test('children of parent', () => {
    const g = new GoalManager();
    const parent = g.create('parent');
    g.create('child1', { parentId: parent.id });
    g.create('child2', { parentId: parent.id });
    expect(g.children(parent.id)).toHaveLength(2);
  });

  test('overdue goals', () => {
    const g = new GoalManager();
    const goal = g.create('overdue', { deadline: Date.now() - 1000 });
    g.transition(goal.id, 'active');
    expect(g.overdue()).toHaveLength(1);
  });

  test('invalid parent throws', () => {
    const g = new GoalManager();
    expect(() => g.create('x', { parentId: 'missing' })).toThrow(GoalError);
  });
});

describe('ResourceManager', () => {
  test('canAdmit within budget', () => {
    const r = new ResourceManager({ maxCost: 100 });
    const t = { id: 't1', goalId: 'g', description: 'x', status: 'pending' as const, createdAt: 0, estimatedCost: 50 };
    expect(r.canAdmit(t).admit).toBe(true);
  });

  test('canAdmit exceeds cost', () => {
    const r = new ResourceManager({ maxCost: 100, spentCost: 80 });
    const t = { id: 't1', goalId: 'g', description: 'x', status: 'pending' as const, createdAt: 0, estimatedCost: 50 };
    expect(r.canAdmit(t).admit).toBe(false);
  });

  test('reserve increments counters', () => {
    const r = new ResourceManager({ maxCost: 100, maxParallel: 4 });
    const t = { id: 't1', goalId: 'g', description: 'x', status: 'pending' as const, createdAt: 0, estimatedCost: 30 };
    r.reserve(t);
    expect(r.snapshot().spentCost).toBe(30);
    expect(r.snapshot().activeWorkers).toBe(1);
  });

  test('release decrements active workers', () => {
    const r = new ResourceManager({ maxParallel: 4 });
    const t = { id: 't1', goalId: 'g', description: 'x', status: 'pending' as const, createdAt: 0 };
    r.reserve(t);
    r.release(t, 1000);
    expect(r.snapshot().activeWorkers).toBe(0);
    expect(r.snapshot().elapsedMs).toBe(1000);
  });

  test('reserve throws on insufficient budget', () => {
    const r = new ResourceManager({ maxCost: 10 });
    const t = { id: 't1', goalId: 'g', description: 'x', status: 'pending' as const, createdAt: 0, estimatedCost: 100 };
    expect(() => r.reserve(t)).toThrow(ResourceError);
  });

  test('utilization ratios', () => {
    const r = new ResourceManager({ maxCost: 100, maxParallel: 4, maxDurationMs: 1000, spentCost: 50, activeWorkers: 2, elapsedMs: 200 });
    const u = r.utilization();
    expect(u.cost).toBe(0.5);
    expect(u.parallel).toBe(0.5);
    expect(u.duration).toBe(0.2);
  });
});

describe('WorkflowEngine', () => {
  test('executes a simple workflow', async () => {
    const tools = new ToolRegistry();
    tools.register({ name: 'echo', description: '', handler: (input) => ({ success: true, output: input }) });
    const wf: Workflow = {
      id: 'wf1', name: 'echo-wf', initialStep: 's1',
      steps: [
        { id: 's1', name: 'step1', tool: 'echo', nextOnSuccess: 's2' },
        { id: 's2', name: 'step2', tool: 'echo', terminal: true },
      ],
    };
    const e = new WorkflowEngine(tools);
    const exec = await e.execute(wf, 'hello');
    expect(exec.status).toBe('completed');
    expect(exec.visitedSteps).toEqual(['s1', 's2']);
  });

  test('workflow handles failure', async () => {
    const tools = new ToolRegistry();
    tools.register({ name: 'fail', description: '', handler: () => ({ success: false, error: 'oops' }) });
    const wf: Workflow = {
      id: 'wf1', name: 'fail-wf', initialStep: 's1',
      steps: [
        { id: 's1', name: 'step1', tool: 'fail', nextOnSuccess: 's2' },
        { id: 's2', name: 'step2', terminal: true },
      ],
    };
    const e = new WorkflowEngine(tools);
    const exec = await e.execute(wf);
    expect(exec.status).toBe('failed');
    expect(exec.error).toContain('oops');
  });

  test('no-op step (passthrough)', async () => {
    const tools = new ToolRegistry();
    const wf: Workflow = {
      id: 'wf1', name: 'noop-wf', initialStep: 's1',
      steps: [
        { id: 's1', name: 'step1', terminal: true },
      ],
    };
    const e = new WorkflowEngine(tools);
    const exec = await e.execute(wf, 'input');
    expect(exec.status).toBe('completed');
  });
});

describe('retry', () => {
  test('withRetry succeeds on first try', async () => {
    let n = 0;
    const result = await withRetry(async () => { n++; return 'ok'; }, { ...DEFAULT_RETRY_POLICY, baseDelayMs: 1 });
    expect(result).toBe('ok');
    expect(n).toBe(1);
  });

  test('withRetry retries on retryable error', async () => {
    let n = 0;
    const fn = async () => {
      n++;
      if (n < 3) throw new Error('transient failure');
      return 'ok';
    };
    const result = await withRetry(fn, { ...DEFAULT_RETRY_POLICY, baseDelayMs: 1 });
    expect(result).toBe('ok');
    expect(n).toBe(3);
  });

  test('withRetry fails after max attempts', async () => {
    const fn = async () => { throw new Error('transient failure'); };
    await expect(withRetry(fn, { ...DEFAULT_RETRY_POLICY, maxAttempts: 2, baseDelayMs: 1 })).rejects.toThrow(RetryError);
  });

  test('withRetry does not retry non-retryable errors', async () => {
    let n = 0;
    const fn = async () => { n++; throw new Error('permanent failure'); };
    await expect(withRetry(fn, { ...DEFAULT_RETRY_POLICY, retryableErrors: ['transient'], baseDelayMs: 1 })).rejects.toThrow();
    expect(n).toBe(1);
  });

  test('backoffDelay fixed', () => {
    const p = { maxAttempts: 3, backoff: 'fixed' as const, baseDelayMs: 100, maxDelayMs: 1000 };
    expect(backoffDelay(p, 1)).toBe(100);
    expect(backoffDelay(p, 3)).toBe(100);
  });

  test('backoffDelay linear', () => {
    const p = { maxAttempts: 3, backoff: 'linear' as const, baseDelayMs: 100, maxDelayMs: 1000 };
    expect(backoffDelay(p, 1)).toBe(100);
    expect(backoffDelay(p, 3)).toBe(300);
  });

  test('backoffDelay exponential', () => {
    const p = { maxAttempts: 5, backoff: 'exponential' as const, baseDelayMs: 100, maxDelayMs: 10000 };
    expect(backoffDelay(p, 1)).toBe(100);
    expect(backoffDelay(p, 3)).toBe(400);
  });

  test('backoffDelay caps at maxDelayMs', () => {
    const p = { maxAttempts: 10, backoff: 'exponential' as const, baseDelayMs: 100, maxDelayMs: 1000 };
    expect(backoffDelay(p, 20)).toBe(1000);
  });

  test('isRetryable matches substring', () => {
    const p = { ...DEFAULT_RETRY_POLICY, retryableErrors: ['timeout'] };
    expect(isRetryable(p, 'connection timeout')).toBe(true);
    expect(isRetryable(p, 'permanent error')).toBe(false);
  });
});

describe('Cortex end-to-end', () => {
  test('reason() sets goal, plans, and executes', async () => {
    const cortex = new Cortex({ logLevel: 'silent' });
    cortex.registerTool({
      name: 'echo', description: '', handler: (input) => ({ success: true, output: input }),
    });
    // Force tool selection by adding 'echo' as a required tool via decomposition.
    const { goal, plan, events } = await cortex.reason('do simple task');
    expect(goal.status).toMatch(/active|achieved/);
    expect(plan.tasks.length).toBeGreaterThan(0);
    expect(events.length).toBeGreaterThan(0);
  });

  test('route classifies input', () => {
    const cortex = new Cortex({ logLevel: 'silent' });
    const r = cortex.route('remember the user name');
    expect(r.component).toBe('memory');
  });

  test('registerTool adds to registry', () => {
    const cortex = new Cortex({ logLevel: 'silent' });
    cortex.registerTool({ name: 'custom', description: '', handler: () => ({ success: true }) });
    expect(cortex.tools.list()).toContain('custom');
  });

  test('runWorkflow executes workflow', async () => {
    const cortex = new Cortex({ logLevel: 'silent' });
    cortex.registerTool({ name: 'echo', description: '', handler: (input) => ({ success: true, output: input }) });
    const wf: Workflow = {
      id: 'wf1', name: 'test', initialStep: 's1',
      steps: [{ id: 's1', name: 'step1', tool: 'echo', terminal: true }],
    };
    const exec = await cortex.runWorkflow(wf, 'hello');
    expect(exec.status).toBe('completed');
  });

  test('getEvents after reason()', async () => {
    const cortex = new Cortex({ logLevel: 'silent' });
    await cortex.reason('do something');
    expect(cortex.getEvents().length).toBeGreaterThan(0);
  });

  test('reset clears scheduler and resources', () => {
    const cortex = new Cortex({ logLevel: 'silent' });
    cortex.reset();
    expect(cortex.scheduler.size()).toBe(0);
  });

  test('DEFAULT_CONFIG has expected values', () => {
    expect(DEFAULT_CONFIG.defaultStrategy).toBe('adaptive');
    expect(DEFAULT_CONFIG.retryPolicy.maxAttempts).toBe(3);
  });
});

describe('Coordinator', () => {
  test('executes a plan and emits events', async () => {
    const tools = new ToolRegistry();
    tools.register({ name: 'echo', description: '', handler: (input) => ({ success: true, output: input }) });
    const scheduler = new Scheduler();
    const resources = new ResourceManager({ maxCost: 100 });
    const confidence = new ConfidenceEstimator();
    const coord = new Coordinator(tools, scheduler, resources, confidence, { logger: { debug() {}, info() {}, warn() {}, error() {} } as any });
    const plan = {
      id: 'p1', goalId: 'g1', confidence: 0.8, estimatedCost: 1, estimatedDurationMs: 100,
      strategy: 'sequential' as const, createdAt: 0,
      tasks: [{
        id: 't1', goalId: 'g1', description: 'echo hello', requiredTools: ['echo'],
        status: 'pending' as const, createdAt: 0, estimatedCost: 1, estimatedDurationMs: 100,
      }],
    };
    const result = await coord.execute(plan);
    expect(result.tasks[0].status).toBe('completed');
    expect(coord.getEvents().length).toBeGreaterThan(0);
  });

  test('handles task failure', async () => {
    const tools = new ToolRegistry();
    tools.register({ name: 'fail', description: '', handler: () => ({ success: false, error: 'boom' }) });
    const scheduler = new Scheduler();
    const resources = new ResourceManager({ maxCost: 100 });
    const confidence = new ConfidenceEstimator();
    const coord = new Coordinator(tools, scheduler, resources, confidence, { logger: { debug() {}, info() {}, warn() {}, error() {} } as any });
    const plan = {
      id: 'p1', goalId: 'g1', confidence: 0.8, estimatedCost: 1, estimatedDurationMs: 100,
      strategy: 'sequential' as const, createdAt: 0,
      tasks: [{
        id: 't1', goalId: 'g1', description: 'fail', requiredTools: ['fail'],
        status: 'pending' as const, createdAt: 0, estimatedCost: 1, estimatedDurationMs: 100,
      }],
    };
    const result = await coord.execute(plan);
    expect(result.tasks[0].status).toBe('failed');
    expect(result.tasks[0].error).toContain('boom');
  });
});
