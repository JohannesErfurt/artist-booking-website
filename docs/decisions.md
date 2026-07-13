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

Impact:
The agent can complete local/code work autonomously while marking external tasks as blocked until human input is available.

