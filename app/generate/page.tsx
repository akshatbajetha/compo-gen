"use client";
import { ButtonBorder } from "@/components/ui/moving-border";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import React, { FormEvent, Suspense, useEffect, useState } from "react";
import Navbar from "../Navbar";
import HeroSection from "../HeroSection";
import { CodeIcon, CopyCheck, CopyIcon, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { CodeBlock } from "@/components/ui/code-block";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import LoadingPage from "@/components/LoadingPage";
import { Sandpack } from "@codesandbox/sandpack-react";
import { useTheme } from "next-themes";
import Footer from "@/components/Footer";

const Page = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const { theme } = useTheme();
  const [response, setResponse] = useState<string>("");
  const [fileName, setFileName] = useState<string>("");
  const [componentName, setComponentName] = useState<string>("");
  const [language, setLanguage] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [defaultText, setDefaultText] = useState<string>(
    "Generate a hero section with title and subtitle"
  );
  const [activeTab, setActiveTab] = useState<"code" | "preview">("code");
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    setLoading(true);
    setDefaultText("");

    const formData = new FormData(event.currentTarget);
    const prompt = formData.get("prompt") as string;

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });

      const data = await res.json();

      setResponse(data.result);
      if (response.includes("Please provide a valid prompt")) {
        return;
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
  console.log(response);

  const formattedCode = response.replace(
    /```typescript\n|```javascript\n|```tsx\n|```jsx\n|```\n|```$/g,
    ""
  );

  // console.log(response);

  return (
    <>
      <div className="flex flex-col min-h-screen overflow-x-hidden">
        <Navbar />
        <div className="flex-1 flex flex-col items-center justify-center">
          <HeroHighlight containerClassName="flex-1 w-full">
            <div className="w-screen flex justify-center items-center ">
              {submitted ? (
                <div className="py-12 flex justify-center items-center flex-col">
                  {loading ? (
                    <div className="flex justify-center items-center h-full w-full">
                      <Loader2 className="animate-spin" />
                    </div>
                  ) : (
                    <div className="p-4">
                      <Sandpack
                        theme={theme === "dark" ? "dark" : "light"}
                        template="react"
                        files={{
                          [fileName]: {
                            code: formattedCode,
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
            <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 mb-4 w-full max-w-sm sm:max-w-md md:max-w-lg bg-background p-2 rounded-md z-50">
              <form
                onSubmit={handleSubmit}
                className="flex flex-row items-center justify-center mb-1 w-full"
              >
                <textarea
                  name="prompt"
                  className="w-full mr-2 p-2 border border-gray-300 rounded resize-none overflow-hidden focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Generate a hero section with title and subtitle"
                  onChange={(e) => setDefaultText(e.target.value)}
                  rows={1}
                  onInput={(e) => {
                    const target = e.target as HTMLTextAreaElement;
                    target.style.height = "auto";
                    target.style.height = `${target.scrollHeight}px`;
                  }}
                />

                <ButtonBorder type="submit">Send</ButtonBorder>
              </form>
            </div>
          </HeroHighlight>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;
