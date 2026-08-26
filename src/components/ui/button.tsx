import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium tracking-wide transition-[transform,background-color,color,border-color,opacity] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime/70 focus-visible:ring-offset-2 focus-visible:ring-offset-ink disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] max-sm:whitespace-normal max-sm:text-center",
  {
    variants: {
      variant: {
        primary:
          "bg-lime text-ink hover:bg-lime-hot",
        cream:
          "bg-cream text-ink hover:bg-cream-2",
        outline:
          "border border-line bg-transparent text-fg hover:border-lime hover:text-lime",
        ghost: "text-fg hover:text-lime",
        dark: "bg-olive text-cream hover:bg-olive-2",
      },
      size: {
        sm: "h-10 px-4 text-xs rounded-sm",
        md: "h-11 px-5 text-sm rounded-md",
        lg: "h-12 px-6 text-sm rounded-md",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <button className={cn(buttonVariants({ variant, size }), className)} {...props} />
  );
}

export { buttonVariants };
