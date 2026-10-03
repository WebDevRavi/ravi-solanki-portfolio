'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { sound } from '@/utils/audio';

const PRACTICE_SNIPPET = 'TYPEWRITER ARCHITECTURE';

export const TypeRushFeature: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace') {
      sound.playClick(400, 0.03);
      return;
    }
    if (e.key.length === 1) {
      // Native procedural mechanical sound feedback
      sound.playTyping(700 + typedText.length * 20);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.toUpperCase();
    if (val.length <= PRACTICE_SNIPPET.length) {
      setTypedText(val);
    }
  };

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <section
      id="typerush"
      className="relative w-full max-w-6xl mx-auto pl-8 pr-4 sm:px-8 md:px-12 py-20 md:py-28"
    >
      {/* Editorial Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2 font-mono text-xs tracking-widest text-[#f59e0b] uppercase">
          <span>02 / FEATURED GAME</span>
          <span className="text-zinc-600">·</span>
          <span>TACTILE TYPING ARCADE</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
          <h2 className="font-mono text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            TypeRush
          </h2>
          <p className="font-mono text-xs sm:text-sm text-zinc-400">
            React · TypeScript · Procedural Web Audio
          </p>
        </div>
      </div>

      {/* Editorial Visual Composition with Typewriter Identity */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-8">
        {/* Visual Screenshot Pane */}
        <div className="lg:col-span-7 relative aspect-[16/10] rounded-xl overflow-hidden bg-[#0c0d12] border border-white/10 shadow-2xl group">
          <Image
            src="/games/type-rush.png"
            alt="TypeRush Typewriter Speed Typing Interface"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            sizes="(max-width: 1024px) 100vw, 60vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#08070d]/80 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Tactile Acoustic Preview Widget */}
        <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-xl bg-[#0c0d14] border border-white/10">
          <div className="mb-6">
            <span className="font-mono text-[10px] tracking-widest uppercase text-zinc-500 block mb-2">
              TACTILE ACOUSTIC SIMULATOR
            </span>
            <p className="font-mono text-xs text-zinc-400 leading-relaxed mb-4">
              Click below to test the native procedural Web Audio mechanical feedback directly in your browser:
            </p>

            {/* Interactive Typewriter Field */}
            <div
              onClick={focusInput}
              className={`p-4 rounded-lg bg-black/60 border cursor-text transition-all ${
                isFocused ? 'border-[#f59e0b] shadow-[0_0_15px_rgba(245,158,11,0.15)]' : 'border-white/10'
              }`}
            >
              <div className="font-mono text-sm tracking-widest mb-1 select-none">
                {PRACTICE_SNIPPET.split('').map((char, i) => {
                  const typedChar = typedText[i];
                  let colorClass = 'text-zinc-600';
                  if (typedChar !== undefined) {
                    colorClass = typedChar === char ? 'text-emerald-400' : 'text-red-400';
                  }
                  return (
                    <span key={i} className={colorClass}>
                      {char}
                    </span>
                  );
                })}
              </div>

              <input
                ref={inputRef}
                type="text"
                value={typedText}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                placeholder="Type here..."
                className="w-full bg-transparent font-mono text-xs text-amber-300 outline-none placeholder:text-zinc-700"
              />
            </div>
          </div>

          <div className="font-mono text-[11px] text-zinc-500 flex items-center justify-between border-t border-white/5 pt-4">
            <span>SYNTH: AUDIO OSCILLATOR</span>
            <span>{typedText.length} / {PRACTICE_SNIPPET.length} CHARS</span>
          </div>
        </div>
      </div>

      {/* Minimal Copy + Direct Actions */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 border-t border-white/5 pt-6">
        <p className="font-sans text-sm sm:text-base text-zinc-300 max-w-2xl leading-relaxed">
          A minimalist typewriter-inspired typing speed game. Built with native Web Audio mechanical acoustic feedback, dynamic non-repeating lexicon streaming, and strict input integrity guards.
        </p>

        <div className="flex items-center gap-3 shrink-0">
          <a
            href="https://github.com/WebDevRavi/Type_Dash"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sound.playClick(1000, 0.02)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white text-zinc-950 font-sans text-xs sm:text-sm font-semibold hover:bg-zinc-200 transition-all hover:scale-[1.02]"
          >
            <span>View Code on GitHub</span>
            <span className="text-zinc-500">↗</span>
          </a>

          <Link
            href="/games/typerush"
            onClick={() => sound.playClick(880, 0.02)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/[0.05] text-zinc-200 border border-white/10 font-sans text-xs sm:text-sm font-medium hover:bg-white/[0.1] hover:text-white transition-all"
          >
            <span>Project Details</span>
            <span className="text-zinc-400">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};
