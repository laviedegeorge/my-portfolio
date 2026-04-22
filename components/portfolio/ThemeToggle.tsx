"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="h-4.5 w-8.5" />;

  const isLight = resolvedTheme === "light";
  return (
    <button
      onClick={() => setTheme(isLight ? "dark" : "light")}
      aria-label={`Switch to ${isLight ? "dark" : "light"} mode`}
      className="relative h-4.5 w-8.5 shrink-0 rounded-full border transition-colors duration-300"
      style={{ borderColor: "var(--border)", background: "var(--pill)" }}
    >
      <span
        className="absolute top-0.5 left-0.5 h-3 w-3 rounded-full transition-transform duration-300"
        style={{
          background: "var(--fg2)",
          transform: isLight ? "translateX(16px)" : "translateX(0)",
        }}
      />
    </button>
  );
}
