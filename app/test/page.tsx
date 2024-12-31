import { ToggleTheme } from "@/components/ToggleTheme";
import React from "react";

const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      {/* Navbar */}
      <nav className="flex items-center justify-between p-4 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-700">
        <div className="text-xl font-bold text-gray-800 dark:text-white">
          Logo
        </div>
        <ToggleTheme />
        <div className="space-x-4">
          <a
            href="#"
            className="text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
          >
            Home
          </a>
          <a
            href="#"
            className="text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
          >
            About
          </a>
          <a
            href="#"
            className="text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
          >
            Contact
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex-grow flex flex-col items-center justify-center bg-gray-100 dark:bg-black text-center p-8">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
          Welcome to Our Landing Page
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Your success starts here. Join us in making a difference.
        </p>
      </section>

      {/* Footer */}
      <footer className="p-4 bg-white dark:bg-black border-t border-gray-200 dark:border-gray-700 text-center">
        <p className="text-gray-600 dark:text-gray-300">
          © 2023 Your Company. All rights reserved.
        </p>
        <p className="text-gray-600 dark:text-gray-300">
          Privacy Policy | Terms of Service
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;
