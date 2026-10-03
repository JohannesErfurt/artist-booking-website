import Image from "next/image";
import { CallToAction } from "@/components/layout/CallToAction";
import { Hero } from "@/components/layout/Hero";
import { PageLayout } from "@/components/layout/PageLayout";
import { Section } from "@/components/layout/Section";
import { LiteYouTube } from "@/components/media/LiteYouTube";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import {
  artistBio,
  bookingSteps,
  contactLinks,
  galleryImages,
  services,
  siteConfig,
  testimonials,
  videoEmbeds,
} from "@/content/site";

export default function HomePage() {
  const heroImage = galleryImages[0];
  const flyerImage = galleryImages[1];
  const featuredVideo = videoEmbeds[0];

  return (
    <PageLayout>
      <Hero
        eyebrow="Akkordeon · Gesang · Humor"
        headline={siteConfig.headline}
        intro={siteConfig.shortIntro}
        ctaLabel={siteConfig.bookingCta}
        ctaHref="/contact"
        phoneLabel={siteConfig.contactPhone}
        phoneHref={contactLinks.phone}
        imageSrc={heroImage.src}
        imageAlt={heroImage.alt}
      />

      <Section
        eyebrow="Angebot"
        title="Musik und Humor für jeden Anlass"
        description="Akkordeon, Gesang und gute Laune – live und ganz nah am Publikum."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <Card key={service.id}>
              <span
                className="bg-brand-50 flex h-14 w-14 items-center justify-center rounded-full text-3xl"
                aria-hidden="true"
              >
                {service.icon}
              </span>
              <h3 className="mt-5 text-xl font-semibold">{service.title}</h3>
              <p className="text-muted mt-3 leading-7">{service.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        className="bg-surface-muted"
        eyebrow="Reinhören"
        title="So klingt der Quetschen-Hannes"
        description="Mach dir selbst ein Bild – oder besser: ein Ohr."
      >
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <LiteYouTube
              youtubeId={featuredVideo.youtubeId}
              title={featuredVideo.title}
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold">{featuredVideo.title}</h3>
            <p className="text-muted mt-3 text-lg leading-8">
              {featuredVideo.description}
            </p>
            <Button href="/videos" variant="secondary" className="mt-6">
              Alle Videos ansehen
            </Button>
          </div>
        </div>
      </Section>

      <Section eyebrow="So einfach geht’s" title="In drei Schritten zur Musik">
        <ol className="grid gap-6 md:grid-cols-3">
          {bookingSteps.map((step, index) => (
            <li key={step.id} className="flex gap-4">
              <span
                className="font-display bg-brand-600 flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-2xl text-white"
                aria-hidden="true"
              >
                {index + 1}
              </span>
              <div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="text-muted mt-2 leading-7">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section
        className="bg-surface-muted"
        eyebrow="Über Hannes"
        title="Der Mann mit der Quetsche"
      >
        <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:items-center">
          <div className="mx-auto w-full max-w-sm">
            <div className="-rotate-2 overflow-hidden rounded-lg shadow-xl">
              <Image
                src={flyerImage.src}
                alt={flyerImage.alt}
                width={flyerImage.width}
                height={flyerImage.height}
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="h-auto w-full"
              />
            </div>
          </div>
          <div>
            <p className="text-muted text-lg leading-8">{artistBio.fullBio}</p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Button href="/about">Mehr über Hannes</Button>
              <Button href="/gallery" variant="secondary">
                Zur Galerie
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {testimonials.length > 0 ? (
        <Section eyebrow="Stimmen" title="Das sagen Gäste und Veranstalter">
          <div className="grid gap-6 md:grid-cols-2">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id}>
                <p className="text-foreground text-base leading-7">
                  „{testimonial.quote}“
                </p>
                <p className="mt-4 text-sm font-semibold">
                  {testimonial.attribution}
                </p>
                <p className="text-muted text-sm">{testimonial.role}</p>
              </Card>
            ))}
          </div>
        </Section>
      ) : null}

      <CallToAction />
    </PageLayout>
  );
}
