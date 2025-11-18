'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { useContactForm } from '@/contexts/ContactFormContext';
import { ArrowRight, LogIn } from 'lucide-react';

interface PartnerV6Props {
  onAccessPortal?: () => void;
}

export function PartnerSection({ onAccessPortal }: PartnerV6Props) {
  const { t } = useLanguage();
  const { openContactForm } = useContactForm();

  const infrastructureItems = [
    t.partner.infrastructure1,
    t.partner.infrastructure2,
    t.partner.infrastructure3,
    t.partner.infrastructure4,
  ];

  const growthFeatures = [
    { title: t.partner.growth1Title, text: t.partner.growth1Text },
    { title: t.partner.growth2Title, text: t.partner.growth2Text },
    { title: t.partner.growth3Title, text: t.partner.growth3Text },
  ];

  const benefits = [
    t.partner.benefit1,
    t.partner.benefit2,
    t.partner.benefit3,
    t.partner.benefit4,
    t.partner.benefit5,
  ];

  return (
    <section id="partner" className="relative overflow-hidden bg-[var(--bg-primary)] py-20 lg:py-32">
      {/* Minimal Grid Background */}
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

      {/* Radial Gradient Overlays - BTS Colors */}
      <div className="absolute inset-0">
        <div
          className="absolute left-1/4 top-1/3 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 opacity-12"
          style={{
            background: 'radial-gradient(circle, #00639A 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute right-1/4 bottom-1/3 h-[500px] w-[500px] opacity-10"
          style={{
            background: 'radial-gradient(circle, #21B6F3 0%, transparent 65%)',
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <div className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-[var(--border-color)] bg-[var(--bg-secondary)]/50 px-4 py-2 backdrop-blur-sm">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00639A]/10 to-transparent"
                animate={{ x: ['-200%', '200%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: '#00639A' }}
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
              <span className="relative font-mono text-xs uppercase tracking-widest text-[var(--text-tertiary)]">
                {t.language === 'pt' ? 'PARCERIA ESTRATÉGICA' : 'STRATEGIC PARTNERSHIP'}
              </span>
            </div>
          </motion.div>

          {/* Header */}
          <div className="mb-32 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="mb-8 text-[var(--text-primary)]"
            >
              {t.partner.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto mb-6 max-w-3xl text-xl text-[var(--text-secondary)] lg:text-2xl"
            >
              {t.partner.subtitle}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto max-w-4xl leading-relaxed text-[var(--text-tertiary)]"
            >
              {t.partner.intro}
            </motion.p>
          </div>

          {/* Section 1: Infrastructure */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mb-32"
          >
            {/* Number + Title */}
            <div className="mb-12 flex items-baseline gap-6">
              <span className="font-mono text-6xl tracking-tight text-[var(--text-tertiary)]/30 lg:text-7xl">
                01
              </span>
              <div className="flex-1 space-y-3">
                <div 
                  className="h-px w-full"
                  style={{
                    background: 'linear-gradient(to right, rgba(0, 99, 154, 0.3), transparent)',
                  }}
                />
                <h3 className="text-[var(--text-primary)]">
                  {t.partner.infrastructureTitle}
                </h3>
              </div>
            </div>

            <p className="mb-10 max-w-3xl text-[var(--text-tertiary)]">
              {t.partner.infrastructureIntro}
            </p>

            {/* Grid 2 cols */}
            <div className="grid gap-6 md:grid-cols-2">
              {infrastructureItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="flex items-start gap-4">
                    {/* Minimal Indicator - BTS S02 */}
                    <div 
                      className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full"
                      style={{ backgroundColor: '#00639A' }}
                    />
                    
                    {/* Text */}
                    <p className="flex-1 leading-relaxed text-[var(--text-tertiary)]">
                      {item}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Section 2: Growth */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mb-32"
          >
            {/* Number + Title */}
            <div className="mb-12 flex items-baseline gap-6">
              <span className="font-mono text-6xl tracking-tight text-[var(--text-tertiary)]/30 lg:text-7xl">
                02
              </span>
              <div className="flex-1 space-y-3">
                <div 
                  className="h-px w-full"
                  style={{
                    background: 'linear-gradient(to right, rgba(42, 123, 161, 0.3), transparent)',
                  }}
                />
                <h3 className="text-[var(--text-primary)]">
                  {t.partner.growthTitle}
                </h3>
              </div>
            </div>

            {/* Vertical Stack */}
            <div className="space-y-12">
              {growthFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: index * 0.15 }}
                  className="group"
                >
                  <div className="flex items-start gap-6">
                    {/* Accent Line - BTS S04 */}
                    <div 
                      className="mt-2 h-12 w-0.5"
                      style={{
                        background: 'linear-gradient(to bottom, rgba(42, 123, 161, 0.6), transparent)',
                      }}
                    />
                    
                    <div className="flex-1 space-y-2">
                      <h4 className="text-[var(--text-primary)]">
                        {feature.title}
                      </h4>
                      <p className="leading-relaxed text-[var(--text-tertiary)]">
                        {feature.text}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Section 3: Approval Process */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mb-32"
          >
            {/* Number + Title */}
            <div className="mb-12 flex items-baseline gap-6">
              <span className="font-mono text-6xl tracking-tight text-[var(--text-tertiary)]/30 lg:text-7xl">
                03
              </span>
              <div className="flex-1 space-y-3">
                <div 
                  className="h-px w-full"
                  style={{
                    background: 'linear-gradient(to right, rgba(33, 182, 243, 0.3), transparent)',
                  }}
                />
                <h3 className="text-[var(--text-primary)]">
                  {t.partner.approvalTitle}
                </h3>
              </div>
            </div>

            <p className="mb-16 max-w-4xl leading-relaxed text-[var(--text-tertiary)]">
              {t.partner.approvalText}
            </p>

            {/* What You Get */}
            <div className="relative">
              <h4 className="mb-8 text-[var(--text-secondary)]">
                {t.partner.whatYouGetTitle}
              </h4>
              
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className="group flex items-start gap-3"
                  >
                    {/* Check Mark - BTS S05 */}
                    <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center">
                      <div 
                        className="h-1 w-1 rounded-full"
                        style={{ backgroundColor: '#21B6F3' }}
                      />
                    </div>
                    
                    {/* Text */}
                    <p className="flex-1 text-sm leading-relaxed text-[var(--text-tertiary)]">
                      {benefit}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Dual CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6"
            >
              {/* Primary CTA - Apply to Become Partner - IGUAL AO HERO */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative w-full overflow-hidden rounded-lg sm:w-auto"
                type="button"
                onClick={openContactForm}
                aria-label={t.partner.cta}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#00639A] to-[#21B6F3]" />
                <div className="relative flex items-center gap-2 px-8 py-4 text-white">
                  <span>{t.partner.cta}</span>
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

            {/* Secondary CTA - Partner Login */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative inline-flex w-full items-center justify-center gap-3 overflow-hidden rounded-lg border px-8 py-4 transition-all duration-300 sm:w-auto"
              style={{ 
                borderColor: '#00639A',
                backgroundColor: 'transparent',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(0, 99, 154, 0.05)';
                e.currentTarget.style.borderColor = '#21B6F3';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.borderColor = '#00639A';
              }}
              onClick={onAccessPortal}
            >
              {/* Icon */}
              <LogIn className="h-4 w-4 text-[#00639A] transition-colors duration-300 group-hover:text-[#21B6F3]" />
              
              {/* Text */}
              <span className="relative z-10 text-[#00639A] transition-colors duration-300 group-hover:text-[#21B6F3]">
                {t.partner.ctaLogin}
              </span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}