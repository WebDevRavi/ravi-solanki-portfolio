'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface EndCharacterProps {
  onSpeak?: () => void;
  scrollY?: number;
  onReturnToTop?: () => void;
}

export const EndCharacter: React.FC<EndCharacterProps> = ({ onSpeak, onReturnToTop }) => {
  const [isInteracted, setIsInteracted] = useState(false);

  const handleClick = () => {
    setIsInteracted(!isInteracted);
    onSpeak?.();
  };

  const handleScrollTop = () => {
    if (onReturnToTop) {
      onReturnToTop();
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div
      id="end-character-anchor"
      className="absolute left-1/2 -translate-x-1/2 bottom-8 sm:bottom-12 z-25 pointer-events-auto select-none w-full max-w-3xl px-4 flex flex-col items-center"
    >
      <div
        className="flex flex-col items-center group cursor-pointer mb-6"
        onClick={handleClick}
        title="The Creator's Horizon — Click to Speak"
      >
        {/* Character Container with Floating Motion */}
        <div className="relative animate-cosmic-float">
          {/* Ambient Cosmic Portal Backlight */}
          <div
            className="absolute -inset-10 rounded-full blur-[45px] pointer-events-none"
            style={{
              background:
                'radial-gradient(circle, rgba(168, 85, 247, 0.45) 0%, rgba(56, 189, 248, 0.25) 45%, transparent 75%)',
            }}
          />

          {/* Pixel Art Character Image */}
          <div className="relative w-[180px] sm:w-[220px] md:w-[250px] aspect-[594/650] select-none pointer-events-none">
            <Image
              src="/assets/character/end-node-character.png"
              alt="End Node Character — The Creator"
              width={594}
              height={650}
              priority
              unoptimized
              className="w-full h-full object-contain drop-shadow-[0_10px_25px_rgba(0,0,0,0.85)] drop-shadow-[0_0_30px_rgba(168,85,247,0.35)]"
              style={{
                imageRendering: 'pixelated',
                aspectRatio: '594 / 650',
              }}
            />

            {/* Portal Void Aura: Positioned exactly at hole in head (X: 43.43%, Y: 14.77%) */}
            <div
              className="absolute pointer-events-none -translate-x-1/2 -translate-y-1/2"
              style={{
                left: '43.43%',
                top: '14.77%',
                width: '68%',
                height: '18%',
              }}
            >
              {/* Inner Portal Swirl Glow */}
              <div
                className="absolute inset-0 rounded-[50%] blur-[4px] opacity-85 animate-portal-pulse"
                style={{
                  background:
                    'radial-gradient(ellipse at center, rgba(192, 132, 252, 0.9) 0%, rgba(99, 102, 241, 0.65) 40%, rgba(59, 7, 100, 0.3) 75%, transparent 100%)',
                }}
              />

              {/* Glowing Inflow Target Ring */}
              <div className="absolute inset-x-2 inset-y-1 rounded-[50%] border border-[#00d4ff]/70 shadow-[0_0_14px_rgba(0,212,255,0.8)] animate-pulse" />

              {/* Sparkle energy particles emerging from hole */}
              <span className="absolute left-[30%] top-[20%] w-1.5 h-1.5 rounded-full bg-[#f8fafc] shadow-[0_0_6px_#fff] animate-ping" />
              <span
                className="absolute left-[65%] top-[35%] w-1 h-1 rounded-full bg-[#00d4ff] shadow-[0_0_4px_#00d4ff] animate-ping"
                style={{ animationDelay: '0.8s' }}
              />
            </div>
          </div>

          {/* Ground Platform Pedestal */}
          <div className="w-48 sm:w-64 h-3 mx-auto mt-[-10px] rounded-full bg-gradient-to-r from-transparent via-[#00d4ff]/40 to-transparent blur-[1px] border-b border-[#00d4ff]/60" />
        </div>
      </div>

      {/* Ground Observatory Sign-off & Final Navigation */}
      <div className="w-full text-center space-y-4 pt-2 border-t border-white/10 max-w-xl">
        <p className="font-pixel text-[10px] sm:text-[11px] text-white tracking-widest">
          ✦ HORIZON REACHED · THANKS FOR VISITING ✦
        </p>

        <p className="font-sans text-xs text-zinc-400 max-w-md mx-auto leading-relaxed">
          &ldquo;I keep building, experimenting, and refining until I find what&apos;s next.&rdquo;
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button
            onClick={handleScrollTop}
            className="pixel-btn text-[9px] py-2 px-4 bg-[#0a071e] text-[#38bdf8] border border-[#38bdf8]/50 hover:bg-[#38bdf8] hover:text-black transition-all hover:scale-105"
          >
            [ ↑ RETURN TO APEX ]
          </button>
          <a
            href="mailto:ravisolanki969197@gmail.com"
            className="pixel-btn text-[9px] py-2 px-4 bg-[#0a071e] text-[#a855f7] border border-[#a855f7]/50 hover:bg-[#a855f7] hover:text-white transition-all hover:scale-105"
          >
            [ ✉ TRANSMISSION / EMAIL ]
          </a>
        </div>

        <p className="font-mono text-[9px] text-zinc-500 pt-3">
          © {new Date().getFullYear()} RAVI SOLANKI · BLUE 3D · CRAFTED IN BHOPAL, INDIA
        </p>
      </div>
    </div>
  );
};
