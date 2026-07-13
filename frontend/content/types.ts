export type SiteConfig = {
  name: string;
  headline: string;
  shortIntro: string;
  description: string;
  url: string;
  contactEmail: string;
  contactPhone: string;
  bookingCta: string;
  ogImage: string;
};

export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
};

export type VideoEmbed = {
  id: string;
  title: string;
  youtubeId: string;
  description: string;
};

export type Testimonial = {
  id: string;
  quote: string;
  attribution: string;
  role: string;
};

export type Service = {
  id: string;
  title: string;
  description: string;
};

export type BookingRequestStatus =
  "new" | "contacted" | "accepted" | "declined";

export type BookingRequest = {
  id: string;
  created_at: string;
  name: string;
  email: string;
  phone: string;
  event_date: string;
  event_location: string;
  event_type: string;
  guest_count: number;
  message: string;
  status: BookingRequestStatus;
};

export type BookingRequestInput = Omit<
  BookingRequest,
  "id" | "created_at" | "status"
>;
