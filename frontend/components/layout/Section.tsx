import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
  className?: string;
};

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className = "",
}: SectionProps) {
  return (
    <section id={id} className={`py-16 sm:py-20 ${className}`}>
      <div className="container-page">
        <div className="max-w-2xl">
          {eyebrow ? (
            <p className="text-brand-700 text-sm font-semibold tracking-widest uppercase">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="mt-2 text-4xl text-balance sm:text-5xl">{title}</h2>
          {description ? (
            <p className="text-muted mt-4 text-lg">{description}</p>
          ) : null}
        </div>
        {children ? <div className="mt-10">{children}</div> : null}
      </div>
    </section>
  );
}
