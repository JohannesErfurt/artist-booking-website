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
      error: "Bitte bestätige die Spam-Schutz-Prüfung.",
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
      error:
        "Die Spam-Schutz-Prüfung ist fehlgeschlagen. Bitte versuche es erneut.",
    };
  }

  const result = (await response.json()) as TurnstileVerifyResponse;

  if (!result.success) {
    return {
      success: false,
      error:
        "Die Spam-Schutz-Prüfung ist fehlgeschlagen. Bitte versuche es erneut.",
    };
  }

  return {
    success: true,
    error: null,
  };
}
