"use client";
import { useRef, useEffect, useCallback } from "react";

const CELL = 48;
const GLOW_R = 120;

export default function GridCanvas({ isLight }: { isLight: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -999, y: -999 });
  const raf = useRef(0);
  const dirty = useRef(true);

  const draw = useCallback(() => {
    raf.current = requestAnimationFrame(draw);

    if (!dirty.current) return;
    dirty.current = false;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const W = canvas.width;
    const H = canvas.height;
    const { x: mx, y: my } = mouse.current;

    ctx.clearRect(0, 0, W, H);

    const cols = Math.ceil(W / CELL) + 1;
    const rows = Math.ceil(H / CELL) + 1;

    for (let c = 0; c <= cols; c++) {
      const px = c * CELL;
      for (let r = 0; r <= rows; r++) {
        const py = r * CELL;
        const dist = Math.sqrt((px - mx) ** 2 + (py - my) ** 2);
        const base = isLight ? 0.05 : 0.03;
        const boost =
          dist < GLOW_R ? (1 - dist / GLOW_R) * (isLight ? 0.2 : 0.28) : 0;
        const a = base + boost;
        const col = isLight ? `rgba(0,0,0,${a})` : `rgba(255,255,255,${a})`;
        ctx.strokeStyle = col;
        ctx.lineWidth = 0.5;
        if (r < rows) {
          ctx.beginPath();
          ctx.moveTo(px, py);
          ctx.lineTo(px, py + CELL);
          ctx.stroke();
        }
        if (c < cols) {
          ctx.beginPath();
          ctx.moveTo(px, py);
          ctx.lineTo(px + CELL, py);
          ctx.stroke();
        }
      }
    }
  }, [isLight]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      dirty.current = true;
    };
    resize();
    window.addEventListener("resize", resize);

    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      dirty.current = true;
    };
    const onLeave = () => {
      mouse.current = { x: -999, y: -999 };
      dirty.current = true;
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);

    raf.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, [draw]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0"
    />
  );
}
