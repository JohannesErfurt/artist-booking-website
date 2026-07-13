import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import type { BookingRequest, BookingRequestInput } from "@/content/types";
import { getServerEnv, hasSupabaseConfig } from "@/lib/env";

let supabaseClient: SupabaseClient | null = null;

export function getSupabaseClient(): SupabaseClient | null {
  if (supabaseClient) {
    return supabaseClient;
  }

  const env = getServerEnv();
  if (!hasSupabaseConfig(env)) {
    return null;
  }

  supabaseClient = createClient(env.supabaseUrl, env.supabaseServiceRoleKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });

  return supabaseClient;
}

export async function insertBookingRequest(
  input: BookingRequestInput,
): Promise<{ data: BookingRequest | null; error: string | null }> {
  const client = getSupabaseClient();

  if (!client) {
    return {
      data: null,
      error: "Supabase is not configured.",
    };
  }

  const { data, error } = await client
    .from("booking_requests")
    .insert({
      ...input,
      status: "new",
    })
    .select()
    .single();

  if (error) {
    return {
      data: null,
      error: error.message,
    };
  }

  return {
    data: data as BookingRequest,
    error: null,
  };
}
