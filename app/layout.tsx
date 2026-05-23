import type { Metadata } from "next";
import { Fraunces, DM_Mono, Plus_Jakarta_Sans } from "next/font/google";
import Providers from "./providers";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-mono",
  display: "swap",
  preload: false,
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://laviedegeorge.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Kelechi Apugo",
    template: "%s | Kelechi Apugo",
  },
  description:
    "Software Engineer specialising in frontend architecture and product engineering. Building scalable web applications at the intersection of design and engineering.",
  keywords: [
    "Kelechi Apugo",
    "Kelechi George Apugo",
    "Apugo George Kelechi",
    "Apugo Kelechi",
    "Frontend Engineer",
    "Software Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "Web Development",
    "UI Engineering",
    "Product Engineer",
  ],
  authors: [{ name: "Kelechi Apugo", url: siteUrl }],
  creator: "Kelechi Apugo",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Kelechi Apugo",
    title: "Kelechi Apugo — Software Engineer",
    description:
      "Software Engineer specialising in frontend architecture and product engineering. Building scalable web applications at the intersection of design and engineering.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Kelechi Apugo — Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kelechi Apugo — Software Engineer",
    description:
      "Software Engineer specialising in frontend architecture and product engineering.",
    creator: "@LaVieDeGEORGE",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Kelechi Apugo",
  url: siteUrl,
  jobTitle: "Software Engineer",
  sameAs: [
    "https://x.com/LaVieDeGEORGE",
    "https://github.com/laviedegeorge",
    "https://www.linkedin.com/in/kelechi-apugo-16729846",
  ],
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "Frontend Architecture",
    "Web Performance",
    "UI Engineering",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${fraunces.variable} ${dmMono.variable} ${plusJakarta.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
