import type { Metadata } from "next";
import { Fraunces, DM_Mono, Plus_Jakarta_Sans } from "next/font/google";
import Providers from "./providers";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-mono",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plus-jakarta",
});

export const metadata: Metadata = {
  title: "Kelechi Apugo — Lead Frontend Engineer",
  description:
    "Portfolio of Kelechi Apugo, a product engineer based in Port Harcourt, Nigeria. Building scalable web applications at the intersection of design and engineering.",
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
      <body className="font-sans antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
