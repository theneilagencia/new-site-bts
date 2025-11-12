import React from 'react';
import { ButtonPrimary } from '../button-primary';
import { useLanguage } from '../../contexts/language-context';

export function SectionHero() {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#185AB4" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/30 to-slate-50/50"></div>

      {/* Content */}
      <div className="relative max-w-[1440px] mx-auto px-6 md:px-20 py-32 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="mb-6 text-[#122539]">
            {t.hero.title}
          </h1>
          <p className="text-2xl mb-4 text-[#6B7280]">
            {t.hero.subtitle}
          </p>
          <p className="text-xl mb-12 text-[#6B7280]">
            {t.hero.description}
          </p>
          <ButtonPrimary className="text-lg">
            {t.hero.cta}
          </ButtonPrimary>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#185AB4]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-200/10 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}