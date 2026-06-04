"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ap } from "@/utils/path";

interface VideoSlide {
  src: string;
  poster?: string;
  title?: string;
  subtitle?: string;
}

const videoSlides: VideoSlide[] = [
  {
    src: "/videos/showcase-1.mp4",
    title: "让每一个孩子都能触摸知识",
    subtitle: "智能盲文显示，实时语音播报",
  },
  {
    src: "/videos/showcase-2.mp4",
    title: "AI 陪伴，快乐学习",
    subtitle: "点点陪你一起探索阅读的乐趣",
  },
  {
    src: "/videos/showcase-3.mp4",
    title: "随时随地，自由学习",
    subtitle: "家庭、学校、图书馆，处处都是课堂",
  },
];

export function VideoShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isScrolling = useRef(false);

  const scrollToIndex = useCallback((index: number) => {
    if (index < 0 || index >= videoSlides.length) return;
    if (isScrolling.current) return;
    isScrolling.current = true;
    setActiveIndex(index);

    const container = containerRef.current;
    if (container) {
      const slideWidth = container.clientWidth;
      container.scrollTo({
        left: index * slideWidth,
        behavior: "smooth",
      });
    }

    setTimeout(() => {
      isScrolling.current = false;
    }, 600);
  }, []);

  // Sync activeIndex with scroll position
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      if (isScrolling.current) return;
      const slideWidth = container.clientWidth;
      const index = Math.round(container.scrollLeft / slideWidth);
      if (index !== activeIndex && index >= 0 && index < videoSlides.length) {
        setActiveIndex(index);
      }
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, [activeIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      const container = containerRef.current;
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const inView = rect.bottom > 0 && rect.top < window.innerHeight;
      if (!inView) return;

      if (e.key === "ArrowRight") {
        e.preventDefault();
        scrollToIndex(activeIndex + 1);
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        scrollToIndex(activeIndex - 1);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [activeIndex, scrollToIndex]);

  return (
    <div className="relative bg-white">
      {/* Horizontal scroll container */}
      <div
        ref={containerRef}
        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none h-[92vh]"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {videoSlides.map((slide, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 snap-center"
          >
            <VideoSlideItem
              slide={slide}
              index={index}
              isActive={Math.abs(activeIndex - index) <= 1}
            />
          </div>
        ))}
      </div>

      {/* Controls overlay */}
      <div className="absolute bottom-8 left-0 right-0 z-10 flex items-center justify-center gap-4">
        <button
          onClick={() => scrollToIndex(activeIndex - 1)}
          className={`p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-all ${
            activeIndex <= 0 ? "opacity-30 pointer-events-none" : "opacity-100"
          }`}
          aria-label="上一个视频"
        >
          <ChevronLeft className="w-5 h-5 text-gray-600" />
        </button>

        {/* Dot indicators */}
        <div className="flex items-center gap-2">
          {videoSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              className={`rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "w-8 h-2.5 bg-gray-700"
                  : "w-2.5 h-2.5 bg-gray-300 hover:bg-gray-500"
              }`}
              aria-label={`视频 ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={() => scrollToIndex(activeIndex + 1)}
          className={`p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-all ${
            activeIndex >= videoSlides.length - 1
              ? "opacity-30 pointer-events-none"
              : "opacity-100"
          }`}
          aria-label="下一个视频"
        >
          <ChevronRight className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      {/* Swipe hint on mobile */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 text-gray-400 text-xs lg:hidden">
        左右滑动切换
      </div>
    </div>
  );
}

function VideoSlideItem({
  slide,
  index,
  isActive,
}: {
  slide: VideoSlide;
  index: number;
  isActive: boolean;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { ref: inViewRef, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !isActive) return;

    if (inView) {
      video.currentTime = 0;
      video.play().catch(() => {
        video.muted = true;
        video.play().catch(() => {});
      });
    } else {
      video.pause();
    }
  }, [inView, isActive]);

  return (
    <div
      ref={inViewRef}
      className="relative h-[92vh] w-full flex items-center justify-center overflow-hidden"
    >
      {/* Video */}
      <video
        ref={videoRef}
        src={ap(slide.src)}
        poster={slide.poster}
        className="absolute inset-0 w-full h-full object-contain"
        muted
        playsInline
        loop={false}
        preload={isActive ? "auto" : "metadata"}
        aria-label={slide.title || `展示视频 ${index + 1}`}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-white/30 pointer-events-none" />

      {/* Title */}
      <AnimatePresence>
        {inView && (slide.title || slide.subtitle) && (
          <motion.div
            className="absolute bottom-28 left-0 right-0 text-center px-8 z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {slide.title && (
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-2 tracking-tight">
                {slide.title}
              </h2>
            )}
            {slide.subtitle && (
              <p className="text-base sm:text-lg text-gray-500">
                {slide.subtitle}
              </p>
            )}
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
