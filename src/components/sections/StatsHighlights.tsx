import { BadgeCheck, ShieldCheck } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { MotionReveal } from "@/components/motion/MotionReveal";
import { StatsCounters } from "@/components/widgets/StatsCounters";
import { Card } from "@/components/ui/Card";

export function StatsHighlights() {
  return (
    <section className="bg-[var(--color-surface)] py-20 sm:py-24">
      <Container className="grid gap-12">
        <MotionReveal>
          <SectionHeading
            eyebrow="Trust & Proof"
            title="Built on trust, measured in outcomes"
            description="Our commitment to excellence is reflected in the trust our patients place in us every day."
          />
        </MotionReveal>
        <MotionReveal delay={0.05}>
          <StatsCounters />
        </MotionReveal>
        
        {/* Certifications */}
        <MotionReveal delay={0.1}>
          <div className="grid gap-4 sm:grid-cols-2">
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-[var(--color-primary)]/10">
                  <ShieldCheck className="h-6 w-6 text-[var(--color-primary)]" />
                </div>
                <div>
                  <div className="text-base font-semibold">ISO Certified</div>
                  <div className="mt-1 text-sm text-[color:var(--color-muted)]">
                    International standards for quality and safety
                  </div>
                </div>
              </div>
            </Card>
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-[var(--color-primary-2)]/10">
                  <BadgeCheck className="h-6 w-6 text-[var(--color-primary-2)]" />
                </div>
                <div>
                  <div className="text-base font-semibold">Sterile & Safe Care</div>
                  <div className="mt-1 text-sm text-[color:var(--color-muted)]">
                    Advanced sterilization protocols for your peace of mind
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </MotionReveal>
      </Container>
    </section>
  );
}

