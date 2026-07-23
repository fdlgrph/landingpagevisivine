import { navLinks } from "@/lib/data";

const socials = [
  { label: "Instagram", href: "https://instagram.com/visivine" },
  { label: "TikTok", href: "https://tiktok.com/@visivine" },
  { label: "LinkedIn", href: "https://linkedin.com/company/visivine" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-surface-border/60 bg-surface/30">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-3">
          <div>
            <a href="#home" className="font-display text-xl font-extrabold tracking-tight">
              Visi<span className="text-gradient">vine</span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-gray-400">
              A creative digital hub for branding, content, and web
              development, based in Klaten, Indonesia.
            </p>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-gray-500">
              Navigate
            </p>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-primary-lime"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-gray-500">
              Connect
            </p>
            <ul className="mt-5 space-y-3">
              {socials.map((social) => (
                <li key={social.href}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-400 transition-colors hover:text-primary-lime"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="mailto:hello@visivine.studio"
                  className="text-sm text-gray-400 transition-colors hover:text-primary-lime"
                >
                  hello@visivine.studio
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Visivine. All rights reserved.
          </p>
          <p className="text-xs text-gray-500">Designed &amp; built in Klaten, Indonesia.</p>
        </div>
      </div>
    </footer>
  );
}
