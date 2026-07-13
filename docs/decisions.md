# Decision Log

Record meaningful implementation decisions here. Keep entries short.

## Template

```md
## YYYY-MM-DD - Decision title

Decision:

Reason:

Alternatives considered:

Impact:
```

## 2026-07-13 - Use Next.js App Router for MVP

Decision:
Build the MVP as a Next.js App Router application.

Reason:
The original MVP plan specifies Next.js with App Router, TypeScript, and Tailwind CSS.

Alternatives considered:
None yet.

Impact:
The app structure, routing, metadata, API endpoints, and deployment path should follow current Next.js App Router conventions.

## 2026-07-13 - Separate local MVP from production MVP

Decision:
Track local implementation completion separately from production launch completion.

Reason:
Production launch requires human-provided content, credentials, legal approval, domain setup, and external account access.

Alternatives considered:
A single MVP checklist.

## 2026-07-13 - Local booking fallback without Supabase

Decision:
Store booking requests in `data/booking-requests.json` when Supabase credentials are not configured.

Reason:
Local development and agent verification should work without human-provided Supabase credentials.

Alternatives considered:
In-memory storage only; requiring Supabase for all environments.

Impact:
The booking API remains testable locally while production can use Supabase once credentials and schema are applied.

## 2026-07-13 - Move application code into frontend/

Decision:
Keep the Next.js application, tests, and frontend tooling in `frontend/` at the repository root.

Reason:
Separates the web application from repo-level docs, loop-engineering plans, and database migrations.

Alternatives considered:
Keeping a flat repository layout.

Impact:
Run npm and Make commands from the repo root via `make ...`, or directly inside `frontend/`. Vercel deployments should use `frontend` as the root directory.
