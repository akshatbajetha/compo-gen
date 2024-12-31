"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import Navbar from "./Navbar";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <BackgroundBeamsWithCollision className="flex-1 flex items-center justify-center">
        HOME
      </BackgroundBeamsWithCollision>
    </div>
  );
}
export default LandingPage;
