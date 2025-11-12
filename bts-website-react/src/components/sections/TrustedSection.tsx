import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { fadeInUp } from '@/lib/animations';
import { Starfield } from '@/components/ui/Starfield';

export function TrustedSection() {
  const { t } = useLanguage();

  return (
    <section id="trusted" className="relative overflow-hidden bg-[var(--color-bg-secondary)] py-20">
      <Starfield density={50} />
      <div className="container relative z-10 mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-[var(--color-text-primary)] lg:text-4xl">
            {t.trusted.title}
          </h2>
          <p className="mb-12 text-lg text-[var(--color-text-secondary)]">
            {t.trusted.subtitle}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-12">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="h-12 w-32 rounded-lg bg-[var(--color-bg-primary)] border border-[var(--color-text-tertiary)]/10"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
