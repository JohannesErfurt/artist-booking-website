"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { CloseIcon, MenuIcon } from "@/components/ui/Icons";
import { navigationLinks, siteConfig } from "@/content/site";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="border-border sticky top-0 z-40 border-b bg-white/95 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          className="font-display text-brand-600 hover:text-brand-700 text-2xl"
          onClick={() => setOpen(false)}
        >
          {siteConfig.name}
        </Link>

        <nav
          className="hidden items-center gap-1 md:flex"
          aria-label="Hauptnavigation"
        >
          {navigationLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-full px-3 py-2 text-sm font-medium ${
                  active
                    ? "bg-brand-50 text-brand-700"
                    : "text-muted hover:bg-surface-muted hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Button href="/contact" size="sm" className="ml-3">
            {siteConfig.bookingCta}
          </Button>
        </nav>

        <button
          type="button"
          className="text-foreground hover:bg-surface-muted -mr-2 inline-flex h-11 w-11 items-center justify-center rounded-full md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="border-border border-t bg-white md:hidden"
          aria-label="Mobile Navigation"
        >
          <div className="container-page flex flex-col gap-1 py-4">
            {navigationLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`rounded-lg px-3 py-3 text-base font-medium ${
                    active
                      ? "bg-brand-50 text-brand-700"
                      : "text-foreground hover:bg-surface-muted"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
            <Button href="/contact" size="lg" className="mt-3">
              {siteConfig.bookingCta}
            </Button>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
