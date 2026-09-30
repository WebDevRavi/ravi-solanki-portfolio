'use client';

import React from 'react';
import { Canvas } from '@react-three/fiber';

interface CanvasWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export default function CanvasWrapper({ children, className }: CanvasWrapperProps) {
  return (
    <Canvas
      className={className}
      camera={{ position: [0, 0, 4.5], fov: 42 }}
      dpr={[1, typeof window !== 'undefined' ? Math.min(2, window.devicePixelRatio) : 1]}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
        stencil: false,
        depth: true,
      }}
      frameloop="demand"
      performance={{ min: 0.5 }}
    >
      {children}
    </Canvas>
  );
}
