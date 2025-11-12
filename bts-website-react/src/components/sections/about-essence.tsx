'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, useState } from 'react';
import { useLanguage } from '../../contexts/language-context';
import { GlobeMeshIcon, PrecisionGearIcon, CrystalPrismIcon } from '../icons/essence-icons';

interface EssenceCardProps {
  title: string;
  text: string;
  icon: 'globe' | 'gear' | 'prism';
  index: number;
  isValues?: boolean;
  values?: Array<{ title: string; text: string }>;
}

function EssenceCard({ title, text, icon, index, isValues, values }: EssenceCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const IconComponent =
    icon === 'globe' ? GlobeMeshIcon : icon === 'gear' ? PrecisionGearIcon : CrystalPrismIcon;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.9,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      {/* Ambient glow on hover */}
      <motion.div
        className="pointer-events-none absolute -inset-6 rounded-[28px] opacity-0 blur-2xl transition-opacity duration-700"
        animate={{
          opacity: isHovered ? 0.15 : 0,
        }}
        style={{
          background: 'radial-gradient(circle, rgba(79, 123, 255, 0.4) 0%, transparent 70%)',
        }}
      />

      {/* Content without card container */}
      <div className="relative p-10 lg:p-12">
        {/* Icon container */}
        <motion.div
          className="mb-8 flex justify-center"
          animate={{
            y: isHovered ? -4 : 0,
          }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <IconComponent className="transition-all duration-500 group-hover:drop-shadow-[0_0_15px_rgba(79,123,255,0.6)]" />
        </motion.div>

        {/* Title */}
        <motion.h3
          className="mb-6 text-center bg-gradient-to-br from-white to-white/80 bg-clip-text text-transparent"
          animate={{
            background: isHovered
              ? 'linear-gradient(135deg, #FFFFFF 0%, #00E5FF 100%)'
              : 'linear-gradient(135deg, #FFFFFF 0%, rgba(255, 255, 255, 0.8) 100%)',
          }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h3>

        {/* Text or Values list */}
        {!isValues ? (
          <p className="text-center leading-relaxed text-[#C6CEDF]/85">{text}</p>
        ) : (
          <div className="space-y-6">
            {values?.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 + i * 0.1 }}
              >
                <div className="mb-2 flex items-baseline gap-3">
                  <motion.span
                    className="h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-[#4F7BFF] to-[#00E5FF]"
                    animate={{
                      boxShadow: isHovered
                        ? '0 0 12px rgba(79, 123, 255, 0.8)'
                        : '0 0 0px rgba(79, 123, 255, 0)',
                    }}
                    transition={{ duration: 0.4 }}
                  />
                  <h4 className="font-medium text-white/95">{value.title}</h4>
                </div>
                <p className="pl-5 text-sm leading-relaxed text-[#C6CEDF]/80">{value.text}</p>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export function AboutEssence() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);

  // Parallax for aurora effect
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const yAurora = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacityAurora = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.7]);

  const essenceCards = [
    {
      title: t.about.visionTitle,
      text: t.about.visionText,
      icon: 'globe' as const,
    },
    {
      title: t.about.missionTitle,
      text: t.about.missionText,
      icon: 'gear' as const,
    },
    {
      title: t.about.valuesTitle,
      text: '',
      icon: 'prism' as const,
      isValues: true,
      values: [
        { title: t.about.value1Title, text: t.about.value1Text },
        { title: t.about.value2Title, text: t.about.value2Text },
        { title: t.about.value3Title, text: t.about.value3Text },
      ],
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative overflow-hidden py-32 lg:py-40"
    >
      {/* Deep navy gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B1221] via-[#081529] to-[#0B1221]" />

      {/* Aurora texture overlay with parallax */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{ y: yAurora, opacity: opacityAurora }}
      >
        <div
          className="h-full w-full opacity-15"
          style={{
            backgroundImage: `
              radial-gradient(ellipse at 20% 30%, rgba(79, 123, 255, 0.15) 0%, transparent 50%),
              radial-gradient(ellipse at 80% 70%, rgba(0, 229, 255, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 50% 50%, rgba(31, 74, 255, 0.08) 0%, transparent 60%)
            `,
          }}
        />
      </motion.div>

      {/* Ambient floating orbs */}
      <motion.div
        className="pointer-events-none absolute left-1/4 top-1/3 h-[400px] w-[400px] rounded-full bg-[#1F4AFF] opacity-[0.04] blur-[100px]"
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="pointer-events-none absolute bottom-1/3 right-1/4 h-[500px] w-[500px] rounded-full bg-[#00E5FF] opacity-[0.03] blur-[120px]"
        animate={{
          x: [0, -50, 0],
          y: [0, 40, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="container relative z-10 mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-20 max-w-3xl text-center lg:mb-28">
          {/* Foundation badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#4F7BFF]/15 bg-[#1F4AFF]/[0.06] px-4 py-2 backdrop-blur-sm"
          >
            <motion.span
              className="h-1.5 w-1.5 rounded-full bg-[#00E5FF]"
              animate={{
                boxShadow: [
                  '0 0 6px rgba(0, 229, 255, 0.5)',
                  '0 0 14px rgba(0, 229, 255, 0.8)',
                  '0 0 6px rgba(0, 229, 255, 0.5)',
                ],
                scale: [1, 1.2, 1],
              }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            />
            <span className="font-mono text-xs uppercase tracking-wider text-[#C6CEDF]/70">
              {t.about.badge}
            </span>
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h2 className="mb-8 bg-gradient-to-br from-white via-white to-white/60 bg-clip-text text-transparent">
              {t.about.title}
            </h2>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg leading-relaxed text-[#C6CEDF]/75 lg:text-xl"
          >
            {t.about.subtitle}
          </motion.p>

          {/* Decorative separator */}
          <motion.div
            className="mx-auto mt-10 flex items-center justify-center gap-2"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.div
              className="h-px w-12 bg-gradient-to-r from-transparent via-[#4F7BFF] to-transparent"
              animate={{ scaleX: [1, 1.3, 1] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="h-1 w-1 rounded-full bg-[#00E5FF]"
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="h-px w-12 bg-gradient-to-r from-transparent via-[#4F7BFF] to-transparent"
              animate={{ scaleX: [1, 1.3, 1] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1.75 }}
            />
          </motion.div>
        </div>

        {/* Intro text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mx-auto mb-20 max-w-3xl text-center lg:mb-28"
        >
          <p className="leading-relaxed text-[#E0E6F0]/70 lg:text-lg">{t.about.intro}</p>
        </motion.div>

        {/* Essence Cards Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {essenceCards.map((card, index) => (
            <EssenceCard
              key={card.title}
              title={card.title}
              text={card.text}
              icon={card.icon}
              index={index}
              isValues={card.isValues}
              values={card.values}
            />
          ))}
        </div>

        {/* Bottom luminous line */}
        <motion.div
          className="mx-auto mt-20 h-px w-full max-w-2xl bg-gradient-to-r from-transparent via-[#4F7BFF]/20 to-transparent lg:mt-28"
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />
      </div>
    </section>
  );
}