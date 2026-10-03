import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import { Section } from "@/components/layout/Section";
import { LegalText } from "@/components/legal/LegalText";
import { LegalValue } from "@/components/legal/LegalValue";
import { legalInfo } from "@/content/legal";
import { contactLinks, siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: `Datenschutzerklärung von ${siteConfig.name}: welche Daten diese Website verarbeitet und wofür.`,
};

// Each section describes what the site technically does. When a service is
// added, removed or reconfigured, this text has to change with it.
export default function PrivacyPage() {
  return (
    <PageLayout>
      <Section
        eyebrow="Rechtliches"
        title="Datenschutzerklärung"
        description="Welche Daten diese Website verarbeitet, wofür – und welche Rechte du hast."
      >
        <LegalText>
          <h3>1. Verantwortlicher</h3>
          <p>
            Verantwortlich für die Datenverarbeitung auf dieser Website im Sinne
            der Datenschutz-Grundverordnung (DSGVO) ist:
          </p>
          <p>
            {legalInfo.responsibleName} ({legalInfo.stageName})
            <br />
            <LegalValue value={legalInfo.street} />
            <br />
            <LegalValue value={legalInfo.postalCodeAndCity} />
            <br />
            Telefon: <a href={contactLinks.phone}>{siteConfig.contactPhone}</a>
            <br />
            E-Mail: <a href={contactLinks.email}>{siteConfig.contactEmail}</a>
          </p>

          <h3>2. Das Wichtigste in Kürze</h3>
          <ul>
            <li>
              Diese Website verwendet keine Cookies zu Analyse- oder
              Werbezwecken und kein Tracking.
            </li>
            <li>
              Personenbezogene Daten werden nur verarbeitet, wenn du die Website
              aufrufst (technisch notwendige Zugriffsdaten) oder eine
              Buchungsanfrage sendest.
            </li>
            <li>
              Videos werden erst von YouTube geladen, wenn du sie anklickst.
            </li>
          </ul>

          <h3>3. Hosting und Zugriffsdaten</h3>
          <p>
            Diese Website wird bei Vercel Inc. (USA) gehostet. Beim Aufruf der
            Website verarbeitet der Hoster automatisch Zugriffsdaten, die dein
            Browser übermittelt: IP-Adresse, Datum und Uhrzeit des Zugriffs,
            aufgerufene Seite, Browsertyp und Betriebssystem sowie die zuvor
            besuchte Seite.
          </p>
          <p>
            Die Verarbeitung ist erforderlich, um die Website auszuliefern und
            ihre Sicherheit und Stabilität zu gewährleisten. Rechtsgrundlage ist
            Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einem sicheren
            und funktionsfähigen Webauftritt).
          </p>

          <h3>4. Buchungsanfrage über das Kontaktformular</h3>
          <p>
            Wenn du das Formular absendest, verarbeite ich die von dir
            eingegebenen Daten: Name, E-Mail-Adresse, Telefonnummer, Datum, Ort
            und Anlass der Feier, Anzahl der Gäste und deine Nachricht.
          </p>
          <p>
            Die Daten werden ausschließlich verwendet, um deine Anfrage zu
            beantworten und einen möglichen Auftritt zu planen. Rechtsgrundlage
            ist Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen auf deine
            Anfrage hin).
          </p>
          <h4>Empfänger</h4>
          <ul>
            <li>
              <strong>Speicherung:</strong> Die Anfrage wird in einer Datenbank
              des Anbieters Supabase, Inc. gespeichert. Der Serverstandort ist
              Frankfurt am Main (EU).
            </li>
            <li>
              <strong>E-Mail-Benachrichtigung:</strong> Die Anfrage wird mir per
              E-Mail zugestellt. Der Versand erfolgt über den Dienst Resend
              (Resend, Inc., USA) aus einer Versandregion in der EU.
            </li>
          </ul>
          <h4>Speicherdauer</h4>
          <p>
            Anfragen werden gelöscht, sobald sie für die Bearbeitung nicht mehr
            erforderlich sind, spätestens {legalInfo.retentionPeriod} nach
            Abschluss der Anfrage. Kommt ein Auftritt zustande, gelten die
            gesetzlichen Aufbewahrungsfristen für Geschäftsunterlagen.
          </p>

          <h3>5. Spam-Schutz (Cloudflare Turnstile)</h3>
          <p>
            Zum Schutz des Formulars vor automatisierten Spam-Anfragen nutze ich
            den Dienst Turnstile der Cloudflare, Inc. (USA). Beim Aufruf der
            Kontaktseite wird dazu ein Skript von Cloudflare geladen. Cloudflare
            verarbeitet dabei unter anderem deine IP-Adresse sowie technische
            Informationen zu Browser und Gerät, um zu prüfen, ob die Anfrage von
            einem Menschen stammt.
          </p>
          <p>
            Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes
            Interesse am Schutz vor Missbrauch und Spam). Soweit dabei auf
            Informationen in deinem Endgerät zugegriffen wird, ist dies für den
            von dir gewünschten Dienst unbedingt erforderlich (§ 25 Abs. 2 Nr. 2
            TDDDG).
          </p>

          <h3>6. Videos (YouTube)</h3>
          <p>
            Auf dieser Website sind Videos eingebunden, die bei YouTube
            gespeichert sind (Google Ireland Limited, Gordon House, Barrow
            Street, Dublin 4, Irland). Zunächst wird nur ein Vorschaubild
            angezeigt, das von dieser Website selbst ausgeliefert wird. Dabei
            werden keine Daten an YouTube übertragen.
          </p>
          <p>
            Erst wenn du ein Video anklickst, wird es im erweiterten
            Datenschutzmodus von YouTube („youtube-nocookie.com“) geladen. Ab
            diesem Moment erhält YouTube unter anderem deine IP-Adresse und kann
            Informationen in deinem Browser speichern. Rechtsgrundlage ist deine
            Einwilligung durch das Anklicken (Art. 6 Abs. 1 lit. a DSGVO, § 25
            Abs. 1 TDDDG). Weitere Informationen findest du in der{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Datenschutzerklärung von Google
            </a>
            .
          </p>

          <h3>7. Schriftarten</h3>
          <p>
            Die verwendeten Schriftarten werden von dieser Website selbst
            ausgeliefert. Es wird keine Verbindung zu Servern von Google oder
            anderen Schriftanbietern aufgebaut.
          </p>

          <h3>8. Kontakt per E-Mail oder Telefon</h3>
          <p>
            Wenn du mich direkt per E-Mail oder Telefon kontaktierst, verarbeite
            ich deine Angaben, um dein Anliegen zu bearbeiten (Art. 6 Abs. 1
            lit. b bzw. lit. f DSGVO).
          </p>

          <h3>9. Übermittlung in Länder außerhalb der EU</h3>
          <p>
            Einige der genannten Dienstleister haben ihren Sitz in den USA.
            Soweit dabei personenbezogene Daten in die USA übermittelt werden,
            erfolgt dies auf Grundlage des Angemessenheitsbeschlusses der
            EU-Kommission zum EU-US Data Privacy Framework oder auf Grundlage
            von Standardvertragsklauseln der EU-Kommission.
          </p>

          <h3>10. Deine Rechte</h3>
          <p>Du hast das Recht,</p>
          <ul>
            <li>
              Auskunft über deine gespeicherten Daten zu erhalten (Art. 15
              DSGVO),
            </li>
            <li>unrichtige Daten berichtigen zu lassen (Art. 16 DSGVO),</li>
            <li>die Löschung deiner Daten zu verlangen (Art. 17 DSGVO),</li>
            <li>
              die Einschränkung der Verarbeitung zu verlangen (Art. 18 DSGVO),
            </li>
            <li>
              deine Daten in einem gängigen Format zu erhalten (Art. 20 DSGVO),
            </li>
            <li>
              der Verarbeitung auf Grundlage berechtigter Interessen zu
              widersprechen (Art. 21 DSGVO),
            </li>
            <li>
              eine erteilte Einwilligung jederzeit mit Wirkung für die Zukunft
              zu widerrufen (Art. 7 Abs. 3 DSGVO).
            </li>
          </ul>
          <p>
            Dazu genügt eine formlose Nachricht an die oben genannte
            E-Mail-Adresse. Außerdem hast du das Recht, dich bei einer
            Datenschutz-Aufsichtsbehörde zu beschweren (Art. 77 DSGVO), zum
            Beispiel bei der Behörde deines Wohnorts.
          </p>

          <h3>11. Stand</h3>
          <p>
            Stand dieser Datenschutzerklärung: {legalInfo.privacyPolicyDate}
          </p>
        </LegalText>
      </Section>
    </PageLayout>
  );
}
