"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Modal({
  open,
  onClose,
  title,
  children,
  className,
}: {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  className?: string;
}) {
  React.useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (open) document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-50 grid place-items-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          aria-modal="true"
          role="dialog"
        >
          <button
            className="absolute inset-0 bg-black/40"
            onClick={onClose}
            aria-label="Close modal"
          />
          <motion.div
            initial={{ y: 16, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 10, opacity: 0, scale: 0.99 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
            className={cn(
              "relative w-full max-w-lg overflow-hidden rounded-3xl border border-[var(--color-border)]",
              "bg-white shadow-[var(--shadow)]",
              className,
            )}
          >
            <div className="flex items-start justify-between gap-6 border-b border-[var(--color-border)] px-6 py-5">
              <div className="grid gap-1">
                {title ? (
                  <h3 className="text-base font-semibold tracking-tight">
                    {title}
                  </h3>
                ) : null}
                <p className="text-sm text-[color:var(--color-muted)]">
                  Your request has been received.
                </p>
              </div>
              <button
                onClick={onClose}
                className="grid h-10 w-10 place-items-center rounded-full border border-[var(--color-border)] bg-white hover:bg-[var(--color-surface)]"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="px-6 py-6">{children}</div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

