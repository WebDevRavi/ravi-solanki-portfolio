'use client';

import React, { useState } from 'react';
import { WorldNode } from '@/data/world';
import { PROJECTS, CLIENT_WORK, CREATIVE_BLUE3D } from '@/data/projects';
import { PROFILE_DATA } from '@/data/profile';
import Image from 'next/image';
import Link from 'next/link';

interface NodeDrawerProps {
  node: WorldNode | null;
  onClose: () => void;
  onPlaySound?: () => void;
}

export const NodeDrawer: React.FC<NodeDrawerProps> = ({ node, onClose, onPlaySound }) => {
  const [activeMedia, setActiveMedia] = useState<string | null>(null);
  const [mediaError, setMediaError] = useState(false);

  const handleOpenMedia = (src: string) => {
    setMediaError(false);
    setActiveMedia(src);
  };

  const handleClose = () => {
    onPlaySound?.();
    onClose();
  };

  if (!node) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      {/* Background click to dismiss */}
      <div className="absolute inset-0" onClick={handleClose} />

      {/* Main Pixel Frame Window */}
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#0a0818] rounded-lg border-2 shadow-[0_0_30px_rgba(0,0,0,0.85)] flex flex-col overflow-hidden z-10 animate-in zoom-in-95 duration-200"
        style={{ borderColor: node.color }}
      >
        {/* Top Header Bar */}
        <div
          className="flex items-center justify-between px-4 py-3 border-b select-none"
          style={{ borderColor: `${node.color}40`, backgroundColor: '#070512' }}
        >
          <div className="flex items-center gap-3">
            {node.headLogo ? (
              <div className="relative w-8 h-8 rounded-full overflow-hidden shrink-0 filter drop-shadow-[0_0_6px_rgba(0,0,0,0.6)]">
                <Image
                  src={node.headLogo}
                  alt={node.title}
                  width={32}
                  height={32}
                  className="w-full h-full object-contain"
                  style={{ imageRendering: 'pixelated' }}
                  unoptimized
                />
              </div>
            ) : (
              <span
                className="w-3 h-3 rounded-full animate-pulse"
                style={{ backgroundColor: node.color, boxShadow: `0 0 8px ${node.color}` }}
              />
            )}
            <h3 className="font-pixel text-xs md:text-sm text-white tracking-wide">
              {node.title}
            </h3>
            <span className="hidden sm:inline-block font-silkscreen text-[9px] px-2 py-0.5 rounded bg-white/5 text-zinc-400">
              {node.badge}
            </span>
          </div>

          <button
            onClick={onClose}
            className="font-pixel text-[11px] px-2.5 py-1 rounded bg-white/10 hover:bg-rose-600 hover:text-white text-zinc-300 transition-colors"
          >
            [CLOSE ×]
          </button>
        </div>

        {/* Scrollable Content Container */}
        <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6">
          {/* Node Summary & Head Logo Banner */}
          <div className="p-4 rounded bg-[#100d24] border border-white/10 flex flex-col sm:flex-row items-center sm:items-start gap-4">
            {node.headLogo && (
              <div
                className="relative w-16 h-16 md:w-20 md:h-20 shrink-0 flex items-center justify-center animate-node-float"
                style={{ '--float-duration': '4.5s' } as React.CSSProperties}
              >
                <div
                  className="absolute inset-0 rounded-full blur-[10px] pointer-events-none"
                  style={{ background: node.color, opacity: 0.4 }}
                />
                <Image
                  src={node.headLogo}
                  alt={node.title}
                  width={80}
                  height={80}
                  className="w-full h-full object-contain relative z-10"
                  style={{ imageRendering: 'pixelated' }}
                  unoptimized
                />
              </div>
            )}
            <div className="flex-1 text-center sm:text-left">
              <span
                className="font-silkscreen text-[8px] uppercase tracking-widest px-2 py-0.5 rounded inline-block mb-1.5"
                style={{ backgroundColor: `${node.color}20`, color: node.color }}
              >
                {node.badge}
              </span>
              <p className="text-zinc-200 text-sm leading-relaxed font-sans">
                {node.description}
              </p>
            </div>
          </div>

          {/* 1. 3D WORLDS */}
          {node.id === '3d' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-pixel text-xs text-[#00d4ff]">
                  BLENDER ARCHITECTURAL & LIGHTING STUDIES
                </h4>
                <span className="font-silkscreen text-[8px] text-zinc-500">
                  {CREATIVE_BLUE3D.gallery.length} REAL RENDERS
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {CREATIVE_BLUE3D.gallery.map((img) => (
                  <div
                    key={img.id}
                    onClick={() => handleOpenMedia(img.src)}
                    className="group cursor-pointer rounded bg-[#130f2b] border border-white/10 overflow-hidden hover:border-[#00d4ff] transition-all hover:scale-[1.02]"
                  >
                    <div className="relative aspect-video w-full bg-black/40">
                      <Image
                        src={img.src}
                        alt={img.title}
                        fill
                        className="object-cover group-hover:opacity-90 transition-opacity"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    <div className="p-2.5">
                      <p className="font-pixel text-[9px] text-white truncate">{img.title}</p>
                      <p className="font-silkscreen text-[8px] text-zinc-400 mt-0.5">{img.category}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 2. GAMES */}
          {node.id === 'games' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-pixel text-xs text-[#c084fc]">
                  GAME DEVELOPMENT EXPERIMENTS
                </h4>
                <span className="font-silkscreen text-[8px] text-zinc-400">
                  CRAZYGAMES PIPELINE EXP
                </span>
              </div>
              <p className="text-xs text-zinc-300 font-sans leading-relaxed">
                Built and experimented with browser games and explored distribution through platforms such as CrazyGames.
              </p>
              <div className="flex flex-wrap gap-1.5 mb-2">
                {['TypeScript', 'React', 'Vite', 'Phaser', 'HTML5', 'WebGL', 'Three.js'].map((tech) => (
                  <span key={tech} className="font-silkscreen text-[7.5px] px-2 py-0.5 rounded bg-[#c084fc]/15 text-[#c084fc] border border-[#c084fc]/30">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {PROJECTS.map((game) => (
                  <div
                    key={game.slug}
                    className="p-4 rounded bg-[#130f2b] border border-white/10 flex flex-col justify-between hover:border-[#c084fc] transition-colors"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-pixel text-[10px] text-white">{game.title}</span>
                        <span className="font-silkscreen text-[7.5px] px-1.5 py-0.5 rounded bg-[#c084fc]/20 text-[#c084fc]">
                          {game.status}
                        </span>
                      </div>
                      <p className="text-xs text-zinc-300 mb-3 font-sans leading-relaxed">{game.overview}</p>
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {game.tags.map((t) => (
                          <span
                            key={t}
                            className="font-silkscreen text-[7.5px] px-1.5 py-0.5 rounded bg-white/5 text-zinc-400"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-white/10">
                      {game.liveUrl && (
                        <a
                          href={game.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="pixel-btn text-[8.5px] py-1.5 px-3 bg-[#00d4ff] text-black hover:bg-white"
                        >
                          PLAY GAME ↗
                        </a>
                      )}
                      <Link
                        href={`/games/${game.slug}`}
                        className="pixel-btn text-[8.5px] py-1.5 px-3 bg-[#c084fc]/20 text-[#c084fc] border border-[#c084fc]/50 hover:bg-[#c084fc] hover:text-black"
                      >
                        TECH SPEC →
                      </Link>
                      {game.githubUrl && (
                        <a
                          href={game.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="pixel-btn text-[8.5px] py-1.5 px-3 bg-white/5 hover:bg-white hover:text-black"
                        >
                          GITHUB
                        </a>
                      )}
                      {game.heroMedia.type === 'video' && (
                        <button
                          onClick={() => handleOpenMedia(game.heroMedia.src)}
                          className="pixel-btn text-[8.5px] py-1.5 px-3 bg-white/10 text-zinc-300 hover:bg-white hover:text-black"
                        >
                          CLIP ▶
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 3. FILM / VFX */}
          {node.id === 'film' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-pixel text-xs text-[#fb7185]">
                  CINEMATIC EDITS, REELS & COLOR GRADING
                </h4>
                <span className="font-silkscreen text-[8px] text-zinc-500">
                  {CREATIVE_BLUE3D.videos.length} ORIGINAL FILMS
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {CREATIVE_BLUE3D.videos.map((vid) => (
                  <div
                    key={vid.id}
                    onClick={() => handleOpenMedia(vid.src)}
                    className="p-3 rounded bg-[#130f2b] border border-white/10 hover:border-[#fb7185] cursor-pointer transition-all hover:scale-[1.02]"
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-pixel text-[9px] text-white truncate">{vid.title}</span>
                      <span className="font-silkscreen text-[7.5px] text-[#fb7185]">{vid.duration}</span>
                    </div>
                    <p className="text-[11px] text-zinc-400 line-clamp-2 mb-2 font-sans">
                      {vid.description}
                    </p>
                    <div className="flex items-center justify-between font-silkscreen text-[7.5px] text-zinc-500">
                      <span>{vid.channel}</span>
                      <span className="text-[#fb7185]">[PLAY VIDEO ▶]</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 4. PHOTOGRAPHY */}
          {node.id === 'photo' && (
            <div className="space-y-4">
              <h4 className="font-pixel text-xs text-[#f472b6]">
                CINEMATIC FRAMEWORK & SPATIAL LIGHTING
              </h4>
              <p className="text-xs text-zinc-300 font-sans leading-relaxed">
                Exploring urban geometry, dramatic shadows, negative space, and nighttime atmosphere.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5">
                {CREATIVE_BLUE3D.gallery.slice(0, 4).map((img) => (
                  <div
                    key={img.id}
                    onClick={() => handleOpenMedia(img.src)}
                    className="aspect-square relative rounded bg-black/40 border border-white/10 overflow-hidden cursor-pointer hover:border-[#f472b6] transition-all hover:scale-[1.02]"
                  >
                    <Image src={img.src} alt={img.title} fill className="object-cover" sizes="25vw" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 5. CODE & DSA */}
          {node.id === 'code' && (
            <div className="space-y-4">
              <h4 className="font-pixel text-xs text-[#00CFFF]">
                CURRENTLY LEARNING
              </h4>
              <div className="p-4 rounded bg-cyan-950/20 border border-cyan-500/30 space-y-2">
                <p className="font-pixel text-[9.5px] text-[#38bdf8]">
                  DATA STRUCTURES, C++ & ALGORITHMS
                </p>
                <p className="text-sm text-zinc-200 font-sans leading-relaxed">
                  Currently learning DSA, C++, problem solving, algorithms, data structures, and strengthening computational problem-solving foundations.
                </p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {['C / C++', 'Python', 'TypeScript', 'JavaScript', 'React', 'Next.js', 'HTML5 / CSS', 'WebGL'].map((tech) => (
                  <div key={tech} className="p-2.5 rounded bg-[#130f2b] border border-white/10 text-center">
                    <span className="font-pixel text-[8.5px] text-zinc-200">{tech}</span>
                  </div>
                ))}
              </div>
              <div className="pt-2">
                <a
                  href="https://github.com/WebDevRavi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pixel-btn text-[9px] bg-[#00CFFF] text-black hover:bg-white hover:text-black shadow-[0_0_10px_rgba(0,207,255,0.3)]"
                >
                  VIEW GITHUB REPOSITORIES (@WebDevRavi)
                </a>
              </div>
            </div>
          )}

          {/* 6. AI / ML */}
          {node.id === 'ai' && (
            <div className="space-y-4">
              <h4 className="font-pixel text-xs text-[#818cf8]">
                AI / ML
              </h4>
              <div className="p-5 rounded bg-[#130f2b] border border-[#818cf8]/40 space-y-3">
                <span className="font-pixel text-[9px] px-2 py-0.5 rounded bg-[#818cf8]/20 text-[#a5b4fc] uppercase tracking-wider inline-block">
                  CURRENTLY EXPLORING
                </span>
                <p className="text-sm text-zinc-200 leading-relaxed font-sans">
                  AI &amp; ML is one of the directions I&apos;m actively exploring. I&apos;m currently strengthening my programming and problem-solving foundations before building serious projects in this space.
                </p>
              </div>
            </div>
          )}

          {/* 7. FREELANCE */}
          {node.id === 'freelance' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-pixel text-xs text-[#f59e0b]">
                  FREELANCE
                </h4>
                <span className="font-silkscreen text-[8px] text-[#f59e0b]">
                  CREATIVE WORK FOR REAL CLIENTS
                </span>
              </div>
              <p className="text-xs text-zinc-300 font-sans leading-relaxed">
                Hands-on commercial deliverables across video editing, web development, and client projects including the live ShreePlys storefront.
              </p>
              {CLIENT_WORK.map((client) => (
                <div key={client.slug} className="p-4 rounded bg-[#130f2b] border border-white/10 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-pixel text-xs text-white">{client.title}</span>
                    <span className="font-silkscreen text-[8px] text-[#f59e0b]">COMMERCIAL CLIENT</span>
                  </div>
                  <p className="text-xs text-zinc-300 font-sans leading-relaxed">{client.summary}</p>
                  <div className="flex gap-2 pt-2">
                    {client.liveUrl && (
                      <a
                        href={client.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pixel-btn text-[8.5px] bg-[#f59e0b] text-black hover:bg-white"
                      >
                        VIEW LIVE STOREFRONT
                      </a>
                    )}
                    {client.githubUrl && (
                      <a
                        href={client.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pixel-btn text-[8.5px] bg-white/10 hover:bg-white hover:text-black"
                      >
                        SOURCE CODE
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* 8. ACHIEVEMENTS */}
          {node.id === 'achievements' && (
            <div className="space-y-4">
              <h4 className="font-pixel text-xs text-[#fbbf24]">
                DOCUMENTED ACHIEVEMENTS
              </h4>
              <div className="p-5 rounded bg-[#130f2b] border border-[#fbbf24]/40 space-y-2">
                <span className="font-pixel text-[8px] px-2 py-0.5 rounded bg-[#fbbf24]/20 text-[#fbbf24] uppercase tracking-wider inline-block">
                  40K+ FOLLOWERS
                </span>
                <div className="font-pixel text-xl text-white">40,000+ AUDIENCE</div>
                <div className="font-pixel text-[9px] text-[#fbbf24]">GREW A FACEBOOK PAGE TO 40K+ FOLLOWERS</div>
                <p className="text-xs text-zinc-300 font-sans leading-relaxed pt-1">
                  Built and organically scaled a dedicated Facebook page audience from scratch to over 40,000 active organic followers through consistent creative visual content and community engagement.
                </p>
              </div>
            </div>
          )}

          {/* 9. CERTIFICATES */}
          {node.id === 'certificates' && (
            <div className="space-y-4">
              <h4 className="font-pixel text-xs text-[#f43f5e]">
                CERTIFICATES
              </h4>
              <p className="text-xs text-zinc-300 font-sans leading-relaxed">
                Coursework certificates and competitive achievements archived and verifiable on GitHub.
              </p>
              <div className="p-4 rounded bg-[#130f2b] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <p className="font-pixel text-[9.5px] text-white">GitHub Certificates Archive</p>
                  <p className="font-silkscreen text-[8px] text-zinc-400 mt-1">Directly accessible repositories and documents</p>
                </div>
                <a
                  href="https://github.com/WebDevRavi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pixel-btn text-[8.5px] bg-[#f43f5e] text-white hover:bg-white hover:text-black self-start sm:self-auto"
                >
                  OPEN REPOSITORY
                </a>
              </div>
            </div>
          )}

          {/* 10. TRAVEL / FUTURE */}
          {node.id === 'travel' && (
            <div className="space-y-4">
              <h4 className="font-pixel text-xs text-[#38bdf8]">
                THE WORLD IS STILL AHEAD.
              </h4>
              <div className="p-4 rounded bg-[#130f2b] border border-[#38bdf8]/30 space-y-2">
                <p className="text-sm text-zinc-200 font-sans leading-relaxed">
                  I haven&apos;t travelled the world yet.
                </p>
                <p className="text-sm text-[#38bdf8] font-sans font-medium leading-relaxed">
                  That&apos;s kind of the point.
                </p>
                <p className="text-sm text-zinc-200 font-sans leading-relaxed">
                  There is still a lot left to see.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {PROFILE_DATA.travelWishlist.map((loc) => (
                  <div key={loc.country} className="p-3.5 rounded bg-[#130f2b] border border-white/10 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-pixel text-[9.5px] text-white">{loc.country}</span>
                      <span className="font-silkscreen text-[7.5px] text-[#38bdf8]">{loc.city}</span>
                    </div>
                    <p className="text-xs text-zinc-400 font-sans">{loc.reason}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 11. ABOUT RAVI */}
          {node.id === 'about' && (
            <div className="space-y-4">
              <h4 className="font-pixel text-xs text-[#00CFFF]">
                WHO IS RAVI?
              </h4>
              <div className="p-5 rounded bg-[#130f2b] border border-[#00CFFF]/30 space-y-3 font-sans text-xs md:text-sm text-zinc-200 leading-relaxed">
                <p className="font-medium text-white">
                  I&apos;m Ravi Solanki — a B.Tech CSE AIML student who likes learning by building.
                </p>
                <p>
                  I&apos;m interested in 3D, animation, games, filmmaking, photography, AI/ML and whatever interesting technology I discover next.
                </p>
                <p>
                  I don&apos;t have everything figured out yet.
                </p>
                <p>
                  I&apos;m experimenting, learning, building and trying to find the direction that feels right.
                </p>
                <p>
                  I&apos;m naturally quiet and enjoy working in my own space, but curiosity keeps pulling me into new fields.
                </p>
                <p className="text-[#00CFFF] font-medium pt-1">
                  One thing I know: if I start something I care about, I want to finish it.
                </p>
              </div>

              {/* Storytelling block: NO FIXED PATH. JUST FORWARD. */}
              <div className="p-4 rounded bg-[#0b081e] border border-white/10 space-y-2">
                <h5 className="font-pixel text-[9px] text-[#fcd34d]">
                  NO FIXED PATH. JUST FORWARD.
                </h5>
                <p className="font-sans text-xs text-zinc-300 leading-relaxed">
                  I don&apos;t have one perfect roadmap yet. I&apos;m exploring different worlds, learning what interests me, and building things along the way.
                </p>
              </div>
            </div>
          )}

          {/* 12. STUDIO */}
          {node.id === 'studio' && (
            <div className="space-y-4">
              <h4 className="font-pixel text-xs text-[#f59e0b]">
                WORKSTATION & STUDIO EQUIPMENT
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {[
                  { name: 'Dual Displays', desc: 'Code + 3D Viewport' },
                  { name: 'Blender 4.x', desc: 'Environment art & lighting' },
                  { name: 'VS Code & C++', desc: 'DSA & Systems dev' },
                  { name: 'Camera & Lenses', desc: 'Cinematic reel capture' },
                  { name: 'Studio Headphones', desc: 'Acoustic audio editing' },
                  { name: 'Notebook & Pen', desc: 'Concept sketches & logic' },
                ].map((gear) => (
                  <div key={gear.name} className="p-3 rounded bg-[#130f2b] border border-white/10">
                    <p className="font-pixel text-[9px] text-white">{gear.name}</p>
                    <p className="font-silkscreen text-[7.5px] text-zinc-400 mt-1">{gear.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 13. CONTACT */}
          {node.id === 'contact' && (
            <div className="space-y-4">
              <h4 className="font-pixel text-xs text-[#00d4ff]">
                DIRECT TRANSMISSION PORTAL
              </h4>
              <p className="text-xs text-zinc-300 font-sans">
                Get in touch for game development, 3D visualization, creative editing, or technical collaboration.
              </p>
              <div className="flex flex-wrap gap-2.5">
                {PROFILE_DATA.socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pixel-btn text-[9px] bg-white/10 hover:bg-[#00d4ff] hover:text-black"
                  >
                    {s.name}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Media Lightbox Sub-Modal */}
        {activeMedia && (
          <div className="absolute inset-0 z-30 bg-black/95 flex flex-col items-center justify-center p-4">
            <button
              onClick={() => setActiveMedia(null)}
              className="absolute top-4 right-4 pixel-btn text-xs bg-rose-600 text-white"
            >
              [CLOSE MEDIA ×]
            </button>
            <div className="relative max-w-3xl max-h-[75vh] w-full flex items-center justify-center">
              {activeMedia.endsWith('.mp4') || activeMedia.endsWith('.mov') ? (
                mediaError ? (
                  <div className="flex flex-col items-center justify-center p-8 bg-[#110e28] border border-[#00d4ff]/40 rounded-xl max-w-md text-center">
                    <div className="relative mb-3 h-12 w-12 overflow-hidden rounded-lg border border-[#00d4ff]/40 bg-black">
                      <Image src="/brand/blue-logo.jpg" alt="Blue 3D" fill className="object-cover" />
                    </div>
                    <p className="font-pixel text-xs text-[#00d4ff] mb-2">ORIGINAL 4K FILM REEL</p>
                    <p className="text-xs text-zinc-300 font-sans mb-5 leading-relaxed">
                      Streamed directly on Instagram with full high-fidelity audio & color grade.
                    </p>
                    <a
                      href="https://www.instagram.com/blue3d_/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pixel-btn text-xs py-2 px-5 bg-[#00d4ff] text-black hover:bg-white"
                    >
                      WATCH ON INSTAGRAM ↗
                    </a>
                  </div>
                ) : (
                  <video
                    src={activeMedia}
                    controls
                    autoPlay
                    onError={() => setMediaError(true)}
                    className="max-h-[70vh] rounded border border-[#00d4ff]/40 shadow-2xl"
                  />
                )
              ) : (
                <div className="relative w-full h-[60vh]">
                  <Image src={activeMedia} alt="Media" fill className="object-contain" sizes="80vw" />
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
