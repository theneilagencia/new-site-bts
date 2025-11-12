import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { useScrollPosition } from '@/hooks/useScrollPosition';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const scrollPosition = useScrollPosition();
  const isScrolled = scrollPosition > 50;

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
              className="relative z-10"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <motion.div
                className="text-2xl font-bold"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                <span className="bg-gradient-to-r from-bts-s02 to-bts-s05 bg-clip-text text-transparent">
                  BTS
                </span>
                <span className="ml-2 text-[var(--color-text-primary)]">Global</span>
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
              {/* Language Toggle */}
              <motion.button
                onClick={() => setLanguage(language === 'pt' ? 'en' : 'pt')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden lg:flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--color-text-tertiary)]/20 text-sm font-semibold text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-bg-secondary)]"
              >
                {t.nav.language}
              </motion.button>

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
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed right-0 top-0 z-50 h-screen w-64 bg-[var(--color-bg-primary)] shadow-2xl lg:hidden"
            >
              <div className="flex h-full flex-col p-6">
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="mb-8 ml-auto flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--color-text-tertiary)]/20"
                >
                  <X size={20} />
                </button>

                <nav className="flex-1">
                  <ul className="space-y-2">
                    {navItems.map((item) => (
                      <li key={item.key}>
                        <a
                          href={item.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block rounded-lg px-4 py-3 text-sm font-medium text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-bg-secondary)] hover:text-[var(--color-text-primary)]"
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>

                <div className="flex gap-2">
                  <button
                    onClick={() => setLanguage(language === 'pt' ? 'en' : 'pt')}
                    className="flex-1 rounded-lg border border-[var(--color-text-tertiary)]/20 px-4 py-2 text-sm font-semibold"
                  >
                    {t.nav.language}
                  </button>
                  <button
                    onClick={toggleTheme}
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--color-text-tertiary)]/20"
                  >
                    {theme === 'dark' ? '🌙' : '☀️'}
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
