import RevealOnScroll from "@/components/ui/RevealOnScroll";
import MagneticButton from "@/components/ui/MagneticButton";

const academyTracks = [
  { title: "Brand Strategy Foundations", length: "4 lessons" },
  { title: "Shooting on a Budget", length: "6 lessons" },
  { title: "Content Systems That Scale", length: "5 lessons" },
];

const posts = [
  {
    title: "Why most rebrands fail before the design starts",
    read: "6 min read",
  },
  {
    title: "A simple content calendar template we use with every client",
    read: "4 min read",
  },
  {
    title: "What we look for before taking on a video production project",
    read: "5 min read",
  },
];

export default function AcademyBlog() {
  return (
    <>
      <section id="academy" className="relative mx-auto max-w-7xl px-6 py-32">
        <RevealOnScroll className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-primary-lime">
              Visivine Academy
            </p>
            <h2 className="max-w-2xl font-display text-4xl font-bold tracking-tight sm:text-5xl">
              Learn how we actually work.
            </h2>
          </div>
          <MagneticButton href="#contact" variant="ghost">
            Join waitlist
          </MagneticButton>
        </RevealOnScroll>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {academyTracks.map((track, i) => (
            <RevealOnScroll key={track.title} delay={i * 0.08}>
              <div className="h-full rounded-4xl glass p-7">
                <span className="font-mono text-xs text-gray-500">{track.length}</span>
                <h3 className="mt-4 font-display text-lg font-bold tracking-tight">
                  {track.title}
                </h3>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      <section id="blog" className="relative mx-auto max-w-7xl px-6 py-32">
        <RevealOnScroll>
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-primary-lime">
            From the journal
          </p>
          <h2 className="max-w-2xl font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Notes on creative work.
          </h2>
        </RevealOnScroll>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {posts.map((post, i) => (
            <RevealOnScroll key={post.title} delay={i * 0.08}>
              <a
                href="#contact"
                className="group flex h-full flex-col justify-between rounded-4xl glass p-7 transition-shadow duration-500 hover:shadow-glow-sm"
              >
                <h3 className="font-display text-lg font-bold leading-snug tracking-tight text-white group-hover:text-primary-lime">
                  {post.title}
                </h3>
                <span className="mt-6 text-xs text-gray-500">{post.read}</span>
              </a>
            </RevealOnScroll>
          ))}
        </div>
      </section>
    </>
  );
}
