import React from 'react';
import { motion } from 'framer-motion';

interface ButtonPrimaryProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export function ButtonPrimary({ children, onClick, className = '' }: ButtonPrimaryProps) {
  return (
    <motion.button
      onClick={onClick}
      className={`
        px-10 py-4 bg-[#185AB4] text-white rounded-xl
        transition-all duration-300 ease-out
        hover:bg-[#006DA5] hover:shadow-[0_8px_24px_rgba(24,90,180,0.4)]
        active:scale-[0.98]
        relative overflow-hidden group
        ${className}
      `}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Diagonal glow effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        initial={{ x: '-100%' }}
        whileHover={{ x: '100%' }}
        transition={{ duration: 0.6 }}
      />
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}