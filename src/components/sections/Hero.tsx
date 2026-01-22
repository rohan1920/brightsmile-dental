"use client";

import Image from "next/image";
import { ArrowRight, CalendarDays, ShieldCheck } from "lucide-react";
import { brand, trustBadges } from "@/lib/brand";
import { Container } from "@/components/layout/Container";
import { MotionReveal } from "@/components/motion/MotionReveal";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

export function Hero() {
  return (
    <section className="grain relative overflow-hidden">
      <Container className="grid gap-10 py-14 sm:py-18 md:grid-cols-[1.15fr_0.85fr] md:items-center md:py-20">
        <div className="grid gap-6">
          <MotionReveal>
            <div className="flex flex-wrap gap-2">
              <Badge>
                <ShieldCheck className="h-4 w-4 text-[var(--color-primary)]" />
                Certified, safe care
              </Badge>
              <Badge>
                <span className="h-4 w-4 rounded-full bg-[var(--color-primary-2)]/25 ring-1 ring-[var(--color-border)]" />
                Trusted by thousands
              </Badge>
            </div>
          </MotionReveal>

          <MotionReveal delay={0.05}>
            <h1 className="text-3xl font-semibold tracking-tight text-[color:var(--color-foreground)] sm:text-5xl">
              {brand.name}
            </h1>
          </MotionReveal>

          <MotionReveal delay={0.1}>
            <p className="max-w-xl text-base leading-7 text-[color:var(--color-muted)] sm:text-lg">
              Modern dentistry designed like a startup product: clean processes,
              transparent treatment plans, and a calm clinic experience built
              around trust.
            </p>
          </MotionReveal>

          <MotionReveal delay={0.15}>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                size="lg"
                onClick={() =>
                  document
                    .querySelector("#appointment")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Book an Appointment <CalendarDays className="h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="secondary"
                onClick={() =>
                  document
                    .querySelector("#services")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Explore Services <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </MotionReveal>

          <MotionReveal delay={0.2}>
            <div className="mt-2 flex flex-wrap gap-2">
              {trustBadges.map((b) => (
                <Badge key={b.label}>
                  <b.icon className="h-4 w-4 text-[var(--color-primary)]" />
                  {b.label}
                </Badge>
              ))}
            </div>
          </MotionReveal>
        </div>

        <MotionReveal delay={0.05}>
          <Card className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[rgba(30,58,138,0.10)] via-white to-[rgba(15,118,110,0.12)]" />
            <div className="relative p-6 sm:p-7">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="text-sm font-semibold tracking-tight">
                    {brand.tagline}
                  </div>
                  <div className="text-sm text-[color:var(--color-muted)]">
                    Premium care, calm experience.
                  </div>
                </div>
                <div className="grid h-11 w-11 place-items-center rounded-2xl border border-[var(--color-border)] bg-white shadow-[var(--shadow-sm)]">
                  <Image
                    src="/images/logo.svg"
                    alt="Clinic logo"
                    width={22}
                    height={22}
                  />
                </div>
              </div>

              <div className="mt-6 overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white">
                <Image
                  src="/images/hero-dental.svg"
                  alt="Dental clinic hero"
                  width={900}
                  height={700}
                  priority
                  className="h-auto w-full"
                />
              </div>

              <div className="mt-5 grid gap-2">
                <div className="flex items-center justify-between rounded-2xl border border-[var(--color-border)] bg-white px-4 py-3 text-sm">
                  <span className="font-medium">Next available</span>
                  <span className="text-[color:var(--color-muted)]">
                    Today • 5:30 PM
                  </span>
                </div>
                <div className="flex items-center justify-between rounded-2xl border border-[var(--color-border)] bg-white px-4 py-3 text-sm">
                  <span className="font-medium">Avg. wait time</span>
                  <span className="text-[color:var(--color-muted)]">~ 8 min</span>
                </div>
              </div>
            </div>
          </Card>
        </MotionReveal>
      </Container>
    </section>
  );
}

