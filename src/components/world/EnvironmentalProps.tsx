'use client';

import React from 'react';

interface EnvironmentalPropsComponentProps {
  isMobile: boolean;
}

export const EnvironmentalProps: React.FC<EnvironmentalPropsComponentProps> = ({ isMobile }) => {
  return (
    <div className="absolute inset-0 pointer-events-none select-none z-[8] overflow-hidden">
      {/* 1. Near 3D Worlds: Floating Monolithic Wireframe Crystal & Suzanne Gem */}
      <div
        className="absolute transform -translate-x-1/2 -translate-y-1/2 animate-node-float opacity-75"
        style={{
          left: isMobile ? '82%' : '76%',
          top: '16.5%',
          '--float-duration': '5s',
          '--float-delay': '-1.2s',
        } as React.CSSProperties}
      >
        <svg width="48" height="48" viewBox="0 0 32 32" fill="none" shapeRendering="crispEdges">
          {/* Wireframe Octahedron */}
          <polygon points="16,3 27,16 16,21 5,16" fill="#0369a1" fillOpacity="0.4" stroke="#38bdf8" strokeWidth="1" />
          <polygon points="16,29 27,16 16,21 5,16" fill="#0284c7" fillOpacity="0.3" stroke="#38bdf8" strokeWidth="1" />
          <line x1="16" y1="3" x2="16" y2="29" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.7" />
          {/* Sparkle pixel */}
          <rect x="15" y="15" width="2" height="2" fill="#ffffff" />
        </svg>
      </div>

      {/* 2. Near Games: Retro Pixel Arcade Machine & Cartridge */}
      <div
        className="absolute transform -translate-x-1/2 -translate-y-1/2 animate-node-float opacity-70"
        style={{
          left: isMobile ? '16%' : '22%',
          top: '21.5%',
          '--float-duration': '6s',
          '--float-delay': '-2.5s',
        } as React.CSSProperties}
      >
        <svg width="42" height="52" viewBox="0 0 28 36" fill="none" shapeRendering="crispEdges">
          {/* Arcade Cabinet */}
          <polygon points="4,2 24,2 26,10 24,34 4,34 2,10" fill="#1e1035" stroke="#a855f7" strokeWidth="1" />
          {/* Marquee */}
          <rect x="6" y="4" width="16" height="5" fill="#f43f5e" />
          {/* Screen with pixel scanlines */}
          <rect x="6" y="11" width="16" height="12" fill="#090514" />
          <rect x="8" y="13" width="4" height="4" fill="#38bdf8" />
          <rect x="14" y="17" width="5" height="3" fill="#facc15" />
          {/* Control Panel joystick & buttons */}
          <rect x="6" y="24" width="16" height="4" fill="#2e1065" />
          <rect x="9" y="22" width="2" height="4" fill="#ef4444" />
          <circle cx="10" cy="22" r="1.5" fill="#ef4444" />
          <rect x="15" y="25" width="2" height="2" fill="#38bdf8" />
          <rect x="19" y="25" width="2" height="2" fill="#fbbf24" />
        </svg>
      </div>

      {/* 3. Near Film / VFX: Cinema Camera on Tripod & Film Clapper */}
      <div
        className="absolute transform -translate-x-1/2 -translate-y-1/2 animate-node-float opacity-70"
        style={{
          left: isMobile ? '85%' : '82%',
          top: '26.5%',
          '--float-duration': '5.8s',
          '--float-delay': '-0.8s',
        } as React.CSSProperties}
      >
        <svg width="48" height="56" viewBox="0 0 32 38" fill="none" shapeRendering="crispEdges">
          {/* Dual Film Spools */}
          <circle cx="11" cy="7" r="5" fill="#1e1b4b" stroke="#fb923c" strokeWidth="1" />
          <circle cx="21" cy="7" r="5" fill="#1e1b4b" stroke="#fb923c" strokeWidth="1" />
          <circle cx="11" cy="7" r="1.5" fill="#fed7aa" />
          <circle cx="21" cy="7" r="1.5" fill="#fed7aa" />
          {/* Camera Body */}
          <rect x="7" y="12" width="18" height="12" fill="#1c1917" stroke="#fb923c" strokeWidth="1" />
          {/* Lens */}
          <polygon points="25,14 31,11 31,21 25,18" fill="#ea580c" />
          <rect x="25" y="15" width="2" height="2" fill="#ffffff" />
          {/* Tripod Legs */}
          <line x1="16" y1="24" x2="8" y2="37" stroke="#78716c" strokeWidth="1.5" />
          <line x1="16" y1="24" x2="16" y2="37" stroke="#a8a29e" strokeWidth="1.5" />
          <line x1="16" y1="24" x2="24" y2="37" stroke="#78716c" strokeWidth="1.5" />
        </svg>
      </div>

      {/* 4. Near Photography: Hanging Polaroid Frame in Space */}
      <div
        className="absolute transform -translate-x-1/2 -translate-y-1/2 animate-node-float opacity-75"
        style={{
          left: isMobile ? '16%' : '18%',
          top: '31.5%',
          '--float-duration': '6.4s',
          '--float-delay': '-3.1s',
        } as React.CSSProperties}
      >
        <svg width="44" height="54" viewBox="0 0 28 36" fill="none" shapeRendering="crispEdges">
          {/* Suspension wire */}
          <line x1="14" y1="0" x2="14" y2="6" stroke="#94a3b8" strokeWidth="0.8" strokeDasharray="1 1" />
          {/* Clothespin */}
          <rect x="13" y="4" width="2" height="4" fill="#d97706" />
          {/* White Polaroid Paper */}
          <rect x="3" y="7" width="22" height="28" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="0.8" />
          {/* Photo area with mini pixel landscape (Night mountains + moon) */}
          <rect x="5" y="9" width="18" height="17" fill="#090514" />
          <circle cx="17" cy="13" r="2" fill="#fef08a" />
          <polygon points="5,24 10,18 16,24" fill="#3b0764" />
          <polygon points="12,24 17,17 23,24" fill="#581c87" />
          {/* Handwritten caption doodle */}
          <line x1="7" y1="30" x2="16" y2="30" stroke="#94a3b8" strokeWidth="1" />
        </svg>
      </div>

      {/* 5. Near Code & DSA: Floating Terminal Laptop with Blinking Prompt */}
      <div
        className="absolute transform -translate-x-1/2 -translate-y-1/2 animate-node-float opacity-75"
        style={{
          left: isMobile ? '82%' : '78%',
          top: '36.5%',
          '--float-duration': '5.2s',
          '--float-delay': '-1.8s',
        } as React.CSSProperties}
      >
        <svg width="50" height="40" viewBox="0 0 34 28" fill="none" shapeRendering="crispEdges">
          {/* Display */}
          <rect x="4" y="2" width="26" height="18" rx="1" fill="#040914" stroke="#06b6d4" strokeWidth="1" />
          {/* Screen Content: Prompt & Code */}
          <text x="7" y="9" fill="#22d3ee" fontSize="5" fontFamily="monospace">&gt;_</text>
          <rect x="14" y="6" width="3" height="4" fill="#a5f3fc" />
          <line x1="7" y1="13" x2="22" y2="13" stroke="#67e8f9" strokeWidth="1" strokeOpacity="0.6" />
          <line x1="7" y1="16" x2="18" y2="16" stroke="#0284c7" strokeWidth="1" strokeOpacity="0.5" />
          {/* Keyboard Base */}
          <polygon points="1,20 33,20 30,26 4,26" fill="#1e293b" stroke="#0e7490" strokeWidth="0.8" />
          <rect x="12" y="21" width="10" height="3" fill="#0f172a" />
        </svg>
      </div>

      {/* 6. Near AI / ML: Neural Constellation Cluster */}
      <div
        className="absolute transform -translate-x-1/2 -translate-y-1/2 animate-node-float opacity-70"
        style={{
          left: isMobile ? '18%' : '20%',
          top: '41.5%',
          '--float-duration': '6.8s',
          '--float-delay': '-2.2s',
        } as React.CSSProperties}
      >
        <svg width="52" height="46" viewBox="0 0 36 32" fill="none" shapeRendering="crispEdges">
          {/* Synapse Lines */}
          <line x1="6" y1="16" x2="18" y2="6" stroke="#818cf8" strokeWidth="0.8" strokeOpacity="0.6" />
          <line x1="6" y1="16" x2="18" y2="26" stroke="#818cf8" strokeWidth="0.8" strokeOpacity="0.6" />
          <line x1="18" y1="6" x2="30" y2="16" stroke="#c7d2fe" strokeWidth="0.8" strokeOpacity="0.6" />
          <line x1="18" y1="26" x2="30" y2="16" stroke="#c7d2fe" strokeWidth="0.8" strokeOpacity="0.6" />
          <line x1="18" y1="6" x2="18" y2="26" stroke="#6366f1" strokeWidth="0.8" strokeOpacity="0.4" />
          {/* Nodes */}
          <circle cx="6" cy="16" r="3" fill="#4338ca" stroke="#818cf8" strokeWidth="1" />
          <circle cx="18" cy="6" r="3.5" fill="#4f46e5" stroke="#a5b4fc" strokeWidth="1" />
          <circle cx="18" cy="26" r="3.5" fill="#4f46e5" stroke="#a5b4fc" strokeWidth="1" />
          <circle cx="30" cy="16" r="3" fill="#4338ca" stroke="#818cf8" strokeWidth="1" />
          {/* Core Sparkle */}
          <rect x="17" y="5" width="2" height="2" fill="#ffffff" />
          <rect x="17" y="25" width="2" height="2" fill="#ffffff" />
        </svg>
      </div>

      {/* 7. Near Freelance: Blueprint & Client Document */}
      <div
        className="absolute transform -translate-x-1/2 -translate-y-1/2 animate-node-float opacity-70"
        style={{
          left: isMobile ? '82%' : '76%',
          top: '46.5%',
          '--float-duration': '5.5s',
          '--float-delay': '-3.5s',
        } as React.CSSProperties}
      >
        <svg width="42" height="42" viewBox="0 0 28 28" fill="none" shapeRendering="crispEdges">
          {/* Blueprint Scroll */}
          <rect x="4" y="6" width="20" height="16" rx="1" fill="#064e3b" stroke="#10b981" strokeWidth="1" />
          <line x1="8" y1="10" x2="20" y2="10" stroke="#6ee7b7" strokeWidth="0.8" />
          <line x1="8" y1="14" x2="16" y2="14" stroke="#6ee7b7" strokeWidth="0.8" />
          <rect x="8" y="17" width="4" height="2" fill="#34d399" />
          {/* Compass divider */}
          <polygon points="21,5 23,12 21,11 19,12" fill="#fcd34d" />
        </svg>
      </div>

      {/* 8. Near Achievements: Golden Pixel Trophy & 40K+ Badge */}
      <div
        className="absolute transform -translate-x-1/2 -translate-y-1/2 animate-node-float opacity-80"
        style={{
          left: isMobile ? '16%' : '20%',
          top: '51.5%',
          '--float-duration': '4.8s',
          '--float-delay': '-0.5s',
        } as React.CSSProperties}
      >
        <div className="flex flex-col items-center">
          <svg width="40" height="44" viewBox="0 0 26 30" fill="none" shapeRendering="crispEdges">
            {/* Trophy Cup */}
            <polygon points="4,4 22,4 18,16 8,16" fill="#fbbf24" stroke="#b45309" strokeWidth="1" />
            <polygon points="6,6 20,6 17,14 9,14" fill="#fde047" />
            {/* Handles */}
            <path d="M4 6 H2 V12 H4" stroke="#d97706" strokeWidth="1" />
            <path d="M22 6 H24 V12 H22" stroke="#d97706" strokeWidth="1" />
            {/* Stem */}
            <rect x="11" y="16" width="4" height="6" fill="#d97706" />
            {/* Base Pedestal */}
            <rect x="7" y="22" width="12" height="4" fill="#78350f" stroke="#451a03" strokeWidth="1" />
            <rect x="12" y="8" width="2" height="2" fill="#ffffff" />
          </svg>
          {/* Floating 40K+ Pixel Badge */}
          <span className="font-pixel text-[7px] text-[#fbbf24] mt-1 px-1.5 py-0.5 rounded bg-black/60 border border-[#fbbf24]/40">
            40K+
          </span>
        </div>
      </div>

      {/* 9. Near Certificates: Certificate with Wax Seal */}
      <div
        className="absolute transform -translate-x-1/2 -translate-y-1/2 animate-node-float opacity-75"
        style={{
          left: isMobile ? '84%' : '80%',
          top: '56.5%',
          '--float-duration': '5.7s',
          '--float-delay': '-2.8s',
        } as React.CSSProperties}
      >
        <svg width="38" height="46" viewBox="0 0 24 30" fill="none" shapeRendering="crispEdges">
          {/* Parchment */}
          <rect x="3" y="3" width="18" height="24" fill="#fef3c7" stroke="#d97706" strokeWidth="1" />
          <line x1="6" y1="7" x2="18" y2="7" stroke="#b45309" strokeWidth="1" />
          <line x1="6" y1="11" x2="18" y2="11" stroke="#b45309" strokeWidth="1" />
          <line x1="6" y1="15" x2="14" y2="15" stroke="#b45309" strokeWidth="1" />
          {/* Ruby Wax Seal & Ribbon */}
          <circle cx="15" cy="21" r="3" fill="#e11d48" />
          <polygon points="14,24 13,28 15,26 17,28 16,24" fill="#be123c" />
        </svg>
      </div>

      {/* 10. Near Travel & Future: Traveler's Backpack & Glowing Compass */}
      <div
        className="absolute transform -translate-x-1/2 -translate-y-1/2 animate-node-float opacity-75"
        style={{
          left: isMobile ? '16%' : '18%',
          top: '61.5%',
          '--float-duration': '6.2s',
          '--float-delay': '-1.4s',
        } as React.CSSProperties}
      >
        <svg width="44" height="48" viewBox="0 0 28 32" fill="none" shapeRendering="crispEdges">
          {/* Backpack Main Body */}
          <rect x="5" y="8" width="18" height="18" rx="2" fill="#0f766e" stroke="#14b8a6" strokeWidth="1" />
          {/* Top flap */}
          <rect x="7" y="5" width="14" height="6" fill="#115e59" />
          {/* Straps & Buckles */}
          <rect x="9" y="11" width="2" height="12" fill="#78350f" />
          <rect x="17" y="11" width="2" height="12" fill="#78350f" />
          <rect x="9" y="15" width="2" height="2" fill="#fef08a" />
          <rect x="17" y="15" width="2" height="2" fill="#fef08a" />
          {/* Bedroll on top */}
          <rect x="4" y="2" width="20" height="4" rx="1" fill="#0369a1" />
          {/* Side water canteen */}
          <rect x="23" y="13" width="3" height="8" fill="#38bdf8" />
        </svg>
      </div>

      {/* 11. Near About: Trail Lantern on Wooden Signpost */}
      <div
        className="absolute transform -translate-x-1/2 -translate-y-1/2 animate-node-float opacity-75"
        style={{
          left: isMobile ? '82%' : '80%',
          top: '66.5%',
          '--float-duration': '5s',
          '--float-delay': '-0.6s',
        } as React.CSSProperties}
      >
        <svg width="42" height="58" viewBox="0 0 28 40" fill="none" shapeRendering="crispEdges">
          {/* Post */}
          <rect x="12" y="10" width="4" height="30" fill="#78350f" />
          {/* Sign board pointing down toward Studio */}
          <polygon points="6,12 22,12 25,16 22,20 6,20" fill="#92400e" stroke="#451a03" strokeWidth="0.8" />
          <text x="8" y="17" fill="#fef08a" fontSize="4.5" fontFamily="monospace">STUDIO ↓</text>
          {/* Hanging Lantern with amber glow */}
          <line x1="6" y1="12" x2="6" y2="18" stroke="#000000" strokeWidth="1" />
          <rect x="4" y="18" width="4" height="6" fill="#fef08a" stroke="#451a03" strokeWidth="0.8" />
          <rect x="5" y="20" width="2" height="2" fill="#ffffff" />
        </svg>
      </div>
    </div>
  );
};
