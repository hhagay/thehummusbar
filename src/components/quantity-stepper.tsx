import { Minus, Plus } from "lucide-react";
import { MAX_QTY } from "@/lib/cart";
import { cn } from "@/lib/utils";

export function QuantityStepper({
  value,
  onChange,
  min = 1,
  label = "Quantity",
}: {
  value: number;
  onChange: (next: number) => void;
  min?: number;
  label?: string;
}) {
  return (
    <div
      className="inline-flex h-11 shrink-0 items-center rounded-md border border-line bg-ink"
      role="group"
      aria-label={label}
    >
      <button
        type="button"
        className={cn(
          "inline-flex size-11 items-center justify-center text-cream hover:text-lime",
          value <= min && "opacity-40",
        )}
        aria-label="Decrease quantity"
        disabled={value <= min}
        onClick={() => onChange(Math.max(min, value - 1))}
      >
        <Minus className="size-4" />
      </button>
      <span className="w-8 text-center tabular-nums text-sm text-cream" aria-live="polite">
        {value}
      </span>
      <button
        type="button"
        className={cn(
          "inline-flex size-11 items-center justify-center text-cream hover:text-lime",
          value >= MAX_QTY && "opacity-40",
        )}
        aria-label="Increase quantity"
        disabled={value >= MAX_QTY}
        onClick={() => onChange(Math.min(MAX_QTY, value + 1))}
      >
        <Plus className="size-4" />
      </button>
    </div>
  );
}
