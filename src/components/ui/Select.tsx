import * as React from "react";
import { cn } from "@/lib/utils";

export function Select({
  className,
  label,
  hint,
  id,
  children,
  ...props
}: React.SelectHTMLAttributes<HTMLSelectElement> & {
  label?: string;
  hint?: string;
}) {
  const autoId = React.useId();
  const selectId = id ?? autoId;
  return (
    <label className="grid gap-2 text-sm">
      {label ? (
        <span className="font-medium text-[color:var(--color-foreground)]">
          {label}
        </span>
      ) : null}
      <select
        id={selectId}
        className={cn(
          "h-11 w-full rounded-xl border border-[var(--color-border)] bg-white px-4",
          "text-sm text-[color:var(--color-foreground)]",
          "shadow-[0_1px_0_rgba(15,23,42,0.02)]",
          "focus:border-transparent focus:ring-4 focus:ring-[var(--color-ring)]",
          className,
        )}
        {...props}
      >
        {children}
      </select>
      {hint ? (
        <span className="text-xs text-[color:var(--color-muted-2)]">{hint}</span>
      ) : null}
    </label>
  );
}

