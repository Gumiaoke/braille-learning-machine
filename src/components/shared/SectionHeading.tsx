"use client";

import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import { fadeInUp } from "@/styles/animations";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      className={cn(
        "mb-12 lg:mb-16",
        align === "center" ? "text-center" : "text-left",
        className
      )}
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F2937] mb-4 tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-[#6B7280] max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
