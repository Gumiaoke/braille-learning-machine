"use client";

import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import { cardHover } from "@/styles/animations";
import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
}

const paddingClasses = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

export function Card({
  children,
  className,
  hover = true,
  padding = "md",
}: CardProps) {
  return (
    <motion.div
      className={cn(
        "bg-white rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.06)]",
        paddingClasses[padding],
        className
      )}
      whileHover={hover ? cardHover : undefined}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
