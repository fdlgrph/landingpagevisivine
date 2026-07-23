import { clients } from "@/lib/data";

export default function TrustMarquee() {
  const loop = [...clients, ...clients];

  return (
    <section className="relative border-y border-surface-border/60 bg-surface/30 py-10">
      <p className="mb-6 text-center text-xs font-medium uppercase tracking-[0.3em] text-gray-500">
        Trusted by growing brands
      </p>
      <div
        className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
        aria-hidden={false}
      >
        <div className="flex min-w-full shrink-0 animate-marquee items-center gap-16 pr-16">
          {loop.map((client, i) => (
            <span
              key={`${client}-${i}`}
              className="whitespace-nowrap font-display text-xl font-semibold text-gray-500 transition-colors hover:text-primary-lime"
            >
              {client}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
