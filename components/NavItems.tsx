"use client";
import Link from "next/link";
import { ToggleTheme } from "./ToggleTheme";
import { useState } from "react";
import LogoutForm from "./LogoutForm";

function NavItems() {
  const [isOpen, setIsOpen] = useState(false);

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

        <Link
          href="/login"
          className="flex items-center text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-500"
        >
          Login
        </Link>
        <LogoutForm />
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
          <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg z-10">
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

            <Link
              href="/login"
              className="block px-4 py-2 text-gray-800 dark:text-white"
            >
              Login
            </Link>
            <LogoutForm />
          </div>
        )}
      </div>
    </>
  );
}
export default NavItems;
