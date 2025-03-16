import Link from "next/link";
import { Button } from "./ui/button";
import { Code2 } from "lucide-react";

function LandingHero() {
  return (
    <section className="z-10 flex items-center justify-center w-full h-screen text-center md:p-4 p-2">
      <div className="md:max-w-2xl flex flex-col items-center justify-center">
        <div className="flex flex-row items-center justify-center">
          <Code2 className="md:w-20 md:h-20 w-10 h-10" />
          <h1 className="md:text-7xl text-4xl font-bold text-gray-800 dark:text-gray-300 md:px-5 px-3">
            CompoGen
          </h1>
        </div>
        <h2 className="md:pt-14 pt-5 md:text-3xl text-lg text-gray-800 dark:text-gray-300">
          Generate and preview React components quickly and easily.
        </h2>
        <Link href="/generate">
          <Button className="px-8 py-4 rounded-md text-center text-lg font-bold relative overflow-hidden flex justify-center group/modal-btn md:mt-10 h-14 mt-5 bg-foreground">
            <span className="group-hover/modal-btn:-translate-x-40 text-center transition duration-500">
              Generate
            </span>
            <div className="translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
              🚀
            </div>
          </Button>
        </Link>
      </div>
    </section>
  );
}
export default LandingHero;
