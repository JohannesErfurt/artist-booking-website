import type { BookingRequest } from "@/content/types";

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export function buildBookingNotificationText(booking: BookingRequest): string {
  return [
    "New booking request",
    "",
    `Name: ${booking.name}`,
    `Email: ${booking.email}`,
    `Phone: ${booking.phone}`,
    `Event date: ${booking.event_date}`,
    `Event location: ${booking.event_location}`,
    `Event type: ${booking.event_type}`,
    `Guest count: ${booking.guest_count}`,
    "",
    "Message:",
    booking.message,
  ].join("\n");
}

export function buildBookingNotificationHtml(booking: BookingRequest): string {
  const fields = [
    ["Name", booking.name],
    ["Email", booking.email],
    ["Phone", booking.phone],
    ["Event date", booking.event_date],
    ["Event location", booking.event_location],
    ["Event type", booking.event_type],
    ["Guest count", String(booking.guest_count)],
  ] as const;

  const rows = fields
    .map(
      ([label, value]) =>
        `<tr><th align="left">${escapeHtml(label)}</th><td>${escapeHtml(value)}</td></tr>`,
    )
    .join("");

  return `
    <h1>New booking request</h1>
    <table border="0" cellpadding="6" cellspacing="0">
      ${rows}
    </table>
    <h2>Message</h2>
    <p>${escapeHtml(booking.message).replaceAll("\n", "<br />")}</p>
  `;
}
