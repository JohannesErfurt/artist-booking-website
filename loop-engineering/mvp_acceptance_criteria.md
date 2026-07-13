# MVP Acceptance Criteria

This file defines what "done" means for the major sections of the artist booking website MVP.

## 1. Project Setup

- [ ] A Next.js App Router application exists in the repository.
- [ ] TypeScript is enabled.
- [ ] Tailwind CSS is enabled.
- [ ] ESLint is configured.
- [ ] Prettier is configured.
- [ ] Absolute imports are configured.
- [ ] `.env.example` lists all required environment variables without real values.
- [ ] README explains local setup, development, verification, and deployment prerequisites.

Verification:

- `npm run lint`
- `npm run build`

## 2. UI Foundation

- [ ] The app has a consistent color, type, spacing, button, and form style.
- [ ] Shared layout components exist for navbar, footer, sections, cards, buttons, hero, and forms.
- [ ] Components are responsive across mobile and desktop.
- [ ] Navigation links are usable with keyboard and pointer input.
- [ ] Text remains readable and does not overflow containers at common viewport sizes.

Verification:

- `npm run lint`
- `npm run build`
- Manual QA for navigation and responsive layout.

## 3. Public Website

- [ ] Home page exists.
- [ ] About page exists.
- [ ] Gallery page exists.
- [ ] Videos page exists.
- [ ] Contact page exists.
- [ ] Pages can use clearly labeled placeholder content until final artist content is provided.
- [ ] All primary navigation links work.
- [ ] Each page has meaningful metadata.

Verification:

- `npm run lint`
- `npm run build`
- Manual QA for all public pages.

## 4. Booking Request System

- [ ] Booking form includes name, email, phone, event date, event location, event type, guest count, and message.
- [ ] Required fields are clearly validated.
- [ ] Invalid email values are rejected.
- [ ] Invalid guest counts are rejected.
- [ ] Server-side validation exists.
- [ ] Successful submissions show a confirmation state.
- [ ] Failed submissions show a useful error state.
- [ ] Secrets are never exposed to client code.

Verification:

- `npm run lint`
- `npm run build`
- Submit one valid booking request.
- Submit one invalid booking request.
- Confirm API returns structured errors.

## 5. Database

- [ ] `booking_requests` schema or migration exists.
- [ ] Schema includes all MVP fields.
- [ ] Status is restricted to `new`, `contacted`, `accepted`, and `declined`.
- [ ] Supabase client code reads configuration from server-side environment variables.
- [ ] Insert failures are handled gracefully.
- [ ] Missing production database credentials do not break local development if a local fallback is implemented.

Verification:

- Run database-related tests if available.
- Submit a booking request with Supabase credentials configured.
- Confirm a row is created in `booking_requests`.

## 6. Email Notifications

- [ ] Booking notification template exists.
- [ ] Notification includes requester details, event details, and message.
- [ ] Resend API key is read from server-side environment variables.
- [ ] Notification is attempted after a valid booking request.
- [ ] Email failures are handled without losing the booking request.

Verification:

- Submit a booking request with Resend configured.
- Confirm the notification email is received.
- Simulate or document behavior when email sending fails.

## 7. Basic Security

- [ ] All booking input is validated server-side.
- [ ] User-controlled text is not rendered as unsafe HTML.
- [ ] Secrets are not committed.
- [ ] Cloudflare Turnstile verification exists for production.
- [ ] Turnstile can be disabled or bypassed safely in local development.
- [ ] Sensitive personal data is not logged unnecessarily.

Verification:

- Review client bundle references for secret names and values.
- Submit invalid or suspicious input and confirm rejection or safe handling.

## 8. Performance Basics

- [ ] Images use stable dimensions to avoid layout shift.
- [ ] Next.js Image is used where appropriate.
- [ ] Fonts are optimized.
- [ ] Unnecessary dependencies are avoided.
- [ ] Production build completes successfully.

Verification:

- `npm run build`
- Manual check for image layout shift.

## 9. SEO Basics

- [ ] Site-level metadata exists.
- [ ] Page titles and descriptions exist.
- [ ] Open Graph metadata exists.
- [ ] `sitemap.xml` exists.
- [ ] `robots.txt` exists.
- [ ] Person and Musician structured data exist and are easy to update.

Verification:

- Inspect generated metadata.
- Confirm sitemap and robots routes are reachable locally.

## 10. Legal Pages

- [ ] Impressum page exists.
- [ ] Privacy Policy page exists.
- [ ] Legal pages are linked from the footer.
- [ ] Placeholder legal content is clearly labeled.
- [ ] Final legal content is marked as requiring human review.

Verification:

- Manual navigation check.
- Human approval before production launch.

## 11. Deployment

- [ ] App can be deployed to Vercel.
- [ ] Required production environment variables are documented.
- [ ] Custom domain works.
- [ ] HTTPS works.
- [ ] Production booking form stores requests.
- [ ] Production booking form sends notification email.

Verification:

- Vercel deployment succeeds.
- Production smoke test passes.
- Human confirms final domain and legal pages.

