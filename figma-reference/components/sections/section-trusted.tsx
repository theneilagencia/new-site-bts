import React from 'react';
import { Globe, Shield, Lock } from 'lucide-react';
import { ButtonPrimary } from '../button-primary';
import { useLanguage } from '../../contexts/language-context';

export function SectionTrusted() {
  const { t } = useLanguage();

  return (
    <section className="py-32 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-blue-50 border border-[#185AB4]/20 rounded-full mb-12">
            <Globe className="w-5 h-5 text-[#185AB4]" />
            <span className="text-[#185AB4]">{t.trusted.badge}</span>
          </div>

          <h2 className="mb-8 text-[#122539]">
            {t.trusted.title}
          </h2>
          
          <p className="text-xl text-[#6B7280] mb-6 leading-relaxed">
            {t.trusted.text1}
          </p>
          
          <p className="text-xl text-[#6B7280] mb-12 leading-relaxed">
            {t.trusted.text2}
          </p>

          <ButtonPrimary className="text-lg">
            {t.trusted.cta}
          </ButtonPrimary>

          {/* Trust Indicators */}
          <div className="grid md:grid-cols-3 gap-8 mt-20">
            <div className="text-center">
              <div className="text-4xl mb-4 text-[#185AB4]">100+</div>
              <p className="text-[#6B7280]">{t.trusted.stat1Label}</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4 text-[#185AB4]">24/7</div>
              <p className="text-[#6B7280]">{t.trusted.stat2Label}</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4 text-[#185AB4]">100%</div>
              <p className="text-[#6B7280]">{t.trusted.stat3Label}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}