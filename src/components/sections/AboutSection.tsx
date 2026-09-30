'use client';

import React, { useState } from 'react';
import { sound } from '@/utils/audio';

export function AboutSection() {
  const [activeTab, setActiveTab] = useState<'profile' | 'stack' | 'philosophy'>('profile');

  const handleTabClick = (tab: 'profile' | 'stack' | 'philosophy') => {
    setActiveTab(tab);
    sound.playClick(900, 0.03);
  };

  return (
    <section id="about" className="w-full px-6 py-24 md:px-12 md:py-36">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 flex items-center justify-between border-b border-[#1f2228] pb-6 font-mono text-xs text-[#9ca3af]">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[#4B7BFF]" />
            <span className="tracking-widest uppercase font-semibold text-white">05 // SYSTEM BACKGROUND & TELEMETRY</span>
          </div>
          <span>BHOPAL, INDIA</span>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Left Column: Personal Narrative */}
          <div className="lg:col-span-5">
            <span className="font-mono text-xs font-semibold tracking-widest text-[#6b7280] uppercase">
              Identity & Origin
            </span>

            <h2 className="mt-3 font-sans text-4xl font-black tracking-tight text-white sm:text-6xl">
              RAVI SOLANKI
            </h2>

            <p className="mt-4 font-mono text-base font-semibold text-[#4B7BFF]">
              Software Engineer · AI/ML Specialization · Game Dev
            </p>

            <p className="mt-6 font-sans text-sm leading-relaxed text-[#9ca3af] md:text-base">
              I am a developer based in Bhopal, India, pursuing a B.Tech in Computer Science & Engineering with an AI/ML specialization. I specialize in the intersection of real-time graphics, game feel, algorithmic optimization, and visual arts.
            </p>

            <p className="mt-4 font-sans text-sm leading-relaxed text-[#9ca3af]">
              I believe in building systems from the ground up: understanding memory layout before frameworks, mastering linear algebra before high-level ML wrappers, and crafting tactile experiences where code and visuals merge seamlessly.
            </p>

            {/* Quick Stats Grid */}
            <div className="mt-10 grid grid-cols-2 gap-4 font-mono text-xs">
              <div className="rounded border border-[#1f2228] bg-[#0c0d10] p-4">
                <span className="text-[10px] text-[#6b7280] block">RESIDENCE</span>
                <span className="text-white font-bold mt-1 block">Bhopal, India (IST)</span>
              </div>
              <div className="rounded border border-[#1f2228] bg-[#0c0d10] p-4">
                <span className="text-[10px] text-[#6b7280] block">FOCUS DEGREE</span>
                <span className="text-white font-bold mt-1 block">B.Tech CSE (AIML)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Developer Terminal */}
          <div className="flex flex-col justify-between rounded-xl border border-[#27272a] bg-[#090a0d] shadow-2xl lg:col-span-7">
            {/* Terminal Window Chrome */}
            <div className="flex items-center justify-between border-b border-[#1f2228] bg-[#101115] px-4 py-3 font-mono text-xs">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-[#ef4444]" />
                <span className="h-3 w-3 rounded-full bg-[#eab308]" />
                <span className="h-3 w-3 rounded-full bg-[#22c55e]" />
                <span className="ml-3 text-[#6b7280]">ravi@bhopal-node:~$</span>
              </div>

              {/* Terminal Tab Switchers */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleTabClick('profile')}
                  className={`rounded px-2.5 py-1 text-[11px] font-bold transition-all ${
                    activeTab === 'profile'
                      ? 'bg-[#4B7BFF] text-white'
                      : 'text-[#9ca3af] hover:text-white'
                  }`}
                >
                  history.log
                </button>
                <button
                  onClick={() => handleTabClick('stack')}
                  className={`rounded px-2.5 py-1 text-[11px] font-bold transition-all ${
                    activeTab === 'stack'
                      ? 'bg-[#FCDD0D] text-black'
                      : 'text-[#9ca3af] hover:text-white'
                  }`}
                >
                  toolchain.env
                </button>
                <button
                  onClick={() => handleTabClick('philosophy')}
                  className={`rounded px-2.5 py-1 text-[11px] font-bold transition-all ${
                    activeTab === 'philosophy'
                      ? 'bg-emerald-500 text-black'
                      : 'text-[#9ca3af] hover:text-white'
                  }`}
                >
                  ethos.md
                </button>
              </div>
            </div>

            {/* Terminal Body */}
            <div className="p-6 font-mono text-xs leading-relaxed text-[#d1d5db]">
              {activeTab === 'profile' && (
                <div className="space-y-4">
                  <div className="text-[#6b7280]">// TIMELINE OF TECHNICAL EVOLUTION</div>
                  <div>
                    <span className="text-[#4B7BFF] font-bold">[2021] C & C++ FOUNDATIONS:</span>
                    <p className="text-[#9ca3af] mt-1 pl-4 border-l border-[#1f2228]">
                      Pointer arithmetic, memory hierarchies, data structures, and algorithmic complexity.
                    </p>
                  </div>
                  <div>
                    <span className="text-[#4B7BFF] font-bold">[2022] MATHEMATICS & PYTHON:</span>
                    <p className="text-[#9ca3af] mt-1 pl-4 border-l border-[#1f2228]">
                      Linear algebra, matrix factorizations, multivariate gradients, and numeric pipelines.
                    </p>
                  </div>
                  <div>
                    <span className="text-[#4B7BFF] font-bold">[2023] BROWSER GRAPHICS:</span>
                    <p className="text-[#9ca3af] mt-1 pl-4 border-l border-[#1f2228]">
                      DOM optimization, Three.js scenes, custom render loops, and Web Audio API synthesis.
                    </p>
                  </div>
                  <div>
                    <span className="text-[#4B7BFF] font-bold">[2024-2026] BLUE3D & REAL-TIME GAMES:</span>
                    <p className="text-[#9ca3af] mt-1 pl-4 border-l border-[#1f2228]">
                      Procedural game generation, shader development, 4K visual direction, and AIML degree specializations.
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'stack' && (
                <div className="space-y-4">
                  <div className="text-[#6b7280]">// VERIFIED REPERTOIRE & TOOLCHAIN</div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-[#FCDD0D] font-bold">LANGUAGES:</span>
                      <ul className="mt-1 list-disc list-inside text-[#9ca3af]">
                        <li>C++ (STL, Templates)</li>
                        <li>C (Systems)</li>
                        <li>Python (NumPy, PyTorch)</li>
                        <li>TypeScript / JavaScript</li>
                        <li>GLSL / WebGL Shaders</li>
                      </ul>
                    </div>
                    <div>
                      <span className="text-[#FCDD0D] font-bold">ENGINES & GRAPHICS:</span>
                      <ul className="mt-1 list-disc list-inside text-[#9ca3af]">
                        <li>Three.js / React Three Fiber</li>
                        <li>WebGL2 Pipeline</li>
                        <li>Web Audio API</li>
                        <li>Blender / 3D Modeling</li>
                        <li>Davinci Resolve / Graded VFX</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'philosophy' && (
                <div className="space-y-4">
                  <div className="text-[#6b7280]">// ENGINEERING ETHOS</div>
                  <p className="text-[#9ca3af]">
                    1. <strong className="text-white">Zero Fake Claims:</strong> No inflated titles or synthetic benchmark statistics. Every project links directly to live builds and repository commits.
                  </p>
                  <p className="text-[#9ca3af]">
                    2. <strong className="text-white">Performance-First:</strong> 60 FPS minimum budget. Demand rendering over infinite tick loops. Zero layout shift architecture.
                  </p>
                  <p className="text-[#9ca3af]">
                    3. <strong className="text-white">Aesthetic Discipline:</strong> Code and visual design are not separate disciplines. Crafting physics, lighting, and sound makes software memorable.
                  </p>
                </div>
              )}
            </div>

            {/* Terminal Footer */}
            <div className="border-t border-[#1f2228] bg-[#0c0d10] px-4 py-2 font-mono text-[10px] text-[#6b7280] flex items-center justify-between">
              <span>STATUS: ONLINE & COMPILING</span>
              <span>HOST: BHOPAL_CORE_01</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
