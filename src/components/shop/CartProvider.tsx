"use client";

import { createContext, useReducer, useCallback, type ReactNode } from "react";
import type { CartItem } from "@/types";

interface CartState {
  items: CartItem[];
  isOpen: boolean;
  isPaymentOpen: boolean;
}

type CartAction =
  | { type: "ADD_ITEM"; sku: string; quantity?: number }
  | { type: "REMOVE_ITEM"; sku: string }
  | { type: "UPDATE_QUANTITY"; sku: string; quantity: number }
  | { type: "CLEAR_CART" }
  | { type: "OPEN_CART" }
  | { type: "CLOSE_CART" }
  | { type: "OPEN_PAYMENT" }
  | { type: "CLOSE_PAYMENT" };

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD_ITEM": {
      const existing = state.items.find((item) => item.sku === action.sku);
      if (existing) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.sku === action.sku
              ? { ...item, quantity: item.quantity + (action.quantity ?? 1) }
              : item
          ),
        };
      }
      return {
        ...state,
        items: [...state.items, { sku: action.sku, quantity: action.quantity ?? 1 }],
      };
    }
    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((item) => item.sku !== action.sku),
      };
    case "UPDATE_QUANTITY":
      if (action.quantity <= 0) {
        return {
          ...state,
          items: state.items.filter((item) => item.sku !== action.sku),
        };
      }
      return {
        ...state,
        items: state.items.map((item) =>
          item.sku === action.sku ? { ...item, quantity: action.quantity } : item
        ),
      };
    case "CLEAR_CART":
      return { ...state, items: [] };
    case "OPEN_CART":
      return { ...state, isOpen: true };
    case "CLOSE_CART":
      return { ...state, isOpen: false };
    case "OPEN_PAYMENT":
      return { ...state, isPaymentOpen: true, isOpen: false };
    case "CLOSE_PAYMENT":
      return { ...state, isPaymentOpen: false };
    default:
      return state;
  }
}

interface CartContextValue {
  items: CartItem[];
  isOpen: boolean;
  isPaymentOpen: boolean;
  addItem: (sku: string, quantity?: number) => void;
  removeItem: (sku: string) => void;
  updateQuantity: (sku: string, quantity: number) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  openPayment: () => void;
  closePayment: () => void;
  totalItems: number;
}

export const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
    isOpen: false,
    isPaymentOpen: false,
  });

  const addItem = useCallback(
    (sku: string, quantity?: number) =>
      dispatch({ type: "ADD_ITEM", sku, quantity }),
    []
  );
  const removeItem = useCallback(
    (sku: string) => dispatch({ type: "REMOVE_ITEM", sku }),
    []
  );
  const updateQuantity = useCallback(
    (sku: string, quantity: number) =>
      dispatch({ type: "UPDATE_QUANTITY", sku, quantity }),
    []
  );
  const clearCart = useCallback(() => dispatch({ type: "CLEAR_CART" }), []);
  const openCart = useCallback(() => dispatch({ type: "OPEN_CART" }), []);
  const closeCart = useCallback(() => dispatch({ type: "CLOSE_CART" }), []);
  const openPayment = useCallback(() => dispatch({ type: "OPEN_PAYMENT" }), []);
  const closePayment = useCallback(() => dispatch({ type: "CLOSE_PAYMENT" }), []);

  const totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        isOpen: state.isOpen,
        isPaymentOpen: state.isPaymentOpen,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        openCart,
        closeCart,
        openPayment,
        closePayment,
        totalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
