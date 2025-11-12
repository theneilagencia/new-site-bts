import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { staggerContainer, staggerItem } from '@/lib/animations';

export function Footer() {
  const { t } = useLanguage();

  const productLinks = [
    { label: t.footer.product1, href: '#' },
    { label: t.footer.product2, href: '#' },
    { label: t.footer.product3, href: '#' },
    { label: t.footer.product4, href: '#' },
  ];

  const companyLinks = [
    { label: t.footer.aboutUs, href: '#about' },
    { label: t.footer.careers, href: '#' },
    { label: t.footer.press, href: '#' },
    { label: t.footer.blog, href: '#' },
  ];

  const supportLinks = [
    { label: t.footer.contact, href: '#contact' },
    { label: t.footer.faq, href: '#' },
    { label: t.footer.documentation, href: '#' },
  ];

  const legalLinks = [
    { label: t.footer.privacy, href: '#' },
    { label: t.footer.terms, href: '#' },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#0A2540] border-t border-white/10 py-16">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-[0.02]">
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

      <div className="container relative z-10 mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <div className="grid gap-12 lg:grid-cols-5">
            
            {/* Company Info */}
            <motion.div variants={staggerItem} className="lg:col-span-2">
              <div className="mb-4 text-2xl font-bold">
                <span className="bg-gradient-to-r from-bts-s02 to-bts-s05 bg-clip-text text-transparent">
                  BTS
                </span>
                <span className="ml-2 text-[var(--color-text-primary)]">Global</span>
              </div>
              <p className="mb-6 text-[var(--color-text-tertiary)]">
                {t.footer.description}
              </p>
            </motion.div>

            {/* Products */}
            <motion.div variants={staggerItem}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[var(--color-text-primary)]">
                {t.footer.productsTitle}
              </h3>
              <ul className="space-y-3">
                {productLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-[var(--color-text-tertiary)] transition-colors hover:text-[var(--color-accent-primary)]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Company */}
            <motion.div variants={staggerItem}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[var(--color-text-primary)]">
                {t.footer.companyTitle}
              </h3>
              <ul className="space-y-3">
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-[var(--color-text-tertiary)] transition-colors hover:text-[var(--color-accent-primary)]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Support & Legal */}
            <motion.div variants={staggerItem}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[var(--color-text-primary)]">
                {t.footer.supportTitle}
              </h3>
              <ul className="mb-6 space-y-3">
                {supportLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-[var(--color-text-tertiary)] transition-colors hover:text-[var(--color-accent-primary)]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>

              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[var(--color-text-primary)]">
                {t.footer.legalTitle}
              </h3>
              <ul className="space-y-3">
                {legalLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-[var(--color-text-tertiary)] transition-colors hover:text-[var(--color-accent-primary)]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Compliance Badges */}
          <motion.div
            className="mt-12 pt-8 border-t border-white/10 flex flex-wrap justify-center gap-6"
            variants={staggerItem}
          >
            <div className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zm3.707 6.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/></svg>
              <span className="text-sm font-semibold text-white">SOC 2</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zm3.707 6.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/></svg>
              <span className="text-sm font-semibold text-white">ISO 27001</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zm3.707 6.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/></svg>
              <span className="text-sm font-semibold text-white">GDPR</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zm3.707 6.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/></svg>
              <span className="text-sm font-semibold text-white">ACP</span>
            </div>
          </motion.div>

          {/* Bottom Bar */}
          <motion.div
            className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
            variants={staggerItem}
          >
            <p className="text-sm text-white/70">
              {t.footer.copyright}
            </p>
            <p className="text-xs text-white/50 italic">Privacy by Design</p>
            <div className="flex gap-6">
              {legalLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-white/70 hover:text-white transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
