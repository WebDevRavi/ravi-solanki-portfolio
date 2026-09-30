'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { WorldNode } from '@/data/world';

interface PortfolioNodeProps {
  node: WorldNode;
  isMobile: boolean;
  onSelect: (node: WorldNode) => void;
  onHoverSound?: () => void;
  onHoverChange?: (nodeId: string | null) => void;
}

// Programmatic Pixel Art Icons in SVG
const NodePixelIcon: React.FC<{ type: WorldNode['iconType']; color: string }> = ({
  type,
  color,
}) => {
  switch (type) {
    case 'cube':
      return (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" shapeRendering="crispEdges">
          {/* 3D Isometric Neon Cube */}
          <polygon points="12,2 22,7 12,12 2,7" fill="#67e8f9" />
          <polygon points="2,7 12,12 12,22 2,17" fill="#0284c7" />
          <polygon points="12,12 22,7 22,17 12,22" fill="#0369a1" />
          {/* Neon inner edge highlights */}
          <line x1="12" y1="2" x2="12" y2="12" stroke="#ffffff" strokeWidth="1" opacity="0.8" />
          <line x1="2" y1="7" x2="12" y2="12" stroke="#bae6fd" strokeWidth="1" opacity="0.6" />
          <line x1="22" y1="7" x2="12" y2="12" stroke="#bae6fd" strokeWidth="1" opacity="0.6" />
        </svg>
      );
    case 'gamepad':
      return (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" shapeRendering="crispEdges">
          {/* Retro Pixel Controller */}
          <rect x="4" y="8" width="16" height="8" rx="2" fill="#38bdf8" />
          <rect x="2" y="10" width="3" height="8" rx="1" fill="#0284c7" />
          <rect x="19" y="10" width="3" height="8" rx="1" fill="#0284c7" />
          {/* D-Pad */}
          <rect x="6" y="10" width="4" height="4" fill="#0f172a" />
          <rect x="7" y="9" width="2" height="6" fill="#0f172a" />
          {/* Action buttons */}
          <rect x="16" y="10" width="2" height="2" fill="#f43f5e" />
          <rect x="14" y="12" width="2" height="2" fill="#fbbf24" />
        </svg>
      );
    case 'film':
      return (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" shapeRendering="crispEdges">
          {/* Pixel Film Slate */}
          <rect x="3" y="8" width="18" height="12" fill="#1e1b4b" stroke="#a855f7" strokeWidth="1" />
          {/* Clapper Top with diagonal hazard bars */}
          <rect x="3" y="4" width="18" height="4" fill="#a855f7" />
          <rect x="6" y="4" width="2" height="4" fill="#ffffff" />
          <rect x="11" y="4" width="2" height="4" fill="#ffffff" />
          <rect x="16" y="4" width="2" height="4" fill="#ffffff" />
          {/* Play triangle */}
          <polygon points="10,11 16,14 10,17" fill="#c084fc" />
        </svg>
      );
    case 'camera':
      return (
        <svg width="34" height="34" viewBox="0 0 24 24" fill="none" shapeRendering="crispEdges">
          <rect x="4" y="7" width="16" height="12" fill="#7e22ce" />
          <rect x="8" y="5" width="4" height="2" fill="#a855f7" />
          <rect x="15" y="5" width="3" height="2" fill="#f43f5e" />
          <circle cx="12" cy="13" r="4" fill="#0f172a" stroke="#c084fc" strokeWidth="1.5" />
          <circle cx="13" cy="12" r="1.2" fill="#ffffff" />
        </svg>
      );
    case 'terminal':
      return (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" shapeRendering="crispEdges">
          <rect x="3" y="4" width="18" height="16" fill="#090d16" stroke="#3b82f6" strokeWidth="1.5" />
          <rect x="3" y="4" width="18" height="3" fill="#1e3a8a" />
          {/* Prompt >_ */}
          <polyline points="6,12 9,14 6,16" stroke="#60a5fa" strokeWidth="1.5" fill="none" />
          <rect x="11" y="15" width="4" height="2" fill="#93c5fd" />
        </svg>
      );
    case 'brain':
      return (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" shapeRendering="crispEdges">
          {/* Neural Node Grid */}
          <circle cx="6" cy="12" r="2.5" fill="#818cf8" />
          <circle cx="12" cy="6" r="2.5" fill="#a5b4fc" />
          <circle cx="12" cy="18" r="2.5" fill="#a5b4fc" />
          <circle cx="18" cy="12" r="2.5" fill="#c7d2fe" />
          <line x1="6" y1="12" x2="12" y2="6" stroke="#818cf8" strokeWidth="1" />
          <line x1="6" y1="12" x2="12" y2="18" stroke="#818cf8" strokeWidth="1" />
          <line x1="12" y1="6" x2="18" y2="12" stroke="#a5b4fc" strokeWidth="1" />
          <line x1="12" y1="18" x2="18" y2="12" stroke="#a5b4fc" strokeWidth="1" />
          <circle cx="12" cy="12" r="2" fill="#ffffff" />
        </svg>
      );
    case 'briefcase':
      return (
        <svg width="34" height="34" viewBox="0 0 24 24" fill="none" shapeRendering="crispEdges">
          <rect x="4" y="8" width="16" height="11" fill="#047857" stroke="#34d399" strokeWidth="1" />
          <path d="M9 8V6C9 5.4 9.4 5 10 5H14C14.6 5 15 5.4 15 6V8" stroke="#34d399" strokeWidth="1.5" />
          <rect x="11" y="12" width="2" height="3" fill="#fcd34d" />
        </svg>
      );
    case 'trophy':
      return (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" shapeRendering="crispEdges">
          <polygon points="5,5 19,5 16,13 8,13" fill="#fbbf24" />
          <rect x="11" y="13" width="2" height="5" fill="#d97706" />
          <rect x="8" y="18" width="8" height="2" fill="#b45309" />
          {/* Star sparkle */}
          <rect x="11" y="7" width="2" height="2" fill="#ffffff" />
        </svg>
      );
    case 'scroll':
      return (
        <svg width="34" height="34" viewBox="0 0 24 24" fill="none" shapeRendering="crispEdges">
          <rect x="5" y="4" width="14" height="16" fill="#fef3c7" />
          <rect x="8" y="7" width="8" height="1" fill="#d97706" />
          <rect x="8" y="10" width="8" height="1" fill="#d97706" />
          <rect x="8" y="13" width="6" height="1" fill="#d97706" />
          {/* Wax seal */}
          <circle cx="15" cy="16" r="2.5" fill="#f43f5e" />
        </svg>
      );
    case 'compass':
      return (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" shapeRendering="crispEdges">
          <circle cx="12" cy="12" r="9" stroke="#38bdf8" strokeWidth="1.5" fill="#082f49" />
          <polygon points="12,5 14,12 12,11 10,12" fill="#f43f5e" />
          <polygon points="12,19 14,12 12,13 10,12" fill="#94a3b8" />
        </svg>
      );
    case 'character':
      return (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" shapeRendering="crispEdges">
          {/* Ravi Avatar head with blue hoodie */}
          <rect x="8" y="3" width="8" height="6" fill="#1e293b" /> {/* hair */}
          <rect x="9" y="8" width="6" height="5" fill="#fbcfe8" /> {/* face */}
          <rect x="10" y="10" width="1" height="1" fill="#1e293b" /> {/* eye */}
          <rect x="13" y="10" width="1" height="1" fill="#1e293b" /> {/* eye */}
          <rect x="6" y="13" width="12" height="9" fill="#2563eb" /> {/* blue hoodie */}
          <rect x="11" y="14" width="2" height="8" fill="#ffffff" /> {/* zipper */}
        </svg>
      );
    case 'desktop':
      return (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" shapeRendering="crispEdges">
          {/* Dual screens */}
          <rect x="2" y="6" width="10" height="8" fill="#0f172a" stroke="#f59e0b" strokeWidth="1" />
          <rect x="13" y="6" width="9" height="8" fill="#0f172a" stroke="#f59e0b" strokeWidth="1" />
          <rect x="6" y="14" width="2" height="3" fill="#64748b" />
          <rect x="4" y="17" width="16" height="2" fill="#334155" />
          {/* Monitor glow lines */}
          <rect x="4" y="8" width="6" height="1" fill="#38bdf8" />
          <rect x="15" y="8" width="5" height="1" fill="#a855f7" />
        </svg>
      );
    case 'mail':
    default:
      return (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" shapeRendering="crispEdges">
          <rect x="3" y="6" width="18" height="12" fill="#0284c7" stroke="#38bdf8" strokeWidth="1" />
          <polygon points="3,6 12,13 21,6" fill="#38bdf8" />
          <rect x="16" y="4" width="4" height="4" fill="#f43f5e" /> {/* red flag */}
        </svg>
      );
  }
};

export const PortfolioNode: React.FC<PortfolioNodeProps> = ({
  node,
  isMobile,
  onSelect,
  onHoverSound,
  onHoverChange,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const xPos = isMobile ? node.xMobile : node.xDesktop;
  const yPos = node.yPercent;

  const sizePixels = isMobile
    ? node.size === 'lg'
      ? 76
      : node.size === 'md'
        ? 66
        : 58
    : node.size === 'lg'
      ? 96
      : node.size === 'md'
        ? 84
        : 72;

  // Staggered non-synchronized idle floating animation (4 to 7 seconds)
  const floatDelay = -(node.order * 0.65);
  const floatDuration = 4.2 + (node.order % 5) * 0.6; // between 4.2s and 6.6s

  const handleMouseEnter = () => {
    setIsHovered(true);
    onHoverSound?.();
    onHoverChange?.(node.id);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    onHoverChange?.(null);
  };

  return (
    <div
      id={`node-${node.id}`}
      className="absolute transform -translate-x-1/2 -translate-y-1/2 z-[15] select-none pointer-events-auto"
      style={{
        left: `${xPos}%`,
        top: `${yPos}%`,
      }}
    >
      {/* Scroll anchor aliases for seamless URL hash navigation */}
      <span id={node.id} className="absolute -top-28 pointer-events-none opacity-0" />
      {node.id === 'ai' && <span id="aiml" className="absolute -top-28 pointer-events-none opacity-0" />}
      {node.id === '3d' && <span id="creative" className="absolute -top-28 pointer-events-none opacity-0" />}
      {node.id === 'freelance' && <span id="work" className="absolute -top-28 pointer-events-none opacity-0" />}

      {/* Floating wrapper */}
      <div
        className="animate-node-float cursor-pointer relative group flex flex-col items-center"
        style={
          {
            '--float-delay': `${floatDelay}s`,
            '--float-duration': `${floatDuration}s`,
          } as React.CSSProperties
        }
        onClick={() => onSelect(node)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Soft Atmospheric Glow */}
        <div
          className="absolute -inset-2.5 rounded-full blur-[14px] transition-all duration-300 pointer-events-none"
          style={{
            background: node.glowColor,
            opacity: isHovered ? 0.8 : 0.25,
          }}
        />

        {/* Circular Pixel-Art Node Housing (Section 10) */}
        <div
          className="relative rounded-full flex items-center justify-center transition-all duration-200 ease-out overflow-hidden"
          style={{
            width: `${sizePixels}px`,
            height: `${sizePixels}px`,
            backgroundColor: '#070514',
            border: `2px solid ${isHovered ? '#ffffff' : node.color}`,
            boxShadow: isHovered
              ? `0 0 16px ${node.color}, inset 0 0 10px rgba(255,255,255,0.15)`
              : `0 0 8px ${node.glowColor}, inset 0 0 6px rgba(0,0,0,0.8)`,
            transform: isHovered ? 'scale(1.08)' : 'scale(1)',
          }}
        >
          {/* Subtle Orbital Pixel Ring */}
          <div
            className="absolute inset-[2.5px] rounded-full border border-dashed pointer-events-none opacity-40 transition-opacity group-hover:opacity-75"
            style={{ borderColor: node.color }}
          />

          {/* Node Icon / Head Logo */}
          {node.headLogo ? (
            <div className="relative w-full h-full p-2 flex items-center justify-center transition-transform duration-200 group-hover:scale-105">
              <Image
                src={node.headLogo}
                alt={node.title}
                width={sizePixels}
                height={sizePixels}
                className="w-full h-full object-contain pointer-events-none select-none"
                style={{ imageRendering: 'pixelated' }}
                unoptimized
                priority
              />
            </div>
          ) : (
            <div className="relative z-10 transition-transform duration-200 group-hover:scale-105">
              <NodePixelIcon type={node.iconType} color={node.color} />
            </div>
          )}
        </div>

        {/* Node Label (Section 11: 8–14px vertical separation, small uppercase pixel typography) */}
        <div
          className={`mt-3 transition-all duration-200 pointer-events-none z-20 whitespace-nowrap text-center ${
            isHovered
              ? 'opacity-100 translate-y-0'
              : 'opacity-75 translate-y-0.5'
          }`}
        >
          <div className="flex flex-col items-center">
            <p
              className="font-pixel text-[8.5px] md:text-[9.5px] tracking-wider transition-colors drop-shadow-[0_2px_4px_rgba(0,0,0,0.95)]"
              style={{ color: isHovered ? '#ffffff' : node.color }}
            >
              {node.title}
            </p>
            {isHovered && (
              <span className="font-silkscreen text-[7px] text-zinc-400 uppercase tracking-widest mt-0.5 drop-shadow-[0_2px_4px_rgba(0,0,0,0.95)]">
                {node.badge}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
