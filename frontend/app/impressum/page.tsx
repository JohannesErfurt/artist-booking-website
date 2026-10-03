import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import { Section } from "@/components/layout/Section";
import { LegalText } from "@/components/legal/LegalText";
import { LegalValue } from "@/components/legal/LegalValue";
import { legalInfo } from "@/content/legal";
import { contactLinks, siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Impressum",
  description: `Impressum und Anbieterkennzeichnung von ${siteConfig.name}.`,
};

function Address() {
  return (
    <p>
      {legalInfo.responsibleName}
      <br />
      {legalInfo.stageName}
      <br />
      <LegalValue value={legalInfo.street} />
      <br />
      <LegalValue value={legalInfo.postalCodeAndCity} />
      <br />
      {legalInfo.country}
    </p>
  );
}

export default function ImpressumPage() {
  return (
    <PageLayout>
      <Section eyebrow="Rechtliches" title="Impressum">
        <LegalText>
          <h3>Angaben gemäß § 5 DDG</h3>
          <Address />

          <h3>Kontakt</h3>
          <p>
            Telefon: <a href={contactLinks.phone}>{siteConfig.contactPhone}</a>
            <br />
            E-Mail: <a href={contactLinks.email}>{siteConfig.contactEmail}</a>
          </p>

          {legalInfo.vatId ? (
            <>
              <h3>Umsatzsteuer-ID</h3>
              <p>
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a
                Umsatzsteuergesetz: <LegalValue value={legalInfo.vatId} />
              </p>
            </>
          ) : null}

          <h3>Verbraucherstreitbeilegung</h3>
          <p>
            Ich bin nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
            vor einer Verbraucherschlichtungsstelle teilzunehmen.
          </p>

          <h3>Haftung für Links</h3>
          <p>
            Diese Website enthält Links zu externen Websites Dritter, auf deren
            Inhalte ich keinen Einfluss habe. Für die Inhalte der verlinkten
            Seiten ist stets der jeweilige Anbieter verantwortlich. Sollten mir
            Rechtsverletzungen bekannt werden, entferne ich die betreffenden
            Links umgehend.
          </p>
        </LegalText>
      </Section>
    </PageLayout>
  );
}
