import { useTransform, useScroll, MotionValue } from 'framer-motion';
import { useRef } from 'react';

export function useParallax(distance: number = 50): [React.RefObject<HTMLDivElement>, MotionValue<number>] {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [-distance, distance]);
  
  return [ref, y];
}
