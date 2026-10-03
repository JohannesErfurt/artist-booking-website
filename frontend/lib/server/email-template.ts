import type { BookingRequest } from "@/content/types";

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

// 2026-12-01 -> 01.12.2026
function formatEventDate(isoDate: string): string {
  const [year, month, day] = isoDate.split("-");
  return year && month && day ? `${day}.${month}.${year}` : isoDate;
}

function getBookingFields(booking: BookingRequest) {
  return [
    ["Name", booking.name],
    ["E-Mail", booking.email],
    ["Telefon", booking.phone],
    ["Datum der Feier", formatEventDate(booking.event_date)],
    ["Ort der Feier", booking.event_location],
    ["Anlass", booking.event_type],
    ["Anzahl der Gäste", String(booking.guest_count)],
  ] as const;
}

export function buildBookingNotificationSubject(
  booking: BookingRequest,
): string {
  return `Neue Anfrage: ${booking.event_type} am ${formatEventDate(booking.event_date)} (${booking.name})`;
}

export function buildBookingNotificationText(booking: BookingRequest): string {
  return [
    "Neue Buchungsanfrage über die Website",
    "",
    ...getBookingFields(booking).map(([label, value]) => `${label}: ${value}`),
    "",
    "Nachricht:",
    booking.message,
    "",
    `Zum Antworten einfach auf diese E-Mail antworten – die Antwort geht direkt an ${booking.name}.`,
  ].join("\n");
}

export function buildBookingNotificationHtml(booking: BookingRequest): string {
  const rows = getBookingFields(booking)
    .map(
      ([label, value]) =>
        `<tr><th align="left" valign="top" style="padding:6px 16px 6px 0;white-space:nowrap;">${escapeHtml(label)}</th><td style="padding:6px 0;">${escapeHtml(value)}</td></tr>`,
    )
    .join("");

  // A complete document with padding on a wrapper element: mail clients that
  // size their preview to the content otherwise cut off the last line.
  return `<!DOCTYPE html>
<html lang="de">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Neue Buchungsanfrage</title>
  </head>
  <body style="margin:0;padding:0;">
    <div style="max-width:600px;padding:24px 16px 48px;font-family:Arial,Helvetica,sans-serif;font-size:16px;line-height:1.5;color:#1c1412;">
      <h1 style="margin:0 0 16px;font-size:22px;line-height:1.3;">Neue Buchungsanfrage über die Website</h1>
      <table border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse;font-size:16px;">
        ${rows}
      </table>
      <h2 style="margin:24px 0 8px;font-size:18px;">Nachricht</h2>
      <p style="margin:0 0 24px;">${escapeHtml(booking.message).replaceAll("\n", "<br />")}</p>
      <p style="margin:0;padding:12px 0 0;border-top:1px solid #eadfd7;font-size:14px;color:#6b5d58;">Zum Antworten einfach auf diese E-Mail antworten – die Antwort geht direkt an ${escapeHtml(booking.name)}.</p>
      <div style="height:24px;line-height:24px;">&nbsp;</div>
    </div>
  </body>
</html>`;
}
