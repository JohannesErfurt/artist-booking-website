import { getServerEnv } from "@/lib/env";

type TurnstileVerifyResponse = {
  success: boolean;
  "error-codes"?: string[];
};

export async function verifyTurnstileToken(
  token: string | undefined,
): Promise<{ success: boolean; error: string | null }> {
  const env = getServerEnv();

  if (!token) {
    return {
      success: false,
      error: "Turnstile verification is required.",
    };
  }

  const body = new URLSearchParams({
    secret: env.turnstileSecretKey,
    response: token,
  });

  const response = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body,
    },
  );

  if (!response.ok) {
    return {
      success: false,
      error: "Turnstile verification failed.",
    };
  }

  const result = (await response.json()) as TurnstileVerifyResponse;

  if (!result.success) {
    return {
      success: false,
      error: "Turnstile verification failed.",
    };
  }

  return {
    success: true,
    error: null,
  };
}
