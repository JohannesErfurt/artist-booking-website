import { afterEach, describe, expect, it, vi } from "vitest";
import { getPublicEnv, shouldVerifyTurnstile } from "@/lib/env";

describe("Turnstile configuration", () => {
  afterEach(() => {
    vi.unstubAllEnvs();
  });

  it("is off when no keys are configured", () => {
    vi.stubEnv("NEXT_PUBLIC_TURNSTILE_SITE_KEY", "");
    vi.stubEnv("TURNSTILE_SECRET_KEY", "");

    expect(shouldVerifyTurnstile()).toBe(false);
    expect(getPublicEnv().turnstileEnabled).toBe(false);
  });

  it("verifies on the server only when both keys are present", () => {
    vi.stubEnv("NEXT_PUBLIC_TURNSTILE_SITE_KEY", "site-key");
    vi.stubEnv("TURNSTILE_SECRET_KEY", "");
    expect(shouldVerifyTurnstile()).toBe(false);

    vi.stubEnv("TURNSTILE_SECRET_KEY", "secret-key");
    expect(shouldVerifyTurnstile()).toBe(true);
  });

  it("shows the widget based on the public site key alone", () => {
    vi.stubEnv("NEXT_PUBLIC_TURNSTILE_SITE_KEY", "site-key");
    vi.stubEnv("TURNSTILE_SECRET_KEY", "");

    expect(getPublicEnv()).toMatchObject({
      turnstileSiteKey: "site-key",
      turnstileEnabled: true,
    });
  });
});
