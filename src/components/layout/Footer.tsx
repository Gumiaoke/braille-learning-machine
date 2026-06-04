"use client";

import { ap } from "@/utils/path";
import { FOOTER_COLUMNS, SITE_NAME, SITE_TAGLINE } from "@/data/site-config";
import { DotCharacter } from "@/components/dot/DotCharacter";
import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#1F2937] text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img
                src={ap("/images/hero/logo.webp")}
                alt="点点智能"
                width={28}
                height={28}
                className="rounded-lg object-cover"
              />
              <span className="font-bold text-lg">{SITE_NAME}</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              {SITE_TAGLINE}
            </p>
            <div className="flex items-center gap-1">
              <DotCharacter expression="waving" size="sm" />
              <span className="text-gray-500 text-xs">下次见！</span>
            </div>
          </div>

          {/* Link columns */}
          {FOOTER_COLUMNS.map((column) => (
            <div key={column.title}>
              <h3 className="font-semibold text-sm mb-4 text-gray-200">
                {column.title}
              </h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-[#5BC8FF] transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-gray-700/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm flex items-center gap-1">
            © 2024 {SITE_NAME}. Made with
            <Heart className="w-3 h-3 text-[#FFB84D] fill-[#FFB84D]" />
            for every child.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-500 hover:text-[#5BC8FF] transition-colors text-sm">
              微信公众号
            </a>
            <a href="#" className="text-gray-500 hover:text-[#5BC8FF] transition-colors text-sm">
              微博
            </a>
            <a href="#" className="text-gray-500 hover:text-[#5BC8FF] transition-colors text-sm">
              抖音
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
