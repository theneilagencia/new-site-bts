

interface ButtonSecondaryProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export function ButtonSecondary({ children, onClick, className = '' }: ButtonSecondaryProps) {
  return (
    <button
      onClick={onClick}
      className={`
        px-8 py-4 bg-white text-[#185AB4] border border-[#E8E8E8] rounded-lg
        transition-all duration-300 ease-out
        hover:border-[#185AB4] hover:shadow-lg
        active:scale-[0.98]
        ${className}
      `}
    >
      {children}
    </button>
  );
}
