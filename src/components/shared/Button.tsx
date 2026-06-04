"use client";

import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import { buttonHover, buttonTap } from "@/styles/animations";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  className?: string;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-[#5BC8FF] text-white hover:bg-[#3ab8f5] shadow-lg shadow-[#5BC8FF]/25",
  secondary:
    "bg-[#FFB84D] text-white hover:bg-[#f0a830] shadow-lg shadow-[#FFB84D]/25",
  outline:
    "border-2 border-[#5BC8FF] text-[#5BC8FF] hover:bg-[#5BC8FF] hover:text-white",
  ghost: "text-[#1F2937] hover:bg-[#AEE3FF]/30",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm rounded-xl",
  md: "px-6 py-3 text-base rounded-2xl",
  lg: "px-8 py-4 text-lg rounded-2xl",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  className,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-2 focus-visible:outline-[#5BC8FF] focus-visible:outline-offset-2",
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={buttonHover}
        whileTap={buttonTap}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={classes}
      whileHover={buttonHover}
      whileTap={buttonTap}
      {...(props as React.ComponentPropsWithoutRef<typeof motion.button>)}
    >
      {children}
    </motion.button>
  );
}
