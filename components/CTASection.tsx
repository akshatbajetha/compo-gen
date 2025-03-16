import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Code2 } from "lucide-react";
import { Github } from "iconoir-react";

function CTASection() {
  return (
    <section className="w-full py-24">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <Code2 className="w-16 h-16 mx-auto text-white mb-6" />

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Supercharge Your React Development?
          </h2>

          <p className="text-xl text-white/90 mb-10">
            Join hundreds of developers who are building components faster with
            CompoGen.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/generate">
              <Button className="px-8 py-4 rounded-md text-lg font-bold h-14 bg-foreground border-2 border-foreground">
                Start Generating
              </Button>
            </Link>

            <a
              href="https://github.com/akshatbajetha/compo-gen"
              target="_blank"
            >
              <Button
                variant="outline"
                className="px-8 py-4 rounded-md text-lg font-bold h-14 bg-transparent border-2 border-foreground text-white hover:bg-white/10 transition-colors"
              >
                <Github className="mr-2 h-5 w-5" />
                Star on GitHub
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTASection;
