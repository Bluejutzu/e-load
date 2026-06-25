# E-Load — Coming Soon

A lightweight, dependency-free "coming soon" landing page for **E-Load**, an
instant prepaid load, mobile data, and e-wallet top-up service.

## Features

- ⚡ **Zero build step** — plain HTML, CSS, and vanilla JS. Open `index.html`
  or serve the folder and it just works.
- ⏳ **Launch countdown** — counts down to a launch date that is persisted in
  `localStorage` so it stays stable across visits.
- ✉️ **Notify-me form** — client-side email validation with success/error
  feedback. Addresses are stored locally until a real backend is wired in
  (see [Connecting a backend](#connecting-a-backend)).
- 📱 **Responsive & accessible** — fluid type, mobile layout, reduced-motion
  support, and screen-reader-friendly markup.

## Project structure

```
.
├── index.html      # Markup
├── styles.css      # Styles (CSS custom properties for theming)
├── script.js       # Countdown + notify form logic
├── assets/
│   ├── logo.svg    # Brand logo
│   └── favicon.svg # Favicon
└── README.md
```

## Running locally

No tooling required. Either open `index.html` directly, or serve the folder:

```bash
# Python 3
python3 -m http.server 8080

# or Node
npx serve .
```

Then visit <http://localhost:8080>.

## Customising

- **Colors / theme** — edit the CSS custom properties in `:root` at the top of
  `styles.css`.
- **Launch date** — by default the countdown targets 30 days from a visitor's
  first visit (`DEFAULT_OFFSET_MS` in `script.js`). To pin a fixed date,
  replace `getLaunchTarget()` with a hard-coded timestamp, e.g.
  `var launchTarget = new Date("2026-08-01T00:00:00Z").getTime();`.
- **Copy & links** — update the headline, feature cards, and footer social
  links in `index.html`.

## Connecting a backend

The notify form currently stores submitted emails in `localStorage` as a
placeholder. To capture signups for real, replace the storage block inside the
`form.addEventListener("submit", ...)` handler in `script.js` with a `fetch`
call to your endpoint or a service (Mailchimp, ConvertKit, Formspree, etc.):

```js
await fetch("/api/subscribe", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ email: value }),
});
```

## Deploying

Because it is fully static, the site deploys anywhere — GitHub Pages, Netlify,
Vercel, Cloudflare Pages, or any static host. Point the host at the repository
root and you're live.
