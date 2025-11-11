import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../../contexts/language-context';
import { ButtonPrimary } from '../ui/button-primary';
import btsBrandLight from 'figma:asset/572a92fbbf22c89867bf1fabc7776fbcc1a9a804.png';

export function HeaderBigTech() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-[#0B1221]/90 backdrop-blur-2xl border-b border-[#4F7BFF]/20' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-20 py-5">
        <div className="flex items-center justify-between">
          <motion.div className="flex items-center" whileHover={{ scale: 1.05 }}>
            <img src={btsBrandLight} alt="BTS Global Corp" className="h-10 md:h-12" />
          </motion.div>

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
                className="relative text-[#C6CEDF] hover:text-white transition-colors"
                whileHover={{ y: -2 }}
              >
                {item.label}
                <motion.span
                  className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4F7BFF] to-transparent"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                />
              </motion.a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <LanguageSelector />
            <ButtonPrimary>
              {t.nav.startStructuring}
            </ButtonPrimary>
          </div>
        </div>
      </div>
    </motion.header>
  );
}