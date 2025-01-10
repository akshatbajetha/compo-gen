import React from "react";
import { FaGithub, FaTwitter } from "react-icons/fa";

const CustomComponent: React.FC = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-white dark:bg-black shadow-md">
      <div className="flex items-center">
        <img
          src="https://via.placeholder.com/150"
          alt="Brand Logo"
          className="h-8 w-auto"
        />
      </div>
      <div className="flex space-x-4">
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
        >
          <FaTwitter size={24} />
        </a>
      </div>
    </nav>
  );
};

export default CustomComponent;
