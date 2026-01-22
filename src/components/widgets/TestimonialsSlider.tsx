"use client";

import * as React from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { BadgeCheck, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { testimonials } from "@/lib/brand";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

function Stars({ n }: { n: number }) {
  return (
    <div className="flex items-center gap-1" aria-label={`${n} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={
            "h-4 w-4 " +
            (i < n ? "fill-[#f5b301] text-[#f5b301]" : "text-black/15")
          }
        />
      ))}
    </div>
  );
}

export function TestimonialsSlider() {
  const [ready, setReady] = React.useState(false);
  const [idx, setIdx] = React.useState(0);
  const t = testimonials[idx]!;

  function prev() {
    setIdx((i) => (i - 1 + testimonials.length) % testimonials.length);
  }
  React.useEffect(() => {
    const warm = window.setTimeout(() => setReady(true), 450);
    const id = window.setInterval(() => {
      setIdx((i) => (i + 1) % testimonials.length);
    }, 6500);
    return () => {
      window.clearTimeout(warm);
      window.clearInterval(id);
    };
  }, []);

  function next() {
    setIdx((i) => (i + 1) % testimonials.length);
  }

  return (
    <Card className="overflow-hidden">
      <div className="flex items-center justify-between gap-3 border-b border-[var(--color-border)] bg-white/70 px-6 py-5">
        <div className="text-sm font-semibold tracking-tight">
          What patients say
        </div>
        <div className="flex items-center gap-2">
          <Button
            type="button"
            variant="secondary"
            size="sm"
            onClick={prev}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            type="button"
            variant="secondary"
            size="sm"
            onClick={next}
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="p-6 sm:p-7">
        {!ready ? (
          <div className="grid gap-4 animate-pulse">
            <div className="flex items-center gap-3">
              <div className="h-11 w-11 rounded-full bg-black/10" />
              <div className="grid gap-2">
                <div className="h-3 w-40 rounded-full bg-black/10" />
                <div className="h-3 w-28 rounded-full bg-black/10" />
              </div>
            </div>
            <div className="h-3 w-full rounded-full bg-black/10" />
            <div className="h-3 w-11/12 rounded-full bg-black/10" />
            <div className="h-3 w-10/12 rounded-full bg-black/10" />
          </div>
        ) : (
          <AnimatePresence mode="wait">
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
            className="grid gap-4"
          >
            <div className="flex items-center gap-3">
              <div className="overflow-hidden rounded-full border border-[var(--color-border)] bg-white">
                <Image
                  src={t.avatar}
                  alt={`${t.name} avatar`}
                  width={44}
                  height={44}
                  className="rounded-full"
                />
              </div>
              <div className="leading-tight">
                <div className="flex items-center gap-2 text-sm font-semibold">
                  {t.name}
                  {t.verified ? (
                    <span className="inline-flex items-center gap-1 rounded-full bg-[var(--color-surface)] px-2 py-1 text-xs font-medium text-[color:var(--color-muted)]">
                      <BadgeCheck className="h-4 w-4 text-[var(--color-primary)]" />
                      Verified
                    </span>
                  ) : null}
                </div>
                <div className="mt-1">
                  <Stars n={t.rating} />
                </div>
              </div>
            </div>

            <p className="text-sm leading-7 text-[color:var(--color-muted)] sm:text-base">
              “{t.text}”
            </p>

            <div className="flex items-center justify-end text-xs text-[color:var(--color-muted-2)]">
              <span>
                {idx + 1} / {testimonials.length}
              </span>
            </div>
          </motion.div>
          </AnimatePresence>
        )}
      </div>
    </Card>
  );
}

