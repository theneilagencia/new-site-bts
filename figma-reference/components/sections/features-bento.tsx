'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { useLanguage } from '../../contexts/language-context';
import { Globe2, Shield, Lock, Zap, Eye, Users, TrendingUp, Award, Boxes, Code2, Database, Workflow } from 'lucide-react';
import { useEffect, useState } from 'react';

export function FeaturesBento() {
  const { t } = useLanguage();
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const features = [
    {
      icon: Globe2,
      title: 'Global Infrastructure',
      description: '50+ jurisdictions with instant deployment',
      color: '#00639A',
      size: 'large', // col-span-2 row-span-2
    },
    {
      icon: Shield,
      title: 'Bank-Grade Security',
      description: 'Military encryption standards',
      color: '#00BCA5',
      size: 'medium', // col-span-1 row-span-2
    },
    {
      icon: Lock,
      title: 'Zero Knowledge',
      description: 'Complete privacy architecture',
      color: '#21B6F3',
      size: 'small',
    },
    {
      icon: Zap,
      title: 'Instant Setup',
      description: '< 5 minutes to go live',
      color: '#2A7BA1',
      size: 'small',
    },
    {
      icon: Eye,
      title: 'Transparency',
      description: 'Real-time audit trails',
      color: '#00639A',
      size: 'medium',
    },
    {
      icon: Users,
      title: '24/7 Support',
      description: 'Dedicated account managers',
      color: '#00BCA5',
      size: 'small',
    },
    {
      icon: TrendingUp,
      title: 'Scalable',
      description: 'From startup to enterprise',
      color: '#21B6F3',
      size: 'small',
    },
    {
      icon: Award,
      title: 'Compliance',
      description: '100% regulatory adherence',
      color: '#2A7BA1',
      size: 'medium',
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[var(--bg-primary)] py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,#00639A05,transparent_50%),radial-gradient(circle_at_70%_50%,#21B6F305,transparent_50%)]" />

      <div className="container relative z-10 mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-block"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border-color)] bg-[var(--bg-secondary)]/50 px-4 py-2 backdrop-blur-xl">
              <Boxes className="h-4 w-4 text-[var(--accent-primary)]" />
              <span className="font-mono text-xs uppercase tracking-wider text-[var(--text-tertiary)]">
                Enterprise Features
              </span>
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-4 bg-gradient-to-br from-[var(--text-primary)] to-[var(--text-tertiary)] bg-clip-text text-transparent"
          >
            Everything You Need
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto max-w-2xl text-lg text-[var(--text-tertiary)]"
          >
            A complete trust infrastructure platform designed for modern businesses
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid auto-rows-[200px] grid-cols-1 gap-4 md:grid-cols-3 lg:gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isLarge = feature.size === 'large';
            const isMedium = feature.size === 'medium';
            const isHovered = hoveredCard === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
                className={`
                  group relative overflow-hidden rounded-3xl
                  ${isLarge ? 'md:col-span-2 md:row-span-2' : ''}
                  ${isMedium ? 'md:col-span-1 md:row-span-2' : ''}
                `}
              >
                {/* Card Background */}
                <div className="absolute inset-0 border border-[var(--border-color)] bg-gradient-to-br from-[var(--bg-secondary)]/80 to-[var(--bg-secondary)]/40 backdrop-blur-2xl transition-all duration-500 group-hover:border-[var(--accent-primary)]/30" />

                {/* Hover Glow */}
                <div
                  className="absolute inset-0 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background: `radial-gradient(circle at 50% 50%, ${feature.color}20, transparent 70%)`,
                  }}
                />

                {/* Content */}
                <div className={`relative flex h-full flex-col justify-between p-6 ${isLarge ? 'lg:p-10' : ''}`}>
                  {/* Icon */}
                  <motion.div
                    animate={isHovered ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mb-auto"
                  >
                    <div
                      className="inline-flex items-center justify-center rounded-2xl border border-[var(--border-color)] p-3 backdrop-blur-sm transition-all duration-500 group-hover:border-transparent group-hover:shadow-xl lg:p-4"
                      style={{
                        background: `linear-gradient(135deg, ${feature.color}20, ${feature.color}05)`,
                      }}
                    >
                      <Icon
                        className={`${isLarge ? 'h-8 w-8 lg:h-10 lg:w-10' : 'h-6 w-6'}`}
                        style={{ 
                          color: feature.color,
                          filter: isHovered ? `drop-shadow(0 0 12px ${feature.color})` : 'none',
                        }}
                      />
                    </div>
                  </motion.div>

                  {/* Text */}
                  <div className="space-y-2">
                    <h3 className={`font-medium text-[var(--text-primary)] ${isLarge ? 'text-2xl lg:text-3xl' : 'text-lg'}`}>
                      {feature.title}
                    </h3>
                    <p className={`text-[var(--text-tertiary)] ${isLarge ? 'text-base lg:text-lg' : 'text-sm'}`}>
                      {feature.description}
                    </p>
                  </div>

                  {/* Decorative corner accent */}
                  <div className="absolute right-0 top-0 h-16 w-16 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <div 
                      className="absolute right-0 top-0 h-px w-16 bg-gradient-to-l to-transparent"
                      style={{ backgroundImage: `linear-gradient(to left, ${feature.color}, transparent)` }}
                    />
                    <div 
                      className="absolute right-0 top-0 h-16 w-px bg-gradient-to-b to-transparent"
                      style={{ backgroundImage: `linear-gradient(to bottom, ${feature.color}, transparent)` }}
                    />
                  </div>

                  {/* Animated dots */}
                  {isLarge && (
                    <div className="absolute bottom-6 right-6 flex gap-1">
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          animate={{
                            opacity: [0.3, 1, 0.3],
                            scale: [1, 1.2, 1],
                          }}
                          transition={{
                            duration: 2,
                            delay: i * 0.3,
                            repeat: Infinity,
                          }}
                          className="h-1.5 w-1.5 rounded-full"
                          style={{ backgroundColor: feature.color }}
                        />
                      ))}
                    </div>
                  )}
                </div>

                {/* Shimmer effect on hover */}
                <motion.div
                  className="absolute inset-0 -translate-x-full"
                  animate={isHovered ? { translateX: '100%' } : {}}
                  transition={{ duration: 0.8 }}
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent)',
                  }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group inline-flex items-center gap-2 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-secondary)]/50 px-8 py-4 backdrop-blur-xl transition-all hover:border-[var(--accent-primary)]/50 hover:bg-[var(--bg-secondary)]/80"
          >
            <span className="font-medium text-[var(--text-primary)]">Explore All Features</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Workflow className="h-4 w-4 text-[var(--accent-primary)]" />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
