import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import React from "react";
import AnimatedUnderline from "@/components/ui/animated-underline";
import { Code2 } from "lucide-react";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

const HeroSection: React.FC = () => {
  // Describe the component you want to generate and we'll do the rest.
  const words = [
    {
      text: "Describe the component you want to generate and we'll do the rest.",
    },
  ];
  return (
    <section className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center">
        <div className="flex flex-row items-center">
          <Code2 size={70} />
          <h1 className="text-5xl font-bold text-foreground p-5">CompoGen</h1>
        </div>
        <TypewriterEffectSmooth words={words} />
      </div>
    </section>
  );
};

export default HeroSection;
