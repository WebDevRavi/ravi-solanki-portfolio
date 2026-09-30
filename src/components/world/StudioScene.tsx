'use client';

import React from 'react';
import Image from 'next/image';

interface StudioSceneProps {
  onExploreStudio?: () => void;
}

export const StudioScene: React.FC<StudioSceneProps> = ({ onExploreStudio }) => {
  return (
    <div className="relative w-full max-w-4xl mx-auto px-4 py-12 flex flex-col items-center select-none text-center">
      {/* Warm Ambient Cabin Glow (Section 53: Emotional warmth contrast) */}
      <div
        className="absolute -inset-10 rounded-full blur-[110px] opacity-35 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, #f59e0b 0%, #d97706 40%, transparent 75%)',
        }}
      />

      {/* Lived-in Studio Workstation Pixel Art Emblem */}
      <div className="relative mb-6 flex items-center justify-center">
        <div
          className="relative w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 animate-node-float cursor-pointer select-none group"
          style={{ '--float-duration': '5s' } as React.CSSProperties}
          onClick={onExploreStudio}
          title="Inspect Ravi's Workstation Setup"
        >
          {/* Ambient Portal Glow */}
          <div
            className="absolute -inset-4 rounded-full blur-[30px] pointer-events-none opacity-60 group-hover:opacity-90 transition-opacity"
            style={{
              background: 'radial-gradient(circle, #f59e0b 0%, #a855f7 50%, #00d4ff 85%, transparent 100%)',
            }}
          />

          <Image
            src="/assets/nodes/node-studio.png"
            alt="Ravi's Studio Workstation"
            width={550}
            height={550}
            priority
            unoptimized
            className="w-full h-full object-contain relative z-10 filter drop-shadow-[0_10px_30px_rgba(0,0,0,0.85)] group-hover:scale-105 transition-transform duration-300"
            style={{ imageRendering: 'pixelated' }}
          />
        </div>
      </div>

      {/* Atmospheric Copy (Section 54: Keep the message, reduce surrounding UI) */}
      <div className="max-w-xl">
        <h2 className="font-pixel text-xl md:text-3xl text-white tracking-wide mb-3 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
          WHAT’S NEXT?
        </h2>

        <p className="font-pixel text-xs md:text-sm text-[#f59e0b] mb-4 tracking-wider">
          “I DON’T KNOW YET. BUT I’M BUILDING MY WAY THERE.”
        </p>

        <p className="text-zinc-300 text-sm leading-relaxed mb-6 font-sans">
          This is where late-night Blender renders bake, where DSA problems get debugged line by line, where game prototypes are compiled, and where creative experiments begin without a rigid roadmap.
        </p>

        <button
          onClick={onExploreStudio}
          className="pixel-btn text-[#fbbf24] border-[#fbbf24] hover:bg-[#fbbf24] hover:text-black font-pixel text-[10px]"
        >
          [INSPECT WORKSTATION GEAR]
        </button>
      </div>
    </div>
  );
};
