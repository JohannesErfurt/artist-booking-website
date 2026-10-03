# Artist Booking Website - MVP Project Plan

## Project Goal

Build a professional, mobile-friendly website for an actor/musician that allows visitors to:

- Learn about the artist
- View photos and videos
- Understand available services
- Submit booking requests
- Contact the artist

The MVP should be production-ready and optimized for getting real booking requests.

---

# 1. Project Setup

## Repository

- [x] Create GitHub repository
- [x] Add `.gitignore`
- [x] Add `README.md`
- [x] Configure ESLint
- [x] Configure Prettier

## Next.js Application

- [x] Create Next.js application using App Router
- [x] Enable TypeScript
- [x] Enable Tailwind CSS
- [x] Configure absolute imports
- [x] Configure environment variables

---

# 2. UI Foundation

## Design System

- [x] Define color palette
- [x] Define typography
- [x] Define spacing system
- [x] Define responsive breakpoints
- [x] Define button styles
- [x] Define form styles

## Shared Components

- [x] Create Navbar component
- [x] Create Footer component
- [x] Create Hero component
- [x] Create Section component
- [x] Create Button component
- [x] Create Card component

---

# 3. Public Website

## Home Page

- [x] Create hero section
- [x] Add artist headline
- [x] Add artist introduction
- [x] Add booking CTA button
- [x] Add featured images
- [x] Add testimonials
- [x] Add contact CTA

## About Page

- [x] Add artist biography
- [x] Add experience and references
- [x] Add achievements

## Gallery Page

- [x] Create image gallery
- [x] Optimize images with Next.js Image
- [x] Add lightbox functionality

## Videos Page

- [x] Embed YouTube videos
- [x] Create responsive video layout

## Contact Page

- [x] Add contact information
- [x] Add booking request form

---

# 4. Booking Request System

## Booking Form

Fields:

- [x] Name
- [x] Email
- [x] Phone number
- [x] Event date
- [x] Event location
- [x] Event type
- [x] Number of guests
- [x] Message

## Validation

- [x] Add Zod validation
- [x] Validate user input
- [x] Sanitize input

## Submission

- [x] Create API endpoint
- [x] Store booking request
- [x] Send email notification
- [x] Handle errors gracefully

---

# 5. Database

## Supabase Setup

- [x] Create Supabase project
- [x] Configure environment variables

## Booking Database

Create:

`booking_requests`

Fields:

- id
- created_at
- name
- email
- phone
- event_date
- event_location
- event_type
- guest_count
- message
- status

Status:

- new
- contacted
- accepted
- declined

## Reliability on the Free Plan

Free Supabase projects are paused after about a week without activity.

- [ ] Keep the database awake with a daily scheduled job (e.g. Vercel Cron)
- [x] Still send the notification email when the database is unavailable

---

# 6. Email Notifications

## Resend Setup

- [x] Create Resend account
- [x] Configure API key
- [x] Verify domain

## Booking Notification

- [x] Create email template
- [x] Send notification after booking request
- [x] Handle email failures

---

# 7. Basic Security

## Input Protection

- [x] Validate all inputs
- [x] Prevent injection attacks

## Spam Protection

- [x] Add Cloudflare Turnstile
- [x] Verify Turnstile server-side

## Secrets

- [ ] Store secrets in Vercel environment variables
- [x] Verify secrets are not committed

---

# 8. Performance Basics

## Images

- [ ] Optimize image sizes
- [x] Use WebP/AVIF where appropriate
- [x] Enable lazy loading

## Frontend

- [x] Optimize fonts
- [x] Remove unnecessary dependencies

---

# 9. SEO Basics

## Metadata

- [x] Add page titles
- [x] Add meta descriptions
- [x] Add Open Graph images

## Search Engine Setup

- [x] Create sitemap.xml
- [x] Create robots.txt

## Structured Data

- [x] Add Person schema
- [x] Add Musician schema

---

# 10. Legal Requirements

Germany / EU:

- [ ] Add Impressum
- [ ] Add Privacy Policy
- [ ] Review GDPR requirements

---

# 11. Deployment

## Vercel

- [ ] Deploy application
- [ ] Configure environment variables
- [ ] Connect GitHub repository

## Domain

- [ ] Purchase domain
- [ ] Configure DNS
- [ ] Enable HTTPS

---

# MVP Definition of Done

- [ ] Website publicly available
- [ ] Custom domain working
- [ ] Mobile-friendly
- [ ] Booking form working
- [ ] Artist receives booking notifications
- [ ] Images and videos optimized
- [ ] SEO basics implemented
- [ ] GDPR pages available
