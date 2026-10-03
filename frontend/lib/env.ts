import { siteConfig } from "@/content/site";

type EnvConfig = {
  siteUrl: string;
  turnstileSiteKey: string;
  turnstileSecretKey: string;
  supabaseUrl: string;
  supabaseServiceRoleKey: string;
  resendApiKey: string;
  bookingNotificationTo: string;
  bookingNotificationFrom: string;
  cronSecret: string;
  isProduction: boolean;
};

function readEnv(name: string): string {
  return process.env[name]?.trim() ?? "";
}

export function getServerEnv(): EnvConfig {
  return {
    siteUrl: readEnv("NEXT_PUBLIC_SITE_URL") || siteConfig.url,
    turnstileSiteKey: readEnv("NEXT_PUBLIC_TURNSTILE_SITE_KEY"),
    turnstileSecretKey: readEnv("TURNSTILE_SECRET_KEY"),
    supabaseUrl: readEnv("SUPABASE_URL"),
    supabaseServiceRoleKey: readEnv("SUPABASE_SERVICE_ROLE_KEY"),
    resendApiKey: readEnv("RESEND_API_KEY"),
    bookingNotificationTo: readEnv("BOOKING_NOTIFICATION_TO"),
    bookingNotificationFrom: readEnv("BOOKING_NOTIFICATION_FROM"),
    cronSecret: readEnv("CRON_SECRET"),
    isProduction: process.env.NODE_ENV === "production",
  };
}

export function hasSupabaseConfig(env: EnvConfig = getServerEnv()): boolean {
  return Boolean(env.supabaseUrl && env.supabaseServiceRoleKey);
}

export function hasResendConfig(env: EnvConfig = getServerEnv()): boolean {
  return Boolean(
    env.resendApiKey &&
    env.bookingNotificationTo &&
    env.bookingNotificationFrom,
  );
}

export function hasTurnstileConfig(env: EnvConfig = getServerEnv()): boolean {
  return Boolean(env.turnstileSiteKey && env.turnstileSecretKey);
}

// Server side: verify tokens whenever both keys are present, in development
// too, so the check can be tested before launch.
export function shouldVerifyTurnstile(
  env: EnvConfig = getServerEnv(),
): boolean {
  return hasTurnstileConfig(env);
}

// Safe to call in client components. NEXT_PUBLIC_ variables are only
// inlined into the browser bundle when they are referenced literally, so
// they must not be read through readEnv() here. Secrets are never available
// in the browser, so the widget is shown based on the public site key alone.
export function getPublicEnv() {
  const turnstileSiteKey = (
    process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? ""
  ).trim();

  return {
    siteUrl: (process.env.NEXT_PUBLIC_SITE_URL ?? "").trim() || siteConfig.url,
    turnstileSiteKey,
    turnstileEnabled: Boolean(turnstileSiteKey),
  };
}
