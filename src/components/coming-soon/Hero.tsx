"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowUpRight, Home, MapPin, Briefcase, Zap } from "lucide-react";

import { Wordmark } from "@/components/Wordmark";

const scenarios = [
  { icon: MapPin, label: "On the Road" },
  { icon: Briefcase, label: "At Work" },
  { icon: Home, label: "At Home" },
];

export function Hero() {
  const reduce = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.09 } },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 22 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="relative isolate overflow-hidden">
      {/* background */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-pattern opacity-70" />
        <div className="absolute -left-40 -top-40 size-[34rem] rounded-full bg-brand-blue/15 blur-3xl" />
        <div className="absolute -right-32 top-32 size-[30rem] rounded-full bg-brand-green/20 blur-3xl animate-float" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto flex max-w-5xl flex-col items-center px-6 pb-20 pt-16 text-center sm:pt-24"
      >
        <motion.div variants={item}>
          <Wordmark className="text-3xl sm:text-4xl" />
        </motion.div>

        <motion.div
          variants={item}
          className="mt-10 inline-flex items-center gap-2 rounded-full border border-brand-blue/20 bg-white px-4 py-1.5 text-sm font-semibold text-brand-blue shadow-sm"
        >
          <span className="relative flex size-2.5">
            <span className="absolute inline-flex size-full rounded-full bg-brand-green opacity-75 [animation:pulse-ring_2.4s_ease-out_infinite]" />
            <span className="relative inline-flex size-2.5 rounded-full bg-brand-green-deep" />
          </span>
          Demnächst verfügbar
        </motion.div>

        <motion.h1
          variants={item}
          className="mt-7 text-balance text-5xl text-brand-blue-ink sm:text-6xl md:text-7xl"
        >
          Guten Tag!
          <span className="mt-2 block gradient-text">
            Bald lädt deine Flotte smarter.
          </span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-7 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl"
        >
          Nur noch ein wenig Geduld, dann gibt es unter{" "}
          <span className="font-semibold text-brand-blue-ink">e&#8209;load.me</span>{" "}
          Ladekarten B2B mit bis zu einer Million Ladestationen in ganz Europa.
          Mit uns lädt deine Flotte zum Bestpreis – egal ob on the road, Work
          oder Home.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          {scenarios.map(({ icon: Icon, label }) => (
            <span
              key={label}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-brand-blue-ink shadow-sm"
            >
              <Icon className="size-4 text-brand-green-deep" />
              {label}
            </span>
          ))}
        </motion.div>

        <motion.div
          variants={item}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <a
            href="https://advantisgroup.de"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-brand-blue px-7 py-3.5 font-semibold text-white shadow-lg shadow-brand-blue/25 transition-all hover:bg-brand-blue-deep hover:shadow-brand-blue/40"
          >
            Advantis Group entdecken
            <ArrowUpRight className="size-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <span className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground">
            <Zap className="size-4 text-brand-green-deep" />
            Bis zu 1.000.000 Ladestationen · ganz Europa
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}
