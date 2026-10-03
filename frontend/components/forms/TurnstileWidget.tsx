"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";
import { getPublicEnv } from "@/lib/env";

type TurnstileWidgetProps = {
  onVerify: (token: string) => void;
  onExpire?: () => void;
  // Change this value to request a fresh check. A token can only be used
  // once, so the form does this after every submission attempt.
  resetKey?: number;
};

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: HTMLElement,
        options: {
          sitekey: string;
          language?: string;
          callback: (token: string) => void;
          "expired-callback"?: () => void;
          "error-callback"?: () => void;
        },
      ) => string;
      reset: (widgetId: string) => void;
      remove: (widgetId: string) => void;
    };
  }
}

export function TurnstileWidget({
  onVerify,
  onExpire,
  resetKey = 0,
}: TurnstileWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const [scriptReady, setScriptReady] = useState(false);
  const { turnstileSiteKey, turnstileEnabled } = getPublicEnv();

  // Keep the latest callbacks without re-rendering the widget each time the
  // parent form re-renders.
  const onVerifyRef = useRef(onVerify);
  const onExpireRef = useRef(onExpire);

  useEffect(() => {
    onVerifyRef.current = onVerify;
    onExpireRef.current = onExpire;
  }, [onVerify, onExpire]);

  useEffect(() => {
    if (
      !turnstileEnabled ||
      !scriptReady ||
      !containerRef.current ||
      !window.turnstile
    ) {
      return;
    }

    const widgetId = window.turnstile.render(containerRef.current, {
      sitekey: turnstileSiteKey,
      language: "de",
      callback: (token) => onVerifyRef.current(token),
      "expired-callback": () => onExpireRef.current?.(),
      "error-callback": () => onExpireRef.current?.(),
    });
    widgetIdRef.current = widgetId;

    return () => {
      window.turnstile?.remove(widgetId);
      widgetIdRef.current = null;
    };
  }, [scriptReady, turnstileEnabled, turnstileSiteKey]);

  useEffect(() => {
    if (resetKey > 0 && widgetIdRef.current && window.turnstile) {
      window.turnstile.reset(widgetIdRef.current);
    }
  }, [resetKey]);

  if (!turnstileEnabled) {
    return null;
  }

  return (
    <>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        strategy="afterInteractive"
        onReady={() => setScriptReady(true)}
      />
      <div ref={containerRef} className="min-h-[65px]" />
    </>
  );
}
