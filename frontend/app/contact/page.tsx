import type { Metadata } from "next";
import { BookingForm } from "@/components/forms/BookingForm";
import { PageLayout } from "@/components/layout/PageLayout";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { MailIcon, PhoneIcon } from "@/components/ui/Icons";
import { contactLinks, siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Kontakt",
  description: `Kontakt und Buchungsanfragen für ${siteConfig.name}.`,
};

const contactOptions = [
  {
    label: "Anrufen",
    value: siteConfig.contactPhone,
    href: contactLinks.phone,
    icon: PhoneIcon,
  },
  {
    label: "E-Mail schreiben",
    value: siteConfig.contactEmail,
    href: contactLinks.email,
    icon: MailIcon,
  },
];

export default function ContactPage() {
  return (
    <PageLayout>
      <Section
        eyebrow="Kontakt"
        title="Deine Feier – mein Termin"
        description="Erzähl mir kurz von deiner Feier – ich melde mich so schnell wie möglich bei dir."
      >
        <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:items-start">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Direkter Draht</h3>
            {contactOptions.map((option) => (
              <a
                key={option.href}
                href={option.href}
                className="group border-border hover:border-brand-300 hover:bg-brand-50 flex items-center gap-4 rounded-2xl border bg-white p-5 shadow-sm transition"
              >
                <span className="bg-brand-600 flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-white">
                  <option.icon className="h-6 w-6" />
                </span>
                <span className="min-w-0">
                  <span className="text-muted block text-sm">
                    {option.label}
                  </span>
                  <span className="text-foreground block text-lg font-semibold break-words">
                    {option.value}
                  </span>
                </span>
              </a>
            ))}
            <p className="text-muted text-sm leading-6">
              Am Telefon nicht erreicht? Dann nutze einfach das Formular – so
              geht keine Anfrage verloren.
            </p>
          </div>

          <Card className="sm:p-8">
            <h3 className="text-xl font-semibold">Anfrage senden</h3>
            <p className="text-muted mt-2 mb-6 text-sm">
              Bitte fülle alle Felder aus. Die Anfrage ist unverbindlich.
            </p>
            <BookingForm />
          </Card>
        </div>
      </Section>
    </PageLayout>
  );
}
