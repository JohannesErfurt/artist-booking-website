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

- [x] Supabase project exists and required env vars are configured locally or in the target environment (local only so far)
- [x] `booking_requests` schema has been applied and verified
- [x] Booking API stores valid requests in Supabase
- [ ] Resend account and verified sender are configured
- [x] Booking notification emails are received by the configured recipient (local test, Resend test sender)
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
| Resend sending domain              | Own domain verified in Resend; production API key              | Human owner | 2026-10-03 | Buy domain, add Resend DNS records, set production env vars                      |
| Turnstile production verification  | Turnstile site and secret keys                                 | Human owner | 2026-07-13 | Create Turnstile site and add keys to production env                             |
| Artist content approval            | Artist sign-off on the German texts researched on 2026-10-03; real testimonials | Human owner | 2026-10-03 | Review `frontend/content/site.ts`; add testimonials when available |
| Media rights and more photos       | Rights confirmation for the flyer photo and the third-party video; more and higher-quality photos | Human owner | 2026-10-03 | Confirm rights; add photos to `frontend/public/images/` |
| Legal page approval                | Impressum and Privacy Policy legal text                        | Human owner | 2026-07-13 | Replace placeholder legal copy after GDPR review                                 |
| Production deployment              | Vercel, domain, DNS, production secrets                        | Human owner | 2026-07-13 | Connect repo to Vercel and configure deployment                                  |

## Assumptions

- The site is built as a Next.js App Router application with TypeScript and Tailwind CSS.
- Node.js `24.x` was used for verification; project targets Node.js `20.x` LTS or newer per docs.
- npm is the package manager.
- Without Supabase credentials, booking requests persist to `frontend/data/booking-requests.json`.
- Without Resend credentials, bookings are saved but notification emails are skipped.
- Turnstile is enforced only in production when both Turnstile keys are configured.
- The site is in German (informal "du", as on the artist's flyer) and branded "Quetschen-Hannes".
- Hero, gallery and OG images are cropped from the flyer photo in `data/` (a photo of a printed flyer, so quality is limited).

## Assumptions Log

| Date       | Assumption                                                                             | Impact                                         | Revisit When                                 |
| ---------- | -------------------------------------------------------------------------------------- | ---------------------------------------------- | -------------------------------------------- |
| 2026-07-13 | Next.js App Router, TypeScript, Tailwind CSS, Node.js 20.x+, and npm are the baseline. | Guides setup and verification commands.        | Project initialization starts.               |
| 2026-07-13 | Local JSON file storage is acceptable when Supabase is not configured.                 | Enables local API testing without credentials. | Supabase credentials are provided.           |
| 2026-07-13 | Placeholder Unsplash images are acceptable for local MVP only.                         | Superseded 2026-10-03 by the flyer photo.      | —                                            |
| 2026-10-03 | Biography facts from public actor profiles and an event listing are accurate.          | About page and homepage texts.                 | Artist reviews the texts.                    |
| 2026-10-03 | Phone and email printed on the flyer may be published on the website.                  | Contact page, footer, structured data.         | Artist confirms public contact details.      |
| 2026-10-03 | Booking event types fit a party entertainer (Geburtstag, Hochzeit, ...).               | Booking form and validation enum.              | Artist confirms the list.                    |

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
| 2026-10-03 | lint, typecheck, format:check, test, build | Pass | After public website content update (4 tests, 13 routes) |
| 2026-10-03 | POST `/api/booking` invalid payload | Pass   | HTTP 400 with German field errors        |
| 2026-10-03 | lint, typecheck, format:check, test | Pass   | After design and UX update (4 tests)     |
| 2026-10-03 | `next build` (temporary copy)       | Pass   | 13 routes; built outside `frontend/` because the dev server was running |
| 2026-10-03 | lint, typecheck, format:check, test | Pass   | After email notification update (11 tests in 3 files); build not re-run |
| 2026-10-03 | POST `/api/booking` valid payload   | Pass   | `storage: local`, `emailSent: false` (Resend not configured) |
| 2026-10-03 | Booking form → notification email   | Pass   | Owner received the email via Resend test sender (local dev) |
| 2026-10-03 | lint, typecheck, format:check, test | Pass   | After email HTML layout fix (11 tests); build not re-run |
| 2026-10-03 | Booking form → Supabase row         | Pass   | Row read back with the secret key; first attempt failed due to publishable key and `/rest/v1/` in the URL |

## Public Website Content (2026-10-03)

Section 3 of the MVP plan was filled with real content for "Quetschen-Hannes" (Hannes Ducke):

- Content source of truth: `frontend/content/site.ts` (German).
- Images: `frontend/public/images/quetschen-hannes.jpg` (hero, gallery), `quetschen-hannes-flyer.jpg` (homepage, gallery), `quetschen-hannes-og.jpg` (Open Graph), all derived from `data/IMG-20260716-WA0003.jpg`.
- Videos: YouTube IDs `-N4YfuetieY` (artist's own channel) and `Nzw2xUSu64c` (channel "Wir lieben Köpenick") from `data/youtube-links.txt`.
- Contact details: phone and email as printed on the flyer.
- Biography sources: schauspielervideos.de, neuestheater-hannover.de, neidig.org (via search summary), stadtleben.de event listing.
- Testimonials: one invented placeholder (labelled "Beispiel-Kundin (Platzhalter)") was added on 2026-10-03 at the owner's request to preview the layout. It must be replaced with a real, approved quote or removed before launch. The homepage section renders only when `testimonials` is non-empty.
- UI strings on public pages, navigation, footer, booking form and validation messages were translated to German; `<html lang>` is `de`.
- Not changed: Impressum and Privacy pages still contain English placeholder text (section 10).

## Design and UX Update (2026-10-03)

- Colour scheme changed from violet to the flyer red (`--color-brand-*` in `frontend/styles/globals.css`), with warm neutrals and a dark footer.
- Display font "Caprasimo" (via `next/font`) for headings and the logo, to echo the flyer lettering. Font variables moved to `<html>` so theme tokens resolve (Geist was previously not applied either).
- Homepage: red hero with photo and two calls to action (enquiry form, tap-to-call), service cards, video teaser, three-step booking explanation, about teaser, closing call to action.
- Navigation: sticky header with enquiry button, icon menu button on mobile, active page marked, skip link.
- Videos load only after the visitor presses play (`components/media/LiteYouTube.tsx`, `youtube-nocookie.com`).
- Gallery lightbox: closes with Escape, locks page scroll, shows images uncropped.
- Contact page: tap-to-call and mail cards, larger form fields, placeholders, past dates disabled.
- The three booking steps (`bookingSteps` in `frontend/content/site.ts`) describe a generic process and need the artist's confirmation.

## Email Notification Update (2026-10-03)

- Notification email (subject, text and HTML) is now German; the event date is shown as DD.MM.YYYY.
- `replyTo` is set to the customer's address, so replying to the notification reaches the customer.
- Email failures no longer pass silently: skipped (not configured) is logged with `console.warn`, failed sends with `console.error`, each with the booking id only. A thrown network error is caught and does not fail the booking.
- Delivery verified on 2026-10-03: the owner configured Resend in `frontend/.env.local` (test sender `onboarding@resend.dev`), submitted the form locally and received the notification email.
- After that test the HTML email was rebuilt as a complete document with padding, because the last line was cut off in the owner's mail client. The owner has not yet confirmed the fix with a new test email.
- Still open: verifying an own sending domain in Resend (needs the domain) and production env vars.

## Database Preparation (2026-10-03)

- `supabase/migrations/001_booking_requests.sql` now enables row level security on `booking_requests` and revokes access from the `anon` and `authenticated` roles. Only the service role key used by the server can read or write.
- 2026-10-03: the owner created the Supabase project (Frankfurt, Data API on, automatic table exposure off, automatic RLS on) and applied the script. Because automatic exposure is off, the script also grants the table to `service_role`.
- Verified: a booking submitted through the local form was stored (1 row, status `new`), read back with the secret server key. Not verified: that the publishable key is actually denied access.
- Saving failures are now logged with the database error, and the visitor sees a German error message.
- Two follow-up tasks were added to section 5 of the MVP plan (2026-10-03, `TODO`): a daily keep-alive job against Supabase's free-plan pausing, and sending the notification email even when the database is unavailable.

## Dependency Audit Notes

Remaining `npm audit` findings after the 2026-10-03 non-breaking fix (9: 3 moderate, 6 high). All require `npm audit fix --force` and were intentionally left:

- `postcss` 8.4.31 bundled inside `next` 15.x (high): build-time only; fix requires `next` 16.x (breaking). Revisit when upgrading to Next.js 16.
- `braces` → `micromatch` → `fast-glob` → `eslint-config-next` (high): lint tooling only; forced fix would downgrade `eslint-config-next` to 14.x.
- `vitest` / `@vitest/mocker` (moderate): test tooling only; fix requires vitest 5 (breaking).

## Manual QA Notes (Local)

- 2026-10-03 (design update, dev server): checked `/`, `/about`, `/gallery`, `/videos`, `/contact` at desktop width and 375px. Fonts and colours apply, mobile menu opens, lightbox opens and closes with Escape, video swaps to the player on click, no horizontal overflow. Not checked: actual video playback, booking form submission, Impressum and Privacy pages, keyboard-only navigation.

- 2026-10-03: checked `/`, `/about`, `/gallery`, `/videos`, `/contact` against the production build on port 3001: all routes return 200, images load, both YouTube embeds render, no console errors, no horizontal overflow at 375px width. Booking form submission was not re-tested in the browser.

- Public routes implemented: `/`, `/about`, `/gallery`, `/videos`, `/contact`, `/impressum`, `/privacy`
- Navbar and footer render on all pages; legal links wired
- Booking form includes loading, success, and error states
- Gallery lightbox implemented as client component
- Full responsive manual QA on multiple devices deferred to human owner; layout uses responsive Tailwind utilities

## Next Suggested Tasks

1. Human owner: put the Supabase and Resend values into the production environment (Vercel) at deployment
2. Human owner: provide Resend and Turnstile credentials in `.env.local`
3. Human owner: have the artist review the texts in `frontend/content/site.ts`, confirm media rights, and supply more photos and real testimonials
4. Human owner: approve legal text for Impressum and Privacy Policy
5. Human owner: deploy to Vercel and configure production domain
