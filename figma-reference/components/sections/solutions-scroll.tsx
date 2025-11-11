'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { useLanguage } from '../../contexts/language-context';
import { useRef } from 'react';
import { Building2, Layers, ShieldCheck, ArrowRight } from 'lucide-react';

export function SolutionsScroll() {
  const { t } = useLanguage();
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const solutions = [
    {
      id: 'offshore',
      icon: Building2,
      gradient: 'from-[#00639A] to-[#2A7BA1]',
      accentColor: '#00639A',
      features: [
        'Company Formation',
        'Bank Account Opening',
        'Nominee Services',
        'Virtual Office',
      ],
    },
    {
      id: 'foundation',
      icon: Layers,
      gradient: 'from-[#00639A] to-[#2A7BA1]',
      accentColor: '#2A7BA1',
      features: [
        'Legal Structure',
        'Asset Protection',
        'Succession Planning',
        'Compliance Management',
      ],
    },
    {
      id: 'blocktrust',
      icon: ShieldCheck,
      gradient: 'from-[#00BCA5] to-[#21B6F3]',
      accentColor: '#00BCA5',
      features: [
        'Blockchain Verification',
        'Smart Contracts',
        'Digital Identity',
        'Immutable Records',
      ],
    },
  ];

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-[var(--bg-primary)] py-32">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#00639A03,transparent_60%)]" />
        <motion.div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: 'radial-gradient(circle, var(--accent-primary) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-block"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border-color)] bg-[var(--bg-secondary)]/50 px-4 py-2 backdrop-blur-xl">
              <Layers className="h-4 w-4 text-[var(--accent-primary)]" />
              <span className="font-mono text-xs uppercase tracking-wider text-[var(--text-tertiary)]">
                {t.solutions.badge}
              </span>
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-4 bg-gradient-to-br from-[var(--text-primary)] to-[var(--text-tertiary)] bg-clip-text text-transparent"
          >
            {t.solutions.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto max-w-2xl text-lg text-[var(--text-tertiary)]"
          >
            {t.solutions.subtitle}
          </motion.p>
        </div>

        {/* Solutions Cards - Stacked Layout */}
        <div className="mx-auto max-w-6xl space-y-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            const delay = index * 0.2;

            return (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, delay }}
                className="group relative"
              >
                {/* Card */}
                <div className="relative overflow-hidden rounded-3xl border border-[var(--border-color)] bg-gradient-to-br from-[var(--bg-secondary)]/80 to-[var(--bg-secondary)]/40 backdrop-blur-2xl transition-all duration-500 hover:border-[var(--accent-primary)]/30">
                  
                  {/* Hover Glow */}
                  <div
                    className="absolute inset-0 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background: `radial-gradient(circle at 50% 0%, ${solution.accentColor}15, transparent 70%)`,
                    }}
                  />

                  {/* Content */}
                  <div className="relative grid gap-8 p-8 lg:grid-cols-[300px_1fr] lg:p-12">
                    
                    {/* Left - Icon & Title */}
                    <div className="space-y-6">
                      <motion.div
                        whileHover={{ scale: 1.05, rotate: 5 }}
                        className="inline-flex"
                      >
                        <div
                          className={`flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br ${solution.gradient} shadow-xl lg:h-24 lg:w-24`}
                          style={{
                            boxShadow: `0 20px 60px ${solution.accentColor}40`,
                          }}
                        >
                          <Icon className="h-10 w-10 text-white lg:h-12 lg:w-12" />
                        </div>
                      </motion.div>

                      <div>
                        <h3 className="mb-2 text-2xl text-[var(--text-primary)] lg:text-3xl">
                          {t.solutions[`${solution.id}Title` as keyof typeof t.solutions]}
                        </h3>
                        <p className="text-[var(--text-tertiary)]">
                          {t.solutions[`${solution.id}Text` as keyof typeof t.solutions]}
                        </p>
                      </div>

                      {/* CTA */}
                      <motion.button
                        whileHover={{ x: 5 }}
                        className="group/btn inline-flex items-center gap-2 text-sm font-medium text-[var(--accent-primary)]"
                      >
                        <span>Learn More</span>
                        <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                      </motion.button>
                    </div>

                    {/* Right - Features Grid */}
                    <div className="grid gap-4 sm:grid-cols-2">
                      {solution.features.map((feature, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: delay + 0.1 + i * 0.05 }}
                          className="group/feature relative overflow-hidden rounded-2xl border border-[var(--border-color)] bg-[var(--bg-primary)]/30 p-4 backdrop-blur-sm transition-all hover:border-[var(--accent-primary)]/50"
                        >
                          {/* Feature hover glow */}
                          <div
                            className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/feature:opacity-100"
                            style={{
                              background: `linear-gradient(135deg, ${solution.accentColor}10, transparent)`,
                            }}
                          />

                          <div className="relative flex items-center gap-3">
                            <div
                              className="h-1.5 w-1.5 rounded-full"
                              style={{ backgroundColor: solution.accentColor }}
                            />
                            <span className="text-sm font-medium text-[var(--text-primary)]">
                              {feature}
                            </span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--accent-primary)] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>

                {/* Card number */}
                <div className="absolute -left-4 -top-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-[var(--border-color)] bg-[var(--bg-secondary)]/80 backdrop-blur-xl">
                  <span className="font-mono text-lg text-[var(--text-tertiary)]">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom decorative element */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.8 }}
          className="mx-auto mt-20 h-px w-full max-w-3xl bg-gradient-to-r from-transparent via-[var(--accent-primary)]/30 to-transparent"
        />
      </div>
    </section>
  );
}
