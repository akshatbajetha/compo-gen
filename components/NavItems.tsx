"use client";
import { ToggleTheme } from "./ToggleTheme";
import { useState } from "react";

import { X, Github } from "iconoir-react";

function NavItems() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="hidden md:flex space-x-4">
        <ToggleTheme />

        <a
          className="flex items-center"
          href="https://github.com/akshatbajetha/compo-gen"
          target="_blank"
        >
          <Github className="w-6 h-6" />
        </a>
        <a
          className="flex items-center"
          href="https://x.com/akshatbajetha/"
          target="_blank"
        >
          <X className="w-6 h-6" />
        </a>
      </div>
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-gray-800 dark:text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {isOpen && (
          <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg z-10 bg-background">
            <ToggleTheme />

            <a
              className="block px-4 py-2"
              href="https://github.com/akshatbajetha/compo-gen"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              className="flex items-center"
              href="https://x.com/akshatbajetha/"
              target="_blank"
            >
              <X className="w-6 h-6" />
            </a>
          </div>
        )}
      </div>
    </>
  );
}
export default NavItems;
