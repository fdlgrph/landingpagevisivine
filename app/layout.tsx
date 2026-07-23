import type { Metadata } from "next";
import { Manrope, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
  weight: ["400", "500"],
});

const siteUrl = "https://visivine.studio";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Visivine — Creative Ideas. Digital Impact.",
    template: "%s · Visivine",
  },
  description:
    "Visivine is a creative digital hub helping brands grow through branding, content, web development, and digital marketing.",
  keywords: [
    "Visivine",
    "creative agency",
    "branding studio",
    "web development",
    "digital marketing",
    "videography",
    "photography",
  ],
  openGraph: {
    title: "Visivine — Creative Ideas. Digital Impact.",
    description:
      "A creative digital hub helping brands grow through branding, content, web development, and digital marketing.",
    url: siteUrl,
    siteName: "Visivine",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Visivine" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Visivine — Creative Ideas. Digital Impact.",
    description:
      "A creative digital hub helping brands grow through branding, content, web development, and digital marketing.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Visivine",
  url: siteUrl,
  description:
    "Creative digital hub offering branding, design, content, videography, and web development services.",
  sameAs: [
    "https://instagram.com/visivine",
    "https://linkedin.com/company/visivine",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${inter.variable} ${jetbrainsMono.variable} dark`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body bg-bg text-white antialiased selection:bg-primary selection:text-bg">
        {children}
      </body>
    </html>
  );
}
