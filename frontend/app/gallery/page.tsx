import type { Metadata } from "next";
import { CallToAction } from "@/components/layout/CallToAction";
import { PageLayout } from "@/components/layout/PageLayout";
import { Section } from "@/components/layout/Section";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { galleryImages, siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Galerie",
  description: `Bilder von ${siteConfig.name}.`,
};

export default function GalleryPage() {
  return (
    <PageLayout>
      <Section
        eyebrow="Galerie"
        title="Bilder vom Quetschen-Hannes"
        description="Zum Vergrößern einfach auf ein Bild klicken."
      >
        <GalleryGrid images={galleryImages} />
      </Section>

      <CallToAction />
    </PageLayout>
  );
}
