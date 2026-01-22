import * as React from "react";
import { cn } from "@/lib/utils";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  hint?: string;
};

export function Input({ className, label, hint, id, ...props }: InputProps) {
  const autoId = React.useId();
  const inputId = id ?? autoId;
  return (
    <label className="grid gap-2 text-sm">
      {label ? (
        <span className="font-medium text-[color:var(--color-foreground)]">
          {label}
        </span>
      ) : null}
      <input
        id={inputId}
        className={cn(
          "h-11 w-full rounded-xl border border-[var(--color-border)] bg-white px-4",
          "text-sm text-[color:var(--color-foreground)] placeholder:text-black/40",
          "shadow-[0_1px_0_rgba(15,23,42,0.02)]",
          "focus:border-transparent focus:ring-4 focus:ring-[var(--color-ring)]",
          className,
        )}
        {...props}
      />
      {hint ? (
        <span className="text-xs text-[color:var(--color-muted-2)]">{hint}</span>
      ) : null}
    </label>
  );
}

