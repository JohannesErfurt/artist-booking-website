import { promises as fs } from "fs";
import path from "path";
import { randomUUID } from "crypto";
import type { BookingRequest, BookingRequestInput } from "@/content/types";

const DATA_DIR = path.join(process.cwd(), "data");
const BOOKING_FILE = path.join(DATA_DIR, "booking-requests.json");

async function ensureDataFile(): Promise<void> {
  await fs.mkdir(DATA_DIR, { recursive: true });

  try {
    await fs.access(BOOKING_FILE);
  } catch {
    await fs.writeFile(BOOKING_FILE, "[]", "utf8");
  }
}

export async function saveBookingRequestLocally(
  input: BookingRequestInput,
): Promise<BookingRequest> {
  await ensureDataFile();

  const existing = await fs.readFile(BOOKING_FILE, "utf8");
  const requests = JSON.parse(existing) as BookingRequest[];

  const booking: BookingRequest = {
    id: randomUUID(),
    created_at: new Date().toISOString(),
    status: "new",
    ...input,
  };

  requests.push(booking);
  await fs.writeFile(BOOKING_FILE, JSON.stringify(requests, null, 2), "utf8");

  return booking;
}
