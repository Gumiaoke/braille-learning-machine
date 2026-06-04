"use client";

import { useCart } from "@/hooks/useCart";
import { product } from "@/data/shop";
import { PaymentModal } from "./PaymentModal";

export function PaymentModalWrapper() {
  const { isPaymentOpen, closePayment, items } = useCart();

  const cartItem = items.find((item) => item.sku === product.sku);
  const amount = cartItem ? product.price * cartItem.quantity : product.price;

  return (
    <PaymentModal
      isOpen={isPaymentOpen}
      onClose={closePayment}
      amount={amount}
    />
  );
}
