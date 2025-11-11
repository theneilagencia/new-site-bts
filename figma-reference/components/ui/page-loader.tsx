'use client';

import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

export function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[var(--bg-primary)]"
        >
          <div className="relative">
            {/* Outer rotating ring */}
            <motion.div
              className="absolute inset-0"
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            >
              <div className="h-32 w-32 rounded-full border-2 border-transparent border-t-[#00639A] border-r-[#21B6F3]" />
            </motion.div>

            {/* Inner pulsing circle */}
            <motion.div
              className="flex h-32 w-32 items-center justify-center"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="flex h-24 w-24 items-center justify-center rounded-full border border-[var(--border-color)] bg-[var(--bg-secondary)]">
                <span className="font-mono text-xs font-bold text-[var(--accent-primary)] whitespace-nowrap">Be Anywhere</span>
              </div>
            </motion.div>

            {/* Loading text */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap"
            >
              <span className="font-mono text-xs uppercase tracking-widest text-[var(--text-tertiary)]">
                Loading...
              </span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}