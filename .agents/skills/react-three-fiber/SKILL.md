---
name: react-three-fiber
description: React Three Fiber (R3F) and @react-three/drei architectural standards for Next.js App Router applications. Covers SSR boundaries, Canvas configuration, memory management, adaptive DPR, prefers-reduced-motion, and mobile fallbacks.
---

# React Three Fiber (R3F) in Next.js Architecture

Comprehensive engineering standards for integrating high-performance 3D interaction layers with Next.js (App Router), React Three Fiber (R3F), and Drei.

---

## 1. SSR & Next.js App Router Integration

Next.js App Router executes on both server and client. WebGL contexts and canvas DOM objects cannot execute on the server.

### Safe Dynamic Loading
- Never render `<Canvas>` directly in a Server Component without dynamic import disabling SSR:
```tsx
import dynamic from 'next/dynamic';

export const SceneCanvas = dynamic(
  () => import('@/components/canvas/SceneCanvas').then((mod) => mod.SceneCanvas),
  {
    ssr: false,
    loading: () => <CanvasFallbackLoader />,
  }
);
```
- In the client canvas wrapper (`'use client'`), handle window mounts explicitly to prevent hydration mismatch.

---

## 2. Canvas Performance Configuration

To maintain 60 FPS, fast First Input Delay (FID/INP), and low battery consumption:

### Canvas Properties
```tsx
<Canvas
  camera={{ position: [0, 0, 5], fov: 45 }}
  dpr={[1, Math.min(2, window.devicePixelRatio)]}
  gl={{
    powerPreference: 'high-performance',
    antialias: true,
    alpha: true,
    stencil: false,
    depth: true,
    preserveDrawingBuffer: false,
  }}
  performance={{ min: 0.5 }}
  frameloop={isInteractionIdle ? 'demand' : 'always'}
>
```

### Frameloop Optimization
- Use `frameloop="demand"` for scenes that only update on user input or state change. Call `invalidate()` when state changes.
- Switch to `frameloop="always"` only during active camera transitions, continuous interactive rotations, or timeline animations.

---

## 3. State Management & Animation Decoupling

- **Rule**: Never bind high-frequency 3D render loops (`useFrame`) to React state (`useState`), which triggers re-renders of the component tree.
- Use mutable `useRef` handles for 60fps vector, rotation, and uniform modifications inside `useFrame`.
- For global control between DOM UI and 3D scenes, use lightweight external stores (such as Zustand with transient subscriptions) or custom event buses without triggering React re-renders.

```tsx
// Correct
useFrame((state, delta) => {
  if (!meshRef.current) return;
  meshRef.current.rotation.y += delta * 0.5;
});
```

---

## 4. Accessibility, prefers-reduced-motion & Fallbacks

3D must serve as an interaction/presentation layer that respects user preferences and device capabilities:

### Motion Sensitivity
```tsx
const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');

useFrame((state, delta) => {
  if (prefersReducedMotion) return; // Freeze or clamp continuous motion
  // perform gentle movement
});
```

### Mobile & Low-Tier Fallbacks
- Detect device tier / mobile viewport (`window.innerWidth < 768` or GPU tier via `detect-gpu`).
- Simplify geometry resolution, reduce shadow map resolutions, or replace interactive 3D with optimized WebP/SVG interactive graphic for low-spec devices.
- Provide accessible DOM alternatives with proper ARIA attributes for all visual or interactive information conveyed in 3D.

---

## 5. WebGL Context Loss & Memory Management

- Dispose of geometries, materials, and textures when unmounting scenes:
```tsx
useEffect(() => {
  return () => {
    geometry.dispose();
    material.dispose();
    texture?.dispose();
  };
}, []);
```
- Handle WebGL context lost gracefully (`gl.domElement.addEventListener('webglcontextlost', handleContextLost)`).
