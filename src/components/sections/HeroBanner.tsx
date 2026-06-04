"use client";

import { motion } from "framer-motion";
import { ShoppingCart, ChevronDown } from "lucide-react";
import { Button } from "@/components/shared/Button";
import { Badge } from "@/components/shared/Badge";
import { DotCharacter } from "@/components/dot/DotCharacter";
import { ap } from "@/utils/path";
import { fadeInUp, fadeInLeft, fadeInRight } from "@/styles/animations";

export function HeroBanner() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="主页横幅"
    >
      {/* Background — sky blue gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#AEE3FF]/60 via-[#F7FBFF]/80 to-white" />

      {/* Background Braille dot pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-[#5BC8FF]/15 animate-braille-float"
            style={{
              width: `${Math.random() * 12 + 6}px`,
              height: `${Math.random() * 12 + 6}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${Math.random() * 4 + 4}s`,
            }}
          />
        ))}
      </div>

      {/* Cloud elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[
          { left: "5%", top: "15%", scale: 0.8, delay: "0s" },
          { left: "75%", top: "10%", scale: 1.2, delay: "5s" },
          { left: "40%", top: "25%", scale: 0.6, delay: "10s" },
        ].map((cloud, i) => (
          <motion.div
            key={i}
            className="absolute animate-cloud-drift"
            style={{
              left: cloud.left,
              top: cloud.top,
              scale: cloud.scale,
              animationDelay: cloud.delay,
            }}
          >
            <svg
              width="120"
              height="60"
              viewBox="0 0 120 60"
              fill="white"
              opacity="0.5"
            >
              <ellipse cx="40" cy="40" rx="35" ry="20" />
              <ellipse cx="70" cy="35" rx="40" ry="22" />
              <ellipse cx="55" cy="25" rx="30" ry="18" />
            </svg>
          </motion.div>
        ))}
      </div>

      {/* Soft glow effect */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] bg-[#5BC8FF]/10 rounded-full blur-3xl animate-glow-pulse pointer-events-none" />

      {/* Content */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-28 lg:py-32">
        <div className="grid lg:grid-cols-5 gap-4 lg:gap-6 items-center">
          {/* Left column — Text (2/5) */}
          <motion.div
            className="lg:col-span-2 text-center lg:text-left"
            variants={fadeInLeft}
            initial="hidden"
            animate="visible"
          >
            <Badge variant="functional" className="mb-6">
              全新上市
            </Badge>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#1F2937] leading-tight tracking-tight mb-4 sm:mb-6">
              让每一个孩子
              <br />
              <span className="text-[#5BC8FF]">都能触摸知识</span>
            </h1>
            <p className="text-lg sm:text-xl text-[#6B7280] mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              智能盲文学习机
              <br />
              为视障儿童打造更智能、更温暖的学习体验
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                variant="primary"
                size="lg"
                href="#shop"
                className="gap-2"
              >
                <ShoppingCart className="w-5 h-5" />
                立即购买
              </Button>
              <Button variant="outline" size="lg" href="#product">
                了解更多
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-8 mt-10 justify-center lg:justify-start text-sm text-[#9CA3AF]">
              <span>✓ 7天无理由退换</span>
              <span>✓ 2年质保</span>
              <span>✓ 免费配送</span>
            </div>
          </motion.div>

          {/* Right column — Product + Dot (3/5) */}
          <motion.div
            className="lg:col-span-3 relative flex items-center justify-center -translate-x-12 lg:-translate-x-28"
            variants={fadeInRight}
            initial="hidden"
            animate="visible"
          >
            {/* Product image */}
            <div className="relative w-full max-h-[65vh]">
              <motion.div
                className="w-full flex items-center justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: [0, -8, 0] }}
                transition={{
                  opacity: { duration: 0.8, ease: "easeOut" },
                  y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                }}
              >
                <img
                  src={ap("/images/hero-page/product.webp")}
                  alt="点点智能盲文学习机"
                  className="w-4/5 sm:w-3/5 h-auto max-h-[35vh] sm:max-h-[50vh] object-contain drop-shadow-[0_20px_40px_rgba(91,200,255,0.3)]"
                />
              </motion.div>
            </div>

            {/* Dot floating beside the product */}
            <motion.div
              className="absolute -right-6 -bottom-4 lg:-right-12 lg:-bottom-8"
              animate={{ y: [0, -15, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            >
              <DotCharacter
                expression="happy"
                size="lg"
                withFloat={false}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#9CA3AF]"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      >
        <span className="text-xs">向下滚动</span>
        <ChevronDown className="w-5 h-5" />
      </motion.div>
    </section>
  );
}
