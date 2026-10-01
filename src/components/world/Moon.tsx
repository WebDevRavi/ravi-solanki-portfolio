'use client';

import React from 'react';
import Image from 'next/image';

interface MoonProps {
  scrollY?: number;
}

export const Moon: React.FC<MoonProps> = ({ scrollY = 0 }) => {
  // Very slow, gentle parallax: 0.025x
  const translateY = scrollY * 0.025;

  return (
    <div
      className="absolute top-[60px] md:top-[80px] left-[6%] md:left-[10%] lg:left-[12%] pointer-events-none select-none z-[2] transition-transform duration-200 ease-out"
      style={{
        transform: `translate3d(0, ${translateY}px, 0)`,
      }}
    >
      {/* Subtle Lunar Atmospheric Glow (Section 5: subtle purple/white glow, no excessive brightness) */}
      <div
        className="absolute -inset-6 rounded-full blur-[35px] opacity-35 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(224, 231, 255, 0.45) 0%, rgba(168, 85, 247, 0.2) 50%, transparent 75%)',
        }}
      />

      {/* High-Resolution Pixel Art Moon (Desktop ~170px, Mobile ~110px) */}
      <div className="relative w-[110px] h-[110px] sm:w-[130px] sm:h-[130px] md:w-[150px] md:h-[150px] lg:w-[170px] lg:h-[170px]">
        <Image
          src="/assets/sky/pixel-moon.png"
          alt="Pixel Moon"
          width={170}
          height={170}
          priority
          unoptimized
          className="w-full h-full object-contain filter drop-shadow-[0_0_16px_rgba(199,210,254,0.3)] select-none pointer-events-none"
          style={{
            imageRendering: 'pixelated',
          }}
        />
      </div>
    </div>
  );
};
