import type { Feature } from "@/types";

export const features: Feature[] = [
  {
    id: "voice-to-braille",
    icon: "Mic",
    title: "语音转盲文",
    description:
      "智能语音识别技术，实时将语音内容转换为盲文显示，让孩子听见声音就能触摸知识。支持多种语速和音量调节。",
    dotExpression: "thinking",
    dotTooltip: "对我说什么，我就变成盲文给你看！",
  },
  {
    id: "braille-learning",
    icon: "BookOpen",
    title: "盲文学习",
    description:
      "循序渐进的盲文学习课程，从基础点位到完整句子，用趣味互动的方式帮助孩子掌握盲文读写能力。",
    dotExpression: "encouraging",
    dotTooltip: "我们一起学盲文吧，从最简单的开始！",
  },
  {
    id: "voice-reading",
    icon: "Volume2",
    title: "语音朗读",
    description:
      "高保真语音合成技术，自然流畅地朗读盲文内容。支持多种声音风格，让阅读变成一种享受。",
    dotExpression: "happy",
    dotTooltip: "听，这是我最喜欢的故事！",
  },
  {
    id: "interactive-practice",
    icon: "Gamepad2",
    title: "互动练习",
    description:
      "丰富的互动学习游戏，将盲文练习变成有趣的挑战。即时反馈机制，让每次进步都被看见和鼓励。",
    dotExpression: "celebrating",
    dotTooltip: "答对了！你好棒！继续加油！",
  },
  {
    id: "ai-companion",
    icon: "Heart",
    title: "AI陪伴",
    description:
      "内置AI学习伙伴点点，陪伴孩子学习和成长。智能对话、情感识别、个性化鼓励，让学习不再孤单。",
    dotExpression: "happy",
    dotTooltip: "我会一直陪着你，做你最好的学习伙伴！",
  },
  {
    id: "learning-record",
    icon: "BarChart3",
    title: "学习记录",
    description:
      "详细的学习数据追踪和分析，记录学习时长、进度、掌握情况。生成可视化报告，让家长和老师了解孩子的成长。",
    dotExpression: "default",
    dotTooltip: "你已经有这么多进步了，太厉害了！",
  },
];
