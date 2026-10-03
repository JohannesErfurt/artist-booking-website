# MVP Progress

This file is the live state tracker for loop engineering. The agent should update it after each implementation loop, verification run, or blocker discovery.

## Current Status

- Overall status: `LOCAL_MVP_DONE`
- Current phase: `11. Local Verification`
- Current task: `Complete — awaiting human inputs for Integration MVP`
- Last updated: `2026-10-03`
- Repository layout: application code lives in `frontend/`

## Local MVP Definition of Done

- [x] App runs locally
- [x] All public pages exist
- [x] Booking form validates input
- [x] Booking API endpoint exists
- [x] Database integration is implemented behind environment variables
- [x] Email integration is implemented behind environment variables
- [x] Spam protection is implemented behind environment variables
- [x] Placeholder artist content is clearly labeled and isolated
- [x] SEO basics are implemented
- [x] Legal placeholder pages exist
- [x] Lint passes
- [x] Typecheck passes
- [x] Tests pass
- [x] Production build passes
- [x] `loop-engineering/mvp_progress.md` is updated

## Integration MVP Definition of Done

- [ ] Supabase project exists and required env vars are configured locally or in the target environment
- [ ] `booking_requests` schema has been applied and verified
- [ ] Booking API stores valid requests in Supabase
- [ ] Resend account and verified sender are configured
- [ ] Booking notification emails are received by the configured recipient
- [ ] Cloudflare Turnstile keys are configured
- [ ] Turnstile verification rejects invalid production submissions
- [ ] Integration verification results are recorded in `loop-engineering/mvp_progress.md`

## Completed Tasks

### 1. Project Setup

- [x] Add `.gitignore`
- [x] Add `README.md` with local setup and env var documentation
- [x] Create Next.js App Router application
- [x] Enable TypeScript, Tailwind CSS, absolute imports
- [x] Configure ESLint and Prettier with lint/format scripts
- [x] Configure environment variable loading via `.env.example`
- [x] Add basic project folder structure
- [x] Verify production build

### 2. UI Foundation

- [x] Design tokens in `styles/globals.css`
- [x] Navbar, Footer, Hero, Section, Button, Card, form fields, PageLayout

### 3. Public Website

- [x] Home, About, Gallery, Videos, Contact pages with placeholder content

### 4. Booking Request System

- [x] Booking form with all MVP fields and states
- [x] Zod validation client-side and server-side
- [x] Sanitization and structured API errors
- [x] `/api/booking` endpoint with local fallback storage

### 5. Database Implementation

- [x] SQL migration for `booking_requests`
- [x] Supabase server client and insert function behind env vars

### 6. Email Notification Implementation

- [x] Plain text and HTML notification templates
- [x] Resend integration behind env vars with graceful failure

### 7. Basic Security

- [x] Server-side validation and sanitization
- [x] Turnstile widget and server verification (optional in local dev)
- [x] Secrets referenced only from environment variables

### 8. Performance Basics

- [x] Next.js Image usage, optimized fonts, scoped client components

### 9. SEO Basics

- [x] Metadata, Open Graph, sitemap, robots, Person/Musician structured data

### 10. Legal Pages

- [x] Impressum and Privacy Policy placeholder pages linked from footer

### 11. Local Verification

- [x] Lint, typecheck, tests, format, build
- [x] Booking API tested with valid and invalid payloads
- [x] Local storage fallback verified (`storage: local`)

## In Progress

- [ ] None

## Blocked Tasks

| Task                               | Required Input or Condition                                    | Owner       | Date       | Next Action                                                                      |
| ---------------------------------- | -------------------------------------------------------------- | ----------- | ---------- | -------------------------------------------------------------------------------- |
| Supabase integration verification  | Supabase project URL and service role key                      | Human owner | 2026-07-13 | Create Supabase project and apply `supabase/migrations/001_booking_requests.sql` |
| Resend email delivery verification | Resend API key and verified sender                             | Human owner | 2026-07-13 | Configure Resend account and env vars                                            |
| Turnstile production verification  | Turnstile site and secret keys                                 | Human owner | 2026-07-13 | Create Turnstile site and add keys to production env                             |
| Final artist content               | Name, bio, services, testimonials, contact details             | Human owner | 2026-07-13 | Update `frontend/content/site.ts`                                                         |
| Final media assets                 | Hero, gallery images, video IDs, OG image, rights confirmation | Human owner | 2026-07-13 | Replace placeholders in `frontend/content/site.ts` and `frontend/public/images/`                   |
| Legal page approval                | Impressum and Privacy Policy legal text                        | Human owner | 2026-07-13 | Replace placeholder legal copy after GDPR review                                 |
| Production deployment              | Vercel, domain, DNS, production secrets                        | Human owner | 2026-07-13 | Connect repo to Vercel and configure deployment                                  |

## Assumptions

- The site is built as a Next.js App Router application with TypeScript and Tailwind CSS.
- Node.js `24.x` was used for verification; project targets Node.js `20.x` LTS or newer per docs.
- npm is the package manager.
- Without Supabase credentials, booking requests persist to `frontend/data/booking-requests.json`.
- Without Resend credentials, bookings are saved but notification emails are skipped.
- Turnstile is enforced only in production when both Turnstile keys are configured.
- Placeholder gallery images use Unsplash URLs for local development only.

## Assumptions Log

| Date       | Assumption                                                                             | Impact                                         | Revisit When                                 |
| ---------- | -------------------------------------------------------------------------------------- | ---------------------------------------------- | -------------------------------------------- |
| 2026-07-13 | Next.js App Router, TypeScript, Tailwind CSS, Node.js 20.x+, and npm are the baseline. | Guides setup and verification commands.        | Project initialization starts.               |
| 2026-07-13 | Local JSON file storage is acceptable when Supabase is not configured.                 | Enables local API testing without credentials. | Supabase credentials are provided.           |
| 2026-07-13 | Placeholder Unsplash images are acceptable for local MVP only.                         | Gallery and hero render without human media.   | Final media assets and rights are confirmed. |

## Verification Log

| Date       | Command or Check                    | Result | Notes                                    |
| ---------- | ----------------------------------- | ------ | ---------------------------------------- |
| 2026-07-13 | `npm install`                       | Pass   | 399 packages installed                   |
| 2026-07-13 | `npm run lint`                      | Pass   | After ignoring generated `next-env.d.ts` |
| 2026-07-13 | `npm run typecheck`                 | Pass   | No TypeScript errors                     |
| 2026-07-13 | `npm run test`                      | Pass   | 4 validation/sanitization tests          |
| 2026-07-13 | `npm run format:check`              | Pass   | After Prettier formatting                |
| 2026-07-13 | `npm run build`                     | Pass   | 13 routes generated                      |
| 2026-07-13 | `npm run dev`                       | Pass   | Dev server ready on port 3000            |
| 2026-07-13 | POST `/api/booking` valid payload   | Pass   | `storage: local`, `emailSent: false`     |
| 2026-07-13 | POST `/api/booking` invalid payload | Pass   | HTTP 400 with structured field errors    |
| 2026-10-03 | `npm audit fix` (no `--force`)      | Pass   | 13 → 9 vulnerabilities; critical cleared; `next` 15.5.27, `sharp` 0.35.5; only `package-lock.json` changed |
| 2026-10-03 | `npm run lint`                      | Pass   | After audit fix                          |
| 2026-10-03 | `npm run typecheck`                 | Pass   | After audit fix                          |
| 2026-10-03 | `npm run format:check`              | Pass   | After audit fix                          |
| 2026-10-03 | `npm run test`                      | Pass   | 4 tests, vitest 3.2.7                    |
| 2026-10-03 | `npm run build`                     | Pass   | 13 routes generated                      |

## Dependency Audit Notes

Remaining `npm audit` findings after the 2026-10-03 non-breaking fix (9: 3 moderate, 6 high). All require `npm audit fix --force` and were intentionally left:

- `postcss` 8.4.31 bundled inside `next` 15.x (high): build-time only; fix requires `next` 16.x (breaking). Revisit when upgrading to Next.js 16.
- `braces` → `micromatch` → `fast-glob` → `eslint-config-next` (high): lint tooling only; forced fix would downgrade `eslint-config-next` to 14.x.
- `vitest` / `@vitest/mocker` (moderate): test tooling only; fix requires vitest 5 (breaking).

## Manual QA Notes (Local)

- Public routes implemented: `/`, `/about`, `/gallery`, `/videos`, `/contact`, `/impressum`, `/privacy`
- Navbar and footer render on all pages; legal links wired
- Booking form includes loading, success, and error states
- Gallery lightbox implemented as client component
- Full responsive manual QA on multiple devices deferred to human owner; layout uses responsive Tailwind utilities

## Next Suggested Tasks

1. Human owner: create Supabase project and apply `supabase/migrations/001_booking_requests.sql`
2. Human owner: provide Resend and Turnstile credentials in `.env.local`
3. Human owner: replace placeholder content in `frontend/content/site.ts`
4. Human owner: approve legal text for Impressum and Privacy Policy
5. Human owner: deploy to Vercel and configure production domain
