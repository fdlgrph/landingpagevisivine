"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { testimonials } from "@/lib/data";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  const active = testimonials[index];

  return (
    <section className="relative mx-auto max-w-5xl px-6 py-32">
      <RevealOnScroll className="text-center">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-primary-lime">
          Client stories
        </p>
        <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
          Trusted by teams who value the details.
        </h2>
      </RevealOnScroll>

      <div className="relative mt-16 min-h-[280px] rounded-5xl glass-strong p-10 sm:p-16">
        <AnimatePresence mode="wait">
          <motion.figure
            key={active.name}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center text-center"
          >
            <blockquote className="max-w-2xl font-display text-xl font-medium leading-relaxed text-white sm:text-2xl">
              &ldquo;{active.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-8 flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-lime font-display text-sm font-bold text-bg">
                {active.avatar}
              </span>
              <span className="text-left">
                <span className="block text-sm font-semibold text-white">
                  {active.name}
                </span>
                <span className="block text-xs text-gray-400">{active.role}</span>
              </span>
            </figcaption>
          </motion.figure>
        </AnimatePresence>

        <div className="mt-10 flex items-center justify-center gap-2">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              onClick={() => setIndex(i)}
              aria-label={`Show testimonial from ${t.name}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index ? "w-8 bg-primary-lime" : "w-1.5 bg-white/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
