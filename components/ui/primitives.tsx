"use client";
import { cn } from "@/lib/utils";
import { type ButtonHTMLAttributes, forwardRef } from "react";

// ── BUTTON ──
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost" | "outline" | "whatsapp";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = "primary", size = "md", children, ...props },
    ref,
  ) => {
    const base =
      "inline-flex items-center justify-center gap-2 font-mono tracking-wider uppercase transition-all duration-200 cursor-pointer rounded-xl select-none";
    const variants = {
      primary:
        "bg-forest-500 text-white hover:bg-forest-400 shadow-lg shadow-forest-500/20 hover:shadow-forest-400/30 hover:-translate-y-0.5",
      ghost:
        "border border-white/15 text-white/60 hover:border-forest-500/50 hover:bg-forest-500/10 hover:text-forest-300",
      outline:
        "border border-forest-500/30 text-forest-600 hover:border-forest-500 hover:bg-forest-500/5",
      whatsapp:
        "bg-[#25D366] text-white hover:bg-[#20b857] shadow-lg shadow-[#25D366]/30 hover:-translate-y-0.5",
    };
    const sizes = {
      sm: "text-[11px] px-3 py-1.5",
      md: "text-[12px] px-5 py-2.5",
      lg: "text-[13px] px-7 py-3.5",
    };
    return (
      <button
        ref={ref}
        className={cn(base, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  },
);
Button.displayName = "Button";

// ── BADGE ──
interface BadgeProps {
  children: React.ReactNode;
  variant?: "light" | "dark" | "green";
  className?: string;
}
export function Badge({ children, variant = "light", className }: BadgeProps) {
  const variants = {
    light: "bg-white/90 backdrop-blur-sm border border-white/60 text-gray-800",
    dark: "bg-white/10 border border-white/10 text-slate-300",
    green: "bg-forest-500/10 border border-forest-500/25 text-forest-500",
  };
  return (
    <span
      className={cn(
        "inline-block font-mono text-[10px] tracking-widest uppercase rounded-full px-2.5 py-1",
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}

// ── EYEBROW ──
interface EyebrowProps {
  label: string;
  light?: boolean;
  className?: string;
}
export function Eyebrow({ label, light, className }: EyebrowProps) {
  return (
    <div className={cn("flex items-center gap-2 mb-4", className)}>
      <span
        className={cn(
          "w-6 h-px flex-shrink-0",
          light ? "bg-forest-400" : "bg-forest-500",
        )}
      />
      <span
        className={cn(
          "font-mono text-xs tracking-[0.22em] uppercase",
          light ? "text-forest-400" : "text-forest-500",
        )}
      >
        {label}
      </span>
    </div>
  );
}

// ── SECTION HEADER ──
interface SectionHeaderProps {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  light?: boolean;
  className?: string;
}
export function SectionHeader({
  eyebrow,
  title,
  description,
  light,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 lg:gap-8 mb-14 lg:mb-20",
        className,
      )}
    >
      <div>
        <Eyebrow label={eyebrow} light={light} />
        <h2
          className={cn(
            "font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.05] tracking-tight",
            light ? "text-white" : "text-forest-900",
          )}
        >
          {title}
        </h2>
      </div>
      {description && (
        <p
          className={cn(
            "text-sm sm:text-base max-w-xs leading-relaxed lg:text-right",
            light ? "text-white/45" : "text-gray-500",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
