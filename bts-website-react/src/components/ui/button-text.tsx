
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface ButtonTextProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  showArrow?: boolean;
  className?: string;
}

export function ButtonText({ children, onClick, href, showArrow = true, className = '' }: ButtonTextProps) {
  const Component = href ? motion.a : motion.button;
  
  return (
    <Component
      onClick={onClick}
      href={href}
      className={`relative inline-flex items-center gap-2 text-[#C6CEDF] group ${className}`}
      style={{
        fontSize: '16px',
        fontWeight: 500,
        fontFamily: 'Inter, sans-serif',
      }}
      whileHover={{ 
        color: '#FFFFFF',
      }}
      transition={{ duration: 0.25 }}
    >
      <span className="relative">
        {children}
        {/* Underline animation */}
        <motion.span
          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#4F7BFF] to-[#00E5FF]"
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
          style={{ transformOrigin: 'left' }}
        />
      </span>
      
      {showArrow && (
        <motion.div
          animate={{ x: [0, 4, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowRight className="w-4 h-4" />
        </motion.div>
      )}
    </Component>
  );
}
