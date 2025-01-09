"use client";
import Link from "next/link";
import { ToggleTheme } from "./ToggleTheme";
import { useState } from "react";
import GithubDark from "@/public/images/githubDark.png";
import GithubLight from "@/public/images/githubLight.png";
import BuyMeACoffee from "@/public/images/bmc.png";
import Image from "next/image";
import { useTheme } from "next-themes";

function NavItems() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="hidden md:flex space-x-4">
        <ToggleTheme />
        <Link
          href="/"
          className="flex items-center text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-500"
        >
          Home
        </Link>
        <Link
          href="/generate"
          className="flex items-center text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-500"
        >
          Generate
        </Link>
        <a
          className="flex items-center"
          href="https://github.com/akshatbajetha/compo-gen"
          target="_blank"
        >
          <Image
            src={theme === "light" ? GithubLight : GithubDark}
            alt="github"
            className="w-6 h-6"
          />
        </a>
        <a
          className="flex items-center"
          href="https://buymeacoffee.com/akshatbajetha"
          target="_blank"
        >
          <Image src={BuyMeACoffee} alt="buymeacoffee" className="w-40 h-10" />
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
            <Link
              href="/"
              className="block px-4 py-2 text-gray-800 dark:text-white"
            >
              Home
            </Link>
            <Link
              href="/generate"
              className="block px-4 py-2 text-gray-800 dark:text-white"
            >
              Generate
            </Link>
            <a
              className="block px-4 py-2"
              href="https://github.com/akshatbajetha/compo-gen"
            >
              <Image
                src={theme === "dark" ? GithubDark : GithubLight}
                alt="github"
                className="w-6 h-6"
              />
            </a>
            <a
              className="block px-4 py-2"
              href="https://buymeacoffee.com/akshatbajetha"
            >
              <Image
                src={BuyMeACoffee}
                alt="buymeacoffee"
                className="w-40 h-10"
              />
            </a>
          </div>
        )}
      </div>
    </>
  );
}
export default NavItems;
