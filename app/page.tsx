"use client";
import { Footer } from "@/components/layouts/footer";
import { Header } from "@/components/layouts/header";
import { AboutUs } from "@/components/sections/landing-page/about-us";
import { ClientsPartners } from "@/components/sections/landing-page/client-partners";
import { Hero } from "@/components/sections/landing-page/hero";
import { Services } from "@/components/sections/landing-page/services";
import { Values } from "@/components/sections/landing-page/values";
import { VisionMission } from "@/components/sections/landing-page/vision-mission";
import { WhyChooseUs } from "@/components/sections/landing-page/why-choose-us";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="min-h-screen">
        <Hero />
        <VisionMission />
        <AboutUs />
        <Services />
        <WhyChooseUs />
        <ClientsPartners />
        <Values />
      </main>
      <Footer />
    </div>
  );
}
