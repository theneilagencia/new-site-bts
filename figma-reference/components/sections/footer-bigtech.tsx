import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../../contexts/language-context';
import btsBrandLight from 'figma:asset/572a92fbbf22c89867bf1fabc7776fbcc1a9a804.png';

export function FooterBigTech() {
  const { t } = useLanguage();

  return (
    <footer id="contact" className="bg-[#0A0E16] text-white py-24 relative overflow-hidden">
      {/* Horizontal light beam loop */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4F7BFF] to-transparent"
        animate={{ x: ['-100%', '100%'] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
      />

      <div className="max-w-[1440px] mx-auto px-6 md:px-20 relative z-10">
        <div className="grid md:grid-cols-12 gap-12 mb-16">
          <motion.div className="md:col-span-5" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <motion.img src={btsBrandLight} alt="BTS Global Corp" className="h-10 md:h-12 mb-6" whileHover={{ scale: 1.05 }} />
            <p className="text-[#C6CEDF]/70 mb-8 max-w-md leading-relaxed">{t.footer.description}</p>
            <p className="text-[#4F7BFF]/60 text-sm mb-6 italic">{t.about.title}</p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1F4AFF]/10 border border-[#4F7BFF]/20 rounded-full">
              <div className="w-2 h-2 bg-[#4F7BFF] rounded-full shadow-[0_0_10px_#4F7BFF]" />
              <span className="text-sm text-[#C6CEDF]">{t.badge.agentic}</span>
            </div>
          </motion.div>

          <motion.div className="md:col-span-3" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <h4 className="mb-6 text-white">{t.footer.solutionsTitle}</h4>
            <ul className="space-y-3">
              {[
                { label: t.footer.digitalOffshore, href: '#solutions' },
                { label: t.footer.digitalFoundation, href: '#solutions' },
                { label: t.footer.btsBlocktrust, href: '#solutions' },
              ].map((link, i) => (
                <li key={i}>
                  <motion.a href={link.href} className="text-[#C6CEDF]/60 hover:text-white transition-colors inline-block group" whileHover={{ x: 4 }}>
                    {link.label}
                    <motion.span className="block h-px bg-[#4F7BFF] mt-1" initial={{ scaleX: 0 }} whileHover={{ scaleX: 1 }} style={{ transformOrigin: 'left' }} />
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div className="md:col-span-3" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <h4 className="mb-6 text-white">{t.footer.companyTitle}</h4>
            <ul className="space-y-3">
              {[
                { label: t.footer.about, href: '#about' },
                { label: t.footer.partnerProgram, href: '#partner' },
                { label: t.footer.contact, href: '#contact' },
              ].map((link, i) => (
                <li key={i}>
                  <motion.a href={link.href} className="text-[#C6CEDF]/60 hover:text-white transition-colors inline-block group" whileHover={{ x: 4 }}>
                    {link.label}
                    <motion.span className="block h-px bg-[#4F7BFF] mt-1" initial={{ scaleX: 0 }} whileHover={{ scaleX: 1 }} style={{ transformOrigin: 'left' }} />
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Trust seals */}
        <motion.div className="py-8 border-t border-[#4F7BFF]/10 mb-8" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <div className="flex flex-wrap justify-center gap-6">
            {['SOC 2', 'ISO 27001', 'GDPR', 'ACP Integrated'].map((badge, i) => (
              <motion.div
                key={i}
                className="px-6 py-3 bg-[#1F4AFF]/5 border border-[#4F7BFF]/20 rounded-xl"
                whileHover={{ y: -2, borderColor: 'rgba(79, 123, 255, 0.4)' }}
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 }}
              >
                <span className="text-[#C6CEDF]/70 text-sm">{badge}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom */}
        <motion.div className="pt-8 border-t border-[#4F7BFF]/10" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#C6CEDF]/40 text-sm">{t.footer.copyright}</p>
            <div className="flex gap-6">
              {[
                { label: t.footer.privacy, href: '#privacy' },
                { label: t.footer.terms, href: '#terms' },
                { label: t.footer.contact, href: '#contact' },
              ].map((link, i) => (
                <motion.a key={i} href={link.href} className="text-[#C6CEDF]/40 hover:text-white text-sm relative" whileHover={{ y: -2 }}>
                  {link.label}
                  <motion.span className="absolute -bottom-1 left-0 right-0 h-px bg-[#4F7BFF]" initial={{ scaleX: 0 }} whileHover={{ scaleX: 1 }} />
                </motion.a>
              ))}
            </div>
          </div>
          <motion.p className="text-center text-[#4F7BFF]/30 text-xs mt-8 italic">Privacy by Design</motion.p>
        </motion.div>
      </div>
    </footer>
  );
}