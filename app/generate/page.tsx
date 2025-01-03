"use client";
import { ButtonBorder } from "@/components/ui/moving-border";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import React, { FormEvent, useEffect, useState } from "react";
import Navbar from "../Navbar";
import HeroSection from "../HeroSection";
import { CodeIcon, CopyCheck, CopyIcon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { CodeBlock } from "@/components/ui/code-block";
import { HeroHighlight } from "@/components/ui/hero-highlight";

const Page = async () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [response, setResponse] = useState<string>("");
  const [fileName, setFileName] = useState<string>("");
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
      console.log(data);

      setResponse(data.result);
      setFileName(data.fileName);
      setLanguage(data.language);
    } catch (error) {
      setResponse("Error: " + error);
    } finally {
      setLoading(false);
    }
  };
  const formattedCode = response.replace(
    /```typescript\n|```javascript\n|```tsx\n|```$/g,
    ""
  );

  // console.log(response);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1 flex">
        <div className="w-1/3 min-h-full p-6 flex flex-col justify-between">
          <div className="w-full h-5/6 flex justify-center items-center">
            <h1 className="text-2xl">Login to save the chats</h1>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-row items-center justify-center mb-1 w-full"
          >
            <Input
              type="text"
              name="prompt"
              className="w-full mr-2"
              placeholder="Enter text here"
              value={defaultText}
              onChange={(e) => setDefaultText(e.target.value)}
            />

            <ButtonBorder type="submit">Send</ButtonBorder>
          </form>
        </div>
        <Separator orientation="vertical" />
        <div className="w-2/3 min-h-full flex justify-center items-center">
          <HeroHighlight containerClassName="h-full w-full">
            {submitted ? (
              <div className="py-12 flex justify-center items-center flex-col h-full">
                {loading ? (
                  <div className="inline-block w-8 h-8 border-4 rounded-full">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                ) : (
                  <div className="p-4 h-full">
                    <div className="flex mb-4">
                      <Button
                        className={`mr-1 py-2 rounded ${
                          activeTab === "code"
                            ? "bg-foreground text-background"
                            : "bg-background hover:bg-foreground hover:text-background text-foreground"
                        }`}
                        onClick={() => setActiveTab("code")}
                      >
                        <CodeIcon />
                        Code
                      </Button>
                      <Button
                        className={`ml-1 py-2 rounded ${
                          activeTab === "preview"
                            ? "bg-foreground text-background"
                            : "bg-background hover:bg-foreground hover:text-background text-foreground"
                        }`}
                        onClick={() => setActiveTab("preview")}
                      >
                        Preview
                      </Button>
                    </div>
                    {activeTab === "code" ? (
                      <pre className="max-w-3xl text-sm text-gray-800 overflow-x-auto flex flex-row justify-between text-wrap">
                        <CodeBlock
                          language={language}
                          code={formattedCode}
                          filename={fileName}
                        />
                      </pre>
                    ) : (
                      <div className="max-w-3xl text-sm text-gray-800 overflow-x-auto flex flex-row justify-between text-wrap">
                        <div className="w-[900px] h-[450px] border-2 border-red-500"></div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ) : (
              <HeroSection />
            )}
          </HeroHighlight>
        </div>
      </div>
    </div>
  );
};

export default Page;
