"use client";

import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import type { DotExpression } from "@/types/dot";
import { DotCharacter } from "./DotCharacter";

interface DotBubbleProps {
  text: string;
  expression?: DotExpression;
  position?: "left" | "right" | "top";
  className?: string;
}

export function DotBubble({
  text,
  expression = "happy",
  position = "right",
  className,
}: DotBubbleProps) {
  const positionClasses = {
    left: "flex-row",
    right: "flex-row-reverse",
    top: "flex-col",
  };

  const bubbleAlign = {
    left: "mr-2",
    right: "ml-2",
    top: "mt-2",
  };

  return (
    <motion.div
      className={cn(
        "flex items-center gap-2",
        positionClasses[position],
        className
      )}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
    >
      <DotCharacter expression={expression} size="sm" />
      <div
        className={cn(
          "bg-white rounded-2xl px-4 py-2 text-sm text-[#1F2937] shadow-lg border border-[#AEE3FF]/50 max-w-[200px]",
          bubbleAlign[position]
        )}
      >
        <p className="leading-relaxed">{text}</p>
      </div>
    </motion.div>
  );
}
