import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { PhoneIcon } from "@/components/ui/Icons";

type HeroProps = {
  eyebrow: string;
  headline: string;
  intro: string;
  ctaLabel: string;
  ctaHref: string;
  phoneLabel: string;
  phoneHref: string;
  imageSrc: string;
  imageAlt: string;
};

export function Hero({
  eyebrow,
  headline,
  intro,
  ctaLabel,
  ctaHref,
  phoneLabel,
  phoneHref,
  imageSrc,
  imageAlt,
}: HeroProps) {
  return (
    <section className="bg-brand-600 overflow-hidden">
      <div className="container-page grid gap-12 py-14 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:py-20">
        <div>
          <p className="text-sm font-semibold tracking-widest text-white/90 uppercase">
            {eyebrow}
          </p>
          <h1 className="mt-4 text-5xl leading-[1.05] text-balance sm:text-6xl lg:text-7xl">
            {headline}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-white">{intro}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href={ctaHref} variant="dark" size="lg">
              {ctaLabel}
            </Button>
            <Button href={phoneHref} variant="secondary" size="lg">
              <PhoneIcon />
              {phoneLabel}
            </Button>
          </div>
        </div>
        <div className="mx-auto w-full max-w-md lg:max-w-none">
          <div className="rotate-2 rounded-sm bg-white p-3 pb-12 shadow-2xl sm:p-4 sm:pb-14">
            <div className="relative aspect-square overflow-hidden">
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
        </div>
      </div>
    </section>
  );
}
