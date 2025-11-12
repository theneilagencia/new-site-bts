import { Variants, Transition } from 'framer-motion';

/**
 * CUSTOM EASING - Exatamente como no Figma
 */
export const customEase = [0.22, 1, 0.36, 1]; // cubic-bezier

/**
 * TRANSITIONS - Spring Physics
 */
export const springTransition: Transition = {
  type: 'spring',
  stiffness: 400,
  damping: 30,
};

export const softSpring: Transition = {
  type: 'spring',
  stiffness: 100,
  damping: 20,
};

export const stiffSpring: Transition = {
  type: 'spring',
  stiffness: 700,
  damping: 40,
};

/**
 * FADE IN UP - Para textos e elementos
 */
export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: customEase,
    },
  },
};

/**
 * FADE IN - Para fade simples
 */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6 },
  },
};

/**
 * SCALE IN - Para cards e elementos que aparecem
 */
export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: customEase,
    },
  },
};

/**
 * SLIDE IN - Para elementos laterais
 */
export const slideInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: customEase,
    },
  },
};

export const slideInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: customEase,
    },
  },
};

/**
 * STAGGER CHILDREN - Para listas
 */
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const staggerItem: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: customEase,
    },
  },
};

/**
 * HOVER EFFECTS - Para botões e cards
 */
export const hoverScale = {
  scale: 1.05,
  transition: springTransition,
};

export const hoverLift = {
  y: -8,
  transition: springTransition,
};

export const tapScale = {
  scale: 0.95,
};

/**
 * LOOP ANIMATIONS - Para elementos contínuos
 */
export const floatingAnimation = {
  y: [-10, 10, -10],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: 'easeInOut',
  },
};

export const pulseAnimation = {
  scale: [1, 1.1, 1],
  opacity: [0.5, 1, 0.5],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: 'easeInOut',
  },
};

export const shimmerAnimation = {
  x: ['-200%', '200%'],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: 'linear',
  },
};

/**
 * LAYOUT ANIMATIONS - Para mudanças de posição
 */
export const layoutTransition = {
  type: 'spring',
  stiffness: 500,
  damping: 40,
};

/**
 * PAGE TRANSITIONS
 */
export const pageVariants: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: customEase,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.4,
    },
  },
};
