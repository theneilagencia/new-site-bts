'use client';

import { motion } from 'motion/react';

interface IconProps {
  className?: string;
  isHovered?: boolean;
}

// Network Grid - Digital Offshore (rede global interconectada)
export function NetworkGridIcon({ className = '', isHovered = false }: IconProps) {
  return (
    <svg
      width="72"
      height="72"
      viewBox="0 0 72 72"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="networkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1F4AFF" />
          <stop offset="100%" stopColor="#00E5FF" />
        </linearGradient>
        <filter id="networkGlow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Central node */}
      <motion.circle
        cx="36"
        cy="36"
        r="6"
        fill="url(#networkGrad)"
        filter="url(#networkGlow)"
        animate={{
          scale: isHovered ? [1, 1.2, 1] : 1,
          opacity: isHovered ? [1, 0.8, 1] : 1,
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      {/* Corner nodes */}
      {[
        { cx: 16, cy: 16 },
        { cx: 56, cy: 16 },
        { cx: 16, cy: 56 },
        { cx: 56, cy: 56 },
      ].map((pos, i) => (
        <motion.circle
          key={i}
          cx={pos.cx}
          cy={pos.cy}
          r="4"
          fill="url(#networkGrad)"
          opacity="0.7"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
        />
      ))}

      {/* Connection lines to corners */}
      {[
        { x1: 36, y1: 36, x2: 16, y2: 16 },
        { x1: 36, y1: 36, x2: 56, y2: 16 },
        { x1: 36, y1: 36, x2: 16, y2: 56 },
        { x1: 36, y1: 36, x2: 56, y2: 56 },
      ].map((line, i) => (
        <motion.line
          key={i}
          x1={line.x1}
          y1={line.y1}
          x2={line.x2}
          y2={line.y2}
          stroke="url(#networkGrad)"
          strokeWidth="1.5"
          opacity="0.4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.3 + i * 0.1 }}
        />
      ))}

      {/* Outer orbital ring */}
      <motion.circle
        cx="36"
        cy="36"
        r="30"
        stroke="url(#networkGrad)"
        strokeWidth="1.5"
        fill="none"
        opacity="0.3"
        initial={{ pathLength: 0, rotate: 0 }}
        animate={{ 
          pathLength: 1,
          rotate: isHovered ? 360 : 0,
        }}
        transition={{ 
          pathLength: { duration: 1.5 },
          rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
        }}
      />

      {/* Mid orbital ring */}
      <motion.circle
        cx="36"
        cy="36"
        r="20"
        stroke="url(#networkGrad)"
        strokeWidth="1"
        fill="none"
        opacity="0.2"
        strokeDasharray="4 4"
        animate={{
          rotate: isHovered ? -360 : 0,
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
      />
    </svg>
  );
}

// Foundation Structure - Digital Foundation (estrutura arquitetônica sólida)
export function FoundationStructureIcon({ className = '', isHovered = false }: IconProps) {
  return (
    <svg
      width="72"
      height="72"
      viewBox="0 0 72 72"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="foundationGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1F4AFF" />
          <stop offset="100%" stopColor="#00E5FF" />
        </linearGradient>
        <filter id="foundationGlow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Base foundation */}
      <motion.rect
        x="12"
        y="54"
        width="48"
        height="4"
        fill="url(#foundationGrad)"
        filter="url(#foundationGlow)"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8 }}
      />

      {/* Pillars */}
      {[20, 36, 52].map((x, i) => (
        <motion.rect
          key={i}
          x={x - 2}
          y="28"
          width="4"
          height="26"
          fill="url(#foundationGrad)"
          opacity="0.7"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
          style={{ transformOrigin: 'bottom' }}
        />
      ))}

      {/* Top platform */}
      <motion.rect
        x="16"
        y="24"
        width="40"
        height="4"
        fill="url(#foundationGrad)"
        opacity="0.8"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      />

      {/* Roof peak */}
      <motion.path
        d="M 36 12 L 56 24 L 16 24 Z"
        stroke="url(#foundationGrad)"
        strokeWidth="2"
        fill="none"
        filter="url(#foundationGlow)"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
      />

      {/* Central apex point */}
      <motion.circle
        cx="36"
        cy="12"
        r="3"
        fill="url(#foundationGrad)"
        animate={{
          scale: isHovered ? [1, 1.3, 1] : 1,
          opacity: isHovered ? [1, 0.7, 1] : 1,
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      {/* Corner foundation dots */}
      {[16, 56].map((x, i) => (
        <motion.circle
          key={i}
          cx={x}
          cy="24"
          r="2.5"
          fill="url(#foundationGrad)"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4, delay: 0.8 + i * 0.1 }}
        />
      ))}

      {/* Architectural guidelines */}
      <motion.line
        x1="12"
        y1="54"
        x2="36"
        y2="12"
        stroke="url(#foundationGrad)"
        strokeWidth="0.5"
        opacity="0.2"
        strokeDasharray="2 2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.2, delay: 0.4 }}
      />
      <motion.line
        x1="60"
        y1="54"
        x2="36"
        y2="12"
        stroke="url(#foundationGrad)"
        strokeWidth="0.5"
        opacity="0.2"
        strokeDasharray="2 2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.2, delay: 0.5 }}
      />
    </svg>
  );
}

// Blockchain Lock - BTS BlockTrust (segurança criptográfica)
export function BlockchainLockIcon({ className = '', isHovered = false }: IconProps) {
  return (
    <svg
      width="72"
      height="72"
      viewBox="0 0 72 72"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="blockchainGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1F4AFF" />
          <stop offset="100%" stopColor="#00E5FF" />
        </linearGradient>
        <filter id="blockchainGlow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Block chain - 3 connected blocks */}
      {[
        { x: 26, y: 16 },
        { x: 26, y: 36 },
        { x: 26, y: 56 },
      ].map((pos, i) => (
        <motion.rect
          key={i}
          x={pos.x}
          y={pos.y - 8}
          width="20"
          height="16"
          stroke="url(#blockchainGrad)"
          strokeWidth="2"
          fill="none"
          rx="2"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: i * 0.15 }}
        />
      ))}

      {/* Connection lines between blocks */}
      {[
        { x1: 36, y1: 16, x2: 36, y2: 20 },
        { x1: 36, y1: 36, x2: 36, y2: 40 },
      ].map((line, i) => (
        <motion.line
          key={i}
          x1={line.x1}
          y1={line.y1}
          x2={line.x2}
          y2={line.y2}
          stroke="url(#blockchainGrad)"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.4, delay: 0.3 + i * 0.15 }}
        />
      ))}

      {/* Lock shackle */}
      <motion.path
        d="M 48 32 C 48 26 42 22 36 22 C 30 22 24 26 24 32"
        stroke="url(#blockchainGrad)"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        filter="url(#blockchainGlow)"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      />

      {/* Lock body */}
      <motion.rect
        x="26"
        y="32"
        width="20"
        height="16"
        stroke="url(#blockchainGrad)"
        strokeWidth="2.5"
        fill="url(#blockchainGrad)"
        fillOpacity="0.1"
        rx="3"
        filter="url(#blockchainGlow)"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      />

      {/* Keyhole */}
      <motion.circle
        cx="36"
        cy="38"
        r="2.5"
        fill="url(#blockchainGrad)"
        animate={{
          scale: isHovered ? [1, 1.4, 1] : 1,
          opacity: isHovered ? [1, 0.6, 1] : 1,
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.rect
        x="35"
        y="40"
        width="2"
        height="4"
        fill="url(#blockchainGrad)"
        rx="1"
      />

      {/* Security nodes around lock */}
      {[
        { cx: 20, cy: 40 },
        { cx: 52, cy: 40 },
        { cx: 36, cy: 28 },
        { cx: 36, cy: 52 },
      ].map((pos, i) => (
        <motion.circle
          key={i}
          cx={pos.cx}
          cy={pos.cy}
          r="2"
          fill="url(#blockchainGrad)"
          opacity="0.6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4, delay: 0.9 + i * 0.08 }}
        />
      ))}

      {/* Orbital security ring */}
      <motion.circle
        cx="36"
        cy="40"
        r="18"
        stroke="url(#blockchainGrad)"
        strokeWidth="1"
        fill="none"
        opacity="0.3"
        strokeDasharray="3 3"
        animate={{
          rotate: isHovered ? 360 : 0,
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
      />
    </svg>
  );
}
