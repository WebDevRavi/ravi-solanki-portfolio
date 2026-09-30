'use client';

import React, { useState } from 'react';
import { sound } from '@/utils/audio';

interface CardItem {
  number: string;
  category: string;
  title: string;
  subtitle: string;
  accent: string;
  tag: string;
  targetId: string;
}

export function CardsOfContent() {
  const [activeHoverCard, setActiveHoverCard] = useState<number | null>(null);

  const cards: CardItem[] = [
    {
      number: '1',
      category: '3D Arcade',
      title: 'Vortex Glide',
      subtitle: '10-Sided Tunnel · Three.js Engine · Continuous Accel',
      accent: '#4B7BFF',
      tag: 'WEBGL2',
      targetId: 'games',
    },
    {
      number: '2',
      category: 'Input Engine',
      title: 'TypeRush',
      subtitle: 'Mechanical Keystrokes · WPM Calibration · Pure DOM',
      accent: '#FCDD0D',
      tag: '0MS LATENCY',
      targetId: 'games',
    },
    {
      number: '3',
      category: 'Arcade Vault',
      title: '2D Cartridges',
      subtitle: 'Color Trap (Stroop) · MathDash · Find The Number',
      accent: '#EC4899',
      tag: '3 GAMES',
      targetId: 'games',
    },
    {
      number: '4',
      category: 'Research Lab',
      title: 'AI / ML & DSA',
      subtitle: 'Gradient Descent · C++ Memory Pointers · Algorithmic Math',
      accent: '#A855F7',
      tag: 'B.TECH CSE',
      targetId: 'aiml',
    },
    {
      number: '5',
      category: 'Cinema Sub-Brand',
      title: 'Blue3D Archive',
      subtitle: '4K Film Vignettes · Spoken Word · VFX Graded Motion',
      accent: '#F59E0B',
      tag: 'VFX / 3D',
      targetId: 'creative',
    },
  ];

  const handleCardClick = (targetId: string) => {
    sound.playPowerUp();
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="cards" className="w-full bg-[#0e0c16] px-6 py-24 md:px-12 md:py-36">
      <div className="mx-auto max-w-7xl">
        {/* Header with Doodled Badge */}
        <div className="mb-16 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#A855F7]/40 bg-[#1e172e] px-4 py-1.5 font-mono text-xs font-bold text-[#C084FC]">
            <span>🃏</span>
            <span>TABLE OF CONTENTS // 2025-2026</span>
          </div>

          <h2 className="mt-4 font-sans text-4xl font-black tracking-tight text-white sm:text-6xl md:text-7xl">
            Cards <span className="italic font-serif text-[#A855F7]">of</span> Content
          </h2>

          <p className="mt-4 max-w-lg font-mono text-xs text-[#9ca3af]">
            Select any card to jump directly into the verified playable system or technical laboratory.
          </p>
        </div>

        {/* Fanned Playing Card Deck (Direct Muhammad Risal Layout) */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {cards.map((card, index) => {
            const isHovered = activeHoverCard === index;

            // Tilt angles for fanned playing card effect on desktop
            const rotations = ['-rotate-3', '-rotate-1', 'rotate-0', 'rotate-1', 'rotate-3'];
            const rotationClass = rotations[index];

            return (
              <div
                key={card.number}
                onClick={() => handleCardClick(card.targetId)}
                onMouseEnter={() => {
                  setActiveHoverCard(index);
                  sound.playClick(800 + index * 80, 0.03);
                }}
                onMouseLeave={() => setActiveHoverCard(null)}
                className={`group relative flex min-h-[380px] cursor-pointer flex-col justify-between rounded-2xl border-2 bg-[#171224] p-6 shadow-2xl transition-all duration-300 ${rotationClass} hover:rotate-0 hover:-translate-y-4 hover:shadow-[0_20px_40px_rgba(168,85,247,0.3)]`}
                style={{
                  borderColor: isHovered ? card.accent : '#2d233e',
                }}
              >
                {/* Playing Card Top Bar: Big Number & Category Badge */}
                <div>
                  <div className="flex items-start justify-between">
                    <div
                      className="flex h-12 w-10 items-center justify-center rounded-lg border-2 font-mono text-2xl font-black shadow-inner"
                      style={{
                        borderColor: card.accent,
                        color: card.accent,
                        backgroundColor: '#120d1c',
                      }}
                    >
                      {card.number}
                    </div>

                    <span
                      className="rounded-full px-2.5 py-1 font-mono text-[10px] font-black uppercase tracking-wider text-black shadow-md"
                      style={{ backgroundColor: card.accent }}
                    >
                      {card.tag}
                    </span>
                  </div>

                  {/* Card Title */}
                  <div className="mt-8">
                    <span className="font-mono text-[10px] font-bold tracking-widest text-[#9ca3af] uppercase">
                      {card.category}
                    </span>
                    <h3 className="mt-1 font-sans text-2xl font-black tracking-tight text-white transition-colors group-hover:text-[#FCDD0D]">
                      {card.title}
                    </h3>
                  </div>

                  {/* Subtitle / Specs */}
                  <p className="mt-4 font-mono text-xs leading-relaxed text-[#9ca3af]">
                    {card.subtitle}
                  </p>
                </div>

                {/* Card Bottom CTA */}
                <div className="mt-8 border-t border-[#2d233e] pt-4 font-mono text-xs font-bold text-white transition-colors group-hover:text-[#A855F7] flex items-center justify-between">
                  <span>EXPLORE STAGE</span>
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
