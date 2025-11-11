import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Shield, Settings, Compass, Gem } from 'lucide-react';
import { useLanguage } from '../../contexts/language-context';
import { LogicParticles } from '../logic-particles';
import { NetworkTopology } from '../network-topology';
import { ButtonPrimary } from '../ui/button-primary';

export function CredibilityPalantir() {
  const { t } = useLanguage();
  const { scrollYProgress } = useScroll();
  
  // Parallax effects - differential movement
  const yText = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const yBackground = useTransform(scrollYProgress, [0, 1], [0, 40]);

  const privacyFeatures = [
    { 
      icon: Shield, 
      title: t.language === 'pt' ? 'Privacidade seletiva' : 'Selective privacy',
      text: t.privacy.feature1,
    },
    { 
      icon: Settings, 
      title: t.language === 'pt' ? 'Governança automatizada' : 'Automated governance',
      text: t.privacy.feature2,
    },
    { 
      icon: Compass, 
      title: t.language === 'pt' ? 'Conformidade global' : 'Global compliance',
      text: t.privacy.feature3,
    },
    { 
      icon: Gem, 
      title: t.language === 'pt' ? 'Transparência criptográfica' : 'Cryptographic transparency',
      text: t.language === 'pt' ? 'Auditável e verificável' : 'Auditable and verifiable',
    },
  ];

  const [cursorPosition, setCursorPosition] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* Why BTS Exists - Refatorado Completamente */}
      <section id="privacy" className="relative py-32 bg-gradient-to-b from-[var(--bg-primary)] via-[#0A0F1E]/90 to-[#0A0F1E] overflow-hidden">
        {/* Minimal grid texture - muito sutil */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 60px, rgba(255, 255, 255, 0.5) 60px, rgba(255, 255, 255, 0.5) 61px),
                              repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(255, 255, 255, 0.5) 60px, rgba(255, 255, 255, 0.5) 61px)`,
          }}
        />

        {/* Radial gradient spotlight effect */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background: 'radial-gradient(ellipse 1200px 800px at 50% 20%, rgba(31, 74, 255, 0.15), transparent)',
          }}
        />

        {/* Animated subtle particles */}
        <motion.div
          className="absolute inset-0"
          animate={{
            backgroundPosition: ['0px 0px', '100px 100px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(31, 74, 255, 0.03) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />

        <div className="max-w-[1280px] mx-auto px-6 md:px-12 relative z-10">
          {/* Centered Layout - Single Column */}
          <div className="flex flex-col items-center text-center">
            
            {/* Title Block */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="mb-20"
            >
              <h2 
                className="text-white mb-6"
                style={{ 
                  fontFamily: 'Inter Tight, Inter, sans-serif',
                  fontSize: '80px',
                  fontWeight: 900,
                  lineHeight: 1.1,
                  letterSpacing: '-0.04em',
                  textShadow: '0 0 60px rgba(31, 74, 255, 0.2)',
                }}
              >
                {t.language === 'pt' ? 'Por que a BTS Existe' : 'Why BTS Exists'}
              </h2>
              
              {/* Underline animada - mais larga e centrada */}
              <motion.div 
                className="h-1.5 rounded-full relative overflow-hidden mx-auto"
                style={{ width: '200px' }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#1F4AFF] to-transparent" />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent"
                  animate={{ x: ['-200%', '200%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                />
              </motion.div>
            </motion.div>

            {/* Content Blocks - 3 Cards Horizontais */}
            <div className="grid md:grid-cols-3 gap-6 w-full mb-20">
              
              {/* Card 1 */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="group relative bg-white/[0.02] backdrop-blur-sm border border-white/[0.05] rounded-2xl p-8 hover:bg-white/[0.04] hover:border-[#1F4AFF]/30 transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-[#1F4AFF]/0 to-[#1F4AFF]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                
                <div className="relative">
                  <div className="w-12 h-12 rounded-lg bg-[#1F4AFF]/10 flex items-center justify-center mb-6 group-hover:bg-[#1F4AFF]/20 transition-colors duration-500">
                    <div className="w-6 h-6 rounded-full bg-[#1F4AFF]/30" />
                  </div>
                  
                  <h3 className="text-white mb-4" style={{ fontSize: '22px', fontWeight: 700, letterSpacing: '-0.01em' }}>
                    {t.language === 'pt' ? 'O Problema' : 'The Problem'}
                  </h3>
                  
                  <p className="text-[#C6CEDF]/80" style={{ fontSize: '16px', lineHeight: 1.7 }}>
                    {t.language === 'pt' 
                      ? 'O mundo se tornou global, mas os sistemas que sustentam empresas e patrimônios continuam presos a fronteiras.'
                      : 'The world has gone global, but the systems that support businesses and wealth remain trapped within borders.'}
                  </p>
                </div>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="group relative bg-white/[0.02] backdrop-blur-sm border border-white/[0.05] rounded-2xl p-8 hover:bg-white/[0.04] hover:border-[#1F4AFF]/30 transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-[#1F4AFF]/0 to-[#1F4AFF]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                
                <div className="relative">
                  <div className="w-12 h-12 rounded-lg bg-[#1F4AFF]/10 flex items-center justify-center mb-6 group-hover:bg-[#1F4AFF]/20 transition-colors duration-500">
                    <div className="w-6 h-6 rounded-full bg-[#1F4AFF]/30" />
                  </div>
                  
                  <h3 className="text-white mb-4" style={{ fontSize: '22px', fontWeight: 700, letterSpacing: '-0.01em' }}>
                    {t.language === 'pt' ? 'A Realidade' : 'The Reality'}
                  </h3>
                  
                  <p className="text-[#C6CEDF]/80" style={{ fontSize: '16px', lineHeight: 1.7 }}>
                    {t.language === 'pt'
                      ? 'Empreendedores, investidores e famílias vivem entre países, mas sua infraestrutura jurídica e financeira ainda fala a língua do passado.'
                      : 'Entrepreneurs, investors, and families live across countries, but their legal and financial infrastructure still speaks the language of the past.'}
                  </p>
                </div>
              </motion.div>

              {/* Card 3 */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="group relative bg-white/[0.02] backdrop-blur-sm border border-white/[0.05] rounded-2xl p-8 hover:bg-white/[0.04] hover:border-[#1F4AFF]/30 transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-[#1F4AFF]/0 to-[#1F4AFF]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                
                <div className="relative">
                  <div className="w-12 h-12 rounded-lg bg-[#1F4AFF]/10 flex items-center justify-center mb-6 group-hover:bg-[#1F4AFF]/20 transition-colors duration-500">
                    <div className="w-6 h-6 rounded-full bg-[#1F4AFF]/30" />
                  </div>
                  
                  <h3 className="text-white mb-4" style={{ fontSize: '22px', fontWeight: 700, letterSpacing: '-0.01em' }}>
                    {t.language === 'pt' ? 'Nossa Solução' : 'Our Solution'}
                  </h3>
                  
                  <p className="text-[#C6CEDF]/80" style={{ fontSize: '16px', lineHeight: 1.7 }}>
                    {t.language === 'pt'
                      ? 'A BTS Global Corp surge para libertar essa nova geração, unindo tecnologia, compliance e privacidade para tornar a estruturação internacional tão simples quanto abrir uma empresa online.'
                      : 'BTS Global Corp emerges to liberate this new generation, uniting technology, compliance, and privacy to make international structuring as simple as opening a company online.'}
                  </p>
                </div>
              </motion.div>

            </div>

            {/* Bottom Statement - Destaque */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-[900px] mx-auto"
            >
              <p 
                className="text-white/90"
                style={{ 
                  fontSize: '24px', 
                  lineHeight: 1.6, 
                  fontWeight: 500,
                  letterSpacing: '-0.01em',
                }}
              >
                {t.language === 'pt'
                  ? 'Um novo paradigma de confiança global, criado para quem escolheu viver sem fronteiras.'
                  : 'A new paradigm of global trust, built for those who chose to live without borders.'}
              </p>
              
              {/* Accent line */}
              <motion.div
                className="h-0.5 bg-gradient-to-r from-transparent via-[#1F4AFF]/60 to-transparent mt-8"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.8 }}
              />
            </motion.div>

          </div>
        </div>
      </section>

      {/* Privacy is Freedom - Central with Glassmorphism */}
      <section className="relative py-40 bg-gradient-to-b from-[#0A0F1E] to-[#18365B] overflow-hidden">
        {/* Animated mesh background with depth */}
        <motion.div
          className="absolute inset-0 opacity-20 blur-[20px]"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, rgba(79, 123, 255, 0.15) 0%, transparent 50%)`,
          }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        {/* Diagonal reflection (One-Way Mirror) */}
        <motion.div
          className="absolute inset-0 opacity-15"
          style={{
            background: 'linear-gradient(135deg, transparent 0%, rgba(79, 123, 255, 0.3) 48%, rgba(255, 255, 255, 0.2) 50%, rgba(79, 123, 255, 0.3) 52%, transparent 100%)',
            backgroundSize: '400% 400%',
          }}
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        <div className="max-w-[1440px] mx-auto px-6 md:px-20 relative z-10">
          {/* Title with glow and gradient pulse */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.h2 
              className="text-white mb-6 relative inline-block"
              style={{ 
                fontFamily: 'Satoshi, Inter Tight, Inter, sans-serif',
                fontSize: '52px',
                fontWeight: 700,
              }}
              animate={{
                textShadow: [
                  '0 0 20px rgba(79, 123, 255, 0.4)',
                  '0 0 30px rgba(79, 123, 255, 0.6)',
                  '0 0 20px rgba(79, 123, 255, 0.4)',
                ],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              {t.privacy.privacyTitle}
            </motion.h2>
            
            <motion.p 
              className="text-[#C6CEDF] max-w-3xl mx-auto"
              style={{ fontSize: '20px', lineHeight: 1.6 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {t.language === 'pt' 
                ? 'Cada estrutura BTS é ancorada em transparência verificável. Chamamos isso de '
                : 'Every BTS structure is anchored in verifiable transparency. We call this the '}
              <span className="relative inline-block">
                <span className="text-[#4F7BFF] font-semibold">
                  {t.language === 'pt' ? 'Espelho Unidirecional de Confiança' : 'One-Way Mirror of Trust'}
                </span>
                <motion.span
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#4F7BFF] via-[#9A7BFF] to-[#4F7BFF]"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                />
              </span>
              {t.language === 'pt' ? ', uma camada blockchain que garante:' : ', a blockchain layer that guarantees:'}
            </motion.p>
          </motion.div>

          {/* Glassmorphism panel with 2x2 grid */}
          <motion.div
            className="max-w-5xl mx-auto relative"
            initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Glass panel - enhanced blur */}
            <div className="relative bg-white/[0.03] backdrop-blur-xl border border-[#4F7BFF]/20 rounded-3xl p-12 overflow-hidden">
              {/* Inner glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1F4AFF]/10 to-transparent rounded-3xl" />
              
              {/* 2x2 Grid of features */}
              <div className="grid md:grid-cols-2 gap-8 relative z-10">
                {privacyFeatures.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <motion.div
                      key={index}
                      className="group relative p-8 bg-[#0A0E16]/60 backdrop-blur-xl border border-[#4F7BFF]/20 rounded-2xl cursor-pointer overflow-hidden"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                      whileHover={{ 
                        scale: 1.05,
                        borderColor: 'rgba(79, 123, 255, 0.8)',
                        transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
                      }}
                    >
                      {/* Hover glow - inner */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-[#1F4AFF]/30 to-transparent rounded-2xl opacity-0 group-hover:opacity-100"
                        style={{
                          boxShadow: 'inset 0 0 12px rgba(79, 123, 255, 0.5)',
                        }}
                        transition={{ duration: 0.3 }}
                      />
                      
                      <div className="relative z-10">
                        {/* Icon with pulse on hover */}
                        <motion.div
                          className="w-14 h-14 bg-gradient-to-br from-[#1F4AFF]/20 to-[#4F7BFF]/10 rounded-xl flex items-center justify-center mb-6 border border-[#4F7BFF]/20"
                          whileHover={{ 
                            rotate: 360, 
                            scale: 1.1,
                          }}
                          transition={{ duration: 0.6 }}
                        >
                          <motion.div
                            animate={{
                              scale: [1, 1.1, 1],
                            }}
                            transition={{
                              duration: 1.2,
                              repeat: Infinity,
                              repeatType: 'loop',
                            }}
                          >
                            <Icon className="w-7 h-7 text-[#4F7BFF]" strokeWidth={1.5} />
                          </motion.div>
                        </motion.div>

                        {/* Title - transitions to white on hover */}
                        <h4 
                          className="text-[#C6CEDF] mb-3 group-hover:text-white transition-colors duration-300"
                          style={{ fontSize: '20px', fontWeight: 600 }}
                        >
                          {feature.title}
                        </h4>

                        {/* Text */}
                        <p className="text-[#C6CEDF]/80 group-hover:text-[#C6CEDF] transition-colors duration-300">
                          {feature.text}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Tagline */}
          <motion.p
            className="text-center text-2xl text-[#C6CEDF]/70 italic font-light mt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            {t.privacy.tagline}
          </motion.p>
        </div>
      </section>
    </>
  );
}