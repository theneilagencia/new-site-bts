import React from 'react';

interface StepItemProps {
  number: number;
  title: string;
  className?: string;
}

export function StepItem({ number, title, className = '' }: StepItemProps) {
  return (
    <div className={`flex items-start gap-6 ${className}`}>
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#185AB4] text-white flex items-center justify-center">
        <span>{number}</span>
      </div>
      <div className="flex-1 pt-2">
        <p className="text-[#122539]">{title}</p>
      </div>
    </div>
  );
}
