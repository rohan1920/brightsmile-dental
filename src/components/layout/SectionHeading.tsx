import * as React from "react";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "grid gap-3",
        align === "center" ? "text-center justify-items-center" : "text-left",
        className,
      )}
    >
      <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white/70 px-4 py-1 text-xs font-medium text-[color:var(--color-muted)] backdrop-blur">
        <span className="h-2 w-2 rounded-full bg-[var(--color-primary)]" />
        {eyebrow}
      </div>
      <h2 className="text-2xl font-semibold tracking-tight text-[color:var(--color-foreground)] sm:text-3xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-sm leading-7 text-[color:var(--color-muted)] sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}

