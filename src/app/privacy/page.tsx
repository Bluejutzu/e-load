import type { Metadata } from "next";

import { LegalShell, LegalCard } from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "Datenschutz",
  description:
    "Datenschutzerklärung der Advantis Group GmbH für e-load me gemäß DSGVO.",
};

export default function PrivacyPage() {
  return (
    <LegalShell
      title="Datenschutzerklärung"
      intro="Informationen zur Verarbeitung Ihrer Daten gemäß DSGVO."
    >
      <LegalCard title="Datenschutz auf einen Blick">
        <p>
          Die folgenden Hinweise geben einen einfachen Überblick darüber, was
          mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website
          besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
          persönlich identifiziert werden können.
        </p>
      </LegalCard>

      <LegalCard title="Allgemeine Hinweise">
        <p>
          Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen
          Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten
          vertraulich und entsprechend der gesetzlichen
          Datenschutzbestimmungen sowie dieser Datenschutzerklärung.
        </p>
        <p>
          Wenn Sie diese Website benutzen, werden verschiedene personenbezogene
          Daten erhoben. Diese Datenschutzerklärung erläutert, welche Daten wir
          erheben und wofür wir sie nutzen.
        </p>
      </LegalCard>

      <LegalCard title="Verantwortliche Stelle">
        <p>Verantwortlich für die Datenverarbeitung auf dieser Website ist:</p>
        <div className="mt-2 rounded-xl bg-muted p-5">
          <p className="font-semibold text-brand-blue-ink">
            Advantis Group GmbH
          </p>
          <p>Andrea Reichl</p>
          <p>[Straße &amp; Hausnummer], [PLZ Ort]</p>
          <p className="mt-2">E-Mail: [folgt]</p>
        </div>
      </LegalCard>

      <LegalCard title="Datenerfassung">
        <h3 className="font-semibold text-brand-blue-ink">
          Welche Daten erfassen wir?
        </h3>
        <p>
          Beim Besuch dieser Website speichert der Server automatisch
          Informationen, die Ihr Browser übermittelt. Dies sind:
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>IP-Adresse</li>
          <li>Browsertyp und Browserversion</li>
          <li>Verwendetes Betriebssystem</li>
          <li>Datum und Uhrzeit des Zugriffs</li>
          <li>
            Websites, von denen das System des Nutzers auf unsere Website
            gelangt
          </li>
        </ul>
        <p>
          Diese Daten werden ausschließlich zur Sicherstellung des Betriebs und
          zur Verbesserung des Angebots genutzt. Eine Zusammenführung mit
          anderen Datenquellen wird nicht vorgenommen.
        </p>
      </LegalCard>

      <LegalCard title="Kontaktaufnahme">
        <p>
          Wenn Sie uns per E-Mail Anfragen zukommen lassen, werden Ihre Angaben
          inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks
          Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns
          gespeichert.
        </p>
        <p>
          Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Die
          Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO,
          sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt
          oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist.
        </p>
      </LegalCard>

      <LegalCard title="Ihre Rechte">
        <p>
          Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre
          gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger
          und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung
          oder Löschung dieser Daten.
        </p>
        <p className="font-semibold text-brand-blue-ink">
          Ihre Rechte im Überblick:
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            <strong>Auskunftsrecht:</strong> Sie können Auskunft über Ihre
            gespeicherten Daten verlangen
          </li>
          <li>
            <strong>Berichtigungsrecht:</strong> Sie können die Berichtigung
            unrichtiger Daten verlangen
          </li>
          <li>
            <strong>Löschungsrecht:</strong> Sie können die Löschung Ihrer Daten
            verlangen
          </li>
          <li>
            <strong>Einschränkung der Verarbeitung:</strong> Sie können die
            Einschränkung der Verarbeitung verlangen
          </li>
          <li>
            <strong>Widerspruchsrecht:</strong> Sie können der Verarbeitung
            widersprechen
          </li>
          <li>
            <strong>Datenübertragbarkeit:</strong> Sie können Ihre Daten in
            einem strukturierten Format erhalten
          </li>
        </ul>
        <p>
          Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten
          können Sie sich jederzeit unter der im Impressum angegebenen Adresse
          an uns wenden.
        </p>
      </LegalCard>
    </LegalShell>
  );
}
