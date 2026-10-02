'use client';

import React from 'react';
import { sound } from '@/utils/audio';

interface HeroSectionProps {
  onExplore?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExplore }) => {
  const handleScrollToGames = (e: React.MouseEvent) => {
    e.preventDefault();
    sound.playClick(880, 0.04);
    if (onExplore) {
      onExplore();
      return;
    }
    const el = document.getElementById('games');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="intro"
      className="relative min-h-[82vh] md:min-h-[88vh] flex flex-col justify-center items-center pl-8 pr-4 sm:px-8 md:px-12 text-center select-none overflow-hidden"
    >
      {/* Subtle deep ambient glow behind hero - restrained, no particle spam */}
      <div
        className="absolute w-[500px] sm:w-[700px] h-[300px] sm:h-[400px] rounded-full blur-[120px] opacity-15 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, #3b82f6 0%, #1e1b4b 60%, transparent 80%)',
          top: '30%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        {/* Status Pill */}
        <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md mb-6">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          <span className="font-mono text-[10px] sm:text-xs text-zinc-300 tracking-wider">
            BHOPAL, INDIA · B.TECH CSE-AIML · BUILDING &amp; EXPERIMENTING
          </span>
        </div>

        {/* Kicker Discipline */}
        <p className="font-mono text-xs sm:text-sm tracking-[0.2em] text-[#3b82f6] uppercase mb-3 font-semibold">
          AI/ML · GAME DEVELOPMENT
        </p>

        {/* Primary Identity Headline */}
        <h1 className="font-sans text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white mb-6">
          RAVI SOLANKI
        </h1>

        {/* Concise Value Statement */}
        <p className="font-sans text-base sm:text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed mb-10 font-normal">
          Building browser games with Three.js &amp; WebGL, studying AI/ML and computational mathematics, and exploring 3D visual environments.
        </p>

        {/* Direct Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
          <a
            href="#games"
            onClick={handleScrollToGames}
            onMouseEnter={() => sound.playClick(1000, 0.02)}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white text-zinc-950 font-sans text-sm font-semibold hover:bg-zinc-200 transition-all hover:scale-[1.02] shadow-lg shadow-white/5"
          >
            <span>View Featured Games</span>
            <span className="text-zinc-500">↓</span>
          </a>

          <a
            href="https://github.com/WebDevRavi"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sound.playClick(1100, 0.02)}
            onMouseEnter={() => sound.playClick(1000, 0.02)}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white/[0.05] text-zinc-200 border border-white/10 font-sans text-sm font-medium hover:bg-white/[0.1] hover:text-white transition-all"
          >
            <span>GitHub Profile</span>
            <span className="text-zinc-400">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
};
