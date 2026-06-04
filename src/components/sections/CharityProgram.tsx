"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Heart, GraduationCap, Users } from "lucide-react";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/shared/Button";
import { DotCharacter } from "@/components/dot/DotCharacter";
import { charityStats, charityDescription } from "@/data/charity";
import { cn } from "@/utils/cn";

function useCountUp(target: number, duration: number, startCounting: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startCounting) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [target, duration, startCounting]);

  return count;
}

function ImpactStat({
  icon: Icon,
  value,
  suffix,
  label,
  startCounting,
}: {
  icon: React.ComponentType<{ className?: string }>;
  value: number;
  suffix: string;
  label: string;
  startCounting: boolean;
}) {
  const count = useCountUp(value, 2000, startCounting);

  return (
    <div className="text-center p-6">
      <Icon className="w-8 h-8 text-[#5BC8FF] mx-auto mb-3" />
      <div className="text-3xl lg:text-4xl font-bold text-[#1F2937] mb-1">
        {count.toLocaleString()}
        <span className="text-[#5BC8FF]">{suffix}</span>
      </div>
      <p className="text-sm text-[#6B7280]">{label}</p>
    </div>
  );
}

export function CharityProgram() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const progressPercent = Math.round(
    (charityStats.campaignProgress / charityStats.campaignGoal) * 100
  );

  return (
    <SectionWrapper id="charity" background="gradient">
      <div ref={ref}>
        <SectionHeading
          title={charityDescription.title}
          subtitle={charityDescription.subtitle}
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Stats */}
          <div>
            <div className="grid grid-cols-3 gap-4 mb-8">
              <ImpactStat
                icon={Heart}
                value={charityStats.devicesDonated}
                suffix="+"
                label="已捐赠设备"
                startCounting={isVisible}
              />
              <ImpactStat
                icon={GraduationCap}
                value={charityStats.schoolsReached}
                suffix="所"
                label="覆盖学校"
                startCounting={isVisible}
              />
              <ImpactStat
                icon={Users}
                value={charityStats.childrenImpacted}
                suffix="名"
                label="受益儿童"
                startCounting={isVisible}
              />
            </div>

            {/* Progress bar */}
            <div className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-[#1F2937]">
                  公益目标达成
                </span>
                <span className="text-sm font-bold text-[#5BC8FF]">
                  {progressPercent}%
                </span>
              </div>
              <div className="h-3 bg-[#AEE3FF]/30 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#5BC8FF] to-[#FFB84D] rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: isVisible ? `${progressPercent}%` : 0 }}
                  transition={{
                    duration: 1.5,
                    ease: [0.25, 0.46, 0.45, 0.94],
                    delay: 0.5,
                  }}
                />
              </div>
              <p className="text-xs text-[#9CA3AF] mt-2">
                目标：{charityStats.campaignGoal.toLocaleString()} 套学习资源
              </p>
            </div>
          </div>

          {/* Right — Description + CTA */}
          <div>
            <p className="text-[#6B7280] leading-relaxed mb-6">
              {charityDescription.description}
            </p>
            <Button variant="outline" size="lg" href="#">
              {charityDescription.cta}
            </Button>

            <div className="flex justify-center mt-8">
              <DotCharacter expression="celebrating" size="md" withFloat />
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
