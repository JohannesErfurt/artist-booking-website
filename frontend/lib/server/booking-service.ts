import { randomUUID } from "crypto";
import type { BookingRequestInput } from "@/content/types";
import { hasSupabaseConfig } from "@/lib/env";
import { saveBookingRequestLocally } from "@/lib/server/local-booking-store";
import { sendBookingNotification } from "@/lib/server/resend";
import { insertBookingRequest } from "@/lib/server/supabase";

export type BookingSubmissionResult = {
  bookingId: string;
  // "email-only": the database was unavailable, so the notification email
  // is the only record of this request.
  storage: "supabase" | "local" | "email-only";
  emailSent: boolean;
  emailError: string | null;
};

const SAVE_FAILED_MESSAGE =
  "Die Anfrage konnte gerade nicht gespeichert werden. Bitte versuche es später erneut oder ruf einfach an.";

export async function processBookingSubmission(
  input: BookingRequestInput,
): Promise<
  | { success: true; result: BookingSubmissionResult }
  | { success: false; error: string }
> {
  let bookingId: string;
  let storage: BookingSubmissionResult["storage"];

  if (hasSupabaseConfig()) {
    const { data, error } = await insertBookingRequest(input);

    if (error || !data) {
      // E.g. a paused free-plan project. Do not give up yet: the email
      // below can still deliver the request.
      console.error(
        `[booking] Saving to Supabase FAILED: ${error ?? "no row returned"}`,
      );
      bookingId = randomUUID();
      storage = "email-only";
    } else {
      bookingId = data.id;
      storage = "supabase";
    }
  } else {
    const booking = await saveBookingRequestLocally(input);
    bookingId = booking.id;
    storage = "local";
  }

  const emailResult = await sendBookingNotification(
    {
      id: bookingId,
      created_at: new Date().toISOString(),
      status: "new",
      ...input,
    },
    { notStored: storage === "email-only" },
  );

  // No personal data is logged, only the booking id.
  if (emailResult.skipped) {
    console.warn(
      `[booking] Notification email skipped for booking ${bookingId}: ${emailResult.error}`,
    );
  } else if (!emailResult.success) {
    console.error(
      `[booking] Notification email FAILED for booking ${bookingId} (stored in ${storage}): ${emailResult.error}`,
    );
  }

  // Neither stored nor emailed: the request is lost, so the visitor must
  // be told.
  if (storage === "email-only" && !emailResult.success) {
    console.error(
      `[booking] Booking ${bookingId} LOST: database and email both failed.`,
    );

    return { success: false, error: SAVE_FAILED_MESSAGE };
  }

  if (storage === "email-only") {
    console.warn(
      `[booking] Booking ${bookingId} delivered by email only; it is not in the database.`,
    );
  }

  return {
    success: true,
    result: {
      bookingId,
      storage,
      emailSent: emailResult.success,
      emailError: emailResult.error,
    },
  };
}
