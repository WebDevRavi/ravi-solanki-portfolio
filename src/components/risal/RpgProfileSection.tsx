'use client';

import React from 'react';
import Image from 'next/image';
import { sound } from '@/utils/audio';

export function RpgProfileSection() {
  const tools = [
    { name: 'C++', category: 'Core Systems', color: '#00599C' },
    { name: 'Three.js', category: 'WebGL Engine', color: '#4B7BFF' },
    { name: 'Python', category: 'AIML / NumPy', color: '#3776AB' },
    { name: 'WebGL2', category: 'Shaders', color: '#990000' },
    { name: 'Blender', category: '3D Assets', color: '#F5792A' },
    { name: 'Resolve', category: 'Color & VFX', color: '#A855F7' },
    { name: 'TypeScript', category: 'Architecture', color: '#3178C6' },
    { name: 'Web Audio', category: 'Synthesizers', color: '#10B981' },
  ];

  const tickets = [
    { name: '3D GAME ENGINES', color: '#4B7BFF', tilt: '-rotate-2', icon: '🎮' },
    { name: 'AI / ML ALGORITHMS', color: '#A855F7', tilt: 'rotate-1', icon: '🧠' },
    { name: 'PROCEDURAL GRAPHICS', color: '#FCDD0D', tilt: '-rotate-1', icon: '✨' },
    { name: 'C++ & MEMORY SYSTEMS', color: '#10B981', tilt: 'rotate-2', icon: '⚡' },
    { name: 'VFX & 3D MOTION', color: '#EC4899', tilt: '-rotate-3', icon: '🎬' },
  ];

  return (
    <section id="profile" className="w-full bg-[#0c0a12] px-6 py-24 md:px-12 md:py-36">
      <div className="mx-auto max-w-7xl">
        {/* ========================================================================= */}
        {/* 1. RPG TRADING CARD & BIO (DIRECT HOMAGE TO RISAL'S ABOUT ME SECTION) */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* Left: Collectible RPG Trading Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div
              onMouseEnter={() => sound.playClick(1000, 0.03)}
              className="group relative w-full max-w-sm cursor-pointer rounded-3xl border-4 border-[#A855F7] bg-[#1a1426] p-4 shadow-[0_20px_50px_rgba(168,85,247,0.3)] transition-all duration-500 hover:-rotate-1 hover:scale-105 hover:shadow-[0_30px_70px_rgba(168,85,247,0.5)]"
            >
              {/* Card Header Bar */}
              <div className="flex items-center justify-between font-mono text-xs font-black text-white border-b-2 border-[#2d223f] pb-3">
                <div className="flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#A855F7] text-white">
                    1
                  </span>
                  <span>LVL 99 DEV</span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-[#FCDD0D]">HP 100/100</span>
                  <span className="text-[#EC4899]">❤️ 22</span>
                </div>
              </div>

              {/* Character Image Container */}
              <div className="relative mt-3 aspect-[4/5] w-full overflow-hidden rounded-2xl border-2 border-[#2d223f] bg-black">
                <Image
                  src="/brand/character.png"
                  alt="Ravi Solanki character card"
                  fill
                  sizes="400px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Character Tag Overlay */}
                <div className="absolute bottom-3 left-3 rounded-lg bg-black/80 px-3 py-1 font-mono text-xs font-bold text-[#FCDD0D] border border-[#FCDD0D]/40 backdrop-blur-sm">
                  RAVI SOLANKI
                </div>
              </div>

              {/* Card Stats Footer */}
              <div className="mt-4 rounded-xl border border-[#2d223f] bg-[#120d1c] p-3 font-mono text-[11px]">
                <div className="flex items-center justify-between text-[#C084FC] font-bold">
                  <span>CLASS: SYSTEM ARCHITECT</span>
                  <span className="text-[#FCDD0D]">RANK: S</span>
                </div>
                <div className="mt-2 grid grid-cols-2 gap-2 text-[#9ca3af]">
                  <div>C++ / GLSL: <span className="text-white font-bold">+95</span></div>
                  <div>THREE.JS: <span className="text-white font-bold">+92</span></div>
                  <div>AIML MATH: <span className="text-white font-bold">+88</span></div>
                  <div>VFX / 3D: <span className="text-white font-bold">+90</span></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Bio, Doodled Avatar & Socials */}
          <div className="lg:col-span-7">
            <span className="font-mono text-xs font-bold tracking-widest text-[#C084FC] uppercase">
              HELLO, MEET
            </span>

            <h2 className="mt-2 font-sans text-5xl font-black tracking-tight text-white sm:text-6xl md:text-7xl">
              Ravi Solanki <span className="font-serif italic font-normal text-[#A855F7] text-3xl sm:text-4xl">a.k.a. WebDevRavi</span>
            </h2>

            <p className="mt-6 font-sans text-base leading-relaxed text-[#d1d5db] sm:text-lg">
              A Software Engineer focused on <span className="font-bold text-[#A855F7]">real-time 3D game engines</span>, <span className="font-bold text-[#4B7BFF]">procedural graphics architecture</span>, and a deep enthusiasm for <span className="font-bold text-[#FCDD0D]">machine learning foundations</span>. Skilled in C++, Three.js, shaders, and creative direction under the Blue3D sub-brand.
            </p>

            {/* Social Channels Row */}
            <div className="mt-8 flex flex-wrap items-center gap-4 font-mono text-xs">
              <a
                href="https://github.com/WebDevRavi"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sound.playClick(900, 0.02)}
                className="flex items-center gap-2 rounded-full border border-[#2d223f] bg-[#1a1426] px-4 py-2 font-bold text-white transition-all hover:border-white"
              >
                <span>🐙</span>
                <span>@WebDevRavi</span>
              </a>

              <a
                href="https://www.linkedin.com/in/ravi-solanki-bb2420375/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sound.playClick(900, 0.02)}
                className="flex items-center gap-2 rounded-full border border-[#2d223f] bg-[#1a1426] px-4 py-2 font-bold text-[#4B7BFF] transition-all hover:border-[#4B7BFF]"
              >
                <span>💼</span>
                <span>Ravi Solanki</span>
              </a>

              <a
                href="https://www.instagram.com/blue3d_/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sound.playClick(900, 0.02)}
                className="flex items-center gap-2 rounded-full border border-[#2d223f] bg-[#1a1426] px-4 py-2 font-bold text-[#FCDD0D] transition-all hover:border-[#FCDD0D]"
              >
                <span>📷</span>
                <span>@blue3d_</span>
              </a>

              <a
                href="mailto:contact@ravisolanki.dev"
                onClick={() => sound.playPowerUp()}
                className="flex items-center gap-2 rounded-full border border-[#2d223f] bg-[#1a1426] px-4 py-2 font-bold text-[#EC4899] transition-all hover:border-[#EC4899]"
              >
                <span>✉️</span>
                <span>contact@ravisolanki.dev</span>
              </a>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. TECHNICAL SKILLS: TILTED CARNIVAL ADMISSION TICKETS + TOOLS */}
        {/* ========================================================================= */}
        <div className="mt-32 border-t-2 border-[#2d223f] pt-20">
          <div className="mb-12 text-center">
            <span className="font-mono text-xs font-bold tracking-widest text-[#C084FC] uppercase">
              VERIFIED SPECIALIZATIONS
            </span>
            <h3 className="mt-2 font-sans text-3xl font-black text-white sm:text-5xl">
              Technical Skills & Toolchain
            </h3>
          </div>

          {/* Tilted Ticket Stubs Grid (Direct Muhammad Risal Homage) */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            {tickets.map((t) => (
              <div
                key={t.name}
                onMouseEnter={() => sound.playClick(1100, 0.03)}
                className={`group flex items-center gap-3 cursor-pointer rounded-2xl border-3 border-dashed bg-[#1a1426] px-6 py-4 shadow-xl transition-all duration-300 hover:rotate-0 hover:scale-110 hover:shadow-2xl ${t.tilt}`}
                style={{ borderColor: t.color }}
              >
                <span className="text-2xl">{t.icon}</span>
                <span
                  className="font-mono text-sm font-black tracking-wider uppercase"
                  style={{ color: t.color }}
                >
                  {t.name}
                </span>
                <span className="rounded-full bg-white/10 px-2 py-0.5 font-mono text-[10px] text-white">
                  ADMIT 1
                </span>
              </div>
            ))}
          </div>

          {/* Used Software Squircles */}
          <div className="mt-20">
            <span className="block text-center font-mono text-xs font-bold tracking-widest text-[#9ca3af] uppercase">
              USED SOFTWARE & ARCHITECTURAL TOOLS
            </span>

            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8">
              {tools.map((tool) => (
                <div
                  key={tool.name}
                  onMouseEnter={() => sound.playClick(950, 0.02)}
                  className="flex flex-col items-center justify-center rounded-2xl border-2 border-[#2d223f] bg-[#140f20] p-4 text-center transition-all hover:scale-105 hover:border-white hover:shadow-lg"
                >
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-xl font-mono text-sm font-black text-white shadow-md"
                    style={{ backgroundColor: tool.color }}
                  >
                    {tool.name.slice(0, 3)}
                  </div>
                  <span className="mt-3 font-sans text-xs font-bold text-white">
                    {tool.name}
                  </span>
                  <span className="font-mono text-[10px] text-[#9ca3af]">
                    {tool.category}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Experience Card + Softskill Radar (Risal Layout) */}
          <div className="mt-20 grid grid-cols-1 gap-8 lg:grid-cols-12">
            {/* Education & Track Card */}
            <div className="rounded-3xl border-2 border-[#2d223f] bg-[#140f20] p-8 shadow-xl lg:col-span-7">
              <div className="flex items-center gap-3">
                <span className="text-3xl">🎓</span>
                <div>
                  <h4 className="font-sans text-2xl font-black text-white">Education & Production</h4>
                  <span className="font-mono text-xs text-[#C084FC]">ACADEMIC & CLIENT TRACK</span>
                </div>
              </div>

              <div className="mt-8 space-y-6 font-mono text-xs">
                <div className="border-l-2 border-[#A855F7] pl-4">
                  <span className="text-[#C084FC] font-bold">2024 - 2028 // ACTIVE DEGREE</span>
                  <p className="font-sans text-sm font-bold text-white mt-1">
                    B.Tech Computer Science & Engineering (AIML)
                  </p>
                  <p className="text-[#9ca3af] mt-1 font-sans text-xs">
                    Curriculum focus on algorithmic problem solving, linear algebra, multivariate calculus, and pointer-level data control in C++.
                  </p>
                </div>

                <div className="border-l-2 border-[#4B7BFF] pl-4">
                  <span className="text-[#4B7BFF] font-bold">CLIENT PRODUCTION WORK</span>
                  <p className="font-sans text-sm font-bold text-white mt-1">
                    Shree Plys & Puneet Sir Ki Pathshala
                  </p>
                  <p className="text-[#9ca3af] mt-1 font-sans text-xs">
                    Engineered commercial catalog website and educational resource distribution platform with responsive layout and 0ms latency.
                  </p>
                </div>
              </div>
            </div>

            {/* Softskill Circular Dial / Compass */}
            <div className="flex flex-col items-center justify-center rounded-3xl border-2 border-[#2d223f] bg-[#140f20] p-8 text-center shadow-xl lg:col-span-5">
              <span className="font-mono text-xs font-bold tracking-widest text-[#C084FC] uppercase">
                ENGINEERING ETHOS
              </span>
              <h4 className="mt-2 font-sans text-2xl font-black text-white">
                Soft Skills & Disciplines
              </h4>

              {/* Graphic Dial Ring */}
              <div className="relative my-8 flex h-44 w-44 items-center justify-center rounded-full border-4 border-dashed border-[#A855F7]/40 bg-[#1e172e] shadow-[0_0_30px_rgba(168,85,247,0.2)]">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#A855F7] text-3xl text-white shadow-lg">
                  🔥
                </div>

                {/* Satellite Labels */}
                <div className="absolute -top-3 rounded-full bg-black/80 px-2.5 py-0.5 font-mono text-[9px] font-bold text-[#FCDD0D] border border-[#FCDD0D]/40">
                  PROBLEM SOLVING
                </div>
                <div className="absolute -bottom-3 rounded-full bg-black/80 px-2.5 py-0.5 font-mono text-[9px] font-bold text-[#EC4899] border border-[#EC4899]/40">
                  TACTILE GAME FEEL
                </div>
                <div className="absolute -left-4 rounded-full bg-black/80 px-2.5 py-0.5 font-mono text-[9px] font-bold text-[#4B7BFF] border border-[#4B7BFF]/40">
                  MATH RIGOR
                </div>
                <div className="absolute -right-4 rounded-full bg-black/80 px-2.5 py-0.5 font-mono text-[9px] font-bold text-[#10B981] border border-[#10B981]/40">
                  ZERO SLOP
                </div>
              </div>

              <p className="max-w-xs font-mono text-[11px] text-[#9ca3af]">
                Fast learner with strong adaptability across game engines, mathematical frameworks, and visual pipelines.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
