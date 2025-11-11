import React from 'react';
import { Building2, Shield, Link as LinkIcon, Check } from 'lucide-react';
import { CardSolution } from '../card-solution';
import { useLanguage } from '../../contexts/language-context';

export function SectionSolutions() {
  const { t } = useLanguage();

  return (
    <section id="solutions" className="py-32 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="mb-6 text-[#122539]">{t.solutions.title}</h2>
          <p className="text-xl text-[#6B7280] max-w-3xl mx-auto">
            {t.solutions.subtitle}
          </p>
        </div>

        {/* Digital Offshore */}
        <div className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <Building2 className="w-10 h-10 text-[#185AB4]" />
            <h3 className="text-[#122539]">{t.solutions.offshore.title}</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <CardSolution
              title={t.solutions.offshore.card1Title}
              description={t.solutions.offshore.card1Text}
            />
            <CardSolution
              title={t.solutions.offshore.card2Title}
              description={t.solutions.offshore.card2Text}
            />
            <CardSolution
              title={t.solutions.offshore.card3Title}
              description={t.solutions.offshore.card3Text}
            />
          </div>

          {/* Features Table */}
          <div className="bg-gradient-to-br from-blue-50/30 to-white border border-[#E8E8E8] rounded-xl p-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#185AB4] mt-1 flex-shrink-0" />
                <p className="text-[#122539]">{t.solutions.offshore.feature1}</p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#185AB4] mt-1 flex-shrink-0" />
                <p className="text-[#122539]">{t.solutions.offshore.feature2}</p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#185AB4] mt-1 flex-shrink-0" />
                <p className="text-[#122539]">{t.solutions.offshore.feature3}</p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#185AB4] mt-1 flex-shrink-0" />
                <p className="text-[#122539]">{t.solutions.offshore.feature4}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Digital Foundation */}
        <div className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <Shield className="w-10 h-10 text-[#185AB4]" />
            <h3 className="text-[#122539]">{t.solutions.foundation.title}</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <CardSolution
              title={t.solutions.foundation.card1Title}
              description={t.solutions.foundation.card1Text}
            />
            <CardSolution
              title={t.solutions.foundation.card2Title}
              description={t.solutions.foundation.card2Text}
            />
            <CardSolution
              title={t.solutions.foundation.card3Title}
              description={t.solutions.foundation.card3Text}
            />
          </div>

          {/* Benefits Table */}
          <div className="bg-gradient-to-br from-blue-50/30 to-white border border-[#E8E8E8] rounded-xl p-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#185AB4] mt-1 flex-shrink-0" />
                <p className="text-[#122539]">{t.solutions.foundation.feature1}</p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#185AB4] mt-1 flex-shrink-0" />
                <p className="text-[#122539]">{t.solutions.foundation.feature2}</p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#185AB4] mt-1 flex-shrink-0" />
                <p className="text-[#122539]">{t.solutions.foundation.feature3}</p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#185AB4] mt-1 flex-shrink-0" />
                <p className="text-[#122539]">{t.solutions.foundation.feature4}</p>
              </div>
            </div>
          </div>
        </div>

        {/* BTS BlockTrust */}
        <div>
          <div className="flex items-center gap-4 mb-12">
            <LinkIcon className="w-10 h-10 text-[#185AB4]" />
            <h3 className="text-[#122539]">{t.solutions.blocktrust.title}</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <CardSolution
              title={t.solutions.blocktrust.card1Title}
              description={t.solutions.blocktrust.card1Text}
            />
            <CardSolution
              title={t.solutions.blocktrust.card2Title}
              description={t.solutions.blocktrust.card2Text}
            />
            <CardSolution
              title={t.solutions.blocktrust.card3Title}
              description={t.solutions.blocktrust.card3Text}
            />
          </div>

          {/* Features Grid */}
          <div className="bg-gradient-to-br from-blue-50/30 to-white border border-[#E8E8E8] rounded-xl p-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#185AB4] mt-1 flex-shrink-0" />
                <p className="text-[#122539]">{t.solutions.blocktrust.feature1}</p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#185AB4] mt-1 flex-shrink-0" />
                <p className="text-[#122539]">{t.solutions.blocktrust.feature2}</p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#185AB4] mt-1 flex-shrink-0" />
                <p className="text-[#122539]">{t.solutions.blocktrust.feature3}</p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#185AB4] mt-1 flex-shrink-0" />
                <p className="text-[#122539]">{t.solutions.blocktrust.feature4}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
