import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../contexts/language-context';

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2 bg-[#1F4AFF]/10 backdrop-blur-xl border border-[#4F7BFF]/30 rounded-xl p-1">
      <Globe className="w-4 h-4 text-[#4F7BFF] ml-2" />
      <button
        onClick={() => setLanguage('pt')}
        className={`
          px-3 py-1.5 rounded-lg transition-all duration-300 font-medium
          ${language === 'pt' 
            ? 'bg-[#1F4AFF] text-white shadow-[0_0_20px_rgba(31,74,255,0.5)]' 
            : 'text-[#C6CEDF] hover:text-white'
          }
        `}
      >
        PT
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={`
          px-3 py-1.5 rounded-lg transition-all duration-300 font-medium
          ${language === 'en' 
            ? 'bg-[#1F4AFF] text-white shadow-[0_0_20px_rgba(31,74,255,0.5)]' 
            : 'text-[#C6CEDF] hover:text-white'
          }
        `}
      >
        EN
      </button>
    </div>
  );
}