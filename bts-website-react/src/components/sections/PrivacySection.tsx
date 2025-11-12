import { motion } from 'framer-motion';
import { Shield, Lock, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { staggerContainer, staggerItem } from '@/lib/animations';

export function PrivacySection() {
  const { t } = useLanguage();

  const features = [
    { icon: Shield, text: t.privacy.feature1 },
    { icon: Lock, text: t.privacy.feature2 },
    { icon: CheckCircle, text: t.privacy.feature3 },
  ];

  return (
    <section id="privacy" className="relative overflow-hidden bg-[var(--color-bg-primary)] py-20 lg:py-32">
      <div className="container relative z-10 mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="mx-auto max-w-6xl text-center"
        >
          <motion.h2 variants={staggerItem} className="mb-4 text-4xl font-bold text-[var(--color-text-primary)] lg:text-5xl">
            {t.privacy.title}
          </motion.h2>
          <motion.p variants={staggerItem} className="mb-12 text-xl text-[var(--color-text-secondary)]">
            {t.privacy.subtitle}
          </motion.p>

          <div className="grid gap-8 md:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  className="flex flex-col items-center"
                >
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-bts-s02/20 to-bts-s05/20">
                    <Icon className="h-8 w-8 text-bts-s02" />
                  </div>
                  <p className="text-[var(--color-text-secondary)]">{feature.text}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
