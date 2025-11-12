import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { staggerContainer, staggerItem } from '@/lib/animations';

export function AboutSection() {
  const { t } = useLanguage();

  const stats = [
    { number: t.about.stats1Number, label: t.about.stats1Label },
    { number: t.about.stats2Number, label: t.about.stats2Label },
    { number: t.about.stats3Number, label: t.about.stats3Label },
  ];

  return (
    <section id="about" className="relative overflow-hidden bg-[var(--color-bg-secondary)] py-20 lg:py-32">
      <div className="container relative z-10 mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="mx-auto max-w-6xl"
        >
          <div className="grid gap-12 lg:grid-cols-2">
            <motion.div variants={staggerItem}>
              <h2 className="mb-4 text-4xl font-bold text-[var(--color-text-primary)] lg:text-5xl">
                {t.about.title}
              </h2>
              <p className="mb-6 text-xl text-[var(--color-text-secondary)]">
                {t.about.subtitle}
              </p>
              <p className="text-lg text-[var(--color-text-tertiary)]">
                {t.about.text}
              </p>
            </motion.div>

            <motion.div variants={staggerItem} className="flex items-center">
              <div className="grid w-full gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="mb-2 text-5xl font-bold bg-gradient-to-r from-bts-s02 to-bts-s05 bg-clip-text text-transparent">
                      {stat.number}
                    </div>
                    <div className="text-sm uppercase tracking-wider text-[var(--color-text-tertiary)]">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
