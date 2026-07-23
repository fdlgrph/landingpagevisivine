# Visivine — Landing Page

A premium, dark-mode-first landing page for **Visivine**, a creative digital
hub. Built with Next.js 15 (App Router), TypeScript, Tailwind CSS, and
Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Design tokens

| Token             | Value                          |
| ------------------ | ------------------------------ |
| `bg`               | `#050505`                      |
| `surface`          | `#111111`                      |
| `primary`          | `#22C55E`                      |
| `primary-lime`     | `#A3E635`                      |
| Display font       | Manrope                        |
| Body font          | Inter                          |
| Mono font          | JetBrains Mono                 |

All tokens live in `tailwind.config.ts`. Content (copy, services, projects,
testimonials, FAQ) lives in `lib/data.ts` — edit that file to update the
page without touching component code.

## Structure

```
app/
  layout.tsx        Root layout, fonts, SEO metadata, JSON-LD
  page.tsx           Composes all sections
  loading.tsx        Route-level loading state
  globals.css        Base styles, glass utilities, reduced-motion support
  robots.ts / sitemap.ts

components/
  Navbar.tsx
  Hero.tsx
  TrustMarquee.tsx
  Services.tsx
  Projects.tsx
  Stats.tsx
  Process.tsx
  AcademyBlog.tsx
  Testimonials.tsx
  FAQ.tsx
  CTABanner.tsx
  Footer.tsx
  ui/
    MagneticButton.tsx   cursor-following CTA with ripple click effect
    RevealOnScroll.tsx   scroll-triggered fade/slide wrapper
    ScrollProgress.tsx   top progress bar tied to scroll position
    GradientBlob.tsx     ambient floating gradient background
    HeroVisual.tsx       signature aperture/orbit illustration with mouse parallax
    CountUp.tsx          animated number counter for stats

lib/
  data.ts             all page copy and content
```

## Notes on production readiness

- Replace the placeholder Unsplash images in `lib/data.ts` with real project
  photography before shipping — they're wired through `next/image` so any
  remote host just needs adding to `next.config.mjs`.
- Update `sameAs` links in `app/layout.tsx` and social links in
  `components/Footer.tsx` with real profile URLs.
- Add a real `/public/og-image.jpg` (1200×630) and `/public/favicon.ico`.
- All animation respects `prefers-reduced-motion`.
- Every interactive element has visible keyboard focus states.
