import { motion } from 'framer-motion';

interface StarfieldProps {
  density?: number;
  className?: string;
}

export function Starfield({ density = 100, className = '' }: StarfieldProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {[...Array(density)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.5 + 0.2,
          }}
          animate={{
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
}
