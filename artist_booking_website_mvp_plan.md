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

- ☐ Create GitHub repository
- ☐ Add `.gitignore`
- ☐ Add `README.md`
- ☐ Configure ESLint
- ☐ Configure Prettier

## Next.js Application

- ☐ Create Next.js application using App Router
- ☐ Enable TypeScript
- ☐ Enable Tailwind CSS
- ☐ Configure absolute imports
- ☐ Configure environment variables

---

# 2. UI Foundation

## Design System

- ☐ Define color palette
- ☐ Define typography
- ☐ Define spacing system
- ☐ Define responsive breakpoints
- ☐ Define button styles
- ☐ Define form styles

## Shared Components

- ☐ Create Navbar component
- ☐ Create Footer component
- ☐ Create Hero component
- ☐ Create Section component
- ☐ Create Button component
- ☐ Create Card component

---

# 3. Public Website

## Home Page

- ☐ Create hero section
- ☐ Add artist headline
- ☐ Add artist introduction
- ☐ Add booking CTA button
- ☐ Add featured images
- ☐ Add testimonials
- ☐ Add contact CTA

## About Page

- ☐ Add artist biography
- ☐ Add experience and references
- ☐ Add achievements

## Gallery Page

- ☐ Create image gallery
- ☐ Optimize images with Next.js Image
- ☐ Add lightbox functionality

## Videos Page

- ☐ Embed YouTube videos
- ☐ Create responsive video layout

## Contact Page

- ☐ Add contact information
- ☐ Add booking request form

---

# 4. Booking Request System

## Booking Form

Fields:

- ☐ Name
- ☐ Email
- ☐ Phone number
- ☐ Event date
- ☐ Event location
- ☐ Event type
- ☐ Number of guests
- ☐ Message

## Validation

- ☐ Add Zod validation
- ☐ Validate user input
- ☐ Sanitize input

## Submission

- ☐ Create API endpoint
- ☐ Store booking request
- ☐ Send email notification
- ☐ Handle errors gracefully

---

# 5. Database

## Supabase Setup

- ☐ Create Supabase project
- ☐ Configure environment variables

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

---

# 6. Email Notifications

## Resend Setup

- ☐ Create Resend account
- ☐ Configure API key
- ☐ Verify domain

## Booking Notification

- ☐ Create email template
- ☐ Send notification after booking request
- ☐ Handle email failures

---

# 7. Basic Security

## Input Protection

- ☐ Validate all inputs
- ☐ Prevent injection attacks

## Spam Protection

- ☐ Add Cloudflare Turnstile
- ☐ Verify Turnstile server-side

## Secrets

- ☐ Store secrets in Vercel environment variables
- ☐ Verify secrets are not committed

---

# 8. Performance Basics

## Images

- ☐ Optimize image sizes
- ☐ Use WebP/AVIF where appropriate
- ☐ Enable lazy loading

## Frontend

- ☐ Optimize fonts
- ☐ Remove unnecessary dependencies

---

# 9. SEO Basics

## Metadata

- ☐ Add page titles
- ☐ Add meta descriptions
- ☐ Add Open Graph images

## Search Engine Setup

- ☐ Create sitemap.xml
- ☐ Create robots.txt

## Structured Data

- ☐ Add Person schema
- ☐ Add Musician schema

---

# 10. Legal Requirements

Germany / EU:

- ☐ Add Impressum
- ☐ Add Privacy Policy
- ☐ Review GDPR requirements

---

# 11. Deployment

## Vercel

- ☐ Deploy application
- ☐ Configure environment variables
- ☐ Connect GitHub repository

## Domain

- ☐ Purchase domain
- ☐ Configure DNS
- ☐ Enable HTTPS

---

# MVP Definition of Done

- ☐ Website publicly available
- ☐ Custom domain working
- ☐ Mobile-friendly
- ☐ Booking form working
- ☐ Artist receives booking notifications
- ☐ Images and videos optimized
- ☐ SEO basics implemented
- ☐ GDPR pages available