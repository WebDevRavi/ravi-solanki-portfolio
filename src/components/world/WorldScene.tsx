'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Header } from '@/components/layout/Header';
import { HeroSection } from '@/components/home/HeroSection';
import { VortexGlideFeature } from '@/components/home/VortexGlideFeature';
import { TypeRushFeature } from '@/components/home/TypeRushFeature';
import { ConnectedSpine } from '@/components/home/ConnectedSpine';
import { Sky } from './Sky';
import { Stars } from './Stars';
import { Moon } from './Moon';
import { Clouds } from './Clouds';
import { Mountains } from './Mountains';
import { ConnectionNetwork } from './ConnectionNetwork';
import { EnvironmentalProps } from './EnvironmentalProps';
import { PortfolioNode } from './PortfolioNode';
import { StudioScene } from './StudioScene';
import { ContactScene } from './ContactScene';
import { NodeDrawer } from './NodeDrawer';
import { EndCharacter } from './EndCharacter';
import { ShowcaseArchiveModal } from './ShowcaseArchiveModal';
import { soundEngine } from './SoundManager';
import { WORLD_NODES, WorldNode } from '@/data/world';

export const WorldScene: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const secondaryRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 1440, height: 6000 });
  const [scrollY, setScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [selectedNode, setSelectedNode] = useState<WorldNode | null>(null);
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);
  const [isShowcaseOpen, setIsShowcaseOpen] = useState(false);

  // Resize and scroll tracking
  useEffect(() => {
    const updateDimensions = () => {
      const isMob = window.innerWidth < 768;
      setIsMobile(isMob);
      const width = containerRef.current?.clientWidth || window.innerWidth;
      const height = isMob ? 6200 : 6600;
      setDimensions({ width, height });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('resize', updateDimensions);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Keyboard navigation: Escape closes drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedNode) {
        setSelectedNode(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedNode]);

  // Deep-linking & anchor navigation
  useEffect(() => {
    const handleHash = () => {
      const rawHash = window.location.hash.replace('#', '').toLowerCase();
      if (!rawHash) return;

      if (rawHash === 'intro' || rawHash === 'hero') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      if (rawHash === 'games' || rawHash === 'vortex-glide') {
        const el = document.getElementById('games');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          return;
        }
      }
      if (rawHash === 'typerush') {
        const el = document.getElementById('typerush');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          return;
        }
      }
      if (rawHash === 'contact') {
        const el = document.getElementById('contact-scene');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
          return;
        }
      }
      if (rawHash === 'studio' || rawHash === 'blue3d') {
        const el = document.getElementById('studio-scene');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
          return;
        }
      }

      const targetNode = WORLD_NODES.find(
        (n) =>
          n.id.toLowerCase() === rawHash ||
          (rawHash === 'aiml' && n.id === 'ai') ||
          (rawHash === 'work' && n.id === 'freelance') ||
          (rawHash === 'about' && n.id === 'about')
      );

      if (targetNode) {
        soundEngine.playClick();
        setSelectedNode(targetNode);
        const el = document.getElementById(`node-${targetNode.id}`);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
    };

    const timer = setTimeout(handleHash, 350);
    window.addEventListener('hashchange', handleHash);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('hashchange', handleHash);
    };
  }, []);

  const handleNodeSelect = (node: WorldNode) => {
    soundEngine.playClick();
    setSelectedNode(node);
  };

  const handleScrollTo = (selector: string) => {
    if (selector === '#intro') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.querySelector(selector);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const secondaryNodes = React.useMemo(() => {
    return WORLD_NODES.filter((n) => n.category !== 'destination');
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-x-hidden bg-[#08070d] text-[#f8fafc]"
    >
      {/* 1. Global Navigation Header */}
      <Header />

      {/* 2. Receding Connected Spine & Subtle Pixel Ravi Easter Egg */}
      <ConnectedSpine />

      {/* 3. Ambient Atmospheric Sky & Starfield Layers */}
      <div className="absolute inset-0 pointer-events-none">
        <Sky totalHeight="100%" />
        <Stars count={isMobile ? 50 : 90} />
        <Clouds />
        <Moon scrollY={scrollY} />
        <Mountains scrollY={scrollY} />
      </div>

      {/* ========================================================
          PHASE 1 CORE: WORK > WORLD
          Clean Hero and Flagship Editorial Game Compositions
          ======================================================== */}
      <div className="relative z-10">
        {/* Hero Section */}
        <HeroSection onExplore={() => handleScrollTo('#games')} />

        {/* Large Editorial Feature 01: Vortex Glide */}
        <VortexGlideFeature />

        {/* Large Editorial Feature 02: TypeRush */}
        <TypeRushFeature />
      </div>

      {/* ========================================================
          SECONDARY SECTIONS (UNTOUCHED FOR PHASE 1)
          Maintained below featured work with connecting path
          ======================================================== */}
      <div
        ref={secondaryRef}
        id="secondary-world"
        className="relative w-full z-10"
        style={{ height: `${dimensions.height}px` }}
      >
        {/* Section Divider Notice */}
        <div className="max-w-6xl mx-auto px-6 pt-12 pb-6 border-t border-white/5 flex items-center justify-between font-mono text-xs text-zinc-500">
          <span>ADDITIONAL WORK &amp; CREATIVE WORLDS</span>
          <span>EXPLORATORY PATH ↓</span>
        </div>

        {/* SVG Multi-strand Connection Strands between secondary nodes */}
        <ConnectionNetwork
          containerWidth={dimensions.width}
          containerHeight={dimensions.height}
          isMobile={isMobile}
          hoveredNodeId={hoveredNodeId}
        />

        {/* Environmental Storytelling Props */}
        <EnvironmentalProps isMobile={isMobile} />

        {/* Secondary World Nodes (3D, Film, Photo, Code/DSA, AI/ML, Client Work, etc.) */}
        <div className="absolute inset-0 pointer-events-none">
          {secondaryNodes.map((node) => (
            <div key={node.id} className="pointer-events-auto">
              <PortfolioNode
                node={node}
                isMobile={isMobile}
                onSelect={handleNodeSelect}
                onHoverSound={() => soundEngine.playHover()}
                onHoverChange={(id) => setHoveredNodeId(id)}
              />
            </div>
          ))}
        </div>

        {/* Studio Scene */}
        <div
          id="studio-scene"
          className="absolute left-0 right-0 z-20 pointer-events-auto"
          style={{ top: '68%' }}
        >
          <StudioScene
            onExploreStudio={() => {
              const studioNode = WORLD_NODES.find((n) => n.id === 'studio');
              if (studioNode) handleNodeSelect(studioNode);
            }}
          />
        </div>

        {/* Contact Scene */}
        <div
          id="contact-scene"
          className="absolute left-0 right-0 z-20 pointer-events-auto"
          style={{ top: '78%' }}
        >
          <ContactScene />
        </div>

        {/* Horizon End Character */}
        <EndCharacter
          scrollY={scrollY}
          onSpeak={() => soundEngine.playClick()}
        />
      </div>

      {/* Clean Floating Quick Contact Button */}
      <aside
        id="corner-mailbox"
        className="fixed bottom-4 right-4 z-30 pointer-events-auto flex items-center gap-2 select-none"
      >
        <button
          onClick={() => handleScrollTo('#contact-scene')}
          className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#08070d]/90 border border-white/10 hover:border-white/30 text-zinc-300 hover:text-white backdrop-blur-md transition-all hover:scale-105 shadow-lg"
          title="Send a message to Ravi"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          <span className="font-mono text-xs">CONTACT</span>
          <span className="text-zinc-400 text-xs">✉</span>
        </button>
      </aside>

      {/* Interactive Node Portfolio Inspection Drawer */}
      <NodeDrawer
        node={selectedNode}
        onClose={() => setSelectedNode(null)}
      />

      {/* Full Interactive Project Archive & Showcase Modal */}
      <ShowcaseArchiveModal
        isOpen={isShowcaseOpen}
        onClose={() => setIsShowcaseOpen(false)}
      />
    </div>
  );
};
