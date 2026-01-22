import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { MotionReveal } from "@/components/motion/MotionReveal";
import { GalleryLightbox } from "@/components/widgets/GalleryLightbox";

export function Gallery() {
  return (
    <section id="gallery" className="bg-white py-20 sm:py-24">
      <Container className="grid gap-8">
        <MotionReveal>
          <SectionHeading
            eyebrow="Gallery"
            title="Our clinic"
            description="Take a look at our modern facilities, treatment rooms, and equipment designed for your comfort and care."
          />
        </MotionReveal>
        <MotionReveal delay={0.05}>
          <GalleryLightbox />
        </MotionReveal>
      </Container>
    </section>
  );
}

