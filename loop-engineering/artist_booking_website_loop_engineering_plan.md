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

- [ ] Add `.gitignore`
- [ ] Add `README.md`
- [ ] Document local setup instructions
- [ ] Document required environment variables with placeholder names only
- [ ] Add `.env.example`

### Next.js Application

- [ ] Create Next.js application using App Router
- [ ] Enable TypeScript
- [ ] Enable Tailwind CSS
- [ ] Configure absolute imports
- [ ] Configure environment variable loading
- [ ] Add a basic project folder structure

### Code Quality

- [ ] Configure ESLint
- [ ] Configure Prettier
- [ ] Add lint script
- [ ] Add format script
- [ ] Add build script
- [ ] Verify the app builds locally

---

## 2. UI Foundation

### Design System

- [ ] Define color palette
- [ ] Define typography
- [ ] Define spacing system
- [ ] Define responsive breakpoints
- [ ] Define button styles
- [ ] Define form styles
- [ ] Ensure the design is mobile-friendly

### Shared Components

- [ ] Create Navbar component
- [ ] Create Footer component
- [ ] Create Hero component
- [ ] Create Section component
- [ ] Create Button component
- [ ] Create Card component
- [ ] Create form field components
- [ ] Create page layout wrapper

---

## 3. Public Website Implementation

The agent can build these pages with placeholder content until the human provides final artist content.

### Home Page

- [ ] Create hero section
- [ ] Add placeholder artist headline
- [ ] Add placeholder artist introduction
- [ ] Add booking CTA button
- [ ] Add featured image layout
- [ ] Add testimonial section
- [ ] Add contact CTA

### About Page

- [ ] Add placeholder artist biography
- [ ] Add placeholder experience and references
- [ ] Add placeholder achievements

### Gallery Page

- [ ] Create image gallery layout
- [ ] Use Next.js Image
- [ ] Add placeholder image data structure
- [ ] Add lightbox functionality
- [ ] Ensure gallery works on mobile

### Videos Page

- [ ] Create responsive video layout
- [ ] Add placeholder YouTube embed data structure
- [ ] Embed YouTube videos from configurable video IDs

### Contact Page

- [ ] Add contact information section with placeholders
- [ ] Add booking request form
- [ ] Add clear success and error states

---

## 4. Booking Request System

### Booking Form

- [ ] Add name field
- [ ] Add email field
- [ ] Add phone number field
- [ ] Add event date field
- [ ] Add event location field
- [ ] Add event type field
- [ ] Add number of guests field
- [ ] Add message field
- [ ] Add accessible labels and validation messages
- [ ] Add loading state during submission
- [ ] Add success state after submission
- [ ] Add error state after failed submission

### Validation

- [ ] Add Zod validation schema
- [ ] Validate user input client-side
- [ ] Validate user input server-side
- [ ] Sanitize input before storage or email
- [ ] Return structured API errors

### Submission

- [ ] Create booking request API endpoint
- [ ] Add local development fallback for booking storage
- [ ] Add Supabase integration behind environment variables
- [ ] Add email notification integration behind environment variables
- [ ] Handle database failures gracefully
- [ ] Handle email failures gracefully
- [ ] Avoid exposing secrets to the client

---

## 5. Database Implementation

### Schema

- [ ] Create SQL schema or migration for `booking_requests`
- [ ] Include `id`
- [ ] Include `created_at`
- [ ] Include `name`
- [ ] Include `email`
- [ ] Include `phone`
- [ ] Include `event_date`
- [ ] Include `event_location`
- [ ] Include `event_type`
- [ ] Include `guest_count`
- [ ] Include `message`
- [ ] Include `status`
- [ ] Restrict `status` to `new`, `contacted`, `accepted`, and `declined`

### Supabase Client Code

- [ ] Add Supabase server client setup
- [ ] Read Supabase URL from environment variables
- [ ] Read Supabase service role key from environment variables
- [ ] Add booking request insert function
- [ ] Add error handling around inserts

---

## 6. Email Notification Implementation

### Email Template

- [ ] Create booking notification email template
- [ ] Include booking requester details
- [ ] Include event details
- [ ] Include message content
- [ ] Use plain text fallback

### Resend Client Code

- [ ] Add Resend integration behind environment variables
- [ ] Send notification after booking request submission
- [ ] Handle email API errors
- [ ] Ensure booking request is not lost if email fails

---

## 7. Basic Security Implementation

### Input Protection

- [ ] Validate all booking form inputs on the server
- [ ] Sanitize stored text fields
- [ ] Avoid unsafe HTML rendering
- [ ] Avoid logging sensitive personal data unnecessarily

### Spam Protection

- [ ] Add Cloudflare Turnstile widget placeholder
- [ ] Add server-side Turnstile verification function
- [ ] Make Turnstile optional in local development
- [ ] Fail safely when Turnstile verification fails in production

### Secrets

- [ ] Ensure secrets are only referenced from environment variables
- [ ] Verify secrets are not committed
- [ ] Add secret names to `.env.example` without real values

---

## 8. Performance Basics

### Images

- [ ] Use Next.js Image for local and remote images where appropriate
- [ ] Add image size guidance to README
- [ ] Enable lazy loading where appropriate
- [ ] Avoid layout shift for image areas

### Frontend

- [ ] Optimize fonts
- [ ] Remove unnecessary dependencies
- [ ] Check production build output
- [ ] Keep client components scoped to interactive UI only

---

## 9. SEO Basics

### Metadata

- [ ] Add default site metadata
- [ ] Add page titles
- [ ] Add meta descriptions
- [ ] Add Open Graph metadata
- [ ] Add placeholder Open Graph image configuration

### Search Engine Setup

- [ ] Create `sitemap.xml`
- [ ] Create `robots.txt`

### Structured Data

- [ ] Add Person schema using placeholder artist data
- [ ] Add Musician schema using placeholder artist data
- [ ] Make structured data easy to update when final content is provided

---

## 10. Legal Page Implementation

The agent can create placeholder pages and wire them into the site. Final legal content requires human review.

- [ ] Add Impressum page route
- [ ] Add Privacy Policy page route
- [ ] Link legal pages from the footer
- [ ] Add clear placeholders for required legal details
- [ ] Document that legal text requires human review

---

## 11. Local Verification

- [ ] Run linter
- [ ] Run formatter or formatting check
- [ ] Run production build
- [ ] Test booking form validation manually
- [ ] Test booking API with valid payload
- [ ] Test booking API with invalid payload
- [ ] Test mobile layout
- [ ] Test navigation between all public pages
- [ ] Update this checklist with completed items

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

- [ ] Work from top to bottom unless a dependency requires reordering
- [ ] Complete local/code tasks without waiting for human input when reasonable placeholders can be used
- [ ] Mark external account, secret, content, legal, and deployment tasks as blocked when human input is missing
- [ ] Keep placeholders clearly labeled
- [ ] Never invent real artist facts, testimonials, legal details, or credentials
- [ ] Never commit secrets
- [ ] Run lint/build checks after major implementation phases
- [ ] Update checklist status as tasks are completed or blocked
- [ ] Keep a short implementation note for any important assumption

---

# MVP Completion Definitions

## Local MVP Complete

- [ ] App runs locally
- [ ] All public pages exist
- [ ] Booking form validates input
- [ ] Booking API endpoint exists
- [ ] Database and email integrations are implemented behind environment variables
- [ ] Placeholder artist content is clearly isolated
- [ ] SEO basics are implemented
- [ ] Legal placeholder pages exist
- [ ] Lint and build pass

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
