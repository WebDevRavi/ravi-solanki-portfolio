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

  const startPointerRef = useRef({ x: 0, y: 0 });
  const startOffsetRef = useRef({ x: 0, y: 0 });
  const lastProgressRef = useRef(scrollProgress);

  // When user scrolls, smoothly reset manual drag offset so character follows as usual
  useEffect(() => {
    if (Math.abs(scrollProgress - lastProgressRef.current) > 0.4) {
      lastProgressRef.current = scrollProgress;
      if (!isDragging && (dragOffset.x !== 0 || dragOffset.y !== 0)) {
        const timer = setTimeout(() => {
          setDragOffset({ x: 0, y: 0 });
        }, 0);
        return () => clearTimeout(timer);
      }
    }
  }, [scrollProgress, isDragging, dragOffset]);

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

  // Dialogue lines per Section 18 & brand guidelines
  const getContextualThought = () => {
    if (isDragging) {
      return 'MANUALLY EXPLORING THE SPACE!';
    }
    if (dragOffset.x !== 0 || dragOffset.y !== 0) {
      return 'PAUSED HERE. SCROLL TO CONTINUE.';
    }
    if (isInteracted) {
      return 'BUILDING THINGS WHILE FIGURING THINGS OUT.';
    }
    if (scrollProgress < 6) {
      return "WELCOME TO MY WORLD.\nLET'S HEAD DOWN THE PATH.";
    }
    if (scrollProgress < 18) {
      return 'SPATIAL FORMS, BLENDER LIGHTS, AND GAME PHYSICS.';
    }
    if (scrollProgress < 30) {
      return 'FRAMES, CUTS, AND CINEMATIC ATMOSPHERE.';
    }
    if (scrollProgress < 42) {
      return 'DSA PROBLEM-SOLVING AND COMPUTATIONAL FOUNDATIONS.';
    }
    if (scrollProgress < 54) {
      return 'CLIENT WEB BUILDS & 40K+ DIGITAL AUDIENCE.';
    }
    if (scrollProgress < 68) {
      return 'THE WORLD IS STILL AHEAD. SO MUCH LEFT TO SEE.';
    }
    if (scrollProgress < 78) {
      return 'THE STUDIO — WHERE LATE-NIGHT IDEAS GET BUILT.';
    }
    if (scrollProgress < 88) {
      return 'TRANSMISSION POST. LET’S MAKE SOMETHING TOGETHER.';
    }
    return 'ALL IDEAS FLOW TOGETHER INTO THE MIND.';
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
          : 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), left 0.7s ease-out, top 0.7s ease-out',
      }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onClick={handleClick}
    >
      <div className={`flex flex-col items-center ${isDragging ? 'cursor-grabbing' : 'cursor-grab'} group`}>
        {/* Dialogue Box per Section 18 */}
        <div
          className={`relative mb-2.5 px-3 py-1.5 bg-[#070518]/92 border border-[#00d4ff]/40 rounded shadow-[0_0_12px_rgba(0,212,255,0.2)] backdrop-blur-md transition-all duration-300 max-w-[210px] text-center pointer-events-none ${
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
          <div className="flex items-center justify-center gap-1.5 mt-1 font-pixel text-[6.5px] text-zinc-400">
            <span>RAVI SOLANKI</span>
            <span className="text-zinc-600">·</span>
            <span className="text-zinc-400">{isDragging ? 'DRAGGING' : 'PROTAGONIST'}</span>
          </div>
          {/* Subtle triangle arrow pointing to character */}
          <div className="absolute left-1/2 -bottom-1 -translate-x-1/2 w-0 h-0 border-l-[3.5px] border-l-transparent border-r-[3.5px] border-r-transparent border-t-[4px] border-t-[#00d4ff]/50" />
        </div>

        {/* Pixel Art Ravi Protagonist Sprite (55–90px height, Section 6) */}
        <div
          className="relative animate-node-float cursor-pointer select-none"
          style={{ '--float-duration': '3.4s' } as React.CSSProperties}
        >
          {/* Subtle ambient floor shadow */}
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-2 rounded-full bg-black/60 blur-[2px] pointer-events-none" />

          {/* Subtle cyan/purple aura */}
          <div
            className={`absolute -inset-2 rounded-full blur-[10px] pointer-events-none transition-all duration-300 ${
              isDragging ? 'bg-[#00d4ff]/35 scale-120' : 'bg-[#38bdf8]/18'
            }`}
          />

          {/* 58x81px sprite — within 55-90px range per Section 6 */}
          <div className="relative w-[58px] h-[81px] filter drop-shadow-[0_4px_8px_rgba(0,0,0,0.7)] transition-transform duration-200 group-hover:scale-105">
            <Image
              src="/assets/character/floating-char.png"
              alt="Ravi Solanki — Protagonist"
              width={58}
              height={81}
              className="w-full h-full object-contain pointer-events-none select-none"
              style={{ imageRendering: 'pixelated', aspectRatio: '1062 / 1482' }}
              unoptimized
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};
