import Image from "next/image";
import { brand, navLinks, contact } from "@/lib/brand";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Facebook, Instagram, Linkedin, ShieldCheck, Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-[var(--color-border)] bg-white/60 backdrop-blur">
      <Container className="py-12">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
          <div className="grid gap-4">
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-2xl border border-[var(--color-border)] bg-white shadow-[var(--shadow-sm)]">
                <Image
                  src="/images/logo.svg"
                  alt={`${brand.name} logo`}
                  width={24}
                  height={24}
                />
              </div>
              <div>
                <div className="text-base font-semibold tracking-tight">
                  {brand.name}
                </div>
                <div className="text-sm text-[color:var(--color-muted)]">
                  {brand.tagline}
                </div>
              </div>
            </div>

            <p className="max-w-md text-sm leading-7 text-[color:var(--color-muted)]">
              Premium, patient-first dentistry with a focus on comfort, clarity,
              and clinical excellence. Your smile is our priority.
            </p>

            <div className="flex flex-wrap gap-2">
              <Badge>
                <ShieldCheck className="h-4 w-4 text-[var(--color-primary)]" />
                ISO / Safety Ready
              </Badge>
              <Badge>
                <Sparkles className="h-4 w-4 text-[var(--color-primary-2)]" />
                Startup-grade UX
              </Badge>
            </div>
          </div>

          <div className="grid gap-3">
            <div className="text-sm font-semibold">Explore</div>
            <div className="grid gap-2">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-sm text-[color:var(--color-muted)] hover:text-[color:var(--color-foreground)]"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            <div className="text-sm font-semibold">Newsletter</div>
            <p className="text-sm text-[color:var(--color-muted)]">
              Stay updated with dental care tips and clinic news.
            </p>
            <div className="flex gap-2">
              <input
                className="h-11 w-full rounded-xl border border-[var(--color-border)] bg-white px-4 text-sm"
                placeholder="Email address"
                aria-label="Email address"
              />
              <Button type="button">Join</Button>
            </div>

            <div className="grid gap-1 text-sm text-[color:var(--color-muted)]">
              <span>{contact.address}</span>
              <span>{contact.phone}</span>
              <span>{contact.email}</span>
            </div>

            <div className="flex items-center gap-2">
              <a
                href="#"
                aria-label="Instagram"
                className="grid h-10 w-10 place-items-center rounded-full border border-[var(--color-border)] bg-white hover:bg-[var(--color-surface)]"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="grid h-10 w-10 place-items-center rounded-full border border-[var(--color-border)] bg-white hover:bg-[var(--color-surface)]"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="grid h-10 w-10 place-items-center rounded-full border border-[var(--color-border)] bg-white hover:bg-[var(--color-surface)]"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-[var(--color-border)] pt-6 text-xs text-[color:var(--color-muted-2)] sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {new Date().getFullYear()} {brand.name}. All rights reserved.
          </span>
          <span>Privacy Policy • Terms of Service</span>
        </div>
      </Container>
    </footer>
  );
}

