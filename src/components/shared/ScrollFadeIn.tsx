"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/styles/animations";
import type { ReactNode } from "react";

interface ScrollFadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  duration?: number;
}

export function ScrollFadeIn({
  children,
  delay = 0,
  className,
  duration = 0.6,
}: ScrollFadeInProps) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration,
            delay,
            ease: [0.25, 0.46, 0.45, 0.94],
          },
        },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
    >
      {children}
    </motion.div>
  );
}
