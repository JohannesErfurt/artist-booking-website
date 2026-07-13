import { z } from "zod";
import { eventTypes } from "@/content/site";

export const bookingRequestSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters.")
    .max(100, "Name must be at most 100 characters."),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address.")
    .max(254, "Email must be at most 254 characters."),
  phone: z
    .string()
    .trim()
    .min(5, "Phone number must be at least 5 characters.")
    .max(30, "Phone number must be at most 30 characters."),
  event_date: z
    .string()
    .trim()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Please enter a valid event date."),
  event_location: z
    .string()
    .trim()
    .min(2, "Event location must be at least 2 characters.")
    .max(200, "Event location must be at most 200 characters."),
  event_type: z.enum(eventTypes, {
    errorMap: () => ({ message: "Please select a valid event type." }),
  }),
  guest_count: z.coerce
    .number()
    .int("Guest count must be a whole number.")
    .min(1, "Guest count must be at least 1.")
    .max(10000, "Guest count must be at most 10,000."),
  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters.")
    .max(2000, "Message must be at most 2000 characters."),
  turnstileToken: z.string().optional(),
});

export type BookingRequestFormData = z.infer<typeof bookingRequestSchema>;

export const bookingApiSchema = bookingRequestSchema;
