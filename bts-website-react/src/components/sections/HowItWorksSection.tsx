import { useState } from 'react';
import { motion } from 'framer-motion';
import { ButtonPrimary } from '@/components/ui/ButtonPrimary';
import { useLanguage } from '@/contexts/LanguageContext';

export function HowItWorksSection() {
  const { t } = useLanguage();
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { number: 1, title: t.howItWorks.step1 },
    { number: 2, title: t.howItWorks.step2 },
    { number: 3, title: t.howItWorks.step3 },
    { number: 4, title: t.howItWorks.step4 },
    { number: 5, title: t.howItWorks.step5 },
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-[#122539] to-[#0A2540] relative overflow-hidden">
      {/* Animated background lines */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-white to-transparent"
            style={{ top: `${20 + i * 15}%`, left: 0, right: 0 }}
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-20 relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-6 text-white">{t.howItWorks.title}</h2>
        </motion.div>

        {/* Interactive Timeline */}
        <div className="max-w-6xl mx-auto mb-16">
          {/* Desktop horizontal timeline */}
          <div className="hidden md:block">
            {/* Progress line */}
            <div className="relative mb-16">
              <div className="absolute top-8 left-0 right-0 h-1 bg-white/10 rounded-full" />
              <motion.div
                className="absolute top-8 left-0 h-1 bg-gradient-to-r from-[#185AB4] to-[#006DA5] rounded-full"
                initial={{ width: '0%' }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: 'easeOut' }}
              />

              {/* Steps */}
              <div className="relative flex justify-between">
                {steps.map((step, index) => (
                  <motion.div
                    key={step.number}
                    className="flex flex-col items-center cursor-pointer"
                    onMouseEnter={() => setActiveStep(index)}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <motion.div
                      className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-all duration-300 ${
                        activeStep === index
                          ? 'bg-gradient-to-br from-[#185AB4] to-[#006DA5] shadow-[0_0_24px_rgba(24,90,180,0.6)]'
                          : 'bg-white/10 backdrop-blur-sm border-2 border-white/20'
                      }`}
                      whileHover={{ scale: 1.1 }}
                    >
                      <span className={`text-2xl ${activeStep === index ? 'text-white' : 'text-white/60'}`}>
                        {step.number}
                      </span>
                    </motion.div>

                    <motion.div
                      className={`text-center max-w-[180px] transition-all duration-300 ${
                        activeStep === index ? 'opacity-100' : 'opacity-60'
                      }`}
                    >
                      <p className="text-white text-sm leading-relaxed">{step.title}</p>
                    </motion.div>

                    {/* Pulse effect on active */}
                    {activeStep === index && (
                      <motion.div
                        className="absolute top-0 w-16 h-16 rounded-full bg-[#185AB4]"
                        initial={{ opacity: 0.6, scale: 1 }}
                        animate={{ opacity: 0, scale: 2 }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile vertical timeline */}
          <div className="md:hidden space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                className="flex gap-6 items-start"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#185AB4] to-[#006DA5] rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white">{step.number}</span>
                </div>
                <div className="flex-1 pt-2">
                  <p className="text-white/90">{step.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <ButtonPrimary className="text-lg px-10 py-5 shadow-[0_0_24px_rgba(24,90,180,0.5)]">
              {t.howItWorks.cta}
            </ButtonPrimary>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
