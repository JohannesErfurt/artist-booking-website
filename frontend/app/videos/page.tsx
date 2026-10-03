import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
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
        <div className="grid gap-8">
          {videoEmbeds.map((video) => (
            <Card key={video.id} className="overflow-hidden p-0">
              <div className="aspect-video w-full">
                <iframe
                  src={`https://www.youtube.com/embed/${video.youtubeId}`}
                  title={video.title}
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold">{video.title}</h3>
                <p className="text-muted mt-3 text-sm leading-7">
                  {video.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </PageLayout>
  );
}
