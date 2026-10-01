'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { soundEngine } from './SoundManager';

interface WorldHUDProps {
  onScrollTo: (selector: string) => void;
  onOpenAbout: () => void;
  onOpenShowcase?: () => void;
}

export const WorldHUD: React.FC<WorldHUDProps> = ({ onScrollTo, onOpenAbout, onOpenShowcase }) => {
  const [isMuted, setIsMuted] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen]);

  const toggleSound = () => {
    const nextState = !isMuted;
    setIsMuted(nextState);
    soundEngine.setMuted(nextState);
    if (!nextState) {
      soundEngine.playOpen();
    }
  };

  const handleNavClick = (action: () => void) => {
    soundEngine.playClick();
    action();
    setMenuOpen(false);
  };

  const [isScrolled, setIsScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-40 px-3 md:px-6 py-2.5 transition-all duration-300 pointer-events-none select-none ${
          isScrolled
            ? 'bg-[#05030e]/85 backdrop-blur-md border-b border-white/10 shadow-xl'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Left: BLUE 3D Brand Anchor */}
          <div className="pointer-events-auto flex items-center gap-3">
            <div
              onClick={() => onScrollTo('#intro')}
              className="cursor-pointer group flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-[#070514]/90 border border-[#38bdf8]/35 shadow-[0_0_12px_rgba(56,189,248,0.15)] backdrop-blur-md hover:border-[#38bdf8] transition-all"
            >
              {/* Pixel 3D Cube Icon with gentle float */}
              <div className="animate-node-float" style={{ '--float-duration': '3.5s' } as React.CSSProperties}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" shapeRendering="crispEdges">
                  <polygon points="12,2 22,7 12,12 2,7" fill="#38bdf8" />
                  <polygon points="2,7 12,12 12,22 2,17" fill="#0284c7" />
                  <polygon points="12,12 22,7 22,17 12,22" fill="#0369a1" />
                </svg>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-pixel text-[9.5px] text-white group-hover:text-[#38bdf8] transition-colors">
                  BLUE 3D
                </span>
                <span className="hidden sm:inline-block font-mono text-[9px] text-zinc-400">
                  {"// RAVI SOLANKI"}
                </span>
              </div>
            </div>
          </div>

          {/* Center: Desktop Fast Travel Links */}
          <nav className="pointer-events-auto hidden lg:flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#080518]/80 border border-white/10 backdrop-blur-md shadow-lg">
            <button
              onClick={() => {
                soundEngine.playHover();
                onScrollTo('#intro');
              }}
              className="font-silkscreen text-[8.5px] px-2.5 py-1 rounded hover:bg-white/10 text-zinc-300 hover:text-white transition-colors"
            >
              APEX
            </button>
            <button
              onClick={() => {
                soundEngine.playHover();
                onScrollTo('#node-3d');
              }}
              className="font-silkscreen text-[8.5px] px-2.5 py-1 rounded hover:bg-white/10 text-zinc-300 hover:text-[#00d4ff] transition-colors"
            >
              3D WORLDS
            </button>
            <button
              onClick={() => {
                soundEngine.playHover();
                onScrollTo('#node-games');
              }}
              className="font-silkscreen text-[8.5px] px-2.5 py-1 rounded hover:bg-white/10 text-zinc-300 hover:text-[#c084fc] transition-colors"
            >
              GAMES
            </button>
            <button
              onClick={() => {
                soundEngine.playHover();
                onScrollTo('#node-film');
              }}
              className="font-silkscreen text-[8.5px] px-2.5 py-1 rounded hover:bg-white/10 text-zinc-300 hover:text-[#fb7185] transition-colors"
            >
              FILMS
            </button>
            <button
              onClick={() => {
                soundEngine.playHover();
                onScrollTo('#node-code');
              }}
              className="font-silkscreen text-[8.5px] px-2.5 py-1 rounded hover:bg-white/10 text-zinc-300 hover:text-[#38bdf8] transition-colors"
            >
              CODE &amp; DSA
            </button>
            <button
              onClick={() => {
                soundEngine.playHover();
                onScrollTo('#studio-scene');
              }}
              className="font-silkscreen text-[8.5px] px-2.5 py-1 rounded hover:bg-white/10 text-zinc-300 hover:text-[#fbbf24] transition-colors"
            >
              STUDIO
            </button>
            <button
              onClick={() => {
                soundEngine.playHover();
                onScrollTo('#contact-scene');
              }}
              className="font-silkscreen text-[8.5px] px-2.5 py-1 rounded hover:bg-white/10 text-zinc-300 hover:text-[#00d4ff] transition-colors"
            >
              CONTACT
            </button>
          </nav>

          {/* Right: ARCHIVE SHOWCASE + AUDIO TOGGLE + MENU */}
          <div className="pointer-events-auto flex items-center gap-2">
            {/* Direct Showcase Archive Button */}
            {onOpenShowcase && (
              <button
                onClick={onOpenShowcase}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#00d4ff]/10 hover:bg-[#00d4ff]/20 border border-[#00d4ff]/40 text-[#00d4ff] hover:border-[#00d4ff] text-[8.5px] font-pixel transition-all hover:scale-105 shadow-[0_0_10px_rgba(0,212,255,0.2)]"
                title="Open Direct Project Showcase Archive"
              >
                <span>🕹</span>
                <span>ARCHIVE</span>
              </button>
            )}

            {/* Audio Toggle with Animated Equalizer Bars */}
            <button
              onClick={toggleSound}
              title={isMuted ? 'Audio Synthesizer: OFF (Click to Enable)' : 'Audio Synthesizer: ON (Click to Mute)'}
              className={`px-3 py-1.5 rounded-full border transition-all flex items-center gap-2 backdrop-blur-md ${
                isMuted
                  ? 'bg-[#070514]/90 border-white/15 text-zinc-400 hover:text-white hover:border-white/30'
                  : 'bg-[#00d4ff]/15 border-[#00d4ff] text-[#00d4ff] shadow-[0_0_12px_rgba(0,212,255,0.35)]'
              }`}
              aria-label="Toggle Ambient Audio"
            >
              {!isMuted ? (
                <div className="flex items-center gap-0.5 h-3">
                  <span className="w-0.5 bg-[#00d4ff] rounded-full animate-sound-wave-1" />
                  <span className="w-0.5 bg-[#00d4ff] rounded-full animate-sound-wave-2" />
                  <span className="w-0.5 bg-[#00d4ff] rounded-full animate-sound-wave-3" />
                </div>
              ) : (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor" fillOpacity="0.4" />
                  <line x1="23" y1="9" x2="17" y2="15" />
                  <line x1="17" y1="9" x2="23" y2="15" />
                </svg>
              )}
              <span className="font-silkscreen text-[8px] tracking-wider">
                SFX: {isMuted ? 'OFF' : 'ON'}
              </span>
            </button>

            {/* Compact Pixel Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="px-2.5 py-1.5 rounded-full bg-[#070514]/90 border border-white/15 hover:border-[#38bdf8] text-white hover:text-[#38bdf8] transition-all flex items-center gap-1.5 backdrop-blur-md"
              aria-label="Toggle Navigation Menu"
            >
              <div className="flex flex-col gap-1 w-3 items-center">
                <span className={`h-0.5 w-full bg-current transition-transform ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
                <span className={`h-0.5 w-full bg-current transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
                <span className={`h-0.5 w-full bg-current transition-transform ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
              </div>
              <span className="font-silkscreen text-[8px] tracking-wider">MENU</span>
            </button>
          </div>
        </div>
      </header>

      {/* Minimal Pixel Slide-Out / Pop-In World Navigation Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-start justify-end p-4 md:p-8 animate-fadeIn"
          onClick={() => setMenuOpen(false)}
        >
          <div
            className="w-full max-w-xs mt-12 bg-[#0a071d]/95 border-2 border-[#38bdf8]/40 shadow-[0_0_24px_rgba(0,0,0,0.8)] rounded p-5 pointer-events-auto select-none"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
              <span className="font-pixel text-[9px] text-[#38bdf8]">
                BLUE 3D // WAYPOINTS
              </span>
              <button
                onClick={() => setMenuOpen(false)}
                className="font-pixel text-[9px] text-zinc-400 hover:text-white"
              >
                [X]
              </button>
            </div>

            <nav className="flex flex-col gap-2">
              <button
                onClick={() => handleNavClick(() => onScrollTo('#intro'))}
                className="flex items-center justify-between px-3 py-2 text-left rounded hover:bg-white/5 group transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-5 h-5 flex items-center justify-center shrink-0">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" shapeRendering="crispEdges">
                      <polygon points="12,2 22,7 12,12 2,7" fill="#38bdf8" />
                      <polygon points="2,7 12,12 12,22 2,17" fill="#0284c7" />
                      <polygon points="12,12 22,7 22,17 12,22" fill="#0369a1" />
                    </svg>
                  </div>
                  <span className="font-pixel text-[10px] text-zinc-300 group-hover:text-[#38bdf8]">
                    01. WORLD APEX
                  </span>
                </div>
                <span className="font-silkscreen text-[8px] text-zinc-500">START</span>
              </button>

              <button
                onClick={() => handleNavClick(() => onScrollTo('#node-3d'))}
                className="flex items-center justify-between px-3 py-2 text-left rounded hover:bg-white/5 group transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full overflow-hidden shrink-0">
                    <Image
                      src="/assets/nodes/node-3d.png"
                      alt="3D Worlds"
                      width={20}
                      height={20}
                      className="w-full h-full object-contain"
                      style={{ imageRendering: 'pixelated' }}
                      unoptimized
                    />
                  </div>
                  <span className="font-pixel text-[10px] text-zinc-300 group-hover:text-[#a855f7]">
                    02. CREATIVE WORK
                  </span>
                </div>
                <span className="font-silkscreen text-[8px] text-zinc-500">NODES</span>
              </button>

              <button
                onClick={() => handleNavClick(onOpenAbout)}
                className="flex items-center justify-between px-3 py-2 text-left rounded hover:bg-white/5 group transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full overflow-hidden shrink-0">
                    <Image
                      src="/assets/nodes/node-about.png"
                      alt="About Ravi"
                      width={20}
                      height={20}
                      className="w-full h-full object-contain"
                      style={{ imageRendering: 'pixelated' }}
                      unoptimized
                    />
                  </div>
                  <span className="font-pixel text-[10px] text-zinc-300 group-hover:text-[#60a5fa]">
                    03. ABOUT RAVI
                  </span>
                </div>
                <span className="font-silkscreen text-[8px] text-zinc-500">PROFILE</span>
              </button>

              <button
                onClick={() => handleNavClick(() => onScrollTo('#studio-scene'))}
                className="flex items-center justify-between px-3 py-2 text-left rounded hover:bg-white/5 group transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full overflow-hidden shrink-0">
                    <Image
                      src="/assets/nodes/node-studio.png"
                      alt="The Studio"
                      width={20}
                      height={20}
                      className="w-full h-full object-contain"
                      style={{ imageRendering: 'pixelated' }}
                      unoptimized
                    />
                  </div>
                  <span className="font-pixel text-[10px] text-zinc-300 group-hover:text-[#fbbf24]">
                    04. THE STUDIO
                  </span>
                </div>
                <span className="font-silkscreen text-[8px] text-zinc-500">CABIN</span>
              </button>

              <button
                onClick={() => handleNavClick(() => onScrollTo('#contact-scene'))}
                className="flex items-center justify-between px-3 py-2 text-left rounded hover:bg-white/5 group transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full overflow-hidden shrink-0">
                    <Image
                      src="/assets/nodes/node-contact.png"
                      alt="Transmission"
                      width={20}
                      height={20}
                      className="w-full h-full object-contain"
                      style={{ imageRendering: 'pixelated' }}
                      unoptimized
                    />
                  </div>
                  <span className="font-pixel text-[10px] text-zinc-300 group-hover:text-[#00d4ff]">
                    05. TRANSMISSION
                  </span>
                </div>
                <span className="font-silkscreen text-[8px] text-zinc-500">MAILBOX</span>
              </button>

              <button
                onClick={() => handleNavClick(() => onScrollTo('#end-character-anchor'))}
                className="flex items-center justify-between px-3 py-2 text-left rounded hover:bg-white/5 group transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full overflow-hidden shrink-0">
                    <Image
                      src="/assets/character/end-node-character.png"
                      alt="The Mind"
                      width={20}
                      height={20}
                      className="w-full h-full object-contain"
                      style={{ imageRendering: 'pixelated' }}
                      unoptimized
                    />
                  </div>
                  <span className="font-pixel text-[10px] text-zinc-300 group-hover:text-[#c084fc]">
                    06. THE MIND
                  </span>
                </div>
                <span className="font-silkscreen text-[8px] text-zinc-500">PORTAL</span>
              </button>
            </nav>

            <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-zinc-500 font-silkscreen text-[8px]">
              <span>ESC TO CLOSE</span>
              <span>RAVI SOLANKI</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
