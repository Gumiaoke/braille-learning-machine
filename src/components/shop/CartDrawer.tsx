"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import { product } from "@/data/shop";
import { DotCharacter } from "@/components/dot/DotCharacter";
import { Button } from "@/components/shared/Button";
import { slideInRight } from "@/styles/animations";

export function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalItems, openPayment } =
    useCart();

  const cartItem = items.find((item) => item.sku === product.sku);
  const totalPrice = cartItem ? product.price * cartItem.quantity : 0;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-[60] bg-black/20 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
          />

          {/* Drawer */}
          <motion.div
            className="fixed right-0 top-0 bottom-0 z-[70] w-full sm:w-96 bg-white shadow-2xl flex flex-col"
            variants={slideInRight}
            initial="hidden"
            animate="visible"
            exit="exit"
            role="dialog"
            aria-label="购物车"
            aria-modal="true"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-100">
              <h2 className="text-lg font-semibold flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-[#5BC8FF]" />
                购物车
                {totalItems > 0 && (
                  <span className="text-sm text-gray-400 font-normal">
                    ({totalItems}件)
                  </span>
                )}
              </h2>
              <button
                onClick={closeCart}
                className="p-2 rounded-xl hover:bg-gray-100 transition-colors"
                aria-label="关闭购物车"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-4">
              {!cartItem || cartItem.quantity === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center gap-4">
                  <DotCharacter expression="curious" size="lg" />
                  <p className="text-gray-400">购物车是空的哦~</p>
                  <p className="text-sm text-gray-300">
                    快去挑选一台点点学习机吧！
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {/* Product card in cart */}
                  <div className="flex gap-4 p-4 bg-[#F7FBFF] rounded-2xl">
                    {/* Product image placeholder */}
                    <div className="w-20 h-20 bg-gradient-to-br from-[#AEE3FF]/40 to-[#5BC8FF]/20 rounded-xl flex items-center justify-center shrink-0">
                      <DotCharacter expression="happy" size="sm" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-sm truncate">
                        {product.name}
                      </h3>
                      <p className="text-[#5BC8FF] font-bold mt-1">
                        ¥{product.price}
                      </p>
                      {/* Quantity controls */}
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() =>
                            updateQuantity(
                              product.sku,
                              cartItem.quantity - 1
                            )
                          }
                          className="w-7 h-7 rounded-lg border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition-colors"
                          aria-label="减少数量"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-8 text-center text-sm font-medium">
                          {cartItem.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(
                              product.sku,
                              cartItem.quantity + 1
                            )
                          }
                          className="w-7 h-7 rounded-lg border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition-colors"
                          aria-label="增加数量"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                        <button
                          onClick={() => removeItem(product.sku)}
                          className="ml-auto p-1.5 text-gray-400 hover:text-red-400 transition-colors"
                          aria-label="删除商品"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            {cartItem && cartItem.quantity > 0 && (
              <div className="border-t border-gray-100 p-4 space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">合计</span>
                  <span className="text-xl font-bold text-[#1F2937]">
                    ¥{totalPrice.toLocaleString()}
                  </span>
                </div>
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full"
                  onClick={openPayment}
                >
                  立即购买
                </Button>
                <Button
                  variant="outline"
                  size="md"
                  className="w-full"
                  onClick={closeCart}
                >
                  继续选购
                </Button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
