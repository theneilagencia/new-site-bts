import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../../contexts/language-context';
import { OrbitalGlobeBigTech } from '../orbital-globe-bigtech';
import { DynamicGrid } from '../dynamic-grid';
import { ButtonPrimary } from '../ui/button-primary';
import { ButtonText } from '../ui/button-text';

export function HeroBigTech() {
  const { t } = useLanguage();

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.querySelector('#privacy');
    if (target) {
      const yOffset = -80;
      const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B1221] via-[#122539] to-[#1F4AFF]" />

      {/* Dynamic grid */}
      <DynamicGrid />

      {/* Diagonal mirror reflection */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          background: 'linear-gradient(135deg, transparent 0%, rgba(79, 123, 255, 0.2) 45%, rgba(79, 123, 255, 0.4) 50%, rgba(79, 123, 255, 0.2) 55%, transparent 100%)',
          backgroundSize: '400% 400%',
        }}
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Orbital globe */}
      <OrbitalGlobeBigTech />

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-20 py-32 text-center">
        <motion.div className="max-w-6xl mx-auto">
          {/* Title - Staggered animation */}
          <motion.h1
            className="mb-8 text-white"
            style={{ 
              fontSize: 'clamp(48px, 5vw, 68px)',
              fontFamily: 'Inter Tight, Inter, sans-serif',
              fontWeight: 800,
              letterSpacing: '-0.01em',
              lineHeight: 0.95,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {t.hero.title.split(' ').map((word, i) => (
              <motion.span
                key={i}
                className="inline-block mr-4"
                initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.8, delay: i * 0.05 }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          {/* Subtitle with language transition */}
          <motion.p
            key={t.language} // Force re-render on language change
            className="mb-6 text-[#C6CEDF]"
            style={{ 
              fontSize: '22px',
              fontWeight: 500,
              lineHeight: 1.4,
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          >
            {t.hero.subtitle}
          </motion.p>

          {/* Description */}
          <motion.p
            className="mb-16 text-[#9AA7C4] mx-auto"
            style={{ 
              fontSize: '18px',
              fontWeight: 400,
              lineHeight: 1.6,
              maxWidth: '680px',
            }}
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {t.hero.description}
          </motion.p>

          {/* CTA Container - Perfectly aligned */}
          <motion.div
            className="flex flex-col md:flex-row gap-4 justify-center items-center"
            style={{ padding: '8px 0' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {/* Primary CTA */}
            <ButtonPrimary>
              {t.hero.cta}
            </ButtonPrimary>

            {/* Secondary CTA with enhanced styling */}
            <ButtonText href="#privacy" onClick={handleSmoothScroll} showArrow={false}>
              {t.hero.ctaSecondary}
            </ButtonText>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="w-8 h-12 border-2 border-[#4F7BFF] rounded-full flex items-start justify-center p-2">
            <motion.div
              className="w-2 h-2 bg-[#4F7BFF] rounded-full shadow-[0_0_10px_#4F7BFF]"
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      </div>

      {/* Floating "Be Anywhere" tagline */}
      <motion.div
        className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 hidden xl:block"
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        style={{ writingMode: 'vertical-rl' }}
      >
        <span className="text-[#4F7BFF]/40 text-sm tracking-widest uppercase">
          {t.about.title}
        </span>
      </motion.div>
    </section>
  );
}