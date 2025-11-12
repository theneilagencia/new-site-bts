
import { motion } from 'framer-motion';

interface ButtonSecondaryProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
}

export function ButtonSecondary({ children, onClick, href, className = '' }: ButtonSecondaryProps) {
  const Component = href ? motion.a : motion.button;
  
  return (
    <Component
      onClick={onClick}
      href={href}
      className={`relative px-7 py-3.5 text-[#C6CEDF] overflow-hidden group rounded-[14px] border border-[#4F7BFF]/30 ${className}`}
      style={{
        fontSize: '16px',
        fontWeight: 500,
        fontFamily: 'Inter, sans-serif',
        background: 'transparent',
      }}
      whileHover={{ 
        borderColor: 'rgba(79, 123, 255, 0.8)',
        color: '#FFFFFF',
      }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
    >
      {/* Glow effect on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-[#4F7BFF]/0 via-[#4F7BFF]/10 to-[#4F7BFF]/0 opacity-0 group-hover:opacity-100 blur-sm"
        transition={{ duration: 0.25 }}
      />
      
      {/* Border ping effect */}
      <motion.div
        className="absolute inset-0 border border-[#4F7BFF] rounded-[14px] opacity-0"
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0, 0.5, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      <span className="relative z-10">{children}</span>
    </Component>
  );
}
