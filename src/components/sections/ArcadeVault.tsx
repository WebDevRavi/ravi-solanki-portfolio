'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PROJECTS } from '@/data/projects';
import { sound } from '@/utils/audio';

export function ArcadeVault() {
  const mathDash = PROJECTS.find((p) => p.slug === 'math-dash')!;
  const findNumber = PROJECTS.find((p) => p.slug === 'find-the-number')!;
  const colorTrap = PROJECTS.find((p) => p.slug === 'color-trap')!;

  // Interactive Color Trap Stroop Challenge State
  const STROOP_WORDS = [
    { text: 'RED', colorHex: '#4B7BFF', correctName: 'BLUE' },
    { text: 'YELLOW', colorHex: '#ef4444', correctName: 'RED' },
    { text: 'BLUE', colorHex: '#FCDD0D', correctName: 'YELLOW' },
    { text: 'GREEN', colorHex: '#a855f7', correctName: 'PURPLE' },
  ];
  const [stroopIndex, setStroopIndex] = useState(0);
  const [stroopScore, setStroopScore] = useState(0);
  const [feedback, setFeedback] = useState<string | null>(null);

  const handleStroopPick = (pickedColor: string) => {
    const current = STROOP_WORDS[stroopIndex];
    if (pickedColor === current.correctName) {
      sound.playPowerUp();
      setStroopScore((prev) => prev + 1);
      setFeedback('PERFECT! +1');
    } else {
      sound.playClick(200, 0.08);
      setStroopScore(0);
      setFeedback('TRAPPED! RESET');
    }

    setTimeout(() => {
      setStroopIndex((prev) => (prev + 1) % STROOP_WORDS.length);
      setFeedback(null);
    }, 600);
  };

  return (
    <div className="border-t border-[#1f2228] pt-24">
      {/* Title */}
      <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <span className="font-mono text-xs font-semibold tracking-widest text-[#6b7280] uppercase">
            ARCADE REPOSITORY // 03-05
          </span>
          <h3 className="mt-2 font-sans text-3xl font-black tracking-tight text-white sm:text-5xl">
            THE ARCADE VAULT
          </h3>
        </div>
        <p className="max-w-md font-mono text-xs text-[#9ca3af]">
          Tactile 2D game loops exploring arithmetic stress-testing, cognitive interference (Stroop effect), and algorithmic search heuristics.
        </p>
      </div>

      {/* Cartridge Grid */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Cartridge 1: COLOR TRAP (With Live Stroop Test) */}
        <div className="group flex flex-col justify-between rounded-xl border border-[#27272a] bg-[#0c0d10] p-6 shadow-xl transition-all hover:border-[#FCDD0D]/40 hover:-translate-y-1">
          <div>
            <div className="flex items-center justify-between font-mono text-[10px] text-[#6b7280]">
              <span>CART 03 // COGNITIVE</span>
              <span className="text-[#FCDD0D]">STROOP RUNTIME</span>
            </div>

            <h4 className="mt-3 font-sans text-2xl font-bold text-white">
              {colorTrap.title}
            </h4>
            <p className="mt-2 font-sans text-xs leading-relaxed text-[#9ca3af]">
              {colorTrap.tagline}
            </p>

            {/* Interactive Mini Stroop Experiment */}
            <div className="mt-6 rounded-lg border border-[#22252c] bg-[#07080a] p-4 text-center">
              <span className="block font-mono text-[10px] text-[#6b7280] uppercase">
                CLICK THE INK COLOR (NOT WORD):
              </span>

              <div
                className="my-3 font-mono text-3xl font-black tracking-wider transition-colors select-none"
                style={{ color: STROOP_WORDS[stroopIndex].colorHex }}
              >
                {STROOP_WORDS[stroopIndex].text}
              </div>

              {feedback && (
                <div className="font-mono text-[11px] font-bold text-[#FCDD0D] animate-bounce">
                  {feedback}
                </div>
              )}

              <div className="mt-3 grid grid-cols-2 gap-2 font-mono text-[11px]">
                {['RED', 'BLUE', 'YELLOW', 'PURPLE'].map((col) => (
                  <button
                    key={col}
                    onClick={() => handleStroopPick(col)}
                    className="rounded bg-[#18191e] py-1.5 font-bold text-white transition-colors hover:bg-white hover:text-black"
                  >
                    {col}
                  </button>
                ))}
              </div>

              <div className="mt-3 font-mono text-[10px] text-[#6b7280]">
                CURRENT STREAK: <span className="text-white font-bold">{stroopScore}</span>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between border-t border-[#1f2228] pt-4 font-mono text-xs">
            <a
              href={colorTrap.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-[#FCDD0D] hover:underline"
            >
              PLAY GAME ↗
            </a>
            <Link
              href={`/games/${colorTrap.slug}`}
              className="text-[#9ca3af] hover:text-white"
            >
              CASE STUDY →
            </Link>
          </div>
        </div>

        {/* Cartridge 2: MATH DASH */}
        <div className="group flex flex-col justify-between rounded-xl border border-[#27272a] bg-[#0c0d10] p-6 shadow-xl transition-all hover:border-[#4B7BFF]/40 hover:-translate-y-1">
          <div>
            <div className="flex items-center justify-between font-mono text-[10px] text-[#6b7280]">
              <span>CART 04 // TIMED ARITHMETIC</span>
              <span className="text-[#4B7BFF]">RAPID EVALUATION</span>
            </div>

            <h4 className="mt-3 font-sans text-2xl font-bold text-white">
              {mathDash.title}
            </h4>
            <p className="mt-2 font-sans text-xs leading-relaxed text-[#9ca3af]">
              {mathDash.tagline}
            </p>

            {/* Visual Preview */}
            <div className="relative mt-6 aspect-[16/10] w-full overflow-hidden rounded-lg bg-black">
              <Image
                src={mathDash.heroMedia.src}
                alt={mathDash.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <p className="mt-4 font-sans text-xs text-[#9ca3af]">
              Evaluates speed under countdown pressure with dynamic difficulty scaling and zero layout shifts.
            </p>
          </div>

          <div className="mt-6 flex items-center justify-between border-t border-[#1f2228] pt-4 font-mono text-xs">
            <a
              href={mathDash.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-[#4B7BFF] hover:underline"
            >
              PLAY GAME ↗
            </a>
            <Link
              href={`/games/${mathDash.slug}`}
              className="text-[#9ca3af] hover:text-white"
            >
              CASE STUDY →
            </Link>
          </div>
        </div>

        {/* Cartridge 3: FIND THE NUMBER */}
        <div className="group flex flex-col justify-between rounded-xl border border-[#27272a] bg-[#0c0d10] p-6 shadow-xl transition-all hover:border-emerald-400/40 hover:-translate-y-1">
          <div>
            <div className="flex items-center justify-between font-mono text-[10px] text-[#6b7280]">
              <span>CART 05 // SEARCH HEURISTICS</span>
              <span className="text-emerald-400">LOGARITHMIC BOUNDS</span>
            </div>

            <h4 className="mt-3 font-sans text-2xl font-bold text-white">
              {findNumber.title}
            </h4>
            <p className="mt-2 font-sans text-xs leading-relaxed text-[#9ca3af]">
              {findNumber.tagline}
            </p>

            {/* Visual Preview */}
            <div className="relative mt-6 aspect-[16/10] w-full overflow-hidden rounded-lg bg-black">
              <Image
                src={findNumber.heroMedia.src}
                alt={findNumber.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <p className="mt-4 font-sans text-xs text-[#9ca3af]">
              Interactive deduction puzzle demonstrating binary search convergence and state persistence.
            </p>
          </div>

          <div className="mt-6 flex items-center justify-between border-t border-[#1f2228] pt-4 font-mono text-xs">
            <a
              href={findNumber.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-emerald-400 hover:underline"
            >
              PLAY GAME ↗
            </a>
            <Link
              href={`/games/${findNumber.slug}`}
              className="text-[#9ca3af] hover:text-white"
            >
              CASE STUDY →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
