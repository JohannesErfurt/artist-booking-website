import type { SiteConfig } from "./types";

export const siteConfig: SiteConfig = {
  name: "Artist Name",
  headline: "TODO: replace with final artist headline",
  shortIntro:
    "TODO: replace with final short introduction. This placeholder describes an actor and musician available for live performances, events, and creative collaborations.",
  description:
    "TODO: replace with final site description. Professional artist booking website for live performances and events.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  contactEmail: "TODO: replace with final contact email",
  contactPhone: "TODO: replace with final public phone number",
  bookingCta: "Request a Booking",
  ogImage: "/images/placeholder-og.svg",
};

export const artistBio = {
  fullBio:
    "TODO: replace with final biography. This placeholder text will be replaced with the artist's real story, training, and artistic background.",
  experience:
    "TODO: replace with final experience and references. Include theater credits, music projects, and notable collaborations once provided.",
  achievements:
    "TODO: replace with final achievements. Awards, milestones, and highlights will be listed here after human review.",
};

export const services = [
  {
    id: "live-music",
    title: "Live Music",
    description:
      "TODO: replace with final service description for live musical performances.",
  },
  {
    id: "theater",
    title: "Theater & Acting",
    description:
      "TODO: replace with final service description for acting and theater appearances.",
  },
  {
    id: "events",
    title: "Events & Appearances",
    description:
      "TODO: replace with final service description for corporate and private events.",
  },
];

export const testimonials = [
  {
    id: "placeholder-1",
    quote: "TODO: replace with a real testimonial once provided by the artist.",
    attribution: "Placeholder Client",
    role: "TODO: replace with client role or event",
  },
  {
    id: "placeholder-2",
    quote:
      "TODO: replace with a second testimonial. Placeholders are clearly labeled until final content is approved.",
    attribution: "Placeholder Organizer",
    role: "TODO: replace with event type",
  },
];

export const galleryImages = [
  {
    id: "gallery-1",
    src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop",
    alt: "TODO: replace with final alt text — placeholder performance photo",
    caption: "TODO: replace with final caption",
    width: 800,
    height: 600,
  },
  {
    id: "gallery-2",
    src: "https://images.unsplash.com/photo-1511379938549-c1f69419868d?w=800&h=600&fit=crop",
    alt: "TODO: replace with final alt text — placeholder studio photo",
    caption: "TODO: replace with final caption",
    width: 800,
    height: 600,
  },
  {
    id: "gallery-3",
    src: "https://images.unsplash.com/photo-1514320291840-755a9c963f3d?w=800&h=600&fit=crop",
    alt: "TODO: replace with final alt text — placeholder stage photo",
    caption: "TODO: replace with final caption",
    width: 800,
    height: 600,
  },
  {
    id: "gallery-4",
    src: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&h=600&fit=crop",
    alt: "TODO: replace with final alt text — placeholder audience photo",
    caption: "TODO: replace with final caption",
    width: 800,
    height: 600,
  },
];

export const videoEmbeds = [
  {
    id: "video-1",
    title: "TODO: replace with final video title",
    youtubeId: "dQw4w9WgXcQ",
    description:
      "TODO: replace with final video description. YouTube ID is a placeholder until real URLs are provided.",
  },
  {
    id: "video-2",
    title: "TODO: replace with second video title",
    youtubeId: "9bZkp7q19f0",
    description: "TODO: replace with final video description.",
  },
];

export const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/videos", label: "Videos" },
  { href: "/contact", label: "Contact" },
];

export const legalLinks = [
  { href: "/impressum", label: "Impressum" },
  { href: "/privacy", label: "Privacy Policy" },
];

export const eventTypes = [
  "Concert",
  "Theater Performance",
  "Corporate Event",
  "Private Event",
  "Festival",
  "Other",
] as const;
