
import { motion } from 'framer-motion';

interface ButtonAIProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export function ButtonAI({ children, onClick, className = '' }: ButtonAIProps) {
  return (
    <motion.button
      onClick={onClick}
      className={`relative px-8 py-4 text-white overflow-hidden group ${className}`}
      style={{
        background: 'linear-gradient(135deg, #4F7BFF 0%, #00E5FF 100%)',
        fontSize: '17px',
        fontWeight: 600,
        fontFamily: 'Inter Tight, Inter, sans-serif',
        borderRadius: '32px',
        height: '56px',
        boxShadow: '0 0 30px rgba(0, 229, 255, 0.3)',
      }}
      whileHover={{ 
        boxShadow: '0 0 40px rgba(0, 229, 255, 0.5)',
        scale: 1.02,
      }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.3 }}
    >
      {/* Pulsating glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
        animate={{
          x: ['-200%', '200%'],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Dynamic pulse effect */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: 'radial-gradient(circle at center, rgba(255, 255, 255, 0.3) 0%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      {/* Ripple on click */}
      <motion.div
        className="absolute inset-0 rounded-full opacity-0"
        whileTap={{
          scale: [0, 2],
          opacity: [0.5, 0],
        }}
        transition={{ duration: 0.4 }}
        style={{
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, transparent 70%)',
        }}
      />
      
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </motion.button>
  );
}
