import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy placeholder for the artist booking website.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPage() {
  return (
    <PageLayout>
      <Section
        eyebrow="Legal"
        title="Privacy Policy"
        description="Placeholder privacy policy. Final legal text and GDPR review require human approval before production launch."
      >
        <Card className="text-muted space-y-4 text-sm leading-7">
          <p>
            <strong className="text-foreground">TODO:</strong> Replace with
            final privacy policy requirements and data processing details.
          </p>
          <p>
            <strong className="text-foreground">TODO:</strong> Document booking
            form data handling, retention, and third-party processors such as
            Supabase, Resend, and Cloudflare Turnstile.
          </p>
          <p>
            <strong className="text-foreground">TODO:</strong> Add contact
            details for privacy-related requests after legal review.
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
