import { process } from "@/lib/data";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function Process() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-32">
      <RevealOnScroll>
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-primary-lime">
          How we work
        </p>
        <h2 className="max-w-2xl font-display text-4xl font-bold tracking-tight sm:text-5xl">
          A process built for clarity, start to finish.
        </h2>
      </RevealOnScroll>

      <ol className="relative mt-20 max-w-3xl space-y-14 border-l border-white/10 pl-10 sm:pl-14">
        {process.map((step, i) => (
          <RevealOnScroll key={step.title} delay={i * 0.08} direction="up">
            <li className="relative">
              <span
                aria-hidden
                className="absolute -left-[45px] top-1 flex h-6 w-6 items-center justify-center rounded-full bg-bg ring-1 ring-primary/40 sm:-left-[61px]"
              >
                <span className="h-2 w-2 rounded-full bg-primary-lime shadow-glow-sm" />
              </span>
              <span className="font-mono text-xs text-primary-lime">
                0{i + 1}
              </span>
              <h3 className="mt-2 font-display text-2xl font-bold tracking-tight">
                {step.title}
              </h3>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-gray-400">
                {step.description}
              </p>
            </li>
          </RevealOnScroll>
        ))}
      </ol>
    </section>
  );
}
