import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { MotionReveal } from "@/components/motion/MotionReveal";
import { TestimonialsSlider } from "@/components/widgets/TestimonialsSlider";

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-[var(--color-surface)] py-20 sm:py-24">
      <Container className="grid gap-8">
        <MotionReveal>
          <SectionHeading
            eyebrow="Testimonials"
            title="What our patients say"
            description="Real experiences from people who trust us with their smiles."
          />
        </MotionReveal>
        <MotionReveal delay={0.05}>
          <TestimonialsSlider />
        </MotionReveal>
      </Container>
    </section>
  );
}

