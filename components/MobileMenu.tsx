"use client";
import { X as CrossIcon } from "lucide-react";
import { HelpModal } from "./HelpModal";
import { Github, X } from "iconoir-react";

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function MobileMenu({ isOpen, setIsOpen }: MobileMenuProps) {
  return (
    <div
      className={`fixed inset-0 z-50 md:hidden ${
        isOpen ? "visible" : "invisible"
      }`}
    >
      <div
        className={`fixed inset-0 bg-black/20 backdrop-blur-sm dark:bg-slate-900/80 transition-opacity duration-300 ease-in-out ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>
      <div
        className={`fixed top-0 right-0 w-full max-w-xs bg-background p-6 h-full shadow-xl transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-foreground">Menu</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-md text-foreground hover:text-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white transition-colors duration-200"
          >
            <span className="sr-only">Close menu</span>
            <CrossIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <nav className="flex flex-col space-y-4">
          <HelpModal />
          <a
            className="flex items-center"
            href="https://github.com/akshatbajetha/compo-gen"
            target="_blank"
          >
            <Github className="w-6 h-6" />
            <p className="pl-2 font-semibold">Github</p>
          </a>
          <a
            className="flex items-center"
            href="https://x.com/akshatbajetha/"
            target="_blank"
          >
            <X className="w-6 h-6" />
            <p className="pl-2 font-semibold">Twitter</p>
          </a>
        </nav>
      </div>
    </div>
  );
}
