import { Resend } from "resend";
import type { BookingRequest } from "@/content/types";
import { getServerEnv, hasResendConfig } from "@/lib/env";
import {
  buildBookingNotificationHtml,
  buildBookingNotificationText,
} from "@/lib/server/email-template";

export async function sendBookingNotification(
  booking: BookingRequest,
): Promise<{ success: boolean; error: string | null }> {
  const env = getServerEnv();

  if (!hasResendConfig(env)) {
    return {
      success: false,
      error: "Resend is not configured.",
    };
  }

  const resend = new Resend(env.resendApiKey);

  const { error } = await resend.emails.send({
    from: env.bookingNotificationFrom,
    to: env.bookingNotificationTo,
    subject: `New booking request from ${booking.name}`,
    html: buildBookingNotificationHtml(booking),
    text: buildBookingNotificationText(booking),
  });

  if (error) {
    return {
      success: false,
      error: error.message,
    };
  }

  return {
    success: true,
    error: null,
  };
}
