'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { useLanguage } from '../../contexts/language-context';
import { useRef, useState } from 'react';

export function AboutV3() {
  const { t } = useLanguage();
  const containerRef = useRef(null);
  const [activeTab, setActiveTab] = useState<'vision' | 'mission'>('vision');

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -20]);

  const values = [
    {
      number: '01',
      title: t.about.value1Title,
      text: t.about.value1Text,
      accent: '#00639A',
    },
    {
      number: '02',
      title: t.about.value2Title,
      text: t.about.value2Text,
      accent: '#00BCA5',
    },
    {
      number: '03',
      title: t.about.value3Title,
      text: t.about.value3Text,
      accent: '#21B6F3',
    },
  ];

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative overflow-hidden bg-[var(--bg-primary)] pb-24 pt-8 lg:pb-32 lg:pt-12"
    >
      {/* Minimal Grid Background */}
      <div className="absolute inset-0 opacity-[0.08]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(var(--border-color) 1px, transparent 1px),
              linear-gradient(90deg, var(--border-color) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      {/* Geometric Lines - Diagonal */}
      <div className="absolute inset-0 overflow-hidden opacity-[0.15]">
        <motion.div
          style={{ y }}
          className="absolute left-0 top-0 h-full w-full"
        >
          {/* Diagonal line 1 */}
          <div
            className="absolute left-[20%] top-0 h-full w-px origin-top rotate-12"
            style={{
              background: 'linear-gradient(180deg, transparent, #00639A 20%, #00639A 80%, transparent)',
            }}
          />
          {/* Diagonal line 2 */}
          <div
            className="absolute right-[30%] top-0 h-full w-px origin-top -rotate-12"
            style={{
              background: 'linear-gradient(180deg, transparent, #21B6F3 20%, #21B6F3 80%, transparent)',
            }}
          />
          {/* Horizontal accent */}
          <div
            className="absolute left-0 top-[40%] h-px w-full"
            style={{
              background: 'linear-gradient(90deg, transparent, #00BCA5 50%, transparent)',
            }}
          />
        </motion.div>
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Circle 1 - Top Left */}
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, -30]) }}
          className="absolute left-[15%] top-[10%] h-64 w-64 rounded-full opacity-[0.12]"
          style={{
            background: 'radial-gradient(circle, #00639A, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
        
        {/* Circle 2 - Bottom Right */}
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, 40]) }}
          className="absolute bottom-[15%] right-[10%] h-96 w-96 rounded-full opacity-[0.15]"
          style={{
            background: 'radial-gradient(circle, #21B6F3, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
        
        {/* Circle 3 - Middle */}
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, 20]) }}
          className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.10]"
          style={{
            background: 'radial-gradient(circle, #00BCA5, transparent 70%)',
            filter: 'blur(70px)',
          }}
        />

        {/* Subtle rectangular glow - top */}
        <div
          className="absolute right-[5%] top-[5%] h-48 w-96 opacity-[0.12]"
          style={{
            background: 'linear-gradient(135deg, #00639A, transparent)',
            filter: 'blur(50px)',
          }}
        />

        {/* Subtle rectangular glow - bottom */}
        <div
          className="absolute bottom-[10%] left-[10%] h-56 w-80 opacity-[0.12]"
          style={{
            background: 'linear-gradient(-45deg, #21B6F3, transparent)',
            filter: 'blur(50px)',
          }}
        />
      </div>

      {/* Radial gradient overlays - Enhanced from original */}
      <div className="absolute inset-0 overflow-hidden opacity-[0.10]">
        <motion.div
          style={{ y }}
          className="absolute left-[10%] top-[10%] h-[500px] w-[500px] blur-[100px]"
          style={{
            background: 'radial-gradient(circle, #00639A, transparent 60%)',
          }}
        />
        <div
          className="absolute bottom-[15%] right-[10%] h-[400px] w-[400px] blur-[100px]"
          style={{
            background: 'radial-gradient(circle, #21B6F3, transparent 60%)',
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-12">
        {/* Minimal Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Badge - igual ao de solutions */}
            <div className="mb-6 inline-block">
              <div className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-[var(--border-color)] bg-[var(--bg-secondary)]/50 px-4 py-2 backdrop-blur-sm">
                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--accent-primary)]/10 to-transparent"
                  animate={{ x: ['-200%', '200%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                />
                <span className="relative font-mono text-xs uppercase tracking-widest text-[var(--text-tertiary)]">
                  {t.about.badge}
                </span>
              </div>
            </div>

            {/* Clean title */}
            <h2 className="mb-6 text-[var(--text-primary)]">
              {t.about.title}
            </h2>

            {/* Intro text */}
            <p className="mx-auto max-w-xl leading-relaxed text-[var(--text-tertiary)] opacity-70">
              {t.about.intro}
            </p>
          </motion.div>
        </div>

        {/* Main Content Grid */}
        <div className="mx-auto mb-24 max-w-7xl lg:mb-32">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
            {/* Left: Video */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05 }}
            >
              {/* Video */}
              <div className="group relative overflow-hidden rounded-xl">
                <div className="relative aspect-video overflow-hidden bg-[var(--bg-secondary)]/60">
                  <video
                    className="h-full w-full object-cover opacity-90"
                    autoPlay
                    loop
                    muted
                    playsInline
                  >
                    <source
                      src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                      type="video/mp4"
                    />
                  </video>
                  
                  {/* Minimal overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)]/10 to-transparent" />
                </div>

                {/* Subtle glow on hover */}
                <div className="absolute -inset-px rounded-xl bg-gradient-to-br from-[#00639A]/0 to-[#21B6F3]/0 opacity-0 transition-opacity duration-500 group-hover:from-[#00639A]/10 group-hover:to-[#21B6F3]/10 group-hover:opacity-100" />
              </div>
            </motion.div>

            {/* Right: Vision/Mission Tabs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col"
            >
              {/* Enhanced Tab Switcher */}
              <div className="mb-1 flex gap-1 rounded-t-xl bg-[var(--bg-secondary)]/15 p-1">
                <button
                  onClick={() => setActiveTab('vision')}
                  className="group relative flex-1 rounded-lg py-3 text-center transition-all duration-300"
                >
                  {activeTab === 'vision' && (
                    <motion.div
                      layoutId="activeTabBg"
                      className="absolute inset-0 rounded-lg bg-[var(--bg-secondary)]/60 shadow-lg"
                      transition={{ type: 'spring', bounce: 0.15, duration: 0.5 }}
                    />
                  )}
                  <span
                    className={`relative font-mono text-xs uppercase tracking-[0.15em] transition-all duration-300 ${
                      activeTab === 'vision'
                        ? 'text-[var(--text-primary)] opacity-100'
                        : 'text-[var(--text-tertiary)] opacity-50 group-hover:opacity-70'
                    }`}
                  >
                    {t.about.visionTitle}
                  </span>
                  
                  {/* Active indicator */}
                  {activeTab === 'vision' && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-1/2 h-0.5 w-12 -translate-x-1/2 bg-[#00639A]"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                    />
                  )}
                </button>

                <button
                  onClick={() => setActiveTab('mission')}
                  className="group relative flex-1 rounded-lg py-3 text-center transition-all duration-300"
                >
                  {activeTab === 'mission' && (
                    <motion.div
                      layoutId="activeTabBg"
                      className="absolute inset-0 rounded-lg bg-[var(--bg-secondary)]/60 shadow-lg"
                      transition={{ type: 'spring', bounce: 0.15, duration: 0.5 }}
                    />
                  )}
                  <span
                    className={`relative font-mono text-xs uppercase tracking-[0.15em] transition-all duration-300 ${
                      activeTab === 'mission'
                        ? 'text-[var(--text-primary)] opacity-100'
                        : 'text-[var(--text-tertiary)] opacity-50 group-hover:opacity-70'
                    }`}
                  >
                    {t.about.missionTitle}
                  </span>
                  
                  {/* Active indicator */}
                  {activeTab === 'mission' && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-1/2 h-0.5 w-12 -translate-x-1/2 bg-[#21B6F3]"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                    />
                  )}
                </button>
              </div>

              {/* Tab Content */}
              <div className="relative flex-1 overflow-hidden rounded-b-xl bg-[var(--bg-secondary)]/30 p-8 backdrop-blur-md lg:p-10">
                {activeTab === 'vision' ? (
                  <motion.div
                    key="vision"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.25 }}
                  >
                    {/* Enhanced accent bar */}
                    <div className="mb-5 h-0.5 w-16 bg-gradient-to-r from-[#00639A] to-transparent" />
                    
                    <p className="text-sm leading-snug text-[var(--text-secondary)] opacity-80">
                      {t.about.visionText}
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="mission"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.25 }}
                  >
                    {/* Enhanced accent bar */}
                    <div className="mb-5 h-0.5 w-16 bg-gradient-to-r from-[#21B6F3] to-transparent" />
                    
                    <p className="text-sm leading-snug text-[var(--text-secondary)] opacity-80">
                      {t.about.missionText}
                    </p>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mx-auto max-w-7xl">
          {/* Values Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h3 className="text-[var(--text-primary)]">
              {t.about.valuesTitle}
            </h3>
          </motion.div>

          {/* Values Grid - Ultra Clean */}
          <div className="grid gap-5 md:grid-cols-3 lg:gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -3 }}
                className="group relative"
              >
                {/* Minimal card */}
                <div className="relative h-full overflow-hidden rounded-xl bg-[var(--bg-secondary)]/20 p-7 backdrop-blur-sm transition-all duration-400 hover:bg-[var(--bg-secondary)]/35 lg:p-8">
                  {/* Top glow line - only on hover */}
                  <div
                    className="absolute left-0 top-0 h-px w-full opacity-0 transition-opacity duration-400 group-hover:opacity-100"
                    style={{
                      background: `linear-gradient(90deg, ${value.accent}40 0%, transparent 100%)`,
                    }}
                  />

                  {/* Number - ultra subtle */}
                  <div className="mb-6 flex items-start">
                    <span
                      className="font-mono text-3xl tracking-tighter opacity-[0.1]"
                      style={{ color: value.accent }}
                    >
                      {value.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div>
                    <h4 className="mb-2.5 text-[var(--text-primary)]">
                      {value.title}
                    </h4>
                    <p className="text-sm leading-relaxed text-[var(--text-tertiary)] opacity-60">
                      {value.text}
                    </p>
                  </div>

                  {/* Corner glow - subtle */}
                  <div
                    className="absolute -bottom-16 -right-16 h-32 w-32 opacity-0 blur-[60px] transition-opacity duration-500 group-hover:opacity-[0.1]"
                    style={{
                      background: `radial-gradient(circle, ${value.accent}, transparent 70%)`,
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}