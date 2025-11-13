'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

export function PrivacySection() {
  const { t } = useLanguage();

  const features = [
    {
      number: '01',
      text: t.privacy.feature1,
      accent: '#00639A', // S02
    },
    {
      number: '02',
      text: t.privacy.feature2,
      accent: '#2A7BA1', // S05
    },
    {
      number: '03',
      text: t.privacy.feature3,
      accent: '#21B6F3', // S06
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[var(--bg-primary)] py-12 lg:py-16">
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

      {/* Radial Gradient Overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute left-1/3 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 opacity-15"
          style={{
            background: 'radial-gradient(circle, #21B6F3 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-20 max-w-3xl"
          >
            <h2 className="mb-8 bg-gradient-to-br from-[var(--text-primary)] to-[var(--text-tertiary)] bg-clip-text text-transparent">
              {t.privacy.privacyTitle}
            </h2>

            <p className="leading-[1.7] text-[var(--text-tertiary)]">
              {t.privacy.privacyIntro}{' '}
              <span className="relative inline-block text-[var(--accent-primary)]">
                <span className="relative z-10">{t.privacy.onewayMirror}</span>
                <motion.span
                  className="absolute -bottom-0.5 left-0 h-px w-full bg-gradient-to-r from-[#00639A] to-[#21B6F3]"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                />
              </span>
              {t.privacy.privacyIntro2}
            </p>
          </motion.div>

          {/* Features List */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  duration: 0.8,
                  delay: 0.1 + index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative"
              >
                {/* Background effect on hover */}
                <div className="absolute -inset-x-4 -inset-y-3 rounded-xl opacity-0 transition-all duration-500 group-hover:opacity-100"
                  style={{
                    background: `linear-gradient(90deg, ${feature.accent}05, transparent)`,
                  }}
                />

                <div className="relative flex items-start gap-6 py-3">
                  {/* Number */}
                  <motion.span
                    className="font-mono text-3xl tracking-tight text-[var(--text-tertiary)]/30"
                    whileInView={{ opacity: [0.3, 0.6, 0.3] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.3,
                    }}
                  >
                    {feature.number}
                  </motion.span>

                  {/* Vertical line */}
                  <div className="relative flex items-center pt-2">
                    <div className="h-8 w-px bg-gradient-to-b from-[var(--text-tertiary)]/20 to-transparent" />
                    <motion.div
                      className="absolute left-0 top-2 h-2 w-px"
                      style={{ background: feature.accent }}
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    />
                  </div>

                  {/* Text */}
                  <div className="flex-1 pt-1.5">
                    <p className="text-[var(--text-secondary)] transition-colors duration-300 group-hover:text-[var(--text-primary)]">
                      {feature.text}
                    </p>
                  </div>

                  {/* Animated indicator */}
                  <motion.div
                    className="mt-2 h-2 w-2 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{ backgroundColor: feature.accent }}
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                </div>

                {/* Bottom line */}
                <motion.div
                  className="ml-20 mt-3 h-px w-24 origin-left bg-gradient-to-r to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{ backgroundImage: `linear-gradient(90deg, ${feature.accent}40, transparent)` }}
                />
              </motion.div>
            ))}
          </div>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mt-20 border-l-2 border-[#00639A]/30 pl-8"
          >
            <p className="font-mono text-sm italic text-[var(--text-tertiary)]">
              "{t.privacy.tagline}"
            </p>
          </motion.div>

          {/* Bottom minimal divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-20 h-px w-full max-w-md origin-center bg-gradient-to-r from-transparent via-[var(--text-tertiary)]/20 to-transparent"
          />
        </div>
      </div>
    </section>
  );
}
