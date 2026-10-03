import type { ReactNode } from "react";

type LegalTextProps = {
  children: ReactNode;
};

// Typography wrapper for long legal texts (Impressum, privacy policy).
export function LegalText({ children }: LegalTextProps) {
  return (
    <div className="text-muted [&_a]:text-brand-700 [&_h3]:text-foreground max-w-3xl space-y-4 leading-7 [&_a]:underline [&_h3]:mt-10 [&_h3]:text-xl [&_h3]:font-semibold [&_h4]:mt-6 [&_h4]:font-semibold [&_li]:ml-5 [&_ul]:list-disc [&_ul]:space-y-1">
      {children}
    </div>
  );
}
