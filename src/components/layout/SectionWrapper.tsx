import { cn } from "@/utils/cn";
import type { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  id?: string;
  className?: string;
  background?: "white" | "light" | "gradient" | "none";
}

const backgroundClasses = {
  white: "bg-white",
  light: "bg-[#F7FBFF]",
  gradient: "bg-gradient-to-b from-[#F7FBFF] to-white",
  none: "",
};

export function SectionWrapper({
  children,
  id,
  className,
  background = "none",
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8",
        backgroundClasses[background],
        className
      )}
    >
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  );
}
