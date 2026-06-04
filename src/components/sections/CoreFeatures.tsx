"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mic,
  BookOpen,
  Volume2,
  Gamepad2,
  Heart,
  BarChart3,
} from "lucide-react";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { DotBubble } from "@/components/dot/DotBubble";
import { features } from "@/data/features";
import type { DotExpression } from "@/types/dot";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Mic,
  BookOpen,
  Volume2,
  Gamepad2,
  Heart,
  BarChart3,
};

export function CoreFeatures() {
  const [activeFeature, setActiveFeature] = useState<string | null>(null);

  return (
    <SectionWrapper id="features" background="white">
      <SectionHeading
        title="六大核心功能"
        subtitle="从语音交互到AI陪伴，全方位支持视障儿童的学习与成长"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {features.map((feature, index) => {
          const Icon = iconMap[feature.icon];
          const isActive = activeFeature === feature.id;

          return (
            <motion.div
              key={feature.id}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              onMouseEnter={() => setActiveFeature(feature.id)}
              onMouseLeave={() => setActiveFeature(null)}
              onFocus={() => setActiveFeature(feature.id)}
              onBlur={() => setActiveFeature(null)}
            >
              <motion.div
                className="relative bg-white rounded-3xl p-6 lg:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-transparent hover:border-[#AEE3FF]/50 cursor-default h-full"
                whileHover={{ scale: 1.03, y: -4 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                tabIndex={0}
                role="article"
                aria-label={feature.title}
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#AEE3FF]/40 to-[#5BC8FF]/20 flex items-center justify-center mb-5">
                  <Icon className="w-7 h-7 text-[#5BC8FF]" />
                </div>

                <h3 className="text-xl font-bold text-[#1F2937] mb-3">
                  {feature.title}
                </h3>
                <p className="text-[#6B7280] leading-relaxed text-sm">
                  {feature.description}
                </p>

                {/* Dot tooltip on hover */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      className="absolute -top-16 right-4 z-10"
                      initial={{ opacity: 0, y: 10, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                    >
                      <DotBubble
                        text={feature.dotTooltip}
                        expression={feature.dotExpression}
                        position="top"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Subtle indicator that there's more info */}
                <div className="absolute bottom-4 right-4">
                  <div className="w-2 h-2 rounded-full bg-[#AEE3FF] opacity-50" />
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
