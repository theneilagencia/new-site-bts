import { motion } from 'framer-motion';
import { Home, Building2, School, Factory } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { staggerContainer, staggerItem } from '@/lib/animations';

export function SolutionsSection() {
  const { t } = useLanguage();

  const solutions = [
    { icon: Home, title: t.solutions.solution1Title, text: t.solutions.solution1Text },
    { icon: Building2, title: t.solutions.solution2Title, text: t.solutions.solution2Text },
    { icon: School, title: t.solutions.solution3Title, text: t.solutions.solution3Text },
    { icon: Factory, title: t.solutions.solution4Title, text: t.solutions.solution4Text },
  ];

  return (
    <section id="solutions" className="relative overflow-hidden bg-[var(--color-bg-primary)] py-20 lg:py-32">
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
              {t.solutions.title}
            </h2>
            <p className="text-xl text-[var(--color-text-secondary)]">
              {t.solutions.subtitle}
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  whileHover={{ y: -8 }}
                  className="group rounded-2xl border border-[var(--color-text-tertiary)]/10 bg-[var(--color-bg-secondary)] p-8 transition-all"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-bts-s02 to-bts-s05">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mb-2 text-2xl font-semibold text-[var(--color-text-primary)]">
                    {solution.title}
                  </h3>
                  <p className="text-[var(--color-text-secondary)]">
                    {solution.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
