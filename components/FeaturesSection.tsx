import { Code, Zap, Eye, Palette } from "lucide-react";

function FeaturesSection() {
  return (
    <section className="w-full py-20 ">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 dark:text-gray-300 mb-16">
          Why Choose CompoGen?
        </h2>

        <div className="flex items-center justify-center flex-col md:flex-row gap-8 ">
          <FeatureCard
            icon={<Code className="w-10 h-10" />}
            title="AI Code Generation"
            description="Generate React components with intelligent defaults and best practices built-in."
          />
          <FeatureCard
            icon={<Zap className="w-10 h-10" />}
            title="Lightning Fast"
            description="Create components in seconds, not minutes. Speed up your development workflow."
          />
          <FeatureCard
            icon={<Eye className="w-10 h-10" />}
            title="Live Preview"
            description="See your components in action as you create them with real-time previews."
          />
          <FeatureCard
            icon={<Palette className="w-10 h-10" />}
            title="Customizable"
            description="Tailor components to your needs with real-time code editor."
          />
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-center p-6 border-2 border-foreground rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 w-[20vw] h-[30vh]">
      <div className="text-primary mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-800 dark:text-gray-300 mb-2">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 text-center">
        {description}
      </p>
    </div>
  );
}

export default FeaturesSection;
