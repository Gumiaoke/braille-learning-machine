"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ShoppingCart, Heart, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/shared/Button";
import { Badge } from "@/components/shared/Badge";
import { DotCharacter } from "@/components/dot/DotCharacter";
import { useCart } from "@/hooks/useCart";
import { product } from "@/data/shop";
import { cn } from "@/utils/cn";

export function ShopModule() {
  const { addItem, openCart, openPayment } = useCart();
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addItem(product.sku);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
    openCart();
  };

  const handleBuyNow = () => {
    addItem(product.sku);
    openPayment();
  };

  return (
    <SectionWrapper id="shop" background="light">
      <SectionHeading
        title="立即拥有点点"
        subtitle="选择点点智能盲文学习机，开启温暖的学习之旅"
      />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-10 items-center">
          {/* Product image gallery — takes 2/3 on desktop */}
          <motion.div
            className="lg:col-span-2 bg-gradient-to-br from-white to-[#F7FBFF] rounded-3xl p-2 lg:p-4 shadow-[0_20px_60px_-20px_rgba(91,200,255,0.25)]"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <ImageGallery />
          </motion.div>

          {/* Product details — takes 1/3 on desktop */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <Badge variant="functional">
                {product.inStock ? "现货发售" : "暂时缺货"}
              </Badge>
              {product.originalPrice && (
                <Badge variant="outline">限时优惠</Badge>
              )}
            </div>

            <h3 className="text-2xl lg:text-3xl font-bold text-[#1F2937] mb-4">
              {product.name}
            </h3>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-3xl font-bold text-[#1F2937]">
                ¥{product.price.toLocaleString()}
              </span>
              {product.originalPrice && (
                <span className="text-lg text-[#9CA3AF] line-through">
                  ¥{product.originalPrice.toLocaleString()}
                </span>
              )}
              {product.originalPrice && (
                <Badge variant="functional">
                  省 ¥
                  {(product.originalPrice - product.price).toLocaleString()}
                </Badge>
              )}
            </div>

            {/* Feature list */}
            <ul className="space-y-3 mb-8">
              {product.features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#AEE3FF]/40 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-[#5BC8FF]" />
                  </div>
                  <span className="text-sm text-[#4B5563]">{feature}</span>
                </li>
              ))}
            </ul>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                variant="primary"
                size="lg"
                className="flex-1 gap-2"
                onClick={handleBuyNow}
              >
                <ShoppingCart className="w-5 h-5" />
                立即购买
              </Button>
              <Button
                variant={
                  added ? "ghost" : "outline"
                }
                size="lg"
                className={cn(
                  "gap-2",
                  added && "text-[#6BCB77] border-[#6BCB77]"
                )}
                onClick={handleAddToCart}
              >
                {added ? (
                  <>
                    <Check className="w-5 h-5" />
                    已添加
                  </>
                ) : (
                  <>
                    <Heart className="w-5 h-5" />
                    加入购物车
                  </>
                )}
              </Button>
            </div>

            {/* Trust badge */}
            <div className="flex items-center gap-4 mt-6 text-xs text-[#9CA3AF]">
              <span>✓ 7天无理由</span>
              <span>✓ 顺丰包邮</span>
              <span>✓ 2年质保</span>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}

// Apple Store-style immersive product carousel
const shopImages = [
  "/images/shop-page/电商1.webp",
  "/images/shop-page/电商2.webp",
  "/images/shop-page/电商3.webp",
  "/images/shop-page/电商4.webp",
  "/images/shop-page/电商5.webp",
];

function ImageGallery() {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [direction, setDirection] = useState(0);

  const goTo = (index: number) => {
    if (index < 0 || index >= shopImages.length) return;
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image display area */}
      <div className="relative overflow-hidden rounded-2xl min-h-[400px] lg:min-h-[500px] flex items-center justify-center">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.img
            key={current}
            src={shopImages[current]}
            alt={`产品展示 ${current + 1}`}
            className="w-4/5 h-auto max-h-[50vh] object-contain"
            custom={direction}
            initial={{ opacity: 0, x: direction * 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -40 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
        </AnimatePresence>
      </div>

      {/* Left arrow */}
      <button
        onClick={() => goTo(current - 1)}
        disabled={current <= 0}
        className={`absolute left-2 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/80 backdrop-blur-sm shadow-lg transition-all duration-300 ${
          current <= 0 ? "opacity-0 pointer-events-none" : isHovered ? "opacity-100" : "opacity-30"
        }`}
        aria-label="上一张"
      >
        <ChevronLeft className="w-5 h-5 text-gray-700" />
      </button>

      {/* Right arrow */}
      <button
        onClick={() => goTo(current + 1)}
        disabled={current >= shopImages.length - 1}
        className={`absolute right-2 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/80 backdrop-blur-sm shadow-lg transition-all duration-300 ${
          current >= shopImages.length - 1 ? "opacity-0 pointer-events-none" : isHovered ? "opacity-100" : "opacity-30"
        }`}
        aria-label="下一张"
      >
        <ChevronRight className="w-5 h-5 text-gray-700" />
      </button>

      {/* Dot indicators */}
      <div className="flex items-center justify-center gap-2 mt-4">
        {shopImages.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`rounded-full transition-all duration-300 ${
              i === current
                ? "w-6 h-2 bg-[#5BC8FF]"
                : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`图片 ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
