import { services } from "@/lib/brand";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { MotionReveal } from "@/components/motion/MotionReveal";
import { Card } from "@/components/ui/Card";

export function Services() {
  return (
    <section id="services" className="py-14 sm:py-16">
      <Container className="grid gap-8">
        <MotionReveal>
          <SectionHeading
            eyebrow="Services"
            title="Treatments crafted for comfort and clarity"
            description="Comprehensive dental care services designed to meet all your oral health needs with precision and care."
          />
        </MotionReveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, idx) => (
            <MotionReveal key={s.title} delay={idx * 0.03}>
              <Card className="group p-6 transition hover:-translate-y-1 hover:shadow-[var(--shadow)]">
                <div className="grid h-12 w-12 place-items-center rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]">
                  <s.icon className="h-6 w-6 text-[var(--color-primary)]" />
                </div>
                <div className="mt-4 text-base font-semibold tracking-tight">
                  {s.title}
                </div>
                <p className="mt-2 text-sm leading-7 text-[color:var(--color-muted)]">
                  {s.description}
                </p>

                <div className="mt-4 h-px w-full bg-[var(--color-border)]" />
                <div className="mt-4 text-sm font-medium text-[color:var(--color-primary)]">
                  Learn more <span className="transition group-hover:translate-x-0.5 inline-block">→</span>
                </div>
              </Card>
            </MotionReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

