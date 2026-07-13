import { NextResponse } from "next/server";
import { shouldVerifyTurnstile } from "@/lib/env";
import { sanitizeBookingInput } from "@/lib/sanitize";
import { processBookingSubmission } from "@/lib/server/booking-service";
import { verifyTurnstileToken } from "@/lib/server/turnstile";
import { bookingApiSchema } from "@/lib/validation/booking";

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Invalid JSON payload.",
      },
      { status: 400 },
    );
  }

  const parsed = bookingApiSchema.safeParse(body);

  if (!parsed.success) {
    const errors: Record<string, string> = {};

    for (const issue of parsed.error.issues) {
      const field = issue.path[0];
      if (typeof field === "string" && !errors[field]) {
        errors[field] = issue.message;
      }
    }

    return NextResponse.json(
      {
        success: false,
        message: "Validation failed.",
        errors,
      },
      { status: 400 },
    );
  }

  if (shouldVerifyTurnstile()) {
    const turnstileResult = await verifyTurnstileToken(
      parsed.data.turnstileToken,
    );

    if (!turnstileResult.success) {
      return NextResponse.json(
        {
          success: false,
          message: turnstileResult.error,
        },
        { status: 400 },
      );
    }
  }

  const sanitized = sanitizeBookingInput(parsed.data);
  const bookingInput = {
    name: sanitized.name,
    email: sanitized.email,
    phone: sanitized.phone,
    event_date: sanitized.event_date,
    event_location: sanitized.event_location,
    event_type: sanitized.event_type,
    guest_count: sanitized.guest_count,
    message: sanitized.message,
  };

  const result = await processBookingSubmission(bookingInput);

  if (!result.success) {
    return NextResponse.json(
      {
        success: false,
        message: result.error,
      },
      { status: 500 },
    );
  }

  return NextResponse.json({
    success: true,
    message: "Booking request received.",
    bookingId: result.result.bookingId,
    storage: result.result.storage,
    emailSent: result.result.emailSent,
  });
}
