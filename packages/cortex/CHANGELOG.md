# Changelog

All notable changes to `@manya/cortex` are documented here.
Format: [Keep a Changelog](https://keepachangelog.com/en/1.1.0/). Adheres to [SemVer](https://semver.org/).

## [1.0.0] — 2024-01-15
### Added
- Initial release.
- Task decomposition with conjunction splitting + action verb inference.
- Planner with topological sort, cycle detection, and replan-on-failure.
- ToolRegistry with tag-based selection and async/sync handler support.
- Router with 7 intent types and per-instance component overrides.
- Scheduler with priority ordering and resource-budget enforcement.
- ConfidenceEstimator with 5 weighted factors and past-success tracking.
- GoalManager with hierarchical goals, deadlines, and status transitions.
- ResourceManager with cost/parallel/duration budgets and utilization ratios.
- WorkflowEngine with conditional branching and terminal-step support.
- Retry policy with fixed/linear/exponential backoff and retryable-error matching.
- Coordinator that executes plans end-to-end with full event audit trail.
- Cortex facade with `reason(description)` for one-shot goal → plan → execute.
- 70 unit tests covering all subsystems and end-to-end flows.
