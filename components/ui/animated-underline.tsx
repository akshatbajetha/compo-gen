import { motion } from "framer-motion";

interface AnimatedUnderlineProps {
  delay?: number;
  children: React.ReactNode;
  color?: string;
}

const AnimatedUnderline: React.FC<AnimatedUnderlineProps> = ({
  delay = 1.2,
  children,
}) => {
  return (
    <span className="relative inline-block">
      <span>{children}</span>
      <motion.span
        className="absolute left-0 bottom-0 w-full h-1 bg-blue-500"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 1, ease: "easeInOut", delay }}
      />
    </span>
  );
};

export default AnimatedUnderline;
