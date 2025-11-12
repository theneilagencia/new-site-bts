import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { staggerContainer, staggerItem } from '@/lib/animations';

export function WhySection() {
  const { t } = useLanguage();

  const reasons = [
    { title: t.why.reason1Title, text: t.why.reason1Text },
    { title: t.why.reason2Title, text: t.why.reason2Text },
    { title: t.why.reason3Title, text: t.why.reason3Text },
  ];

  return (
    <section id="why" className="relative overflow-hidden bg-[var(--color-bg-secondary)] py-20 lg:py-32">
      <div className="container relative z-10 mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="mx-auto max-w-6xl"
        >
          <motion.div variants={staggerItem} className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-[var(--color-text-primary)] lg:text-5xl">
              {t.why.title}
            </h2>
            <p className="text-xl text-[var(--color-text-secondary)]">
              {t.why.subtitle}
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="rounded-2xl border border-[var(--color-text-tertiary)]/10 bg-[var(--color-bg-primary)] p-8"
              >
                <h3 className="mb-4 text-2xl font-semibold text-[var(--color-text-primary)]">
                  {reason.title}
                </h3>
                <p className="text-[var(--color-text-secondary)]">
                  {reason.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
