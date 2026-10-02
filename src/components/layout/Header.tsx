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

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#08070d]/85 backdrop-blur-xl transition-all">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 md:px-12">
        {/* Left: Identity & Live Bhopal Clock */}
        <div className="flex items-center gap-4 sm:gap-6">
          <Link
            href="/"
            onClick={handleNavClick}
            className="group flex items-baseline gap-2.5"
            onMouseEnter={() => sound.playClick(1000, 0.02)}
          >
            <span className="font-sans text-sm md:text-base font-bold tracking-tight text-white transition-colors group-hover:text-[#3b82f6]">
              RAVI SOLANKI
            </span>
          </Link>

          {/* Bhopal Status Pill */}
          <div className="hidden items-center gap-2 border-l border-white/10 pl-4 font-mono text-[11px] text-zinc-400 sm:flex">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="text-zinc-500">BHOPAL, IN</span>
            <span className="text-zinc-300 font-medium" suppressHydrationWarning>
              {time ? `${time} IST` : ''}
            </span>
          </div>
        </div>

        {/* Center: Editorial Navigation */}
        <nav className="hidden items-center gap-6 lg:flex">
          <Link
            href="/#games"
            onClick={handleNavClick}
            onMouseEnter={() => sound.playClick(1100, 0.015)}
            className="font-mono text-xs tracking-wider text-zinc-400 transition-colors hover:text-white"
          >
            01/GAMES
          </Link>
          <Link
            href="/#aiml"
            onClick={handleNavClick}
            onMouseEnter={() => sound.playClick(1100, 0.015)}
            className="font-mono text-xs tracking-wider text-zinc-400 transition-colors hover:text-white"
          >
            02/AI·ML
          </Link>
          <Link
            href="/#work"
            onClick={handleNavClick}
            onMouseEnter={() => sound.playClick(1100, 0.015)}
            className="font-mono text-xs tracking-wider text-zinc-400 transition-colors hover:text-white"
          >
            03/CLIENT
          </Link>
          <Link
            href="/#blue3d"
            onClick={handleNavClick}
            onMouseEnter={() => sound.playClick(1100, 0.015)}
            className="font-mono text-xs tracking-wider text-zinc-400 transition-colors hover:text-[#FCDD0D]"
          >
            04/BLUE3D
          </Link>
          <Link
            href="/#about"
            onClick={handleNavClick}
            onMouseEnter={() => sound.playClick(1100, 0.015)}
            className="font-mono text-xs tracking-wider text-zinc-400 transition-colors hover:text-white"
          >
            05/ABOUT
          </Link>
          <Link
            href="/#contact"
            onClick={handleNavClick}
            onMouseEnter={() => sound.playClick(1100, 0.015)}
            className="font-mono text-xs tracking-wider text-zinc-400 transition-colors hover:text-[#3b82f6]"
          >
            06/CONTACT
          </Link>
        </nav>

        {/* Right: Sound Synthesizer Controller & Source Links */}
        <div className="flex items-center gap-3 font-mono text-xs">
          {/* Sound FX Switch */}
          <button
            onClick={handleSoundToggle}
            title="Toggle Web Audio Synthesizer"
            className={`flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] transition-all ${
              soundEnabled
                ? 'border-[#3b82f6]/40 bg-[#3b82f6]/10 text-[#3b82f6]'
                : 'border-zinc-800 bg-zinc-900/60 text-zinc-500'
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
            className="hidden text-zinc-400 transition-colors hover:text-white sm:inline-block"
          >
            GH ↗
          </a>
          <a
            href="https://www.linkedin.com/in/ravi-solanki-bb2420375/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleNavClick}
            className="hidden text-zinc-400 transition-colors hover:text-white sm:inline-block"
          >
            IN ↗
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-zinc-400 hover:text-white lg:hidden"
            aria-label="Toggle Navigation Menu"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileMenuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-t border-white/10 bg-[#08070d]/95 px-6 py-4 backdrop-blur-xl lg:hidden">
          <nav className="flex flex-col gap-3 font-mono text-xs">
            <Link
              href="/#games"
              onClick={() => {
                handleNavClick();
                setMobileMenuOpen(false);
              }}
              className="py-1 text-zinc-300 hover:text-white"
            >
              01/GAMES
            </Link>
            <Link
              href="/#aiml"
              onClick={() => {
                handleNavClick();
                setMobileMenuOpen(false);
              }}
              className="py-1 text-zinc-300 hover:text-white"
            >
              02/AI·ML
            </Link>
            <Link
              href="/#work"
              onClick={() => {
                handleNavClick();
                setMobileMenuOpen(false);
              }}
              className="py-1 text-zinc-300 hover:text-white"
            >
              03/CLIENT
            </Link>
            <Link
              href="/#blue3d"
              onClick={() => {
                handleNavClick();
                setMobileMenuOpen(false);
              }}
              className="py-1 text-zinc-300 hover:text-[#FCDD0D]"
            >
              04/BLUE3D
            </Link>
            <Link
              href="/#about"
              onClick={() => {
                handleNavClick();
                setMobileMenuOpen(false);
              }}
              className="py-1 text-zinc-300 hover:text-white"
            >
              05/ABOUT
            </Link>
            <Link
              href="/#contact"
              onClick={() => {
                handleNavClick();
                setMobileMenuOpen(false);
              }}
              className="py-1 text-zinc-300 hover:text-[#3b82f6]"
            >
              06/CONTACT
            </Link>
            <div className="flex items-center gap-4 pt-2 border-t border-white/10">
              <a
                href="https://github.com/WebDevRavi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white"
              >
                GitHub ↗
              </a>
              <a
                href="https://www.linkedin.com/in/ravi-solanki-bb2420375/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white"
              >
                LinkedIn ↗
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
