import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { MotionReveal } from "@/components/motion/MotionReveal";
import { Card } from "@/components/ui/Card";

const bullets = [
  "Modern sterilization workflow with patient-first safety.",
  "Clear explanations and transparent treatment plans.",
  "Comfort-focused dentistry with gentle pacing.",
  "State-of-the-art equipment and evidence-based treatment protocols.",
] as const;

export function About() {
  return (
    <section id="about" className="py-14 sm:py-16">
      <Container className="grid gap-10 md:grid-cols-2 md:items-center">
        <MotionReveal>
          <div className="grid gap-6">
            <SectionHeading
              eyebrow="About the clinic"
              title="A calm, premium experience—designed like a product"
              description="BrightSmile blends clinical excellence with a startup-grade patient journey: simple booking, clean communication, and confidence at every step."
            />

            <div className="grid gap-3">
              {bullets.map((b) => (
                <div
                  key={b}
                  className="flex items-start gap-3 rounded-2xl border border-[var(--color-border)] bg-white/70 p-4 text-sm text-[color:var(--color-muted)]"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-[var(--color-primary)]" />
                  <span>{b}</span>
                </div>
              ))}
            </div>
          </div>
        </MotionReveal>

        <MotionReveal delay={0.05}>
          <Card className="overflow-hidden">
            <div className="bg-gradient-to-br from-[rgba(30,58,138,0.10)] via-white to-[rgba(15,118,110,0.12)] p-6 sm:p-7">
              <div className="overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white">
                <Image
                  src="/images/about-clinic.svg"
                  alt="Clinic story illustration"
                  width={900}
                  height={700}
                  className="h-auto w-full"
                />
              </div>

              <div className="mt-5 grid gap-3">
                <div className="rounded-2xl border border-[var(--color-border)] bg-white p-4">
                  <div className="text-sm font-semibold tracking-tight">
                    Mission
                  </div>
                  <p className="mt-1 text-sm leading-7 text-[color:var(--color-muted)]">
                    Deliver safe, modern dentistry with clarity and comfort—so
                    every patient leaves with confidence.
                  </p>
                </div>
                <div className="rounded-2xl border border-[var(--color-border)] bg-white p-4">
                  <div className="text-sm font-semibold tracking-tight">
                    Philosophy
                  </div>
                  <p className="mt-1 text-sm leading-7 text-[color:var(--color-muted)]">
                    We don’t rush. We explain. We treat gently. We measure
                    outcomes. Great care should feel effortless.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </MotionReveal>
      </Container>
    </section>
  );
}

