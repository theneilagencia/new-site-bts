import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ButtonPrimary } from '../button-primary';
import { LanguageSelector } from '../language-selector';
import { useLanguage } from '../../contexts/language-context';
import btsBrandDark from 'figma:asset/572a92fbbf22c89867bf1fabc7776fbcc1a9a804.png';
import btsBrandLight from 'figma:asset/258e308a40bb02d3a0f11d8c08b844ee8259563e.png';

export function HeaderMain() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Check if we're in hero section (dark background)
  const [isDarkSection, setIsDarkSection] = useState(true);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
      // Adjust threshold based on hero section height
      setIsDarkSection(scrollPosition < window.innerHeight * 0.8);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-500
        ${isScrolled 
          ? 'bg-white/90 backdrop-blur-xl border-b border-[#E8E8E8] shadow-sm' 
          : isDarkSection 
            ? 'bg-transparent' 
            : 'bg-white/90 backdrop-blur-xl'
        }
      `}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-20 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <img 
              src={isDarkSection && !isScrolled ? btsBrandLight : btsBrandDark} 
              alt="BTS Global Corp" 
              className="h-8 transition-opacity duration-500" 
            />
          </motion.div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {[
              { href: '#home', label: t.nav.home },
              { href: '#solutions', label: t.nav.solutions },
              { href: '#about', label: t.nav.about },
              { href: '#partner', label: t.nav.partner },
              { href: '#contact', label: t.nav.contact },
            ].map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                className={`relative transition-colors ${
                  isDarkSection && !isScrolled 
                    ? 'text-white/90 hover:text-white' 
                    : 'text-[#122539] hover:text-[#185AB4]'
                }`}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                {item.label}
                <motion.span
                  className={`absolute -bottom-1 left-0 right-0 h-0.5 ${
                    isDarkSection && !isScrolled ? 'bg-white' : 'bg-[#185AB4]'
                  }`}
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </nav>

          {/* Language Selector & CTA */}
          <div className="hidden md:flex items-center gap-4">
            <LanguageSelector />
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <ButtonPrimary>
                {t.nav.startStructuring}
              </ButtonPrimary>
            </motion.div>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden p-2">
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke={isDarkSection && !isScrolled ? 'white' : 'currentColor'}
              strokeWidth="2"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
    </motion.header>
  );
}