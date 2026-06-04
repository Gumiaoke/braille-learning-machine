"use client";

import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import { ap } from "@/utils/path";
import { dotFloatAnimation, dotCelebrate } from "@/styles/animations";
import type { DotExpression } from "@/types/dot";
import { dotSizeMap, expressionLabelMap } from "@/types/dot";

interface DotCharacterProps {
  expression?: DotExpression;
  size?: "sm" | "md" | "lg";
  withFloat?: boolean;
  className?: string;
}

// Sway animation on hover
const swayAnimation = {
  rotate: [0, -8, 8, -5, 5, 0],
  transition: {
    duration: 0.6,
    ease: "easeInOut" as const,
  },
};

export function DotCharacter({
  expression = "happy",
  size = "md",
  withFloat = false,
  className,
}: DotCharacterProps) {
  const pixelSize = dotSizeMap[size];
  const label = expressionLabelMap[expression];
  const isCelebrating = expression === "celebrating";

  const content = (
    <img
      src={ap("/images/hero/dot.webp")}
      alt={label}
      width={pixelSize}
      height={Math.round(pixelSize * 1.2)}
      className="object-contain drop-shadow-lg"
      style={{
        maxWidth: pixelSize,
        maxHeight: Math.round(pixelSize * 1.2),
      }}
    />
  );

  // For floating or celebrating, combine with hover sway
  if (isCelebrating || withFloat) {
    return (
      <motion.div
        className={cn("inline-block cursor-pointer", className)}
        role="img"
        aria-label={label}
        animate={
          isCelebrating
            ? dotCelebrate.animate
            : dotFloatAnimation.animate
        }
        whileHover={swayAnimation}
      >
        {content}
      </motion.div>
    );
  }

  // Static with hover sway only
  return (
    <motion.div
      className={cn("inline-block cursor-pointer", className)}
      role="img"
      aria-label={label}
      whileHover={swayAnimation}
    >
      {content}
    </motion.div>
  );
}
