import Image from "next/image";
import { PageLayout } from "@/components/layout/PageLayout";
import { Hero } from "@/components/layout/Hero";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import {
  artistBio,
  galleryImages,
  services,
  siteConfig,
  testimonials,
} from "@/content/site";

export default function HomePage() {
  const featuredImage = galleryImages[0];
  const flyerImage = galleryImages[1];

  return (
    <PageLayout>
      <Hero
        headline={siteConfig.headline}
        intro={siteConfig.shortIntro}
        ctaLabel={siteConfig.bookingCta}
        ctaHref="/contact"
        imageSrc={featuredImage.src}
        imageAlt={featuredImage.alt}
      />

      <Section
        eyebrow="Angebot"
        title="Musik und Humor für jeden Anlass"
        description="Akkordeon, Gesang und gute Laune – live und ganz nah am Publikum."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <Card key={service.id}>
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="text-muted mt-3 text-sm leading-7">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Eindrücke"
        title="So sieht gute Laune aus"
        description="Ein erster Eindruck vom Quetschen-Hannes – mehr gibt es in der Galerie und in den Videos."
      >
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="border-border relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden rounded-3xl border">
            <Image
              src={flyerImage.src}
              alt={flyerImage.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-muted text-lg leading-8">{artistBio.fullBio}</p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Button href="/gallery">Zur Galerie</Button>
              <Button href="/videos" variant="secondary">
                Videos ansehen
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

      <Section
        className="bg-brand-600 text-white"
        title="Lust auf Musik bei deiner Feier?"
        description="Schick mir die Eckdaten zu deiner Veranstaltung – ich melde mich bei dir."
      >
        <Button href="/contact" variant="secondary" size="lg">
          {siteConfig.bookingCta}
        </Button>
      </Section>
    </PageLayout>
  );
}
