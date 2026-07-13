import type { BookingRequestInput } from "@/content/types";
import { hasSupabaseConfig } from "@/lib/env";
import { saveBookingRequestLocally } from "@/lib/server/local-booking-store";
import { sendBookingNotification } from "@/lib/server/resend";
import { insertBookingRequest } from "@/lib/server/supabase";

export type BookingSubmissionResult = {
  bookingId: string;
  storage: "supabase" | "local";
  emailSent: boolean;
  emailError: string | null;
};

export async function processBookingSubmission(
  input: BookingRequestInput,
): Promise<
  | { success: true; result: BookingSubmissionResult }
  | { success: false; error: string }
> {
  let bookingId: string;
  let storage: "supabase" | "local";

  if (hasSupabaseConfig()) {
    const { data, error } = await insertBookingRequest(input);

    if (error || !data) {
      return {
        success: false,
        error: "Unable to save booking request. Please try again later.",
      };
    }

    bookingId = data.id;
    storage = "supabase";
  } else {
    const booking = await saveBookingRequestLocally(input);
    bookingId = booking.id;
    storage = "local";
  }

  const emailResult = await sendBookingNotification({
    id: bookingId,
    created_at: new Date().toISOString(),
    status: "new",
    ...input,
  });

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
