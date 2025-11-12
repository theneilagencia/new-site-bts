import React from 'react';
import { motion } from 'motion/react';
import { BadgeAgentic } from '../badge-agentic';
import { useLanguage } from '../../contexts/language-context';
import btsBrandLight from 'figma:asset/572a92fbbf22c89867bf1fabc7776fbcc1a9a804.png';

export function FooterPremium() {
  const { t } = useLanguage();

  const footerLinks = {
    solutions: [
      { label: t.footer.digitalOffshore, href: '#solutions' },
      { label: t.footer.digitalFoundation, href: '#solutions' },
      { label: t.footer.btsBlocktrust, href: '#solutions' },
    ],
    company: [
      { label: t.footer.about, href: '#about' },
      { label: t.footer.partnerProgram, href: '#partner' },
      { label: t.footer.contact, href: '#contact' },
    ],
  };

  const legalLinks = [
    { label: t.footer.privacy, href: '#privacy' },
    { label: t.footer.terms, href: '#terms' },
    { label: t.footer.contact, href: '#contact' },
  ];

  const complianceBadges = [
    'SOC 2',
    'ISO 27001',
    'GDPR',
    'ACP Integrated',
  ];

  return (
    <footer id="contact" className="bg-[#0A2540] text-white py-20 relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#122539]/50 to-transparent" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-20 relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-12 gap-12 mb-16">
          {/* Brand Section */}
          <motion.div
            className="md:col-span-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.img
              src={btsBrandLight}
              alt="BTS Global Corp"
              className="h-8 mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <p className="text-white/60 mb-8 max-w-md leading-relaxed">
              {t.footer.description}
            </p>
            <p className="text-white/40 text-sm mb-6 italic">
              {t.about.title}
            </p>
            <BadgeAgentic />
          </motion.div>

          {/* Solutions Links */}
          <motion.div
            className="md:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <h4 className="mb-6 text-white">{t.footer.solutionsTitle}</h4>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors inline-block group"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    {link.label}
                    <motion.span
                      className="block h-px bg-white mt-1"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      style={{ transformOrigin: 'left' }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div
            className="md:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h4 className="mb-6 text-white">{t.footer.companyTitle}</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors inline-block group"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    {link.label}
                    <motion.span
                      className="block h-px bg-white mt-1"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      style={{ transformOrigin: 'left' }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Compliance Badges */}
        <motion.div
          className="py-8 border-t border-white/10 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="flex flex-wrap justify-center gap-6">
            {complianceBadges.map((badge, index) => (
              <motion.div
                key={index}
                className="px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg"
                whileHover={{ y: -2, borderColor: 'rgba(24, 90, 180, 0.3)' }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-white/70 text-sm">{badge}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Footer */}
        <motion.div
          className="pt-8 border-t border-white/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-sm">
              {t.footer.copyright}
            </p>
            <div className="flex gap-6">
              {legalLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  className="text-white/40 hover:text-white text-sm transition-colors relative"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  {link.label}
                  <motion.span
                    className="absolute -bottom-1 left-0 right-0 h-px bg-white"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
            </div>
          </div>

          <motion.p
            className="text-center text-white/30 text-xs mt-8 italic"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            Privacy by Design
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
}