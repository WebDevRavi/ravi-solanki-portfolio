'use client';

import React from 'react';
import Image from 'next/image';

interface CloudInstance {
  id: string;
  depthTier: 'far' | 'mid' | 'near';
  yPercent: number;
  duration: number; // seconds
  delay: number; // negative start delay so clouds already populate the sky
  opacity: number;
  width: number; // width in pixels
  flip?: boolean;
  filter?: string;
}

const CLOUDS: CloudInstance[] = [
  // FAR CLOUDS: smaller, lighter, slow drifting background haze
  { id: 'c-far-1', depthTier: 'far', yPercent: 4, duration: 165, delay: -35, opacity: 0.22, width: 190, flip: false, filter: 'brightness(0.9) hue-rotate(-5deg)' },
  { id: 'c-far-2', depthTier: 'far', yPercent: 19, duration: 180, delay: -95, opacity: 0.2, width: 220, flip: true, filter: 'brightness(0.85)' },
  { id: 'c-far-3', depthTier: 'far', yPercent: 44, duration: 170, delay: -130, opacity: 0.18, width: 200, flip: false, filter: 'brightness(0.9)' },
  { id: 'c-far-4', depthTier: 'far', yPercent: 68, duration: 160, delay: -45, opacity: 0.22, width: 230, flip: true, filter: 'brightness(0.88)' },

  // MID CLOUDS: medium scale, moderate speed, rich lavender atmospheric presence
  { id: 'c-mid-1', depthTier: 'mid', yPercent: 11, duration: 120, delay: -60, opacity: 0.38, width: 280, flip: false },
  { id: 'c-mid-2', depthTier: 'mid', yPercent: 29, duration: 135, delay: -18, opacity: 0.35, width: 330, flip: true },
  { id: 'c-mid-3', depthTier: 'mid', yPercent: 54, duration: 115, delay: -85, opacity: 0.32, width: 300, flip: false },
  { id: 'c-mid-4', depthTier: 'mid', yPercent: 78, duration: 128, delay: -50, opacity: 0.36, width: 320, flip: true },

  // NEAR CLOUDS: largest scale, crisper contrast, foreground parallax drift
  { id: 'c-near-1', depthTier: 'near', yPercent: 15, duration: 88, delay: -22, opacity: 0.52, width: 400, flip: false },
  { id: 'c-near-2', depthTier: 'near', yPercent: 37, duration: 78, delay: -65, opacity: 0.48, width: 380, flip: true },
  { id: 'c-near-3', depthTier: 'near', yPercent: 62, duration: 94, delay: -115, opacity: 0.5, width: 420, flip: false },
  { id: 'c-near-4', depthTier: 'near', yPercent: 86, duration: 84, delay: -42, opacity: 0.54, width: 440, flip: true },
];

export const Clouds: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none select-none z-[3] overflow-hidden">
      {CLOUDS.map((cloud) => (
        <div
          key={cloud.id}
          className="absolute left-0 will-change-transform pointer-events-none"
          style={{
            top: `${cloud.yPercent}%`,
            animation: `cloud-drift ${cloud.duration}s linear infinite`,
            animationDelay: `${cloud.delay}s`,
          }}
        >
          <div
            style={{
              width: `${cloud.width}px`,
              opacity: cloud.opacity,
              transform: cloud.flip ? 'scaleX(-1)' : undefined,
              filter: cloud.filter,
            }}
          >
            <Image
              src="/assets/sky/pixel-cloud.png"
              alt="Pixel Cloud"
              width={cloud.width}
              height={Math.round((cloud.width * 277) / 922)}
              unoptimized
              className="w-full h-auto select-none pointer-events-none"
              style={{
                imageRendering: 'pixelated',
                aspectRatio: '922 / 277',
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
