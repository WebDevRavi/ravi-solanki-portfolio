'use client';

import React, { useState } from 'react';
import { SceneContainer } from '@/components/canvas/SceneContainer';
import { Blue3DCube } from '@/components/canvas/Blue3DCube';
import { sound } from '@/utils/audio';

export function DoodleHero() {
  const [hoveredTag, setHoveredTag] = useState<string | null>(null);

  const tags = [
    { label: '3D GAME DEV', color: '#A855F7' },
    { label: 'AI / ML SYSTEMS', color: '#4B7BFF' },
    { label: 'BLUE3D CINEMA', color: '#FCDD0D' },
    { label: 'PROCEDURAL MATH', color: '#EC4899' },
    { label: 'C++ ENGINES', color: '#10B981' },
  ];

  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-[#0c0a12] px-6 pt-12 pb-20 md:px-12 md:pt-16 md:pb-28">
      {/* Background Subtle Doodle Accents */}
      <div className="pointer-events-none absolute inset-0 select-none overflow-hidden opacity-20">
        {/* Floating crosshairs & controller doodles */}
        <div className="absolute top-12 left-10 text-4xl text-[#A855F7]">✦</div>
        <div className="absolute top-1/4 right-16 text-3xl text-[#FCDD0D]">★</div>
        <div className="absolute bottom-20 left-1/4 text-2xl text-[#EC4899]">✦</div>
        <div className="absolute top-1/3 left-1/2 text-4xl text-[#4B7BFF] opacity-40">✧</div>

        {/* Hand drawn loop squiggle */}
        <svg className="absolute -top-10 right-10 h-72 w-72 text-[#A855F7]/30" viewBox="0 0 100 100">
          <path d="M10,50 Q30,10 50,50 T90,50" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Top Playful Subheader with Controller D-Pad Doodle */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {/* Doodled Controller Glasses Motif (Direct Risal homage) */}
            <div className="flex items-center gap-1.5 rounded-full border-2 border-[#A855F7] bg-[#1a1426] px-3.5 py-1.5 shadow-[0_0_15px_rgba(168,85,247,0.3)]">
              {/* Left Eye: D-Pad (+) */}
              <div className="relative flex h-5 w-5 items-center justify-center">
                <div className="absolute h-4 w-1.5 rounded-xs bg-[#A855F7]" />
                <div className="absolute h-1.5 w-4 rounded-xs bg-[#A855F7]" />
              </div>
              {/* Bridge */}
              <div className="h-0.5 w-2 bg-[#A855F7]" />
              {/* Right Eye: Button (-) */}
              <div className="flex h-5 w-5 items-center justify-center rounded-full border border-[#A855F7]/50 bg-[#120d1c]">
                <div className="h-1.5 w-3 rounded-xs bg-[#FCDD0D]" />
              </div>
              <span className="ml-1 font-mono text-xs font-black tracking-wider text-white">
                PORTFOLIO 2025-2026
              </span>
            </div>

            <span className="rounded-full bg-[#A855F7]/20 px-3 py-1 font-mono text-[10px] font-bold tracking-widest text-[#C084FC] uppercase border border-[#A855F7]/40">
              BHOPAL, INDIA
            </span>
          </div>

          <div className="font-mono text-xs text-[#9ca3af]">
            <span className="text-[#A855F7]">STATUS:</span> READY TO BUILD & COLLABORATE
          </div>
        </div>

        {/* Center Hero Layout: Large Stylized Title + 3D Spatial Interactive Core */}
        <div className="mt-12 grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
          {/* Left: Giant Expressive Typography & Doodles */}
          <div className="lg:col-span-7">
            {/* Playful Doodled Crown / Spark */}
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#FCDD0D]">
              <span className="text-xl">👑</span>
              <span className="tracking-widest uppercase font-bold">AI/ML ENGINEER & GAME ARCHITECT</span>
            </div>

            {/* Giant Title Inspired by Risal's Big Handcrafted Lettering */}
            <div className="relative mt-2">
              <h1 className="font-sans text-6xl font-black tracking-tight text-white sm:text-7xl md:text-8xl lg:text-9xl leading-[0.9]">
                RAVI
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#A855F7] via-[#C084FC] to-[#FCDD0D]">
                  SOLANKI
                </span>
              </h1>

              {/* Doodled Underline Squiggle */}
              <svg className="mt-2 h-6 w-72 text-[#A855F7]" viewBox="0 0 200 20" fill="none">
                <path
                  d="M5 12 Q 50 2 100 12 T 195 12"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <p className="mt-6 max-w-xl font-sans text-base leading-relaxed text-[#d1d5db] sm:text-lg">
              Crafting <span className="font-bold text-[#A855F7]">high-speed 3D WebGL game engines</span>, <span className="font-bold text-[#4B7BFF]">tactile arcade physics</span>, and <span className="font-bold text-[#FCDD0D]">foundational machine learning algorithms</span>. Built with pure code, memory precision, and zero AI-slop.
            </p>

            {/* Quick Interactive Ticker / Badges */}
            <div className="mt-8 flex flex-wrap items-center gap-2.5">
              {tags.map((tag) => (
                <button
                  key={tag.label}
                  onMouseEnter={() => {
                    setHoveredTag(tag.label);
                    sound.playClick(900, 0.02);
                  }}
                  onMouseLeave={() => setHoveredTag(null)}
                  className="rounded-full border border-[#2d223f] bg-[#181324] px-4 py-2 font-mono text-xs font-bold text-white transition-all hover:scale-105 hover:border-white hover:shadow-lg"
                  style={{
                    borderColor: hoveredTag === tag.label ? tag.color : undefined,
                    boxShadow: hoveredTag === tag.label ? `0 0 15px ${tag.color}40` : undefined,
                  }}
                >
                  <span style={{ color: tag.color }}>✦ </span>
                  {tag.label}
                </button>
              ))}
            </div>

            {/* Magnetic Action Buttons */}
            <div className="mt-10 flex flex-wrap items-center gap-4 font-mono text-xs">
              <a
                href="#cards"
                onClick={() => sound.playPowerUp()}
                className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#A855F7] to-[#8B5CF6] px-6 py-4 font-bold text-white shadow-[0_0_25px_rgba(168,85,247,0.4)] transition-all hover:scale-105 hover:shadow-[0_0_35px_rgba(168,85,247,0.6)]"
              >
                <span>OPEN CARDS OF CONTENT</span>
                <span>🃏</span>
              </a>

              <a
                href="#games"
                onClick={() => sound.playClick(1000, 0.04)}
                className="flex items-center gap-2 rounded-xl border-2 border-[#2d223f] bg-[#161124] px-6 py-4 font-bold text-white transition-all hover:border-[#FCDD0D] hover:text-[#FCDD0D]"
              >
                <span>PLAY 3D ARCADE</span>
                <span>🎮</span>
              </a>
            </div>
          </div>

          {/* Right: Embedded Interactive 3D Spatial Core in Risal Frame */}
          <div className="relative aspect-square w-full lg:col-span-5">
            {/* Playful Doodled Frame Border */}
            <div className="relative h-full w-full rounded-3xl border-2 border-[#A855F7]/40 bg-[#120e1c] p-2 shadow-[0_20px_60px_rgba(168,85,247,0.15)]">
              {/* Card Corner Accents */}
              <div className="absolute top-4 left-4 z-20 font-mono text-[10px] font-bold text-[#A855F7]">
                [ CORE ARTIFACT // 3D ]
              </div>
              <div className="absolute top-4 right-4 z-20 flex items-center gap-1 text-[#FCDD0D] text-xs">
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>

              {/* The Three.js Canvas */}
              <div className="h-full w-full overflow-hidden rounded-2xl bg-[#09070f]">
                <SceneContainer>
                  <Blue3DCube />
                </SceneContainer>
              </div>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 whitespace-nowrap rounded-full bg-black/80 px-4 py-1.5 font-mono text-[10px] font-bold text-[#C084FC] border border-[#A855F7]/40 backdrop-blur-md">
                CLICK 3D ARTIFACT TO CYCLE GEOMETRIES
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Ticker Strip (Direct Risal Homage) */}
        <div className="mt-16 flex items-center justify-between border-y-2 border-[#2d223f] bg-[#130f1e] py-3 font-mono text-xs text-[#9ca3af]">
          <div className="flex items-center gap-8 overflow-hidden whitespace-nowrap">
            <span className="text-[#A855F7] font-bold">GAME SYSTEMS</span>
            <span className="text-[#4b5563]">✦</span>
            <span className="text-white font-bold">THREE.JS / WEBGL</span>
            <span className="text-[#4b5563]">✦</span>
            <span className="text-[#FCDD0D] font-bold">DATA STRUCTURES & ALGORITHMS</span>
            <span className="text-[#4b5563]">✦</span>
            <span className="text-[#EC4899] font-bold">BLUE3D CINEMA & VFX</span>
            <span className="text-[#4b5563]">✦</span>
            <span className="text-[#10B981] font-bold">PURE DOM 0MS OVERHEAD</span>
          </div>
        </div>
      </div>
    </section>
  );
}
