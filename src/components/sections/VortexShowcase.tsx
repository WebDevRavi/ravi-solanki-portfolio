'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { SceneContainer } from '@/components/canvas/SceneContainer';
import { VortexTunnelCanvas } from '@/components/canvas/VortexTunnelCanvas';
import { PROJECTS } from '@/data/projects';
import { sound } from '@/utils/audio';

export function VortexShowcase() {
  const [viewMode, setViewMode] = useState<'interactive' | 'video'>('interactive');
  const vortexGlide = PROJECTS.find((p) => p.slug === 'vortex-glide')!;

  const handleModeSwitch = (mode: 'interactive' | 'video') => {
    setViewMode(mode);
    sound.playClick(1000, 0.05);
  };

  return (
    <div className="mb-32">
      {/* Title & Header Bar */}
      <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <div className="flex items-center gap-3">
            <span className="rounded bg-[#4B7BFF]/15 px-2.5 py-0.5 font-mono text-[10px] font-bold tracking-wider text-[#4B7BFF] uppercase border border-[#4B7BFF]/30">
              FEATURED 01 // 3D HIGH-SPEED ARCADE
            </span>
            <span className="font-mono text-xs text-[#6b7280]">
              STABLE BUILD 1.0.4
            </span>
          </div>
          <h2 className="mt-3 font-sans text-4xl font-black tracking-tight text-white sm:text-6xl md:text-7xl">
            VORTEX GLIDE
          </h2>
        </div>

        {/* View Mode Switcher + Action Links */}
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center rounded-lg border border-[#27272a] bg-[#111215] p-1 font-mono text-xs">
            <button
              onClick={() => handleModeSwitch('interactive')}
              className={`rounded px-3 py-1.5 font-medium transition-all ${
                viewMode === 'interactive'
                  ? 'bg-[#4B7BFF] text-white shadow-md'
                  : 'text-[#9ca3af] hover:text-white'
              }`}
            >
              🎮 LIVE 3D STAGE
            </button>
            <button
              onClick={() => handleModeSwitch('video')}
              className={`rounded px-3 py-1.5 font-medium transition-all ${
                viewMode === 'video'
                  ? 'bg-[#FCDD0D] text-black shadow-md font-bold'
                  : 'text-[#9ca3af] hover:text-white'
              }`}
            >
              🎬 4K RUNPLAY
            </button>
          </div>

          <div className="flex items-center gap-4 font-mono text-xs">
            <a
              href={vortexGlide.liveUrl || 'https://webdevravi.github.io/VortexGlide/'}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playPowerUp()}
              className="rounded bg-white px-4 py-2 font-bold text-black transition-all hover:bg-[#4B7BFF] hover:text-white"
            >
              PLAY FULL GAME ↗
            </a>
            <Link
              href="/games/vortex-glide"
              onClick={() => sound.playClick(900, 0.03)}
              className="text-[#9ca3af] transition-colors hover:text-white"
            >
              TECH SPEC →
            </Link>
            <a
              href={vortexGlide.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6b7280] transition-colors hover:text-white"
            >
              SOURCE ↗
            </a>
          </div>
        </div>
      </div>

      {/* Main Viewport: Either Interactive 3D Canvas or 4K Capture Video */}
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-[#1f2228] bg-[#050608] shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
        {viewMode === 'interactive' ? (
          <div className="relative h-full w-full">
            <SceneContainer>
              <VortexTunnelCanvas />
            </SceneContainer>

            {/* In-Canvas Telemetry HUD Overlay */}
            <div className="pointer-events-none absolute top-4 left-4 z-20 font-mono text-[11px] text-[#4B7BFF]">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#4B7BFF] animate-pulse" />
                <span className="font-bold tracking-wider">ENGINE RUNTIME: ACTIVE</span>
              </div>
              <p className="mt-1 text-[10px] text-[#9ca3af]">MOVE CURSOR TO STEER TUNNEL TRAJECTORY</p>
            </div>

            <div className="pointer-events-none absolute bottom-4 left-4 z-20 hidden items-center gap-6 font-mono text-[11px] text-[#9ca3af] sm:flex">
              <div>
                <span className="text-[#6b7280]">TRACK:</span> 10-SIDED DECAGONAL
              </div>
              <div>
                <span className="text-[#6b7280]">FORWARD VELOCITY:</span> 84.5 M/S
              </div>
              <div>
                <span className="text-[#6b7280]">RENDERER:</span> WEBGL2 (THREE.JS)
              </div>
            </div>

            <div className="pointer-events-none absolute right-4 bottom-4 z-20">
              <span className="rounded bg-black/60 px-2 py-1 font-mono text-[10px] text-[#FCDD0D] border border-[#FCDD0D]/30 backdrop-blur-sm">
                PROCEDURAL TUNNEL SEED: #8942-GLIDE
              </span>
            </div>
          </div>
        ) : (
          <video
            src={vortexGlide.heroMedia.src}
            autoPlay
            loop
            muted
            playsInline
            controls
            className="h-full w-full object-cover"
          />
        )}
      </div>

      {/* Architectural Description Underneath */}
      <div className="mt-6 grid grid-cols-1 gap-6 font-mono text-xs text-[#9ca3af] md:grid-cols-12 md:items-start">
        <p className="font-sans text-sm leading-relaxed text-[#d1d5db] md:col-span-7">
          High-speed 3D tunnel arcade game with modular 10-sided track geometry, continuous forward acceleration from 45 to 135+ m/s, and seeded procedural obstacle generation. Engineered in vanilla Three.js without physics engine overhead.
        </p>

        <div className="flex flex-wrap items-center gap-2 md:col-span-5 md:justify-end">
          <span className="rounded bg-[#14161b] px-2.5 py-1 text-white border border-[#272a33]">Three.js</span>
          <span className="rounded bg-[#14161b] px-2.5 py-1 text-white border border-[#272a33]">WebGL2</span>
          <span className="rounded bg-[#14161b] px-2.5 py-1 text-white border border-[#272a33]">Web Audio API</span>
          <span className="rounded bg-[#14161b] px-2.5 py-1 text-white border border-[#272a33]">Procedural Math</span>
        </div>
      </div>
    </div>
  );
}
