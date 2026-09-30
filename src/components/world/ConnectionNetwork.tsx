'use client';

import React, { useEffect, useRef } from 'react';
import { WORLD_NODES, WorldNode } from '@/data/world';

interface StrandConfig {
  id: number;
  color: string;
  width: number;
  opacity: number;
  freq1: number;
  freq2: number;
  phase1: number;
  phase2: number;
  amp1: number;
  amp2: number;
  lateralOffset: number;
}

const STRAND_PALETTES: StrandConfig[] = [
  { id: 1, color: '#38bdf8', width: 1.5, opacity: 0.65, freq1: 0.52, freq2: 0.71, phase1: 0.0, phase2: 0.9, amp1: 12, amp2: 16, lateralOffset: -4 },
  { id: 2, color: '#a855f7', width: 1.2, opacity: 0.55, freq1: 0.68, freq2: 0.48, phase1: 0.72, phase2: 1.4, amp1: 15, amp2: 11, lateralOffset: 4 },
  { id: 3, color: '#f472b6', width: 0.9, opacity: 0.45, freq1: 0.42, freq2: 0.78, phase1: 1.44, phase2: 2.1, amp1: 9, amp2: 13, lateralOffset: -7 },
  { id: 4, color: '#67e8f9', width: 0.8, opacity: 0.4, freq1: 0.61, freq2: 0.39, phase1: 2.20, phase2: 0.5, amp1: 13, amp2: 9, lateralOffset: 6 },
];

interface ConnectionNetworkProps {
  containerWidth: number;
  containerHeight: number;
  isMobile: boolean;
  hoveredNodeId?: string | null;
}

export const ConnectionNetwork: React.FC<ConnectionNetworkProps> = ({
  containerWidth,
  containerHeight,
  isMobile,
  hoveredNodeId,
}) => {
  const corePathRefs = useRef<(SVGPathElement | null)[]>([]);
  const motionPulseRefs = useRef<(SVGPathElement | null)[]>([]);
  const strandPathRefs = useRef<(SVGPathElement | null)[]>([]);

  // Calculate pairs of connected nodes
  const connections = React.useMemo(() => {
    const list: {
      from: WorldNode;
      to: WorldNode;
      strands: StrandConfig[];
    }[] = [];

    WORLD_NODES.forEach((node) => {
      if (node.connectedTo) {
        const targetNode = WORLD_NODES.find((n) => n.id === node.connectedTo);
        if (targetNode) {
          const strandCount = isMobile ? Math.min(node.strandCount, 2) : node.strandCount;
          list.push({
            from: node,
            to: targetNode,
            strands: STRAND_PALETTES.slice(0, strandCount),
          });
        }
      }
    });

    return list;
  }, [isMobile]);

  // RequestAnimationFrame animation loop for moving organic curves & flow motion
  useEffect(() => {
    if (!containerWidth || !containerHeight) return;

    let animFrame: number;
    const startTime = performance.now();

    const updateStrands = (currentTime: number) => {
      const elapsed = (currentTime - startTime) * 0.001; // elapsed time in seconds

      let strandIdxTracker = 0;

      connections.forEach((conn, connIdx) => {
        const isConnHovered =
          hoveredNodeId && (conn.from.id === hoveredNodeId || conn.to.id === hoveredNodeId);

        const x1 = (isMobile ? conn.from.xMobile : conn.from.xDesktop) * 0.01 * containerWidth;
        let y1 = conn.from.yPercent * 0.01 * containerHeight;

        let x2 = (isMobile ? conn.to.xMobile : conn.to.xDesktop) * 0.01 * containerWidth;
        let y2 = conn.to.yPercent * 0.01 * containerHeight;

        // Clean clearance: line from contact starts directly below the transmission form
        if (conn.from.id === 'contact' && conn.to.id === 'end-character') {
          y1 += isMobile ? 520 : 575;
        }

        // Special alignment: If target is the End Node Character, align line directly into hole in head
        // Analyzed hole in head coordinates in 594x650 sprite: X = 43.43%, Y = 14.77%
        const isEndCharacter = conn.to.id === 'end-character';
        if (isEndCharacter) {
          const charW = isMobile ? 210 : 275;
          const charH = isMobile ? 230 : 301;
          const charLeft = containerWidth * 0.5 - charW / 2;
          const charTop = containerHeight - charH;
          x2 = charLeft + charW * 0.4343;
          y2 = charTop + charH * 0.1477;
        }

        const dy = y2 - y1;
        const dx = x2 - x1;

        // Hover amplifies wave motion and lateral presence
        const hoverAmpMult = isConnHovered ? 1.4 : 1.0;

        // Base Core Node Line Control Points (smooth natural S-curve)
        const coreCx1 = isEndCharacter ? x1 : x1 + dx * 0.25;
        const coreCy1 = isEndCharacter ? y1 + dy * 0.35 : y1 + dy * 0.4;
        const coreCx2 = isEndCharacter ? x2 : x1 + dx * 0.75;
        const coreCy2 = isEndCharacter ? y2 - 60 : y1 + dy * 0.6;

        const coreD = `M ${x1.toFixed(1)} ${y1.toFixed(1)} C ${coreCx1.toFixed(1)} ${coreCy1.toFixed(1)}, ${coreCx2.toFixed(1)} ${coreCy2.toFixed(1)}, ${x2.toFixed(1)} ${y2.toFixed(1)}`;

        // 1. Update Core Node Line
        const coreEl = corePathRefs.current[connIdx];
        if (coreEl) {
          coreEl.setAttribute('d', coreD);
          if (isConnHovered) {
            coreEl.setAttribute('stroke-width', '3.2');
            coreEl.setAttribute('stroke-opacity', '0.95');
          } else {
            coreEl.setAttribute('stroke-width', isMobile ? '1.8' : '2.4');
            coreEl.setAttribute('stroke-opacity', '0.75');
          }
        }

        // 2. Update Move Motion Pulse Line (Continuous Flowing Dash)
        const pulseEl = motionPulseRefs.current[connIdx];
        if (pulseEl) {
          pulseEl.setAttribute('d', coreD);
          // Move motion flow speed: 85px/s along path
          const pulseOffset = (-elapsed * 85) % 40;
          pulseEl.setAttribute('stroke-dashoffset', pulseOffset.toFixed(1));
          if (isConnHovered) {
            pulseEl.setAttribute('stroke-opacity', '1');
            pulseEl.setAttribute('stroke-width', '2.8');
          } else {
            pulseEl.setAttribute('stroke-opacity', '0.85');
            pulseEl.setAttribute('stroke-width', isMobile ? '1.6' : '2.2');
          }
        }

        // 3. Update Multi-filament Braided Filaments
        conn.strands.forEach((strand) => {
          const pathEl = strandPathRefs.current[strandIdxTracker];
          strandIdxTracker++;
          if (!pathEl) return;

          const wave1 = Math.sin(elapsed * strand.freq1 + strand.phase1) * strand.amp1 * hoverAmpMult;
          const wave2 = Math.cos(elapsed * strand.freq2 + strand.phase2) * strand.amp2 * hoverAmpMult;
          const off = strand.lateralOffset * (isMobile ? 0.6 : 1.0);

          const cx1 = x1 + dx * 0.28 + wave1 + off;
          const cy1 = y1 + dy * 0.36 + wave2 * 0.25;
          const cx2 = isEndCharacter ? x2 + off * 0.2 : x1 + dx * 0.72 + wave2 + off;
          const cy2 = isEndCharacter ? y2 - 50 : y1 + dy * 0.64 - wave1 * 0.25;

          const d = `M ${x1.toFixed(1)} ${y1.toFixed(1)} C ${cx1.toFixed(1)} ${cy1.toFixed(1)}, ${cx2.toFixed(1)} ${cy2.toFixed(1)}, ${x2.toFixed(1)} ${y2.toFixed(1)}`;
          pathEl.setAttribute('d', d);

          if (isConnHovered) {
            pathEl.setAttribute('stroke-opacity', String(Math.min(0.95, strand.opacity + 0.35)));
            pathEl.setAttribute('stroke-width', String(strand.width + 0.5));
          } else {
            pathEl.setAttribute('stroke-opacity', String(strand.opacity));
            pathEl.setAttribute('stroke-width', String(strand.width));
          }
        });
      });

      animFrame = requestAnimationFrame(updateStrands);
    };

    animFrame = requestAnimationFrame(updateStrands);
    return () => cancelAnimationFrame(animFrame);
  }, [connections, containerWidth, containerHeight, isMobile, hoveredNodeId]);

  let strandGlobalIndex = 0;

  return (
    <svg
      className="absolute inset-0 pointer-events-none z-[5]"
      width={containerWidth || '100%'}
      height={containerHeight || '100%'}
      style={{ overflow: 'visible' }}
    >
      <defs>
        {/* Glow Filters for Node Lines & Traveling Pulse Motion */}
        <filter id="core-line-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#00d4ff" floodOpacity="0.5" />
          <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor="#38bdf8" floodOpacity="0.3" />
        </filter>
        <filter id="pulse-motion-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="0" stdDeviation="2" floodColor="#ffffff" floodOpacity="0.9" />
          <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#38bdf8" floodOpacity="0.6" />
        </filter>
        <filter id="strand-glow-violet" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="0" stdDeviation="2" floodColor="#a855f7" floodOpacity="0.4" />
        </filter>

        {/* Linear Gradients along flow */}
        <linearGradient id="core-flow-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="50%" stopColor="#00d4ff" />
          <stop offset="85%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#c084fc" />
        </linearGradient>
      </defs>

      {connections.map((conn, connIdx) => {
        const isConnHovered =
          hoveredNodeId && (conn.from.id === hoveredNodeId || conn.to.id === hoveredNodeId);

        return (
          <g key={`conn-${conn.from.id}-${conn.to.id}-${connIdx}`}>
            {/* 1. Primary Solid Glowing Core Node Line */}
            <path
              ref={(el) => {
                corePathRefs.current[connIdx] = el;
              }}
              fill="none"
              stroke="url(#core-flow-gradient)"
              strokeWidth={isMobile ? 1.8 : 2.4}
              strokeOpacity={0.75}
              strokeLinecap="round"
              filter="url(#core-line-glow)"
            />

            {/* 2. Move Motion Animated Flowing Dashes (Photon / Energy Current) */}
            <path
              ref={(el) => {
                motionPulseRefs.current[connIdx] = el;
              }}
              fill="none"
              stroke="#ffffff"
              strokeWidth={isMobile ? 1.6 : 2.2}
              strokeDasharray="10 30"
              strokeOpacity={0.85}
              strokeLinecap="round"
              filter="url(#pulse-motion-glow)"
            />

            {/* 3. Secondary Multi-Filament Organic Strands */}
            {conn.strands.map((strand, strandIdx) => {
              const currentIdx = strandGlobalIndex++;
              return (
                <path
                  key={`strand-${currentIdx}-${strandIdx}`}
                  ref={(el) => {
                    strandPathRefs.current[currentIdx] = el;
                  }}
                  fill="none"
                  stroke={strand.color}
                  strokeWidth={strand.width}
                  strokeOpacity={strand.opacity}
                  strokeLinecap="round"
                  filter={isConnHovered ? 'url(#strand-glow-violet)' : undefined}
                />
              );
            })}
          </g>
        );
      })}
    </svg>
  );
};
