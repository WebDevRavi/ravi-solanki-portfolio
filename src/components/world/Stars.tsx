'use client';

import React, { useMemo } from 'react';

interface StarProps {
  count?: number;
}

interface StarData {
  id: number;
  x: number; // 0 to 100%
  y: number; // 0 to 100%
  type: 'static-dot' | 'blinking-dot' | 'four-point';
  size: number;
  duration: number; // seconds
  delay: number; // seconds
  color: string;
  opacity: number;
}

export const Stars: React.FC<StarProps> = ({ count = 160 }) => {
  // Deterministic starfield per Section 39
  const stars = useMemo(() => {
    const list: StarData[] = [];
    const colors = ['#ffffff', '#e0e7ff', '#bae6fd', '#ddd6fe', '#fef08a'];

    // Seeded pseudo-random generator
    let seed = 4242;
    const random = () => {
      seed = (seed * 9301 + 49297) % 233280;
      return seed / 233280;
    };

    const durations = [3.5, 4.2, 5.0, 5.8, 6.4, 7.2];

    for (let i = 0; i < count; i++) {
      const rand = random();
      let type: StarData['type'] = 'static-dot';
      let size = 1.5;
      let opacity = 0.25 + random() * 0.4;

      if (rand > 0.85) {
        // TYPE 3: Small 4-point star with subtle glow (~15%)
        type = 'four-point';
        size = 6 + Math.floor(random() * 3); // 6-8px
        opacity = 0.45 + random() * 0.4;
      } else if (rand > 0.60) {
        // TYPE 2: Slow blinking star (~25%)
        type = 'blinking-dot';
        size = 1.5 + (random() > 0.5 ? 0.5 : 0);
        opacity = 0.3 + random() * 0.45;
      } else {
        // TYPE 1: Tiny static dot (~60%, no animation)
        type = 'static-dot';
        size = random() > 0.6 ? 1.5 : 1.0;
        opacity = 0.2 + random() * 0.35;
      }

      list.push({
        id: i,
        x: Number((random() * 96 + 2).toFixed(2)),
        y: Number((random() * 98 + 1).toFixed(2)),
        type,
        size,
        duration: durations[i % durations.length] + Number((random() * 1.5).toFixed(2)),
        delay: Number((random() * 6).toFixed(2)),
        color: colors[Math.floor(random() * colors.length)],
        opacity: Number(opacity.toFixed(2)),
      });
    }
    return list;
  }, [count]);

  return (
    <div className="absolute inset-0 pointer-events-none select-none z-[1] overflow-hidden">
      {stars.map((star) => {
        // TYPE 1: Tiny static dot (NO CSS animation)
        if (star.type === 'static-dot') {
          return (
            <div
              key={star.id}
              className="absolute rounded-full"
              style={{
                left: `${star.x}%`,
                top: `${star.y}%`,
                width: `${star.size}px`,
                height: `${star.size}px`,
                backgroundColor: star.color,
                opacity: star.opacity,
              }}
            />
          );
        }

        // TYPE 2: Slow blinking star
        if (star.type === 'blinking-dot') {
          return (
            <div
              key={star.id}
              className="absolute rounded-full animate-twinkle"
              style={
                {
                  left: `${star.x}%`,
                  top: `${star.y}%`,
                  width: `${star.size}px`,
                  height: `${star.size}px`,
                  backgroundColor: star.color,
                  opacity: star.opacity,
                  '--twinkle-duration': `${star.duration}s`,
                  '--twinkle-delay': `${star.delay}s`,
                } as React.CSSProperties
              }
            />
          );
        }

        // TYPE 3: Small 4-point star with subtle glow
        return (
          <div
            key={star.id}
            className="absolute animate-twinkle transform -translate-x-1/2 -translate-y-1/2"
            style={
              {
                left: `${star.x}%`,
                top: `${star.y}%`,
                width: `${star.size}px`,
                height: `${star.size}px`,
                '--twinkle-duration': `${star.duration}s`,
                '--twinkle-delay': `${star.delay}s`,
              } as React.CSSProperties
            }
          >
            <svg
              width={star.size}
              height={star.size}
              viewBox="0 0 10 10"
              fill="none"
              shapeRendering="crispEdges"
              style={{
                filter: `drop-shadow(0 0 3px ${star.color})`,
                opacity: star.opacity,
              }}
            >
              {/* 4-point pixel star */}
              <rect x="4" y="0" width="2" height="10" fill={star.color} />
              <rect x="0" y="4" width="10" height="2" fill={star.color} />
              <rect x="4" y="4" width="2" height="2" fill="#ffffff" />
            </svg>
          </div>
        );
      })}
    </div>
  );
};
