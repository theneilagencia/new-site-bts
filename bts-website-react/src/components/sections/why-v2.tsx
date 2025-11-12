'use client';

import { motion } from 'motion/react';
import { useLanguage } from '../../contexts/language-context';
import { ChevronDown } from 'lucide-react';

export function WhyV2() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-[var(--bg-primary)] py-32">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-[0.02]">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px w-full"
            style={{
              top: `${30 + i * 20}%`,
              background: 'linear-gradient(90deg, transparent, var(--accent-primary), transparent)',
            }}
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{
              duration: 15 + i * 3,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 flex items-center justify-center gap-3"
          >
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[var(--border-color)]" />
            <span className="font-mono text-xs uppercase tracking-widest text-[var(--text-tertiary)]">
              {t.privacy.whyTitle}
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[var(--border-color)]" />
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-12 text-center text-[var(--text-primary)]"
          >
            {t.privacy.whyTitle}
          </motion.h2>

          {/* Problem Statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="group relative mb-12"
          >
            <div className="absolute inset-0 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-secondary)]/50 backdrop-blur-sm" />
            <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-[#00639A]/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            
            {/* Corner accents */}
            <div className="absolute left-0 top-0 h-16 w-16">
              <div className="absolute left-0 top-0 h-px w-16 bg-gradient-to-r from-[#00639A] to-transparent" />
              <div className="absolute left-0 top-0 h-16 w-px bg-gradient-to-b from-[#00639A] to-transparent" />
            </div>
            <div className="absolute right-0 top-0 h-16 w-16">
              <div className="absolute right-0 top-0 h-px w-16 bg-gradient-to-l from-[#00639A] to-transparent" />
              <div className="absolute right-0 top-0 h-16 w-px bg-gradient-to-b from-[#00639A] to-transparent" />
            </div>

            <div className="relative p-10 lg:p-12">
              <p className="text-center text-lg text-[var(--text-tertiary)]">
                {t.privacy.whyText1}
              </p>
            </div>
          </motion.div>

          {/* Arrow Down */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12 flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="rounded-full border border-[var(--border-color)] bg-[var(--bg-secondary)]/50 p-3 backdrop-blur-sm"
            >
              <ChevronDown className="h-5 w-5 text-[var(--accent-primary)]" />
            </motion.div>
          </motion.div>

          {/* Solution Statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="group relative"
          >
            <div className="absolute inset-0 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-secondary)]/50 backdrop-blur-sm" />
            <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-[#21B6F3]/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            
            {/* Corner accents */}
            <div className="absolute bottom-0 left-0 h-16 w-16">
              <div className="absolute bottom-0 left-0 h-px w-16 bg-gradient-to-r from-[#21B6F3] to-transparent" />
              <div className="absolute bottom-0 left-0 h-16 w-px bg-gradient-to-t from-[#21B6F3] to-transparent" />
            </div>
            <div className="absolute bottom-0 right-0 h-16 w-16">
              <div className="absolute bottom-0 right-0 h-px w-16 bg-gradient-to-l from-[#21B6F3] to-transparent" />
              <div className="absolute bottom-0 right-0 h-16 w-px bg-gradient-to-t from-[#21B6F3] to-transparent" />
            </div>

            <div className="relative p-10 lg:p-12">
              <p className="text-center text-lg text-[var(--text-secondary)]">
                {t.privacy.whyText2}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}