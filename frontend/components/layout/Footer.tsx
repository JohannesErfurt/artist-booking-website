import Link from "next/link";
import {
  contactLinks,
  legalLinks,
  navigationLinks,
  siteConfig,
} from "@/content/site";

const linkClasses =
  "text-sm text-white/80 hover:text-white focus-visible:outline-white";

export function Footer() {
  return (
    <footer className="bg-foreground text-white">
      <div className="container-page grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-1">
          <p className="font-display text-2xl">{siteConfig.name}</p>
          <p className="mt-3 text-sm leading-6 text-white/80">
            Akkordeon, Gesang und Humor für deine Feier – live mit Hannes Ducke
            aus Berlin.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold tracking-wide uppercase">
            Seiten
          </p>
          <ul className="mt-3 space-y-2">
            {navigationLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={linkClasses}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold tracking-wide uppercase">
            Kontakt
          </p>
          <ul className="mt-3 space-y-2">
            <li>
              <a href={contactLinks.phone} className={linkClasses}>
                {siteConfig.contactPhone}
              </a>
            </li>
            <li>
              <a href={contactLinks.email} className={linkClasses}>
                {siteConfig.contactEmail}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold tracking-wide uppercase">
            Rechtliches
          </p>
          <ul className="mt-3 space-y-2">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={linkClasses}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="container-page py-4 text-sm text-white/70">
          © {new Date().getFullYear()} {siteConfig.name}
        </div>
      </div>
    </footer>
  );
}
