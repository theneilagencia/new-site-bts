"use client";

import { motion } from "motion/react";

interface IconProps {
  className?: string;
}

// Globe Mesh - Visão (rede global orbital)
export function GlobeMeshIcon({ className = "" }: IconProps) {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          id="globeGrad"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#4F7BFF" />
          <stop offset="100%" stopColor="#00E5FF" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur
            stdDeviation="2"
            result="coloredBlur"
          />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Outer circle */}
      <motion.circle
        cx="32"
        cy="32"
        r="28"
        stroke="url(#globeGrad)"
        strokeWidth="1.5"
        fill="none"
        filter="url(#glow)"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />

      {/* Meridian lines */}
      <motion.ellipse
        cx="32"
        cy="32"
        rx="28"
        ry="14"
        stroke="url(#globeGrad)"
        strokeWidth="1.5"
        fill="none"
        opacity="0.6"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.6 }}
        transition={{
          duration: 1.5,
          delay: 0.2,
          ease: "easeOut",
        }}
      />

      <motion.ellipse
        cx="32"
        cy="32"
        rx="14"
        ry="28"
        stroke="url(#globeGrad)"
        strokeWidth="1.5"
        fill="none"
        opacity="0.6"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.6 }}
        transition={{
          duration: 1.5,
          delay: 0.3,
          ease: "easeOut",
        }}
      />

      {/* Horizontal line (equator) */}
      <motion.line
        x1="4"
        y1="32"
        x2="60"
        y2="32"
        stroke="url(#globeGrad)"
        strokeWidth="1.5"
        opacity="0.5"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.5 }}
        transition={{
          duration: 1.5,
          delay: 0.4,
          ease: "easeOut",
        }}
      />

      {/* Node points */}
      {[
        { cx: 32, cy: 4 },
        { cx: 32, cy: 60 },
        { cx: 4, cy: 32 },
        { cx: 60, cy: 32 },
      ].map((point, i) => (
        <motion.circle
          key={i}
          cx={point.cx}
          cy={point.cy}
          r="2"
          fill="url(#globeGrad)"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
        />
      ))}
    </svg>
  );
}

// Precision Gear - Missão (engenharia e controle)
export function PrecisionGearIcon({
  className = "",
}: IconProps) {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          id="gearGrad"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#4F7BFF" />
          <stop offset="100%" stopColor="#00E5FF" />
        </linearGradient>
        <filter id="gearGlow">
          <feGaussianBlur
            stdDeviation="2"
            result="coloredBlur"
          />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Central circle */}
      <motion.circle
        cx="32"
        cy="32"
        r="12"
        stroke="url(#gearGrad)"
        strokeWidth="1.5"
        fill="none"
        filter="url(#gearGlow)"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />

      {/* Radial lines (8 directions) */}
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i * 45 * Math.PI) / 180;
        const x1 = 32 + Math.cos(angle) * 12;
        const y1 = 32 + Math.sin(angle) * 12;
        const x2 = 32 + Math.cos(angle) * 28;
        const y2 = 32 + Math.sin(angle) * 28;

        return (
          <motion.line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="url(#gearGrad)"
            strokeWidth="1.5"
            opacity="0.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.5 }}
            transition={{
              duration: 0.6,
              delay: 0.3 + i * 0.05,
            }}
          />
        );
      })}

      {/* Outer ring */}
      <motion.circle
        cx="32"
        cy="32"
        r="28"
        stroke="url(#gearGrad)"
        strokeWidth="1.5"
        fill="none"
        opacity="0.4"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.4 }}
        transition={{
          duration: 1.2,
          delay: 0.5,
          ease: "easeOut",
        }}
      />

      {/* Precision dots at radial endpoints */}
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i * 45 * Math.PI) / 180;
        const x = 32 + Math.cos(angle) * 28;
        const y = 32 + Math.sin(angle) * 28;

        return (
          <motion.circle
            key={`dot-${i}`}
            cx={x}
            cy={y}
            r="2"
            fill="url(#gearGrad)"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.4,
              delay: 0.8 + i * 0.05,
            }}
          />
        );
      })}
    </svg>
  );
}

// Crystal Prism - Valores (transparência e integridade)
export function CrystalPrismIcon({
  className = "",
}: IconProps) {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          id="prismGrad"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#4F7BFF" />
          <stop offset="100%" stopColor="#00E5FF" />
        </linearGradient>
        <filter id="prismGlow">
          <feGaussianBlur
            stdDeviation="2"
            result="coloredBlur"
          />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Top triangle */}
      <motion.path
        d="M 32 8 L 52 28 L 12 28 Z"
        stroke="url(#prismGrad)"
        strokeWidth="1.5"
        fill="none"
        filter="url(#prismGlow)"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />

      {/* Left triangle */}
      <motion.path
        d="M 12 28 L 32 56 L 22 36 Z"
        stroke="url(#prismGrad)"
        strokeWidth="1.5"
        fill="none"
        opacity="0.7"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.7 }}
        transition={{
          duration: 0.8,
          delay: 0.2,
          ease: "easeOut",
        }}
      />

      {/* Right triangle */}
      <motion.path
        d="M 52 28 L 32 56 L 42 36 Z"
        stroke="url(#prismGrad)"
        strokeWidth="1.5"
        fill="none"
        opacity="0.7"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.7 }}
        transition={{
          duration: 0.8,
          delay: 0.3,
          ease: "easeOut",
        }}
      />

      {/* Central vertical line */}
      <motion.line
        x1="32"
        y1="8"
        x2="32"
        y2="56"
        stroke="url(#prismGrad)"
        strokeWidth="1.5"
        opacity="0.5"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.5 }}
        transition={{
          duration: 0.8,
          delay: 0.4,
          ease: "easeOut",
        }}
      />

      {/* Corner dots */}
      {[
        { cx: 32, cy: 8 },
        { cx: 12, cy: 28 },
        { cx: 52, cy: 28 },
        { cx: 32, cy: 56 },
      ].map((point, i) => (
        <motion.circle
          key={i}
          cx={point.cx}
          cy={point.cy}
          r="2.5"
          fill="url(#prismGrad)"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
        />
      ))}

      {/* Inner light rays */}
      <motion.line
        x1="32"
        y1="28"
        x2="22"
        y2="36"
        stroke="url(#prismGrad)"
        strokeWidth="1"
        opacity="0.3"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.3 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      />
      <motion.line
        x1="32"
        y1="28"
        x2="42"
        y2="36"
        stroke="url(#prismGrad)"
        strokeWidth="1"
        opacity="0.3"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.3 }}
        transition={{ duration: 0.6, delay: 0.9 }}
      />
    </svg>
  );
}