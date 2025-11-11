import React from 'react';
import { BadgeAgentic } from '../badge-agentic';
import { useLanguage } from '../../contexts/language-context';
import btsBrandLight from 'figma:asset/572a92fbbf22c89867bf1fabc7776fbcc1a9a804.png';

export function FooterMain() {
  const { t } = useLanguage();

  return (
    <footer id="contact" className="bg-[#122539] text-white py-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <img src={btsBrandLight} alt="BTS Global Corp" className="h-8 mb-6" />
            <p className="text-white/70 mb-6 max-w-md">
              {t.footer.description}
            </p>
            <BadgeAgentic />
          </div>

          {/* Links Column 1 */}
          <div>
            <h4 className="mb-6 text-white">{t.footer.solutionsTitle}</h4>
            <ul className="space-y-3">
              <li>
                <a href="#solutions" className="text-white/70 hover:text-white transition-colors">
                  {t.footer.digitalOffshore}
                </a>
              </li>
              <li>
                <a href="#solutions" className="text-white/70 hover:text-white transition-colors">
                  {t.footer.digitalFoundation}
                </a>
              </li>
              <li>
                <a href="#solutions" className="text-white/70 hover:text-white transition-colors">
                  {t.footer.btsBlocktrust}
                </a>
              </li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h4 className="mb-6 text-white">{t.footer.companyTitle}</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-white/70 hover:text-white transition-colors">
                  {t.footer.about}
                </a>
              </li>
              <li>
                <a href="#partner" className="text-white/70 hover:text-white transition-colors">
                  {t.footer.partnerProgram}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-white transition-colors">
                  {t.footer.contact}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm">
              {t.footer.copyright}
            </p>
            <div className="flex gap-6">
              <a href="#privacy" className="text-white/50 hover:text-white text-sm transition-colors">
                {t.footer.privacy}
              </a>
              <a href="#terms" className="text-white/50 hover:text-white text-sm transition-colors">
                {t.footer.terms}
              </a>
              <a href="#contact" className="text-white/50 hover:text-white text-sm transition-colors">
                {t.footer.contact}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}