import React from "react";
import { Code2 } from "lucide-react";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

const GenerateHero: React.FC = () => {
  const words = [
    {
      text: "Describe the component you want to generate and we'll do the rest.",
    },
  ];
  return (
    <section className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center">
        <div className="flex flex-row items-center">
          <Code2 className="md:w-20 md:h-20 w-10 h-10" />
          <h1 className="md:text-5xl text-2xl font-bold text-foreground md:p-5 p-3">
            CompoGen
          </h1>
        </div>
        <TypewriterEffectSmooth words={words} />
      </div>
    </section>
  );
};

export default GenerateHero;
