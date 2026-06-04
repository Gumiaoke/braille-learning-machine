import type { NavLink, FooterColumn } from "@/types";

export const SITE_NAME = "点点智能";
export const SITE_TAGLINE = "让每一个孩子都能触摸知识";
export const SITE_DESCRIPTION =
  "点点智能盲文学习机，为视障儿童打造更智能、更温暖的学习体验。";

export const PRODUCT_NAME = "智能盲文学习机";
export const PRODUCT_SHORT = "点点学习机";

export const SOCIAL_LINKS = {
  wechat: "#",
  weibo: "#",
  douyin: "#",
  xiaohongshu: "#",
};

export const NAV_LINKS: NavLink[] = [
  { label: "产品", href: "#product" },
  { label: "功能", href: "#features" },
  { label: "点点故事", href: "#ip-story" },
  { label: "场景", href: "#scenarios" },
  { label: "评价", href: "#testimonials" },
  { label: "公益", href: "#charity" },
  { label: "购买", href: "#shop" },
];

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: "关于品牌",
    links: [
      { label: "品牌故事", href: "#" },
      { label: "团队介绍", href: "#" },
      { label: "新闻动态", href: "#" },
      { label: "加入我们", href: "#" },
    ],
  },
  {
    title: "帮助中心",
    links: [
      { label: "使用指南", href: "#" },
      { label: "常见问题", href: "#" },
      { label: "视频教程", href: "#" },
      { label: "固件更新", href: "#" },
    ],
  },
  {
    title: "售后服务",
    links: [
      { label: "保修政策", href: "#" },
      { label: "维修服务", href: "#" },
      { label: "退换货政策", href: "#" },
      { label: "客服联系", href: "#" },
    ],
  },
  {
    title: "法律信息",
    links: [
      { label: "隐私政策", href: "#" },
      { label: "用户协议", href: "#" },
      { label: "知识产权", href: "#" },
      { label: "无障碍声明", href: "#" },
    ],
  },
];
