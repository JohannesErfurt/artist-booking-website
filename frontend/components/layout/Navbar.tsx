"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navigationLinks, siteConfig } from "@/content/site";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="border-border sticky top-0 z-50 border-b bg-white/95 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between">
        <Link href="/" className="text-foreground text-lg font-semibold">
          {siteConfig.name}
        </Link>

        <button
          type="button"
          className="border-border inline-flex items-center justify-center rounded-md border px-3 py-2 text-sm font-medium md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          Menü
        </button>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Main">
          {navigationLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium ${
                  active ? "text-brand-700" : "text-muted hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="border-border border-t bg-white md:hidden"
          aria-label="Mobile"
        >
          <div className="container-page flex flex-col gap-2 py-4">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground hover:bg-surface-muted rounded-md px-2 py-2 text-sm font-medium"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
