'use client';

import { motion } from 'framer-motion';

interface SectionTransitionProps {
  variant?: 'line' | 'dots' | 'wave' | 'gradient';
}

export function SectionTransition({ variant = 'line' }: SectionTransitionProps) {
  if (variant === 'line') {
    return (
      <div className="relative h-px w-full bg-[var(--border-color)]">
        <motion.div
          className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-[var(--accent-primary)] to-transparent"
          animate={{
            x: ['-100%', '300%'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>
    );
  }

  if (variant === 'dots') {
    return (
      <div className="flex items-center justify-center gap-2 py-8">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="h-1.5 w-1.5 rounded-full bg-[var(--accent-primary)]"
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              delay: i * 0.2,
              repeat: Infinity,
            }}
          />
        ))}
      </div>
    );
  }

  if (variant === 'wave') {
    return (
      <div className="relative h-24 w-full overflow-hidden">
        <svg
          className="absolute inset-x-0 bottom-0"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0,64 C150,100 350,0 600,64 C850,128 1050,0 1200,64 L1200,120 L0,120 Z"
            fill="var(--accent-primary)"
            fillOpacity="0.1"
            animate={{
              d: [
                'M0,64 C150,100 350,0 600,64 C850,128 1050,0 1200,64 L1200,120 L0,120 Z',
                'M0,64 C150,0 350,128 600,64 C850,0 1050,100 1200,64 L1200,120 L0,120 Z',
                'M0,64 C150,100 350,0 600,64 C850,128 1050,0 1200,64 L1200,120 L0,120 Z',
              ],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </svg>
      </div>
    );
  }

  if (variant === 'gradient') {
    return (
      <div className="relative h-32 w-full">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-primary)] via-[var(--accent-primary)]/5 to-[var(--bg-primary)]" />
      </div>
    );
  }

  return null;
}
