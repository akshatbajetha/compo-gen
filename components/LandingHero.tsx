import Link from "next/link";
import { Button } from "./ui/button";
import { Code2 } from "lucide-react";

function LandingHero() {
  return (
    <section className="z-10 flex items-center justify-center w-full md:h-screen text-center md:p-4 p-2">
      <div className="md:max-w-2xl">
        <div className="flex flex-row items-center justify-center">
          <Code2 className="md:w-20 md:h-20 w-10 h-10" />
          <h1 className="md:text-7xl text-4xl font-bold text-foreground md:px-5 px-3">
            CompoGen
          </h1>
        </div>
        <p className="md:pt-14 pt-5 md:text-3xl text-lg text-gray-600 dark:text-gray-300">
          Generate and preview React components quickly and easily.
        </p>
        <Link href="/generate">
          <Button className="md:mt-10 h-14 mt-5 bg-foreground text-md font-bold text-background hover:bg-background hover:text-foreground">
            Get Started 🚀
          </Button>
        </Link>
      </div>
    </section>
  );
}
export default LandingHero;
