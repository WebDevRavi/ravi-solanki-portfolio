'use client';

import React, { useEffect, useState, useRef } from 'react';

export const CustomPixelCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isPointer, setIsPointer] = useState(false);
  const [isGrabbing, setIsGrabbing] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const cursorEl = cursorRef.current;

    const handleMouseMove = (e: MouseEvent) => {
      if (cursorEl) {
        cursorEl.style.transform = `translate3d(${e.clientX - 2}px, ${e.clientY - 2}px, 0)`;
      }
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const isClickable =
          target.tagName === 'BUTTON' ||
          target.tagName === 'A' ||
          target.closest('button') ||
          target.closest('a') ||
          target.classList.contains('cursor-pointer') ||
          target.classList.contains('cursor-grab') ||
          target.classList.contains('cursor-grabbing') ||
          window.getComputedStyle(target).cursor === 'pointer';
        setIsPointer(Boolean(isClickable));

        const isGrab =
          target.classList.contains('cursor-grab') ||
          target.classList.contains('cursor-grabbing') ||
          Boolean(target.closest('.cursor-grab')) ||
          Boolean(target.closest('.cursor-grabbing'));
        setIsGrabbing(isGrab);
      }
    };

    const handleMouseDown = () => {
      setIsGrabbing(true);
    };

    const handleMouseUp = () => {
      setIsGrabbing(false);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown, { passive: true });
    window.addEventListener('mouseup', handleMouseUp, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  return (
    <div
      ref={cursorRef}
      className={`fixed top-0 left-0 pointer-events-none z-[999999] will-change-transform select-none transition-opacity duration-150 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        transform: 'translate3d(-100px, -100px, 0)',
      }}
    >
      {/* Cyan / Violet Ambient Glow on Interactive Target */}
      {isPointer && (
        <div className="absolute -inset-2 rounded-full blur-[8px] bg-[#00d4ff]/60 animate-pulse pointer-events-none" />
      )}

      {/* Retro Pixel Cursor Graphics */}
      <svg
        width="22"
        height="22"
        viewBox="0 0 16 16"
        fill="none"
        shapeRendering="crispEdges"
        className="filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.85)]"
      >
        {isGrabbing ? (
          // Grab / Fist Pixel Cursor
          <g>
            <rect x="4" y="4" width="8" height="7" fill="#ffffff" stroke="#000000" strokeWidth="0.8" />
            <rect x="3" y="6" width="2" height="4" fill="#ffffff" stroke="#000000" strokeWidth="0.8" />
            <rect x="6" y="2" width="4" height="3" fill="#00d4ff" stroke="#000000" strokeWidth="0.8" />
            <rect x="5" y="5" width="6" height="5" fill="#ffffff" />
          </g>
        ) : isPointer ? (
          // Pointer Hand / Node Target
          <g>
            <rect x="5" y="1" width="3" height="8" fill="#ffffff" stroke="#000000" strokeWidth="0.8" />
            <rect x="4" y="6" width="2" height="6" fill="#ffffff" stroke="#000000" strokeWidth="0.8" />
            <rect x="8" y="5" width="2" height="7" fill="#ffffff" stroke="#000000" strokeWidth="0.8" />
            <rect x="10" y="6" width="2" height="6" fill="#ffffff" stroke="#000000" strokeWidth="0.8" />
            <rect x="5" y="8" width="7" height="6" fill="#ffffff" />
            <rect x="6" y="3" width="1" height="4" fill="#00d4ff" />
          </g>
        ) : (
          // Pixel Arrow
          <g>
            <polygon points="1,1 1,13 4,10 7,15 9,14 6,9 11,9" fill="#00d4ff" stroke="#000000" strokeWidth="1" />
            <polygon points="2,2 2,11 4,9 7,13 8,12 5,8 9,8" fill="#ffffff" />
          </g>
        )}
      </svg>
    </div>
  );
};
