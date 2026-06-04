import type { ShopProduct } from "@/types";

export const product: ShopProduct = {
  sku: "DOT-001",
  name: "点点智能盲文学习机",
  price: 1999,
  originalPrice: 2499,
  currency: "CNY",
  images: [
    "/images/shop/product-main.jpg",
    "/images/shop/product-angle-1.jpg",
    "/images/shop/product-angle-2.jpg",
  ],
  features: [
    "24个盲文单元实时显示",
    "高保真AI语音合成",
    "Wi-Fi + 蓝牙双连接",
    "8小时超长续航",
    "IP54防尘防水",
    "Type-C快速充电",
    "内置点点AI学习伙伴",
    "家长端学习报告小程序",
  ],
  inStock: true,
};
