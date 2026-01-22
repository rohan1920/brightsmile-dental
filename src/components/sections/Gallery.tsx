import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { MotionReveal } from "@/components/motion/MotionReveal";
import { GalleryLightbox } from "@/components/widgets/GalleryLightbox";

export function Gallery() {
  return (
    <section id="gallery" className="py-14 sm:py-16">
      <Container className="grid gap-8">
        <MotionReveal>
          <SectionHeading
            eyebrow="Gallery"
            title="Before & after transformations"
            description="Explore real patient results from our treatments. Tap any case to view detailed transformations."
          />
        </MotionReveal>
        <MotionReveal delay={0.05}>
          <GalleryLightbox />
        </MotionReveal>
      </Container>
    </section>
  );
}

