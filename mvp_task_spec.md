# MVP Task Spec

This is the canonical starting point for loop engineering in this repository.

## Goal

Build a professional, mobile-friendly artist booking website for an actor/musician that allows visitors to:

- Learn about the artist.
- View photos and videos.
- Understand available services.
- Submit booking requests.
- Contact the artist.

The MVP should be production-ready once the required human-provided content, credentials, legal details, and deployment inputs are available.

## Scope

### In Scope for the Coding Agent

- Initialize and configure a Next.js App Router application.
- Enable TypeScript, Tailwind CSS, ESLint, Prettier, and absolute imports.
- Build the public website pages with clearly labeled placeholders where final content is missing.
- Create reusable layout, content, button, card, and form components.
- Implement the booking request form.
- Add client-side and server-side validation.
- Create the booking request API endpoint.
- Add Supabase integration behind server-side environment variables.
- Add Resend email notification integration behind server-side environment variables.
- Add Cloudflare Turnstile integration behind environment variables.
- Add SEO basics, sitemap, robots file, and structured data.
- Add Impressum and Privacy Policy placeholder pages.
- Add local verification and documentation.

### Human Input Required

- Final artist name, biography, services, achievements, references, and testimonials.
- Final images, image rights confirmation, captions, alt text, and YouTube video URLs.
- Supabase, Resend, Cloudflare Turnstile, Vercel, GitHub, and domain access as needed.
- Real environment variable values and production secrets.
- Legal details for Impressum and Privacy Policy.
- GDPR/legal review.
- Domain purchase, DNS configuration, and production launch approval.

### Out of Scope for the MVP

- Admin dashboard for managing booking requests.
- Customer accounts.
- Multi-artist marketplace functionality.
- Advanced calendar availability and double-booking prevention.
- Automated customer email sequences.
- Advanced analytics and monitoring.
- AI booking assistant.

Later improvements are tracked in `artist_booking_website_later_improvements.md`.

## Constraints

- Do not invent real artist facts, testimonials, awards, legal details, credentials, domains, or business claims.
- Use clearly labeled placeholders when final human content is unavailable.
- Do not commit secrets, `.env` files with real values, build output, dependency folders, or unrelated generated files.
- Keep secrets server-side only.
- Do not expose Supabase service role keys, Resend API keys, or Turnstile secret keys to client code.
- Work around blocked human-input tasks by marking them blocked and continuing with the next unblocked local/code task.
- Keep changes scoped to the active task.
- Do not revert unrelated user changes.

## Source of Truth Files

- `AGENTS.md`: operating rules for coding agents.
- `artist_booking_website_mvp_plan.md`: original MVP checklist.
- `artist_booking_website_loop_engineering_plan.md`: loop-ready split between coding-agent work and human-input work.
- `mvp_acceptance_criteria.md`: acceptance criteria for major MVP sections.
- `mvp_checklist_acceptance_matrix.md`: per-checklist-item acceptance criteria and verification steps.
- `mvp_progress.md`: live progress, blockers, assumptions, and verification log.
- `human_inputs_needed.md`: human-owned inputs required for production readiness.
- `docs/architecture.md`: intended technical architecture.
- `docs/verification.md`: verification commands and rules.
- `docs/manual_qa.md`: manual QA checklist.
- `docs/decisions.md`: decision log.
- `docs/repo_conventions.md`: implementation conventions.
- `docs/quality_gates.md`: task, phase, and release completion gates.

## Execution Rules

- Start with this file, then follow `artist_booking_website_loop_engineering_plan.md`.
- Prefer the next unblocked task near the top of the plan.
- For each task, check `mvp_acceptance_criteria.md` before marking it done.
- Update `mvp_progress.md` after each implementation loop, verification run, or blocker discovery.
- Record important assumptions in `mvp_progress.md`.
- Record meaningful technical decisions in `docs/decisions.md`.
- If a task requires missing human input, add it to `human_inputs_needed.md` or mark the existing item as blocked in `mvp_progress.md`.
- Run the relevant verification commands from `docs/verification.md`.
- Use `docs/manual_qa.md` for UI and production smoke checks.
- Use `docs/quality_gates.md` before marking a phase complete.

## Checklist Reference

The actionable checklist is maintained in:

- `artist_booking_website_loop_engineering_plan.md`

The original MVP checklist is maintained in:

- `artist_booking_website_mvp_plan.md`

The agent should treat the loop-engineering plan as the primary execution checklist because it separates autonomous work from human-input work.

## Acceptance Criteria Reference

Acceptance criteria are maintained in:

- `mvp_acceptance_criteria.md`
- `mvp_checklist_acceptance_matrix.md`

A major section should not be marked complete unless its acceptance criteria are satisfied or explicitly documented as blocked.

## Verification Reference

Verification rules and commands are maintained in:

- `docs/verification.md`

When the project exists, major phases should normally pass:

- `npm run lint`
- `npm run typecheck`
- `npm run test`, if tests are configured
- `npm run build`

If a command does not exist yet, the agent should record that in `mvp_progress.md` rather than silently skipping it.

## Progress Tracking

Progress is maintained in:

- `mvp_progress.md`

The progress file should track:

- Current phase.
- Current task.
- Completed tasks.
- In-progress tasks.
- Blocked tasks.
- Assumptions.
- Verification results.
- Next suggested tasks.

## Definition of Done

### Local MVP Done

- [ ] App runs locally.
- [ ] All public pages exist.
- [ ] Booking form validates input.
- [ ] Booking API endpoint exists.
- [ ] Database integration is implemented behind environment variables.
- [ ] Email integration is implemented behind environment variables.
- [ ] Spam protection is implemented behind environment variables.
- [ ] Placeholder artist content is clearly labeled and isolated.
- [ ] SEO basics are implemented.
- [ ] Legal placeholder pages exist.
- [ ] Lint passes.
- [ ] Typecheck passes, if configured.
- [ ] Tests pass, if configured.
- [ ] Production build passes.
- [ ] `mvp_progress.md` is updated.

### Integration MVP Done

- [ ] Supabase project exists and required env vars are configured locally or in the target environment.
- [ ] `booking_requests` schema has been applied and verified.
- [ ] Booking API stores valid requests in Supabase.
- [ ] Resend account and verified sender are configured.
- [ ] Booking notification emails are received by the configured recipient.
- [ ] Cloudflare Turnstile keys are configured.
- [ ] Turnstile verification rejects invalid production submissions.
- [ ] Integration verification results are recorded in `mvp_progress.md`.

### Production MVP Done

- [ ] Website is publicly available.
- [ ] Custom domain works.
- [ ] HTTPS works.
- [ ] Real artist content is published.
- [ ] Real images and videos are published.
- [ ] Booking form stores requests in Supabase.
- [ ] Artist receives booking notification emails.
- [ ] Spam protection is active in production.
- [ ] SEO basics are live.
- [ ] Impressum is approved and published.
- [ ] Privacy Policy is approved and published.
- [ ] Production smoke test passes.
