"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export function Card({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-[var(--color-border)] bg-white shadow-[var(--shadow-sm)]",
        "backdrop-blur supports-[backdrop-filter]:bg-white/95",
        className,
      )}
    >
      {children}
    </div>
  );
}

