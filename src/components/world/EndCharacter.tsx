'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface EndCharacterProps {
  onSpeak?: () => void;
  scrollY?: number;
}

export const EndCharacter: React.FC<EndCharacterProps> = ({ onSpeak }) => {
  const [isInteracted, setIsInteracted] = useState(false);

  const handleClick = () => {
    setIsInteracted(!isInteracted);
    onSpeak?.();
  };

  return (
    <div
      id="end-character-anchor"
      className="absolute left-1/2 -translate-x-1/2 bottom-0 z-25 pointer-events-auto select-none"
    >
      <div
        className="flex flex-col items-center group cursor-pointer"
        onClick={handleClick}
        title="The Creator's Mind — Node Horizon"
      >
        {/* Character Container with Floating Motion (Top is completely open for incoming connection line!) */}
        <div className="relative animate-cosmic-float">
          {/* Ambient Cosmic Portal Backlight */}
          <div
            className="absolute -inset-10 rounded-full blur-[40px] pointer-events-none"
            style={{
              background:
                'radial-gradient(circle, rgba(168, 85, 247, 0.5) 0%, rgba(56, 189, 248, 0.25) 45%, transparent 75%)',
            }}
          />

          {/* Pixel Art Character Image */}
          <div className="relative w-[210px] sm:w-[250px] md:w-[275px] aspect-[594/650] select-none pointer-events-none">
            <Image
              src="/assets/character/end-node-character.png"
              alt="End Node Character — The Creator"
              width={594}
              height={650}
              priority
              unoptimized
              className="w-full h-full object-contain drop-shadow-[0_10px_25px_rgba(0,0,0,0.7)] drop-shadow-[0_0_35px_rgba(168,85,247,0.4)]"
              style={{
                imageRendering: 'pixelated',
                aspectRatio: '594 / 650',
              }}
            />

            {/* Portal Void Aura: Positioned exactly at hole in the head (X: 43.43%, Y: 14.77%) */}
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
                className="absolute inset-0 rounded-[50%] blur-[4px] opacity-80 animate-portal-pulse"
                style={{
                  background:
                    'radial-gradient(ellipse at center, rgba(192, 132, 252, 0.85) 0%, rgba(99, 102, 241, 0.6) 40%, rgba(59, 7, 100, 0.3) 75%, transparent 100%)',
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

          {/* Base Glow Shadow */}
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-32 h-4 rounded-full bg-[#a855f7]/25 blur-[10px] pointer-events-none" />
        </div>
      </div>
    </div>
  );
};
