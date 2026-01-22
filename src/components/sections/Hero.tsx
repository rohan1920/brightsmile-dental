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
    <section className="relative overflow-hidden bg-white">
      <Container className="grid gap-16 py-20 sm:py-24 md:grid-cols-[1.1fr_0.9fr] md:items-center md:py-32 lg:gap-20">
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
            <h1 className="text-4xl font-semibold tracking-tight text-[color:var(--color-foreground)] sm:text-6xl lg:text-7xl">
              Modern Dental Care,<br />Designed Around You.
            </h1>
          </MotionReveal>

          <MotionReveal delay={0.1}>
            <p className="max-w-2xl text-lg leading-8 text-[color:var(--color-muted)] sm:text-xl">
              Premium, pain-free dental care with transparent pricing and a calm clinic experience.
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
                Book an Appointment
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
                Explore Services
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
          <div className="relative">
            {/* Hero Image - using placeholder that looks like real photo */}
            <div className="relative overflow-hidden rounded-3xl bg-[var(--color-surface)]">
              <Image
                src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=1200&h=800&fit=crop&q=80"
                alt="Modern dental clinic interior with smiling patient"
                width={1200}
                height={800}
                priority
                className="h-auto w-full object-cover"
              />
              {/* Floating availability card */}
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/20 bg-white/95 backdrop-blur-sm p-4 shadow-[var(--shadow)]">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs font-medium text-[color:var(--color-muted)]">Next available</div>
                    <div className="mt-0.5 text-sm font-semibold">Today • 5:30 PM</div>
                  </div>
                  <div className="h-px w-4 bg-[var(--color-border)]" />
                  <div>
                    <div className="text-xs font-medium text-[color:var(--color-muted)]">Avg. wait time</div>
                    <div className="mt-0.5 text-sm font-semibold">~ 8 min</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MotionReveal>
      </Container>
    </section>
  );
}

