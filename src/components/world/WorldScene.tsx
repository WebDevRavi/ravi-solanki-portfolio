'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Sky } from './Sky';
import { Stars } from './Stars';
import { Moon } from './Moon';
import { Clouds } from './Clouds';
import { Mountains } from './Mountains';
import { ConnectionNetwork } from './ConnectionNetwork';
import { EnvironmentalProps } from './EnvironmentalProps';
import { PortfolioNode } from './PortfolioNode';
import { Character } from './Character';
import { StudioScene } from './StudioScene';
import { ContactScene } from './ContactScene';
import { NodeDrawer } from './NodeDrawer';
import { WorldHUD } from './WorldHUD';
import { IntroScene } from './IntroScene';
import { EndCharacter } from './EndCharacter';
import { ShowcaseArchiveModal } from './ShowcaseArchiveModal';
import { soundEngine } from './SoundManager';
import { WORLD_NODES, WorldNode } from '@/data/world';

export const WorldScene: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 1440, height: 7000 });
  const [scrollY, setScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
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
      const height = isMob ? 7500 : 8200;
      setDimensions({ width, height });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (max > 0) {
        setScrollProgress(Math.min(100, Math.max(0, (window.scrollY / max) * 100)));
      }
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

  // Deep-linking & back navigation via URL hashes (e.g. /#games, /#about, /#studio)
  useEffect(() => {
    const handleHash = () => {
      const rawHash = window.location.hash.replace('#', '').toLowerCase();
      if (!rawHash) return;

      if (rawHash === 'intro') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      if (rawHash === 'studio' || rawHash === 'studio-scene') {
        const topPos = dimensions.height * 0.72;
        window.scrollTo({ top: topPos, behavior: 'smooth' });
        return;
      }
      if (rawHash === 'contact' || rawHash === 'contact-scene') {
        const topPos = dimensions.height * 0.81;
        window.scrollTo({ top: topPos, behavior: 'smooth' });
        return;
      }

      const targetNode = WORLD_NODES.find(
        (n) =>
          n.id.toLowerCase() === rawHash ||
          (rawHash === 'aiml' && n.id === 'ai') ||
          (rawHash === 'work' && n.id === 'freelance') ||
          (rawHash === 'creative' && n.id === '3d')
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
  }, [dimensions.height]);

  const handleNodeSelect = (node: WorldNode) => {
    soundEngine.playClick();
    setSelectedNode(node);
  };

  const handleScrollTo = (selector: string) => {
    if (selector === '#intro') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (selector === '#contact-scene') {
      const topPos = dimensions.height * 0.81;
      window.scrollTo({ top: topPos, behavior: 'smooth' });
      return;
    }
    if (selector === '#studio-scene') {
      const topPos = dimensions.height * 0.72;
      window.scrollTo({ top: topPos, behavior: 'smooth' });
      return;
    }
    if (selector === '#node-3d') {
      const topPos = dimensions.height * 0.15;
      window.scrollTo({ top: topPos, behavior: 'smooth' });
      return;
    }
    if (selector === '#end-character-anchor') {
      const topPos = dimensions.height * 0.94;
      window.scrollTo({ top: topPos, behavior: 'smooth' });
      return;
    }
    const el = document.querySelector(selector);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const handleEnterWorld = () => {
    soundEngine.playOpen();
    const topPos = dimensions.height * 0.15;
    window.scrollTo({ top: topPos, behavior: 'smooth' });
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-x-hidden bg-[#05030e] text-[#f8fafc]"
      style={{ height: `${dimensions.height}px` }}
    >
      {/* 1. Top Minimal HUD Navigation (World Waypoints Menu, Sound & Archive) */}
      <WorldHUD
        onScrollTo={handleScrollTo}
        onOpenAbout={() => {
          const aboutNode = WORLD_NODES.find((n) => n.id === 'about');
          if (aboutNode) handleNodeSelect(aboutNode);
        }}
        onOpenShowcase={() => setIsShowcaseOpen(true)}
      />

      {/* 2. Deep Nocturnal Sky Background */}
      <Sky totalHeight="100%" />

      {/* 3. Twinkling 3-Tier Starfield (FAR, MID, NEAR with un-synchronized breathing) */}
      <Stars count={isMobile ? 80 : 150} />

      {/* 4. Independent Continuous Drifting Clouds (FAR, MID, NEAR tiers) */}
      <Clouds />

      {/* 5. Parallax Moon Anchor */}
      <Moon scrollY={scrollY} />

      {/* 6. Multi-tier Parallax Mountains & Horizon Ridges across World Segments */}
      <Mountains scrollY={scrollY} />

      {/* 7. Start / Intro Screen */}
      <IntroScene
        onEnter={handleEnterWorld}
        onOpenAbout={() => {
          const aboutNode = WORLD_NODES.find((n) => n.id === 'about');
          if (aboutNode) handleNodeSelect(aboutNode);
        }}
        onOpenShowcase={() => setIsShowcaseOpen(true)}
      />

      {/* 8. Continuously Animated SVG Multi-strand Connection Strands with Hover Reactivity */}
      <ConnectionNetwork
        containerWidth={dimensions.width}
        containerHeight={dimensions.height}
        isMobile={isMobile}
        hoveredNodeId={hoveredNodeId}
      />

      {/* 9. Environmental Storytelling Objects & Themed Props Between Nodes */}
      <EnvironmentalProps isMobile={isMobile} />

      {/* 10. Exploratory Circular Pixel-Art Artifact Nodes (1 to 11) */}
      <div className="absolute inset-0 pointer-events-none">
        {WORLD_NODES.filter((n) => n.category !== 'destination').map((node) => (
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

      {/* 11. Protagonist (Ravi) Progressing Continuously Along the Scroll Journey */}
      <Character
        scrollProgress={scrollProgress}
        isMobile={isMobile}
        onSpeak={() => soundEngine.playClick()}
      />

      {/* 12. Final Lived-in Studio Scene (Waypoint 12: Warm Amber Lighting Climax) */}
      <div
        id="studio-scene"
        className="absolute left-0 right-0 z-20 pointer-events-auto"
        style={{ top: '72%' }}
      >
        <StudioScene
          onExploreStudio={() => {
            const studioNode = WORLD_NODES.find((n) => n.id === 'studio');
            if (studioNode) handleNodeSelect(studioNode);
          }}
        />
      </div>

      {/* 13. Final Contact & Mailbox Experience (Waypoint 13: Communication Hub) */}
      <div
        id="contact-scene"
        className="absolute left-0 right-0 z-20 pointer-events-auto"
        style={{ top: '81%' }}
      >
        <ContactScene />
      </div>

      {/* Retro Floating Quick Mailbox Button in Bottom-Right Corner */}
      <aside
        id="corner-mailbox"
        className="fixed bottom-4 right-4 z-30 pointer-events-auto flex items-center gap-2 select-none group"
      >
        <button
          onClick={() => handleScrollTo('#contact-scene')}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#080518]/90 border border-[#00d4ff]/40 hover:border-[#00d4ff] shadow-[0_0_15px_rgba(0,212,255,0.25)] backdrop-blur-md transition-all hover:scale-105"
          title="Send a transmission to Ravi"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00d4ff] opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#00d4ff]" />
          </span>
          <span className="font-mono text-[10px] text-zinc-300 group-hover:text-white">
            TRANSMISSION
          </span>
          <span className="text-[#00d4ff] text-xs">✉</span>
        </button>
      </aside>

      {/* 14. Climax End Character: The Creator's Horizon */}
      <EndCharacter
        scrollY={scrollY}
        onSpeak={() => soundEngine.playClick()}
      />

      {/* 15. Interactive Node Portfolio Inspection Drawer */}
      <NodeDrawer
        node={selectedNode}
        onClose={() => setSelectedNode(null)}
      />

      {/* 16. Full Interactive Project Archive & Showcase Modal */}
      <ShowcaseArchiveModal
        isOpen={isShowcaseOpen}
        onClose={() => setIsShowcaseOpen(false)}
      />
    </div>
  );
};
