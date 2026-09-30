'use client';

import React from 'react';
import Image from 'next/image';

interface IntroSceneProps {
  onEnter: () => void;
  onOpenAbout: () => void;
}

export const IntroScene: React.FC<IntroSceneProps> = ({ onEnter, onOpenAbout }) => {
  return (
    <div id="intro" className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 pt-20 pb-16 select-none z-10">
      {/* Central Hero Column with negative space */}
      <div className="relative flex flex-col items-center max-w-3xl mx-auto">
        {/* Soft, non-overpowering atmospheric glow */}
        <div
          className="absolute -inset-10 rounded-full blur-[55px] opacity-30 pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(56, 189, 248, 0.4) 0%, rgba(139, 92, 246, 0.2) 45%, transparent 70%)',
          }}
        />

        {/* 1. BLUE 3D Logo (Occupies 35-50% central hero width, letting the hero breathe) */}
        <div
          className="relative w-[230px] sm:w-[310px] md:w-[380px] lg:w-[430px] aspect-[2060/763] animate-node-float cursor-pointer group"
          style={{ '--float-duration': '4.8s' } as React.CSSProperties}
          onClick={onEnter}
          title="BLUE 3D — Enter World"
        >
          <Image
            src="/assets/branding/main-logo.png"
            alt="Blue 3D Logo"
            fill
            className="w-full h-full object-contain filter drop-shadow-[0_8px_20px_rgba(56,189,248,0.25)] select-none pointer-events-none transition-transform duration-300 group-hover:scale-[1.03]"
            style={{ imageRendering: 'pixelated' }}
            priority
            unoptimized
          />
        </div>

        {/* 2. UNDER LOGO: Ravi Solanki */}
        <h1 className="font-pixel text-sm sm:text-base md:text-lg text-[#f8fafc] tracking-[0.25em] mt-5 mb-3 drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)]">
          RAVI SOLANKI
        </h1>

        {/* 3. UNDER NAME: Personal Statement */}
        <p className="font-pixel text-[11px] sm:text-xs md:text-[13px] text-[#38bdf8] tracking-wider mb-3 leading-relaxed drop-shadow-[0_2px_8px_rgba(0,212,255,0.3)]">
          BUILDING THINGS WHILE FIGURING THINGS OUT.
        </p>

        {/* 4. UNDER STATEMENT: Subtitle */}
        <p className="font-sans text-xs sm:text-sm md:text-[15px] text-zinc-300 font-medium tracking-wide max-w-xl mx-auto leading-relaxed mb-8 px-2">
          19-YEAR-OLD B.TECH CSE AIML STUDENT EXPLORING 3D, GAMES, FILM, CODE &amp; CREATIVE EXPERIMENTS.
        </p>

        {/* 5. CTA Buttons (Visually equal in importance per Section 4) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <button
            onClick={onEnter}
            className="pixel-btn text-[10.5px] sm:text-xs py-3 px-6 bg-[#08061a] text-white border border-[#38bdf8] shadow-[0_0_12px_rgba(56,189,248,0.25)] hover:border-white hover:bg-[#38bdf8]/15"
          >
            [ ENTER WORLD ↓ ]
          </button>

          <button
            onClick={onOpenAbout}
            className="pixel-btn text-[10.5px] sm:text-xs py-3 px-6 bg-[#08061a] text-white border border-[#a855f7] shadow-[0_0_12px_rgba(168,85,247,0.25)] hover:border-white hover:bg-[#a855f7]/15"
          >
            [ WHO IS RAVI? ]
          </button>
        </div>

        {/* 6. Downward Indicator with Breathing Room */}
        <div
          className="mt-14 sm:mt-16 flex flex-col items-center gap-2 opacity-75 hover:opacity-100 transition-opacity cursor-pointer animate-bounce"
          onClick={onEnter}
        >
          <span className="font-pixel text-[8px] sm:text-[9px] text-[#38bdf8] tracking-widest">
            SCROLL TO EXPLORE JOURNEY
          </span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" shapeRendering="crispEdges">
            <polygon points="2,4 8,10 14,4 12,2 8,6 4,2" fill="#38bdf8" />
            <polygon points="2,8 8,14 14,8 12,6 8,10 4,6" fill="#67e8f9" />
          </svg>
        </div>
      </div>
    </div>
  );
};
