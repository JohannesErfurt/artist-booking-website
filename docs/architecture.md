# Architecture

This document describes the intended MVP architecture. Update it as implementation decisions become real.

## Application

- Framework: Next.js with App Router.
- Language: TypeScript.
- Styling: Tailwind CSS.
- Hosting target: Vercel.

## Public Pages

- `/`: homepage with hero, intro, featured media, testimonials, and booking CTA.
- `/about`: artist biography, experience, references, and achievements.
- `/gallery`: image gallery with optimized images and lightbox behavior.
- `/videos`: responsive video embeds.
- `/contact`: contact details and booking request form.
- `/impressum`: German legal notice.
- `/privacy`: privacy policy.

## Data Flow

1. Visitor submits booking form.
2. Client validates basic fields.
3. API route validates request server-side.
4. API route verifies Turnstile in production.
5. API route stores the booking request in Supabase.
6. API route sends a notification email through Resend.
7. Visitor receives success or error feedback.

## External Services

- Supabase stores booking requests.
- Resend sends notification emails.
- Cloudflare Turnstile provides spam protection.
- Vercel hosts the production app and environment variables.

## Data Model

Primary table: `booking_requests`

Fields:

- `id`
- `created_at`
- `name`
- `email`
- `phone`
- `event_date`
- `event_location`
- `event_type`
- `guest_count`
- `message`
- `status`

Allowed statuses:

- `new`
- `contacted`
- `accepted`
- `declined`

## Security Notes

- Supabase service role keys must only be used server-side.
- Resend API keys must only be used server-side.
- Turnstile secret keys must only be used server-side.
- User-provided text must not be rendered as unsafe HTML.
- Personal data should not be logged unless strictly necessary for debugging.
