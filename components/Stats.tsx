import { stats } from "@/lib/data";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import CountUp from "@/components/ui/CountUp";

export default function Stats() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-32">
      <RevealOnScroll>
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-primary-lime">
          Why Visivine
        </p>
        <h2 className="max-w-2xl font-display text-4xl font-bold tracking-tight sm:text-5xl">
          Numbers that come from doing the work.
        </h2>
      </RevealOnScroll>

      <div className="mt-16 grid grid-cols-2 gap-8 rounded-5xl glass p-10 sm:grid-cols-4 sm:p-14">
        {stats.map((stat, i) => (
          <RevealOnScroll key={stat.label} delay={i * 0.1} className="text-center sm:text-left">
            <p className="font-display text-4xl font-extrabold text-gradient sm:text-5xl">
              <CountUp value={stat.value} suffix={stat.suffix} />
            </p>
            <p className="mt-2 text-sm text-gray-400">{stat.label}</p>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
