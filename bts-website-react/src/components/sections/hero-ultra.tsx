'use client';

import { motion, useMotionValue, useSpring, useTransform, useScroll } from 'motion/react';
import { useLanguage } from '../../contexts/language-context';
import { ArrowRight, Sparkles, Globe2, Shield, Zap, ChevronRight } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';

export function HeroUltra() {
  const { t } = useLanguage();
  const containerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  // Cursor tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 150 };
  const x = useSpring(mouseX, springConfig);
  const y2 = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      setMousePosition({ x: clientX, y: clientY });
      mouseX.set(clientX / innerWidth - 0.5);
      mouseY.set(clientY / innerHeight - 0.5);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const rotateX = useTransform(y2, [-0.5, 0.5], [15, -15]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-15, 15]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-[var(--bg-primary)] pt-20"
    >
      {/* Ultra Modern Background */}
      <div className="absolute inset-0">
        {/* Animated mesh gradient */}
        <motion.div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `
              radial-gradient(at 0% 0%, #00639A15 0px, transparent 50%),
              radial-gradient(at 100% 0%, #21B6F315 0px, transparent 50%),
              radial-gradient(at 100% 100%, #00BCA515 0px, transparent 50%),
              radial-gradient(at 0% 100%, #2A7BA115 0px, transparent 50%)
            `,
            scale,
          }}
        />

        {/* Dot pattern with perspective */}
        <div 
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: 'radial-gradient(circle at center, var(--accent-primary) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        {/* Diagonal lines */}
        <svg className="absolute inset-0 h-full w-full opacity-[0.015]">
          <defs>
            <pattern id="diagonal" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <line x1="0" y1="0" x2="80" y2="80" stroke="var(--accent-primary)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diagonal)" />
        </svg>
      </div>

      {/* 3D Floating orbs with cursor tracking */}
      <motion.div
        className="pointer-events-none absolute left-[20%] top-[30%] h-[400px] w-[400px] rounded-full bg-[#00639A] opacity-[0.08] blur-[100px]"
        style={{
          x: useTransform(x, [-0.5, 0.5], [-50, 50]),
          y: useTransform(y2, [-0.5, 0.5], [-50, 50]),
        }}
      />
      <motion.div
        className="pointer-events-none absolute right-[20%] top-[40%] h-[300px] w-[300px] rounded-full bg-[#21B6F3] opacity-[0.06] blur-[80px]"
        style={{
          x: useTransform(x, [-0.5, 0.5], [30, -30]),
          y: useTransform(y2, [-0.5, 0.5], [30, -30]),
        }}
      />

      {/* Content */}
      <motion.div 
        style={{ opacity }}
        className="container relative z-10 mx-auto px-6 lg:px-8"
      >
        <div className="flex min-h-screen items-center">
          {/* Asymmetric Layout */}
          <div className="grid w-full gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
            
            {/* Left - Main Content */}
            <div className="flex flex-col justify-center space-y-8">
              
              {/* Animated Badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="group inline-flex items-center gap-3 rounded-full border border-[var(--border-color)] bg-gradient-to-r from-[var(--bg-secondary)]/80 to-[var(--bg-secondary)]/40 px-5 py-2.5 backdrop-blur-2xl transition-all hover:border-[var(--accent-primary)]/50 hover:shadow-lg hover:shadow-[var(--accent-primary)]/10">
                  <motion.div
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  >
                    <Sparkles className="h-4 w-4 text-[var(--accent-primary)]" />
                  </motion.div>
                  <span className="font-mono text-xs uppercase tracking-wider text-[var(--text-tertiary)]">
                    Trust Infrastructure
                  </span>
                  <ArrowRight className="h-3 w-3 text-[var(--text-tertiary)] transition-transform group-hover:translate-x-1" />
                </div>
              </motion.div>

              {/* Dynamic Title with gradient */}
              <div className="space-y-4">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="text-5xl leading-[1.1] lg:text-7xl xl:text-8xl"
                >
                  <span className="block bg-gradient-to-br from-[var(--text-primary)] via-[var(--text-primary)] to-[var(--text-tertiary)] bg-clip-text text-transparent">
                    Global Trust
                  </span>
                  <span className="block bg-gradient-to-r from-[#00639A] via-[#21B6F3] to-[#00BCA5] bg-clip-text text-transparent">
                    Infrastructure
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="max-w-xl text-lg leading-relaxed text-[var(--text-tertiary)] lg:text-xl"
                >
                  {t.hero.subtitle}
                </motion.p>
              </div>

              {/* Magnetic CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex flex-wrap items-center gap-4"
              >
                {/* Primary CTA - Magnetic */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#00639A] to-[#21B6F3] px-8 py-4 text-white shadow-lg shadow-[#00639A]/25 transition-all hover:shadow-xl hover:shadow-[#00639A]/40"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#21B6F3] to-[#00639A] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <span className="relative flex items-center gap-2 font-medium">
                    {t.hero.cta1}
                    <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </motion.button>

                {/* Secondary CTA - Glass */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative overflow-hidden rounded-2xl border border-[var(--border-color)] bg-[var(--bg-secondary)]/50 px-8 py-4 backdrop-blur-xl transition-all hover:border-[var(--accent-primary)]/50 hover:bg-[var(--bg-secondary)]/80"
                >
                  <span className="relative flex items-center gap-2 font-medium text-[var(--text-primary)]">
                    {t.hero.cta2}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </motion.button>
              </motion.div>

              {/* Trust indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-wrap items-center gap-8 pt-4"
              >
                {[
                  { icon: Globe2, text: '50+ Countries', color: '#00639A' },
                  { icon: Shield, text: '24/7 Support', color: '#00BCA5' },
                  { icon: Zap, text: '100% Compliant', color: '#21B6F3' },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                      className="group flex items-center gap-2"
                    >
                      <div 
                        className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border-color)] backdrop-blur-sm transition-all group-hover:border-[var(--accent-primary)]/50 group-hover:shadow-lg"
                        style={{
                          background: `linear-gradient(135deg, ${item.color}15, transparent)`,
                        }}
                      >
                        <Icon className="h-5 w-5" style={{ color: item.color }} />
                      </div>
                      <span className="text-sm text-[var(--text-tertiary)]">{item.text}</span>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>

            {/* Right - Bento Grid */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="hidden lg:block"
            >
              <div className="grid h-full grid-cols-2 gap-4">
                
                {/* Card 1 - Stat */}
                <motion.div
                  whileHover={{ scale: 1.02, rotateZ: 1 }}
                  style={{ rotateX, rotateY }}
                  className="group relative col-span-2 overflow-hidden rounded-3xl border border-[var(--border-color)] bg-gradient-to-br from-[var(--bg-secondary)]/80 to-[var(--bg-secondary)]/40 p-8 backdrop-blur-2xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00639A]/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative">
                    <div className="mb-2 text-6xl font-mono tracking-tight text-[var(--text-primary)]">50+</div>
                    <div className="text-sm text-[var(--text-tertiary)]">Global Jurisdictions</div>
                  </div>
                  {/* Decorative corner */}
                  <div className="absolute right-0 top-0 h-20 w-20 opacity-20">
                    <div className="absolute right-0 top-0 h-px w-20 bg-gradient-to-l from-[var(--accent-primary)] to-transparent" />
                    <div className="absolute right-0 top-0 h-20 w-px bg-gradient-to-b from-[var(--accent-primary)] to-transparent" />
                  </div>
                </motion.div>

                {/* Card 2 - Feature */}
                <motion.div
                  whileHover={{ scale: 1.05, rotateZ: -2 }}
                  className="group relative overflow-hidden rounded-3xl border border-[var(--border-color)] bg-gradient-to-br from-[var(--bg-secondary)]/80 to-[var(--bg-secondary)]/40 p-6 backdrop-blur-2xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00BCA5]/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative flex h-full flex-col justify-between">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#00BCA5]/20 to-transparent">
                      <Shield className="h-6 w-6 text-[#00BCA5]" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-[var(--text-primary)]">Bank Grade</div>
                      <div className="text-xs text-[var(--text-tertiary)]">Security</div>
                    </div>
                  </div>
                </motion.div>

                {/* Card 3 - Feature */}
                <motion.div
                  whileHover={{ scale: 1.05, rotateZ: 2 }}
                  className="group relative overflow-hidden rounded-3xl border border-[var(--border-color)] bg-gradient-to-br from-[var(--bg-secondary)]/80 to-[var(--bg-secondary)]/40 p-6 backdrop-blur-2xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#21B6F3]/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative flex h-full flex-col justify-between">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#21B6F3]/20 to-transparent">
                      <Zap className="h-6 w-6 text-[#21B6F3]" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-[var(--text-primary)]">Instant</div>
                      <div className="text-xs text-[var(--text-tertiary)]">Setup</div>
                    </div>
                  </div>
                </motion.div>

                {/* Card 4 - Live status */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="group relative col-span-2 overflow-hidden rounded-3xl border border-[var(--border-color)] bg-gradient-to-br from-[var(--bg-secondary)]/80 to-[var(--bg-secondary)]/40 p-6 backdrop-blur-2xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#21B6F3]/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <motion.div
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                        }}
                        className="h-3 w-3 rounded-full bg-[#00BCA5]"
                      />
                      <div>
                        <div className="text-sm font-medium text-[var(--text-primary)]">All Systems Operational</div>
                        <div className="text-xs text-[var(--text-tertiary)]">99.99% Uptime</div>
                      </div>
                    </div>
                    <div className="font-mono text-xs text-[var(--text-tertiary)]">Live</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <div className="h-12 w-6 rounded-full border-2 border-[var(--border-color)] p-1">
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="h-2 w-2 rounded-full bg-[var(--accent-primary)]"
            />
          </div>
          <span className="font-mono text-xs uppercase tracking-widest text-[var(--text-tertiary)]">
            Scroll
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}
