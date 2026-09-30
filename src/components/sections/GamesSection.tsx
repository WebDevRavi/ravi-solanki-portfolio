'use client';

import React from 'react';
import { VortexShowcase } from './VortexShowcase';
import { TypeRushShowcase } from './TypeRushShowcase';
import { ArcadeVault } from './ArcadeVault';

export function GamesSection() {
  return (
    <section id="games" className="w-full px-6 py-20 md:px-12 md:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-20 flex items-center justify-between border-b border-[#1f2228] pb-6 font-mono text-xs text-[#9ca3af]">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[#4B7BFF]" />
            <span className="tracking-widest uppercase font-semibold text-white">01 // GAME SYSTEMS & PLAYABLE BUILDS</span>
          </div>
          <span>5 PLAYABLE EXPERIENCES</span>
        </div>

        {/* 1. Vortex Glide (3D WebGL Flight Stage + 4K Run) */}
        <VortexShowcase />

        {/* 2. TypeRush (Playable Typographic Mechanical Micro-Arcade) */}
        <TypeRushShowcase />

        {/* 3. The Arcade Vault (Cartridge Rack & Live Stroop Tester) */}
        <ArcadeVault />
      </div>
    </section>
  );
}
