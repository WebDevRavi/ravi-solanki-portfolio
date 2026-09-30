'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { CREATIVE_BLUE3D, CreativeImage } from '@/data/projects';
import { CreativeLightbox } from '@/components/creative/CreativeLightbox';
import { sound } from '@/utils/audio';

export function Blue3DSection() {
  const [activeVideoSrc, setActiveVideoSrc] = useState('/videos/what-you-want-to-be.mov');
  const [activeVideoTitle, setActiveVideoTitle] = useState('What You Want To Be · 4K Film Vignette');
  const [videoHasError, setVideoHasError] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [selectedLightboxImage, setSelectedLightboxImage] = useState<CreativeImage | null>(null);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  const toggleSound = () => {
    if (!videoRef.current) return;
    const newMuted = !isMuted;
    videoRef.current.muted = newMuted;
    setIsMuted(newMuted);
    sound.playClick(newMuted ? 400 : 800, 0.05);
  };

  const handleTrackChange = (src: string, title: string) => {
    setActiveVideoSrc(src);
    setActiveVideoTitle(title);
    setVideoHasError(false);
    sound.playClick(950, 0.03);
  };

  const openLightbox = (img: CreativeImage) => {
    sound.playPowerUp();
    setSelectedLightboxImage(img);
  };

  const curatedStills = CREATIVE_BLUE3D.gallery;

  return (
    <section id="creative" className="w-full px-6 py-24 md:px-12 md:py-36">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 border-b border-[#1f2228] pb-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <div className="flex items-center gap-3">
                <div className="relative h-7 w-7 overflow-hidden rounded-md border border-[#FCDD0D]/40 bg-black shadow-md">
                  <Image
                    src="/brand/blue-logo.jpg"
                    alt="Blue3D mark"
                    fill
                    sizes="28px"
                    className="object-cover"
                  />
                </div>
                <span className="font-mono text-xs font-bold tracking-widest text-[#FCDD0D] uppercase">
                  CREATIVE SUB-BRAND // 04
                </span>
              </div>

              <h2 className="mt-4 font-sans text-5xl font-black tracking-tight text-white sm:text-7xl md:text-8xl">
                BLUE3D
              </h2>
              <p className="mt-2 font-mono text-sm tracking-widest text-[#9ca3af] uppercase">
                3D VISUALS · VFX MOTION · DIRECTION · CINEMATOGRAPHY
              </p>
            </div>

            {/* Quiet Verified Social Channels */}
            <div className="flex items-center gap-4 font-mono text-xs">
              <a
                href="https://www.instagram.com/blue3d_/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sound.playClick(900, 0.02)}
                className="rounded-full border border-[#27272a] bg-[#111215] px-4 py-2 text-[#FCDD0D] transition-all hover:border-[#FCDD0D] hover:bg-[#1a1b22]"
              >
                @blue3d_ ↗
              </a>
              <a
                href="https://www.instagram.com/ravi_solanki_1567/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sound.playClick(900, 0.02)}
                className="rounded-full border border-[#27272a] bg-[#111215] px-4 py-2 text-[#9ca3af] transition-all hover:border-white hover:text-white"
              >
                @ravi_solanki_1567 ↗
              </a>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 1. CINEMA THEATER SCREEN */}
        {/* ========================================================================= */}
        <div className="mb-28">
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-[#27272a] bg-black shadow-[0_25px_60px_rgba(0,0,0,0.9)]">
            <video
              ref={videoRef}
              key={activeVideoSrc}
              src={activeVideoSrc}
              autoPlay
              loop
              muted={isMuted}
              playsInline
              controls
              onError={() => setVideoHasError(true)}
              onLoadedData={() => setVideoHasError(false)}
              className={`h-full w-full object-cover ${videoHasError ? 'hidden' : 'block'}`}
            />

            {videoHasError && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#080614] p-8 text-center">
                <div className="relative mb-4 h-16 w-16 overflow-hidden rounded-xl border border-[#FCDD0D]/40 bg-black">
                  <Image src="/brand/blue-logo.jpg" alt="Blue 3D" fill className="object-cover" />
                </div>
                <h4 className="font-sans text-xl font-bold text-white sm:text-2xl">
                  {activeVideoTitle}
                </h4>
                <p className="mt-2 max-w-md font-mono text-xs text-[#9ca3af]">
                  Original 4K cinematic film reel published on Instagram. Watch the high-definition master with complete sound design and color grading directly on Ravi&apos;s channels.
                </p>
                <div className="mt-6 flex flex-wrap items-center justify-center gap-4 font-mono text-xs">
                  <a
                    href="https://www.instagram.com/blue3d_/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-[#FCDD0D] px-5 py-2 font-bold text-black transition-all hover:bg-white"
                  >
                    WATCH ON @BLUE3D_ ↗
                  </a>
                  <a
                    href="https://www.instagram.com/ravi_solanki_1567/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-white/20 bg-white/10 px-5 py-2 text-white transition-all hover:bg-white hover:text-black"
                  >
                    @RAVI_SOLANKI_1567 ↗
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Theater Controls & Channel Switcher */}
          <div className="mt-5 flex flex-col justify-between gap-4 font-mono text-xs sm:flex-row sm:items-center">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[#FCDD0D] animate-ping" />
              <span className="font-bold text-white">{activeVideoTitle}</span>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={toggleSound}
                className="rounded border border-[#3f3f46] bg-[#14151a] px-3 py-1.5 text-[#FCDD0D] transition-colors hover:bg-white hover:text-black font-semibold"
              >
                {isMuted ? '🔊 CLICK TO UNMUTE' : '🔈 SOUND ACTIVE'}
              </button>

              <div className="flex items-center gap-2 text-[#9ca3af]">
                <button
                  onClick={() => handleTrackChange('/videos/what-you-want-to-be.mov', 'What You Want To Be · 4K Film Vignette')}
                  className={`rounded px-2.5 py-1 transition-colors ${
                    activeVideoSrc.includes('what-you-want-to-be')
                      ? 'bg-[#FCDD0D] text-black font-bold'
                      : 'hover:text-white'
                  }`}
                >
                  WHAT YOU WANT TO BE (4K)
                </button>
                <button
                  onClick={() => handleTrackChange('/videos/arz-kiya-hai.mp4', 'Arz Kiya Hai · Spoken Word Film')}
                  className={`rounded px-2.5 py-1 transition-colors ${
                    activeVideoSrc.includes('arz-kiya-hai')
                      ? 'bg-[#FCDD0D] text-black font-bold'
                      : 'hover:text-white'
                  }`}
                >
                  ARZ KIYA HAI
                </button>
                <button
                  onClick={() => handleTrackChange('/videos/loop.mp4', 'Graded Cinematic Loop · VFX Motion')}
                  className={`rounded px-2.5 py-1 transition-colors ${
                    activeVideoSrc.includes('loop')
                      ? 'bg-[#FCDD0D] text-black font-bold'
                      : 'hover:text-white'
                  }`}
                >
                  VFX LOOP
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. CURATED GALLERY OF VERIFIED STILLS */}
        {/* ========================================================================= */}
        <div>
          <div className="mb-10 flex items-center justify-between font-mono text-xs text-[#9ca3af]">
            <span className="tracking-widest uppercase">STILL FRAMES & DIRECTION ARCHIVE</span>
            <span>7 VERIFIED ASSETS · CLICK TO EXPAND FULLSCREEN</span>
          </div>

          {/* Lead Hero Frame */}
          <div
            onClick={() => openLightbox(curatedStills[0])}
            className="group relative mb-8 aspect-[16/9] w-full cursor-pointer overflow-hidden rounded-xl border border-[#27272a] bg-black shadow-xl"
          >
            <Image
              src={curatedStills[0].src}
              alt={curatedStills[0].title}
              fill
              priority
              sizes="100vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="absolute bottom-6 left-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="font-sans text-xl font-bold text-white block">
                {curatedStills[0].title}
              </span>
              <span className="mt-1 font-mono text-xs text-[#FCDD0D] block">
                {curatedStills[0].category} // CLICK TO EXPAND FULLSCREEN ⤢
              </span>
            </div>
          </div>

          {/* Diptych 2-Column Grid */}
          <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-2">
            {curatedStills.slice(1, 3).map((item) => (
              <div
                key={item.id}
                onClick={() => openLightbox(item)}
                className="group relative aspect-[16/10] w-full cursor-pointer overflow-hidden rounded-xl border border-[#27272a] bg-black shadow-xl"
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute bottom-4 left-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 font-mono text-xs text-white">
                  <span className="font-bold">{item.title}</span>
                  <span className="ml-2 text-[#FCDD0D]">⤢</span>
                </div>
              </div>
            ))}
          </div>

          {/* 4-Column Bottom Grid */}
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {curatedStills.slice(3, 7).map((item) => (
              <div
                key={item.id}
                onClick={() => openLightbox(item)}
                className="group relative aspect-[16/10] w-full cursor-pointer overflow-hidden rounded-lg border border-[#27272a] bg-black shadow-lg"
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                  <span className="font-mono text-xs font-bold text-white bg-black/70 px-2.5 py-1 rounded border border-white/20">
                    EXPAND ⤢
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <CreativeLightbox
        image={selectedLightboxImage}
        images={curatedStills}
        onClose={() => setSelectedLightboxImage(null)}
        onSelect={(img) => setSelectedLightboxImage(img)}
      />
    </section>
  );
}
