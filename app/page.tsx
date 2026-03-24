"use client";
import { Footer } from "@/components/layouts/footer";
import { Header } from "@/components/layouts/header";
import { AboutUs } from "@/components/sections/landing-page/about-us";
import { Hero } from "@/components/sections/landing-page/hero";
import { VisionMission } from "@/components/sections/landing-page/vision-mission";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="min-h-screen">
        <Hero />
        <VisionMission />
        <AboutUs />
      </main>
      <Footer />
    </div>
  );
}
