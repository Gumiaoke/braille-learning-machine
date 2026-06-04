import type { Variants } from "framer-motion";

// Fade in and slide up — used for most section entries
export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

// Fade in from the left
export const fadeInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

// Fade in from the right
export const fadeInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

// Scale in
export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

// Stagger container — children appear one after another
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

// Card hover effect — gentle lift with deeper shadow
export const cardHover = {
  scale: 1.02,
  y: -4,
  boxShadow:
    "0 20px 50px -12px rgba(0, 0, 0, 0.15)",
  transition: {
    duration: 0.3,
    ease: "easeOut" as const,
  },
};

// Button tap effect
export const buttonTap = {
  scale: 0.96,
};

// Button hover
export const buttonHover = {
  scale: 1.05,
  transition: { duration: 0.2, ease: "easeOut" as const },
};

// Dot floating animation — continuous gentle bob
export const dotFloatAnimation = {
  animate: {
    y: [0, -12, 0],
    rotate: [0, -3, 3, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  },
};

// Dot celebration — bouncy scale
export const dotCelebrate = {
  animate: {
    scale: [1, 1.2, 1, 1.15, 1],
    rotate: [0, -5, 5, -5, 0],
    transition: {
      duration: 0.8,
      ease: "easeInOut" as const,
    },
  },
};

// Slide in from right (for cart drawer, mobile nav)
export const slideInRight: Variants = {
  hidden: {
    x: "100%",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 200,
    },
  },
  exit: {
    x: "100%",
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
};

// Carousel slide variants
export const carouselSlide: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  }),
};
