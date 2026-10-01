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
      {/* Subtle Lunar Atmospheric Glow */}
      <div
        className="absolute -inset-8 rounded-full blur-[30px] opacity-40 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(165, 180, 252, 0.4) 0%, rgba(139, 92, 246, 0.2) 45%, transparent 70%)',
        }}
      />

      {/* Authentic Pixel Art Moon */}
      <div className="relative w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[140px] md:h-[140px] lg:w-[155px] lg:h-[155px]">
        <Image
          src="/assets/sky/moon-large.png"
          alt="Pixel Moon"
          width={155}
          height={155}
          priority
          unoptimized
          className="w-full h-full object-contain filter drop-shadow-[0_0_20px_rgba(165,180,252,0.35)] select-none pointer-events-none"
          style={{
            imageRendering: 'pixelated',
          }}
        />
      </div>
    </div>
  );
};
