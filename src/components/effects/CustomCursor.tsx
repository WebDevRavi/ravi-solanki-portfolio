'use client';

import { useEffect, useState, useRef } from 'react';

export function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only enable on desktop with fine pointer
    if (window.matchMedia('(pointer: coarse)').matches) return;
    setMounted(true);

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }

      // Check if hovering interactive element
      const target = e.target as HTMLElement | null;
      if (target && target.closest('a, button, input, textarea, [data-cursor-hover], .interactive')) {
        setHovered(true);
      } else {
        setHovered(false);
      }
    };

    const onMouseDown = () => setClicked(true);
    const onMouseUp = () => setClicked(false);

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    // Smooth lerp loop for the outer ring
    let animationId: number;
    const render = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }
      animationId = requestAnimationFrame(render);
    };
    animationId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      cancelAnimationFrame(animationId);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Outer Follower Ring */}
      <div
        ref={cursorRef}
        className={`absolute -top-4 -left-4 rounded-full border border-[var(--yellow)]/60 transition-[width,height,background-color,border-color] duration-200 ease-out will-change-transform ${
          hovered
            ? 'h-12 w-12 -top-6 -left-6 border-[var(--yellow)] bg-[var(--yellow)]/10 scale-110'
            : clicked
            ? 'h-6 w-6 -top-3 -left-3 border-white scale-90'
            : 'h-8 w-8'
        }`}
      />

      {/* Center Precise Dot */}
      <div
        ref={dotRef}
        className={`absolute -top-1 -left-1 h-2 w-2 rounded-full bg-[var(--yellow)] transition-transform duration-75 will-change-transform ${
          hovered ? 'scale-0' : 'scale-100'
        }`}
      />
    </div>
  );
}
