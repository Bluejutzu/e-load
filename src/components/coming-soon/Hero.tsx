"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowUpRight, Zap } from "lucide-react";

import { Wordmark } from "@/components/Wordmark";

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
    <section id="top" className="relative isolate overflow-hidden">
      {/* background */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-pattern opacity-70" />
        <div className="absolute -left-40 -top-40 size-[34rem] rounded-full bg-brand-blue/15 blur-3xl" />
        <div className="absolute -right-32 top-32 size-[30rem] rounded-full bg-brand-green/20 blur-3xl animate-float" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background" />
      </div>

      {/* In-flow brand header. FloatingBrand watches this and docks an
          identical wordmark to the top-left once it scrolls out of view. */}
      <header className="mx-auto w-full max-w-6xl px-6 pt-6 sm:pt-8">
        <span id="hero-brand" className="inline-block">
          <Wordmark className="text-2xl" />
        </span>
      </header>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto flex max-w-4xl flex-col items-center px-6 pb-24 pt-16 text-center sm:pt-24"
      >
        <motion.h1
          variants={item}
          className="text-balance text-5xl text-brand-blue-ink sm:text-6xl md:text-7xl"
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
