import React from "react";

import type { Metadata, Viewport } from "next";
import { Outfit, Manrope } from "next/font/google";

import "./global.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://e-load.me"),
  title: {
    default: "e-load me — Demnächst verfügbar",
    template: "%s | e-load me",
  },
  description:
    "Bald gibt es unter e-load.me Ladekarten für B2B mit bis zu einer Million Ladestationen in ganz Europa. Deine Flotte lädt zum Bestpreis – on the road, at work und zu Hause.",
  keywords: [
    "e-load me",
    "Ladekarte",
    "B2B",
    "Flotte",
    "EV Charging",
    "Ladestationen",
    "Europa",
    "Elektromobilität",
    "Advantis Group",
  ],
  authors: [{ name: "Advantis Group GmbH" }],
  creator: "Advantis Group GmbH",
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://e-load.me",
    siteName: "e-load me",
    title: "e-load me — Demnächst verfügbar",
    description:
      "Ladekarten für B2B mit bis zu einer Million Ladestationen in ganz Europa. Deine Flotte lädt zum Bestpreis.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#1b34c4",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className={`${manrope.variable} ${outfit.variable}`}>
        {children}
      </body>
    </html>
  );
}
