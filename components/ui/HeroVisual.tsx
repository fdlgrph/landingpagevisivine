"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { MouseEvent } from "react";

const chips = [
  { label: "Branding", top: "8%", left: "62%", delay: 0 },
  { label: "Film & Photo", top: "58%", left: "72%", delay: 0.6 },
  { label: "Web Dev", top: "70%", left: "10%", delay: 1.2 },
  { label: "Content", top: "14%", left: "4%", delay: 1.8 },
];

export default function HeroVisual() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-1, 1], [8, -8]), {
    stiffness: 120,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(x, [-1, 1], [-8, 8]), {
    stiffness: 120,
    damping: 20,
  });

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(((e.clientX - rect.left) / rect.width) * 2 - 1);
    y.set(((e.clientY - rect.top) / rect.height) * 2 - 1);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 1000 }}
      className="relative mx-auto aspect-square w-full max-w-[480px]"
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative h-full w-full"
      >
        {/* aperture rings — a nod to Visivine's photography & film craft */}
        <svg
          viewBox="0 0 400 400"
          className="absolute inset-0 h-full w-full animate-spin-slow"
          aria-hidden
        >
          <circle
            cx="200"
            cy="200"
            r="168"
            fill="none"
            stroke="url(#ring-grad)"
            strokeWidth="1"
            strokeDasharray="6 14"
          />
        </svg>
        <svg
          viewBox="0 0 400 400"
          className="absolute inset-0 h-full w-full animate-spin-reverse"
          aria-hidden
        >
          <circle
            cx="200"
            cy="200"
            r="132"
            fill="none"
            stroke="url(#ring-grad)"
            strokeWidth="1.5"
            strokeDasharray="2 10"
            opacity="0.7"
          />
          <defs>
            <linearGradient id="ring-grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#22C55E" />
              <stop offset="100%" stopColor="#A3E635" />
            </linearGradient>
          </defs>
        </svg>

        {/* glowing core */}
        <div
          aria-hidden
          className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(163,230,53,0.55), rgba(34,197,94,0.25) 55%, transparent 75%)",
            filter: "blur(6px)",
          }}
        />
        <div
          aria-hidden
          className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full glass-strong shadow-glow"
        >
          <span className="absolute inset-0 flex items-center justify-center font-display text-2xl font-extrabold text-gradient">
            V
          </span>
        </div>

        {/* floating service chips */}
        {chips.map((chip) => (
          <motion.div
            key={chip.label}
            className="absolute animate-float rounded-full glass px-4 py-2 text-xs font-medium text-gray-200 shadow-glow-sm"
            style={{
              top: chip.top,
              left: chip.left,
              animationDelay: `${chip.delay}s`,
            }}
          >
            {chip.label}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
