import * as React from "react";
import { cn } from "@/lib/utils";

export function Input({ className, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      className={cn(
        "h-12 w-full rounded-md border border-line bg-surface px-4 text-base text-fg placeholder:text-muted sm:text-sm",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime/70",
        className,
      )}
      {...props}
    />
  );
}

export function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      className={cn(
        "min-h-32 w-full rounded-lg border border-line bg-surface px-4 py-3 text-base text-fg placeholder:text-muted sm:text-sm",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime/70",
        className,
      )}
      {...props}
    />
  );
}

export function Label({ className, ...props }: React.ComponentProps<"label">) {
  return (
    <label
      className={cn("mb-2 block text-xs font-medium uppercase tracking-[0.16em] text-muted", className)}
      {...props}
    />
  );
}
