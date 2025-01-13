"use client";
import { ButtonBorder } from "@/components/ui/moving-border";
import React, { FormEvent, useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import HeroSection from "../../components/GenerateHero";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import { Sandpack } from "@codesandbox/sandpack-react";
import { useTheme } from "next-themes";
import Footer from "@/components/Footer";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { Textarea } from "@/components/ui/textarea";
import { Download, Save, SaveAll } from "lucide-react";
import { SaveModal } from "@/components/SaveModal";
import ShowSavedCodesModal from "@/components/ShowSavedCodesModal";

const Page = () => {
  const [submitted, setSubmitted] = useState(false);
  const { theme } = useTheme();
  const [response, setResponse] = useState<string>("");
  const [fileName, setFileName] = useState<string>("");
  const [componentName, setComponentName] = useState<string>("");
  const [language, setLanguage] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [defaultText, setDefaultText] = useState<string>(
    "Generate a hero section with title and subtitle"
  );

  const saveToLocalStorage = () => {
    localStorage.setItem("Code", response);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    setLoading(true);
    setDefaultText("");

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

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt, action }),
      });

      const data = await res.json();

      setResponse(data.formattedCode);
      if (
        response === undefined ||
        response === null ||
        response.includes("Please provide a valid prompt")
      ) {
        setError(true);
        setResponse("Error: Please provide a valid prompt");
      }
      setLanguage(data.language);
      setFileName(data.fileName);
      setComponentName(data.componentName);
    } catch (error) {
      setResponse("Error: " + error);
    } finally {
      setLoading(false);
    }
  };

  console.log("Code: \n", response);

  const words = [
    {
      text: "Generating...",
    },
  ];

  return (
    <div className="flex flex-col overflow-x-hidden">
      <Navbar />
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
                    <div className="p-4 max-w-screen-xl">
                      <div className="flex flex-row items-center justify-between">
                        {response !== "" && error === false && (
                          <div className="flex flex-row items-center gap-x-4 w-max m-4">
                            <SaveModal codeToSave={response} />
                            <a
                              href={`data:text/javascript;charset=utf-8,${encodeURIComponent(
                                response
                              )}`}
                              download={`${fileName}`}
                              title="Download Code"
                            >
                              <Download className="w-6 h-6" />
                            </a>
                          </div>
                        )}
                        {localStorage.length > 0 && (
                          <div
                            className="cursor-pointer"
                            title="Show all saved codes"
                          >
                            <ShowSavedCodesModal />
                          </div>
                        )}
                      </div>

                      <Sandpack
                        theme={theme === "dark" ? "dark" : "light"}
                        template="react"
                        files={{
                          [fileName]: {
                            code: response,
                            active: true,
                          },
                          "/App.js": {
                            code: `import React from "react";\nimport ${componentName} from "./${fileName}";\n\nexport default function App() {\n  return <${componentName} />;\n
}`,
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
            <div className="fixed bottom-16 left-1/2 transform -translate-x-1/2 w-full max-w-sm sm:max-w-md md:max-w-lg rounded bg-background p-2">
              <form
                onSubmit={handleSubmit}
                className="flex flex-row items-center justify-center mb-1 w-full"
              >
                <Textarea
                  name="prompt"
                  className=" "
                  placeholder={
                    submitted && !loading
                      ? "Change the colour of the button to red OR Generate a hero section with title and subtitle"
                      : "Generate a hero section with title and subtitle"
                  }
                  defaultValue={defaultText}
                />
                {submitted && !loading && (
                  <ButtonBorder name="action" value="update">
                    Update
                  </ButtonBorder>
                )}
                <ButtonBorder name="action" value="generate">
                  Send
                </ButtonBorder>
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
