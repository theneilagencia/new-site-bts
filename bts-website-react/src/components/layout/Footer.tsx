
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { CheckCircle2 } from 'lucide-react';
import { BtsLogo } from '@/components/ui/BtsLogo';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="relative overflow-hidden border-t border-[var(--border-color)] bg-[var(--bg-primary)]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `linear-gradient(var(--border-color) 1px, transparent 1px), linear-gradient(90deg, var(--border-color) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-4 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <BtsLogo className="h-10 w-auto" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-8 max-w-md text-[1.1em] leading-relaxed text-[var(--text-tertiary)]"
            >
              {t.footer.description}
            </motion.p>

            {/* Agentic Commerce Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 rounded-full border border-[var(--border-color)] bg-[var(--bg-secondary)]/50 px-4 py-2 backdrop-blur-sm"
            >
              <CheckCircle2 className="h-4 w-4 text-[#21B6F3]" />
              <span className="text-xs text-[var(--text-tertiary)]">{t.badge.agentic}</span>
            </motion.div>
          </div>

          {/* Solutions Column */}
          <div>
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-4 text-sm font-semibold uppercase tracking-wider text-[var(--text-secondary)]"
            >
              {t.footer.solutionsTitle}
            </motion.h4>
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-3"
            >
              {[
                { label: t.footer.digitalOffshore, href: '#' },
                { label: t.footer.digitalFoundation, href: '#' },
                { label: t.footer.btsBlocktrust, href: '#' },
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="group inline-flex items-center text-sm text-[var(--text-tertiary)] transition-colors hover:text-[var(--accent-primary)]"
                  >
                    <span className="relative">
                      {item.label}
                      <span className="absolute bottom-0 left-0 h-px w-0 bg-[var(--accent-primary)] transition-all group-hover:w-full" />
                    </span>
                  </a>
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Company Column */}
          <div>
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-4 text-sm font-semibold uppercase tracking-wider text-[var(--text-secondary)]"
            >
              {t.footer.companyTitle}
            </motion.h4>
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-3"
            >
              {[
                { label: t.footer.about, href: '#about' },
                { label: t.footer.partnerProgram, href: '#partner' },
                { label: t.footer.contact, href: '#contact' },
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="group inline-flex items-center text-sm text-[var(--text-tertiary)] transition-colors hover:text-[var(--accent-primary)]"
                  >
                    <span className="relative">
                      {item.label}
                      <span className="absolute bottom-0 left-0 h-px w-0 bg-[var(--accent-primary)] transition-all group-hover:w-full" />
                    </span>
                  </a>
                </li>
              ))}
            </motion.ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-[var(--border-color)] pt-8 sm:flex-row"
        >
          <p className="text-sm text-[var(--text-tertiary)]">{t.footer.copyright}</p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-sm text-[var(--text-tertiary)] transition-colors hover:text-[var(--accent-primary)]"
            >
              {t.footer.privacy}
            </a>
            <a
              href="#"
              className="text-sm text-[var(--text-tertiary)] transition-colors hover:text-[var(--accent-primary)]"
            >
              {t.footer.terms}
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}