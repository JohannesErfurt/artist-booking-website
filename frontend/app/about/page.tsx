import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { artistBio, siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Über Hannes",
  description: `Wer hinter ${siteConfig.name} steckt: Schauspieler und Musiker Hannes Ducke.`,
};

export default function AboutPage() {
  return (
    <PageLayout>
      <Section
        eyebrow="Über Hannes"
        title={`Wer ist ${siteConfig.name}?`}
        description="Schauspieler, Musiker, Unterhalter – und immer mit der Quetsche unterwegs."
      >
        <div className="grid gap-6">
          <Card>
            <h3 className="text-xl font-semibold">Der Mann mit der Quetsche</h3>
            <p className="text-muted mt-4 leading-8">{artistBio.fullBio}</p>
          </Card>
          <Card>
            <h3 className="text-xl font-semibold">Bühnenerfahrung</h3>
            <p className="text-muted mt-4 leading-8">{artistBio.experience}</p>
          </Card>
          <Card>
            <h3 className="text-xl font-semibold">Bekannt aus</h3>
            <p className="text-muted mt-4 leading-8">
              {artistBio.achievements}
            </p>
          </Card>
        </div>
      </Section>
    </PageLayout>
  );
}
