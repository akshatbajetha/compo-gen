"use client";
import { Separator } from "@/components/ui/separator";
import LandingHero from "@/components/LandingHero";
import FeaturesSection from "@/components/FeaturesSection";
import CTASection from "@/components/CTASection";
import { Particles } from "@/components/magicui/particles";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

function Page() {
  const { resolvedTheme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(resolvedTheme === "dark" ? "#ffffff" : "#000000");
  }, [resolvedTheme]);
  return (
    <div className="flex flex-col min-h-screen">
      <LandingHero />
      <Separator />
      <FeaturesSection />
      <Separator />
      <CTASection />
      <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        ease={80}
        color={color}
        refresh
      />
    </div>
  );
}
export default Page;
