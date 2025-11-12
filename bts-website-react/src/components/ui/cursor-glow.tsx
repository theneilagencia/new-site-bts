'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export function CursorGlow() {
  const [isVisible, setIsVisible] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 200 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setIsVisible(true);
    };

    const hideCursor = () => setIsVisible(false);

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseleave', hideCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseleave', hideCursor);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Large Glow */}
      <motion.div
        className="pointer-events-none fixed z-50 hidden lg:block"
        style={{
          left: cursorXSpring,
          top: cursorYSpring,
          x: '-50%',
          y: '-50%',
          opacity: isVisible ? 1 : 0,
        }}
      >
        <div
          className="h-[400px] w-[400px] rounded-full opacity-[0.15] blur-[100px]"
          style={{
            background: 'radial-gradient(circle, var(--accent-primary) 0%, transparent 70%)',
          }}
        />
      </motion.div>

      {/* Small Dot */}
      <motion.div
        className="pointer-events-none fixed z-50 hidden lg:block"
        style={{
          left: cursorXSpring,
          top: cursorYSpring,
          x: '-50%',
          y: '-50%',
          opacity: isVisible ? 1 : 0,
        }}
      >
        <div className="h-2 w-2 rounded-full border border-[var(--accent-primary)] bg-[var(--accent-primary)]/50" />
      </motion.div>
    </>
  );
}
