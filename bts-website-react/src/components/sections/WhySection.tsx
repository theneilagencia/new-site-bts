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
                className="group relative rounded-2xl glass border border-white/10 p-8 overflow-hidden"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {/* Diagonal shine effect on hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1200"
                  style={{
                    background: 'linear-gradient(135deg, transparent 0%, transparent 40%, rgba(255, 255, 255, 0.2) 50%, transparent 60%, transparent 100%)',
                    backgroundSize: '200% 200%',
                  }}
                  animate={{
                    backgroundPosition: ['0% 0%', '200% 200%'],
                  }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    repeatDelay: 0.5,
                  }}
                />
                
                <div className="relative z-10">
                  <h3 className="mb-4 text-2xl font-semibold text-white">
                    {reason.title}
                  </h3>
                  <p className="text-white/80">
                    {reason.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
