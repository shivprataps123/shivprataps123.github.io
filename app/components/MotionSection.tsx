"use client";

import { motion } from "framer-motion";

type MotionSectionProps = {
  children: React.ReactNode;
};

export default function MotionSection({ children }: MotionSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}
