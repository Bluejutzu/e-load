import Image from "next/image";

import { Home, MapPin, Briefcase } from "lucide-react";

import { Reveal } from "@/components/Reveal";

const scenarios = [
  { icon: MapPin, label: "On the Road" },
  { icon: Briefcase, label: "At Work" },
  { icon: Home, label: "At Home" },
];

const shots = [
  {
    src: "/images/auto-zuhause.svg",
    alt: "Elektroauto lädt zuhause an der Wallbox",
    title: "Zuhause",
    copy: "Über Nacht voll – die Wallbox in der eigenen Einfahrt ist immer dabei.",
  },
  {
    src: "/images/ladekarte.svg",
    alt: "e-load me B2B Ladekarte",
    title: "Eine Karte",
    copy: "Eine Ladekarte für die ganze Flotte – transparent abgerechnet, zum Bestpreis.",
  },
  {
    src: "/images/auto-saeule.svg",
    alt: "Transporter lädt unterwegs an der Ladesäule",
    title: "Unterwegs",
    copy: "Bis zu eine Million Ladepunkte in ganz Europa – einfach anstecken und los.",
  },
];

export function Showcase() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-20">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl text-brand-blue-ink sm:text-4xl">
          Laden, wo deine Flotte unterwegs ist
        </h2>
        <p className="mt-4 text-muted-foreground">
          On the road, am Arbeitsplatz oder zu Hause – mit einer Karte, einem
          Tarif und einem Netz, das mitwächst.
        </p>

        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          {scenarios.map(({ icon: Icon, label }) => (
            <span
              key={label}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-brand-blue-ink shadow-sm"
            >
              <Icon className="size-4 text-brand-green-deep" />
              {label}
            </span>
          ))}
        </div>
      </Reveal>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {shots.map((shot, i) => (
          <Reveal key={shot.title} delay={i * 0.08} direction="up">
            <figure className="group h-full overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-shadow hover:shadow-xl hover:shadow-brand-blue/10">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  fill
                  unoptimized
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>
              <figcaption className="space-y-2 p-6">
                <h3 className="text-xl font-bold text-brand-blue-ink">
                  {shot.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {shot.copy}
                </p>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
