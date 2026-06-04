import type { Scenario } from "@/types";

export const scenarios: Scenario[] = [
  {
    id: "home",
    title: "家庭学习",
    description:
      "在家就能享受专业的盲文教育。家长陪伴孩子一起学习，点点帮助营造温馨的学习氛围，让家庭成为最好的教室。",
    image: "/images/scenarios/home.jpg",
    badges: ["亲子互动", "随时学习", "个性化进度"],
  },
  {
    id: "school",
    title: "特殊教育学校",
    description:
      "专为特殊教育课堂设计，支持一对多教学模式。教师可以统一管理课程内容，追踪每位学生的学习进度。",
    image: "/images/scenarios/school.jpg",
    badges: ["课堂教学", "进度管理", "多设备联动"],
  },
  {
    id: "library",
    title: "图书馆",
    description:
      "与公共图书馆合作，为视障读者提供无障碍阅读服务。接入图书馆数字资源，让海量图书触手可及。",
    image: "/images/scenarios/library.jpg",
    badges: ["公共资源", "数字阅读", "免费借阅"],
  },
  {
    id: "charity-org",
    title: "公益机构",
    description:
      "助力公益组织开展视障教育项目。提供设备捐赠、师资培训、课程共建等全方位的公益支持服务。",
    image: "/images/scenarios/charity.jpg",
    badges: ["设备捐赠", "师资培训", "课程共建"],
  },
];
