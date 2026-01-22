"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, Send, X } from "lucide-react";
import { brand, chatbotQuickReplies } from "@/lib/brand";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

type Msg = { id: string; from: "bot" | "user"; text: string; ts: number };

const greeting =
  "Hello 👋 Welcome to BrightSmile Dental Care. How can I help you?";

function uid() {
  return Math.random().toString(16).slice(2);
}

function botReply(kind: string) {
  if (kind === "book")
    return "Sure — tap “Book an Appointment” on the page, then try the multi-step form. It’s demo mode (UI only), perfect for expo visitors.";
  if (kind === "services")
    return "We offer cleaning, braces/aligners, whitening, root canal therapy, implants, and emergency care. Want me to highlight a popular one for demos?";
  if (kind === "doctor")
    return "Absolutely. Check the Doctors section to explore specialties. For demo purposes, imagine scheduling a consultation with the team.";
  return "Got it. For this expo demo, I can guide you through booking, services, or team info.";
}

export function ChatbotWidget() {
  const [open, setOpen] = React.useState(false);
  const [typing, setTyping] = React.useState(false);
  const [input, setInput] = React.useState("");
  const [msgs, setMsgs] = React.useState<Msg[]>([
    { id: "greet", from: "bot", text: greeting, ts: 0 },
  ]);

  async function pushBot(text: string) {
    setTyping(true);
    await new Promise((r) => setTimeout(r, 650));
    setTyping(false);
    setMsgs((m) => [...m, { id: uid(), from: "bot", text, ts: Date.now() }]);
  }

  async function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed) return;
    setMsgs((m) => [...m, { id: uid(), from: "user", text: trimmed, ts: Date.now() }]);
    setInput("");
    await pushBot("Thanks! " + botReply("fallback"));
  }

  async function quick(kind: string) {
    setMsgs((m) => [
      ...m,
      {
        id: uid(),
        from: "user",
        text:
          chatbotQuickReplies.find((q) => q.value === kind)?.label ?? "Help",
        ts: Date.now(),
      },
    ]);
    await pushBot(botReply(kind));
    if (kind === "book") {
      document
        .querySelector("#appointment")
        ?.scrollIntoView({ behavior: "smooth" });
    }
    if (kind === "services") {
      document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });
    }
    if (kind === "doctor") {
      document.querySelector("#doctors")?.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
            className="mb-3 w-[min(380px,calc(100vw-40px))] overflow-hidden rounded-3xl border border-[var(--color-border)] bg-white shadow-[var(--shadow)]"
          >
            <div className="flex items-center justify-between gap-3 border-b border-[var(--color-border)] bg-white/80 px-5 py-4 backdrop-blur">
              <div className="leading-tight">
                <div className="text-sm font-semibold tracking-tight">
                  {brand.name} Assistant
                </div>
                <div className="text-xs text-[color:var(--color-muted)]">
                  Online now • Quick responses
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="grid h-10 w-10 place-items-center rounded-full border border-[var(--color-border)] bg-white hover:bg-[var(--color-surface)]"
                aria-label="Close chat"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="max-h-[360px] overflow-auto px-5 py-4">
              <div className="grid gap-3">
                {msgs.map((m) => (
                  <div
                    key={m.id}
                    className={cn(
                      "flex",
                      m.from === "user" ? "justify-end" : "justify-start",
                    )}
                  >
                    <div
                      className={cn(
                        "max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-6",
                        m.from === "user"
                          ? "bg-[var(--color-primary)] text-white"
                          : "bg-[var(--color-surface)] text-[color:var(--color-foreground)] border border-[var(--color-border)]",
                      )}
                    >
                      {m.text}
                    </div>
                  </div>
                ))}

                {typing ? (
                  <div className="flex justify-start">
                    <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-sm text-[color:var(--color-muted)]">
                      <span className="inline-flex items-center gap-1">
                        <span className="h-2 w-2 animate-pulse rounded-full bg-[var(--color-primary)]" />
                        <span className="h-2 w-2 animate-pulse rounded-full bg-[var(--color-primary-2)] [animation-delay:120ms]" />
                        <span className="h-2 w-2 animate-pulse rounded-full bg-[var(--color-primary)] [animation-delay:240ms]" />
                      </span>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>

            <div className="border-t border-[var(--color-border)] bg-white px-5 py-4">
              <div className="flex flex-wrap gap-2">
                {chatbotQuickReplies.map((q) => (
                  <button
                    key={q.value}
                    type="button"
                    className="rounded-full border border-[var(--color-border)] bg-white px-3 py-2 text-xs font-medium text-[color:var(--color-muted)] hover:bg-[var(--color-surface)]"
                    onClick={() => quick(q.value)}
                  >
                    {q.label}
                  </button>
                ))}
              </div>

              <div className="mt-3 flex items-center gap-2">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") void send(input);
                  }}
                  className="h-11 w-full rounded-xl border border-[var(--color-border)] bg-white px-4 text-sm"
                  placeholder="Type a message…"
                  aria-label="Chat message"
                />
                <Button
                  type="button"
                  onClick={() => void send(input)}
                  className="h-11 px-4"
                  aria-label="Send"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <button
        onClick={() => setOpen((v) => !v)}
        className="grid h-14 w-14 place-items-center rounded-full bg-[var(--color-primary)] text-white shadow-[var(--shadow)] transition hover:brightness-[1.03] active:brightness-[0.98]"
        aria-label={open ? "Close chat widget" : "Open chat widget"}
      >
        <MessageCircle className="h-6 w-6" />
      </button>
    </div>
  );
}

