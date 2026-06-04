import { cn } from "@/utils/cn";
import type { ReactNode } from "react";

interface ScreenReaderOnlyProps {
  children: ReactNode;
  className?: string;
}

export function ScreenReaderOnly({ children, className }: ScreenReaderOnlyProps) {
  return <span className={cn("sr-only", className)}>{children}</span>;
}
