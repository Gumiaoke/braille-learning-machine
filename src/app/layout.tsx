import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Noto_Sans_SC } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/components/shop/CartProvider";
import { SkipLink } from "@/components/a11y/SkipLink";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const notoSansSC = Noto_Sans_SC({
  variable: "--font-noto-sans-sc",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "点点智能盲文学习机 - 让每一个孩子都能触摸知识",
  description:
    "点点智能盲文学习机，为视障儿童打造更智能、更温暖的学习体验。集盲文显示、语音播报、AI陪伴于一体的智能教育设备。",
  keywords: [
    "盲文学习机",
    "视障教育",
    "智能盲文",
    "无障碍学习",
    "特殊教育",
    "盲文显示器",
  ],
  authors: [{ name: "点点智能" }],
  openGraph: {
    title: "点点智能盲文学习机 - 让每一个孩子都能触摸知识",
    description:
      "为视障儿童打造更智能、更温暖的学习体验。AI陪伴，智慧成长。",
    type: "website",
    locale: "zh_CN",
  },
  twitter: {
    card: "summary_large_image",
    title: "点点智能盲文学习机",
    description: "让每一个孩子都能触摸知识",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className={`${inter.variable} ${notoSansSC.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <SkipLink />
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
