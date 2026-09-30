'use client';

import React from 'react';
import { sound } from '@/utils/audio';

export function Footer() {
  const scrollToTop = () => {
    sound.playPowerUp();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full border-t border-[#1f2228] px-6 py-12 md:px-12 bg-[#060709]">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 md:flex-row md:items-center">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-white">
            <span>RAVI SOLANKI</span>
            <span className="text-[#6b7280]">·</span>
            <span className="text-[#4B7BFF]">AI/ML & GAME DEVELOPMENT</span>
          </div>
          <p className="mt-1 font-mono text-[11px] text-[#6b7280]">
            NO SLOP · VERIFIED BUILDS · 60 FPS WEBGL & WEB AUDIO RUNTIME
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-6 font-mono text-xs text-[#9ca3af]">
          <a
            href="https://github.com/WebDevRavi"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            GITHUB ↗
          </a>
          <a
            href="https://www.linkedin.com/in/ravi-solanki-bb2420375/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#4B7BFF] transition-colors"
          >
            LINKEDIN ↗
          </a>
          <a
            href="https://www.instagram.com/blue3d_/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#FCDD0D] transition-colors"
          >
            BLUE3D ↗
          </a>

          <button
            onClick={scrollToTop}
            className="rounded border border-[#27272a] bg-[#111215] px-3 py-1 text-white hover:border-[#4B7BFF] hover:bg-[#181a20] transition-all"
          >
            TOP ↑
          </button>

          <span className="text-[#4b5563]">© 2026 RAVI SOLANKI</span>
        </div>
      </div>
    </footer>
  );
}
