import { Resend } from "resend";
import type { BookingRequest } from "@/content/types";
import { getServerEnv, hasResendConfig } from "@/lib/env";
import {
  buildBookingNotificationHtml,
  buildBookingNotificationSubject,
  buildBookingNotificationText,
} from "@/lib/server/email-template";

export type BookingNotificationResult =
  | { success: true; skipped: false; error: null }
  | { success: false; skipped: boolean; error: string };

export async function sendBookingNotification(
  booking: BookingRequest,
): Promise<BookingNotificationResult> {
  const env = getServerEnv();

  if (!hasResendConfig(env)) {
    return {
      success: false,
      skipped: true,
      error: "Resend is not configured.",
    };
  }

  const resend = new Resend(env.resendApiKey);

  try {
    const { error } = await resend.emails.send({
      from: env.bookingNotificationFrom,
      to: env.bookingNotificationTo,
      // Replying to the notification reaches the person who sent the request.
      replyTo: booking.email,
      subject: buildBookingNotificationSubject(booking),
      html: buildBookingNotificationHtml(booking),
      text: buildBookingNotificationText(booking),
    });

    if (error) {
      return { success: false, skipped: false, error: error.message };
    }
  } catch (error) {
    return {
      success: false,
      skipped: false,
      error: error instanceof Error ? error.message : "Unknown email error.",
    };
  }

  return { success: true, skipped: false, error: null };
}
