import Link from "next/link";
import { legalLinks, siteConfig } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-border bg-surface-muted border-t">
      <div className="container-page grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <p className="text-lg font-semibold">{siteConfig.name}</p>
          <p className="text-muted mt-3 text-sm">
            TODO: replace with final footer summary once artist content is
            provided.
          </p>
        </div>

        <div>
          <p className="text-foreground text-sm font-semibold tracking-wide uppercase">
            Contact
          </p>
          <p className="text-muted mt-3 text-sm">{siteConfig.contactEmail}</p>
          <p className="text-muted mt-1 text-sm">{siteConfig.contactPhone}</p>
        </div>

        <div>
          <p className="text-foreground text-sm font-semibold tracking-wide uppercase">
            Legal
          </p>
          <ul className="mt-3 space-y-2">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-muted hover:text-foreground text-sm"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-border border-t">
        <div className="container-page text-muted py-4 text-sm">
          © {new Date().getFullYear()} {siteConfig.name}. Placeholder content —
          final legal and artist details require human review.
        </div>
      </div>
    </footer>
  );
}
