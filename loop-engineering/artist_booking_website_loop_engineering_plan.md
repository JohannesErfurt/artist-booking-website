# Artist Booking Website - Loop Engineering MVP Plan

## Purpose

This file separates the MVP into work a coding agent can complete autonomously and work that requires human input, account access, credentials, content, or legal/business decisions.

The goal is to support loop engineering: the coding agent should keep completing verifiable tasks, update checklist status, and only stop when a human checkpoint is genuinely required.

Each checklist item is verifiable through `loop-engineering/mvp_checklist_acceptance_matrix.md`. A task is not done until its acceptance criteria are satisfied and its verification step has run or is recorded as blocked in `loop-engineering/mvp_progress.md`.

---

# Coding Agent Work

These tasks can be completed by a coding agent in the local repository, assuming normal package installation and build/test commands are available.

## 1. Project Setup

### Repository Files

- [x] Add `.gitignore`
- [x] Add `README.md`
- [x] Document local setup instructions
- [x] Document required environment variables with placeholder names only
- [x] Add `.env.example`

### Next.js Application

- [x] Create Next.js application using App Router
- [x] Enable TypeScript
- [x] Enable Tailwind CSS
- [x] Configure absolute imports
- [x] Configure environment variable loading
- [x] Add a basic project folder structure

### Code Quality

- [x] Configure ESLint
- [x] Configure Prettier
- [x] Add lint script
- [x] Add format script
- [x] Add build script
- [x] Verify the app builds locally

---

## 2. UI Foundation

### Design System

- [x] Define color palette
- [x] Define typography
- [x] Define spacing system
- [x] Define responsive breakpoints
- [x] Define button styles
- [x] Define form styles
- [x] Ensure the design is mobile-friendly

### Shared Components

- [x] Create Navbar component
- [x] Create Footer component
- [x] Create Hero component
- [x] Create Section component
- [x] Create Button component
- [x] Create Card component
- [x] Create form field components
- [x] Create page layout wrapper

---

## 3. Public Website Implementation

The agent can build these pages with placeholder content until the human provides final artist content.

### Home Page

- [x] Create hero section
- [x] Add placeholder artist headline
- [x] Add placeholder artist introduction
- [x] Add booking CTA button
- [x] Add featured image layout
- [x] Add testimonial section
- [x] Add contact CTA

### About Page

- [x] Add placeholder artist biography
- [x] Add placeholder experience and references
- [x] Add placeholder achievements

### Gallery Page

- [x] Create image gallery layout
- [x] Use Next.js Image
- [x] Add placeholder image data structure
- [x] Add lightbox functionality
- [x] Ensure gallery works on mobile

### Videos Page

- [x] Create responsive video layout
- [x] Add placeholder YouTube embed data structure
- [x] Embed YouTube videos from configurable video IDs

### Contact Page

- [x] Add contact information section with placeholders
- [x] Add booking request form
- [x] Add clear success and error states

---

## 4. Booking Request System

### Booking Form

- [x] Add name field
- [x] Add email field
- [x] Add phone number field
- [x] Add event date field
- [x] Add event location field
- [x] Add event type field
- [x] Add number of guests field
- [x] Add message field
- [x] Add accessible labels and validation messages
- [x] Add loading state during submission
- [x] Add success state after submission
- [x] Add error state after failed submission

### Validation

- [x] Add Zod validation schema
- [x] Validate user input client-side
- [x] Validate user input server-side
- [x] Sanitize input before storage or email
- [x] Return structured API errors

### Submission

- [x] Create booking request API endpoint
- [x] Add local development fallback for booking storage
- [x] Add Supabase integration behind environment variables
- [x] Add email notification integration behind environment variables
- [x] Handle database failures gracefully
- [x] Handle email failures gracefully
- [x] Avoid exposing secrets to the client

---

## 5. Database Implementation

### Schema

- [x] Create SQL schema or migration for `booking_requests`
- [x] Include `id`
- [x] Include `created_at`
- [x] Include `name`
- [x] Include `email`
- [x] Include `phone`
- [x] Include `event_date`
- [x] Include `event_location`
- [x] Include `event_type`
- [x] Include `guest_count`
- [x] Include `message`
- [x] Include `status`
- [x] Restrict `status` to `new`, `contacted`, `accepted`, and `declined`

### Supabase Client Code

- [x] Add Supabase server client setup
- [x] Read Supabase URL from environment variables
- [x] Read Supabase service role key from environment variables
- [x] Add booking request insert function
- [x] Add error handling around inserts

---

## 6. Email Notification Implementation

### Email Template

- [x] Create booking notification email template
- [x] Include booking requester details
- [x] Include event details
- [x] Include message content
- [x] Use plain text fallback

### Resend Client Code

- [x] Add Resend integration behind environment variables
- [x] Send notification after booking request submission
- [x] Handle email API errors
- [x] Ensure booking request is not lost if email fails

---

## 7. Basic Security Implementation

### Input Protection

- [x] Validate all booking form inputs on the server
- [x] Sanitize stored text fields
- [x] Avoid unsafe HTML rendering
- [x] Avoid logging sensitive personal data unnecessarily

### Spam Protection

- [x] Add Cloudflare Turnstile widget placeholder
- [x] Add server-side Turnstile verification function
- [x] Make Turnstile optional in local development
- [x] Fail safely when Turnstile verification fails in production

### Secrets

- [x] Ensure secrets are only referenced from environment variables
- [x] Verify secrets are not committed
- [x] Add secret names to `.env.example` without real values

---

## 8. Performance Basics

### Images

- [x] Use Next.js Image for local and remote images where appropriate
- [x] Add image size guidance to README
- [x] Enable lazy loading where appropriate
- [x] Avoid layout shift for image areas

### Frontend

- [x] Optimize fonts
- [x] Remove unnecessary dependencies
- [x] Check production build output
- [x] Keep client components scoped to interactive UI only

---

## 9. SEO Basics

### Metadata

- [x] Add default site metadata
- [x] Add page titles
- [x] Add meta descriptions
- [x] Add Open Graph metadata
- [x] Add placeholder Open Graph image configuration

### Search Engine Setup

- [x] Create `sitemap.xml`
- [x] Create `robots.txt`

### Structured Data

- [x] Add Person schema using placeholder artist data
- [x] Add Musician schema using placeholder artist data
- [x] Make structured data easy to update when final content is provided

---

## 10. Legal Page Implementation

The agent can create placeholder pages and wire them into the site. Final legal content requires human review.

- [x] Add Impressum page route
- [x] Add Privacy Policy page route
- [x] Link legal pages from the footer
- [x] Add clear placeholders for required legal details
- [x] Document that legal text requires human review

---

## 11. Local Verification

- [x] Run linter
- [x] Run formatter or formatting check
- [x] Run production build
- [x] Test booking form validation manually
- [x] Test booking API with valid payload
- [x] Test booking API with invalid payload
- [x] Test mobile layout
- [x] Test navigation between all public pages
- [x] Update this checklist with completed items

---

# Human Input Required

These items require the human owner to provide content, credentials, account access, approval, or business decisions.

## 1. Artist Content

- [ ] Provide artist name
- [ ] Provide artist headline
- [ ] Provide short homepage introduction
- [ ] Provide full biography
- [ ] Provide experience and references
- [ ] Provide achievements
- [ ] Provide services or booking categories
- [ ] Provide testimonials
- [ ] Provide contact email
- [ ] Provide contact phone number, if public
- [ ] Provide preferred booking call-to-action text

## 2. Media Assets

- [ ] Provide hero image
- [ ] Provide gallery images
- [ ] Provide image captions or alt text
- [ ] Provide YouTube video URLs or IDs
- [ ] Provide Open Graph image
- [ ] Confirm rights to use all images and videos

## 3. External Accounts

- [ ] Create GitHub repository, unless the agent has approved access
- [ ] Create Supabase project
- [ ] Create Resend account
- [ ] Verify sending domain in Resend
- [ ] Create Cloudflare Turnstile site
- [ ] Create or confirm Vercel account

## 4. Environment Variables and Secrets

- [ ] Provide Supabase project URL
- [ ] Provide Supabase service role key
- [ ] Provide Resend API key
- [ ] Provide notification recipient email address
- [ ] Provide verified sender email address
- [ ] Provide Cloudflare Turnstile site key
- [ ] Provide Cloudflare Turnstile secret key
- [ ] Provide production site URL
- [ ] Confirm where secrets should be stored for local development
- [ ] Add production secrets to Vercel

## 5. Database Setup Approval

- [ ] Confirm the `booking_requests` schema
- [ ] Confirm allowed booking request statuses
- [ ] Approve running Supabase migration or SQL setup
- [ ] Confirm whether booking requests need an admin dashboard in a later phase

## 6. Legal and Compliance

- [ ] Provide legal business name
- [ ] Provide responsible person for Impressum
- [ ] Provide legal address
- [ ] Provide VAT ID or business registration details, if applicable
- [ ] Provide privacy policy requirements
- [ ] Review GDPR requirements
- [ ] Approve final Impressum text
- [ ] Approve final Privacy Policy text

## 7. Deployment and Domain

- [ ] Purchase domain
- [ ] Confirm final domain name
- [ ] Connect GitHub repository to Vercel
- [ ] Configure Vercel environment variables
- [ ] Configure DNS records
- [ ] Verify HTTPS
- [ ] Confirm production deployment is approved

---

# Agent Loop Rules

The coding agent should follow these rules while working through the MVP.

- [x] Work from top to bottom unless a dependency requires reordering
- [x] Complete local/code tasks without waiting for human input when reasonable placeholders can be used
- [x] Mark external account, secret, content, legal, and deployment tasks as blocked when human input is missing
- [x] Keep placeholders clearly labeled
- [x] Never invent real artist facts, testimonials, legal details, or credentials
- [x] Never commit secrets
- [x] Run lint/build checks after major implementation phases
- [x] Update checklist status as tasks are completed or blocked
- [x] Keep a short implementation note for any important assumption

---

# MVP Completion Definitions

## Local MVP Complete

- [x] App runs locally
- [x] All public pages exist
- [x] Booking form validates input
- [x] Booking API endpoint exists
- [x] Database and email integrations are implemented behind environment variables
- [x] Placeholder artist content is clearly isolated
- [x] SEO basics are implemented
- [x] Legal placeholder pages exist
- [x] Lint and build pass

## Integration MVP Complete

- [ ] Supabase project exists and environment variables are configured
- [ ] `booking_requests` schema has been applied and verified
- [ ] Booking form stores valid requests in Supabase
- [ ] Resend account and verified sender are configured
- [ ] Artist receives booking notification emails from real submissions
- [ ] Cloudflare Turnstile keys are configured
- [ ] Turnstile verification rejects invalid production submissions
- [ ] Integration verification results are recorded in `loop-engineering/mvp_progress.md`

## Production MVP Complete

- [ ] Website is publicly available
- [ ] Custom domain works
- [ ] HTTPS works
- [ ] Real artist content is published
- [ ] Real images and videos are published
- [ ] Booking form stores requests
- [ ] Artist receives booking notifications
- [ ] Spam protection is active
- [ ] SEO basics are live
- [ ] Impressum is approved and published
- [ ] Privacy Policy is approved and published
