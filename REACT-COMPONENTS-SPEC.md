# ⚛️ REACT COMPONENTS - ESPECIFICAÇÃO COMPLETA

## 📋 COMPONENTES DO SITE

---

## 1. APP.TSX (Root)

```typescript
// src/App.tsx
import { useEffect } from 'react';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { Header } from '@/components/layout/Header';
import { HeroSection } from '@/components/sections/HeroSection';
import { WhySection } from '@/components/sections/WhySection';
import { PrivacySection } from '@/components/sections/PrivacySection';
import { TrustedSection } from '@/components/sections/TrustedSection';
import { SolutionsSection } from '@/components/sections/SolutionsSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { PartnerSection } from '@/components/sections/PartnerSection';
import { Footer } from '@/components/layout/Footer';
import { ScrollToTop } from '@/components/ui/ScrollToTop';

export default function App() {
  useEffect(() => {
    // Add loaded class for initial animations
    document.body.classList.add('loaded');
  }, []);

  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-[var(--color-bg-primary)]">
          <Header />
          <main>
            <HeroSection />
            <WhySection />
            <PrivacySection />
            <TrustedSection />
            <SolutionsSection />
            <AboutSection />
            <PartnerSection />
          </main>
          <Footer />
          <ScrollToTop />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}
```

---

## 2. HEADER COMPONENT

```typescript
// src/components/layout/Header.tsx
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { BTSLogo } from '@/components/ui/BTSLogo';
import { MobileMenu } from './MobileMenu';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { key: 'home', href: '#home', label: t.nav.home },
    { key: 'about', href: '#about', label: t.nav.about },
    { key: 'solutions', href: '#solutions', label: t.nav.solutions },
    { key: 'partner', href: '#partner', label: t.nav.partner },
    { key: 'contact', href: '#contact', label: t.nav.contact },
  ];

  return (
    <>
      <motion.header
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-[var(--color-bg-primary)]/95 backdrop-blur-lg shadow-lg' 
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            
            {/* Logo */}
            <motion.a
              href="#"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                <BTSLogo className="h-12 w-auto" />
              </motion.div>
            </motion.a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:block">
              <ul className="flex items-center gap-2">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.key}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                  >
                    <motion.a
                      href={item.href}
                      className="group relative px-4 py-2 text-sm font-medium text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-text-primary)]"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="relative z-10">{item.label}</span>
                      <motion.div
                        className="absolute inset-0 rounded-lg bg-[var(--color-accent-primary)]/10 opacity-0 transition-opacity group-hover:opacity-100"
                        layoutId={`nav-hover-${item.key}`}
                      />
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-4">
              {/* Theme Toggle */}
              <motion.button
                onClick={toggleTheme}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden lg:flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--color-text-tertiary)]/20 text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-bg-secondary)]"
              >
                <motion.div
                  initial={false}
                  animate={{ rotate: theme === 'dark' ? 0 : 180 }}
                  transition={{ duration: 0.3 }}
                >
                  {theme === 'dark' ? '🌙' : '☀️'}
                </motion.div>
              </motion.button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--color-text-tertiary)]/20 text-[var(--color-text-primary)]"
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
        items={navItems}
      />
    </>
  );
}
```

---

## 3. HERO SECTION

```typescript
// src/components/sections/HeroSection.tsx
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center overflow-hidden bg-[var(--color-bg-primary)]"
    >
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(var(--color-text-tertiary) 1px, transparent 1px),
              linear-gradient(90deg, var(--color-text-tertiary) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      {/* Radial Gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute left-1/4 top-1/4 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-[120px]"
          style={{
            background: 'radial-gradient(circle, var(--color-bts-s02) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute right-1/4 bottom-1/4 h-[500px] w-[500px] rounded-full opacity-15 blur-[100px]"
          style={{
            background: 'radial-gradient(circle, var(--color-bts-s05) 0%, transparent 65%)',
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-accent-primary)]/20 bg-[var(--color-accent-primary)]/5 px-4 py-2 backdrop-blur-sm mb-6">
                <motion.div
                  className="h-2 w-2 rounded-full bg-[var(--color-accent-primary)]"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
                <span className="text-sm font-medium text-[var(--color-accent-primary)]">
                  {t.hero.badge}
                </span>
              </div>

              {/* Title */}
              <h1 className="mb-6 text-5xl font-bold leading-tight text-[var(--color-text-primary)] lg:text-7xl">
                {t.hero.title.split(' ').map((word, i) => (
                  <motion.span
                    key={i}
                    className="inline-block"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                  >
                    {word}{' '}
                  </motion.span>
                ))}
              </h1>

              {/* Description */}
              <motion.p
                className="mb-8 text-xl text-[var(--color-text-secondary)] lg:text-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                {t.hero.description}
              </motion.p>

              {/* CTAs */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {/* Primary CTA */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-[var(--color-bts-s02)] to-[var(--color-bts-s05)] px-8 py-4 text-white shadow-lg"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2 font-semibold">
                    {t.hero.cta}
                    <motion.div
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight size={20} />
                    </motion.div>
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-white/15 opacity-0 transition-opacity group-hover:opacity-100"
                    initial={false}
                  />
                </motion.button>

                {/* Secondary CTA */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative flex items-center justify-center gap-2 rounded-lg border-2 border-[var(--color-text-tertiary)]/20 px-8 py-4 font-semibold text-[var(--color-text-primary)] transition-colors hover:border-[var(--color-accent-primary)] hover:text-[var(--color-accent-primary)]"
                >
                  <Play size={20} />
                  {t.hero.ctaSecondary}
                </motion.button>
              </motion.div>
            </motion.div>
          </div>

          {/* Hero Image/Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative aspect-square">
              {/* Placeholder for hero visual - can be replaced with actual image/3D element */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[var(--color-bts-s02)] to-[var(--color-bts-s05)] opacity-10" />
              <motion.div
                className="absolute inset-4 rounded-2xl border border-[var(--color-accent-primary)]/20"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
```

---

## 4. PARTNER SECTION (Exemplo completo do Figma)

```typescript
// src/components/sections/PartnerSection.tsx
import { motion } from 'framer-motion';
import { ArrowRight, LogIn } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function PartnerSection() {
  const { t } = useLanguage();

  const infrastructureItems = [
    t.partner.infrastructure1,
    t.partner.infrastructure2,
    t.partner.infrastructure3,
    t.partner.infrastructure4,
  ];

  const growthFeatures = [
    { title: t.partner.growth1Title, text: t.partner.growth1Text },
    { title: t.partner.growth2Title, text: t.partner.growth2Text },
    { title: t.partner.growth3Title, text: t.partner.growth3Text },
  ];

  const benefits = [
    t.partner.benefit1,
    t.partner.benefit2,
    t.partner.benefit3,
    t.partner.benefit4,
    t.partner.benefit5,
  ];

  return (
    <section id="partner" className="relative overflow-hidden bg-[var(--color-bg-primary)] py-20 lg:py-32">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(var(--color-text-tertiary) 1px, transparent 1px),
              linear-gradient(90deg, var(--color-text-tertiary) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      {/* Radial Gradients - BTS Colors */}
      <div className="absolute inset-0">
        <div
          className="absolute left-1/4 top-1/3 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 opacity-12"
          style={{
            background: 'radial-gradient(circle, #00639A 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute right-1/4 bottom-1/3 h-[500px] w-[500px] opacity-10"
          style={{
            background: 'radial-gradient(circle, #21B6F3 0%, transparent 65%)',
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <div className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-[var(--color-text-tertiary)]/20 bg-[var(--color-bg-secondary)]/50 px-4 py-2 backdrop-blur-sm">
              {/* Shimmer Effect - EXATAMENTE como no Figma */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00639A]/10 to-transparent"
                animate={{ x: ['-200%', '200%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              />
              {/* Pulse Dot - EXATAMENTE como no Figma */}
              <motion.div
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: '#00639A' }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              <span className="relative font-mono text-xs uppercase tracking-widest text-[var(--color-text-tertiary)]">
                {t.language === 'pt' ? 'PARCERIA ESTRATÉGICA' : 'STRATEGIC PARTNERSHIP'}
              </span>
            </div>
          </motion.div>

          {/* Header */}
          <div className="mb-32 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="mb-8 text-4xl font-bold text-[var(--color-text-primary)] lg:text-6xl"
            >
              {t.partner.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto mb-6 max-w-3xl text-xl text-[var(--color-text-secondary)] lg:text-2xl"
            >
              {t.partner.subtitle}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto max-w-4xl leading-relaxed text-[var(--color-text-tertiary)]"
            >
              {t.partner.intro}
            </motion.p>
          </div>

          {/* Section 1: Infrastructure */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mb-32"
          >
            {/* Number + Title */}
            <div className="mb-12 flex items-baseline gap-6">
              <span className="font-mono text-6xl tracking-tight text-[var(--color-text-tertiary)]/30 lg:text-7xl">
                01
              </span>
              <div className="flex-1 space-y-3">
                <div 
                  className="h-px w-full"
                  style={{
                    background: 'linear-gradient(to right, rgba(0, 99, 154, 0.3), transparent)',
                  }}
                />
                <h3 className="text-3xl font-semibold text-[var(--color-text-primary)] lg:text-4xl">
                  {t.partner.infrastructureTitle}
                </h3>
              </div>
            </div>

            <p className="mb-10 max-w-3xl text-lg text-[var(--color-text-tertiary)]">
              {t.partner.infrastructureIntro}
            </p>

            {/* Grid 2 cols */}
            <div className="grid gap-6 md:grid-cols-2">
              {infrastructureItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="flex items-start gap-4">
                    {/* Indicator - BTS S02 */}
                    <div 
                      className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full"
                      style={{ backgroundColor: '#00639A' }}
                    />
                    <p className="flex-1 leading-relaxed text-[var(--color-text-tertiary)]">
                      {item}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTAs - EXATAMENTE como no Figma */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6"
          >
            {/* Primary CTA */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative w-full overflow-hidden rounded-lg sm:w-auto"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#00639A] to-[#21B6F3]" />
              <div className="relative flex items-center gap-2 px-8 py-4 text-white">
                <span className="font-semibold">{t.partner.cta}</span>
                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="h-4 w-4" />
                </motion.div>
              </div>
              <motion.div
                className="absolute inset-0 bg-white/15 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                initial={false}
              />
            </motion.button>

            {/* Secondary CTA */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative inline-flex w-full items-center justify-center gap-3 overflow-hidden rounded-lg border-2 px-8 py-4 transition-all duration-300 sm:w-auto"
              style={{ 
                borderColor: '#00639A',
                backgroundColor: 'transparent',
              }}
            >
              <LogIn className="h-4 w-4 text-[#00639A] transition-colors duration-300 group-hover:text-[#21B6F3]" />
              <span className="relative z-10 font-semibold text-[#00639A] transition-colors duration-300 group-hover:text-[#21B6F3]">
                {t.partner.ctaLogin}
              </span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
```

---

## CONTINUANDO...

Nos próximos arquivos vou especificar:
- ✅ Contexts (Language, Theme, Auth)
- ✅ Hooks customizados
- ✅ Tipos TypeScript
- ✅ Utils e helpers
- ✅ Componentes UI reutilizáveis
- ✅ Partner Portal em React

**STATUS:** 🔄 Componentes React em criação...
