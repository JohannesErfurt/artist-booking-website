# MVP Checklist Acceptance Matrix

This file makes `artist_booking_website_loop_engineering_plan.md` verifiable. A checklist item is complete only when its acceptance criteria are true and its verification step has been run or explicitly recorded as blocked in `mvp_progress.md`.

## Universal Rules

- Every implementation task must satisfy the matching section criteria in `mvp_acceptance_criteria.md`.
- Every completed task must have either a command result, manual QA result, code inspection note, or documented external verification.
- Every blocked task must be recorded in `mvp_progress.md` with the missing input, owner, and next action.
- Human-input tasks are never completed with invented placeholder values.

## Project Setup

| Checklist Item | Acceptance Criteria | Verification |
| --- | --- | --- |
| Add `.gitignore` | Ignores `node_modules`, `.next`, `.env*`, logs, coverage, and local editor/system files while keeping `.env.example` trackable. | Inspect `.gitignore`; run `git status --short`. |
| Add `README.md` | Documents purpose, local setup, commands, env vars, verification, and deployment prerequisites. | Read README; compare commands with `package.json` after app setup. |
| Document local setup instructions | A new developer can install dependencies, configure env placeholders, and start dev server from docs. | Follow or inspect documented steps. |
| Document required environment variables with placeholder names only | All required env vars are named without real or real-looking secret values. | Compare README/docs with `.env.example`. |
| Add `.env.example` | Lists all required public and server env vars with empty values. | Inspect `.env.example`. |
| Create Next.js application using App Router | App uses the `app` directory and App Router conventions. | Inspect structure; run `npm run build` when available. |
| Enable TypeScript | TypeScript config exists and app code is typed. | Run `npm run typecheck` when configured. |
| Enable Tailwind CSS | Tailwind config/global styles exist and compile. | Run `npm run build`; inspect rendered styles. |
| Configure absolute imports | A stable alias such as `@/*` works. | Inspect `tsconfig.json`; compile aliased imports. |
| Configure environment variable loading | Server env vars are read server-side; public env vars use `NEXT_PUBLIC_` only when safe. | Inspect env helper; run build. |
| Add a basic project folder structure | Folders clearly separate routes, components, content, server utilities, styles, and tests if present. | Inspect folder tree. |
| Configure ESLint | ESLint config exists. | Run `npm run lint`. |
| Configure Prettier | Prettier config exists. | Run `npm run format:check` when configured. |
| Add lint script | `package.json` exposes lint command. | Run `npm run lint`. |
| Add format script | `package.json` exposes format or format check command. | Run `npm run format:check` or `npm run format`. |
| Add build script | `package.json` exposes production build command. | Run `npm run build`. |
| Verify the app builds locally | Production build succeeds without unresolved errors. | Run `npm run build`; record result. |

## UI Foundation

| Checklist Item | Acceptance Criteria | Verification |
| --- | --- | --- |
| Define color palette | Reusable colors exist for background, foreground, accent, muted, border, success, and error states. | Inspect theme/styles; manual visual check. |
| Define typography | Base font, headings, labels, and body text are defined without viewport-width font scaling. | Inspect styles; manual mobile/desktop check. |
| Define spacing system | Layout spacing uses consistent theme/Tailwind values. | Inspect components. |
| Define responsive breakpoints | Layouts adapt at meaningful Tailwind breakpoints. | Manual QA mobile/desktop. |
| Define button styles | Primary, secondary, disabled, hover, and focus states exist. | Inspect component; manual QA. |
| Define form styles | Labels, inputs, focus states, errors, and help text are consistent. | Inspect form components; manual QA. |
| Ensure the design is mobile-friendly | No horizontal overflow, clipped text, or unusable controls on mobile. | Manual QA mobile viewport. |
| Create Navbar component | Renders brand, primary links, focus states, and mobile navigation. | Manual QA navigation. |
| Create Footer component | Renders contact/booking CTA and legal links. | Manual QA footer links. |
| Create Hero component | Supports title, supporting text, CTA, and visual/media area without overlap. | Manual QA home page. |
| Create Section component | Provides consistent width and vertical spacing. | Inspect usage across pages. |
| Create Button component | Supports button/link usage, variants, disabled state, and accessible focus. | Run lint/typecheck; inspect UI. |
| Create Card component | Supports repeated content groups with stable spacing and restrained radius. | Inspect usage; manual QA. |
| Create form field components | Exposes label, error, help text, required state, and accessible IDs. | Inspect markup; manual QA form. |
| Create page layout wrapper | Provides header, footer, and main landmark for public pages. | Inspect root layout; manual QA pages. |

## Public Website

| Checklist Item | Acceptance Criteria | Verification |
| --- | --- | --- |
| Create hero section | Home page first viewport includes title, intro, CTA, and visual area. | Manual QA. |
| Add placeholder artist headline | Headline is clearly placeholder and centralized for replacement. | Inspect content source. |
| Add placeholder artist introduction | Intro is clearly placeholder and not presented as real biography. | Inspect content source. |
| Add booking CTA button | CTA navigates to contact page or booking form. | Click CTA. |
| Add featured images | Featured media renders with stable dimensions and placeholder/final data support. | Manual QA. |
| Add testimonials | Testimonials section exists and placeholders are clearly labeled if used. | Inspect content. |
| Add contact CTA | CTA routes visitor toward contact/booking. | Click CTA. |
| Add artist biography | About page has replaceable biography content. | Inspect page/content. |
| Add experience and references | About page has replaceable experience/reference content. | Inspect page/content. |
| Add achievements | About page has replaceable achievements content. | Inspect page/content. |
| Create image gallery | Gallery renders responsive image grid/list. | Manual QA mobile/desktop. |
| Optimize images with Next.js Image | Key images use `next/image` with stable dimensions where appropriate. | Inspect code; run build. |
| Add lightbox functionality | Image opens larger view and can be closed by pointer and keyboard. | Manual QA. |
| Embed YouTube videos | Videos render from configurable IDs/URLs. | Inspect data; manual QA. |
| Create responsive video layout | Embeds preserve aspect ratio on mobile and desktop. | Manual QA. |
| Add contact information | Contact page shows clear placeholder or final contact details. | Inspect page. |
| Add booking request form | Contact page includes complete MVP booking form. | Manual QA form render. |

## Booking Request System

| Checklist Item | Acceptance Criteria | Verification |
| --- | --- | --- |
| Name | Field has label, required validation, error display, and payload mapping. | Manual QA; inspect payload. |
| Email | Field validates required email format and maps to payload. | Manual QA invalid email. |
| Phone number | Field accepts reasonable phone input and maps to payload. | Manual QA. |
| Event date | Field validates required date input and maps to payload. | Manual QA. |
| Event location | Field is labeled, validated, and included in payload. | Inspect payload/API. |
| Event type | Field is labeled, validated, and included in payload. | Inspect payload/API. |
| Number of guests | Field validates positive numeric input and maps to `guest_count`. | Manual QA invalid count. |
| Message | Field validates length, is sanitized, and maps to payload. | Inspect schema; manual QA. |
| Add accessible labels and validation messages | Labels and errors are programmatically associated with fields. | Inspect markup; keyboard QA. |
| Add loading state during submission | Form prevents duplicate submits and communicates pending state. | Manual QA. |
| Add success state after submission | Success message appears after valid submit. | Manual QA/API test. |
| Add error state after failed submission | Safe error message appears after failure. | Manual QA/API test. |
| Add Zod validation | Schema covers every booking field. | Inspect schema; run tests/typecheck. |
| Validate user input | Client and server reject invalid values. | Manual QA and API invalid payload test. |
| Sanitize input | Text fields are trimmed/normalized and not rendered as raw HTML. | Inspect code; test suspicious input. |
| Create API endpoint | POST endpoint accepts valid payloads and rejects invalid ones. | API valid/invalid tests. |
| Store booking request | Valid request is stored in local fallback or Supabase depending on config. | Manual/API test; inspect storage. |
| Send email notification | Valid request triggers notification when Resend is configured. | Integration test with credentials or block. |
| Handle errors gracefully | API returns safe structured errors and preserves useful UX state. | Failure-path test or documented simulation. |

## Database

| Checklist Item | Acceptance Criteria | Verification |
| --- | --- | --- |
| Create Supabase project | Human-provided project exists and connection details are available. | Human confirmation or tool verification. |
| Configure environment variables | Supabase env vars are present in `.env.example` and configured in runtime when testing integrations. | Inspect `.env.example`; integration test when values exist. |
| `booking_requests` fields | Schema includes `id`, `created_at`, `name`, `email`, `phone`, `event_date`, `event_location`, `event_type`, `guest_count`, `message`, and `status`. | Inspect SQL/migration. |
| Booking request statuses | Status defaults to `new` and is restricted to `new`, `contacted`, `accepted`, and `declined`. | Inspect enum/check constraint. |

## Email Notifications

| Checklist Item | Acceptance Criteria | Verification |
| --- | --- | --- |
| Create Resend account | Human-provided account exists. | Human confirmation or tool verification. |
| Configure API key | `RESEND_API_KEY` is documented and configured only in secret storage/local ignored env. | Inspect `.env.example`; integration test when value exists. |
| Verify domain | Sending domain or sender is verified. | Human confirmation or Resend verification. |
| Create email template | Template includes requester, event, and message details plus plain text fallback. | Inspect template. |
| Send notification after booking request | Valid booking triggers email send when Resend is configured. | Integration test with credentials. |
| Handle email failures | Booking is not lost if email fails and safe failure is recorded. | Simulate or document failure behavior. |

## Security, Performance, SEO, Legal, and Deployment

| Checklist Item | Acceptance Criteria | Verification |
| --- | --- | --- |
| Validate all inputs | Server-side validation rejects missing/malformed values. | API invalid tests. |
| Prevent injection attacks | User text is sanitized and never rendered as unsafe HTML. | Inspect code; test suspicious input. |
| Add Cloudflare Turnstile | Widget/client placeholder and server verification are implemented behind env vars. | Inspect code; integration test or block. |
| Verify Turnstile server-side | API rejects invalid production token. | Integration test or documented simulation. |
| Store secrets in Vercel environment variables | Production secrets are added to Vercel by human or approved tool. | Human/tool confirmation. |
| Verify secrets are not committed | No real secrets are tracked. | Run `git status --short`; inspect env files. |
| Optimize image sizes | README gives image guidance and implemented images use reasonable dimensions. | Inspect README/assets. |
| Use WebP/AVIF where appropriate | Docs or implementation prefers modern formats where practical. | Inspect assets/docs. |
| Enable lazy loading | Non-critical images are lazy-loaded or rely on Next defaults. | Inspect image usage. |
| Optimize fonts | Font strategy uses `next/font`, local fonts, or documented system stack. | Inspect layout/styles. |
| Remove unnecessary dependencies | Dependencies are limited to actual runtime/dev needs. | Inspect `package.json`. |
| Add page titles | Every public page has meaningful metadata title. | Inspect metadata. |
| Add meta descriptions | Every public page has meaningful metadata description. | Inspect metadata. |
| Add Open Graph images | OG image config exists with placeholder or final image. | Inspect metadata. |
| Create sitemap.xml | Sitemap includes public routes. | Visit or inspect route/file. |
| Create robots.txt | Robots file exists and points to sitemap when site URL is configured. | Visit or inspect route/file. |
| Add Person schema | JSON-LD Person schema exists with clearly replaceable placeholder data. | Inspect rendered/source output. |
| Add Musician schema | JSON-LD Musician schema exists with clearly replaceable placeholder data. | Inspect rendered/source output. |
| Add Impressum | `/impressum` route exists with placeholder or approved legal content. | Manual QA. |
| Add Privacy Policy | `/privacy` route exists with placeholder or approved legal content. | Manual QA. |
| Review GDPR requirements | Human review is recorded before production launch. | Human approval. |
| Deploy application | Vercel deployment succeeds. | Deployment/tool confirmation. |
| Connect GitHub repository | Vercel is connected to the intended repo when needed. | Human/tool confirmation. |
| Purchase domain | Domain is purchased by human. | Human confirmation. |
| Configure DNS | Domain points to deployment target. | DNS/production check. |
| Enable HTTPS | Production URL serves HTTPS without certificate errors. | Browser/curl check. |

## Local Verification Items

Each local verification checkbox is complete only when the check has been run and the result is recorded in `mvp_progress.md`.

| Checklist Item | Acceptance Criteria | Verification |
| --- | --- | --- |
| Run linter | Lint command completed or blocker recorded. | `npm run lint`. |
| Run formatter or formatting check | Format check completed or blocker recorded. | `npm run format:check`. |
| Run production build | Build completed or blocker recorded. | `npm run build`. |
| Test booking form validation manually | Valid and invalid UI paths checked. | Use `docs/manual_qa.md`. |
| Test booking API with valid payload | API accepts representative valid payload. | API/manual test. |
| Test booking API with invalid payload | API rejects representative invalid payload. | API/manual test. |
| Test mobile layout | Key pages checked at mobile width. | Manual QA. |
| Test navigation between all public pages | Navbar/footer/page links work. | Manual QA. |
| Update this checklist with completed items | Checklist and progress file reflect actual state. | Review plan and `mvp_progress.md`. |

## Human Input Checklist Items

All human-input checklist items share these criteria:

- The requested content, credential, account, approval, legal detail, media asset, or deployment decision is provided by the human owner or verified through an approved tool.
- Secrets are stored only in local ignored env files or approved production secret stores.
- Media rights are confirmed before production use.
- Legal/business details are approved by the human owner before production use.
- Missing items are recorded as `BLOCKED` in `mvp_progress.md`.

