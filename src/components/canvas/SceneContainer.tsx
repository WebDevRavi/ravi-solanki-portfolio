'use client';

import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';

interface SceneContainerProps {
  children: React.ReactNode;
  className?: string;
  fallback?: React.ReactNode;
}

const DynamicCanvas = dynamic(() => import('./CanvasWrapper'), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center">
      <div className="h-4 w-4 animate-spin rounded-full border border-[var(--border)] border-t-[var(--yellow)]" />
    </div>
  ),
});

export function SceneContainer({ children, className = 'w-full h-full', fallback }: SceneContainerProps) {
  return (
    <div className={`relative ${className}`}>
      <Suspense fallback={fallback || null}>
        <DynamicCanvas className="h-full w-full">{children}</DynamicCanvas>
      </Suspense>
    </div>
  );
}
