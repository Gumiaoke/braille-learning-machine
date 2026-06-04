"use client";

import { motion } from "framer-motion";
import { Home, School, Library, HeartHandshake } from "lucide-react";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Badge } from "@/components/shared/Badge";
import { DotCharacter } from "@/components/dot/DotCharacter";
import { scenarios } from "@/data/scenarios";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  home: Home,
  school: School,
  library: Library,
  "charity-org": HeartHandshake,
};

const colorMap: Record<string, string> = {
  home: "from-[#AEE3FF]/40 to-[#5BC8FF]/20",
  school: "from-[#FFB84D]/20 to-[#FFD93D]/10",
  library: "from-[#AEE3FF]/30 to-[#6BCB77]/10",
  "charity-org": "from-[#FFB84D]/30 to-[#FF6B6B]/10",
};

export function UseScenarios() {
  return (
    <SectionWrapper id="scenarios" background="light">
      <SectionHeading
        title="适用场景"
        subtitle="无论在家、学校还是公益机构，点点都是最好的学习伙伴"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {scenarios.map((scenario, index) => {
          const Icon = iconMap[scenario.id] || Home;

          return (
            <motion.div
              key={scenario.id}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.06)]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -6 }}
            >
              {/* Image/illustration area */}
              <div
                className={`h-48 bg-gradient-to-br ${colorMap[scenario.id] || "from-[#AEE3FF]/40 to-[#5BC8FF]/20"} flex items-center justify-center`}
              >
                <Icon className="w-16 h-16 text-[#5BC8FF] opacity-60" />
              </div>

              <div className="p-6 lg:p-8">
                <div className="flex flex-wrap gap-2 mb-3">
                  {scenario.badges.map((badge) => (
                    <Badge key={badge} variant="primary">
                      {badge}
                    </Badge>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-[#1F2937] mb-2">
                  {scenario.title}
                </h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">
                  {scenario.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="flex justify-center mt-12">
        <DotCharacter expression="encouraging" size="md" withFloat />
      </div>
    </SectionWrapper>
  );
}
