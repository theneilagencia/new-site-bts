import React from 'react';
import { StepItem } from '../step-item';
import { ButtonPrimary } from '../button-primary';
import { useLanguage } from '../../contexts/language-context';

export function SectionHowItWorks() {
  const { t } = useLanguage();

  return (
    <section className="py-32 bg-gradient-to-b from-slate-50/50 to-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="mb-6 text-[#122539]">{t.howItWorks.title}</h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-12 mb-16">
          <StepItem 
            number={1} 
            title={t.howItWorks.step1}
          />
          <StepItem 
            number={2} 
            title={t.howItWorks.step2}
          />
          <StepItem 
            number={3} 
            title={t.howItWorks.step3}
          />
          <StepItem 
            number={4} 
            title={t.howItWorks.step4}
          />
          <StepItem 
            number={5} 
            title={t.howItWorks.step5}
          />
        </div>

        <div className="text-center">
          <ButtonPrimary className="text-lg">
            {t.howItWorks.cta}
          </ButtonPrimary>
        </div>
      </div>
    </section>
  );
}