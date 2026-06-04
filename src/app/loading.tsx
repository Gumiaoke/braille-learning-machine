"use client";

import { motion } from "framer-motion";
import { DotCharacter } from "@/components/dot/DotCharacter";

export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#F7FBFF]">
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <DotCharacter expression="happy" size="lg" />
      </motion.div>
      <motion.p
        className="mt-6 text-[#6B7280] text-lg"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        马上就好...
      </motion.p>
    </div>
  );
}
