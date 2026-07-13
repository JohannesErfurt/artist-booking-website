import { describe, expect, it } from "vitest";
import { bookingRequestSchema } from "@/lib/validation/booking";
import { sanitizeText } from "@/lib/sanitize";

describe("bookingRequestSchema", () => {
  const validPayload = {
    name: "Alex Example",
    email: "alex@example.com",
    phone: "+49 123 456789",
    event_date: "2026-12-01",
    event_location: "Berlin",
    event_type: "Concert",
    guest_count: 120,
    message: "We would like to discuss a live performance booking.",
  };

  it("accepts valid booking input", () => {
    const result = bookingRequestSchema.safeParse(validPayload);
    expect(result.success).toBe(true);
  });

  it("rejects invalid email addresses", () => {
    const result = bookingRequestSchema.safeParse({
      ...validPayload,
      email: "not-an-email",
    });

    expect(result.success).toBe(false);
  });

  it("rejects invalid guest counts", () => {
    const result = bookingRequestSchema.safeParse({
      ...validPayload,
      guest_count: 0,
    });

    expect(result.success).toBe(false);
  });
});

describe("sanitizeText", () => {
  it("trims and removes control characters", () => {
    expect(sanitizeText("  hello\u0000world  ")).toBe("helloworld");
  });
});
