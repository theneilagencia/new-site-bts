export function BtsLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-[#185AB4] to-[#006DA5] bg-clip-text text-transparent">
        BTS
      </span>
      <span className="text-2xl font-normal text-white">Global</span>
    </div>
  );
}
