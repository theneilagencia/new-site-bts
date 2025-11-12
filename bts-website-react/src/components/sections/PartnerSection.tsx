import { motion } from 'framer-motion';
import { ArrowRight, LogIn } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { staggerContainer, staggerItem } from '@/lib/animations';
import { WorldMapCanvas } from '@/components/ui/WorldMapCanvas';
import { Starfield } from '@/components/ui/Starfield';

export function PartnerSection() {
  const { t } = useLanguage();

  const infrastructureItems = [
    t.partner.infrastructure1,
    t.partner.infrastructure2,
    t.partner.infrastructure3,
    t.partner.infrastructure4,
  ];

  const benefits = [
    t.partner.benefit1,
    t.partner.benefit2,
    t.partner.benefit3,
    t.partner.benefit4,
    t.partner.benefit5,
  ];

  return (
    <section id="partner" className="relative overflow-hidden bg-[var(--color-bg-primary)] py-20 lg:py-32">
      {/* World Map Canvas */}
      <WorldMapCanvas />
      
      {/* Starfield Background */}
      <Starfield density={60} />

      {/* Radial Gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute left-1/4 top-1/3 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 opacity-20"
          style={{
            background: 'radial-gradient(circle, #185AB4 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute right-1/4 bottom-1/3 h-[500px] w-[500px] opacity-15"
          style={{
            background: 'radial-gradient(circle, #006DA5 0%, transparent 65%)',
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
            <div className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-[var(--color-text-tertiary)]/20 bg-[var(--color-bg-secondary)]/50 px-4 py-2 backdrop-blur-sm">
              {/* Shimmer Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00639A]/10 to-transparent"
                animate={{ x: ['-200%', '200%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              />
              {/* Pulse Dot */}
              <motion.div
                className="h-2 w-2 rounded-full bg-[#00639A]"
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
              <span className="relative font-mono text-xs uppercase tracking-widest text-[var(--color-text-tertiary)]">
                {t.partner.title}
              </span>
            </div>
          </motion.div>

          {/* Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mb-32 text-center"
          >
            <motion.h2
              variants={staggerItem}
              className="mb-8 text-4xl font-bold text-[var(--color-text-primary)] lg:text-6xl"
            >
              {t.partner.title}
            </motion.h2>

            <motion.p
              variants={staggerItem}
              className="mx-auto mb-6 max-w-3xl text-xl text-[var(--color-text-secondary)] lg:text-2xl"
            >
              {t.partner.subtitle}
            </motion.p>

            <motion.p
              variants={staggerItem}
              className="mx-auto max-w-4xl leading-relaxed text-[var(--color-text-tertiary)]"
            >
              {t.partner.intro}
            </motion.p>
          </motion.div>

          {/* Infrastructure Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mb-32"
          >
            <div className="mb-12 flex items-baseline gap-6">
              <span className="font-mono text-6xl tracking-tight text-[var(--color-text-tertiary)]/30 lg:text-7xl">
                01
              </span>
              <div className="flex-1 space-y-3">
                <div 
                  className="h-px w-full"
                  style={{
                    background: 'linear-gradient(to right, rgba(0, 99, 154, 0.3), transparent)',
                  }}
                />
                <h3 className="text-3xl font-semibold text-[var(--color-text-primary)] lg:text-4xl">
                  {t.partner.infrastructureTitle}
                </h3>
              </div>
            </div>

            <p className="mb-10 max-w-3xl text-lg text-[var(--color-text-tertiary)]">
              {t.partner.infrastructureIntro}
            </p>

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
                    <div 
                      className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full"
                      style={{ backgroundColor: '#00639A' }}
                    />
                    <p className="flex-1 leading-relaxed text-[var(--color-text-tertiary)]">
                      {item}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="mb-16"
          >
            <h3 className="mb-8 text-2xl font-semibold text-[var(--color-text-primary)]">
              {t.partner.benefitsTitle}
            </h3>
            <div className="grid gap-4 md:grid-cols-2">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center gap-3 rounded-lg border border-[var(--color-text-tertiary)]/10 bg-[var(--color-bg-secondary)]/50 p-4"
                >
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-bts-s02/20">
                    <div className="h-2 w-2 rounded-full bg-bts-s02" />
                  </div>
                  <span className="text-[var(--color-text-secondary)]">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative w-full overflow-hidden rounded-lg sm:w-auto"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#00639A] to-[#21B6F3]" />
              <div className="relative flex items-center gap-2 px-8 py-4 text-white">
                <span className="font-semibold">{t.partner.cta}</span>
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

            <motion.a
              href="/portal/login"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative inline-flex w-full items-center justify-center gap-3 overflow-hidden rounded-lg border-2 px-8 py-4 transition-all duration-300 sm:w-auto"
              style={{ 
                borderColor: '#00639A',
                backgroundColor: 'transparent',
              }}
            >
              <LogIn className="h-4 w-4 text-[#00639A] transition-colors duration-300 group-hover:text-[#21B6F3]" />
              <span className="relative z-10 font-semibold text-[#00639A] transition-colors duration-300 group-hover:text-[#21B6F3]">
                {t.partner.ctaLogin}
              </span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
