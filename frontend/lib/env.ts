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

export function shouldVerifyTurnstile(
  env: EnvConfig = getServerEnv(),
): boolean {
  return env.isProduction && hasTurnstileConfig(env);
}

export function getPublicEnv() {
  const env = getServerEnv();
  return {
    siteUrl: env.siteUrl,
    turnstileSiteKey: env.turnstileSiteKey,
    turnstileEnabled: shouldVerifyTurnstile(env),
  };
}
