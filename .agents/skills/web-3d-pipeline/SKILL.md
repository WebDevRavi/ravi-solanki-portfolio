---
name: web-3d-pipeline
description: Production Web 3D asset optimization pipeline for glTF/GLB models using @gltf-transform/cli, Draco/Meshopt compression, KTX2/WebP texture optimization, and progressive loading strategies.
---

# Web 3D Asset Pipeline & glTF / GLB Optimization

A rigorous pipeline for preparing, compressing, and streaming 3D assets for the web to ensure near-instant initial page loads and high frame rates.

---

## 1. Asset Budget Guidelines

| Asset Category | Target File Size | Max Triangles | Max Texture Size | Draw Calls |
| :--- | :--- | :--- | :--- | :--- |
| **Hero Object (Single Focus)** | < 1.2 MB | 25,000 - 45,000 | 1024x1024 (KTX2/WebP) | 1 - 3 |
| **Secondary Interactive Props** | < 400 KB | 5,000 - 10,000 | 512x512 | 1 - 2 |
| **Micro Interactive Elements** | < 100 KB | < 2,500 | 256x256 or Procedural | 1 |
| **Total Initial 3D Payload** | < 2.5 MB | < 60,000 | - | < 10 total |

---

## 2. CLI Tooling: `@gltf-transform/cli`

Use `@gltf-transform/cli` (installed globally and runnable in terminal) for production asset passes:

### Step 1: Cleanup & Deduplication
```bash
# Remove duplicate accessors, unused nodes, and prune hierarchy
gltf-transform dedup input.glb output-dedup.glb
gltf-transform prune output-dedup.glb output-pruned.glb
```

### Step 2: Mesh Optimization & Reordering
```bash
# Reorder vertex cache, simplify geometry if needed, resample animation
gltf-transform resample output-pruned.glb output-resampled.glb
gltf-transform reorder output-resampled.glb output-reordered.glb
```

### Step 3: Draco or Meshopt Compression
```bash
# Meshopt compression (ideal for faster decompression on mobile CPU than Draco):
gltf-transform meshopt output-reordered.glb output-meshopt.glb

# Or Draco compression (highest compression ratio):
gltf-transform draco output-reordered.glb output-draco.glb
```

### Step 4: Texture Optimization (WebP / KTX2)
```bash
# Convert heavy embedded textures to WebP with target dimension clamp
gltf-transform webp output-reordered.glb output-optimized.glb --slots "baseColorTexture"
gltf-transform resize output-optimized.glb output-final.glb --width 1024 --height 1024
```

---

## 3. Progressive Loading Strategy

1. **Pre-canvas Placeholder**:
   - Render a lightweight SVG or CSS canvas blur skeleton in the DOM layout before 3D loads.
   - Prevent Cumulative Layout Shift (CLS) by locking the aspect ratio or container dimensions with CSS (`aspect-ratio` or `min-height`).

2. **Streamed GLB Hydration**:
   - Use `useGLTF.preload(url)` for assets needed immediately.
   - For secondary models, trigger load only when section enters viewport (`IntersectionObserver`).
   - Use DRACOLoader / MeshoptDecoder instances shared across all loader invocations to avoid multiple WASM decoders initializing in memory.

3. **Fallback Graceful Degradation**:
   - In case of WebGL unsupported / memory failure, swap cleanly to a pristine static 2D high-res snapshot or interactive CSS 3D card.
