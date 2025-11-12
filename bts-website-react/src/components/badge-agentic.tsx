import React from 'react';
import { CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/language-context';

export function BadgeAgentic() {
  const { t } = useLanguage();

  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F3F4F6] border border-[#E8E8E8] rounded-full">
      <CheckCircle className="w-4 h-4 text-[#185AB4]" />
      <span className="text-sm text-[#122539]">
        {t.badge.agentic}
      </span>
    </div>
  );
}