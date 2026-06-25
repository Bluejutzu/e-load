import type { Metadata } from "next";

import { LegalShell, LegalCard } from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum der Advantis Group GmbH – Anbieter von e-load me.",
};

export default function ImprintPage() {
  return (
    <LegalShell title="Impressum">
      <LegalCard title="Angaben gemäß § 5 TMG">
        <p className="font-semibold text-brand-blue-ink">Advantis Group GmbH</p>
        <p>[Straße &amp; Hausnummer]</p>
        <p>[PLZ Ort]</p>
        <p>Deutschland</p>
      </LegalCard>

      <LegalCard title="Kontakt">
        <p>
          <span className="font-semibold text-brand-blue-ink">E-Mail:</span>{" "}
          [folgt]
        </p>
        <p>
          <span className="font-semibold text-brand-blue-ink">Telefon:</span>{" "}
          [folgt]
        </p>
      </LegalCard>

      <LegalCard title="Umsatzsteuer-ID">
        <p>Umsatzsteuer-ID gemäß § 27 a Umsatzsteuergesetz: [folgt]</p>
      </LegalCard>

      <LegalCard title="Registereintrag">
        <p>Eintragung im Handelsregister.</p>
        <p>
          <span className="font-semibold text-brand-blue-ink">
            Registergericht:
          </span>{" "}
          Amtsgericht Nürnberg
        </p>
        <p>
          <span className="font-semibold text-brand-blue-ink">
            Registernummer:
          </span>{" "}
          HRB 46148
        </p>
      </LegalCard>

      <LegalCard title="Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV">
        <p>Andrea Reichl</p>
        <p>Advantis Group GmbH</p>
        <p>[Straße &amp; Hausnummer], [PLZ Ort]</p>
      </LegalCard>
    </LegalShell>
  );
}
