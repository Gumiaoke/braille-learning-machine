"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { DotCharacter } from "@/components/dot/DotCharacter";
import { ap } from "@/utils/path";

const highlights = [
  {
    title: "盲文显示",
    description: "24单元实时盲文点显，精准还原文字触感",
  },
  {
    title: "语音播报",
    description: "高保真AI语音合成，自然流畅的朗读体验",
  },
  {
    title: "智能交互",
    description: "触摸+语音双重交互，适配不同使用场景",
  },
  {
    title: "学习辅助",
    description: "智能课程体系，从入门到精通循序渐进",
  },
  {
    title: "AI陪伴",
    description: "内置AI伙伴点点，陪伴孩子快乐学习成长",
  },
];

export function ProductShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], [15, 0, -15]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);

  return (
    <SectionWrapper id="product" background="light">
      <div ref={sectionRef}>
        <SectionHeading
          title="点点智能盲文学习机"
          subtitle="专为视障儿童设计的智能学习设备，让每一次触摸都充满温度"
        />

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          {/* Product visual — takes 3/5, scroll-linked */}
          <motion.div
            className="lg:col-span-3 flex items-center justify-center perspective-[1000px]"
            style={{ rotateY, scale }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative w-full flex items-center justify-center">
              <img
                src={ap("/images/product-showcase/product.webp")}
                alt="点点智能盲文学习机"
                className="w-3/4 h-auto object-contain drop-shadow-[0_20px_40px_rgba(91,200,255,0.25)]"
              />
            </div>
          </motion.div>

          {/* Feature callouts — takes 2/5 */}
          <div className="lg:col-span-2 space-y-6 -translate-x-8 lg:-translate-x-20">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                className="flex gap-4 p-4 bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.04)]"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="w-10 h-10 rounded-xl bg-[#AEE3FF]/40 flex items-center justify-center shrink-0">
                  <div className="w-2 h-2 rounded-full bg-[#5BC8FF]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#1F2937] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#6B7280] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Dot in corner */}
        <div className="flex justify-center mt-12">
          <DotCharacter expression="curious" size="md" withFloat />
        </div>
      </div>
    </SectionWrapper>
  );
}
