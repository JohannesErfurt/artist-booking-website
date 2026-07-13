# Artist Booking Website

Professional, mobile-friendly artist booking website built with Next.js App Router, TypeScript, and Tailwind CSS.

## Repository Structure

```text
frontend/          Next.js application (App Router, UI, API routes)
supabase/          Database migrations
docs/              Architecture, verification, and conventions
loop-engineering/  MVP progress and loop-engineering plans
```

## Local Setup

### Prerequisites

- Node.js `20.x` LTS or newer
- npm

### Install and run

From the repository root:

```bash
make install
cp frontend/.env.example frontend/.env.local
make dev
```

Or run commands directly in `frontend/`:

```bash
cd frontend
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

Copy `frontend/.env.example` to `frontend/.env.local` and fill in values when available. Never commit real secrets.

| Variable                         | Purpose                                       |
| -------------------------------- | --------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`           | Public site URL used for metadata and sitemap |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` | Cloudflare Turnstile site key (public)        |
| `TURNSTILE_SECRET_KEY`           | Cloudflare Turnstile secret key (server only) |
| `SUPABASE_URL`                   | Supabase project URL                          |
| `SUPABASE_SERVICE_ROLE_KEY`      | Supabase service role key (server only)       |
| `RESEND_API_KEY`                 | Resend API key (server only)                  |
| `BOOKING_NOTIFICATION_TO`        | Booking notification recipient                |
| `BOOKING_NOTIFICATION_FROM`      | Verified Resend sender address                |

### Local development behavior

- Without Supabase credentials, booking requests are stored in `frontend/data/booking-requests.json`.
- Without Resend credentials, email notifications are skipped gracefully.
- Turnstile verification is required only in production when both Turnstile keys are configured.

## Verification

Run all automated checks and tests from the repository root:

```bash
make test
```

Or run individual checks inside `frontend/`:

```bash
cd frontend
npm run lint
npm run typecheck
npm run test
npm run format:check
npm run build
```

See `docs/verification.md` and `docs/manual_qa.md` for full verification guidance.

## Optional Python Environment

The website itself runs on Node.js. A Python virtual environment is optional and only needed if you add Python scripts or tooling alongside this project.

Create and activate a Python 3.11 `.venv` on Windows:

```powershell
py -3.11 -m venv .venv
.\.venv\Scripts\Activate.ps1
python --version
```

Install packages when needed:

```powershell
pip install -r requirements.txt
```

Deactivate when finished:

```powershell
deactivate
```

## Image Guidance

- Use optimized JPEG or WebP images where possible.
- Recommended hero image size: `1600x1200` or similar 4:3 aspect ratio.
- Recommended gallery images: `1200x900` or larger with consistent aspect ratios.
- Provide meaningful alt text and captions in `frontend/content/site.ts`.
- Replace placeholder Unsplash URLs with final licensed media before production.

## Frontend Structure

```text
frontend/
  app/           Next.js routes and API
  components/    Reusable UI components
  content/       Placeholder artist and site content
  lib/           Shared utilities and server integrations
  styles/        Global styles
  tests/         Unit tests
  public/        Static assets
```

## Deployment Prerequisites

- Vercel project connected to this repository with root directory set to `frontend`
- Supabase project with `booking_requests` schema applied from `supabase/migrations/`
- Resend account with verified sender domain
- Cloudflare Turnstile site configured for production domain
- Final artist content, media rights, and legal page approval

## Loop Engineering

Progress and blockers are tracked in:

- `loop-engineering/mvp_progress.md`
- `loop-engineering/human_inputs_needed.md`
