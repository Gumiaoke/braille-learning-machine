import { cn } from "@/utils/cn";
import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "primary" | "functional" | "outline";
  className?: string;
}

const variantClasses = {
  primary: "bg-[#AEE3FF]/40 text-[#1F2937]",
  functional: "bg-[#FFB84D]/20 text-[#D97706]",
  outline: "border border-[#5BC8FF]/40 text-[#5BC8FF]",
};

export function Badge({
  children,
  variant = "primary",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 text-sm font-medium rounded-full",
        variantClasses[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
