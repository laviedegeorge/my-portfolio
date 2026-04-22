import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        /* ComHealth primary — solid forest green */
        default:
          "bg-forest-500 text-white shadow-lg shadow-forest-500/20 hover:bg-forest-400 hover:shadow-forest-400/30 hover:-translate-y-0.5 rounded-xl",
        /* ShadCN destructive */
        destructive:
          "bg-destructive text-white shadow-sm hover:bg-destructive/90 rounded-xl",
        /* Ghost — dark surface variant */
        outline:
          "border border-white/15 bg-transparent text-white/60 hover:border-forest-500/50 hover:bg-forest-500/10 hover:text-forest-300 rounded-xl",
        /* Ghost on light surface */
        "outline-light":
          "border border-forest-500/30 bg-transparent text-forest-600 hover:border-forest-500 hover:bg-forest-500/5 rounded-xl",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 rounded-xl",
        ghost: "hover:bg-accent hover:text-accent-foreground rounded-xl",
        link: "text-forest-500 underline-offset-4 hover:underline",
        /* WhatsApp */
        whatsapp:
          "bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 hover:bg-[#20b857] hover:-translate-y-0.5 rounded-xl",
        /* Dark nav CTA */
        "nav-cta": "bg-forest-500 text-white hover:bg-forest-400 rounded-xl",
      },
      size: {
        default: "h-9 px-5 py-2 text-[12px]",
        sm: "h-8 px-3 py-1.5 text-[11px]",
        lg: "h-11 px-7 py-3.5 text-[13px]",
        xl: "h-12 px-8 py-4 text-[13px]",
        icon: "size-9",
        xs: "h-6 gap-1 rounded-md px-2 text-xs has-[>svg]:px-1.5 [&_svg:not([class*='size-'])]:size-3",
        "icon-xs": "size-6 rounded-md [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
