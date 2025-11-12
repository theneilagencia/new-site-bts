'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, useState } from 'react';
import { useLanguage } from '../../contexts/language-context';
import { NetworkGridIcon, FoundationStructureIcon, BlockchainLockIcon } from '../icons/solutions-icons';

interface SolutionCardProps {
  title: string;
  description: string;
  tagline: string;
  cta: string;
  icon: 'network' | 'foundation' | 'blockchain';
  index: number;
}

function SolutionCard({ title, description, tagline, cta, icon, index }: SolutionCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const IconComponent =
    icon === 'network' ? NetworkGridIcon :
    icon === 'foundation' ? FoundationStructureIcon :
    BlockchainLockIcon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{
        duration: 0.9,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      {/* Orbital glow on hover */}
      <motion.div
        className="pointer-events-none absolute -inset-8 rounded-[32px] opacity-0 blur-3xl transition-opacity duration-700"
        animate={{
          opacity: isHovered ? 0.15 : 0,
        }}
        style={{
          background: 'radial-gradient(circle, rgba(31, 74, 255, 0.5) 0%, transparent 70%)',
        }}
      />

      {/* Content - no card background */}
      <div className="relative p-8 lg:p-10">
        {/* Floating icon - centered, no background */}
        <motion.div
          className="mb-10 flex justify-center"
          animate={{
            y: isHovered ? -4 : 0,
          }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <IconComponent isHovered={isHovered} className="transition-all duration-500" />
        </motion.div>

        {/* Title with gradient */}
        <motion.h3
          className="mb-6 text-center"
          style={{
            background: 'linear-gradient(135deg, #FFFFFF 0%, rgba(255, 255, 255, 0.85) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
          animate={{
            background: isHovered
              ? 'linear-gradient(135deg, #FFFFFF 0%, #00E5FF 100%)'
              : 'linear-gradient(135deg, #FFFFFF 0%, rgba(255, 255, 255, 0.85) 100%)',
          }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h3>

        {/* Description */}
        <p className="mb-8 text-center leading-[160%] text-[#C6CEDF]/80">
          {description}
        </p>

        {/* Tagline - subtle, no box */}
        <motion.div
          className="mb-10 px-6 py-4"
          animate={{
            opacity: isHovered ? 1 : 0.85,
          }}
          transition={{ duration: 0.4 }}
        >
          <p className="text-center text-sm leading-[160%] text-white/75 italic">
            "{tagline}"
          </p>
        </motion.div>

        {/* CTA button - minimal gradient */}
        <motion.button
          className="group/btn relative mx-auto flex w-full items-center justify-center gap-3 overflow-hidden rounded-xl px-8 py-4 transition-all duration-500"
          style={{
            background: 'linear-gradient(135deg, rgba(31, 74, 255, 0.2) 0%, rgba(0, 229, 255, 0.15) 100%)',
            border: '1px solid rgba(79, 123, 255, 0.3)',
          }}
          whileHover={{
            scale: 1.02,
            background: 'linear-gradient(135deg, rgba(31, 74, 255, 0.35) 0%, rgba(0, 229, 255, 0.25) 100%)',
            borderColor: 'rgba(0, 229, 255, 0.5)',
          }}
          whileTap={{ scale: 0.98 }}
        >
          {/* Shimmer effect */}
          <motion.span
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.15) 50%, transparent 100%)',
            }}
            initial={{ x: '-100%', skewX: -20 }}
            animate={{
              x: isHovered ? '200%' : '-100%',
            }}
            transition={{ duration: 1, ease: 'easeInOut' }}
          />

          <span className="relative z-10 text-sm font-medium text-white">{cta}</span>

          {/* Animated arrow */}
          <motion.svg
            className="relative z-10 h-4 w-4 text-white/80"
            animate={{ x: isHovered ? 4 : 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </motion.svg>
        </motion.button>
      </div>
    </motion.div>
  );
}

export function SolutionsBigTech() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);

  // Scroll-based parallax
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const yMesh = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const opacityMesh = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.8]);
  const opacityOrb = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.6]);

  const solutions = [
    {
      title: t.solutions.offshore.title,
      description: t.solutions.offshore.description,
      tagline: t.solutions.offshore.tagline,
      cta: t.solutions.offshore.cta,
      icon: 'network' as const,
    },
    {
      title: t.solutions.foundation.title,
      description: t.solutions.foundation.description,
      tagline: t.solutions.foundation.tagline,
      cta: t.solutions.foundation.cta,
      icon: 'foundation' as const,
    },
    {
      title: t.solutions.blocktrust.title,
      description: t.solutions.blocktrust.description,
      tagline: t.solutions.blocktrust.tagline,
      cta: t.solutions.blocktrust.cta,
      icon: 'blockchain' as const,
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="solutions"
      className="relative overflow-hidden py-32 lg:py-48"
    >
      {/* Deep tech background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050B18] via-[#0A1432] to-[#050B18]" />

      {/* Orbital mesh texture with parallax (5% opacity) */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{
          y: yMesh,
          opacity: opacityMesh,
        }}
      >
        <div
          className="h-full w-full opacity-[0.05]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(80, 150, 255, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(80, 150, 255, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </motion.div>

      {/* Animated global network orb overlay */}
      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(31, 74, 255, 0.4) 0%, transparent 70%)',
          opacity: opacityOrb,
        }}
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 360],
        }}
        transition={{
          scale: { duration: 8, repeat: Infinity, ease: 'easeInOut' },
          rotate: { duration: 40, repeat: Infinity, ease: 'linear' },
        }}
      />

      {/* Floating ambient lights */}
      <motion.div
        className="pointer-events-none absolute left-0 top-1/4 h-[500px] w-[500px] rounded-full bg-[#1F4AFF] blur-[100px]"
        style={{ opacity: 0.04 }}
        animate={{
          x: [0, 60, 0],
          y: [0, -40, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="pointer-events-none absolute bottom-1/4 right-0 h-[600px] w-[600px] rounded-full bg-[#00E5FF] blur-[120px]"
        style={{ opacity: 0.03 }}
        animate={{
          x: [0, -70, 0],
          y: [0, 50, 0],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Operational grid lines */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Horizontal scan lines */}
        {[20, 40, 60, 80].map((top, i) => (
          <motion.div
            key={`h-${i}`}
            className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4F7BFF]/10 to-transparent"
            style={{ top: `${top}%` }}
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4,
              delay: i * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}

        {/* Vertical scan lines */}
        {[25, 50, 75].map((left, i) => (
          <motion.div
            key={`v-${i}`}
            className="absolute bottom-0 top-0 w-px bg-gradient-to-b from-transparent via-[#00E5FF]/10 to-transparent"
            style={{ left: `${left}%` }}
            animate={{
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 5,
              delay: i * 0.6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-20 max-w-4xl text-center lg:mb-32">
          {/* Infrastructure badge with pulse */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border px-4 py-2 backdrop-blur-sm"
            style={{
              borderColor: 'rgba(79, 123, 255, 0.2)',
              background: 'rgba(31, 74, 255, 0.06)',
            }}
          >
            <motion.span
              className="h-1.5 w-1.5 rounded-full bg-[#00E5FF]"
              animate={{
                boxShadow: [
                  '0 0 8px rgba(0, 229, 255, 0.6)',
                  '0 0 16px rgba(0, 229, 255, 1)',
                  '0 0 8px rgba(0, 229, 255, 0.6)',
                ],
                scale: [1, 1.2, 1],
              }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            />
            <span className="font-mono text-xs uppercase tracking-wider text-[#C6CEDF]/70">
              {t.solutions.badge}
            </span>
          </motion.div>

          {/* Main title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h2
              className="mb-8"
              style={{
                background: 'linear-gradient(to bottom right, #FFFFFF, rgba(255, 255, 255, 0.7))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {t.solutions.title}
            </h2>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto max-w-3xl text-lg leading-[160%] text-[#C6CEDF]/80 lg:text-xl"
          >
            {t.solutions.subtitle}
          </motion.p>

          {/* Decorative data stream divider */}
          <motion.div
            className="mx-auto mt-10 flex items-center justify-center gap-2"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.div
              className="h-px w-16 bg-gradient-to-r from-transparent via-[#4F7BFF] to-transparent"
              animate={{ scaleX: [1, 1.2, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="h-1 w-1 rounded-full bg-[#00E5FF]"
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="h-px w-16 bg-gradient-to-r from-transparent via-[#4F7BFF] to-transparent"
              animate={{ scaleX: [1, 1.2, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
            />
          </motion.div>
        </div>

        {/* Solutions Grid */}
        <div className="mb-24 grid gap-12 md:grid-cols-2 lg:mb-32 lg:grid-cols-3 lg:gap-16">
          {solutions.map((solution, index) => (
            <SolutionCard
              key={solution.title}
              title={solution.title}
              description={solution.description}
              tagline={solution.tagline}
              cta={solution.cta}
              icon={solution.icon}
              index={index}
            />
          ))}
        </div>

        {/* Global CTA - Minimal */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative mx-auto max-w-3xl text-center"
        >
          {/* Subtle orbital glow */}
          <div className="pointer-events-none absolute inset-0 -z-10">
            <motion.div
              className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
              style={{
                background: 'radial-gradient(circle, rgba(31, 74, 255, 0.15), transparent 70%)',
              }}
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>

          <p className="mb-10 text-lg leading-[160%] text-[#E0E6F0]/75 lg:text-xl">
            {t.solutions.globalCta}
          </p>

          <motion.button
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-2xl border px-10 py-5 backdrop-blur-sm transition-all duration-500"
            style={{
              borderColor: 'rgba(79, 123, 255, 0.3)',
              background: 'rgba(31, 74, 255, 0.1)',
            }}
            whileHover={{
              scale: 1.04,
              borderColor: 'rgba(0, 229, 255, 0.5)',
              background: 'rgba(31, 74, 255, 0.2)',
              boxShadow: '0 0 50px -10px rgba(31, 74, 255, 0.6)',
            }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Shimmer effect */}
            <motion.span
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
              }}
              initial={{ x: '-100%', skewX: -15 }}
              whileHover={{ x: '200%' }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
            />

            <span className="relative z-10 font-medium text-white">
              {t.solutions.globalCtaButton}
            </span>

            <motion.svg
              className="relative z-10 h-5 w-5 text-[#00E5FF]"
              whileHover={{ x: 6 }}
              transition={{ duration: 0.3 }}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </motion.svg>
          </motion.button>
        </motion.div>
      </div>

      {/* Bottom operational divider */}
      <motion.div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4F7BFF]/20 to-transparent"
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />
    </section>
  );
}
