import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import type { BookingRequestInput } from "@/content/types";

const { insertMock, sendMock, saveLocallyMock, hasSupabaseConfigMock } =
  vi.hoisted(() => ({
    insertMock: vi.fn(),
    sendMock: vi.fn(),
    saveLocallyMock: vi.fn(),
    hasSupabaseConfigMock: vi.fn(),
  }));

vi.mock("@/lib/server/supabase", () => ({
  insertBookingRequest: insertMock,
}));
vi.mock("@/lib/server/resend", () => ({
  sendBookingNotification: sendMock,
}));
vi.mock("@/lib/server/local-booking-store", () => ({
  saveBookingRequestLocally: saveLocallyMock,
}));
vi.mock("@/lib/env", () => ({
  hasSupabaseConfig: hasSupabaseConfigMock,
}));

import { processBookingSubmission } from "@/lib/server/booking-service";

const input: BookingRequestInput = {
  name: "Alex Example",
  email: "alex@example.com",
  phone: "+49 123 456789",
  event_date: "2026-12-01",
  event_location: "Berlin",
  event_type: "Geburtstag",
  guest_count: 40,
  message: "Wir würden gern einen Auftritt anfragen.",
};

const emailSent = { success: true, skipped: false, error: null };
const emailFailed = { success: false, skipped: false, error: "boom" };

describe("processBookingSubmission", () => {
  beforeEach(() => {
    vi.resetAllMocks();
    hasSupabaseConfigMock.mockReturnValue(true);
    vi.spyOn(console, "error").mockImplementation(() => {});
    vi.spyOn(console, "warn").mockImplementation(() => {});
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("stores in Supabase and sends the email", async () => {
    insertMock.mockResolvedValue({ data: { id: "db-id" }, error: null });
    sendMock.mockResolvedValue(emailSent);

    const result = await processBookingSubmission(input);

    expect(result).toEqual({
      success: true,
      result: {
        bookingId: "db-id",
        storage: "supabase",
        emailSent: true,
        emailError: null,
      },
    });
    expect(sendMock).toHaveBeenCalledWith(
      expect.objectContaining({ id: "db-id" }),
      { notStored: false },
    );
  });

  it("still succeeds when only the email fails", async () => {
    insertMock.mockResolvedValue({ data: { id: "db-id" }, error: null });
    sendMock.mockResolvedValue(emailFailed);

    const result = await processBookingSubmission(input);

    expect(result).toMatchObject({
      success: true,
      result: { storage: "supabase", emailSent: false },
    });
  });

  it("delivers by email when the database is unavailable", async () => {
    insertMock.mockResolvedValue({ data: null, error: "project paused" });
    sendMock.mockResolvedValue(emailSent);

    const result = await processBookingSubmission(input);

    expect(result).toMatchObject({
      success: true,
      result: { storage: "email-only", emailSent: true },
    });
    expect(sendMock).toHaveBeenCalledWith(expect.anything(), {
      notStored: true,
    });
  });

  it("fails when database and email are both unavailable", async () => {
    insertMock.mockResolvedValue({ data: null, error: "project paused" });
    sendMock.mockResolvedValue(emailFailed);

    const result = await processBookingSubmission(input);

    expect(result.success).toBe(false);
  });

  it("uses the local store when Supabase is not configured", async () => {
    hasSupabaseConfigMock.mockReturnValue(false);
    saveLocallyMock.mockResolvedValue({ id: "local-id" });
    sendMock.mockResolvedValue({
      success: false,
      skipped: true,
      error: "Resend is not configured.",
    });

    const result = await processBookingSubmission(input);

    expect(result).toMatchObject({
      success: true,
      result: { bookingId: "local-id", storage: "local", emailSent: false },
    });
    expect(insertMock).not.toHaveBeenCalled();
  });
});
