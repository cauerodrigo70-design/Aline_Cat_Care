import { PawPrint } from 'lucide-react';

interface CatPawsProps {
  className?: string;
}

const PAWS = [
  { left: '7%', top: '18%', size: 'h-10 w-10', rot: '-12deg', delay: '0s', dur: '9s' },
  { left: '11%', top: '40%', size: 'h-7 w-7', rot: '12deg', delay: '2.5s', dur: '11s' },
  { left: '16%', top: '62%', size: 'h-9 w-9', rot: '45deg', delay: '5s', dur: '10s' },
  { left: '82%', top: '20%', size: 'h-9 w-9', rot: '25deg', delay: '1.2s', dur: '12s' },
  { left: '88%', top: '48%', size: 'h-7 w-7', rot: '-20deg', delay: '3.8s', dur: '9.5s' },
  { left: '78%', top: '70%', size: 'h-10 w-10', rot: '-45deg', delay: '6s', dur: '10.5s' },
];

export function CatPaws({ className = '' }: CatPawsProps) {
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {PAWS.map((p, i) => (
        <PawPrint
          key={i}
          className={`absolute ${p.size} text-[#b85f57]/12`}
          style={{
            left: p.left,
            top: p.top,
            // @ts-expect-error custom prop
            '--r': p.rot,
            animation: `paw-drift ${p.dur} ease-in-out ${p.delay} infinite`,
          }}
        />
      ))}
    </div>
  );
}
