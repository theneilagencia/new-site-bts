import React from 'react';
import { Target, Compass, Heart } from 'lucide-react';
import { useLanguage } from '../../contexts/language-context';

export function SectionAbout() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-32 bg-gradient-to-b from-white to-slate-50/50">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <h2 className="mb-8 text-[#122539]">{t.about.title}</h2>
            <p className="text-xl text-[#6B7280] leading-relaxed">
              {t.about.intro}
            </p>
          </div>

          {/* Vision, Mission, Values */}
          <div className="space-y-16">
            {/* Vision */}
            <div className="bg-white border border-[#E8E8E8] rounded-xl p-10">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-[#185AB4]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-[#185AB4]" />
                </div>
                <div>
                  <h3 className="mb-4 text-[#122539]">{t.about.visionTitle}</h3>
                  <p className="text-[#6B7280] text-lg leading-relaxed">
                    {t.about.visionText}
                  </p>
                </div>
              </div>
            </div>

            {/* Mission */}
            <div className="bg-white border border-[#E8E8E8] rounded-xl p-10">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-[#185AB4]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Compass className="w-6 h-6 text-[#185AB4]" />
                </div>
                <div>
                  <h3 className="mb-4 text-[#122539]">{t.about.missionTitle}</h3>
                  <p className="text-[#6B7280] text-lg leading-relaxed">
                    {t.about.missionText}
                  </p>
                </div>
              </div>
            </div>

            {/* Values */}
            <div className="bg-white border border-[#E8E8E8] rounded-xl p-10">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-[#185AB4]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-[#185AB4]" />
                </div>
                <div className="flex-1">
                  <h3 className="mb-6 text-[#122539]">{t.about.valuesTitle}</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="mb-2 text-[#122539]">{t.about.value1Title}</h4>
                      <p className="text-[#6B7280]">{t.about.value1Text}</p>
                    </div>
                    <div>
                      <h4 className="mb-2 text-[#122539]">{t.about.value2Title}</h4>
                      <p className="text-[#6B7280]">{t.about.value2Text}</p>
                    </div>
                    <div>
                      <h4 className="mb-2 text-[#122539]">{t.about.value3Title}</h4>
                      <p className="text-[#6B7280]">{t.about.value3Text}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}