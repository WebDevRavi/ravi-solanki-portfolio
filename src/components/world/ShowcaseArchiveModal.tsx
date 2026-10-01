'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PROJECTS, CREATIVE_BLUE3D, CreativeImage, CreativeVideo } from '@/data/projects';
import { PROFILE_DATA } from '@/data/profile';
import { soundEngine } from './SoundManager';
import { TypeRushShowcase } from '@/components/sections/TypeRushShowcase';

interface ShowcaseArchiveModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: 'games' | '3d' | 'films' | 'code' | 'about';
}

export const ShowcaseArchiveModal: React.FC<ShowcaseArchiveModalProps> = ({
  isOpen,
  onClose,
  initialTab = 'games',
}) => {
  const [activeTab, setActiveTab] = useState<'games' | '3d' | 'films' | 'code' | 'about'>(initialTab);
  const [activeVideo, setActiveVideo] = useState<CreativeVideo | null>(null);
  const [activeImage, setActiveImage] = useState<CreativeImage | null>(null);
  const [showTypeRushDemo, setShowTypeRushDemo] = useState(false);

  if (!isOpen) return null;

  const handleTabChange = (tab: 'games' | '3d' | 'films' | 'code' | 'about') => {
    soundEngine.playClick();
    setActiveTab(tab);
    setShowTypeRushDemo(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200 select-none">
      {/* Backdrop */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Main Container */}
      <div className="relative w-full max-w-5xl h-[92vh] bg-[#070514] rounded-xl border border-[#00d4ff]/40 shadow-[0_0_50px_rgba(0,0,0,0.9)] flex flex-col overflow-hidden z-10 animate-in zoom-in-95 duration-200">
        {/* Header Bar */}
        <div className="flex flex-wrap items-center justify-between px-4 sm:px-6 py-3.5 border-b border-white/10 bg-[#05030e]">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded bg-[#00d4ff]/20 border border-[#00d4ff]/50 flex items-center justify-center">
              <span className="font-pixel text-[10px] text-[#00d4ff]">✦</span>
            </div>
            <div>
              <h2 className="font-pixel text-xs sm:text-sm text-white tracking-wider">
                PROJECT ARCHIVE &amp; SHOWCASE
              </h2>
              <p className="font-mono text-[9px] text-zinc-400">
                RAVI SOLANKI · BLUE 3D PORTFOLIO REPOSITORY
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              soundEngine.playClick();
              onClose();
            }}
            className="pixel-btn text-[9px] sm:text-[10px] py-1.5 px-3 bg-white/10 text-zinc-300 hover:bg-rose-600 hover:text-white transition-colors"
          >
            [CLOSE ×]
          </button>
        </div>

        {/* Tab Selector Navigation */}
        <div className="flex items-center gap-1 sm:gap-2 px-4 sm:px-6 py-2.5 bg-[#09071a] border-b border-white/10 overflow-x-auto scrollbar-none">
          {[
            { id: 'games', label: '🕹 PLAYABLE GAMES', count: PROJECTS.length },
            { id: '3d', label: '✦ 3D ART & BLENDER', count: CREATIVE_BLUE3D.gallery.length },
            { id: 'films', label: '🎬 FILMS & VFX', count: CREATIVE_BLUE3D.videos.length },
            { id: 'code', label: '⚡ CODE & CLIENT', count: 'DSA + WEB' },
            { id: 'about', label: '👤 ABOUT RAVI', count: 'PROFILE' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id as typeof activeTab)}
              className={`px-3 py-1.5 rounded-full font-silkscreen text-[8px] sm:text-[9px] transition-all whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === tab.id
                  ? 'bg-[#00d4ff] text-black font-bold shadow-[0_0_12px_rgba(0,212,255,0.4)]'
                  : 'bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10'
              }`}
            >
              <span>{tab.label}</span>
              <span className="text-[7.5px] opacity-75">({tab.count})</span>
            </button>
          ))}
        </div>

        {/* Scrollable Content Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
          {/* TAB 1: GAMES */}
          {activeTab === 'games' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-xl bg-[#0f0c24] border border-[#c084fc]/30">
                <div>
                  <h3 className="font-pixel text-xs text-[#c084fc] mb-1">
                    BROWSER ARCADES &amp; 3D EXPERIMENTS
                  </h3>
                  <p className="font-sans text-xs text-zinc-300 leading-relaxed max-w-2xl">
                    High-tempo games built with Three.js WebGL, React, and synthesized Web Audio. Engineered with custom physics, procedural track dispatchers, and 0ms audio latency.
                  </p>
                </div>
                <button
                  onClick={() => {
                    soundEngine.playClick();
                    setShowTypeRushDemo(!showTypeRushDemo);
                  }}
                  className="pixel-btn text-[9px] py-2 px-4 bg-[#c084fc]/20 text-[#c084fc] border border-[#c084fc] hover:bg-[#c084fc] hover:text-black whitespace-nowrap self-start sm:self-auto"
                >
                  {showTypeRushDemo ? '[ HIDE TYPERUSH TEST ]' : '[ ⌨ PLAY TYPERUSH HERE ]'}
                </button>
              </div>

              {/* Embedded TypeRush Interactive Demo */}
              {showTypeRushDemo && (
                <div className="p-4 sm:p-6 rounded-xl bg-black border-2 border-[#FCDD0D]/50 shadow-2xl animate-in zoom-in-95 duration-200">
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
                    <span className="font-pixel text-[10px] text-[#FCDD0D]">
                      LIVE INTERACTIVE GAME DEMO: TYPERUSH
                    </span>
                    <button
                      onClick={() => setShowTypeRushDemo(false)}
                      className="font-pixel text-[8px] text-zinc-400 hover:text-white"
                    >
                      [CLOSE DEMO]
                    </button>
                  </div>
                  <TypeRushShowcase />
                </div>
              )}

              {/* Projects Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {PROJECTS.map((game) => (
                  <div
                    key={game.slug}
                    className="p-5 rounded-xl bg-[#0c0920] border border-white/10 hover:border-[#c084fc]/60 transition-all flex flex-col justify-between group"
                  >
                    <div>
                      {/* Thumbnail or Video Preview */}
                      <div className="relative aspect-video w-full rounded-lg overflow-hidden bg-black mb-4 border border-white/5">
                        {game.heroMedia.type === 'video' ? (
                          <video
                            src={game.heroMedia.src}
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        ) : (
                          <Image
                            src={game.heroMedia.src}
                            alt={game.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        )}
                        <span className="absolute top-2.5 right-2.5 font-silkscreen text-[7.5px] px-2 py-0.5 rounded-full bg-black/80 text-[#c084fc] border border-[#c084fc]/40 backdrop-blur-sm">
                          {game.snapshot.platform}
                        </span>
                      </div>

                      <div className="flex items-baseline justify-between mb-1.5">
                        <h4 className="font-pixel text-xs sm:text-sm text-white group-hover:text-[#c084fc] transition-colors">
                          {game.title}
                        </h4>
                        <span className="font-mono text-[9px] text-[#34d399]">
                          {game.status}
                        </span>
                      </div>

                      <p className="font-mono text-[10px] text-[#38bdf8] mb-2">{game.tagline}</p>
                      <p className="font-sans text-xs text-zinc-300 leading-relaxed mb-4">
                        {game.overview}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {game.tags.map((t) => (
                          <span
                            key={t}
                            className="font-mono text-[8px] px-2 py-0.5 rounded bg-white/5 text-zinc-400 border border-white/5"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-white/10">
                      {game.liveUrl && (
                        <a
                          href={game.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="pixel-btn text-[8.5px] py-1.5 px-3 bg-[#00d4ff] text-black font-bold hover:bg-white transition-colors"
                        >
                          PLAY LIVE ↗
                        </a>
                      )}
                      <Link
                        href={`/games/${game.slug}`}
                        onClick={onClose}
                        className="pixel-btn text-[8.5px] py-1.5 px-3 bg-[#c084fc]/20 text-[#c084fc] border border-[#c084fc]/50 hover:bg-[#c084fc] hover:text-black transition-colors"
                      >
                        TECH SPEC →
                      </Link>
                      {game.githubUrl && (
                        <a
                          href={game.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="pixel-btn text-[8.5px] py-1.5 px-3 bg-white/5 text-zinc-300 hover:bg-white hover:text-black transition-colors"
                        >
                          GITHUB ↗
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: 3D ART & BLENDER */}
          {activeTab === '3d' && (
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-[#0e0a24] border border-[#00d4ff]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h3 className="font-pixel text-xs text-[#00d4ff] mb-1">
                    BLENDER SPATIAL FORMS &amp; LIGHTING STUDIES
                  </h3>
                  <p className="font-sans text-xs text-zinc-300 leading-relaxed max-w-2xl">
                    Brutalist architecture, volumetric illumination, metallic roughness calibrations, and nocturnal shadows modeled in Blender.
                  </p>
                </div>
                <a
                  href="https://www.instagram.com/blue3d_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pixel-btn text-[9px] py-2 px-4 bg-[#00d4ff] text-black hover:bg-white self-start sm:self-auto"
                >
                  INSTAGRAM @BLUE3D_ ↗
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {CREATIVE_BLUE3D.gallery.map((img) => (
                  <div
                    key={img.id}
                    onClick={() => setActiveImage(img)}
                    className="group cursor-pointer rounded-xl bg-[#0c0920] border border-white/10 overflow-hidden hover:border-[#00d4ff] transition-all hover:scale-[1.02]"
                  >
                    <div className="relative aspect-video w-full bg-black">
                      <Image
                        src={img.src}
                        alt={img.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="pixel-btn text-[8.5px] bg-[#00d4ff] text-black">
                          VIEW FULL HD ↗
                        </span>
                      </div>
                    </div>
                    <div className="p-3.5">
                      <div className="flex items-center justify-between">
                        <h4 className="font-pixel text-[10px] text-white truncate">{img.title}</h4>
                        <span className="font-mono text-[8px] text-[#00d4ff]">{img.category}</span>
                      </div>
                      <p className="font-sans text-[11px] text-zinc-400 mt-1 line-clamp-2">
                        {img.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: FILMS & VFX */}
          {activeTab === 'films' && (
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-[#0e0a24] border border-[#fb7185]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h3 className="font-pixel text-xs text-[#fb7185] mb-1">
                    CINEMATIC FILMS, REELS &amp; COLOR GRADING
                  </h3>
                  <p className="font-sans text-xs text-zinc-300 leading-relaxed max-w-2xl">
                    10 original short videos, atmospheric color grades, poetic spoken-word reels, and high-impact visual cuts produced by Ravi Solanki.
                  </p>
                </div>
                <a
                  href="https://www.instagram.com/ravi_solanki_1567/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pixel-btn text-[9px] py-2 px-4 bg-[#fb7185] text-black hover:bg-white self-start sm:self-auto"
                >
                  WATCH ON INSTAGRAM ↗
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {CREATIVE_BLUE3D.videos.map((vid) => (
                  <div
                    key={vid.id}
                    onClick={() => setActiveVideo(vid)}
                    className="p-4 rounded-xl bg-[#0c0920] border border-white/10 hover:border-[#fb7185] cursor-pointer transition-all hover:scale-[1.02] flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-pixel text-[10px] text-white truncate group-hover:text-[#fb7185] transition-colors">
                          {vid.title}
                        </span>
                        <span className="font-mono text-[8px] px-1.5 py-0.5 rounded bg-[#fb7185]/20 text-[#fb7185]">
                          {vid.duration}
                        </span>
                      </div>
                      <p className="font-sans text-xs text-zinc-300 line-clamp-3 mb-3 leading-relaxed">
                        {vid.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-white/10 font-mono text-[9px] text-zinc-400">
                      <span>{vid.channel}</span>
                      <span className="text-[#fb7185] group-hover:underline">PLAY VIDEO ▶</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: CODE & CLIENT WORK */}
          {activeTab === 'code' && (
            <div className="space-y-6">
              {/* Client Work: ShreePlys */}
              <div className="p-5 rounded-xl bg-[#0f0c24] border border-[#f59e0b]/40">
                <div className="flex items-baseline justify-between mb-2">
                  <h3 className="font-pixel text-xs sm:text-sm text-white">
                    CLIENT DEPLOYMENT: SHREEPLYS
                  </h3>
                  <span className="font-mono text-[8px] px-2 py-0.5 rounded bg-[#f59e0b]/20 text-[#f59e0b] border border-[#f59e0b]/30">
                    LIVE COMMERCIAL CLIENT
                  </span>
                </div>
                <p className="font-sans text-xs text-zinc-300 leading-relaxed mb-4 max-w-3xl">
                  Engineered and launched the digital commercial showcase for ShreePlys architectural plywood and interior materials. Designed for fast mobile performance, intuitive catalog browsing, and clean contact conversion.
                </p>
                <div className="flex flex-wrap gap-2">
                  <a
                    href="https://shreeplys.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pixel-btn text-[8.5px] py-1.5 px-3 bg-[#f59e0b] text-black font-bold hover:bg-white"
                  >
                    VISIT LIVE STOREFRONT ↗
                  </a>
                  <a
                    href="https://github.com/WebDevRavi/Shreeplys"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pixel-btn text-[8.5px] py-1.5 px-3 bg-white/10 text-white hover:bg-white hover:text-black"
                  >
                    STOREFRONT CODE ↗
                  </a>
                </div>
              </div>

              {/* Computer Science & DSA */}
              <div className="p-5 rounded-xl bg-[#0c0920] border border-white/10 space-y-4">
                <h3 className="font-pixel text-xs text-[#00d4ff]">
                  DATA STRUCTURES, C++ &amp; FOUNDATIONS
                </h3>
                <p className="font-sans text-xs text-zinc-300 leading-relaxed max-w-3xl">
                  2nd year B.Tech Computer Science student specializing in Artificial Intelligence &amp; Machine Learning. Currently deepening algorithmic problem-solving in C++, time/space complexity analysis, and discrete mathematics.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {[
                    { title: 'LeetCode', handle: '@ravi_bana_1567', url: 'https://leetcode.com/ravi_bana_1567' },
                    { title: 'HackerRank', handle: '@ravisolanki96911', url: 'https://www.hackerrank.com/ravisolanki96911' },
                    { title: 'GitHub', handle: '@WebDevRavi', url: 'https://github.com/WebDevRavi' },
                    { title: 'LinkedIn', handle: 'Ravi Solanki', url: 'https://www.linkedin.com/in/ravi-solanki-bb2420375/' },
                  ].map((link) => (
                    <a
                      key={link.title}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-lg bg-[#14102e] border border-white/10 hover:border-[#00d4ff] transition-all hover:scale-105"
                    >
                      <p className="font-pixel text-[9px] text-white">{link.title} ↗</p>
                      <p className="font-mono text-[8px] text-zinc-400 mt-1">{link.handle}</p>
                    </a>
                  ))}
                </div>
              </div>

              {/* 40K Community Milestone */}
              <div className="p-5 rounded-xl bg-[#0c0920] border border-white/10">
                <span className="font-silkscreen text-[8px] px-2 py-0.5 rounded bg-[#34d399]/20 text-[#34d399] inline-block mb-2">
                  COMMUNITY BUILDING
                </span>
                <h4 className="font-pixel text-xs text-white mb-1.5">
                  40,000+ AUDIENCE SCALE
                </h4>
                <p className="font-sans text-xs text-zinc-300 leading-relaxed max-w-3xl">
                  Built and organically scaled a dedicated Facebook media page from zero to over 40,000 active followers through consistent creative visual content, engagement strategy, and editorial storytelling.
                </p>
              </div>
            </div>
          )}

          {/* TAB 5: ABOUT RAVI */}
          {activeTab === 'about' && (
            <div className="space-y-6">
              <div className="p-5 rounded-xl bg-[#0e0a24] border border-[#00d4ff]/30 flex flex-col sm:flex-row items-center gap-5">
                <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-[#00d4ff] bg-black shrink-0">
                  <Image
                    src="/assets/character/ravi-profile-icon.png"
                    alt="Ravi Solanki"
                    fill
                    className="object-cover"
                    style={{ imageRendering: 'pixelated' }}
                    unoptimized
                  />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="font-pixel text-sm text-white">RAVI SOLANKI</h3>
                  <p className="font-mono text-xs text-[#00d4ff] mt-0.5">
                    19 · CSE (AI &amp; ML) UNDERGRADUATE · BHOPAL, INDIA
                  </p>
                  <p className="font-sans text-xs text-zinc-300 leading-relaxed mt-2 max-w-2xl">
                    &ldquo;{PROFILE_DATA.quote}&rdquo;
                  </p>
                </div>
              </div>

              {/* Interests & Traits */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-[#0c0920] border border-white/10">
                  <h4 className="font-pixel text-[10px] text-[#38bdf8] mb-3">
                    AREAS OF PASSION &amp; PRACTICE
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {PROFILE_DATA.interests.map((interest) => (
                      <span
                        key={interest}
                        className="font-mono text-[8.5px] px-2.5 py-1 rounded-full bg-white/5 text-zinc-300 border border-white/5"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#0c0920] border border-white/10">
                  <h4 className="font-pixel text-[10px] text-[#c084fc] mb-3">
                    HOW I WORK &amp; BUILD
                  </h4>
                  <ul className="space-y-2">
                    {PROFILE_DATA.personalityTraits.map((trait) => (
                      <li key={trait} className="flex items-center gap-2 font-sans text-xs text-zinc-300">
                        <span className="text-[#00d4ff]">▸</span>
                        <span>{trait}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Travel Wishlist */}
              <div className="p-4 rounded-xl bg-[#0c0920] border border-white/10">
                <h4 className="font-pixel text-[10px] text-[#fbbf24] mb-3">
                  FUTURE HORIZONS &amp; TRAVEL WISHLIST
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {PROFILE_DATA.travelWishlist.map((dest) => (
                    <div key={dest.country} className="p-2.5 rounded bg-[#130f2b] border border-white/5">
                      <p className="font-pixel text-[9px] text-white">{dest.country}</p>
                      <p className="font-mono text-[8px] text-[#fbbf24] mt-0.5">{dest.city}</p>
                      <p className="font-sans text-[10px] text-zinc-400 mt-1 line-clamp-2">{dest.reason}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Video Player Modal */}
        {activeVideo && (
          <div className="absolute inset-0 z-30 bg-black/95 flex flex-col items-center justify-center p-4">
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-4 right-4 pixel-btn text-xs bg-rose-600 text-white"
            >
              [CLOSE VIDEO ×]
            </button>
            <div className="w-full max-w-2xl flex flex-col items-center">
              <video
                src={activeVideo.src}
                controls
                autoPlay
                className="max-h-[70vh] rounded-lg border border-[#00d4ff]/40 shadow-2xl"
              />
              <div className="mt-3 text-center">
                <p className="font-pixel text-xs text-white">{activeVideo.title}</p>
                <p className="font-sans text-xs text-zinc-400 mt-1">{activeVideo.description}</p>
              </div>
            </div>
          </div>
        )}

        {/* Image Lightbox Modal */}
        {activeImage && (
          <div className="absolute inset-0 z-30 bg-black/95 flex flex-col items-center justify-center p-4">
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-4 right-4 pixel-btn text-xs bg-rose-600 text-white"
            >
              [CLOSE IMAGE ×]
            </button>
            <div className="relative w-full max-w-4xl h-[75vh]">
              <Image
                src={activeImage.src}
                alt={activeImage.title}
                fill
                className="object-contain"
                sizes="90vw"
              />
            </div>
            <div className="mt-3 text-center">
              <p className="font-pixel text-xs text-white">{activeImage.title}</p>
              <p className="font-sans text-xs text-zinc-400 mt-1">{activeImage.description}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
