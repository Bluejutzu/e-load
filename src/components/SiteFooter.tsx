import Link from "next/link";

import { ArrowUpRight } from "lucide-react";

import { Wordmark } from "@/components/Wordmark";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-brand-blue-ink text-white/70">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-green/60 to-transparent"
      />
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="space-y-4">
          <Wordmark tone="light" className="text-2xl" />
          <p className="max-w-xs text-sm leading-relaxed text-white/55">
            Ladekarten für B2B-Flotten mit bis zu einer Million Ladestationen
            in ganz Europa. Demnächst verfügbar.
          </p>
        </div>

        <nav className="space-y-3 text-sm">
          <p className="font-semibold uppercase tracking-wider text-white/40">
            Rechtliches
          </p>
          <Link href="/imprint" className="block transition-colors hover:text-white">
            Impressum
          </Link>
          <Link href="/privacy" className="block transition-colors hover:text-white">
            Datenschutz
          </Link>
        </nav>

        <div className="space-y-3 text-sm">
          <p className="font-semibold uppercase tracking-wider text-white/40">
            Unternehmen
          </p>
          <a
            href="https://advantisgroup.de"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1 transition-colors hover:text-white"
          >
            advantisgroup.de
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <p className="text-white/55">
            Ein Angebot der{" "}
            <span className="font-semibold text-white/80">
              Advantis GmbH
            </span>
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-5 text-xs text-white/45 sm:flex-row">
          <p>© {year} Advantis GmbH. Alle Rechte vorbehalten.</p>
          <p>
            Betrieben und im Eigentum der{" "}
            <a
              href="https://advantisgroup.de"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-white/70 underline-offset-4 hover:text-white hover:underline"
            >
              Advantis GmbH
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
