// Dot expression types for the IP mascot
export type DotExpression =
  | "happy"
  | "curious"
  | "thinking"
  | "encouraging"
  | "celebrating"
  | "waving"
  | "default";

export interface DotAppearance {
  expression: DotExpression;
  size: "sm" | "md" | "lg";
  withFloat: boolean;
  withBubble?: string;
  position: "inline" | "corner" | "hero" | "centered";
}

export const dotSizeMap: Record<DotAppearance["size"], number> = {
  sm: 60,
  md: 100,
  lg: 160,
};

export const expressionLabelMap: Record<DotExpression, string> = {
  happy: "开心的点点",
  curious: "好奇的点点",
  thinking: "思考中的点点",
  encouraging: "鼓励的点点",
  celebrating: "庆祝的点点",
  waving: "挥手的点点",
  default: "点点",
};
