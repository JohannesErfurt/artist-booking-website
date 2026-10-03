import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import { Section } from "@/components/layout/Section";
import { BookingForm } from "@/components/forms/BookingForm";
import { Card } from "@/components/ui/Card";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Kontakt",
  description: `Kontakt und Buchungsanfragen für ${siteConfig.name}.`,
};

export default function ContactPage() {
  return (
    <PageLayout>
      <Section
        eyebrow="Kontakt"
        title="Deine Feier – mein Termin"
        description="Erzähl mir kurz von deiner Feier. Bitte fülle alle Felder aus."
      >
        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <Card>
            <h3 className="text-xl font-semibold">Direkter Kontakt</h3>
            <dl className="mt-6 space-y-4 text-sm">
              <div>
                <dt className="text-foreground font-medium">E-Mail</dt>
                <dd className="text-muted mt-1">
                  <a
                    href={`mailto:${siteConfig.contactEmail}`}
                    className="hover:text-foreground underline"
                  >
                    {siteConfig.contactEmail}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-foreground font-medium">Handy</dt>
                <dd className="text-muted mt-1">
                  <a
                    href={`tel:${siteConfig.contactPhone.replace(/\s/g, "")}`}
                    className="hover:text-foreground underline"
                  >
                    {siteConfig.contactPhone}
                  </a>
                </dd>
              </div>
            </dl>
            <p className="text-muted mt-6 text-sm">
              Du kannst mich direkt anrufen, mir schreiben oder das Formular
              nutzen.
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
