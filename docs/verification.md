# Verification

This file defines the commands and checks the agent should use while implementing the MVP.

Some commands may not exist until the project is initialized. If a command is unavailable, record that in `mvp_progress.md`.

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

## Verification by Change Type

Documentation-only change:

- Review rendered Markdown if useful.
- No build required unless documentation generation is added.

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

Before marking a major phase done:

- Run lint.
- Run typecheck.
- Run tests if available.
- Run production build.
- Update `mvp_progress.md`.

