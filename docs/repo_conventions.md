# Repo Conventions

These conventions guide implementation once the application is initialized.

## Framework

- Use Next.js App Router.
- Use TypeScript for application code.
- Use Tailwind CSS for styling.
- Use npm as the package manager unless a different lockfile is intentionally introduced.
- Target Node.js `20.x` LTS or newer.

## Suggested Structure

```text
app/
components/
content/
lib/
lib/server/
styles/
tests/
```

## Application Rules

- Prefer server components for static pages and content.
- Use client components only for interactive UI such as forms, lightboxes, menus, and Turnstile widgets.
- Keep reusable UI components small and composable.
- Keep validation schemas centralized.
- Keep environment variable parsing centralized.
- Keep Supabase, Resend, and Turnstile server code out of client components.
- Keep placeholder artist data centralized so final content can be swapped safely.

## Content Rules

- Placeholder content must be clearly labeled.
- Do not invent real artist credits, testimonials, legal details, or contact information.
- Real media must include rights confirmation before production use.

