'use client';

import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { sound } from '@/utils/audio';

export const VortexGlideFeature: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  // Autoplay when in view, pause when scrolled away
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {});
            setIsPlaying(true);
          } else {
            video.pause();
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    sound.playClick(900, 0.02);
    if (video.paused) {
      video.play().catch(() => {});
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    sound.playClick(950, 0.02);
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  return (
    <section
      ref={containerRef}
      id="games"
      className="relative w-full max-w-6xl mx-auto pl-8 pr-4 sm:px-8 md:px-12 py-20 md:py-28"
    >
      {/* Editorial Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2 font-mono text-xs tracking-widest text-[#3b82f6] uppercase">
          <span>01 / FEATURED GAME</span>
          <span className="text-zinc-600">·</span>
          <span>3D WEBGL</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
            Vortex Glide
          </h2>
          <p className="font-mono text-xs sm:text-sm text-zinc-400">
            Three.js · WebGL · Procedural Tunnel · Web Audio
          </p>
        </div>
      </div>

      {/* Dominant Media Viewport */}
      <div className="relative w-full aspect-video md:aspect-[21/9] rounded-xl overflow-hidden bg-black/80 border border-white/10 shadow-2xl mb-8 group">
        <video
          ref={videoRef}
          src="/games/vortex-glide.mp4"
          playsInline
          loop
          muted
          autoPlay
          className="w-full h-full object-cover select-none"
        />

        {/* Video Control Bar */}
        <div className="absolute bottom-4 right-4 z-10 flex items-center gap-2 bg-[#08070d]/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 opacity-90 group-hover:opacity-100 transition-opacity">
          <button
            onClick={togglePlay}
            className="font-mono text-xs text-zinc-300 hover:text-white transition-colors"
            title={isPlaying ? 'Pause video' : 'Play video'}
          >
            {isPlaying ? 'PAUSE ⏸' : 'PLAY ▶'}
          </button>
          <span className="text-zinc-600">|</span>
          <button
            onClick={toggleMute}
            className="font-mono text-xs text-zinc-300 hover:text-white transition-colors"
            title={isMuted ? 'Unmute video' : 'Mute video'}
          >
            {isMuted ? 'MUTED 🔇' : 'AUDIO 🔊'}
          </button>
        </div>
      </div>

      {/* Minimal Copy + Direct Actions */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 border-t border-white/5 pt-6">
        <p className="font-sans text-sm sm:text-base text-zinc-300 max-w-2xl leading-relaxed">
          A high-speed 3D tunnel arcade game built with Three.js and WebGL. Features procedural decagonal track generation, dynamic obstacle reachability validation, and real-time velocity curves.
        </p>

        <div className="flex items-center gap-3 shrink-0">
          <a
            href="https://github.com/WebDevRavi/VortexGlide"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sound.playClick(1000, 0.02)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white text-zinc-950 font-sans text-xs sm:text-sm font-semibold hover:bg-zinc-200 transition-all hover:scale-[1.02]"
          >
            <span>View Code on GitHub</span>
            <span className="text-zinc-500">↗</span>
          </a>

          <Link
            href="/games/vortex-glide"
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
