export function sanitizeText(value: string): string {
  return value
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "")
    .trim();
}

export function sanitizeBookingInput<T extends Record<string, unknown>>(
  input: T,
): T {
  const sanitized = { ...input };

  for (const [key, value] of Object.entries(sanitized)) {
    if (typeof value === "string") {
      sanitized[key as keyof T] = sanitizeText(value) as T[keyof T];
    }
  }

  return sanitized;
}
