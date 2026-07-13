import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Legal notice placeholder for the artist booking website.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function ImpressumPage() {
  return (
    <PageLayout>
      <Section
        eyebrow="Legal"
        title="Impressum"
        description="Placeholder legal notice. Final Impressum text requires human legal review before production launch."
      >
        <Card className="text-muted space-y-4 text-sm leading-7">
          <p>
            <strong className="text-foreground">TODO:</strong> Replace with
            final legal business name.
          </p>
          <p>
            <strong className="text-foreground">TODO:</strong> Replace with
            responsible person for Impressum.
          </p>
          <p>
            <strong className="text-foreground">TODO:</strong> Replace with
            legal address.
          </p>
          <p>
            <strong className="text-foreground">TODO:</strong> Replace with VAT
            ID or business registration details, if applicable.
          </p>
          <p>
            This page is a clearly labeled placeholder and must be reviewed and
            approved by the site owner before publication.
          </p>
        </Card>
      </Section>
    </PageLayout>
  );
}
