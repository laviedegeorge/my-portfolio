"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export function useThemeVars() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const isLight = mounted && resolvedTheme === "light";

  const vars = {
    "--bg": isLight ? "#f4f2ed" : "#080808",
    "--fg": isLight ? "#0d0d0d" : "#edeae0",
    "--fg2": isLight ? "#5c5854" : "#a8a4a0",
    "--fg3": isLight ? "#6c6864" : "#7e7a76",
    "--border": isLight ? "rgba(0,0,0,0.08)" : "rgba(255,255,255,0.07)",
    "--glow-color": isLight ? "rgba(0,0,0,0.8)" : "rgba(255,255,255,0.85)",
    "--pill": isLight ? "rgba(0,0,0,0.04)" : "rgba(255,255,255,0.05)",
    "--btn-bg": isLight ? "#0d0d0d" : "#edeae0",
    "--btn-fg": isLight ? "#f4f2ed" : "#080808",
  } as React.CSSProperties;

  return { isLight, vars };
}
