import Image from "next/image";
import { services } from "@/lib/brand";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { MotionReveal } from "@/components/motion/MotionReveal";
import { Card } from "@/components/ui/Card";

export function Services() {
  return (
    <section id="services" className="bg-white py-20 sm:py-24">
      <Container className="grid gap-8">
        <MotionReveal>
          <SectionHeading
            eyebrow="Services"
            title="Treatments crafted for comfort and clarity"
            description="Comprehensive dental care services designed to meet all your oral health needs with precision and care."
          />
        </MotionReveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, idx) => (
            <MotionReveal key={s.title} delay={idx * 0.03}>
              <Card className="group overflow-hidden transition hover:shadow-[var(--shadow)]">
                {/* Service Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[var(--color-surface)]">
                  <Image
                    src={s.image || `https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800&h=600&fit=crop&q=80&sig=${idx}`}
                    alt={s.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
                
                {/* Service Content */}
                <div className="p-6">
                  <div className="mb-3 grid h-10 w-10 place-items-center rounded-xl bg-[var(--color-surface)]">
                    <s.icon className="h-5 w-5 text-[var(--color-primary)]" />
                  </div>
                  <div className="text-lg font-semibold tracking-tight">
                    {s.title}
                  </div>
                  <p className="mt-2 text-sm leading-6 text-[color:var(--color-muted)]">
                    {s.description}
                  </p>
                </div>
              </Card>
            </MotionReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

