'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight, Play } from 'lucide-react';
import { useRef } from 'react';

export function HeroSection() {
  const { t } = useLanguage();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-[var(--bg-primary)] pt-20"
    >
      {/* Animated Grid Background */}
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

      {/* Radial Gradient Overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute left-1/2 top-1/2 h-[1000px] w-[1000px] -translate-x-1/2 -translate-y-1/2 opacity-20"
          style={{
            background: 'radial-gradient(circle, #00639A 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute left-1/4 top-1/4 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 opacity-15"
          style={{
            background: 'radial-gradient(circle, #21B6F3 0%, transparent 60%)',
          }}
        />
      </div>

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-1 w-1 rounded-full bg-[var(--accent-primary)]"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Content */}
      <motion.div
        style={{ y, opacity }}
        className="container relative z-10 mx-auto px-6 lg:px-8"
      >
        <div className="flex min-h-screen flex-col items-center justify-center text-center pb-32 pt-12">
          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mx-auto mb-8 max-w-5xl overflow-visible bg-gradient-to-b from-[var(--text-primary)] to-[var(--text-tertiary)] bg-clip-text pb-2 text-transparent"
          >
            {t.hero.title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto mb-12 mt-6 max-w-3xl text-xl text-[var(--text-tertiary)]"
          >
            {t.hero.subtitle}
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mx-auto mb-12 max-w-2xl text-[var(--text-tertiary)]"
          >
            {t.hero.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col gap-4 sm:flex-row mb-24"
          >
            {/* Primary CTA */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#00639A] to-[#21B6F3]" />
              <div className="relative flex items-center gap-2 px-8 py-4 text-white">
                <span className="font-medium">{t.hero.cta}</span>
                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="h-4 w-4" />
                </motion.div>
              </div>
              <motion.div
                className="absolute inset-0 bg-white/15 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                initial={false}
              />
            </motion.button>

            {/* Secondary CTA */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative overflow-hidden rounded-lg border border-[var(--border-color)] bg-[var(--bg-secondary)]/50 backdrop-blur-sm"
            >
              <div className="relative flex items-center gap-2 px-8 py-4 text-[var(--text-primary)]">
                <Play className="h-4 w-4" />
                <span className="font-medium">{t.hero.ctaSecondary}</span>
              </div>
              <motion.div
                className="absolute inset-0 bg-[#00639A]/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                initial={false}
              />
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator - Fixed positioning */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-32 left-1/2 z-20 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <div className="h-12 w-6 rounded-full border-2 border-[var(--border-color)] p-1">
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="h-2 w-2 rounded-full bg-[var(--accent-primary)]"
            />
          </div>
          <span className="font-mono text-xs uppercase tracking-widest text-[var(--text-tertiary)]">
            Scroll
          </span>
        </motion.div>
      </motion.div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--bg-primary)] to-transparent" />
    </section>
  );
}