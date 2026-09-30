'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Project } from '@/data/projects';
import { SceneContainer } from './SceneContainer';
import { VortexTunnelArtifact } from './VortexTunnelArtifact';

interface ProjectHeroMediaProps {
  project: Project;
}

export function ProjectHeroMedia({ project }: ProjectHeroMediaProps) {
  const [viewMode, setViewMode] = useState<'video' | '3d'>('video');
  const has3DSimulation = project.slug === 'vortex-glide';

  return (
    <div className="mb-14">
      {/* 3D / Video Mode Controls */}
      {has3DSimulation && (
        <div className="mb-3 flex items-center justify-between font-mono text-xs">
          <span className="text-[var(--muted)]">Display Mode</span>
          <div className="flex rounded border border-[var(--border)] bg-[var(--surface)] p-0.5">
            <button
              onClick={() => setViewMode('video')}
              className={`rounded px-3 py-1 text-[11px] transition-all ${
                viewMode === 'video'
                  ? 'bg-[var(--surface-elevated)] font-semibold text-[var(--text)]'
                  : 'text-[var(--muted)] hover:text-[var(--text)]'
              }`}
            >
              Gameplay Video
            </button>
            <button
              onClick={() => setViewMode('3d')}
              className={`rounded px-3 py-1 text-[11px] transition-all ${
                viewMode === '3d'
                  ? 'bg-[var(--surface-elevated)] font-semibold text-[var(--yellow)]'
                  : 'text-[var(--muted)] hover:text-[var(--text)]'
              }`}
            >
              Interactive 3D Tunnel
            </button>
          </div>
        </div>
      )}

      {/* Media Canvas Box */}
      <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-[var(--border)] bg-black">
        {project.slug === 'tower-game' ? (
          <div className="relative h-full w-full bg-black">
            <iframe
              src="https://tower-games.vercel.app/"
              title="Tower Game Live 3D Arcade"
              className="h-full w-full border-0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope"
            />
            <div className="pointer-events-none absolute bottom-3 left-3 rounded bg-black/75 px-2.5 py-1 font-mono text-[10px] text-[#00d4ff] backdrop-blur-sm border border-[#00d4ff]/30">
              Live Three.js Physics Arcade · Click / Tap to Stack Blocks
            </div>
          </div>
        ) : viewMode === '3d' && has3DSimulation ? (
          <div className="h-full w-full">
            <SceneContainer>
              <VortexTunnelArtifact />
            </SceneContainer>
            <div className="pointer-events-none absolute bottom-3 left-3 rounded bg-black/60 px-2.5 py-1 font-mono text-[10px] text-[var(--yellow)] backdrop-blur-sm">
              Hover to accelerate tunnel speed · Decagonal procedural geometry
            </div>
          </div>
        ) : project.heroMedia.type === 'video' ? (
          <video
            src={project.heroMedia.src}
            autoPlay
            loop
            muted
            playsInline
            controls
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="relative flex h-full w-full items-center justify-center p-8">
            <Image
              src={project.heroMedia.src}
              alt={project.title}
              fill
              sizes="(max-width: 1024px) 100vw, 900px"
              className="object-contain p-8"
              priority
            />
          </div>
        )}
      </div>
    </div>
  );
}
