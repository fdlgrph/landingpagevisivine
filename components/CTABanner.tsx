import GradientBlob from "@/components/ui/GradientBlob";
import MagneticButton from "@/components/ui/MagneticButton";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function CTABanner() {
  return (
    <section id="contact" className="relative mx-auto max-w-7xl px-6 py-32">
      <div className="relative overflow-hidden rounded-5xl glass-strong px-8 py-20 text-center sm:px-16">
        <GradientBlob className="absolute -top-24 left-1/4 h-72 w-72" />
        <GradientBlob
          className="absolute -bottom-24 right-1/4 h-72 w-72"
          from="#A3E635"
          to="#22C55E"
        />
        <RevealOnScroll className="relative">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-primary-lime">
            Let&apos;s build something
          </p>
          <h2 className="mx-auto max-w-2xl font-display text-4xl font-extrabold tracking-tight sm:text-6xl">
            Ready to grow your brand?
          </h2>
          <p className="mx-auto mt-6 max-w-md text-base text-gray-400">
            Tell us about the project and we&apos;ll get back within one
            business day with next steps.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <MagneticButton href="mailto:hello@visivine.studio">
              Start a Project
            </MagneticButton>
            <MagneticButton href="#portfolio" variant="ghost">
              See our work
            </MagneticButton>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
