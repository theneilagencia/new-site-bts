import React from 'react';
import { motion } from 'motion/react';
import { Shield, FileText, Network, Link2, MessageSquare, Target } from 'lucide-react';
import { useLanguage } from '../../contexts/language-context';

export function CredibilityBigTech() {
  const { t } = useLanguage();

  const steps = [
    { number: 1, title: t.howItWorks.step1 },
    { number: 2, title: t.howItWorks.step2 },
    { number: 3, title: t.howItWorks.step3 },
    { number: 4, title: t.howItWorks.step4 },
    { number: 5, title: t.howItWorks.step5 },
  ];

  return (
    <>
      {/* Why BTS Exists */}
      <section id="privacy" className="relative py-40 bg-gradient-to-b from-[#0B1221] to-[#0A0E16] overflow-hidden">
        {/* Metallic texture overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(79, 123, 255, 0.1) 2px, rgba(79, 123, 255, 0.1) 4px)`,
          }} />
        </div>

        {/* Side light effect */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#4F7BFF] to-transparent opacity-50" />

        <div className="max-w-[1440px] mx-auto px-6 md:px-20 relative z-10">
          <motion.div
            className="max-w-4xl mx-auto text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              className="mb-12 text-white"
              initial={{ opacity: 0, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              {t.privacy.whyTitle}
            </motion.h2>

            <motion.div
              className="space-y-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <p className="text-2xl text-[#C6CEDF] leading-relaxed">
                {t.privacy.whyText1}
              </p>
              <p className="text-2xl text-white leading-relaxed font-medium">
                {t.privacy.whyText2}
              </p>
            </motion.div>
          </motion.div>

          {/* Privacy is Freedom */}
          <motion.div
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-16">
              <h2 className="mb-8 text-white">{t.privacy.privacyTitle}</h2>
              <p className="text-xl text-[#C6CEDF] max-w-3xl mx-auto leading-relaxed">
                {t.privacy.privacyIntro}{' '}
                <span className="relative inline-block">
                  <span className="text-[#4F7BFF] font-semibold">
                    {t.privacy.onewayMirror}
                  </span>
                  <motion.span
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#4F7BFF] to-transparent"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                  />
                </span>
                {t.privacy.privacyIntro2}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                { icon: Shield, text: t.privacy.feature1 },
                { icon: FileText, text: t.privacy.feature2 },
                { icon: Network, text: t.privacy.feature3 },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="relative group"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  whileHover={{ y: -8 }}
                >
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1F4AFF]/20 to-transparent rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
                  
                  {/* Card */}
                  <div className="relative bg-[#0A0E16]/80 backdrop-blur-xl border border-[#1F4AFF]/20 rounded-2xl p-8 h-full group-hover:border-[#4F7BFF]/40 transition-all duration-500">
                    <motion.div
                      className="w-16 h-16 bg-gradient-to-br from-[#1F4AFF] to-[#4F7BFF] rounded-xl flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(31,74,255,0.5)]"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.8 }}
                    >
                      <item.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <h4 className="text-white mb-2">{item.text}</h4>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.p
              className="text-center text-2xl text-[#C6CEDF] italic font-light"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              {t.privacy.tagline}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* How It Works - Timeline */}
      <section className="relative py-40 bg-[#0A0E16]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-20">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="mb-6 text-white">{t.howItWorks.title}</h2>
          </motion.div>

          {/* Energy timeline */}
          <div className="max-w-6xl mx-auto relative">
            {/* Desktop horizontal timeline */}
            <div className="hidden md:block">
              {/* Energy line */}
              <div className="relative mb-24">
                <div className="absolute top-16 left-0 right-0 h-0.5 bg-[#1F4AFF]/20" />
                <motion.div
                  className="absolute top-16 left-0 h-0.5 bg-gradient-to-r from-[#1F4AFF] via-[#4F7BFF] to-[#1F4AFF]"
                  initial={{ width: '0%' }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 2.5, ease: 'easeOut' }}
                >
                  <motion.div
                    className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-[#4F7BFF] rounded-full shadow-[0_0_20px_#4F7BFF]"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [1, 0.5, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  />
                </motion.div>

                {/* Steps */}
                <div className="relative flex justify-between">
                  {steps.map((step, index) => (
                    <motion.div
                      key={step.number}
                      className="flex flex-col items-center max-w-[180px]"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15, duration: 0.6 }}
                    >
                      <motion.div
                        className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-[#1F4AFF] to-[#4F7BFF] flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(31,74,255,0.5)]"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <span className="text-3xl font-bold text-white">{step.number}</span>
                        
                        {/* Corner accents */}
                        <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-white/30" />
                        <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-white/30" />
                      </motion.div>

                      <p className="text-white text-center text-sm leading-relaxed">{step.title}</p>
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
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#1F4AFF] to-[#4F7BFF] rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-xl font-bold text-white">{step.number}</span>
                  </div>
                  <div className="flex-1 pt-3">
                    <p className="text-[#C6CEDF]">{step.title}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              className="text-center mt-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <motion.button
                className="relative px-12 py-5 bg-[#1F4AFF] text-white text-lg font-semibold rounded-xl overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  animate={{
                    x: ['-200%', '200%'],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />
                <span className="relative z-10">{t.howItWorks.cta}</span>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
