import React from 'react';
import { motion } from 'motion/react';

interface ButtonPrimaryProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export function ButtonPrimary({ children, onClick, className = '' }: ButtonPrimaryProps) {
  const [cursorPos, setCursorPos] = React.useState({ x: 0, y: 0 });
  const buttonRef = React.useRef<HTMLButtonElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    setCursorPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.button
      ref={buttonRef}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      className={`relative px-7 py-3.5 text-white overflow-hidden group rounded-[14px] ${className}`}
      style={{
        background: '#3366FF',
        fontSize: '16px',
        fontWeight: 600,
        fontFamily: 'Inter, sans-serif',
        boxShadow: '0 4px 20px rgba(79, 123, 255, 0.25)',
      }}
      whileHover={{ 
        boxShadow: '0 4px 30px rgba(79, 123, 255, 0.4), inset 0 0 20px rgba(79, 123, 255, 0.6)',
      }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
    >
      {/* Orbital glow following cursor */}
      <motion.div
        className="absolute pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          width: '100px',
          height: '100px',
          left: cursorPos.x - 50,
          top: cursorPos.y - 50,
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, transparent 70%)',
          filter: 'blur(20px)',
        }}
      />

      {/* Animated shine overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        animate={{
          x: ['-200%', '200%'],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}
