"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, brand } from "@/lib/brand";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";

export function Navbar() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    function onResize() {
      if (window.innerWidth >= 768) setOpen(false);
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="sticky top-0 z-40">
      <div className="border-b border-[var(--color-border)] bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <Container className="flex h-16 items-center justify-between">
          <Link href="#top" className="group flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-2xl border border-[var(--color-border)] bg-white shadow-[var(--shadow-sm)]">
              <Image
                src="/images/logo.svg"
                alt={`${brand.name} logo`}
                width={22}
                height={22}
                priority
              />
            </div>
            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-tight">
                {brand.name}
              </div>
              <div className="text-xs text-[color:var(--color-muted-2)]">
                {brand.tagline}
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-7 md:flex">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-[color:var(--color-muted)] hover:text-[color:var(--color-foreground)]"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Button
              variant="secondary"
              onClick={() =>
                document
                  .querySelector("#appointment")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Book a Visit
            </Button>
            <Button
              onClick={() =>
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Contact
            </Button>
          </div>

          <button
            className="md:hidden grid h-11 w-11 place-items-center rounded-full border border-[var(--color-border)] bg-white/80"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </Container>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="border-b border-[var(--color-border)] bg-white/90 backdrop-blur md:hidden"
          >
            <Container className="py-4">
              <div className="grid gap-2">
                {navLinks.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    className={cn(
                      "rounded-xl px-3 py-3 text-sm font-medium",
                      "hover:bg-[var(--color-surface)]",
                    )}
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </a>
                ))}
              </div>
              <div className="mt-4 grid gap-2">
                <Button
                  variant="secondary"
                  className="w-full"
                  onClick={() => {
                    setOpen(false);
                    document
                      .querySelector("#appointment")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Book a Visit
                </Button>
                <Button
                  className="w-full"
                  onClick={() => {
                    setOpen(false);
                    document
                      .querySelector("#contact")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Contact
                </Button>
              </div>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

