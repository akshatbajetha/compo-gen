"use client";
import LandingHero from "@/components/LandingHero";
import { HeroHighlight } from "./ui/hero-highlight";

function LandingPage() {
  return (
    <HeroHighlight containerClassName="h-full">
      <LandingHero />
    </HeroHighlight>
  );
}
export default LandingPage;
