import React from 'react';

interface CardSolutionProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
}

export function CardSolution({ title, description, icon, className = '' }: CardSolutionProps) {
  return (
    <div
      className={`
        bg-white border border-[#E8E8E8] rounded-xl p-8
        transition-all duration-300 ease-out
        hover:shadow-[0_8px_20px_rgba(0,0,0,0.05)] hover:-translate-y-1
        ${className}
      `}
    >
      {icon && <div className="mb-6">{icon}</div>}
      <h3 className="mb-4">{title}</h3>
      <p className="text-[#6B7280]">{description}</p>
    </div>
  );
}
