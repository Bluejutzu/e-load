"use client";

import { useEffect, useState } from "react";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import { Wordmark } from "@/components/Wordmark";

/**
 * Docks the brand to the top-left corner once the hero wordmark scrolls out
 * of view, and animates it away again when the hero comes back. Watches the
 * element with id `hero-brand` via an IntersectionObserver, so it stays in
 * lock-step with the real hero lockup instead of a hard-coded scroll offset.
 */
export function FloatingBrand() {
  const reduce = useReducedMotion();
  const [docked, setDocked] = useState(false);

  useEffect(() => {
    const anchor = document.getElementById("hero-brand");
    if (!anchor) return;

    const observer = new IntersectionObserver(
      ([entry]) => setDocked(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(anchor);
    return () => observer.disconnect();
  }, []);

  return (
    <AnimatePresence>
      {docked ? (
        <motion.a
          href="#top"
          aria-label="Zum Seitenanfang"
          initial={reduce ? { opacity: 0 } : { opacity: 0, x: -24, y: -16 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={reduce ? { opacity: 0 } : { opacity: 0, x: -24, y: -16 }}
          transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          className="fixed left-4 top-4 z-50 inline-flex items-center rounded-full border border-border bg-white/85 px-4 py-2 shadow-lg shadow-brand-blue/10 backdrop-blur-md sm:left-6 sm:top-6"
        >
          <Wordmark className="text-lg" />
        </motion.a>
      ) : null}
    </AnimatePresence>
  );
}
