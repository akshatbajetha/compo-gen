"use client";
import { ButtonBorder } from "@/components/ui/moving-border";
import React, { FormEvent, useState } from "react";
import HeroSection from "../../components/GenerateHero";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import { Sandpack } from "@codesandbox/sandpack-react";
import { useTheme } from "next-themes";
import Footer from "@/components/Footer";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { Textarea } from "@/components/ui/textarea";
import { Download } from "lucide-react";
import { SaveModal } from "@/components/SaveModal";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useCodeStore } from "@/store/codeStore";

const Page = () => {
  const [submitted, setSubmitted] = useState(false);
  const { theme } = useTheme();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { currentCode, setCurrentCode } = useCodeStore();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    setLoading(true);

    const formData = new FormData(event.currentTarget);
    const submitter = (event.nativeEvent as SubmitEvent).submitter;
    if (submitter && submitter instanceof HTMLButtonElement) {
      const { name, value } = submitter;
      if (name) {
        formData.append(name, value);
      }
    }
    const prompt = formData.get("prompt") as string;
    const action = formData.get("action") as string;

    if (action === "generate") {
      try {
        const res = await fetch("/api/generate", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ prompt }),
        });

        const data = await res.json();

        if (data.message) {
          setError(true);
        } else {
          setError(false);
        }
        setCurrentCode(data.formattedCode);
      } catch (error) {
        setError(true);
        console.log("Error: ", error);
      } finally {
        setLoading(false);
      }
    } else if (action === "update") {
      try {
        const res = await fetch("/api/update", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ prompt, currentCode }),
        });

        const data = await res.json();
        if (data.message) {
          setError(true);
          return;
        } else {
          setError(false);
        }
        setCurrentCode(data.formattedCode);
      } catch (error) {
        setError(true);
        console.log("Error: ", error);
      } finally {
        setLoading(false);
      }
    }
  };

  const words = [
    {
      text: "Generating...",
    },
  ];

  return (
    <div className="flex flex-col overflow-x-hidden">
      <div className="flex flex-col min-h-screen h-max overflow-hidden mt-16 w-screen">
        <div className="flex-1 flex flex-col items-center justify-center">
          <HeroHighlight containerClassName="flex-1 w-full">
            <div className="w-screen flex justify-center items-center ">
              {submitted ? (
                <div className="py-12 flex justify-center items-center flex-col">
                  {loading ? (
                    <div className="flex justify-center items-center h-full w-full">
                      <TypewriterEffectSmooth duration={0.5} words={words} />
                    </div>
                  ) : (
                    <div className="p-4 max-w-screen-2xl">
                      <div className="flex flex-row items-center justify-between">
                        {currentCode !== "" && error === false && (
                          <div className="flex flex-row items-center gap-x-4 w-max m-4">
                            <SaveModal codeToSave={currentCode} />
                            <a
                              href={`data:text/javascript;charset=utf-8,${encodeURIComponent(
                                currentCode
                              )}`}
                              download={`CustomComponent.jsx`}
                              title="Download Code"
                            >
                              <Download className="w-6 h-6" />
                            </a>
                          </div>
                        )}
                        <Link href="/savedcodes">
                          <Button className="text-background bg-foreground hover:text-foreground hover:bg-background">
                            Saved Codes
                          </Button>
                        </Link>
                      </div>

                      <Sandpack
                        theme={theme === "dark" ? "dark" : "light"}
                        template="react"
                        files={{
                          "/CustomComponent.jsx": {
                            code: error
                              ? "Error: Please provide a valid prompt"
                              : currentCode,
                            active: true,
                          },
                          "/App.js": {
                            code: `import React from "react";\nimport CustomComponent from "./CustomComponent.jsx";\n\nexport default function App() {\n  return <CustomComponent />;\n
}`,
                            hidden: true,
                          },
                        }}
                        options={{
                          externalResources: ["https://cdn.tailwindcss.com"],
                          editorHeight: 600,
                          wrapContent: true,
                          showLineNumbers: true,
                        }}
                      />
                    </div>
                  )}
                </div>
              ) : (
                <HeroSection />
              )}
            </div>
            <div className="fixed bottom-16 left-1/2 transform -translate-x-1/2 w-full max-w-sm sm:max-w-md md:max-w-lg rounded bg-background p-2 z-50">
              <form
                onSubmit={handleSubmit}
                className="flex flex-row items-center justify-center mb-1 w-full"
              >
                <Textarea
                  name="prompt"
                  className=" "
                  placeholder={
                    submitted && !loading && currentCode !== ""
                      ? "Change the colour of the button to red OR Generate a hero section with title and subtitle"
                      : "Generate a hero section with title and subtitle"
                  }
                />
                {!loading && currentCode !== "" && (
                  <ButtonBorder name="action" value="update">
                    Update
                  </ButtonBorder>
                )}
                {!loading && (
                  <ButtonBorder name="action" value="generate">
                    Send
                  </ButtonBorder>
                )}
              </form>
            </div>
          </HeroHighlight>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
