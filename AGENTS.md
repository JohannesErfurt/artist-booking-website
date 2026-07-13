# Agent Operating Guide

This repository is intended to support loop engineering: a coding agent should be able to repeatedly choose the next unblocked task, implement it, verify it, record progress, and continue.

## Primary Planning Files

- `artist_booking_website_mvp_plan.md`: original MVP checklist.
- `artist_booking_website_loop_engineering_plan.md`: split between autonomous agent work and human-input checkpoints.
- `mvp_acceptance_criteria.md`: acceptance criteria for major MVP sections.
- `mvp_checklist_acceptance_matrix.md`: per-checklist-item acceptance criteria and verification steps.
- `mvp_progress.md`: live progress, blockers, assumptions, and verification log.
- `human_inputs_needed.md`: content, credentials, legal, account, and deployment inputs required from the human owner.

## Loop Rules

- Work from the loop-engineering plan unless the user gives a newer instruction.
- Prefer the next unblocked task near the top of the plan.
- Complete local/code tasks with clearly labeled placeholders when final human content is missing.
- Do not invent real artist biography, testimonials, legal details, business claims, credentials, domains, or account information.
- If a task needs secrets, account access, payment, legal approval, final content, or unavailable media, mark it as blocked in `mvp_progress.md` and continue with the next unblocked task.
- Keep edits scoped to the task being performed.
- Do not revert unrelated user changes.
- Do not commit secrets, local `.env` files, build output, or dependency folders.

## Status Language

Use these labels in progress files:

- `TODO`: not started.
- `IN_PROGRESS`: actively being worked on.
- `DONE`: implemented and verified according to the acceptance criteria.
- `BLOCKED`: cannot proceed without human input or external access.
- `DEFERRED`: intentionally postponed outside the current MVP loop.

## Verification Rules

When the app exists, use the commands documented in `docs/verification.md`.

Minimum expectations:

- Run lint after meaningful code changes.
- Run typecheck when TypeScript code changes.
- Run tests when logic, validation, API routes, or shared utilities change.
- Run production build before marking a phase complete.
- For UI changes, perform the relevant manual QA checklist from `docs/manual_qa.md`.

If a verification command cannot run because the project is not initialized yet or dependencies are missing, record that in `mvp_progress.md`.

## Repo Conventions

- Use Next.js App Router conventions.
- Use TypeScript for application code.
- Use Tailwind CSS for styling.
- Use npm unless a different package manager is intentionally introduced.
- Target Node.js `20.x` LTS or newer unless implementation constraints require otherwise.
- Prefer server components for static content.
- Use client components only for interactive UI such as forms, menus, lightboxes, and Turnstile widgets.
- Keep reusable UI in `components`.
- Keep server-only utilities in a clearly server-only location such as `lib/server`.
- Keep shared validation schemas centralized.
- Keep placeholder artist/site content centralized so final content can be replaced later.
- Keep environment variable access centralized once implementation begins.

## Quality Gates

Before marking a task or phase `DONE`:

- Acceptance criteria in `mvp_acceptance_criteria.md` and `mvp_checklist_acceptance_matrix.md` are satisfied or blocked.
- Required verification commands from `docs/verification.md` have run or have documented blockers.
- Relevant manual QA from `docs/manual_qa.md` has been performed for UI changes.
- `mvp_progress.md` has been updated with results, assumptions, and blockers.
- No secrets, local env files, build output, dependency folders, or unrelated generated files are included.

## Rollback and Safety Rules

- Do not delete or overwrite user content unless the user explicitly asks.
- Do not run destructive Git commands such as reset, clean, or checkout to discard changes unless explicitly requested.
- If a change causes verification failure, prefer a small forward fix.
- If a forward fix is not obvious, record the failure in `mvp_progress.md` and ask before broad rewrites.
- Keep generated or experimental files easy to identify.

## Placeholder Policy

Placeholders are allowed only when they are obvious and easy to replace later.

Good placeholders:

- `Artist Name`
- `TODO: replace with final biography`
- `/images/placeholder-hero.jpg`

Bad placeholders:

- Fake testimonials from real-looking people.
- Fake legal addresses.
- Fake awards, credits, or venues.
- Fake API keys or secrets that look real.

## Commit Policy

Do not create commits unless the user asks.

When commits are requested:

- Keep commits focused by phase or feature.
- Use a concise message such as `Add booking form validation`.
- Ensure the staged diff does not include secrets or unrelated generated files.
- Mention any skipped verification in the commit summary or final response.
