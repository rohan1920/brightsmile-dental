import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { MotionReveal } from "@/components/motion/MotionReveal";
import { TestimonialsSlider } from "@/components/widgets/TestimonialsSlider";

export function Testimonials() {
  return (
    <section id="testimonials" className="py-14 sm:py-16">
      <Container className="grid gap-8">
        <MotionReveal>
          <SectionHeading
            eyebrow="Testimonials"
            title="Realistic reviews that build instant confidence"
            description="A polished slider with avatars, verified badges, star ratings, and smooth transitions."
          />
        </MotionReveal>
        <MotionReveal delay={0.05}>
          <TestimonialsSlider />
        </MotionReveal>
      </Container>
    </section>
  );
}

