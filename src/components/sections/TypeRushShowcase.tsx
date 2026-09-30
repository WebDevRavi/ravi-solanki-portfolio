'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { PROJECTS } from '@/data/projects';
import { sound } from '@/utils/audio';

const PHRASES = [
  'VORTEX GLIDE HIGH SPEED ARCADE ENGINE',
  'LOW LATENCY MECHANICAL KEYBOARD CALIBRATION',
  'PROCEDURAL DECAGONAL TRACK GEOMETRY RUNTIME',
];

export function TypeRushShowcase() {
  const typeRush = PROJECTS.find((p) => p.slug === 'typerush');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const targetText = PHRASES[phraseIndex];

  const [inputVal, setInputVal] = useState('');
  const [startTime, setStartTime] = useState<number | null>(null);
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const [combo, setCombo] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.toUpperCase();
    if (isCompleted) return;

    if (!startTime) {
      setStartTime(Date.now());
    }

    const currentIdx = val.length - 1;
    const isCorrect = currentIdx >= 0 && val[currentIdx] === targetText[currentIdx];

    if (isCorrect) {
      sound.playTyping(850 + currentIdx * 15);
      setCombo((prev) => prev + 1);
    } else if (currentIdx >= 0) {
      sound.playClick(240, 0.08); // Lower buzz for error
      setCombo(0);
    }

    setInputVal(val);

    // Calculate accuracy
    let correctCount = 0;
    for (let i = 0; i < val.length; i++) {
      if (val[i] === targetText[i]) correctCount++;
    }
    const acc = val.length > 0 ? Math.round((correctCount / val.length) * 100) : 100;
    setAccuracy(acc);

    // Calculate WPM
    if (startTime && val.length > 3) {
      const minutes = (Date.now() - startTime) / 60000;
      const words = val.length / 5;
      const currentWpm = Math.min(220, Math.round(words / Math.max(0.01, minutes)));
      setWpm(currentWpm);
    }

    // Check completion
    if (val === targetText) {
      setIsCompleted(true);
      sound.playPowerUp();
    }
  };

  const handleReset = () => {
    setInputVal('');
    setStartTime(null);
    setWpm(0);
    setAccuracy(100);
    setCombo(0);
    setIsCompleted(false);
    setPhraseIndex((prev) => (prev + 1) % PHRASES.length);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="mb-32 border-t border-[#1f2228] pt-24">
      {/* Title & Header */}
      <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <div className="flex items-center gap-3">
            <span className="rounded bg-[#FCDD0D]/15 px-2.5 py-0.5 font-mono text-[10px] font-bold tracking-wider text-[#FCDD0D] uppercase border border-[#FCDD0D]/30">
              FEATURED 02 // TYPOGRAPHIC ARCADE
            </span>
            <span className="font-mono text-xs text-[#6b7280]">
              PURE DOM ARCHITECTURE · 0MS FRAMEWORK OVERHEAD
            </span>
          </div>
          <h3 className="mt-3 font-sans text-3xl font-black tracking-tight text-white sm:text-5xl md:text-6xl">
            TYPERUSH
          </h3>
        </div>

        {/* Action Links */}
        <div className="flex flex-wrap items-center gap-4 font-mono text-xs">
          <a
            href={typeRush?.liveUrl || typeRush?.githubUrl || 'https://github.com/WebDevRavi/Type_Dash'}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sound.playPowerUp()}
            className="rounded bg-white px-4 py-2 font-bold text-black transition-all hover:bg-[#FCDD0D]"
          >
            PLAY ON GITHUB ↗
          </a>
          <Link
            href="/games/typerush"
            className="text-[#9ca3af] transition-colors hover:text-white"
          >
            TECH SPEC →
          </Link>
          <a
            href={typeRush?.githubUrl || 'https://github.com/WebDevRavi/Type_Dash'}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#6b7280] transition-colors hover:text-white"
          >
            SOURCE ↗
          </a>
        </div>
      </div>

      {/* Interactive Micro-Arcade Cabinet */}
      <div className="rounded-xl border border-[#27272a] bg-[#0c0d10] p-6 shadow-2xl md:p-10">
        {/* Arcade HUD Telemetry */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-[#1f2228] pb-6 font-mono text-xs">
          <div className="flex items-center gap-6">
            <div>
              <span className="text-[10px] text-[#6b7280] block">SPEED (WPM)</span>
              <span className="text-2xl font-black text-[#FCDD0D]">{wpm}</span>
            </div>
            <div className="border-l border-[#1f2228] pl-6">
              <span className="text-[10px] text-[#6b7280] block">ACCURACY</span>
              <span className={`text-2xl font-black ${accuracy < 90 ? 'text-rose-400' : 'text-emerald-400'}`}>
                {accuracy}%
              </span>
            </div>
            <div className="border-l border-[#1f2228] pl-6">
              <span className="text-[10px] text-[#6b7280] block">COMBO STREAK</span>
              <span className="text-2xl font-black text-[#4B7BFF]">{combo}x</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleReset}
              className="rounded border border-[#3f3f46] bg-[#18191e] px-3 py-1.5 text-xs text-[#d1d5db] transition-colors hover:bg-white hover:text-black font-semibold"
            >
              CYCLE PHRASE ↻
            </button>
          </div>
        </div>

        {/* Target Text Visualization */}
        <div
          onClick={() => inputRef.current?.focus()}
          className="relative min-h-[90px] cursor-text rounded-lg border border-[#22252c] bg-[#07080a] p-6 font-mono text-lg sm:text-2xl tracking-wider select-none leading-relaxed"
        >
          {targetText.split('').map((char, index) => {
            const typedChar = inputVal[index];
            let color = 'text-[#4b5563]';
            let bg = 'transparent';

            if (typedChar !== undefined) {
              if (typedChar === char) {
                color = 'text-emerald-400';
              } else {
                color = 'text-rose-400';
                bg = 'bg-rose-500/20';
              }
            }

            const isCurrent = index === inputVal.length;

            return (
              <span
                key={index}
                className={`${color} ${bg} relative transition-colors ${
                  isCurrent ? 'border-b-2 border-[#FCDD0D] animate-pulse' : ''
                }`}
              >
                {char}
              </span>
            );
          })}

          {/* Hidden but focusable real input */}
          <input
            ref={inputRef}
            id="typerush-input"
            name="typerush-input"
            type="text"
            value={inputVal}
            onChange={handleInputChange}
            maxLength={targetText.length}
            placeholder=""
            className="absolute inset-0 opacity-0 cursor-default"
            autoComplete="off"
            autoCapitalize="off"
            spellCheck="false"
          />
        </div>

        {/* Status prompt */}
        <div className="mt-4 flex items-center justify-between font-mono text-xs text-[#6b7280]">
          <span>
            {isCompleted
              ? '✨ STAGE CLEARED! CLICK "CYCLE PHRASE" FOR NEXT CHALLENGE'
              : 'CLICK BOX & TYPE ON KEYBOARD · AUDIO SYNTHESIZER CALIBRATED'}
          </span>
          <span className="text-[10px] text-[#4B7BFF]">WEB AUDIO: 44.1 KHZ SYNTHESIS</span>
        </div>
      </div>
    </div>
  );
}
