"use client";

import * as React from "react";
import { CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import { appointmentServices } from "@/lib/brand";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { MotionReveal } from "@/components/motion/MotionReveal";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Modal } from "@/components/ui/Modal";

type FormState = {
  name: string;
  email: string;
  phone: string;
  date: string;
  service: string;
};

const initial: FormState = {
  name: "",
  email: "",
  phone: "",
  date: "",
  service: "",
};

export function Appointment() {
  const [step, setStep] = React.useState<1 | 2 | 3>(1);
  const [state, setState] = React.useState<FormState>(initial);
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setState((s) => ({ ...s, [key]: value }));
  }

  function next() {
    setStep((s) => (s === 1 ? 2 : s === 2 ? 3 : 3));
  }
  function prev() {
    setStep((s) => (s === 3 ? 2 : s === 2 ? 1 : 1));
  }

  async function submit() {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 850));
    setLoading(false);
    setOpen(true);
    setState(initial);
    setStep(1);
  }

  const progress = step === 1 ? 0.33 : step === 2 ? 0.66 : 1;

  return (
    <section id="appointment" className="py-14 sm:py-16">
      <Container className="grid gap-8">
        <MotionReveal>
          <SectionHeading
            eyebrow="Appointment"
            title="Request an appointment"
            description="Book your visit with our team. Fill out the form below and we'll get back to you shortly."
          />
        </MotionReveal>

        <MotionReveal delay={0.05}>
          <Card className="overflow-hidden">
            <div className="border-b border-[var(--color-border)] bg-white/70 px-6 py-5">
              <div className="flex items-center justify-between gap-4">
                <div className="text-sm font-semibold tracking-tight">
                  Step {step} of 3
                </div>
                <div className="text-xs text-[color:var(--color-muted)]">
                  Secure and confidential
                </div>
              </div>
              <div className="mt-4 h-2 w-full rounded-full bg-[var(--color-surface-2)]">
                <div
                  className="h-2 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-2)] transition-all"
                  style={{ width: `${progress * 100}%` }}
                />
              </div>
            </div>

            <div className="grid gap-5 p-6 sm:p-7">
              {step === 1 ? (
                <div className="grid gap-4 sm:grid-cols-2">
                  <Input
                    label="Full Name"
                    placeholder="e.g., Sarah Khan"
                    value={state.name}
                    onChange={(e) => update("name", e.target.value)}
                  />
                  <Input
                    label="Email"
                    placeholder="e.g., sarah@example.com"
                    type="email"
                    value={state.email}
                    onChange={(e) => update("email", e.target.value)}
                  />
                </div>
              ) : null}

              {step === 2 ? (
                <div className="grid gap-4 sm:grid-cols-2">
                  <Input
                    label="Phone"
                    placeholder="e.g., +1 (555) 012-3456"
                    value={state.phone}
                    onChange={(e) => update("phone", e.target.value)}
                  />
                  <Input
                    label="Preferred Date"
                    type="date"
                    value={state.date}
                    onChange={(e) => update("date", e.target.value)}
                  />
                </div>
              ) : null}

              {step === 3 ? (
                <div className="grid gap-4 sm:grid-cols-2">
                  <Select
                    label="Service"
                    value={state.service}
                    onChange={(e) => update("service", e.target.value)}
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    {appointmentServices.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </Select>
                  <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4 text-sm text-[color:var(--color-muted)]">
                    <div className="font-semibold text-[color:var(--color-foreground)]">
                      What happens next?
                    </div>
                    <p className="mt-1 leading-7">
                      We'll confirm availability and send you a confirmation email
                      with appointment details and preparation instructions.
                    </p>
                  </div>
                </div>
              ) : null}

              <div className="flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
                <Button
                  type="button"
                  variant="secondary"
                  onClick={prev}
                  disabled={step === 1 || loading}
                >
                  <ChevronLeft className="h-4 w-4" />
                  Back
                </Button>

                {step < 3 ? (
                  <Button type="button" onClick={next} disabled={loading}>
                    Continue <ChevronRight className="h-4 w-4" />
                  </Button>
                ) : (
                  <Button type="button" onClick={submit} disabled={loading}>
                    {loading ? "Submitting…" : "Submit Request"}
                  </Button>
                )}
              </div>
            </div>
          </Card>
        </MotionReveal>

        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title="Appointment Request Submitted"
        >
          <div className="grid gap-4">
            <div className="flex items-start gap-3 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4">
              <CheckCircle2 className="mt-0.5 h-5 w-5 text-[var(--color-primary)]" />
              <div className="text-sm">
                <div className="font-semibold">
                  Request Received
                </div>
                <div className="mt-1 text-[color:var(--color-muted)]">
                  Our team will review your request and send you a confirmation
                  via email within 24 hours.
                </div>
              </div>
            </div>
            <Button onClick={() => setOpen(false)}>Done</Button>
          </div>
        </Modal>
      </Container>
    </section>
  );
}

