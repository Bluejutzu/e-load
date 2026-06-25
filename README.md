# e-load me — Coming Soon

A minimal "demnächst verfügbar" landing site for **e-load me**, the B2B EV
charging card by Advantis Group GmbH.

## Pages

- `/` — animated hero + three-image showcase
- `/imprint` — Impressum (Advantis Group GmbH)
- `/privacy` — Datenschutzerklärung (DSGVO)

There is no global navigation header by design.

## Stack

- Next.js 16 (App Router) · React 19 · TypeScript
- Tailwind CSS v4 (theme defined in `src/app/global.css`)
- framer-motion for animation (respects `prefers-reduced-motion`)

## Develop

```bash
npm install   # or bun install
npm run dev    # http://localhost:3000
npm run build
```

## Notes before going live

- **Showcase images** live in `public/images/` as on-brand SVG placeholders
  (`auto-zuhause.svg`, `ladekarte.svg`, `auto-saeule.svg`). Replace them with
  the final photography — keep the filenames, or update the paths in
  `src/components/coming-soon/Showcase.tsx`.
- **Imprint / privacy** contain `[folgt]` / `[Straße & Hausnummer]`
  placeholders for the street address, e-mail, phone and USt-ID. Fill these in
  before publishing.

The site states it is operated by and owned by Advantis Group and links to
[advantisgroup.de](https://advantisgroup.de).
