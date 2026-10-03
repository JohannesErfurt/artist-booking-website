import { NextResponse } from "next/server";
import { getServerEnv } from "@/lib/env";
import { getSupabaseClient } from "@/lib/server/supabase";

// Never cache: the point is to reach the database on every call.
export const dynamic = "force-dynamic";

// Called once a day by Vercel Cron (see vercel.json). Free Supabase projects
// are paused after about a week without activity; a small daily query
// prevents that.
export async function GET(request: Request) {
  const env = getServerEnv();

  // Vercel Cron sends "Authorization: Bearer <CRON_SECRET>". In production
  // the secret is mandatory so the endpoint cannot be triggered by anyone.
  if (env.isProduction || env.cronSecret) {
    const authorized =
      Boolean(env.cronSecret) &&
      request.headers.get("authorization") === `Bearer ${env.cronSecret}`;

    if (!authorized) {
      return NextResponse.json({ ok: false }, { status: 401 });
    }
  }

  const client = getSupabaseClient();

  if (!client) {
    return NextResponse.json(
      { ok: false, message: "Supabase is not configured." },
      { status: 503 },
    );
  }

  const { error } = await client
    .from("booking_requests")
    .select("id", { count: "exact", head: true });

  if (error) {
    console.error(`[keep-alive] Supabase query FAILED: ${error.message}`);

    return NextResponse.json({ ok: false }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
