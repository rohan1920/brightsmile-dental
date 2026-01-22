import Image from "next/image";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { doctors } from "@/lib/brand";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { MotionReveal } from "@/components/motion/MotionReveal";
import { Card } from "@/components/ui/Card";

export function Doctors() {
  return (
    <section id="doctors" className="py-14 sm:py-16">
      <Container className="grid gap-8">
        <MotionReveal>
          <SectionHeading
            eyebrow="Doctors"
            title="Meet the team behind confident smiles"
            description="Profiles with social proof, specialties, and hover depth — crafted for a real-world clinic brand."
          />
        </MotionReveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {doctors.map((d, idx) => (
            <MotionReveal key={d.name} delay={idx * 0.03}>
              <Card className="group overflow-hidden">
                <div className="bg-gradient-to-br from-[rgba(47,109,255,0.12)] via-white to-[rgba(63,182,217,0.12)] p-5">
                  <div className="overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white">
                    <Image
                      src={d.image}
                      alt={d.name}
                      width={420}
                      height={420}
                      className="h-auto w-full transition duration-300 group-hover:scale-[1.02]"
                    />
                  </div>
                  <div className="mt-4">
                    <div className="text-sm font-semibold tracking-tight">
                      {d.name}
                    </div>
                    <div className="mt-0.5 text-sm text-[color:var(--color-muted)]">
                      {d.role}
                    </div>
                    <div className="mt-2 text-xs text-[color:var(--color-muted-2)]">
                      {d.experience} experience
                    </div>
                  </div>

                  <div className="mt-4 flex items-center gap-2">
                    <a
                      href="#"
                      aria-label={`${d.name} Instagram`}
                      className="grid h-9 w-9 place-items-center rounded-full border border-[var(--color-border)] bg-white hover:bg-[var(--color-surface)]"
                    >
                      <Instagram className="h-4 w-4" />
                    </a>
                    <a
                      href="#"
                      aria-label={`${d.name} LinkedIn`}
                      className="grid h-9 w-9 place-items-center rounded-full border border-[var(--color-border)] bg-white hover:bg-[var(--color-surface)]"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                    <a
                      href="#"
                      aria-label={`${d.name} Facebook`}
                      className="grid h-9 w-9 place-items-center rounded-full border border-[var(--color-border)] bg-white hover:bg-[var(--color-surface)]"
                    >
                      <Facebook className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </Card>
            </MotionReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

