"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ToggleTheme } from "@/components/ToggleTheme";
import { Separator } from "@/components/ui/separator";
import React, { FormEvent, useState } from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";

const Page = () => {
  const [response, setResponse] = useState<string>("");
  let enteredPrompt = false;
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    enteredPrompt = true;
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
    } catch (error) {
      setResponse("Error: " + error);
    } finally {
      setLoading(false);
    }
  };
  const formattedCode = response.replace(/^```tsx\n|```$/g, "");
  console.log(formattedCode);

  return (
    <>
      <Navbar />
      <div className="flex h-screen">
        <div className="w-1/3 p-12 self-end">
          <form onSubmit={handleSubmit} className="flex flex-row mb-2">
            <Input
              type="text"
              name="prompt"
              className="w-full"
              placeholder="Enter text here"
              defaultValue="Generate a hero section with title and subtitle"
            />
            <Button type="submit" className="ml-2">
              Send
            </Button>
          </form>
        </div>
        <Separator orientation="vertical" />
        <div className="w-2/3 p-12 flex justify-center items-center">
          <div className="py-12 flex justify-center items-center flex-col">
            {loading ? (
              <div className="inline-block w-8 h-8 border-4 rounded-full">
                <span className="visually-hidden">Loading...</span>
              </div>
            ) : (
              <div className="p-4 bg-gray-50">
                <pre className="max-w-3xl text-sm text-gray-800 overflow-x-auto">
                  <code>{formattedCode}</code>
                </pre>
              </div>
            )}
          </div>
        </div>
        <ToggleTheme />
      </div>
    </>
  );
};

export default Page;
