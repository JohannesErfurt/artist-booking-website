# Manual QA Checklist

Use this checklist for human-readable verification of the MVP. The agent should update `loop-engineering/mvp_progress.md` with relevant results.

## Global Layout

- [ ] Header appears on all public pages.
- [ ] Footer appears on all public pages.
- [ ] Navigation links work.
- [ ] Legal links are visible in the footer.
- [ ] Page content is readable on mobile.
- [ ] Page content is readable on desktop.
- [ ] No obvious text overlap or clipping.

## Home Page

- [ ] Hero section renders.
- [ ] Primary booking CTA is visible.
- [ ] Featured media section renders.
- [ ] Testimonials section renders or clearly uses placeholders.
- [ ] Contact CTA links to the contact page or booking form.

## About Page

- [ ] Biography section renders.
- [ ] Experience or references section renders.
- [ ] Achievements section renders.
- [ ] Placeholder content is clearly labeled if final content is missing.

## Gallery Page

- [ ] Images render with stable dimensions.
- [ ] Image layout works on mobile.
- [ ] Image layout works on desktop.
- [ ] Lightbox opens.
- [ ] Lightbox closes.
- [ ] Images have useful alt text or clear placeholders.

## Videos Page

- [ ] Video embeds render.
- [ ] Videos keep a responsive aspect ratio.
- [ ] Page works on mobile.
- [ ] Page works on desktop.

## Contact and Booking Form

- [ ] Form renders all required MVP fields.
- [ ] Empty required fields show validation errors.
- [ ] Invalid email shows validation error.
- [ ] Invalid guest count shows validation error.
- [ ] Valid submission shows loading state.
- [ ] Successful submission shows confirmation state.
- [ ] Failed submission shows useful error state.
- [ ] Form can be submitted with keyboard input.

## Legal Pages

- [ ] Impressum page renders.
- [ ] Privacy Policy page renders.
- [ ] Placeholder legal content is clearly marked if final text is missing.
- [ ] Footer links open the correct legal pages.

## Production Smoke Test

- [ ] Production URL loads.
- [ ] Custom domain loads.
- [ ] HTTPS is active.
- [ ] Booking form submits successfully.
- [ ] Booking request appears in Supabase.
- [ ] Notification email is received.
- [ ] Turnstile is active.
- [ ] Sitemap is reachable.
- [ ] Robots file is reachable.

