import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import type { BookingRequest } from "@/content/types";

const sendMock = vi.fn();

vi.mock("resend", () => ({
  Resend: class {
    emails = { send: sendMock };
  },
}));

import { sendBookingNotification } from "@/lib/server/resend";

const booking: BookingRequest = {
  id: "test-id",
  created_at: "2026-10-03T10:00:00.000Z",
  status: "new",
  name: "Alex Example",
  email: "alex@example.com",
  phone: "+49 123 456789",
  event_date: "2026-12-01",
  event_location: "Berlin",
  event_type: "Geburtstag",
  guest_count: 40,
  message: "Wir würden gern einen Auftritt anfragen.",
};

describe("sendBookingNotification", () => {
  beforeEach(() => {
    sendMock.mockReset();
    vi.stubEnv("RESEND_API_KEY", "test-key");
    vi.stubEnv("BOOKING_NOTIFICATION_TO", "artist@example.com");
    vi.stubEnv("BOOKING_NOTIFICATION_FROM", "website@example.com");
  });

  afterEach(() => {
    vi.unstubAllEnvs();
  });

  it("skips sending when Resend is not configured", async () => {
    vi.stubEnv("RESEND_API_KEY", "");

    const result = await sendBookingNotification(booking);

    expect(result).toMatchObject({ success: false, skipped: true });
    expect(sendMock).not.toHaveBeenCalled();
  });

  it("sends to the artist with the customer as reply-to", async () => {
    sendMock.mockResolvedValue({ data: { id: "email-id" }, error: null });

    const result = await sendBookingNotification(booking);

    expect(result).toEqual({ success: true, skipped: false, error: null });
    expect(sendMock).toHaveBeenCalledWith(
      expect.objectContaining({
        from: "website@example.com",
        to: "artist@example.com",
        replyTo: "alex@example.com",
        subject: "Neue Anfrage: Geburtstag am 01.12.2026 (Alex Example)",
      }),
    );
  });

  it("reports an error returned by Resend", async () => {
    sendMock.mockResolvedValue({
      data: null,
      error: { message: "Domain not verified" },
    });

    const result = await sendBookingNotification(booking);

    expect(result).toEqual({
      success: false,
      skipped: false,
      error: "Domain not verified",
    });
  });

  it("reports a thrown network error instead of crashing", async () => {
    sendMock.mockRejectedValue(new Error("fetch failed"));

    const result = await sendBookingNotification(booking);

    expect(result).toEqual({
      success: false,
      skipped: false,
      error: "fetch failed",
    });
  });
});
