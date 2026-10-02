'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { sound } from '@/utils/audio';

export const ConnectedSpine: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [characterInteracted, setCharacterInteracted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (max > 0) {
        setScrollProgress(Math.min(100, Math.max(0, (window.scrollY / max) * 100)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCharacterClick = () => {
    sound.playClick(900, 0.03);
    setCharacterInteracted(!characterInteracted);
  };

  return (
    <div className="fixed top-0 bottom-0 left-2 sm:left-5 md:left-8 z-30 pointer-events-none flex flex-col items-center">
      {/* Subtle Vertical Spine Line - Recedes so media has full visual priority */}
      <div className="w-[1.5px] h-full bg-gradient-to-b from-transparent via-white/10 to-transparent relative">
        {/* Progress Fill Indicator */}
        <div
          className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#3b82f6] to-[#f59e0b] opacity-40 transition-all duration-150"
          style={{ height: `${scrollProgress}%` }}
        />

        {/* Pixel Ravi Guide - Easter Egg Character */}
        <div
          onClick={handleCharacterClick}
          className="absolute left-1/2 -translate-x-1/2 pointer-events-auto cursor-pointer group transition-all duration-300 ease-out"
          style={{
            top: `calc(${Math.min(92, Math.max(8, scrollProgress))}% - 14px)`,
          }}
          title="Pixel Ravi — Click for easter egg"
        >
          {/* Character Sprite Container */}
          <div className="relative w-6 h-6 sm:w-7 sm:h-7 filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] transition-transform group-hover:scale-110">
            <Image
              src="/brand/character.png"
              alt="Pixel Ravi Guide"
              fill
              sizes="32px"
              className="object-contain select-none"
              style={{ imageRendering: 'pixelated' }}
            />
          </div>

          {/* Thought / Dialogue Bubble on Click or Hover */}
          {characterInteracted && (
            <div className="absolute left-10 top-0 w-44 p-2 rounded-lg bg-[#0c0d14]/95 border border-white/15 backdrop-blur-md shadow-xl text-left select-none animate-in fade-in zoom-in-95 duration-200">
              <p className="font-mono text-[10px] text-zinc-300 leading-tight">
                Building things while figuring things out. Welcome to the workspace.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
