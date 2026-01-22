import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { MotionReveal } from "@/components/motion/MotionReveal";
import { StatsCounters } from "@/components/widgets/StatsCounters";

export function StatsHighlights() {
  return (
    <section className="py-14 sm:py-16">
      <Container className="grid gap-8">
        <MotionReveal>
          <SectionHeading
            eyebrow="Proof & highlights"
            title="Built on trust, measured in outcomes"
            description="Our commitment to excellence is reflected in the trust our patients place in us every day."
          />
        </MotionReveal>
        <MotionReveal delay={0.05}>
          <StatsCounters />
        </MotionReveal>
      </Container>
    </section>
  );
}

