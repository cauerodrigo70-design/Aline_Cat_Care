import { PawPrint } from 'lucide-react';

interface CatPawsProps {
  className?: string;
}

export function CatPaws({ className = '' }: CatPawsProps) {
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <PawPrint className="absolute left-[7%] top-[18%] h-12 w-12 -rotate-12 text-amber-800/25" />
      <PawPrint className="absolute left-[11%] top-[27%] h-8 w-8 rotate-12 text-amber-800/25" />
      <PawPrint className="absolute left-[16%] top-[34%] h-11 w-11 rotate-45 text-amber-800/25" />
      <PawPrint className="absolute right-[12%] top-[16%] h-11 w-11 rotate-[25deg] text-amber-800/25" />
      <PawPrint className="absolute right-[8%] top-[27%] h-8 w-8 rotate-[-20deg] text-amber-800/25" />
      <PawPrint className="absolute right-[14%] top-[35%] h-12 w-12 rotate-[-45deg] text-amber-800/25" />
      <PawPrint className="absolute bottom-[18%] left-[23%] h-10 w-10 rotate-[-20deg] text-amber-800/25" />
      <PawPrint className="absolute bottom-[12%] right-[27%] h-10 w-10 rotate-[30deg] text-amber-800/25" />
    </div>
  );
}
