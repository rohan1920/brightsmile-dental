"use client";

import * as React from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { gallery } from "@/lib/brand";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export function GalleryLightbox() {
  const [active, setActive] = React.useState<(typeof gallery)[number] | null>(
    null,
  );

  React.useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setActive(null);
    }
    if (active) document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [active]);

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {gallery.map((g) => (
          <Card
            key={g.id}
            className="group cursor-pointer overflow-hidden"
            onClick={() => setActive(g)}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[rgba(47,109,255,0.10)] via-transparent to-[rgba(63,182,217,0.12)]" />
              <div className="grid gap-2 p-4">
                <div className="text-sm font-semibold tracking-tight">
                  {g.title}
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="overflow-hidden rounded-xl border border-[var(--color-border)] bg-white">
                    <Image
                      src={g.before}
                      alt={`${g.title} before`}
                      width={420}
                      height={420}
                      className="h-auto w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                    />
                  </div>
                  <div className="overflow-hidden rounded-xl border border-[var(--color-border)] bg-white">
                    <Image
                      src={g.after}
                      alt={`${g.title} after`}
                      width={420}
                      height={420}
                      className="h-auto w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                    />
                  </div>
                </div>
                <div className="text-xs text-[color:var(--color-muted-2)]">
                  Tap to preview
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <AnimatePresence>
        {active ? (
          <motion.div
            className="fixed inset-0 z-50 grid place-items-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
          >
            <button
              className="absolute inset-0 bg-black/50"
              onClick={() => setActive(null)}
              aria-label="Close preview"
            />
            <motion.div
              initial={{ y: 18, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 10, opacity: 0, scale: 0.99 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className="relative w-full max-w-3xl overflow-hidden rounded-3xl border border-[var(--color-border)] bg-white shadow-[var(--shadow)]"
            >
              <div className="flex items-center justify-between gap-3 border-b border-[var(--color-border)] bg-white/80 px-6 py-5">
                <div className="text-sm font-semibold tracking-tight">
                  {active.title}
                </div>
                <Button
                  type="button"
                  variant="secondary"
                  size="sm"
                  onClick={() => setActive(null)}
                >
                  <X className="h-4 w-4" />
                  Close
                </Button>
              </div>

              <div className="grid gap-4 p-6 sm:grid-cols-2 sm:p-7">
                <div className="grid gap-2">
                  <div className="text-xs font-semibold text-[color:var(--color-muted)]">
                    View 1
                  </div>
                  <div className="overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white">
                    <Image
                      src={active.before}
                      alt={`${active.title} view 1`}
                      width={900}
                      height={900}
                      className="h-auto w-full object-cover"
                    />
                  </div>
                </div>
                <div className="grid gap-2">
                  <div className="text-xs font-semibold text-[color:var(--color-muted)]">
                    View 2
                  </div>
                  <div className="overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white">
                    <Image
                      src={active.after}
                      alt={`${active.title} view 2`}
                      width={900}
                      height={900}
                      className="h-auto w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

