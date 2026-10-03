import type { Metadata } from "next";
import Image from "next/image";
import { CallToAction } from "@/components/layout/CallToAction";
import { PageLayout } from "@/components/layout/PageLayout";
import { Section } from "@/components/layout/Section";
import { artistBio, galleryImages, siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Über Hannes",
  description: `Wer hinter ${siteConfig.name} steckt: Schauspieler und Musiker Hannes Ducke.`,
};

const chapters = [
  { title: "Der Mann mit der Quetsche", text: artistBio.fullBio },
  { title: "Bühnenerfahrung", text: artistBio.experience },
  { title: "Bekannt aus", text: artistBio.achievements },
];

export default function AboutPage() {
  const portrait = galleryImages[0];

  return (
    <PageLayout>
      <Section
        eyebrow="Über Hannes"
        title={`Wer ist ${siteConfig.name}?`}
        description="Schauspieler, Musiker, Unterhalter – und immer mit der Quetsche unterwegs."
      >
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div className="mx-auto w-full max-w-sm lg:sticky lg:top-24 lg:self-start">
            <div className="border-border overflow-hidden rounded-2xl border shadow-lg">
              <Image
                src={portrait.src}
                alt={portrait.alt}
                width={portrait.width}
                height={portrait.height}
                sizes="(max-width: 420px) 100vw, 384px"
                className="h-auto w-full"
              />
            </div>
          </div>
          <div className="space-y-10">
            {chapters.map((chapter) => (
              <div key={chapter.title}>
                <h3 className="text-2xl font-semibold">{chapter.title}</h3>
                <p className="text-muted mt-3 text-lg leading-8">
                  {chapter.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <CallToAction />
    </PageLayout>
  );
}
