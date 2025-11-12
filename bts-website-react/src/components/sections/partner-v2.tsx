'use client';

import { motion } from 'motion/react';
import { useLanguage } from '../../contexts/language-context';
import { ArrowRight, Award, TrendingUp, Globe, Users, Zap, Clock } from 'lucide-react';

export function PartnerV2() {
  const { t } = useLanguage();

  const benefits = [
    { icon: Award, title: t.partner.benefit1Title, text: t.partner.benefit1Text, color: '#00639A' },
    { icon: TrendingUp, title: t.partner.benefit2Title, text: t.partner.benefit2Text, color: '#00639A' },
    { icon: Globe, title: t.partner.benefit3Title, text: t.partner.benefit3Text, color: '#00BCA5' },
    { icon: Users, title: t.partner.benefit4Title, text: t.partner.benefit4Text, color: '#2A7BA1' },
  ];

  return (
    <section id="partner" className="relative overflow-hidden bg-[var(--bg-secondary)] py-20 lg:py-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `linear-gradient(var(--border-color) 1px, transparent 1px), linear-gradient(90deg, var(--border-color) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6 text-[var(--text-primary)]"
          >
            {t.partner.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-8 text-lg font-semibold text-[var(--text-tertiary)]"
          >
            {t.partner.subtitle}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[var(--text-tertiary)]"
          >
            {t.partner.intro}
          </motion.p>
        </div>

        {/* Benefits Grid */}
        <div className="mb-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                whileHover={{ y: -4 }}
                className="group relative"
              >
                <div className="absolute inset-0 rounded-xl border border-[var(--border-color)] bg-[var(--bg-primary)]/50 backdrop-blur-sm transition-all duration-500 group-hover:border-[var(--accent-primary)]/50" />
                <div
                  className="absolute -inset-[1px] rounded-xl opacity-0 blur-lg transition-opacity duration-500 group-hover:opacity-20"
                  style={{ background: `linear-gradient(135deg, ${benefit.color}, transparent)` }}
                />
                <div className="relative p-6">
                  <div className="mb-4">
                    <div
                      className="inline-flex h-12 w-12 items-center justify-center rounded-lg border border-[var(--border-color)] bg-[var(--bg-secondary)]/50 transition-transform duration-500 group-hover:scale-110"
                      style={{ boxShadow: `0 0 20px ${benefit.color}10` }}
                    >
                      <Icon className="h-5 w-5" style={{ color: benefit.color }} />
                    </div>
                  </div>
                  <h4 className="mb-2 text-[var(--text-primary)]">{benefit.title}</h4>
                  <p className="text-sm text-[var(--text-tertiary)]">{benefit.text}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Box */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative mx-auto max-w-4xl"
        >
          <div className="absolute inset-0 rounded-2xl border border-[var(--border-color)] bg-gradient-to-br from-[#00639A]/5 to-[#21B6F3]/5 backdrop-blur-sm" />
          <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-[#00639A]/20 to-[#21B6F3]/20 opacity-0 blur-xl transition-opacity duration-500 hover:opacity-100" />
          
          <div className="relative p-12 text-center">
            <p className="mb-8 text-xl text-[var(--text-tertiary)]">{t.partner.ctaText}</p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#00639A] to-[#21B6F3]" />
              <div className="relative flex items-center gap-2 px-8 py-4 text-white">
                <span className="font-medium">{t.partner.cta}</span>
                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="h-4 w-4" />
                </motion.div>
              </div>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}