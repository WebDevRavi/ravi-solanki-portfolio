'use client';

import React from 'react';

interface MountainsProps {
  scrollY?: number;
}

export const Mountains: React.FC<MountainsProps> = ({ scrollY = 0 }) => {
  // Parallax offsets according to Section 13 specs
  const farOffset = -scrollY * 0.05;
  const midOffset = -scrollY * 0.12;
  const nearOffset = -scrollY * 0.22;
  const forestOffset = -scrollY * 0.35;

  return (
    <div className="absolute inset-0 pointer-events-none select-none z-[4] overflow-hidden">
      {/* --- MID-JOURNEY LAYER A (Around ~28-34% vertical span: Behind Film/Photography) --- */}
      <div
        className="absolute inset-x-0 h-[400px] will-change-transform opacity-30"
        style={{
          top: '26%',
          transform: `translate3d(0, ${scrollY * 0.04}px, 0)`,
        }}
      >
        <svg viewBox="0 0 1440 200" preserveAspectRatio="none" className="w-full h-full" shapeRendering="crispEdges">
          <path
            d="M 0 200 L 0 140 L 90 110 L 210 110 L 320 70 L 460 70 L 590 120 L 730 120 L 850 60 L 980 60 L 1120 110 L 1260 80 L 1440 120 L 1440 200 Z"
            fill="#160e2f"
          />
        </svg>
      </div>

      {/* --- MID-JOURNEY LAYER B (Around ~50-56% vertical span: Behind Code/AI/Freelance) --- */}
      <div
        className="absolute inset-x-0 h-[450px] will-change-transform opacity-40"
        style={{
          top: '48%',
          transform: `translate3d(0, ${scrollY * 0.05}px, 0)`,
        }}
      >
        <svg viewBox="0 0 1440 220" preserveAspectRatio="none" className="w-full h-full" shapeRendering="crispEdges">
          <path
            d="M 0 220 L 0 130 L 110 80 L 240 80 L 370 120 L 510 120 L 640 50 L 780 50 L 920 110 L 1050 70 L 1190 70 L 1320 120 L 1440 90 L 1440 220 Z"
            fill="#1a1138"
          />
          {/* Subtle ridge rim highlight */}
          <path d="M 640 50 L 780 50 L 800 65 L 660 65 Z" fill="#3b236e" opacity="0.4" />
        </svg>
      </div>

      {/* --- MID-JOURNEY LAYER C (Around ~70-76% vertical span: Approaching Travel/About) --- */}
      <div
        className="absolute inset-x-0 h-[480px] will-change-transform opacity-50"
        style={{
          top: '68%',
          transform: `translate3d(0, ${scrollY * 0.06}px, 0)`,
        }}
      >
        <svg viewBox="0 0 1440 240" preserveAspectRatio="none" className="w-full h-full" shapeRendering="crispEdges">
          <path
            d="M 0 240 L 0 120 L 140 70 L 290 70 L 440 110 L 600 60 L 750 60 L 900 100 L 1060 40 L 1220 40 L 1350 90 L 1440 70 L 1440 240 Z"
            fill="#150d2c"
          />
        </svg>
      </div>

      {/* --- BOTTOM GRAND MOUNTAIN SYSTEM & HORIZON (Studio & Contact Realm: 82% to 100%) --- */}
      <div className="absolute inset-x-0 bottom-0 h-[1000px] overflow-hidden">
        {/* 1. Far Mountain Layer (0.05x parallax) */}
        <div
          className="absolute inset-x-0 bottom-[220px] h-[400px] will-change-transform opacity-75"
          style={{ transform: `translate3d(0, ${farOffset}px, 0)` }}
        >
          <svg
            viewBox="0 0 1440 300"
            preserveAspectRatio="none"
            className="w-full h-full"
            shapeRendering="crispEdges"
          >
            {/* Stepped pixel peaks in distant indigo mist */}
            <path
              d="
                M 0 300
                L 0 180
                L 60 180 L 120 150 L 180 150 L 240 120 L 300 120 L 360 90 L 400 90 L 460 140 L 520 140 L 580 170
                L 640 170 L 700 110 L 760 110 L 820 80 L 880 80 L 940 130 L 1000 130 L 1060 100 L 1120 100
                L 1180 60 L 1240 60 L 1300 120 L 1380 120 L 1440 170
                L 1440 300 Z
              "
              fill="#1e133d"
            />
            {/* Distant Peak Highlights */}
            <path
              d="
                M 360 90 L 400 90 L 420 115 L 380 115 Z
                M 820 80 L 880 80 L 900 110 L 840 110 Z
                M 1180 60 L 1240 60 L 1260 90 L 1200 90 Z
              "
              fill="#372467"
              opacity="0.5"
            />
          </svg>
        </div>

        {/* 2. Middle Mountain Layer (0.12x parallax) */}
        <div
          className="absolute inset-x-0 bottom-[140px] h-[340px] will-change-transform opacity-85"
          style={{ transform: `translate3d(0, ${midOffset}px, 0)` }}
        >
          <svg
            viewBox="0 0 1440 260"
            preserveAspectRatio="none"
            className="w-full h-full"
            shapeRendering="crispEdges"
          >
            <path
              d="
                M 0 260
                L 0 140
                L 40 140 L 90 110 L 150 110 L 220 80 L 280 80 L 340 120 L 410 120 L 480 70 L 550 70 L 620 130
                L 690 130 L 750 90 L 830 90 L 900 50 L 970 50 L 1040 110 L 1110 110 L 1180 80 L 1250 80
                L 1320 120 L 1390 120 L 1440 150
                L 1440 260 Z
              "
              fill="#180e32"
            />
            {/* Mid Ridge Rim Light */}
            <path
              d="
                M 220 80 L 280 80 L 300 95 L 240 95 Z
                M 480 70 L 550 70 L 570 85 L 500 85 Z
                M 900 50 L 970 50 L 990 65 L 920 65 Z
              "
              fill="#4c2c77"
              opacity="0.4"
            />
          </svg>
        </div>

        {/* 3. Near Mountain Ridge (0.22x parallax) */}
        <div
          className="absolute inset-x-0 bottom-[70px] h-[260px] will-change-transform"
          style={{ transform: `translate3d(0, ${nearOffset}px, 0)` }}
        >
          <svg
            viewBox="0 0 1440 200"
            preserveAspectRatio="none"
            className="w-full h-full"
            shapeRendering="crispEdges"
          >
            <path
              d="
                M 0 200
                L 0 90
                L 70 90 L 140 60 L 230 60 L 310 100 L 400 100 L 480 50 L 580 50 L 680 90 L 780 90
                L 860 40 L 960 40 L 1050 80 L 1150 80 L 1240 40 L 1340 40 L 1440 70
                L 1440 200 Z
              "
              fill="#120924"
            />
          </svg>
        </div>

        {/* 4. Foreground Pine Forest Silhouette (0.35x parallax) */}
        <div
          className="absolute inset-x-0 bottom-0 h-[190px] will-change-transform"
          style={{ transform: `translate3d(0, ${forestOffset}px, 0)` }}
        >
          <svg
            viewBox="0 0 1440 160"
            preserveAspectRatio="none"
            className="w-full h-full"
            shapeRendering="crispEdges"
          >
            {/* Dense pixel pine tree canopy */}
            <path
              d="
                M 0 160
                L 0 60
                L 15 40 L 30 60 L 45 30 L 60 60 L 75 45 L 90 70 L 105 35 L 120 65 L 135 40 L 150 70
                L 165 30 L 180 60 L 195 45 L 210 75 L 225 35 L 240 65 L 255 40 L 270 70 L 285 30 L 300 60
                L 315 45 L 330 75 L 345 35 L 360 65 L 375 40 L 390 70 L 405 25 L 420 60 L 435 45 L 450 75
                L 465 35 L 480 65 L 495 40 L 510 70 L 525 30 L 540 60 L 555 45 L 570 75 L 585 35 L 600 65
                L 615 40 L 630 70 L 645 25 L 660 60 L 675 45 L 690 75 L 705 35 L 720 65 L 735 40 L 750 70
                L 765 30 L 780 60 L 795 45 L 810 75 L 825 35 L 840 65 L 855 40 L 870 70 L 885 25 L 900 60
                L 915 45 L 930 75 L 945 35 L 960 65 L 975 40 L 990 70 L 1005 30 L 1020 60 L 1035 45 L 1050 75
                L 1065 35 L 1080 65 L 1095 40 L 1110 70 L 1125 25 L 1140 60 L 1155 45 L 1170 75 L 1185 35
                L 1200 65 L 1215 40 L 1230 70 L 1245 30 L 1260 60 L 1275 45 L 1290 75 L 1305 35 L 1320 65
                L 1335 40 L 1350 70 L 1365 25 L 1380 60 L 1395 45 L 1410 75 L 1425 35 L 1440 65
                L 1440 160 Z
              "
              fill="#080412"
            />
            {/* Subtle warm fireflies in the forest floor */}
            <rect x="220" y="90" width="3" height="3" fill="#fcd34d" opacity="0.8" />
            <rect x="540" y="80" width="3" height="3" fill="#fbbf24" opacity="0.7" />
            <rect x="880" y="85" width="3" height="3" fill="#f59e0b" opacity="0.9" />
            <rect x="1190" y="95" width="3" height="3" fill="#fcd34d" opacity="0.7" />
          </svg>
        </div>
      </div>
    </div>
  );
};
