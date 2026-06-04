"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { DotCharacter } from "@/components/dot/DotCharacter";
import { cn } from "@/utils/cn";

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  amount: number;
}

type PaymentMethod = "wechat" | "alipay";

export function PaymentModal({ isOpen, onClose, amount }: PaymentModalProps) {
  const [method, setMethod] = useState<PaymentMethod>("wechat");

  const qrCodes: Record<PaymentMethod, { src: string; label: string; color: string }> = {
    wechat: {
      src: "/images/alipay/微信二维码.png",
      label: "微信支付",
      color: "#07C160",
    },
    alipay: {
      src: "/images/alipay/支付宝二维码.png",
      label: "支付宝",
      color: "#1677FF",
    },
  };

  const current = qrCodes[method];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-[80] bg-black/30 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-[90] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          >
            <motion.div
              className="bg-white rounded-3xl shadow-2xl p-8 max-w-sm w-full text-center"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-label="扫码支付"
              aria-modal="true"
            >
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-xl hover:bg-gray-100 transition-colors"
                aria-label="关闭"
              >
                <X className="w-5 h-5 text-gray-400" />
              </button>

              {/* Dot */}
              <div className="flex justify-center mb-4">
                <DotCharacter expression="happy" size="md" />
              </div>

              <h3 className="text-xl font-bold text-[#1F2937] mb-2">
                扫码支付
              </h3>

              {/* Toggle tabs */}
              <div className="inline-flex bg-[#F3F4F6] rounded-2xl p-1 mb-4">
                {(["wechat", "alipay"] as PaymentMethod[]).map((m) => {
                  const info = qrCodes[m];
                  const isActive = method === m;
                  return (
                    <button
                      key={m}
                      onClick={() => setMethod(m)}
                      className={cn(
                        "relative px-6 py-2 rounded-xl text-sm font-medium transition-all",
                        isActive
                          ? "text-white"
                          : "text-[#6B7280] hover:text-[#1F2937]"
                      )}
                    >
                      {isActive && (
                        <motion.div
                          className="absolute inset-0 rounded-xl"
                          layoutId="paymentTab"
                          style={{ backgroundColor: info.color }}
                          transition={{ type: "spring", duration: 0.3 }}
                        />
                      )}
                      <span className="relative z-10">{info.label}</span>
                    </button>
                  );
                })}
              </div>

              <p className="text-2xl font-bold text-[#5BC8FF] mb-5">
                ¥{amount.toLocaleString()}
              </p>

              {/* QR Code */}
              <div className="mb-4 inline-block">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={method}
                    src={current.src}
                    alt={`${current.label}收款二维码`}
                    className="w-56 h-56 object-contain rounded-2xl shadow-lg"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                  />
                </AnimatePresence>
              </div>

              <p className="text-xs text-[#9CA3AF]">
                支付完成后请截图保存，方便核对
              </p>

              <button
                onClick={onClose}
                className="mt-4 w-full py-2.5 rounded-2xl bg-[#F7FBFF] text-[#6B7280] text-sm font-medium hover:bg-[#AEE3FF]/20 transition-colors"
              >
                我已支付完成
              </button>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
