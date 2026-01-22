"use client";

import { Mail, MapPin, Phone, Share2 } from "lucide-react";
import { contact } from "@/lib/brand";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { MotionReveal } from "@/components/motion/MotionReveal";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export function Contact() {
  return (
    <section id="contact" className="bg-white py-20 sm:py-24">
      <Container className="grid gap-8">
        <MotionReveal>
          <SectionHeading
            eyebrow="Contact"
            title="Talk to us — fast, clear, and friendly"
            description="Get in touch with our team. We're here to help with any questions about your dental care needs."
          />
        </MotionReveal>

        <div className="grid gap-4 md:grid-cols-[1fr_1.1fr]">
          <MotionReveal delay={0.05}>
            <Card className="p-6 sm:p-7">
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <div className="flex items-center gap-2 text-sm font-semibold">
                    <MapPin className="h-4 w-4 text-[var(--color-primary)]" />
                    Address
                  </div>
                  <div className="text-sm text-[color:var(--color-muted)]">
                    {contact.address}
                  </div>
                </div>

                <div className="grid gap-2">
                  <div className="flex items-center gap-2 text-sm font-semibold">
                    <Phone className="h-4 w-4 text-[var(--color-primary)]" />
                    Phone
                  </div>
                  <div className="text-sm text-[color:var(--color-muted)]">
                    {contact.phone}
                  </div>
                </div>

                <div className="grid gap-2">
                  <div className="flex items-center gap-2 text-sm font-semibold">
                    <Mail className="h-4 w-4 text-[var(--color-primary)]" />
                    Email
                  </div>
                  <div className="text-sm text-[color:var(--color-muted)]">
                    {contact.email}
                  </div>
                </div>

                <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4 text-sm text-[color:var(--color-muted)]">
                  <div className="font-semibold text-[color:var(--color-foreground)]">
                    Hours
                  </div>
                  <div className="mt-1">{contact.hours}</div>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button
                    onClick={() =>
                      document
                        .querySelector("#appointment")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    Book Appointment
                  </Button>
                  <Button variant="secondary">
                    Share <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </MotionReveal>

          <MotionReveal delay={0.08}>
            <Card className="overflow-hidden">
              <div className="border-b border-[var(--color-border)] bg-white/70 px-6 py-5">
                <div className="text-sm font-semibold tracking-tight">
                  Location
                </div>
                <div className="text-xs text-[color:var(--color-muted)]">
                  Visit us at our clinic
                </div>
              </div>
              <div className="relative grid place-items-center bg-[var(--color-surface)] p-10">
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(rgba(15,23,42,0.04)_1px,transparent_1px)] bg-[size:26px_26px]" />
                <div className="relative grid gap-3 text-center">
                  <div className="mx-auto grid h-12 w-12 place-items-center rounded-2xl border border-[var(--color-border)] bg-white shadow-[var(--shadow-sm)]">
                    <MapPin className="h-6 w-6 text-[var(--color-primary)]" />
                  </div>
                  <div className="text-sm font-semibold tracking-tight">
                    {contact.address}
                  </div>
                  <div className="text-sm text-[color:var(--color-muted)]">
                    Easy parking • Wheelchair accessible
                  </div>
                </div>
              </div>
            </Card>
          </MotionReveal>
        </div>
      </Container>
    </section>
  );
}

