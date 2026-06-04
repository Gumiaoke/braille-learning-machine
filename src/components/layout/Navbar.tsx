"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingCart } from "lucide-react";
import { cn } from "@/utils/cn";
import { ap } from "@/utils/path";
import { NAV_LINKS, SITE_NAME } from "@/data/site-config";
import { useCart } from "@/hooks/useCart";
import Link from "next/link";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, openCart } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile nav is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-white/40 backdrop-blur-2xl shadow-[0_4px_20px_rgba(0,0,0,0.04)]"
            : "bg-transparent"
        )}
        role="navigation"
        aria-label="主导航"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 font-bold text-3xl text-[#1F2937] hover:opacity-80 transition-opacity"
              aria-label="返回首页"
            >
              {/* Logo icon */}
              <img
                src={ap("/images/hero/logo.webp")}
                alt="点点智能"
                width={48}
                height={48}
                className="shrink-0 rounded-lg object-cover"
              />
              <span>{SITE_NAME}</span>
            </Link>

            {/* Desktop nav links */}
            <div className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-lg font-medium text-[#4B5563] hover:text-[#5BC8FF] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Right actions */}
            <div className="flex items-center gap-3">
              <button
                onClick={openCart}
                className="relative p-2 rounded-xl hover:bg-[#AEE3FF]/30 transition-colors"
                aria-label={`购物车，共${totalItems}件商品`}
              >
                <ShoppingCart className="w-7 h-7 text-[#1F2937]" />
                {totalItems > 0 && (
                  <motion.span
                    className="absolute -top-1 -right-1 w-5 h-5 bg-[#FFB84D] text-white text-xs font-bold rounded-full flex items-center justify-center"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    key={totalItems}
                  >
                    {totalItems}
                  </motion.span>
                )}
              </button>

              {/* Mobile menu toggle */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 rounded-xl hover:bg-[#AEE3FF]/30 transition-colors"
                aria-label={mobileOpen ? "关闭菜单" : "打开菜单"}
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? (
                  <X className="w-7 h-7 text-[#1F2937]" />
                ) : (
                  <Menu className="w-7 h-7 text-[#1F2937]" />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/20 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            {/* Panel */}
            <motion.div
              className="absolute right-0 top-0 bottom-0 w-72 bg-white shadow-2xl p-6 pt-20"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              <div className="flex flex-col gap-4">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-lg font-medium text-[#4B5563] hover:text-[#5BC8FF] transition-colors py-2 px-4 rounded-xl hover:bg-[#AEE3FF]/20"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
