'use client';

import React, { useState } from 'react';
import { sound } from '@/utils/audio';

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const email = 'contact@ravisolanki.dev';

  const copyEmail = () => {
    try {
      if (typeof navigator !== 'undefined' && navigator.clipboard) {
        navigator.clipboard.writeText(email).catch(() => {});
      }
    } catch {
      // Fallback
    }
    setCopied(true);
    sound.playPowerUp();
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="w-full px-6 py-28 md:px-12 md:py-44">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 flex items-center justify-between border-b border-[#1f2228] pb-6 font-mono text-xs text-[#9ca3af]">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[#FCDD0D]" />
            <span className="tracking-widest uppercase font-semibold text-white">06 // INITIATE TRANSMISSION</span>
          </div>
          <span>COMMUNICATION CHANNEL</span>
        </div>

        <div className="max-w-4xl">
          <span className="font-mono text-xs font-semibold tracking-widest text-[#FCDD0D] uppercase">
            Available For Technical Roles & Game Systems
          </span>

          <h2 className="mt-4 font-sans text-5xl font-black tracking-tight text-white sm:text-7xl md:text-8xl">
            LET&apos;S BUILD SOMETHING.
          </h2>

          <p className="mt-6 max-w-2xl font-sans text-base leading-relaxed text-[#9ca3af] md:text-lg">
            Whether you need a high-performance 3D WebGL engine, procedural game mechanics, machine learning foundations, or creative direction for interactive media—I am always ready to build.
          </p>

          {/* Interactive One-Click Email Trigger */}
          <div className="mt-12 flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${email}`}
              onClick={() => sound.playPowerUp()}
              className="rounded bg-white px-6 py-3.5 font-mono text-xs font-bold text-black transition-all hover:bg-[#FCDD0D] hover:shadow-[0_0_25px_rgba(252,221,13,0.35)]"
            >
              SEND DIRECT EMAIL ↗
            </a>

            <button
              onClick={copyEmail}
              className={`rounded border px-5 py-3.5 font-mono text-xs font-semibold transition-all ${
                copied
                  ? 'border-emerald-500 bg-emerald-500/10 text-emerald-400'
                  : 'border-[#27272a] bg-[#111215] text-[#d1d5db] hover:border-white hover:text-white'
              }`}
            >
              {copied ? '✓ COPIED: contact@ravisolanki.dev' : 'COPY EMAIL ADDRESS 📋'}
            </button>
          </div>

          {/* Connected Verified Channels */}
          <div className="mt-16 flex flex-wrap items-center gap-8 border-t border-[#1f2228] pt-10 font-mono text-xs tracking-wider md:gap-12 md:text-sm">
            <a
              href="https://github.com/WebDevRavi"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playClick(900, 0.02)}
              className="text-[#9ca3af] transition-colors hover:text-white"
            >
              GITHUB // @WebDevRavi ↗
            </a>
            <a
              href="https://www.linkedin.com/in/ravi-solanki-bb2420375/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playClick(900, 0.02)}
              className="text-[#9ca3af] transition-colors hover:text-[#4B7BFF]"
            >
              LINKEDIN // RAVI SOLANKI ↗
            </a>
            <a
              href="https://www.instagram.com/blue3d_/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playClick(900, 0.02)}
              className="text-[#9ca3af] transition-colors hover:text-[#FCDD0D]"
            >
              INSTAGRAM // @blue3d_ ↗
            </a>
            <a
              href="https://www.instagram.com/ravi_solanki_1567/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playClick(900, 0.02)}
              className="text-[#9ca3af] transition-colors hover:text-white"
            >
              PERSONAL // @ravi_solanki_1567 ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
