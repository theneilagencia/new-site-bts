import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

export function WhySection() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  
  // Mouse tracking for cursor glow effect (desktop only)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { stiffness: 100, damping: 20 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 100, damping: 20 });
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Parallax effects
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const auroraOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.15, 0.25, 0.25, 0.15]);
  const glowIntensity = useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 0.35, 0.2]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile) return;
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 md:py-40 lg:py-40 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Radial Gradient Background */}
      <div className="absolute inset-0 bg-gradient-radial from-[#11274D] via-[#0B1221] to-[#0B1221]" />
      
      {/* Seamless transition blend from previous section */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0B1221] to-transparent opacity-60" />

      {/* Aurora Grid Layer (desktop only for performance) */}
      {!isMobile && (
        <motion.div 
          className="absolute inset-0"
          style={{ 
            y: backgroundY,
            opacity: auroraOpacity 
          }}
        >
          {/* Animated grid pattern */}
          <div 
            className="absolute inset-0" 
            style={{
              backgroundImage: `
                linear-gradient(90deg, rgba(79, 123, 255, 0.03) 1px, transparent 1px),
                linear-gradient(0deg, rgba(79, 123, 255, 0.03) 1px, transparent 1px)
              `,
              backgroundSize: '80px 80px',
            }}
          />
          
          {/* Aurora particles */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(circle at 30% 20%, rgba(79, 123, 255, 0.15) 0%, transparent 50%),
                           radial-gradient(circle at 70% 80%, rgba(0, 229, 255, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 50% 50%, rgba(255, 215, 0, 0.05) 0%, transparent 60%)`,
            }}
            animate={{
              opacity: [0.3, 0.5, 0.3],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      )}

      {/* Ascending Glow */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-64 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, rgba(79, 123, 255, 0.25), transparent)',
          opacity: glowIntensity
        }}
      />

      {/* Golden reflection at top (subtle) */}
      <div 
        className="absolute top-0 left-0 right-0 h-48 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, rgba(255, 215, 0, 0.08), transparent)',
          opacity: 0.4
        }}
      />

      {/* Cursor tracking glow (desktop only) */}
      {!isMobile && (
        <motion.div
          className="absolute pointer-events-none rounded-full blur-3xl"
          style={{
            width: 400,
            height: 400,
            left: smoothMouseX,
            top: smoothMouseY,
            x: '-50%',
            y: '-50%',
            background: 'radial-gradient(circle, rgba(79, 123, 255, 0.15) 0%, transparent 70%)',
          }}
        />
      )}

      {/* Content Container */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-5 md:px-10 lg:px-20">
        
        {/* Desktop: 2 columns layout | Mobile: single column */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Text Content - Left side (60%) */}
          <motion.div 
            className="lg:col-span-7 max-w-[720px] mx-auto lg:mx-0"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            {/* Title */}
            <motion.h2
              className="text-white text-center lg:text-left mb-10 md:mb-12"
              style={{
                fontFamily: 'Inter Tight, Inter, sans-serif',
                fontWeight: 800,
                fontSize: 'clamp(36px, 6vw, 64px)',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              {t.privacy.whyTitle}
              
              {/* Animated underline */}
              <motion.div
                className="h-1 bg-gradient-to-r from-[#4F7BFF] via-[#00E5FF] to-transparent mt-4 max-w-xs mx-auto lg:mx-0"
                initial={{ scaleX: 0, originX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
                animate={{
                  opacity: [0.6, 1, 0.6],
                }}
                style={{
                  animation: 'pulse 2s ease-in-out infinite',
                }}
              />
            </motion.h2>

            {/* Body Text */}
            <motion.div
              className="space-y-6 md:space-y-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              {/* Paragraph 1 - Context */}
              <motion.p
                className="text-[#C6CEDF] text-center lg:text-left leading-relaxed"
                style={{
                  fontSize: 'clamp(17px, 2.5vw, 20px)',
                  lineHeight: 1.7,
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                {t.privacy.whyText1}
              </motion.p>

              {/* Paragraph 2 - Manifesto (emphasized) */}
              <motion.p
                className="text-white text-center lg:text-left leading-relaxed"
                style={{
                  fontSize: 'clamp(18px, 3vw, 22px)',
                  fontWeight: 600,
                  lineHeight: 1.6,
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                {t.privacy.whyText2}
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Visual Aurora - Right side (40%, desktop only) */}
          {!isMobile && (
            <motion.div 
              className="hidden lg:block lg:col-span-5"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              <div className="relative h-[500px] flex items-center justify-center">
                {/* Orbital rings */}
                {[0, 1, 2].map((index) => (
                  <motion.div
                    key={index}
                    className="absolute rounded-full border border-[#4F7BFF]/20"
                    style={{
                      width: `${200 + index * 80}px`,
                      height: `${200 + index * 80}px`,
                    }}
                    animate={{
                      rotate: index % 2 === 0 ? 360 : -360,
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      rotate: {
                        duration: 20 + index * 5,
                        repeat: Infinity,
                        ease: "linear"
                      },
                      scale: {
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }
                    }}
                  />
                ))}
                
                {/* Central glow */}
                <motion.div
                  className="absolute w-32 h-32 rounded-full bg-gradient-to-br from-[#4F7BFF] to-[#00E5FF] blur-2xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />

                {/* Floating particles */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 rounded-full bg-[#4F7BFF]"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      y: [0, -30, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 3 + Math.random() * 2,
                      repeat: Infinity,
                      delay: i * 0.3,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Bottom Divider with pulse animation */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4F7BFF]/20 to-transparent"
        animate={{
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </section>
  );
}
