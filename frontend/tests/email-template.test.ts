import { describe, expect, it } from "vitest";
import type { BookingRequest } from "@/content/types";
import {
  buildBookingNotificationHtml,
  buildBookingNotificationSubject,
  buildBookingNotificationText,
} from "@/lib/server/email-template";

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
  message: "Wir feiern <b>groß</b>.\nBitte melden!",
};

describe("booking notification email", () => {
  it("builds a German subject with occasion, date and name", () => {
    expect(buildBookingNotificationSubject(booking)).toBe(
      "Neue Anfrage: Geburtstag am 01.12.2026 (Alex Example)",
    );
  });

  it("lists all booking fields in the text version", () => {
    const text = buildBookingNotificationText(booking);

    expect(text).toContain("Name: Alex Example");
    expect(text).toContain("E-Mail: alex@example.com");
    expect(text).toContain("Datum der Feier: 01.12.2026");
    expect(text).toContain("Anzahl der Gäste: 40");
    expect(text).toContain("Wir feiern <b>groß</b>.");
  });

  it("escapes user input in the HTML version", () => {
    const html = buildBookingNotificationHtml(booking);

    expect(html).toContain("&lt;b&gt;groß&lt;/b&gt;");
    expect(html).not.toContain("<b>groß</b>");
    expect(html).toContain("<br />");
  });
});
