import type { ReactNode } from "react";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

type PageLayoutProps = {
  children: ReactNode;
};

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#inhalt"
        className="bg-foreground sr-only z-50 rounded-full px-4 py-2 text-sm font-semibold text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Zum Inhalt springen
      </a>
      <Navbar />
      <main id="inhalt" className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
