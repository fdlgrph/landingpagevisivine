"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function Projects() {
  return (
    <section id="portfolio" className="relative mx-auto max-w-7xl px-6 py-32">
      <RevealOnScroll className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-primary-lime">
            Selected work
          </p>
          <h2 className="max-w-2xl font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Projects we&apos;re proud to show.
          </h2>
        </div>
        <a
          href="#contact"
          className="text-sm font-medium text-gray-300 underline underline-offset-4 hover:text-primary-lime"
        >
          Start your own project →
        </a>
      </RevealOnScroll>

      <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <RevealOnScroll key={project.title} delay={i * 0.08}>
            <motion.article
              whileHover="hover"
              className="group relative flex h-full flex-col overflow-hidden rounded-4xl glass"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <motion.div
                  variants={{ hover: { scale: 1.08 } }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="h-full w-full"
                >
                  <Image
                    src={project.image}
                    alt={`${project.title} project cover`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                    loading="lazy"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/10 to-transparent" />
                <span className="absolute left-4 top-4 rounded-full glass-strong px-3 py-1 text-xs font-medium text-primary-lime">
                  {project.category}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-lg font-bold tracking-tight text-white">
                  {project.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-400">
                  {project.description}
                </p>
                <motion.a
                  href="#contact"
                  variants={{ hover: { x: 4 } }}
                  className="mt-5 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-white"
                >
                  View Project
                  <span aria-hidden>→</span>
                </motion.a>
              </div>
            </motion.article>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
