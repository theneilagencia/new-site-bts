import React from 'react';
import { Users, TrendingUp, Globe, Handshake, Award, Zap } from 'lucide-react';
import { ButtonPrimary } from '../button-primary';
import { useLanguage } from '../../contexts/language-context';

export function SectionPartner() {
  const { t } = useLanguage();

  return (
    <section id="partner" className="py-32 bg-gradient-to-b from-slate-50/50 to-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <h2 className="mb-6 text-[#122539]">{t.partner.title}</h2>
            <p className="text-2xl text-[#6B7280]">
              {t.partner.subtitle}
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white border border-[#E8E8E8] rounded-xl p-8">
              <Users className="w-10 h-10 text-[#185AB4] mb-6" />
              <h3 className="mb-4 text-[#122539]">{t.partner.benefit1Title}</h3>
              <p className="text-[#6B7280]">
                {t.partner.benefit1Text}
              </p>
            </div>

            <div className="bg-white border border-[#E8E8E8] rounded-xl p-8">
              <TrendingUp className="w-10 h-10 text-[#185AB4] mb-6" />
              <h3 className="mb-4 text-[#122539]">{t.partner.benefit2Title}</h3>
              <p className="text-[#6B7280]">
                {t.partner.benefit2Text}
              </p>
            </div>

            <div className="bg-white border border-[#E8E8E8] rounded-xl p-8">
              <Globe className="w-10 h-10 text-[#185AB4] mb-6" />
              <h3 className="mb-4 text-[#122539]">{t.partner.benefit3Title}</h3>
              <p className="text-[#6B7280]">
                {t.partner.benefit3Text}
              </p>
            </div>

            <div className="bg-white border border-[#E8E8E8] rounded-xl p-8">
              <Handshake className="w-10 h-10 text-[#185AB4] mb-6" />
              <h3 className="mb-4 text-[#122539]">{t.partner.benefit4Title}</h3>
              <p className="text-[#6B7280]">
                {t.partner.benefit4Text}
              </p>
            </div>

            <div className="bg-white border border-[#E8E8E8] rounded-xl p-8">
              <Award className="w-10 h-10 text-[#185AB4] mb-6" />
              <h3 className="mb-4 text-[#122539]">{t.partner.benefit5Title}</h3>
              <p className="text-[#6B7280]">
                {t.partner.benefit5Text}
              </p>
            </div>

            <div className="bg-white border border-[#E8E8E8] rounded-xl p-8">
              <Zap className="w-10 h-10 text-[#185AB4] mb-6" />
              <h3 className="mb-4 text-[#122539]">{t.partner.benefit6Title}</h3>
              <p className="text-[#6B7280]">
                {t.partner.benefit6Text}
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center bg-gradient-to-br from-blue-50/50 to-white border border-[#185AB4]/20 rounded-xl p-12">
            <h3 className="mb-4 text-[#122539]">{t.partner.ctaTitle}</h3>
            <p className="text-lg text-[#6B7280] mb-8 max-w-2xl mx-auto">
              {t.partner.ctaText}
            </p>
            <ButtonPrimary className="text-lg">
              {t.partner.cta}
            </ButtonPrimary>
          </div>
        </div>
      </div>
    </section>
  );
}
