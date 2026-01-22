"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export function Badge({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-[var(--color-border)]",
        "bg-white px-3 py-1 text-xs font-medium text-[color:var(--color-foreground)] shadow-[var(--shadow-sm)]",
        className,
      )}
    >
      {children}
    </span>
  );
}

