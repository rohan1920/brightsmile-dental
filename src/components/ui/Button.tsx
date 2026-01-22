"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
};

export function Button({
  className,
  variant = "primary",
  size = "md",
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full font-medium transition",
        "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--color-ring)]",
        "disabled:opacity-60 disabled:pointer-events-none",
        variant === "primary" &&
          "bg-[var(--color-primary)] text-white shadow-[var(--shadow-sm)] hover:bg-[#1e40af] hover:shadow-[var(--shadow)] active:bg-[#1e3a8a] transition-all",
        variant === "secondary" &&
          "bg-white text-[var(--color-foreground)] border border-[var(--color-border)] shadow-[var(--shadow-sm)] hover:bg-[var(--color-surface)]",
        variant === "ghost" &&
          "bg-transparent text-[var(--color-foreground)] hover:bg-black/[0.04]",
        size === "sm" && "h-9 px-4 text-sm",
        size === "md" && "h-11 px-5 text-sm",
        size === "lg" && "h-12 px-6 text-base",
        className,
      )}
      {...props}
    />
  );
}

