"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { DotCharacter } from "@/components/dot/DotCharacter";
import { ipStoryMilestones } from "@/data/ip-story";

export function IPStory() {
  return (
    <SectionWrapper id="ip-story" background="gradient">
      <SectionHeading
        title="认识点点"
        subtitle="来自盲文星球的学习伙伴，陪伴每一个孩子的成长旅程"
      />

      {/* Timeline */}
      <div className="relative max-w-3xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-0.5 bg-[#AEE3FF]/60 lg:-translate-x-px" />

        <div className="space-y-12 lg:space-y-16">
          {ipStoryMilestones.map((milestone, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={milestone.year}
                className={`relative flex items-start gap-6 lg:gap-0 ${
                  isLeft
                    ? "lg:flex-row"
                    : "lg:flex-row-reverse"
                }`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: 0.1, duration: 0.6 }}
              >
                {/* Timeline node */}
                <div className="absolute left-8 lg:left-1/2 w-4 h-4 bg-[#5BC8FF] rounded-full -translate-x-[7px] lg:-translate-x-2 shadow-lg shadow-[#5BC8FF]/30 ring-4 ring-[#AEE3FF]/40 z-10" />

                {/* Content card */}
                <div
                  className={`ml-16 lg:ml-0 lg:w-[calc(50%-2rem)] ${
                    isLeft ? "lg:pr-10 lg:text-right" : "lg:pl-10 lg:text-left"
                  }`}
                >
                  <motion.div
                    className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.04)] inline-block"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center gap-3 mb-3 justify-start">
                      <DotCharacter
                        expression={milestone.dotExpression}
                        size="sm"
                      />
                      <div>
                        <span className="text-xs font-bold text-[#5BC8FF] uppercase tracking-wider">
                          {milestone.year}
                        </span>
                        <h3 className="text-lg font-bold text-[#1F2937]">
                          {milestone.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-[#6B7280] text-sm leading-relaxed">
                      {milestone.description}
                    </p>
                  </motion.div>
                </div>

                {/* Spacer for the other side on desktop */}
                <div className="hidden lg:block lg:w-[calc(50%-2rem)]" />
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Dot at the end */}
      <div className="flex justify-center mt-16">
        <DotCharacter expression="waving" size="lg" withFloat />
      </div>
    </SectionWrapper>
  );
}
