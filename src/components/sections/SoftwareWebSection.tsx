'use client';

import React from 'react';
import { CLIENT_WORK } from '@/data/projects';
import { sound } from '@/utils/audio';

export function SoftwareWebSection() {
  const shreeplys = CLIENT_WORK[0];

  return (
    <section id="work" className="w-full px-6 py-20 md:px-12 md:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 flex items-center justify-between border-b border-[#1f2228] pb-6 font-mono text-xs text-[#9ca3af]">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[#4B7BFF]" />
            <span className="tracking-widest uppercase font-semibold text-white">03 // CLIENT & WEB PRODUCTION</span>
          </div>
          <span>PRODUCTION SYSTEMS</span>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Card 1: SHREE PLYS */}
          <div className="rounded-xl border border-[#27272a] bg-[#0c0d10] p-8 shadow-xl transition-all hover:border-[#4B7BFF]/40">
            <div className="flex items-center justify-between font-mono text-[10px] text-[#6b7280]">
              <span>CLIENT SYSTEM 01</span>
              <span className="text-emerald-400">● LIVE IN PRODUCTION</span>
            </div>

            <h3 className="mt-4 font-sans text-3xl font-black tracking-tight text-white sm:text-4xl">
              {shreeplys.title}
            </h3>

            <p className="mt-4 font-sans text-sm leading-relaxed text-[#9ca3af]">
              {shreeplys.summary}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-2 font-mono text-xs">
              <span className="rounded bg-[#16181f] px-2.5 py-1 text-white border border-[#272a33]">HTML5 Semantic</span>
              <span className="rounded bg-[#16181f] px-2.5 py-1 text-white border border-[#272a33]">Custom CSS Grid</span>
              <span className="rounded bg-[#16181f] px-2.5 py-1 text-white border border-[#272a33]">JavaScript ES6</span>
              <span className="rounded bg-[#16181f] px-2.5 py-1 text-white border border-[#272a33]">SEO & CWV</span>
            </div>

            <div className="mt-8 flex items-center gap-6 border-t border-[#1f2228] pt-6 font-mono text-xs">
              {shreeplys.liveUrl && (
                <a
                  href={shreeplys.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => sound.playPowerUp()}
                  className="rounded bg-white px-4 py-2 font-bold text-black transition-all hover:bg-[#4B7BFF] hover:text-white"
                >
                  VISIT PRODUCTION SITE ↗
                </a>
              )}
              {shreeplys.githubUrl && (
                <a
                  href={shreeplys.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#9ca3af] hover:text-white transition-colors"
                >
                  SOURCE CODE ↗
                </a>
              )}
            </div>
          </div>

          {/* Card 2: PUNEET SIR KI PATHSHALA */}
          <div className="rounded-xl border border-[#27272a] bg-[#0c0d10] p-8 shadow-xl transition-all hover:border-[#FCDD0D]/40">
            <div className="flex items-center justify-between font-mono text-[10px] text-[#6b7280]">
              <span>CLIENT SYSTEM 02</span>
              <span className="text-emerald-400">● LIVE IN PRODUCTION</span>
            </div>

            <h3 className="mt-4 font-sans text-3xl font-black tracking-tight text-white sm:text-4xl">
              Puneet Sir Ki Pathshala
            </h3>

            <p className="mt-4 font-sans text-sm leading-relaxed text-[#9ca3af]">
              Educational physics web platform designed for lecture resource distribution, student syllabus tracking, and direct teacher-to-student content routing.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-2 font-mono text-xs">
              <span className="rounded bg-[#16181f] px-2.5 py-1 text-white border border-[#272a33]">Responsive Layout</span>
              <span className="rounded bg-[#16181f] px-2.5 py-1 text-white border border-[#272a33]">Fast Load Optimizations</span>
              <span className="rounded bg-[#16181f] px-2.5 py-1 text-white border border-[#272a33]">Client Resource Hub</span>
            </div>

            <div className="mt-8 flex items-center gap-6 border-t border-[#1f2228] pt-6 font-mono text-xs">
              <a
                href="https://webdevravi.github.io/Puneet_sir_ki_pathshala/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sound.playPowerUp()}
                className="rounded bg-white px-4 py-2 font-bold text-black transition-all hover:bg-[#FCDD0D]"
              >
                VISIT PLATFORM ↗
              </a>
              <a
                href="https://github.com/WebDevRavi/Puneet_sir_ki_pathshala"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#9ca3af] hover:text-white transition-colors"
              >
                SOURCE CODE ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
