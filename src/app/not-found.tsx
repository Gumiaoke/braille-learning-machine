"use client";

import { motion } from "framer-motion";
import { DotCharacter } from "@/components/dot/DotCharacter";
import { Button } from "@/components/shared/Button";
import Link from "next/link";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#F7FBFF] p-4">
      <motion.div
        animate={{ y: [0, -10, 0], rotate: [0, -5, 5, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <DotCharacter expression="curious" size="lg" />
      </motion.div>
      <h1 className="text-6xl font-bold text-[#5BC8FF] mt-6 mb-2">404</h1>
      <p className="text-xl text-[#1F2937] font-medium mb-2">
        这里什么都没有...
      </p>
      <p className="text-[#6B7280] mb-8 text-center max-w-md">
        点点也找不到这个页面，也许它躲到盲文星球去了？
      </p>
      <Link href="/">
        <Button variant="primary" size="lg" className="gap-2">
          <Home className="w-4 h-4" />
          返回首页
        </Button>
      </Link>
    </div>
  );
}
