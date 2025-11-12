
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { Sun, Moon, Menu } from 'lucide-react';
import { MobileMenu } from '@/components/layout/MobileMenu';
import { BtsLogo } from '@/components/ui/BtsLogo';

interface HeaderV2Props {
  onAccessPortal?: () => void;
}

export function Header({ onAccessPortal }: HeaderV2Props = {}) {
  const { t, language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <motion.header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-[var(--bg-primary)]/80 backdrop-blur-xl border-b border-[var(--border-color)]' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              <BtsLogo className="h-12 w-auto" />
            </motion.div>
          </motion.a>

          {/* Navigation */}
          <nav className="hidden items-center gap-1 lg:flex">
            {[
              { key: 'solutions', href: '#solutions' },
              { key: 'about', href: '#about' },
              { key: 'partner', href: '#partner' },
            ].map((item, index) => (
              <motion.a
                key={item.key}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.querySelector(item.href);
                  if (element) {
                    const headerOffset = 80;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: 'smooth'
                    });
                  }
                }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
                className="group relative px-4 py-2 text-sm transition-colors"
              >
                <span className="relative z-10 text-[var(--text-tertiary)] transition-colors group-hover:text-[var(--text-primary)]">
                  {t.nav[item.key as keyof typeof t.nav]}
                </span>
                <motion.div
                  className="absolute inset-0 rounded-lg bg-[var(--accent-glow)] opacity-0 transition-opacity group-hover:opacity-100"
                  layoutId={`nav-hover-${item.key}`}
                />
              </motion.a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border-color)] bg-[var(--bg-secondary)] transition-all hover:border-[var(--accent-primary)]/50"
            >
              <motion.div
                initial={false}
                animate={{ rotate: theme === 'dark' ? 0 : 180 }}
                transition={{ duration: 0.3 }}
              >
                {theme === 'dark' ? (
                  <Moon className="h-4 w-4 text-[var(--accent-primary)]" />
                ) : (
                  <Sun className="h-4 w-4 text-[var(--accent-primary)]" />
                )}
              </motion.div>
            </motion.button>

            {/* Language Toggle */}
            <div className="flex items-center gap-1 rounded-lg border border-[var(--border-color)] bg-[var(--bg-secondary)] p-1">
              {(['pt', 'en'] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`relative px-3 py-1.5 text-xs font-medium uppercase tracking-wider transition-all ${
                    language === lang
                      ? 'text-white'
                      : 'text-[var(--text-tertiary)] hover:text-[var(--text-secondary)]'
                  }`}
                >
                  {language === lang && (
                    <motion.div
                      layoutId="language-indicator"
                      className="absolute inset-0 rounded-md bg-[#00639A]"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{lang}</span>
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <motion.button
              onClick={onAccessPortal}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative hidden overflow-hidden rounded-lg lg:block"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#00639A] to-[#21B6F3]" />
              <div className="relative px-6 py-2.5 text-sm font-medium text-white">
                {t.nav.startStructuring}
              </div>
              <motion.div
                className="absolute inset-0 bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                initial={false}
              />
            </motion.button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden"
          >
            <Menu className="h-6 w-6 text-[var(--text-primary)]" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu
            onClose={() => setIsMobileMenuOpen(false)}
            language={language}
            setLanguage={setLanguage}
            theme={theme}
            toggleTheme={toggleTheme}
            onAccessPortal={onAccessPortal}
          />
        )}
      </AnimatePresence>
    </motion.header>
  );
}