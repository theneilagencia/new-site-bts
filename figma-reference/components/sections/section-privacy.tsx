import React from 'react';
import { Shield, Eye, Lock } from 'lucide-react';
import { useLanguage } from '../../contexts/language-context';

export function SectionPrivacy() {
  const { t } = useLanguage();

  return (
    <section className="py-32 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20">
        {/* Why BTS Exists */}
        <div className="max-w-3xl mx-auto mb-32 text-center">
          <h2 className="mb-8 text-[#122539]">{t.privacy.whyTitle}</h2>
          <p className="text-xl text-[#6B7280] leading-relaxed">
            {t.privacy.whyText1}
          </p>
          <p className="text-xl text-[#6B7280] leading-relaxed mt-6">
            {t.privacy.whyText2}
          </p>
        </div>

        {/* Privacy is Freedom */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-6 text-[#122539]">{t.privacy.privacyTitle}</h2>
            <p className="text-xl text-[#6B7280] max-w-3xl mx-auto">
              {t.privacy.privacyIntro} <span className="text-[#185AB4]">{t.privacy.onewayMirror}</span>{t.privacy.privacyIntro2}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50/50 to-white border border-[#E8E8E8] rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-[#185AB4] rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-4 text-[#122539]">{t.privacy.feature1}</h3>
            </div>

            <div className="bg-gradient-to-br from-blue-50/50 to-white border border-[#E8E8E8] rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-[#185AB4] rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-4 text-[#122539]">{t.privacy.feature2}</h3>
            </div>

            <div className="bg-gradient-to-br from-blue-50/50 to-white border border-[#E8E8E8] rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-[#185AB4] rounded-full flex items-center justify-center mx-auto mb-6">
                <Lock className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-4 text-[#122539]">{t.privacy.feature3}</h3>
            </div>
          </div>

          <p className="text-center text-xl text-[#122539] mt-12 italic">
            {t.privacy.tagline}
          </p>
        </div>
      </div>
    </section>
  );
}