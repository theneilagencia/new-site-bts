'use client';

import { motion } from 'framer-motion';
import { X, Sun, Moon } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import type { Language } from '../../lib/i18n';

interface MobileMenuProps {
  onClose: () => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  theme: 'dark' | 'light';
  toggleTheme: () => void;
  onAccessPortal?: () => void;
}

export function MobileMenu({ onClose, language, setLanguage, theme, toggleTheme, onAccessPortal }: MobileMenuProps) {
  const { t } = useLanguage();

  const menuItems = [
    { key: 'solutions', href: '#solutions' },
    { key: 'about', href: '#about' },
    { key: 'partner', href: '#partner' },
    { key: 'contact', href: '#contact' },
  ];

  return (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm lg:hidden"
      />

      {/* Menu Panel */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="fixed right-0 top-0 z-[70] h-full w-[280px] border-l border-[var(--border-color)] bg-[var(--bg-primary)] lg:hidden"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[var(--border-color)] p-6">
          <span className="font-mono text-xs uppercase tracking-widest text-[var(--text-tertiary)]">
            Menu
          </span>
          <button
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border-color)] bg-[var(--bg-secondary)] transition-colors hover:border-[var(--accent-primary)]/50"
          >
            <X className="h-5 w-5 text-[var(--text-tertiary)]" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col p-6">
          {menuItems.map((item, index) => (
            <motion.a
              key={item.key}
              href={item.href}
              onClick={onClose}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 + index * 0.05 }}
              className="group relative overflow-hidden rounded-lg px-4 py-4 text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
            >
              <motion.div
                className="absolute inset-0 bg-[var(--accent-glow)] opacity-0 transition-opacity group-hover:opacity-100"
                layoutId={`mobile-nav-${item.key}`}
              />
              <span className="relative z-10">
                {t.nav[item.key as keyof typeof t.nav]}
              </span>
            </motion.a>
          ))}
        </nav>

        {/* Settings */}
        <div className="border-t border-[var(--border-color)] p-6">
          {/* Theme Toggle */}
          <div className="mb-4">
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-[var(--text-tertiary)]">
              Theme
            </p>
            <button
              onClick={toggleTheme}
              className="flex w-full items-center gap-3 rounded-lg border border-[var(--border-color)] bg-[var(--bg-secondary)] px-4 py-3 transition-all hover:border-[var(--accent-primary)]/50"
            >
              <motion.div
                initial={false}
                animate={{ rotate: theme === 'dark' ? 0 : 180 }}
                transition={{ duration: 0.3 }}
              >
                {theme === 'dark' ? (
                  <Moon className="h-5 w-5 text-[var(--accent-primary)]" />
                ) : (
                  <Sun className="h-5 w-5 text-[var(--accent-primary)]" />
                )}
              </motion.div>
              <span className="text-sm text-[var(--text-secondary)]">
                {theme === 'dark' ? 'Dark Mode' : 'Light Mode'}
              </span>
            </button>
          </div>

          {/* Language Toggle */}
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-[var(--text-tertiary)]">
              Language
            </p>
            <div className="flex gap-2">
              {(['pt', 'en'] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`relative flex-1 rounded-lg border px-4 py-3 text-sm font-medium uppercase tracking-wider transition-all ${
                    language === lang
                      ? 'border-[#00639A] bg-[#00639A] text-white'
                      : 'border-[var(--border-color)] bg-[var(--bg-secondary)] text-[var(--text-tertiary)] hover:border-[#00639A]/50'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-[var(--border-color)] p-6">
          <motion.button
            onClick={() => {
              onClose();
              onAccessPortal?.();
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="group relative block overflow-hidden rounded-lg w-full"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#00639A] to-[#21B6F3]" />
            <div className="relative px-6 py-3 text-center font-medium text-white">
              {t.nav.startStructuring}
            </div>
          </motion.button>
        </div>
      </motion.div>
    </>
  );
}