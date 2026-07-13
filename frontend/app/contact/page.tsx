import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import { Section } from "@/components/layout/Section";
import { BookingForm } from "@/components/forms/BookingForm";
import { Card } from "@/components/ui/Card";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact and booking requests for ${siteConfig.name}.`,
};

export default function ContactPage() {
  return (
    <PageLayout>
      <Section
        eyebrow="Contact"
        title="Request a booking"
        description="Share your event details below. All fields marked required must be completed."
      >
        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <Card>
            <h3 className="text-xl font-semibold">Contact information</h3>
            <dl className="mt-6 space-y-4 text-sm">
              <div>
                <dt className="text-foreground font-medium">Email</dt>
                <dd className="text-muted mt-1">{siteConfig.contactEmail}</dd>
              </div>
              <div>
                <dt className="text-foreground font-medium">Phone</dt>
                <dd className="text-muted mt-1">{siteConfig.contactPhone}</dd>
              </div>
            </dl>
            <p className="text-muted mt-6 text-sm">
              TODO: replace placeholder contact details with final public
              contact information.
            </p>
          </Card>

          <Card>
            <BookingForm />
          </Card>
        </div>
      </Section>
    </PageLayout>
  );
}
