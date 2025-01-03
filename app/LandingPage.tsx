"use client";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import Navbar from "./Navbar";
import LandingHero from "@/components/LandingHero";

function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <HeroHighlight containerClassName="flex-1">
        <LandingHero />
      </HeroHighlight>
    </div>
  );
}
export default LandingPage;
