import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import React from "react";
import AnimatedUnderline from "@/components/ui/animated-underline";
import { Code2 } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    //<HeroHighlight>
    <section className="flex flex-col items-center justify-center h-full w-full">
      <div className="flex flex-col items-center">
        <div className="flex flex-row items-center">
          <Code2 size={70} />
          <h1 className="text-5xl font-bold text-foreground p-5">CompoGen</h1>
        </div>
        <p className="pt-10 text-lg text-gray-600 dark:text-gray-200 max-w-xl mx-auto">
          Transform your ideas into stunning, responsive UI components with just
          a few words. Powered by <AnimatedUnderline>React</AnimatedUnderline>,{" "}
          <AnimatedUnderline delay={1.9}>Tailwind</AnimatedUnderline> and{" "}
          <AnimatedUnderline delay={2.6}>OpenAI</AnimatedUnderline>, CompoGen
          helps you design, generate, and preview professional-grade components
          effortlessly.
        </p>
      </div>
    </section>
    //</HeroHighlight>
  );
};

export default HeroSection;
