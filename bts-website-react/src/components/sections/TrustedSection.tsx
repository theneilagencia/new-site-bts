'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { useRef } from 'react';

export function TrustedSection() {
  const { t } = useLanguage();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  // Valores visuais abstratos - não estatísticas
  const visualElements = [
    { 
      label: 'Global',
      accent: '#00639A', // S02
      delay: 0,
    },
    { 
      label: 'Private',
      accent: '#2A7BA1', // S05
      delay: 0.2,
    },
    { 
      label: 'Verified',
      accent: '#21B6F3', // S06
      delay: 0.4,
    },
  ];

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-[var(--bg-primary)] py-20 lg:pb-12 lg:pt-24"
    >
      {/* Minimal background */}
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

      {/* Animated Gradient Orbs */}
      <motion.div
        className="pointer-events-none absolute left-1/3 top-1/3 h-[500px] w-[500px] rounded-full opacity-[0.08] blur-[120px]"
        style={{ 
          y,
          background: 'radial-gradient(circle, #00639A, transparent 70%)',
        }}
      />

      {/* Scanning Line Effect */}
      <motion.div
        className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-[#00639A]/30 to-transparent"
        style={{
          top: useTransform(scrollYProgress, [0, 1], ['0%', '100%']),
          opacity: useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 0.2, 0.2, 0]),
        }}
      />

      <div className="container relative z-10 mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          
          {/* Header */}
          <div className="mb-20 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-6 flex justify-center"
            >
              <div className="group relative inline-flex items-center gap-3 rounded-full border border-[var(--border-color)] bg-[var(--bg-primary)]/50 px-5 py-2.5 backdrop-blur-xl">
                {/* Animated border */}
                <motion.div
                  className="absolute inset-0 rounded-full border border-[var(--accent-primary)]/0"
                  animate={{
                    borderColor: ['rgba(0, 99, 154, 0)', 'rgba(0, 99, 154, 0.3)', 'rgba(0, 99, 154, 0)'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />
                
                <motion.div
                  className="h-2 w-2 rounded-full bg-[var(--accent-primary)]"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
                
                <span className="relative font-mono text-xs uppercase tracking-[0.2em] text-[var(--text-tertiary)]">
                  {t.trusted.badge}
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
              {t.trusted.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mx-auto max-w-3xl text-base leading-[1.7] text-[var(--text-tertiary)]"
            >
              {t.trusted.text1}
            </motion.p>
          </div>

          {/* Visual Elements - Abstract representation */}
          <div className="relative py-16">
            {/* Center line */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              className="absolute left-0 right-0 top-1/2 h-px origin-center bg-gradient-to-r from-transparent via-[var(--text-tertiary)]/10 to-transparent"
            />

            {/* Visual markers */}
            <div className="relative grid grid-cols-3 gap-8 lg:gap-16">
              {visualElements.map((element, index) => (
                <motion.div
                  key={element.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{
                    duration: 0.8,
                    delay: element.delay,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group relative flex flex-col items-center"
                >
                  {/* Animated dot */}
                  <motion.div
                    className="relative mb-8 flex h-4 w-4 items-center justify-center"
                    whileHover={{ scale: 1.2 }}
                  >
                    {/* Pulse rings */}
                    <motion.div
                      className="absolute h-8 w-8 rounded-full border"
                      style={{ borderColor: element.accent }}
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.3, 0, 0.3],
                      }}
                      transition={{
                        duration: 2,
                        delay: index * 0.3,
                        repeat: Infinity,
                        ease: 'easeOut',
                      }}
                    />
                    <motion.div
                      className="absolute h-6 w-6 rounded-full border"
                      style={{ borderColor: element.accent }}
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.5, 0, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        delay: 0.2 + index * 0.3,
                        repeat: Infinity,
                        ease: 'easeOut',
                      }}
                    />
                    
                    {/* Center dot */}
                    <div
                      className="h-4 w-4 rounded-full"
                      style={{ 
                        backgroundColor: element.accent,
                        boxShadow: `0 0 20px ${element.accent}60`,
                      }}
                    />
                  </motion.div>

                  {/* Label */}
                  <motion.span
                    className="font-mono text-sm uppercase tracking-[0.2em] text-[var(--text-tertiary)]"
                    animate={{
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 3,
                      delay: index * 0.4,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  >
                    {element.label}
                  </motion.span>

                  {/* Vertical line to center */}
                  <motion.div
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 + element.delay }}
                    className="absolute left-1/2 top-12 h-8 w-px origin-top -translate-x-1/2 bg-gradient-to-b to-transparent"
                    style={{ 
                      backgroundImage: `linear-gradient(to bottom, ${element.accent}40, transparent)`,
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom section - Additional context */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-24 space-y-12"
          >
            {/* Key principles */}
            <div className="grid gap-8 lg:grid-cols-3">
              {[
                {
                  title: t.trusted.foundersTitle,
                  desc: t.trusted.foundersDesc,
                  color: '#00639A',
                },
                {
                  title: t.trusted.familyOfficesTitle,
                  desc: t.trusted.familyOfficesDesc,
                  color: '#2A7BA1',
                },
                {
                  title: t.trusted.globalCitizensTitle,
                  desc: t.trusted.globalCitizensDesc,
                  color: '#21B6F3',
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  className="group relative"
                >
                  {/* Side accent */}
                  <motion.div
                    className="absolute -left-4 top-0 h-full w-px origin-top bg-gradient-to-b to-transparent"
                    style={{ backgroundImage: `linear-gradient(to bottom, ${item.color}, transparent)` }}
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                  />

                  <div className="space-y-3 pl-4">
                    <h3 
                      className="font-mono text-sm uppercase tracking-wider"
                      style={{ color: item.color }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-[var(--text-tertiary)]">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Closing statement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="border-l-2 border-[#00639A]/30 pl-8"
            >
              <p className="font-mono text-sm italic text-[var(--text-tertiary)]">
                "{t.trusted.tagline}"
              </p>
            </motion.div>
          </motion.div>

          {/* Bottom divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-24 h-px w-full max-w-md origin-center bg-gradient-to-r from-transparent via-[var(--text-tertiary)]/20 to-transparent"
          />
        </div>
      </div>
    </section>
  );
}