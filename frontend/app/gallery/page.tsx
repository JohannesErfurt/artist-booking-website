import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import { Section } from "@/components/layout/Section";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { galleryImages, siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Gallery",
  description: `Photo gallery for ${siteConfig.name}.`,
};

export default function GalleryPage() {
  return (
    <PageLayout>
      <Section
        eyebrow="Gallery"
        title="Performance and studio moments"
        description="Placeholder images are used until final media assets and rights confirmation are provided."
      >
        <GalleryGrid images={galleryImages} />
      </Section>
    </PageLayout>
  );
}
