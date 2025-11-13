import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Eye, Lock, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export function PrivacySection() {
  const { t } = useLanguage();

  return (
    <section id="privacy" className="py-32 bg-[var(--bg-primary)] relative overflow-hidden">
      {/* Background mesh pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(0deg, transparent 24%, var(--border-color) 25%, var(--border-color) 26%, transparent 27%, transparent 74%, var(--border-color) 75%, var(--border-color) 76%, transparent 77%, transparent),
            linear-gradient(90deg, transparent 24%, var(--border-color) 25%, var(--border-color) 26%, transparent 27%, transparent 74%, var(--border-color) 75%, var(--border-color) 76%, transparent 77%, transparent)
          `,
          backgroundSize: '50px 50px',
        }} />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-20 relative z-10">
        {/* Why BTS Exists */}
        <motion.div
          className="max-w-3xl mx-auto mb-32 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="flex items-center justify-center gap-3 mb-8">
            <Globe className="w-8 h-8 text-[var(--accent-primary)]" />
            <h2 className="text-[var(--text-primary)]">{t.privacy.whyTitle}</h2>
          </motion.div>
          
          <motion.p variants={itemVariants} className="text-xl text-[var(--text-secondary)] leading-relaxed mb-6">
            {t.privacy.whyText1}
          </motion.p>
          
          <motion.p variants={itemVariants} className="text-xl text-[var(--text-primary)] leading-relaxed font-semibold">
            {t.privacy.whyText2}
          </motion.p>
        </motion.div>

        {/* Privacy is Freedom */}
        <motion.div
          className="max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="mb-6 text-[var(--text-primary)]">{t.privacy.privacyTitle}</h2>
            <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
              {t.privacy.privacyIntro}{' '}
              <span className="text-[var(--accent-primary)] font-semibold relative">
                {t.privacy.onewayMirror}
                <motion.span
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[var(--accent-primary)]"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                />
              </span>
              {t.privacy.privacyIntro2}
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-primary)]/5 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
              <div className="relative bg-[var(--bg-secondary)]/80 backdrop-blur-sm border border-[var(--border-color)] rounded-2xl p-10 text-center h-full shadow-[0_8px_24px_rgba(0,0,0,0.06)] group-hover:shadow-[0_12px_32px_rgba(0,0,0,0.12)] transition-all duration-500">
                <motion.div
                  className="w-20 h-20 bg-gradient-to-br from-[var(--accent-primary)] to-[#00639A] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <Eye className="w-10 h-10 text-white" />
                </motion.div>
                <h3 className="mb-4 text-[var(--text-primary)] text-lg font-semibold">{t.privacy.feature1}</h3>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-primary)]/5 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
              <div className="relative bg-[var(--bg-secondary)]/80 backdrop-blur-sm border border-[var(--border-color)] rounded-2xl p-10 text-center h-full shadow-[0_8px_24px_rgba(0,0,0,0.06)] group-hover:shadow-[0_12px_32px_rgba(0,0,0,0.12)] transition-all duration-500">
                <motion.div
                  className="w-20 h-20 bg-gradient-to-br from-[var(--accent-primary)] to-[#00639A] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <Shield className="w-10 h-10 text-white" />
                </motion.div>
                <h3 className="mb-4 text-[var(--text-primary)] text-lg font-semibold">{t.privacy.feature2}</h3>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-primary)]/5 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
              <div className="relative bg-[var(--bg-secondary)]/80 backdrop-blur-sm border border-[var(--border-color)] rounded-2xl p-10 text-center h-full shadow-[0_8px_24px_rgba(0,0,0,0.06)] group-hover:shadow-[0_12px_32px_rgba(0,0,0,0.12)] transition-all duration-500">
                <motion.div
                  className="w-20 h-20 bg-gradient-to-br from-[var(--accent-primary)] to-[#00639A] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <Lock className="w-10 h-10 text-white" />
                </motion.div>
                <h3 className="mb-4 text-[var(--text-primary)] text-lg font-semibold">{t.privacy.feature3}</h3>
              </div>
            </motion.div>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-center text-xl text-[var(--text-primary)] mt-12 italic font-medium"
          >
            {t.privacy.tagline}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
