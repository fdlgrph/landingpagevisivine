"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef, useState, type MouseEvent, type ReactNode } from "react";

type Ripple = { id: number; x: number; y: number };

export default function MagneticButton({
  children,
  href,
  variant = "solid",
  className = "",
  strength = 0.35,
}: {
  children: ReactNode;
  href?: string;
  variant?: "solid" | "ghost";
  className?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 18, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 200, damping: 18, mass: 0.4 });

  function handleMouseMove(e: MouseEvent<HTMLAnchorElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    x.set(relX * strength);
    y.set(relY * strength);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  function handleClick(e: MouseEvent<HTMLAnchorElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const id = Date.now();
    setRipples((prev) => [
      ...prev,
      { id, x: e.clientX - rect.left, y: e.clientY - rect.top },
    ]);
    window.setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 650);
  }

  const base =
    "relative isolate inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-7 py-3.5 text-sm font-semibold tracking-tight transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-primary-lime";
  const styles =
    variant === "solid"
      ? "bg-gradient-to-r from-primary to-primary-lime text-bg shadow-glow-sm hover:shadow-glow"
      : "border border-white/15 text-white hover:border-primary/60 hover:text-primary-lime";

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      style={{ x: springX, y: springY }}
      className={`${base} ${styles} ${className}`}
    >
      {children}
      {ripples.map((r) => (
        <span
          key={r.id}
          aria-hidden
          className="pointer-events-none absolute rounded-full bg-white/30"
          style={{
            left: r.x,
            top: r.y,
            width: 10,
            height: 10,
            transform: "translate(-50%, -50%)",
            animation: "ripple 650ms ease-out forwards",
          }}
        />
      ))}
      <style jsx>{`
        @keyframes ripple {
          to {
            width: 260px;
            height: 260px;
            opacity: 0;
          }
        }
      `}</style>
    </motion.a>
  );
}
