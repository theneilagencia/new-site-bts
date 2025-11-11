import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Shield, Eye, Lock, Zap } from 'lucide-react';
import { useLanguage } from '../../contexts/language-context';

export function PrivacyMobileFirst() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Parallax effect (lighter on mobile)
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const gradientOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.6, 0.3]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const privacyFeatures = [
    { 
      icon: Eye, 
      title: t.privacy.feature1,
      gradient: 'from-[#4F7BFF] to-[#1F4AFF]'
    },
    { 
      icon: Lock, 
      title: t.privacy.feature2,
      gradient: 'from-[#1F4AFF] to-[#0B1221]'
    },
    { 
      icon: Shield, 
      title: t.privacy.feature3,
      gradient: 'from-[#4F7BFF] to-[#00E5FF]'
    },
    { 
      icon: Zap, 
      title: t.privacy.tagline,
      gradient: 'from-[#00E5FF] to-[#4F7BFF]'
    },
  ];

  return (
    <section 
      id="privacy" 
      ref={sectionRef}
      className="relative py-20 md:py-32 lg:py-40 overflow-hidden"
    >
      {/* Adaptive Background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-[#0B1221] via-[#18365B] to-[#0B1221]"
        style={{ y: isMobile ? 0 : backgroundY }}
      />

      {/* Subtle gradient light (disabled on mobile for performance) */}
      {!isMobile && (
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-[#1F4AFF]/20 via-transparent to-[#FFD700]/10"
          style={{ opacity: gradientOpacity }}
        />
      )}

      {/* Minimal texture (static on mobile) */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 4px, rgba(79, 123, 255, 0.1) 4px, rgba(79, 123, 255, 0.1) 5px)`,
          }} 
        />
      </div>

      {/* Content Container - Mobile First */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-5 md:px-10 lg:px-20">
        
        {/* Privacy Section */}
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          {/* Privacy Title */}
          <div className="text-center mb-10 md:mb-16">
            <motion.h2 
              className="text-white mb-6"
              style={{
                fontSize: 'clamp(28px, 5vw, 44px)',
                fontFamily: 'Inter Tight, Inter, sans-serif',
                fontWeight: 800,
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {t.privacy.privacyTitle}
            </motion.h2>
            
            <motion.p 
              className="text-[#C6CEDF] mx-auto leading-relaxed"
              style={{
                fontSize: 'clamp(16px, 2.5vw, 20px)',
                width: '85%',
                maxWidth: '720px',
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              {t.privacy.privacyIntro}{' '}
              <span className="relative inline-block">
                <span className="text-[#4F7BFF] font-semibold">
                  {t.privacy.onewayMirror}
                </span>
                <motion.span
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#4F7BFF] to-[#00E5FF]"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                />
              </span>
              {t.privacy.privacyIntro2}
            </motion.p>
          </div>

          {/* Privacy Cards - Mobile First Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
            {privacyFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  className="group relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={!isMobile ? { scale: 1.03, y: -4 } : {}}
                >
                  {/* Glow effect (desktop only) */}
                  {!isMobile && (
                    <div className="absolute inset-0 bg-gradient-to-br from-[#1F4AFF]/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  )}
                  
                  {/* Card */}
                  <div className="relative bg-white/3 backdrop-blur-sm border border-[#4F7BFF]/20 rounded-2xl p-5 md:p-6 lg:p-8 h-full transition-all duration-300 group-hover:border-[#4F7BFF]/40 group-hover:bg-[#4F7BFF]/8">
                    {/* Icon */}
                    <motion.div
                      className={`w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 md:mb-5`}
                      whileHover={!isMobile ? { rotate: 360 } : {}}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                    </motion.div>
                    
                    {/* Title */}
                    <h4 
                      className="text-white leading-snug"
                      style={{
                        fontSize: 'clamp(16px, 2.5vw, 18px)',
                        fontWeight: 600,
                        lineHeight: 1.4,
                      }}
                    >
                      {feature.title}
                    </h4>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}