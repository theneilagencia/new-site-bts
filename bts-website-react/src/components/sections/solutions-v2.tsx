'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { useLanguage } from '../../contexts/language-context';
import { useRef, useState } from 'react';

export function SolutionsV2() {
  const { t } = useLanguage();
  const containerRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const solutions = [
    {
      key: 'offshore',
      number: '01',
      accent: '#00639A', // S02
    },
    {
      key: 'foundation',
      number: '02',
      accent: '#2A7BA1', // S05
    },
    {
      key: 'blocktrust',
      number: '03',
      accent: '#21B6F3', // S06
    },
  ];

  return (
    <section
      id="solutions"
      ref={containerRef}
      className="relative overflow-hidden bg-[var(--bg-primary)] pb-12 pt-20 lg:pb-16 lg:pt-12"
    >
      {/* Minimal Grid Background - consistente com outras seções */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(var(--border-color) 1px, transparent 1px),
              linear-gradient(90deg, var(--border-color) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      {/* Radial Gradient Overlay - sutis como nas outras seções */}
      <div className="absolute inset-0">
        <div
          className="absolute left-1/2 top-1/4 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 opacity-15"
          style={{
            background: 'radial-gradient(circle, #21B6F3 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute right-1/3 bottom-1/3 h-[600px] w-[600px] opacity-10"
          style={{
            background: 'radial-gradient(circle, #00639A 0%, transparent 65%)',
          }}
        />
      </div>

      {/* Floating Particles - sutis como no hero */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-1 w-1 rounded-full bg-[var(--accent-primary)]"
          style={{
            left: `${20 + i * 6}%`,
            top: `${30 + (i % 3) * 20}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 4 + i * 1.5,
            repeat: Infinity,
            delay: i * 0.8,
            ease: 'easeInOut',
          }}
        />
      ))}

      <div className="container relative z-10 mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          {/* Section Header */}
          <div className="mb-24 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <div className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-[var(--border-color)] bg-[var(--bg-secondary)]/50 px-4 py-2 backdrop-blur-sm">
                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--accent-primary)]/10 to-transparent"
                  animate={{ x: ['-200%', '200%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                />
                <span className="relative font-mono text-xs uppercase tracking-widest text-[var(--text-tertiary)]">
                  {t.solutions.badge}
                </span>
              </div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-8 bg-gradient-to-b from-[var(--text-primary)] to-[var(--text-tertiary)] bg-clip-text text-transparent"
            >
              {t.solutions.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mx-auto max-w-3xl text-lg leading-[1.7] text-[var(--text-tertiary)]"
            >
              {t.solutions.subtitle}
            </motion.p>
          </div>

          {/* Solutions List */}
          <div className="space-y-20">
            {solutions.map((solution, index) => {
              const data = t.solutions[solution.key as keyof typeof t.solutions] as any;
              const isHovered = hoveredIndex === index;

              return (
                <motion.div
                  key={solution.key}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{
                    duration: 0.9,
                    delay: index * 0.2,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                  className="group relative"
                >
                  {/* Hover glow effect */}
                  <motion.div
                    className="pointer-events-none absolute -inset-12 rounded-3xl opacity-0"
                    animate={{
                      opacity: isHovered ? 1 : 0,
                    }}
                    transition={{ duration: 0.5 }}
                    style={{
                      background: `radial-gradient(circle at center, ${solution.accent}08, transparent 60%)`,
                    }}
                  />

                  {/* Animated corner brackets */}
                  <motion.div
                    className="pointer-events-none absolute -left-4 -top-4 h-8 w-8 opacity-0"
                    animate={{
                      opacity: isHovered ? 0.4 : 0,
                      scale: isHovered ? 1 : 0.8,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute left-0 top-0 h-full w-px" style={{ background: solution.accent }} />
                    <div className="absolute left-0 top-0 h-px w-full" style={{ background: solution.accent }} />
                  </motion.div>
                  <motion.div
                    className="pointer-events-none absolute -bottom-4 -right-4 h-8 w-8 opacity-0"
                    animate={{
                      opacity: isHovered ? 0.4 : 0,
                      scale: isHovered ? 1 : 0.8,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute bottom-0 right-0 h-full w-px" style={{ background: solution.accent }} />
                    <div className="absolute bottom-0 right-0 h-px w-full" style={{ background: solution.accent }} />
                  </motion.div>

                  <div className="relative grid gap-8 lg:grid-cols-12 lg:gap-16">
                    {/* Left: Number + Title */}
                    <div className="flex items-start gap-8 lg:col-span-5">
                      {/* Animated number */}
                      <motion.span
                        className="font-mono text-6xl font-light tracking-tighter text-[var(--text-tertiary)]/70"
                        animate={{
                          opacity: isHovered ? [0.7, 1, 0.7] : [0.6, 0.8, 0.6],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: index * 0.5,
                        }}
                      >
                        {solution.number}
                      </motion.span>

                      {/* Vertical accent line with glow */}
                      <div className="relative flex items-start pt-4">
                        <div className="h-40 w-px bg-gradient-to-b from-[var(--text-tertiary)]/10 to-transparent" />
                        <motion.div
                          className="absolute left-0 top-4 w-px origin-top"
                          style={{
                            background: `linear-gradient(to bottom, ${solution.accent}, transparent)`,
                            height: isHovered ? '120px' : '80px',
                            boxShadow: isHovered ? `0 0 20px ${solution.accent}80` : 'none',
                          }}
                          initial={{ scaleY: 0 }}
                          whileInView={{ scaleY: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.3 + index * 0.15 }}
                        />
                      </div>

                      {/* Title with animated gradient */}
                      <div className="flex-1 pt-3">
                        <motion.h3
                          className="mb-3 transition-all duration-500"
                          animate={{
                            color: isHovered ? solution.accent : solution.accent,
                            x: isHovered ? 4 : 0,
                          }}
                        >
                          {data.title}
                        </motion.h3>

                        {/* Animated underline */}
                        <motion.div
                          className="h-px origin-left bg-gradient-to-r"
                          style={{
                            backgroundImage: `linear-gradient(90deg, ${solution.accent}, transparent)`,
                          }}
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                          animate={{
                            width: isHovered ? '120px' : '60px',
                            opacity: isHovered ? 1 : 0.4,
                          }}
                        />
                      </div>
                    </div>

                    {/* Right: Content */}
                    <motion.div
                      className="lg:col-span-7"
                      animate={{
                        x: isHovered ? 4 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="space-y-6">
                        {/* Description */}
                        <motion.p
                          className="leading-[1.8] text-[var(--text-secondary)]"
                          animate={{
                            opacity: isHovered ? 1 : 0.85,
                          }}
                        >
                          {data.description}
                        </motion.p>

                        {/* Tagline with animated dot */}
                        <div className="flex items-start gap-4">
                          <motion.div
                            className="relative mt-2 h-2 w-2"
                            animate={{
                              scale: isHovered ? [1, 1.8, 1] : [1, 1.3, 1],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: index * 0.6,
                            }}
                          >
                            <div
                              className="h-full w-full rounded-full"
                              style={{
                                backgroundColor: solution.accent,
                                boxShadow: `0 0 ${isHovered ? '20px' : '10px'} ${solution.accent}80`,
                              }}
                            />
                          </motion.div>
                          <p className="flex-1 font-mono text-sm italic leading-relaxed text-[var(--text-tertiary)]">
                            "{data.tagline}"
                          </p>
                        </div>

                        {/* CTA Link with hover effect */}
                        <motion.button
                          className="group/btn relative flex items-center gap-3 pt-4 font-mono text-sm uppercase tracking-[0.15em] transition-colors"
                          style={{ color: solution.accent }}
                          whileHover={{ x: 6 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <span className="relative">
                            {data.cta}
                            {/* Animated underline on hover */}
                            <motion.div
                              className="absolute -bottom-1 left-0 h-px w-0 origin-left transition-all duration-300 group-hover/btn:w-full"
                              style={{ backgroundColor: solution.accent }}
                            />
                          </span>

                          {/* Animated arrow */}
                          <motion.div className="flex items-center">
                            <motion.div
                              className="h-px transition-all duration-300"
                              style={{ backgroundColor: solution.accent }}
                              animate={{
                                width: isHovered ? '32px' : '24px',
                              }}
                            />
                            <motion.div
                              className="h-0 w-0 border-y-[5px] border-l-[6px] border-y-transparent"
                              style={{ borderLeftColor: solution.accent }}
                              animate={{
                                x: [0, 4, 0],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: 'easeInOut',
                              }}
                            />
                          </motion.div>
                        </motion.button>
                      </div>
                    </motion.div>
                  </div>

                  {/* Bottom divider with stagger animation */}
                  {index < solutions.length - 1 && (
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.6 + index * 0.15 }}
                      className="mx-auto mt-20 h-px w-full max-w-3xl origin-center bg-gradient-to-r from-transparent via-[var(--text-tertiary)]/10 to-transparent"
                    />
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Global CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.7 }}
            className="mt-32 text-center"
          >
            <p className="mb-8 text-lg text-[var(--text-tertiary)]">{t.solutions.globalCta}</p>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group relative overflow-hidden rounded-lg shadow-lg shadow-[#00639A]/20 transition-shadow duration-300 hover:shadow-2xl hover:shadow-[#00639A]/30"
            >
              {/* Gradient background */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#00639A] to-[#21B6F3]" />

              {/* Animated shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent"
                animate={{ x: ['-200%', '200%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              />

              {/* Glow border */}
              <motion.div
                className="absolute inset-0 rounded-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  boxShadow: '0 0 40px rgba(33, 182, 243, 0.4)',
                }}
              />

              <div className="relative flex items-center gap-3 px-10 py-4 text-white">
                <span className="font-medium">{t.solutions.globalCtaButton}</span>
                <motion.div
                  animate={{ x: [0, 6, 0] }}
                  transition={{ duration: 1.8, repeat: Infinity }}
                >
                  <div className="flex items-center">
                    <div className="h-px w-5 bg-white" />
                    <div className="h-0 w-0 border-y-[5px] border-l-[6px] border-y-transparent border-l-white" />
                  </div>
                </motion.div>
              </div>
            </motion.button>
          </motion.div>

          {/* Bottom divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, delay: 1, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-24 h-px w-full max-w-md origin-center bg-gradient-to-r from-transparent via-[var(--text-tertiary)]/20 to-transparent"
          />
        </div>
      </div>
    </section>
  );
}