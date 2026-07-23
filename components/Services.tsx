"use client";

import { motion } from "framer-motion";
import { services } from "@/lib/data";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Services() {
  return (
    <section id="services" className="relative mx-auto max-w-7xl px-6 py-32">
      <RevealOnScroll>
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-primary-lime">
          What we do
        </p>
        <h2 className="max-w-2xl font-display text-4xl font-bold tracking-tight sm:text-5xl">
          Every discipline a brand needs, under one roof.
        </h2>
      </RevealOnScroll>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
      >
        {services.map((service) => (
          <motion.div
            key={service.title}
            variants={item}
            whileHover={{ y: -6 }}
            className="group relative overflow-hidden rounded-4xl glass p-7 transition-shadow duration-500 hover:shadow-glow"
          >
            <div
              aria-hidden
              className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-primary/20 blur-2xl transition-opacity duration-500 opacity-0 group-hover:opacity-100"
            />
            <span className="font-mono text-xs text-gray-500">{service.tag}</span>
            <h3 className="mt-6 font-display text-xl font-bold tracking-tight text-white">
              {service.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-gray-400">
              {service.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
