import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { ButtonPrimary } from '../ui/button-primary';
import { LanguageSelector } from '../language-selector';
import { useLanguage } from '../../contexts/language-context';
import btsBrandLight from 'figma:asset/572a92fbbf22c89867bf1fabc7776fbcc1a9a804.png';

export function HeaderModern() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
        isScrolled ? 'border-b border-white/5 bg-[#000000]/80 backdrop-blur-xl' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="container mx-auto px-6 py-5 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div className="flex items-center" whileHover={{ opacity: 0.8 }}>
            <img src={btsBrandLight} alt="BTS Global Corp" className="h-8 md:h-10" />
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
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
                className="text-sm text-white/60 transition-colors hover:text-white"
                whileHover={{ y: -1 }}
              >
                {item.label}
              </motion.a>
            ))}
          </nav>

          {/* Right side - Language + CTA */}
          <div className="flex items-center gap-4">
            <LanguageSelector />
            <motion.button
              className="hidden border border-white bg-white px-6 py-2.5 text-sm font-medium text-[#000000] transition-all duration-300 hover:bg-white/90 md:block"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {t.nav.startStructuring}
            </motion.button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}