# Quality Gates

Use these gates before marking work as complete.

## Task Gate

- [ ] The task has a corresponding acceptance criterion in `loop-engineering/mvp_checklist_acceptance_matrix.md`.
- [ ] The implementation satisfies the criterion.
- [ ] The relevant verification step has run or is documented as blocked.
- [ ] `loop-engineering/mvp_progress.md` is updated if the task changes project state.

## Phase Gate

- [ ] All tasks in the phase are `DONE`, `BLOCKED`, or explicitly `DEFERRED`.
- [ ] Relevant acceptance criteria in `loop-engineering/mvp_acceptance_criteria.md` are satisfied.
- [ ] Lint has run if the app exists.
- [ ] Typecheck has run if TypeScript is configured.
- [ ] Tests have run when required by `docs/verification.md`.
- [ ] Production build has run if the app exists.
- [ ] Manual QA has run for UI-facing work.
- [ ] Blockers and assumptions are recorded in `loop-engineering/mvp_progress.md`.

## Release Gate

- [ ] Local MVP DoD is complete.
- [ ] Integration MVP DoD is complete or blocked with human-owned blockers.
- [ ] Production MVP DoD is complete before claiming public launch is finished.
- [ ] Legal pages have human approval.
- [ ] Secrets are stored in approved secret stores and not committed.
- [ ] Production smoke test has passed.
