import Image from "next/image";
import { PageLayout } from "@/components/layout/PageLayout";
import { Hero } from "@/components/layout/Hero";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import {
  galleryImages,
  services,
  siteConfig,
  testimonials,
} from "@/content/site";

export default function HomePage() {
  const featuredImage = galleryImages[0];

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
        eyebrow="Services"
        title="Available for live performances and creative collaborations"
        description="TODO: replace service overview with final artist offerings."
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
        eyebrow="Featured"
        title="Placeholder media spotlight"
        description="TODO: replace with final featured image and caption."
      >
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="border-border relative aspect-[4/3] overflow-hidden rounded-3xl border">
            <Image
              src={featuredImage.src}
              alt={featuredImage.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-brand-600 text-sm font-semibold uppercase">
              Placeholder content
            </p>
            <p className="text-muted mt-4 text-lg leading-8">
              {featuredImage.caption}
            </p>
            <Button href="/gallery" className="mt-6">
              View Gallery
            </Button>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Testimonials"
        title="What clients say"
        description="Placeholder testimonials are clearly labeled until final quotes are approved."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id}>
              <p className="text-foreground text-base leading-7">
                “{testimonial.quote}”
              </p>
              <p className="mt-4 text-sm font-semibold">
                {testimonial.attribution}
              </p>
              <p className="text-muted text-sm">{testimonial.role}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        className="bg-brand-600 text-white"
        title="Ready to book?"
        description="Share your event details and the artist will follow up."
      >
        <Button href="/contact" variant="secondary" size="lg">
          {siteConfig.bookingCta}
        </Button>
      </Section>
    </PageLayout>
  );
}
