import React from "react";

const CompoGen: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-black">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
        CompoGen
      </h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 text-center mb-6">
        This is a responsive and accessible React component using TailwindCSS.
      </p>
      <img
        src="https://via.placeholder.com/150"
        alt="Placeholder"
        className="rounded-lg shadow-lg mb-6"
      />
      <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800">
        Click Me
      </button>
    </div>
  );
};

export default CompoGen;
