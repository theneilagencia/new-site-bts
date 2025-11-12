import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations';

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
    <footer className="relative overflow-hidden bg-[var(--color-bg-primary)] border-t border-[var(--color-text-tertiary)]/10 py-16">
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

          {/* Bottom Bar */}
          <motion.div
            variants={fadeInUp}
            className="mt-12 border-t border-[var(--color-text-tertiary)]/10 pt-8 text-center text-sm text-[var(--color-text-tertiary)]"
          >
            {t.footer.copyright}
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
