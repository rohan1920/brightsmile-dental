"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 20 });

  return (
    <motion.div
      aria-hidden="true"
      className="fixed left-0 top-0 z-50 h-[3px] w-full origin-left bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-primary-2)] to-[var(--color-primary)]"
      style={{ scaleX }}
    />
  );
}

