import Link from "next/link";
import AnimatedUnderline from "./ui/animated-underline";
import { Button } from "./ui/button";
import { Highlight } from "./ui/hero-highlight";

function LandingHero() {
  return (
    <section className="z-10 flex items-center justify-center w-full h-full  text-center p-4">
      <div className="max-w-2xl">
        <h1 className="text-7xl font-bold text-foreground">CompoGen</h1>
        <p className="pt-14 text-3xl text-gray-600 dark:text-gray-300">
          Generate and preview React components quickly and easily.
        </p>
        <Link href="/generate">
          <Button className="mt-10 h-14 bg-foreground text-md font-bold text-background hover:bg-background hover:text-foreground">
            Get Started 🚀
          </Button>
        </Link>
      </div>
    </section>
  );
}
export default LandingHero;
