import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { AnimatedGlobe } from '@/components/ui/AnimatedGlobe';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#122539] via-[#18365B] to-[#006DA5]">
        {/* Animated particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Diagonal glow - animated shine effect */}
        <motion.div
          className="absolute inset-0 opacity-40"
          style={{
            background: 'linear-gradient(135deg, transparent 0%, transparent 40%, rgba(24, 90, 180, 0.6) 50%, transparent 60%, transparent 100%)',
            backgroundSize: '200% 200%',
          }}
          animate={{
            backgroundPosition: ['0% 0%', '200% 200%'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        
        {/* Radial glow center */}
        <div 
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(24, 90, 180, 0.8) 0%, transparent 70%)',
          }}
        />
      </div>

      {/* Animated Globe */}
      <AnimatedGlobe />

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-20 py-32 text-center">
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Badge */}
          {t.hero.badge && (
            <motion.div
              className="inline-block mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-light">
                {t.hero.badge}
              </span>
            </motion.div>
          )}

          {/* Title */}
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 text-white tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            {t.hero.title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-xl md:text-2xl lg:text-3xl mb-4 text-white/90 font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {t.hero.subtitle}
          </motion.p>

          {/* Description */}
          <motion.p
            className="text-lg md:text-xl mb-12 text-white/70 max-w-3xl mx-auto font-light leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {t.hero.description}
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col md:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.button
              className="group relative px-8 py-4 bg-white text-[#122539] rounded-lg font-semibold text-lg overflow-hidden shadow-[0_0_24px_rgba(24,90,180,0.5)] hover:shadow-[0_0_32px_rgba(24,90,180,0.7)] transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                {t.hero.cta}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
            </motion.button>

            <motion.a
              href="#privacy"
              className="text-white/90 hover:text-white text-lg group relative px-6 py-4 font-light"
              whileHover={{ scale: 1.05 }}
            >
              {t.hero.ctaSecondary}
              <motion.span
                className="absolute bottom-2 left-0 right-0 h-0.5 bg-white/50"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <motion.div
              className="w-1.5 h-1.5 bg-white rounded-full"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
