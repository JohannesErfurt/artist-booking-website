import type { Metadata } from "next";
import { CallToAction } from "@/components/layout/CallToAction";
import { PageLayout } from "@/components/layout/PageLayout";
import { Section } from "@/components/layout/Section";
import { LiteYouTube } from "@/components/media/LiteYouTube";
import { siteConfig, videoEmbeds } from "@/content/site";

export const metadata: Metadata = {
  title: "Videos",
  description: `Videos von Auftritten von ${siteConfig.name}.`,
};

export default function VideosPage() {
  return (
    <PageLayout>
      <Section
        eyebrow="Videos"
        title="Quetschen-Hannes in Aktion"
        description="So klingt es, wenn Hannes zur Quetsche greift."
      >
        <div className="grid gap-8 lg:grid-cols-2">
          {videoEmbeds.map((video) => (
            <article
              key={video.id}
              className="border-border overflow-hidden rounded-2xl border bg-white shadow-sm"
            >
              <LiteYouTube youtubeId={video.youtubeId} title={video.title} />
              <div className="p-6">
                <h3 className="text-xl font-semibold">{video.title}</h3>
                <p className="text-muted mt-3 leading-7">{video.description}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <CallToAction />
    </PageLayout>
  );
}
