'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

export function WhySection() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-[var(--bg-primary)] py-20 lg:py-24">
      {/* Minimal background - igual ao hero */}
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

      {/* Radial Gradient Overlay - igual ao hero */}
      <div className="absolute inset-0">
        <div
          className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 opacity-20"
          style={{
            background: 'radial-gradient(circle, #00639A 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          
          {/* Section label - minimal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-16 text-center"
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
                {t.privacy.whyTitle}
              </span>
            </div>
          </motion.div>

          {/* Main content - two column layout */}
          <div className="grid gap-32 lg:grid-cols-2 lg:gap-24">
            
            {/* Problem - Left */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-8"
            >
              {/* Number label */}
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-6xl tracking-tight text-[var(--text-tertiary)]/40 lg:text-7xl">
                  01
                </span>
                <div className="flex-1">
                  <div className="h-px w-full bg-gradient-to-r from-[var(--text-tertiary)]/20 to-transparent" />
                </div>
              </div>

              {/* Label */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <span className="inline-block rounded-full bg-[var(--bg-secondary)] px-4 py-1.5 font-mono text-xs uppercase tracking-wider text-[var(--text-tertiary)]">
                  {t.privacy.challengeLabel}
                </span>
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="space-y-6"
              >
                <p className="leading-[1.6] text-[var(--text-secondary)]">
                  {t.privacy.whyText1}
                </p>
              </motion.div>

              {/* Decorative line */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="h-px w-full origin-left bg-gradient-to-r from-[#00639A]/30 to-transparent"
              />
            </motion.div>

            {/* Solution - Right */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-8"
            >
              {/* Number label */}
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-6xl tracking-tight text-[var(--text-tertiary)]/40 lg:text-7xl">
                  02
                </span>
                <div className="flex-1">
                  <div className="h-px w-full bg-gradient-to-r from-[var(--text-tertiary)]/20 to-transparent" />
                </div>
              </div>

              {/* Label */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <span className="inline-block rounded-full bg-gradient-to-r from-[#00639A]/10 to-[#21B6F3]/10 px-4 py-1.5 font-mono text-xs uppercase tracking-wider text-[var(--accent-primary)]">
                  {t.privacy.missionLabel}
                </span>
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="space-y-6"
              >
                <p className="bg-gradient-to-br from-[var(--text-primary)] to-[var(--text-secondary)] bg-clip-text leading-[1.6] text-transparent">
                  {t.privacy.whyText2}
                </p>
              </motion.div>

              {/* Decorative line */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="h-px w-full origin-left bg-gradient-to-r from-[#21B6F3]/50 via-[#00639A]/30 to-transparent"
              />
            </motion.div>
          </div>

          {/* Bottom minimal divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 1, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-32 h-px w-full max-w-md origin-center bg-gradient-to-r from-transparent via-[var(--text-tertiary)]/20 to-transparent"
          />
        </div>
      </div>
    </section>
  );
}