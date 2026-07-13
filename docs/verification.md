# Verification

This file defines the commands and checks the agent should use while implementing the MVP.

Some commands may not exist until the project is initialized. If a command is unavailable, record that in `mvp_progress.md`.

## Runtime and Package Manager

- Node.js: `20.x` LTS or newer.
- Package manager: `npm`, unless a different lockfile is intentionally introduced.

If implementation requires a different runtime or package manager, update this file, `README.md`, and `mvp_progress.md`.

## Expected Commands

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Run lint:

```bash
npm run lint
```

Run typecheck:

```bash
npm run typecheck
```

Run tests:

```bash
npm run test
```

Run production build:

```bash
npm run build
```

Run formatting check:

```bash
npm run format:check
```

Expected environment variables are listed in `.env.example`:

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_TURNSTILE_SITE_KEY`
- `TURNSTILE_SECRET_KEY`
- `SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`
- `RESEND_API_KEY`
- `BOOKING_NOTIFICATION_TO`
- `BOOKING_NOTIFICATION_FROM`

## Verification by Change Type

Documentation-only change:

- Review rendered Markdown if useful.
- No build required unless documentation generation is added.

Project setup or dependency change:

- Run install if dependency files changed.
- Run lint if configured.
- Run typecheck if configured.
- Run build if the app exists.

Styling or component change:

- Run lint.
- Run build.
- Perform relevant manual QA.

Form validation change:

- Run lint.
- Run typecheck.
- Run tests if available.
- Test valid and invalid form submissions.

API route change:

- Run lint.
- Run typecheck.
- Run tests if available.
- Test valid and invalid API payloads.

Database integration change:

- Run lint.
- Run typecheck.
- Test with configured Supabase credentials if available.
- Record blocker if credentials are missing.

Email integration change:

- Run lint.
- Run typecheck.
- Test with configured Resend credentials if available.
- Record blocker if credentials or verified sender are missing.

SEO, metadata, sitemap, or robots change:

- Run lint.
- Run build.
- Inspect generated metadata/routes where possible.

Legal page change:

- Run lint/build for code changes.
- Confirm placeholder or final legal text status is documented.
- Require human approval before production launch.

## Testing Rules

Tests are required when a test framework exists and any of these areas change:

- Validation schemas.
- API routes.
- Database adapter or storage behavior.
- Email notification flow.
- Turnstile verification logic.
- Shared utilities used by more than one route or component.
- Bug fixes where a regression test can be reasonably added.

Tests are recommended for:

- Complex interactive UI such as lightbox behavior or multi-state forms.
- Accessibility behavior that can be checked with component or end-to-end tests.

Tests are not required for:

- Documentation-only changes.
- Placeholder copy changes.
- Static layout changes that are adequately covered by manual QA.

If tests are required but no test framework exists yet, the agent should either add an appropriate minimal test setup for the changed area or record the missing test framework as a blocker or assumption in `mvp_progress.md`.

Before marking a major phase done:

- Run lint.
- Run typecheck.
- Run tests if available.
- Run production build.
- Update `mvp_progress.md`.
