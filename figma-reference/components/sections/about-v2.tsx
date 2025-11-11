'use client';

import { motion } from 'motion/react';
import { useLanguage } from '../../contexts/language-context';
import { Target, Compass, Award } from 'lucide-react';

export function AboutV2() {
  const { t } = useLanguage();

  const values = [
    {
      icon: Target,
      title: t.about.value1Title,
      text: t.about.value1Text,
      color: '#00639A',
    },
    {
      icon: Compass,
      title: t.about.value2Title,
      text: t.about.value2Text,
      color: '#00BCA5',
    },
    {
      icon: Award,
      title: t.about.value3Title,
      text: t.about.value3Text,
      color: '#2A7BA1',
    },
  ];

  return (
    <section id="about" className="relative overflow-hidden bg-[var(--bg-primary)] py-20 lg:py-24">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `radial-gradient(circle, var(--text-primary) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border-color)] bg-[var(--bg-secondary)]/50 px-4 py-2 backdrop-blur-sm">
              <span className="font-mono text-xs uppercase tracking-widest text-[var(--text-tertiary)]">
                {t.about.badge}
              </span>
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 text-[var(--text-primary)]"
          >
            {t.about.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-[var(--text-tertiary)]"
          >
            {t.about.subtitle}
          </motion.p>
        </div>

        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto mb-20 max-w-4xl rounded-2xl border border-[var(--border-color)] bg-[var(--bg-secondary)]/50 p-8 backdrop-blur-sm lg:p-12"
        >
          <p className="text-center text-lg text-[var(--text-tertiary)]">{t.about.intro}</p>
        </motion.div>

        {/* Vision & Mission Grid */}
        <div className="mb-20 grid gap-8 lg:grid-cols-2">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="group relative"
          >
            <div className="absolute inset-0 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-secondary)]/50 backdrop-blur-sm transition-all duration-500 group-hover:border-[#00639A]/50" />
            <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-[#00639A]/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="relative p-8">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--border-color)] bg-[var(--bg-primary)]/50">
                <div className="h-2 w-2 rounded-full bg-[#00639A]" />
              </div>
              <h3 className="mb-4 text-[var(--text-primary)]">{t.about.visionTitle}</h3>
              <p className="text-[var(--text-tertiary)]">{t.about.visionText}</p>
            </div>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="group relative"
          >
            <div className="absolute inset-0 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-secondary)]/50 backdrop-blur-sm transition-all duration-500 group-hover:border-[#21B6F3]/50" />
            <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-[#21B6F3]/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="relative p-8">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--border-color)] bg-[var(--bg-primary)]/50">
                <div className="h-2 w-2 rounded-full bg-[#21B6F3]" />
              </div>
              <h3 className="mb-4 text-[var(--text-primary)]">{t.about.missionTitle}</h3>
              <p className="text-[var(--text-tertiary)]">{t.about.missionText}</p>
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center text-[var(--text-primary)]"
          >
            {t.about.valuesTitle}
          </motion.h3>

          <div className="grid gap-8 lg:grid-cols-3">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-secondary)]/50 backdrop-blur-sm transition-all duration-500" />
                  <div
                    className="absolute -inset-[1px] rounded-2xl opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-20"
                    style={{ background: `linear-gradient(135deg, ${value.color}, transparent)` }}
                  />
                  <div className="relative p-8 text-center">
                    <div className="mb-6 flex justify-center">
                      <div
                        className="inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-[var(--border-color)] bg-[var(--bg-primary)]/50 transition-transform duration-500 group-hover:scale-110"
                        style={{ boxShadow: `0 0 30px ${value.color}15` }}
                      >
                        <Icon className="h-7 w-7" style={{ color: value.color }} />
                      </div>
                    </div>
                    <h4 className="mb-3 text-[var(--text-primary)]">{value.title}</h4>
                    <p className="text-sm text-[var(--text-tertiary)]">{value.text}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}