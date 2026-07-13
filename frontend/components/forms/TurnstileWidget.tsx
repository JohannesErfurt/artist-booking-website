"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";
import { getPublicEnv } from "@/lib/env";

type TurnstileWidgetProps = {
  onVerify: (token: string) => void;
  onExpire?: () => void;
};

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: HTMLElement,
        options: {
          sitekey: string;
          callback: (token: string) => void;
          "expired-callback"?: () => void;
        },
      ) => string;
      reset: (widgetId: string) => void;
    };
  }
}

export function TurnstileWidget({ onVerify, onExpire }: TurnstileWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const [scriptReady, setScriptReady] = useState(false);
  const { turnstileSiteKey, turnstileEnabled } = getPublicEnv();

  useEffect(() => {
    if (
      !turnstileEnabled ||
      !scriptReady ||
      !containerRef.current ||
      !window.turnstile
    ) {
      return;
    }

    widgetIdRef.current = window.turnstile.render(containerRef.current, {
      sitekey: turnstileSiteKey,
      callback: onVerify,
      "expired-callback": onExpire,
    });
  }, [onExpire, onVerify, scriptReady, turnstileEnabled, turnstileSiteKey]);

  if (!turnstileEnabled) {
    return (
      <p className="text-muted text-sm">
        Turnstile is disabled in local development when production keys are not
        configured.
      </p>
    );
  }

  return (
    <>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        strategy="lazyOnload"
        onLoad={() => setScriptReady(true)}
      />
      <div ref={containerRef} />
    </>
  );
}
