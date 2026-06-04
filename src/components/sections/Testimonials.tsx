"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { DotBubble } from "@/components/dot/DotBubble";
import { testimonials } from "@/data/testimonials";
import { carouselSlide } from "@/styles/animations";

const reactionMessages: Record<string, string> = {
  happy: "看到大家的评价真开心！",
  encouraging: "继续加油！",
  celebrating: "太棒了！谢谢你的喜爱！",
};

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const goTo = useCallback(
    (next: number) => {
      setDirection(next > current ? 1 : -1);
      setCurrent(next);
    },
    [current]
  );

  const next = useCallback(() => {
    goTo((current + 1) % testimonials.length);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + testimonials.length) % testimonials.length);
  }, [current, goTo]);

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const testimonial = testimonials[current];

  return (
    <SectionWrapper id="testimonials" background="white">
      <SectionHeading
        title="用户心声"
        subtitle="来自家长、教师和机构的真实反馈，一起见证点点的成长力量"
      />

      <div className="max-w-3xl mx-auto">
        <div className="relative">
          {/* Main testimonial card */}
          <div className="min-h-[320px] flex items-center justify-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                className="w-full"
                custom={direction}
                variants={carouselSlide}
                initial="enter"
                animate="center"
                exit="exit"
              >
                <div className="bg-[#F7FBFF] rounded-3xl p-8 lg:p-10 text-center">
                  {/* Avatar placeholder */}
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#AEE3FF] to-[#5BC8FF] mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">
                    {testimonial.name[0]}
                  </div>

                  {/* Stars */}
                  <div className="flex items-center justify-center gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-[#FFB84D] fill-[#FFB84D]"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-lg lg:text-xl text-[#1F2937] leading-relaxed mb-6 italic">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>

                  {/* Author */}
                  <div>
                    <p className="font-semibold text-[#1F2937]">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-[#6B7280]">{testimonial.role}</p>
                  </div>

                  {/* Dot reaction */}
                  <div className="flex justify-center mt-6">
                    <DotBubble
                      text={
                        reactionMessages[testimonial.dotReaction] ||
                        "谢谢你的评价！"
                      }
                      expression={testimonial.dotReaction}
                      position="top"
                    />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-6">
            <button
              onClick={prev}
              className="p-2 rounded-xl hover:bg-[#AEE3FF]/30 transition-colors"
              aria-label="上一条评价"
            >
              <ChevronLeft className="w-6 h-6 text-[#5BC8FF]" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    i === current
                      ? "bg-[#5BC8FF] w-6"
                      : "bg-[#AEE3FF]/60 hover:bg-[#AEE3FF]"
                  }`}
                  aria-label={`第${i + 1}条评价`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-2 rounded-xl hover:bg-[#AEE3FF]/30 transition-colors"
              aria-label="下一条评价"
            >
              <ChevronRight className="w-6 h-6 text-[#5BC8FF]" />
            </button>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
