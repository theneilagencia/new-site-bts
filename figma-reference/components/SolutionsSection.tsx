'use client';

import { motion } from 'motion/react';
import { Building2, Shield, Network } from 'lucide-react';
import { SolutionCard } from './SolutionCard';
import { useLanguage } from '../contexts/language-context';

export function SolutionsSection() {
  const { t } = useLanguage();

  const solutions = [
    {
      icon: Building2,
      title: t.solutions.offshore.title,
      description: t.solutions.offshore.description,
      tagline: t.solutions.offshore.tagline,
      cta: t.solutions.offshore.cta,
    },
    {
      icon: Shield,
      title: t.solutions.foundation.title,
      description: t.solutions.foundation.description,
      tagline: t.solutions.foundation.tagline,
      cta: t.solutions.foundation.cta,
    },
    {
      icon: Network,
      title: t.solutions.blocktrust.title,
      description: t.solutions.blocktrust.description,
      tagline: t.solutions.blocktrust.tagline,
      cta: t.solutions.blocktrust.cta,
    },
  ];

  return (
    <section className="relative overflow-hidden py-32 lg:py-40">
      {/* Deep Tech Navy Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B1221] via-[#061428] to-[#0B1221]" />

      {/* Animated global network mesh overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.15]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 50%, rgba(31, 74, 255, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 50%, rgba(0, 229, 255, 0.08) 0%, transparent 50%),
              linear-gradient(rgba(79, 123, 255, 0.02) 1px, transparent 1px),
              linear-gradient(90deg, rgba(79, 123, 255, 0.02) 1px, transparent 1px)
            `,
            backgroundSize: '100% 100%, 100% 100%, 60px 60px, 60px 60px',
          }}
        />
      </div>

      {/* Ambient light effects */}
      <div className="pointer-events-none absolute left-0 top-1/4 h-[500px] w-[500px] rounded-full bg-[#1F4AFF] opacity-[0.03] blur-[120px]" />
      <div className="pointer-events-none absolute right-0 top-3/4 h-[400px] w-[400px] rounded-full bg-[#00E5FF] opacity-[0.02] blur-[100px]" />

      <div className="container relative mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="mb-6 bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
              {t.solutions.title}
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg leading-relaxed text-[#C6CEDF]"
          >
            {t.solutions.subtitle}
          </motion.p>
        </div>

        {/* Solutions Grid - 3 columns on desktop, 1 column on mobile */}
        <div className="mb-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {solutions.map((solution, index) => (
            <SolutionCard
              key={solution.title}
              icon={solution.icon}
              title={solution.title}
              description={solution.description}
              tagline={solution.tagline}
              cta={solution.cta}
              index={index}
              onCtaClick={() => {
                // Handle CTA click - could integrate with chatbot or navigation
                console.log(`CTA clicked for ${solution.title}`);
              }}
            />
          ))}
        </div>

        {/* Global CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="mb-8 text-lg text-[#E0E6F0]">{t.solutions.globalCta}</p>

          <button className="group relative inline-flex items-center gap-3 overflow-hidden rounded-2xl bg-gradient-to-r from-[#1F4AFF] to-[#00E5FF] px-10 py-5 shadow-[0_0_40px_-10px_rgba(31,74,255,0.4)] transition-all duration-500 hover:scale-105 hover:shadow-[0_0_60px_-5px_rgba(31,74,255,0.6)]">
            {/* Animated shimmer effect */}
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />

            <span className="relative z-10 font-medium text-white">
              {t.solutions.globalCtaButton}
            </span>

            {/* Pulsing indicator */}
            <span className="relative z-10 flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}