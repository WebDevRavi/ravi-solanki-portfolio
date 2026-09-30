'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { SceneContainer } from '@/components/canvas/SceneContainer';
import { Blue3DCube } from '@/components/canvas/Blue3DCube';
import { scrambleText } from '@/utils/scramble';
import { sound } from '@/utils/audio';

export function HeroSection() {
  const [headline, setHeadline] = useState('RAVI SOLANKI');
  const [isScrambling, setIsScrambling] = useState(false);

  const triggerScramble = () => {
    if (isScrambling) return;
    setIsScrambling(true);
    sound.playTyping(950);
    scrambleText(
      'RAVI SOLANKI',
      (text) => setHeadline(text),
      {
        durationMs: 800,
        fps: 35,
        onComplete: () => setIsScrambling(false),
      }
    );
  };

  const handleActionClick = () => {
    sound.playPowerUp();
  };

  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden px-6 pt-16 pb-20 md:px-12 md:pt-24 md:pb-32">
      {/* Interactive 3D Spatial Canvas - Integrated directly into the background without clumsy card containers */}
      <div className="pointer-events-auto absolute top-0 right-0 h-full w-full opacity-35 sm:opacity-75 lg:w-7/12 lg:opacity-100">
        <SceneContainer>
          <Blue3DCube />
        </SceneContainer>

        {/* Tactile hint badge over 3D space */}
        <div className="pointer-events-none absolute right-6 bottom-8 hidden items-center gap-2 font-mono text-[10px] tracking-wider text-[#6b7280] lg:flex">
          <span className="h-1.5 w-1.5 rounded-full bg-[#FCDD0D] animate-ping" />
          <span>CLICK 3D ARTIFACT TO CYCLE GEOMETRIES</span>
        </div>
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col justify-between">
        <div className="max-w-3xl">
          {/* Engineering Marker */}
          <div className="flex items-center gap-3">
            <span className="rounded bg-[#1a1c22] px-2.5 py-1 font-mono text-[10px] font-semibold tracking-wider text-[#4B7BFF] uppercase border border-[#262a33]">
              B.Tech CSE · AIML
            </span>
            <span className="font-mono text-[11px] tracking-widest text-[#6b7280] uppercase">
              PORTFOLIO SPECIFICATION // 2026
            </span>
          </div>

          {/* Kinetic Headline with Scramble Trigger */}
          <h1
            onMouseEnter={triggerScramble}
            onClick={triggerScramble}
            className="mt-6 cursor-pointer font-sans text-6xl font-black tracking-tighter text-white select-none transition-all sm:text-8xl md:text-9xl"
            title="Click or hover to scramble"
          >
            {headline}
          </h1>

          {/* Core Dual Discipline */}
          <div className="mt-8 flex flex-wrap items-center gap-3 font-mono text-lg font-bold tracking-tight text-[#4B7BFF] sm:text-2xl">
            <span className="text-white">AI / ML</span>
            <span className="text-[#374151]">×</span>
            <span>GAME DEVELOPMENT</span>
            <span className="text-[#374151]">×</span>
            <span className="text-[#FCDD0D]">BLUE3D</span>
          </div>

          <p className="mt-3 font-mono text-xs tracking-widest text-[#9ca3af] uppercase">
            C++ · OpenGL / Three.js · Shader Math · Procedural Mechanics
          </p>

          <p className="mt-8 max-w-xl font-sans text-sm leading-relaxed text-[#9ca3af] md:text-base">
            Work-first engineering focused on real-time 3D game engines, procedural level generation, and foundational machine learning. Every project backed by playable web builds, source repositories, and measurable code.
          </p>

          {/* Kinetic CTAs */}
          <div className="mt-10 flex flex-wrap items-center gap-4 font-mono text-xs">
            <a
              href="#games"
              onClick={handleActionClick}
              className="group flex items-center gap-2 rounded bg-white px-5 py-3 font-bold text-black transition-all hover:bg-[#FCDD0D] hover:shadow-[0_0_20px_rgba(252,221,13,0.3)]"
            >
              <span>EXPLORE PLAYABLE BUILDS</span>
              <span className="transition-transform group-hover:translate-y-0.5">↓</span>
            </a>

            <a
              href="#creative"
              onClick={() => sound.playClick(900, 0.04)}
              className="flex items-center gap-2 rounded border border-[#27272a] bg-[#111215] px-5 py-3 text-white transition-all hover:border-[#4B7BFF] hover:bg-[#181a20]"
            >
              <span>BLUE3D CINEMA & ART</span>
              <span className="text-[#FCDD0D]">↗</span>
            </a>
          </div>
        </div>

        {/* Telemetry Status Bar */}
        <div className="mt-20 grid grid-cols-2 gap-4 border-t border-[#1f2228] pt-8 font-mono text-xs sm:grid-cols-4 lg:max-w-4xl">
          <div>
            <span className="block text-[10px] tracking-wider text-[#6b7280] uppercase">Core Engine</span>
            <span className="mt-1 block font-semibold text-white">Three.js / WebGL</span>
          </div>
          <div>
            <span className="block text-[10px] tracking-wider text-[#6b7280] uppercase">Academic Track</span>
            <span className="mt-1 block font-semibold text-white">AIML · DSA in C++</span>
          </div>
          <div>
            <span className="block text-[10px] tracking-wider text-[#6b7280] uppercase">Audio Pipeline</span>
            <span className="mt-1 block font-semibold text-white">Synthesized Web Audio</span>
          </div>
          <div>
            <span className="block text-[10px] tracking-wider text-[#6b7280] uppercase">Location</span>
            <span className="mt-1 block font-semibold text-white">Bhopal, India</span>
          </div>
        </div>
      </div>
    </section>
  );
}
