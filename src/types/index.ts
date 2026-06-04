// Shared type definitions for the Braille learning machine website

export interface Feature {
  id: string;
  icon: string;
  title: string;
  description: string;
  dotExpression: import("./dot").DotExpression;
  dotTooltip: string;
}

export interface Scenario {
  id: string;
  title: string;
  description: string;
  image: string;
  badges: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  quote: string;
  rating: number;
  dotReaction: import("./dot").DotExpression;
}

export interface IPStoryMilestone {
  year: string;
  title: string;
  description: string;
  dotExpression: import("./dot").DotExpression;
}

export interface CharityStats {
  devicesDonated: number;
  schoolsReached: number;
  childrenImpacted: number;
  campaignGoal: number;
  campaignProgress: number;
}

export interface ShopProduct {
  sku: string;
  name: string;
  price: number;
  originalPrice?: number;
  currency: string;
  images: string[];
  features: string[];
  inStock: boolean;
}

export interface CartItem {
  sku: string;
  quantity: number;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}
