'use client';

import React from 'react';
import Image from 'next/image';

interface IntroSceneProps {
  onEnter: () => void;
  onOpenAbout: () => void;
  onOpenShowcase?: () => void;
}

export const IntroScene: React.FC<IntroSceneProps> = ({ onEnter, onOpenAbout, onOpenShowcase }) => {
  return (
    <div id="intro" className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 pt-24 pb-16 select-none z-10">
      {/* Central Hero Column with negative space */}
      <div className="relative flex flex-col items-center max-w-4xl mx-auto">
        {/* Soft, non-overpowering atmospheric glow */}
        <div
          className="absolute -inset-10 rounded-full blur-[65px] opacity-35 pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(56, 189, 248, 0.4) 0%, rgba(139, 92, 246, 0.25) 45%, transparent 70%)',
          }}
        />

        {/* 1. Live Status Beacon Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0a071d]/90 border border-white/10 backdrop-blur-md mb-6 shadow-[0_0_12px_rgba(0,0,0,0.5)]">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          <span className="font-silkscreen text-[8px] sm:text-[9px] text-zinc-300 tracking-wider">
            BHOPAL, IN · CSE AIML (2ND YEAR) · OPEN TO COLLABORATIONS
          </span>
        </div>

        {/* 2. BLUE 3D Logo (Authentic Brand Identity) */}
        <div
          className="relative w-[230px] sm:w-[300px] md:w-[360px] lg:w-[410px] aspect-[2060/763] animate-node-float cursor-pointer group"
          style={{ '--float-duration': '4.8s' } as React.CSSProperties}
          onClick={onEnter}
          title="BLUE 3D — Enter Interactive World"
        >
          <Image
            src="/assets/branding/main-logo.png"
            alt="Blue 3D Logo"
            fill
            className="w-full h-full object-contain filter drop-shadow-[0_8px_25px_rgba(56,189,248,0.3)] select-none pointer-events-none transition-transform duration-300 group-hover:scale-[1.03]"
            style={{ imageRendering: 'pixelated' }}
            priority
            unoptimized
          />
        </div>

        {/* 3. UNDER LOGO: Ravi Solanki */}
        <h1 className="font-pixel text-base sm:text-lg md:text-xl text-[#f8fafc] tracking-[0.25em] mt-5 mb-2 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
          RAVI SOLANKI
        </h1>

        {/* 4. Subtitle / Craft Direction */}
        <p className="font-pixel text-[10px] sm:text-xs md:text-[12.5px] text-[#38bdf8] tracking-widest mb-3 leading-relaxed drop-shadow-[0_2px_8px_rgba(0,212,255,0.35)]">
          CREATIVE DEVELOPER · 3D ARTIST · GAME MAKER
        </p>

        {/* 5. Authentic Human Bio */}
        <p className="font-sans text-xs sm:text-sm md:text-[15px] text-zinc-300 font-normal tracking-wide max-w-2xl mx-auto leading-relaxed mb-6 px-4">
          Building browser games with Three.js &amp; React, sculpting brutalist architecture &amp; lighting in Blender, and editing cinematic films — while grounding computational foundations in C++ &amp; DSA.
        </p>

        {/* 6. Real Metric Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8 max-w-xl px-2">
          <span className="font-silkscreen text-[7.5px] sm:text-[8px] px-2.5 py-1 rounded bg-[#00d4ff]/10 text-[#38bdf8] border border-[#00d4ff]/30">
            🕹 6 WEB GAMES
          </span>
          <span className="font-silkscreen text-[7.5px] sm:text-[8px] px-2.5 py-1 rounded bg-[#a855f7]/10 text-[#c084fc] border border-[#a855f7]/30">
            ✦ 7 3D SPATIAL RENDERS
          </span>
          <span className="font-silkscreen text-[7.5px] sm:text-[8px] px-2.5 py-1 rounded bg-[#fb7185]/10 text-[#fb7185] border border-[#fb7185]/30">
            🎬 10 CINEMATIC FILMS
          </span>
          <span className="font-silkscreen text-[7.5px] sm:text-[8px] px-2.5 py-1 rounded bg-[#f59e0b]/10 text-[#fbbf24] border border-[#f59e0b]/30">
            ⚡ LIVE CLIENT STOREFRONT
          </span>
          <span className="font-silkscreen text-[7.5px] sm:text-[8px] px-2.5 py-1 rounded bg-[#10b981]/10 text-[#34d399] border border-[#10b981]/30">
            👥 40K+ DIGITAL AUDIENCE
          </span>
        </div>

        {/* 7. CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <button
            onClick={onEnter}
            className="pixel-btn text-[10px] sm:text-[11px] py-3 px-5 bg-[#08061a] text-white border border-[#38bdf8] shadow-[0_0_15px_rgba(56,189,248,0.3)] hover:border-white hover:bg-[#38bdf8]/20 transition-all hover:scale-105"
          >
            [ ✦ ENTER WORLD JOURNEY ↓ ]
          </button>

          {onOpenShowcase && (
            <button
              onClick={onOpenShowcase}
              className="pixel-btn text-[10px] sm:text-[11px] py-3 px-5 bg-[#08061a] text-[#38bdf8] border border-[#00d4ff]/50 shadow-[0_0_12px_rgba(0,212,255,0.2)] hover:border-white hover:bg-[#00d4ff]/15 transition-all hover:scale-105"
            >
              [ 🕹 SHOWCASE ARCHIVE ]
            </button>
          )}

          <button
            onClick={onOpenAbout}
            className="pixel-btn text-[10px] sm:text-[11px] py-3 px-5 bg-[#08061a] text-white border border-[#a855f7] shadow-[0_0_12px_rgba(168,85,247,0.25)] hover:border-white hover:bg-[#a855f7]/15 transition-all hover:scale-105"
          >
            [ 👤 ABOUT RAVI ]
          </button>
        </div>

        {/* 8. Downward Indicator with Breathing Room */}
        <div
          className="mt-12 sm:mt-14 flex flex-col items-center gap-2 opacity-80 hover:opacity-100 transition-opacity cursor-pointer animate-bounce"
          onClick={onEnter}
        >
          <span className="font-pixel text-[7.5px] sm:text-[8.5px] text-[#38bdf8] tracking-widest">
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
