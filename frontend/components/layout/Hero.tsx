import Image from "next/image";
import { Button } from "@/components/ui/Button";

type HeroProps = {
  headline: string;
  intro: string;
  ctaLabel: string;
  ctaHref: string;
  imageSrc: string;
  imageAlt: string;
};

export function Hero({
  headline,
  intro,
  ctaLabel,
  ctaHref,
  imageSrc,
  imageAlt,
}: HeroProps) {
  return (
    <section className="border-border bg-surface-muted border-b">
      <div className="container-page grid gap-10 py-16 lg:grid-cols-2 lg:items-center lg:py-24">
        <div>
          <p className="text-brand-600 text-sm font-semibold tracking-wide uppercase">
            Actor & Musician
          </p>
          <h1 className="mt-3 text-4xl font-semibold text-balance sm:text-5xl">
            {headline}
          </h1>
          <p className="text-muted mt-6 text-lg leading-8">{intro}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href={ctaHref} size="lg">
              {ctaLabel}
            </Button>
            <Button href="/about" variant="secondary" size="lg">
              Learn More
            </Button>
          </div>
        </div>
        <div className="border-border relative aspect-[4/3] overflow-hidden rounded-3xl border bg-white shadow-sm">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
