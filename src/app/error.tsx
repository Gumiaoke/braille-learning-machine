"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { DotCharacter } from "@/components/dot/DotCharacter";
import { Button } from "@/components/shared/Button";
import { RefreshCw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#F7FBFF] p-4">
      <DotCharacter expression="thinking" size="lg" withFloat />
      <h1 className="text-2xl font-bold text-[#1F2937] mt-6 mb-2">
        出了点问题
      </h1>
      <p className="text-[#6B7280] mb-6 text-center max-w-md">
        页面加载遇到了一些困难，点点正在努力解决中...
      </p>
      <Button variant="primary" onClick={reset} className="gap-2">
        <RefreshCw className="w-4 h-4" />
        刷新试试
      </Button>
    </div>
  );
}
