'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

interface CharacterProps {
  onSpeak?: () => void;
  scrollProgress?: number; // 0 to 100%
  isMobile?: boolean;
}

export const Character: React.FC<CharacterProps> = ({ onSpeak, scrollProgress = 0, isMobile = false }) => {
  const [isInteracted, setIsInteracted] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [isScrolling, setIsScrolling] = useState(false);
  const [walkFrame, setWalkFrame] = useState(1);

  const startPointerRef = useRef({ x: 0, y: 0 });
  const startOffsetRef = useRef({ x: 0, y: 0 });
  const lastProgressRef = useRef(scrollProgress);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Dynamic walking animation frame cycle when user scrolls
  useEffect(() => {
    const diff = Math.abs(scrollProgress - lastProgressRef.current);
    if (diff > 0.05) {
      setIsScrolling(true);
      setWalkFrame((prev) => (prev % 4) + 1);
      lastProgressRef.current = scrollProgress;

      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
        setDragOffset((prev) => (prev.x !== 0 || prev.y !== 0 ? { x: 0, y: 0 } : prev));
      }, 350);
    }
  }, [scrollProgress]);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setIsDragging(true);
    startPointerRef.current = { x: e.clientX, y: e.clientY };
    startOffsetRef.current = { ...dragOffset };
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const dx = e.clientX - startPointerRef.current.x;
    const dy = e.clientY - startPointerRef.current.y;
    setDragOffset({
      x: startOffsetRef.current.x + dx,
      y: startOffsetRef.current.y + dy,
    });
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (isDragging) {
      setIsDragging(false);
      lastProgressRef.current = scrollProgress;
      try {
        e.currentTarget.releasePointerCapture(e.pointerId);
      } catch {
        // pointer capture fallback
      }
    }
  };

  const handleClick = () => {
    if (
      Math.abs(dragOffset.x - startOffsetRef.current.x) < 5 &&
      Math.abs(dragOffset.y - startOffsetRef.current.y) < 5
    ) {
      setIsInteracted(!isInteracted);
      onSpeak?.();
    }
  };

  // Section-aware authentic human dialogue lines
  const getContextualThought = () => {
    if (isDragging) {
      return 'MANUALLY EXPLORING THE PATH!';
    }
    if (dragOffset.x !== 0 || dragOffset.y !== 0) {
      return 'PAUSED HERE. KEEP SCROLLING!';
    }
    if (isInteracted) {
      return 'BUILDING THINGS WHILE FIGURING THINGS OUT.';
    }
    if (scrollProgress < 6) {
      return "HEY! I'M RAVI.\nEXPLORE MY WORK AS YOU SCROLL.";
    }
    if (scrollProgress < 18) {
      return 'BLENDER VIEWPORT: LIGHTING & BRUTALIST FORMS.';
    }
    if (scrollProgress < 28) {
      return 'INTERACTIVE GAMES: VORTEX GLIDE & TYPERUSH!';
    }
    if (scrollProgress < 38) {
      return 'DIRECTED & COLOR-GRADED 10 CINEMATIC FILMS.';
    }
    if (scrollProgress < 46) {
      return 'C++ & DSA: STRENGTHENING CS FOUNDATIONS.';
    }
    if (scrollProgress < 56) {
      return 'SHREEPLYS STOREFRONT & FREELANCE VIDEO WORK.';
    }
    if (scrollProgress < 66) {
      return 'BUILT A 40K+ DIGITAL MEDIA AUDIENCE.';
    }
    if (scrollProgress < 76) {
      return 'MY LATE-NIGHT BHOPAL WORKSTATION.';
    }
    if (scrollProgress < 88) {
      return 'TRANSMISSION: SEND A MESSAGE OR COLLABORATE!';
    }
    return "EVERY COMMIT & RENDER IS A STEP FORWARD.";
  };

  // Dynamic sprite asset selection
  const getSpriteSrc = () => {
    if (isScrolling) {
      return `/assets/character/ravi-walk-${walkFrame}.png`;
    }
    if (scrollProgress >= 28 && scrollProgress < 42) {
      return '/assets/character/ravi-camera.png';
    }
    if (scrollProgress >= 42 && scrollProgress < 50) {
      return '/assets/character/ravi-think.png';
    }
    if (scrollProgress >= 50 && scrollProgress < 66) {
      return '/assets/character/ravi-celebrate.png';
    }
    if (scrollProgress >= 70 && scrollProgress < 78) {
      return '/assets/character/ravi-sit-laptop.png';
    }
    return '/assets/character/ravi-idle-1.png';
  };

  // Calculate smooth winding coordinates along the world path
  const getCharacterPosition = () => {
    const p = Math.min(100, Math.max(0, scrollProgress));
    // Vertical percentage: 15% (at hero exit) to 92% (at climax)
    let y = 15 + p * 0.77;
    // Harmonic horizontal path sway
    let x = 50 + Math.sin(p * 0.08) * 5;

    // In Studio section (p around 68-76%), step to the left flank (x = 26%) so studio cabin has clear center stage
    if (p >= 68 && p <= 76) {
      const t = Math.sin(((p - 68) / 8) * Math.PI);
      x = x * (1 - t) + 26 * t;
    }
    // In Contact section (p around 78-86%), step to the left flank (x = 24%) so transmission form has clear center stage
    else if (p > 76 && p <= 86) {
      const t = Math.sin(((p - 76) / 10) * Math.PI);
      x = x * (1 - t) + 24 * t;
    }
    // Near the end (p > 86%), step to side (x = 28% desktop, 18% mobile) for End Character portal
    else if (p > 86) {
      const t = Math.min(1, (p - 86) / 8);
      const targetX = isMobile ? 18 : 28;
      const targetY = 96.5;
      x = x * (1 - t) + targetX * t;
      y = y * (1 - t) + targetY * t;
    }

    return { x, y };
  };

  const pos = getCharacterPosition();

  return (
    <div
      className="absolute pointer-events-auto z-20 select-none touch-none"
      style={{
        left: `${pos.x}%`,
        top: `${pos.y}%`,
        transform: `translate(calc(-50% + ${dragOffset.x}px), calc(-50% + ${dragOffset.y}px))`,
        transition: isDragging
          ? 'none'
          : 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), left 0.6s ease-out, top 0.6s ease-out',
      }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onClick={handleClick}
    >
      <div className={`flex flex-col items-center ${isDragging ? 'cursor-grabbing' : 'cursor-grab'} group`}>
        {/* Dialogue Box */}
        <div
          className={`relative mb-2 px-3 py-1.5 bg-[#070518]/95 border border-[#00d4ff]/40 rounded-lg shadow-[0_0_16px_rgba(0,212,255,0.25)] backdrop-blur-md transition-all duration-300 max-w-[220px] text-center pointer-events-none ${
            isDragging
              ? 'scale-105 border-[#00d4ff] bg-[#0c0827]'
              : isInteracted
              ? 'scale-105 border-[#38bdf8]'
              : 'group-hover:scale-102'
          }`}
        >
          <p className="font-pixel text-[8px] sm:text-[8.5px] text-[#38bdf8] leading-tight whitespace-pre-line tracking-wider drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">
            {getContextualThought()}
          </p>
          <div className="flex items-center justify-center gap-1.5 mt-1 font-mono text-[7px] text-zinc-400">
            <span>RAVI SOLANKI</span>
            <span className="text-zinc-600">·</span>
            <span className="text-zinc-400">{isDragging ? 'DRAGGING' : isScrolling ? 'WALKING' : 'ONLINE'}</span>
          </div>
          {/* Subtle triangle arrow pointing to character */}
          <div className="absolute left-1/2 -bottom-1 -translate-x-1/2 w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[4px] border-t-[#00d4ff]/50" />
        </div>

        {/* Dynamic Pixel Art Ravi Sprite */}
        <div
          className="relative animate-node-float cursor-pointer select-none"
          style={{ '--float-duration': '3.2s' } as React.CSSProperties}
        >
          {/* Subtle ambient floor shadow */}
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-9 h-2.5 rounded-full bg-black/70 blur-[2px] pointer-events-none" />

          {/* Cyan/purple aura */}
          <div
            className={`absolute -inset-2 rounded-full blur-[10px] pointer-events-none transition-all duration-300 ${
              isDragging ? 'bg-[#00d4ff]/35 scale-125' : 'bg-[#38bdf8]/20'
            }`}
          />

          {/* Dynamic Sprite Image */}
          <div className="relative w-[52px] h-[78px] filter drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)] transition-transform duration-200 group-hover:scale-110">
            <Image
              src={getSpriteSrc()}
              alt="Ravi Solanki — Character"
              width={52}
              height={78}
              className="w-full h-full object-contain pointer-events-none select-none"
              style={{ imageRendering: 'pixelated' }}
              unoptimized
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};
