import React from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-white dark:bg-black">
      <div className="flex items-center">
        <img src="/favicon.ico" alt="Logo" className="h-8 w-8" />
      </div>
      <div className="hidden md:flex space-x-4">
        <Link
          href="/"
          className="text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition"
        >
          About
        </Link>
        <Link
          href="/contact"
          className="text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
