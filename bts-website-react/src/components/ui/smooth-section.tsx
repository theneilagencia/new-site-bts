'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface SmoothSectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
}

export function SmoothSection({ children, id, className = '' }: SmoothSectionProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 0.2], [40, 0]);

  return (
    <motion.section
      ref={ref}
      id={id}
      style={{ opacity, y }}
      className={className}
    >
      {children}
    </motion.section>
  );
}
