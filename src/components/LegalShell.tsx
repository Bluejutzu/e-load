import { type ReactNode } from "react";

import Link from "next/link";

import { ArrowLeft } from "lucide-react";

import { SiteFooter } from "@/components/SiteFooter";
import { Wordmark } from "@/components/Wordmark";
import { cn } from "@/lib/utils";

/**
 * Layout for the legal pages. There is no site-wide navigation header; this
 * keeps just the wordmark (home link) and a "back" affordance.
 */
export function LegalShell({
  title,
  intro,
  children,
}: {
  title: string;
  intro?: string;
  children: ReactNode;
}) {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <div className="mx-auto flex w-full max-w-3xl items-center justify-between px-6 pt-8">
        <Link href="/" aria-label="Zur Startseite">
          <Wordmark className="text-xl" />
        </Link>
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-brand-blue"
        >
          <ArrowLeft className="size-4" />
          Startseite
        </Link>
      </div>

      <div className="mx-auto w-full max-w-3xl flex-1 px-6 py-12">
        <header className="mb-10">
          <h1 className="text-4xl text-brand-blue-ink sm:text-5xl">{title}</h1>
          {intro ? (
            <p className="mt-4 text-muted-foreground">{intro}</p>
          ) : null}
          <div className="mt-6 h-1 w-20 rounded-full brand-sweep" />
        </header>

        <div className="space-y-6">{children}</div>
      </div>

      <SiteFooter />
    </main>
  );
}

export function LegalCard({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
      <h2 className="text-xl font-bold text-brand-blue-ink">{title}</h2>
      <div className="mt-4 space-y-3 leading-relaxed text-muted-foreground">
        {children}
      </div>
    </section>
  );
}

const contactLink =
  "font-medium text-brand-blue underline-offset-4 transition-colors hover:text-brand-blue-deep hover:underline";

/** `mailto:` link for an e-mail address. */
export function MailLink({ email }: { email: string }) {
  return (
    <a href={`mailto:${email}`} className={contactLink}>
      {email}
    </a>
  );
}

/**
 * `tel:` link. `display` is the human-readable number; `dial` is the E.164
 * value used in the href (e.g. "+4991137753859").
 */
export function TelLink({ display, dial }: { display: string; dial: string }) {
  return (
    <a href={`tel:${dial}`} className={contactLink}>
      {display}
    </a>
  );
}

/**
 * Postal address rendered in a semantic `<address>` and linked to a map
 * search so it can be opened in the visitor's maps app.
 */
export function PostalAddress({
  lines,
  className,
}: {
  lines: string[];
  className?: string;
}) {
  const query = encodeURIComponent(lines.join(", "));
  return (
    <address className={cn("not-italic", className)}>
      <a
        href={`https://www.google.com/maps/search/?api=1&query=${query}`}
        target="_blank"
        rel="noopener noreferrer"
        className={contactLink}
      >
        {lines.map((line, i) => (
          <span key={i} className="block">
            {line}
          </span>
        ))}
      </a>
    </address>
  );
}
