import { z } from "zod";
import { eventTypes } from "@/content/site";

export const bookingRequestSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Bitte gib deinen Namen an (mindestens 2 Zeichen).")
    .max(100, "Der Name darf höchstens 100 Zeichen lang sein."),
  email: z
    .string()
    .trim()
    .email("Bitte gib eine gültige E-Mail-Adresse an.")
    .max(254, "Die E-Mail-Adresse darf höchstens 254 Zeichen lang sein."),
  phone: z
    .string()
    .trim()
    .min(5, "Bitte gib eine Telefonnummer an (mindestens 5 Zeichen).")
    .max(30, "Die Telefonnummer darf höchstens 30 Zeichen lang sein."),
  event_date: z
    .string()
    .trim()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Bitte gib das Datum der Feier an."),
  event_location: z
    .string()
    .trim()
    .min(2, "Bitte gib den Ort der Feier an (mindestens 2 Zeichen).")
    .max(200, "Der Ort darf höchstens 200 Zeichen lang sein."),
  event_type: z.enum(eventTypes, {
    errorMap: () => ({ message: "Bitte wähle einen Anlass aus." }),
  }),
  guest_count: z.coerce
    .number()
    .int("Die Anzahl der Gäste muss eine ganze Zahl sein.")
    .min(1, "Bitte gib mindestens 1 Gast an.")
    .max(10000, "Es sind höchstens 10.000 Gäste möglich."),
  message: z
    .string()
    .trim()
    .min(
      10,
      "Bitte schreib ein paar Worte zu deiner Feier (mindestens 10 Zeichen).",
    )
    .max(2000, "Die Nachricht darf höchstens 2000 Zeichen lang sein."),
  turnstileToken: z.string().optional(),
});

export type BookingRequestFormData = z.infer<typeof bookingRequestSchema>;

export const bookingApiSchema = bookingRequestSchema;
