'use client';

import { motion } from 'motion/react';
import { useLanguage } from '../../contexts/language-context';
import { AlertCircle, CheckCircle2, ArrowDown } from 'lucide-react';

// Componente reutilizável para corner accents
function CornerAccents({ 
  position, 
  color 
}: { 
  position: 'top' | 'bottom'; 
  color: string;
}) {
  const isTop = position === 'top';
  
  return (
    <>
      {/* Left corner */}
      <div className={`absolute ${isTop ? 'top-0' : 'bottom-0'} left-0 h-20 w-20 opacity-50 transition-opacity duration-500 group-hover:opacity-100`}>
        <div 
          className={`absolute left-0 ${isTop ? 'top-0' : 'bottom-0'} h-px w-20 bg-gradient-to-r from-current to-transparent`}
          style={{ color }}
        />
        <div 
          className={`absolute left-0 ${isTop ? 'top-0' : 'bottom-0'} h-20 w-px ${isTop ? 'bg-gradient-to-b' : 'bg-gradient-to-t'} from-current to-transparent`}
          style={{ color }}
        />
      </div>
      
      {/* Right corner */}
      <div className={`absolute ${isTop ? 'top-0' : 'bottom-0'} right-0 h-20 w-20 opacity-50 transition-opacity duration-500 group-hover:opacity-100`}>
        <div 
          className={`absolute right-0 ${isTop ? 'top-0' : 'bottom-0'} h-px w-20 bg-gradient-to-l from-current to-transparent`}
          style={{ color }}
        />
        <div 
          className={`absolute right-0 ${isTop ? 'top-0' : 'bottom-0'} h-20 w-px ${isTop ? 'bg-gradient-to-b' : 'bg-gradient-to-t'} from-current to-transparent`}
          style={{ color }}
        />
      </div>
    </>
  );
}

// Componente para card statement
function StatementCard({
  type,
  text,
  icon: Icon,
  accentColor,
  delay = 0,
}: {
  type: 'problem' | 'solution';
  text: string;
  icon: typeof AlertCircle;
  accentColor: string;
  delay?: number;
}) {
  const isProblem = type === 'problem';
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className="group relative"
    >
      {/* Background with glass effect */}
      <div className="absolute inset-0 overflow-hidden rounded-3xl border border-[var(--border-color)] bg-[var(--bg-secondary)]/50 backdrop-blur-xl transition-all duration-500 group-hover:border-opacity-0" />
      
      {/* Gradient overlay on hover */}
      <motion.div 
        className="absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `linear-gradient(135deg, ${accentColor}08 0%, transparent 60%)`,
        }}
      />

      {/* Animated border gradient */}
      <div 
        className="absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `linear-gradient(135deg, ${accentColor}30, transparent)`,
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          maskComposite: 'exclude',
          WebkitMaskComposite: 'xor',
          padding: '1px',
        }}
      />
      
      {/* Corner accents */}
      <CornerAccents 
        position={isProblem ? 'top' : 'bottom'} 
        color={accentColor} 
      />

      {/* Content */}
      <div className="relative p-8 lg:p-12">
        <div className="flex flex-col items-center space-y-6 text-center">
          
          {/* Icon */}
          <motion.div
            whileHover={{ scale: 1.1, rotate: isProblem ? -5 : 5 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            className="relative"
          >
            <div 
              className="absolute inset-0 rounded-2xl opacity-20 blur-xl"
              style={{ backgroundColor: accentColor }}
            />
            <div 
              className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-[var(--border-color)] backdrop-blur-sm transition-all duration-500 group-hover:border-opacity-0 group-hover:shadow-lg lg:h-20 lg:w-20"
              style={{
                background: `linear-gradient(135deg, ${accentColor}15, ${accentColor}05)`,
              }}
            >
              <Icon 
                className="h-8 w-8 lg:h-10 lg:w-10 transition-all duration-500 group-hover:drop-shadow-lg" 
                style={{ color: accentColor }}
              />
            </div>
          </motion.div>

          {/* Label */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border-color)] bg-[var(--bg-primary)]/50 px-4 py-1.5 backdrop-blur-sm">
            <div 
              className="h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: accentColor }}
            />
            <span className="font-mono text-xs uppercase tracking-wider text-[var(--text-tertiary)]">
              {isProblem ? 'The Challenge' : 'Our Mission'}
            </span>
          </div>

          {/* Text */}
          <p className="max-w-2xl text-lg leading-relaxed text-[var(--text-secondary)] lg:text-xl">
            {text}
          </p>
        </div>
      </div>

      {/* Bottom glow effect */}
      <div 
        className="absolute bottom-0 left-1/2 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-current to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-30"
        style={{ color: accentColor }}
      />
    </motion.div>
  );
}

export function WhyV3() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-[var(--bg-primary)] py-32 lg:py-40">
      {/* Sophisticated background */}
      <div className="absolute inset-0">
        {/* Radial gradients */}
        <div className="absolute left-1/4 top-1/4 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00639A] opacity-[0.03] blur-[120px]" />
        <div className="absolute right-1/4 bottom-1/4 h-[500px] w-[500px] translate-x-1/2 translate-y-1/2 rounded-full bg-[#21B6F3] opacity-[0.03] blur-[120px]" />
        
        {/* Animated lines */}
        <div className="absolute inset-0 opacity-[0.02]">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-px w-full"
              style={{
                top: `${30 + i * 20}%`,
                background: 'linear-gradient(90deg, transparent, var(--accent-primary), transparent)',
              }}
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 15 + i * 3,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          ))}
        </div>

        {/* Dot grid */}
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: 'radial-gradient(circle, var(--accent-primary) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          
          {/* Section Header */}
          <div className="mb-20 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-6 inline-flex items-center gap-3"
            >
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-[var(--border-color)]" />
              <span className="font-mono text-xs uppercase tracking-widest text-[var(--text-tertiary)]">
                {t.privacy.whyTitle}
              </span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-[var(--border-color)]" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gradient-to-br from-[var(--text-primary)] to-[var(--text-tertiary)] bg-clip-text text-transparent"
            >
              {t.privacy.whyTitle}
            </motion.h2>
          </div>

          {/* Problem Statement */}
          <StatementCard
            type="problem"
            text={t.privacy.whyText1}
            icon={AlertCircle}
            accentColor="#00639A"
            delay={0.2}
          />

          {/* Connecting Arrow with vertical line */}
          <div className="relative py-12">
            {/* Vertical gradient line */}
            <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2">
              <motion.div
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="h-full w-full origin-top bg-gradient-to-b from-[#00639A]/50 via-[var(--accent-primary)] to-[#21B6F3]/50"
              />
            </div>

            {/* Arrow circle */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6, type: 'spring', stiffness: 200 }}
              className="relative mx-auto w-fit"
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                className="relative"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-full bg-[var(--accent-primary)] opacity-20 blur-xl" />
                
                {/* Circle */}
                <div className="relative flex h-14 w-14 items-center justify-center rounded-full border-2 border-[var(--border-color)] bg-gradient-to-br from-[var(--bg-secondary)] to-[var(--bg-primary)] backdrop-blur-xl shadow-xl">
                  <ArrowDown className="h-6 w-6 text-[var(--accent-primary)]" />
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Solution Statement */}
          <StatementCard
            type="solution"
            text={t.privacy.whyText2}
            icon={CheckCircle2}
            accentColor="#21B6F3"
            delay={0.8}
          />
        </div>
      </div>
    </section>
  );
}
