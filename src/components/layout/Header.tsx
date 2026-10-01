'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { sound } from '@/utils/audio';

export function Header() {
  const [time, setTime] = useState<string>('');
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format in Indian Standard Time (IST)
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      };
      setTime(new Intl.DateTimeFormat('en-GB', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSoundToggle = () => {
    const newState = sound.toggle();
    setSoundEnabled(newState);
    if (newState) {
      sound.playPowerUp();
    }
  };

  const handleNavClick = () => {
    sound.playClick(880, 0.04);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#1f2228]/50 bg-[#08080a]/80 backdrop-blur-xl transition-all">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12">
        {/* Left: Identity & Live Bhopal Clock */}
        <div className="flex items-center gap-6">
          <Link
            href="/"
            onClick={handleNavClick}
            className="group flex items-baseline gap-2.5"
            onMouseEnter={() => sound.playClick(1000, 0.02)}
          >
            <span className="font-mono text-sm font-bold tracking-tight text-white transition-colors group-hover:text-[#FCDD0D]">
              RAVI SOLANKI
            </span>
            <span className="hidden font-mono text-[10px] tracking-wider text-[#6b7280] sm:inline-block">
              {"// SYS.DEV"}
            </span>
          </Link>

          {/* Bhopal Clock Pill */}
          <div className="hidden items-center gap-2 border-l border-[#1f2228] pl-6 font-mono text-[11px] text-[#9ca3af] lg:flex">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="text-[#6b7280]">BHOPAL, IN:</span>
            <span className="text-[#e5e7eb]" suppressHydrationWarning>
              {time ? `${time} IST` : '--:--:--'}
            </span>
          </div>
        </div>

        {/* Center: Tactile Editorial Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          <Link
            href="/#games"
            onClick={handleNavClick}
            onMouseEnter={() => sound.playClick(1100, 0.015)}
            className="font-mono text-xs tracking-wider text-[#9ca3af] transition-colors hover:text-[#4B7BFF]"
          >
            01/GAMES
          </Link>
          <Link
            href="/#aiml"
            onClick={handleNavClick}
            onMouseEnter={() => sound.playClick(1100, 0.015)}
            className="font-mono text-xs tracking-wider text-[#9ca3af] transition-colors hover:text-white"
          >
            02/AI·ML
          </Link>
          <Link
            href="/#work"
            onClick={handleNavClick}
            onMouseEnter={() => sound.playClick(1100, 0.015)}
            className="font-mono text-xs tracking-wider text-[#9ca3af] transition-colors hover:text-white"
          >
            03/WORK
          </Link>
          <Link
            href="/#creative"
            onClick={handleNavClick}
            onMouseEnter={() => sound.playClick(1100, 0.015)}
            className="font-mono text-xs tracking-wider text-[#9ca3af] transition-colors hover:text-[#FCDD0D]"
          >
            04/BLUE3D
          </Link>
          <Link
            href="/#about"
            onClick={handleNavClick}
            onMouseEnter={() => sound.playClick(1100, 0.015)}
            className="font-mono text-xs tracking-wider text-[#9ca3af] transition-colors hover:text-white"
          >
            05/ABOUT
          </Link>
        </nav>

        {/* Right: Sound Synthesizer Controller & External Terminal Links */}
        <div className="flex items-center gap-4 font-mono text-xs">
          {/* Sound FX Switch */}
          <button
            onClick={handleSoundToggle}
            title="Toggle Web Audio Synthesizer"
            className={`flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] transition-all ${
              soundEnabled
                ? 'border-[#4B7BFF]/40 bg-[#4B7BFF]/10 text-[#4B7BFF] shadow-[0_0_10px_rgba(75,123,255,0.2)]'
                : 'border-[#27272a] bg-[#141517] text-[#71717a]'
            }`}
          >
            <span className="text-[10px]">{soundEnabled ? '●' : '○'}</span>
            <span>SFX {soundEnabled ? 'ON' : 'MUTED'}</span>
          </button>

          {/* Source Links */}
          <a
            href="https://github.com/WebDevRavi"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleNavClick}
            className="hidden text-[#9ca3af] transition-colors hover:text-white sm:inline-block"
          >
            GH ↗
          </a>
          <a
            href="https://www.linkedin.com/in/ravi-solanki-bb2420375/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleNavClick}
            className="hidden text-[#9ca3af] transition-colors hover:text-white sm:inline-block"
          >
            IN ↗
          </a>
        </div>
      </div>
    </header>
  );
}
