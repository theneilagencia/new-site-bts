# 🎬 FRAMER MOTION - ANIMAÇÕES EXATAS DO FIGMA

## ⚡ CONFIGURAÇÃO DE ANIMAÇÕES

---

## 1. ANIMATION VARIANTS (Padrões Reutilizáveis)

```typescript
// src/lib/animations.ts

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
```

---

## 2. SCROLL-TRIGGERED ANIMATIONS

```typescript
// src/hooks/useScrollAnimation.ts

import { useInView } from 'framer-motion';
import { useRef } from 'react';

export function useScrollAnimation(options = {}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px 0px', // Trigger 100px before element enters
    ...options,
  });

  return { ref, isInView };
}

// USO:
// const { ref, isInView } = useScrollAnimation();
// <motion.div ref={ref} animate={isInView ? 'visible' : 'hidden'} variants={fadeInUp}>
```

---

## 3. EXEMPLOS PRÁTICOS

### BADGE COM SHIMMER + PULSE (Igual Figma)

```typescript
<div className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-[var(--color-text-tertiary)]/20 bg-[var(--color-bg-secondary)]/50 px-4 py-2 backdrop-blur-sm">
  {/* Shimmer Effect */}
  <motion.div
    className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00639A]/10 to-transparent"
    animate={shimmerAnimation}
  />
  
  {/* Pulse Dot */}
  <motion.div
    className="h-2 w-2 rounded-full bg-[#00639A]"
    animate={pulseAnimation}
  />
  
  <span className="relative font-mono text-xs uppercase tracking-widest text-[var(--color-text-tertiary)]">
    Strategic Partnership
  </span>
</div>
```

### BUTTON COM HOVER E TAP

```typescript
<motion.button
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
  className="relative overflow-hidden rounded-lg bg-gradient-to-r from-[#00639A] to-[#21B6F3] px-8 py-4 text-white"
>
  <span className="relative z-10 flex items-center gap-2 font-semibold">
    Get Started
    <motion.div
      animate={{ x: [0, 4, 0] }}
      transition={{ duration: 1.5, repeat: Infinity }}
    >
      <ArrowRight size={20} />
    </motion.div>
  </span>
  
  {/* Hover Overlay */}
  <motion.div
    className="absolute inset-0 bg-white/15"
    initial={{ opacity: 0 }}
    whileHover={{ opacity: 1 }}
    transition={{ duration: 0.3 }}
  />
</motion.button>
```

### CARD COM HOVER LIFT

```typescript
<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: '-100px' }}
  variants={scaleIn}
  whileHover={hoverLift}
  className="group relative overflow-hidden rounded-2xl border border-[var(--color-text-tertiary)]/10 bg-[var(--color-bg-secondary)] p-8"
>
  {/* Content */}
  <h3 className="mb-4 text-2xl font-semibold text-[var(--color-text-primary)]">
    Feature Title
  </h3>
  <p className="text-[var(--color-text-secondary)]">
    Feature description here.
  </p>
  
  {/* Hover Gradient */}
  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
    <div 
      className="absolute inset-0"
      style={{
        background: 'radial-gradient(circle at 50% 50%, rgba(0, 99, 154, 0.05) 0%, transparent 70%)',
      }}
    />
  </div>
</motion.div>
```

### LIST COM STAGGER

```typescript
<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={staggerContainer}
  className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
>
  {items.map((item, index) => (
    <motion.div
      key={index}
      variants={staggerItem}
      className="rounded-xl border border-[var(--color-text-tertiary)]/10 bg-[var(--color-bg-secondary)] p-6"
    >
      <h4 className="mb-2 font-semibold text-[var(--color-text-primary)]">
        {item.title}
      </h4>
      <p className="text-sm text-[var(--color-text-secondary)]">
        {item.description}
      </p>
    </motion.div>
  ))}
</motion.div>
```

### RADIAL GRADIENTS ANIMADOS (Background)

```typescript
<div className="absolute inset-0 overflow-hidden">
  {/* Gradient 1 */}
  <motion.div
    className="absolute left-1/4 top-1/4 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-[120px]"
    style={{
      background: 'radial-gradient(circle, #00639A 0%, transparent 70%)',
    }}
    animate={{
      scale: [1, 1.2, 1],
      opacity: [0.15, 0.25, 0.15],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
  />
  
  {/* Gradient 2 */}
  <motion.div
    className="absolute right-1/4 bottom-1/4 h-[500px] w-[500px] rounded-full opacity-15 blur-[100px]"
    style={{
      background: 'radial-gradient(circle, #21B6F3 0%, transparent 65%)',
    }}
    animate={{
      scale: [1, 1.3, 1],
      opacity: [0.1, 0.2, 0.1],
    }}
    transition={{
      duration: 10,
      repeat: Infinity,
      ease: 'easeInOut',
      delay: 1,
    }}
  />
</div>
```

### LAYOUT ANIMATION COM LAYOUTID (Tabs, Nav Hover)

```typescript
// Para Hover Indicator em Navigation
{navItems.map((item) => (
  <motion.a
    key={item.key}
    href={item.href}
    className="group relative px-4 py-2 text-sm font-medium"
  >
    <span className="relative z-10">{item.label}</span>
    
    {/* Hover Background com layoutId */}
    <motion.div
      className="absolute inset-0 rounded-lg bg-[var(--color-accent-primary)]/10"
      layoutId="nav-hover"
      initial={{ opacity: 0 }}
      whileHover={{ opacity: 1 }}
      transition={layoutTransition}
    />
  </motion.a>
))}
```

### PAGE TRANSITIONS (Para Portal/Multi-page)

```typescript
// src/lib/page-transitions.ts

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

// USO:
<motion.div
  variants={pageVariants}
  initial="initial"
  animate="animate"
  exit="exit"
>
  {/* Page content */}
</motion.div>
```

---

## 4. PERFORMANCE OTIMIZADA

### Layout Animations (GPU-accelerated)

```typescript
// Use transform e opacity (GPU-accelerated)
// ✅ BOM
animate={{ x: 100, scale: 1.2, opacity: 0.5 }}

// ❌ EVITE (cause reflow)
animate={{ width: 200, height: 300 }}
```

### Will-change CSS Hint

```typescript
<motion.div
  className="will-change-transform"
  animate={{ scale: 1.2 }}
/>
```

### Reduce Motion (Acessibilidade)

```typescript
import { useReducedMotion } from 'framer-motion';

const shouldReduceMotion = useReducedMotion();

<motion.div
  animate={shouldReduceMotion ? {} : { y: [0, -10, 0] }}
/>
```

---

## 5. CONFIGURAÇÃO GLOBAL

```typescript
// src/main.tsx
import { LazyMotion, domAnimation } from 'framer-motion';

<LazyMotion features={domAnimation} strict>
  <App />
</LazyMotion>
```

**RESULTADO:** ⚡ Animações 100% idênticas ao Figma Make com Framer Motion!
