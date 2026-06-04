"use client";

export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#5BC8FF] focus:text-white focus:rounded-xl focus:shadow-lg focus:outline-none"
    >
      跳转到主要内容
    </a>
  );
}
