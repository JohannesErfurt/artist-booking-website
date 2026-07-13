import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { artistBio, siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description: `Learn more about ${siteConfig.name}.`,
};

export default function AboutPage() {
  return (
    <PageLayout>
      <Section
        eyebrow="About"
        title={`About ${siteConfig.name}`}
        description="Placeholder biography and career highlights until final artist content is provided."
      >
        <div className="grid gap-6">
          <Card>
            <h3 className="text-xl font-semibold">Biography</h3>
            <p className="text-muted mt-4 leading-8">{artistBio.fullBio}</p>
          </Card>
          <Card>
            <h3 className="text-xl font-semibold">Experience & References</h3>
            <p className="text-muted mt-4 leading-8">{artistBio.experience}</p>
          </Card>
          <Card>
            <h3 className="text-xl font-semibold">Achievements</h3>
            <p className="text-muted mt-4 leading-8">
              {artistBio.achievements}
            </p>
          </Card>
        </div>
      </Section>
    </PageLayout>
  );
}
