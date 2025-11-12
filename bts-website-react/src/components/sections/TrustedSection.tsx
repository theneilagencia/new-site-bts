
import { motion } from 'framer-motion';
import { Globe, Shield, Award } from 'lucide-react';
import { ButtonPrimary } from '@/components/ui/ButtonPrimary';
import { useLanguage } from '@/contexts/LanguageContext';

export function TrustedSection() {
  const { t } = useLanguage();

  const stats = [
    { value: '100+', label: t.trusted.stat1Label, icon: Globe },
    { value: '24/7', label: t.trusted.stat2Label, icon: Shield },
    { value: '100%', label: t.trusted.stat3Label, icon: Award },
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-[#0A2540] via-[#122539] to-[#18365B] relative overflow-hidden">
      {/* Animated starfield background */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px h-px bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Diagonal light beams */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-px bg-gradient-to-b from-transparent via-white/10 to-transparent"
          style={{
            left: `${20 + i * 30}%`,
            height: '200%',
            top: '-50%',
          }}
          animate={{
            y: ['0%', '100%'],
          }}
          transition={{
            duration: 15 + i * 5,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}

      <div className="max-w-[1440px] mx-auto px-6 md:px-20 relative z-10">
        <motion.div
          className="max-w-5xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-full mb-12"
            whileHover={{ scale: 1.05, borderColor: 'rgba(24, 90, 180, 0.3)' }}
            transition={{ duration: 0.3 }}
          >
            <Globe className="w-5 h-5 text-[#185AB4]" />
            <span className="text-white">{t.trusted.badge}</span>
          </motion.div>

          {/* Title */}
          <motion.h2
            className="mb-8 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {t.trusted.title}
          </motion.h2>

          {/* Text content */}
          <motion.div
            className="space-y-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <p className="text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
              {t.trusted.text1}
            </p>
            <p className="text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
              {t.trusted.text2}
            </p>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mb-20"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ButtonPrimary className="text-lg px-10 py-5 bg-white text-[#122539] hover:bg-white/90">
                {t.trusted.cta}
              </ButtonPrimary>
            </motion.div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                whileHover={{ y: -8 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#185AB4]/10 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 text-center group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300">
                  <stat.icon className="w-10 h-10 text-[#185AB4] mx-auto mb-4" />
                  <div className="text-5xl mb-3 text-white">{stat.value}</div>
                  <p className="text-white/70">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Trust indicators - logos placeholder */}
          <motion.div
            className="mt-20 pt-12 border-t border-white/10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <p className="text-white/50 text-sm mb-8">
              {t.language === 'pt' ? 'Confiado por líderes globais' : 'Trusted by global leaders'}
            </p>
            <div className="flex flex-wrap justify-center items-center gap-12 opacity-40">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-32 h-12 bg-white/10 rounded-lg"
                  whileHover={{ opacity: 1, scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
