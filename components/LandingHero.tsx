import Link from "next/link";
import AnimatedUnderline from "./ui/animated-underline";
import { Button } from "./ui/button";
import { Highlight } from "./ui/hero-highlight";

function LandingHero() {
  return (
    <section className="z-10 flex items-center justify-center w-full h-full  text-center p-4">
      <div className="max-w-2xl">
        <Highlight className="text-7xl font-bold text-foreground mb-4">
          CompoGen
        </Highlight>
        <p className="pt-14 text-3xl text-gray-600 dark:text-gray-300">
          An All-in-One solution for developers to{" "}
          <AnimatedUnderline>generate</AnimatedUnderline> and{" "}
          <AnimatedUnderline>preview</AnimatedUnderline>{" "}
          <AnimatedUnderline>web components</AnimatedUnderline>{" "}
          <AnimatedUnderline>quickly</AnimatedUnderline> and{" "}
          <AnimatedUnderline>easily</AnimatedUnderline>.
        </p>
        <Link href="/generate">
          <Button className="mt-10 h-14 bg-foreground text-background hover:bg-background hover:text-foreground">
            Get Started 🚀
          </Button>
        </Link>
      </div>
    </section>
  );
}
export default LandingHero;
