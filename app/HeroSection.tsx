import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="flex items-center justify-center min-h-screen bg-white dark:bg-black px-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
          Your Amazing Title
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
          This is a stunning subtitle that captures the essence of your product
          or service. Use this space to communicate your value proposition
          effectively.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
