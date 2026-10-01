'use client';

import React, { useRef, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

export function VortexTunnelCanvas() {
  const tunnelGroupRef = useRef<THREE.Group>(null);
  const ringsRef = useRef<THREE.Mesh[]>([]);
  const pointerPos = useRef({ x: 0, y: 0 });
  const { invalidate } = useThree();

  const RING_COUNT = 30;
  const RING_SPACING = 3.5;
  const TOTAL_LENGTH = RING_COUNT * RING_SPACING;

  // Track mouse coordinates for steering
  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const rect = (e.currentTarget as Window);
      pointerPos.current.x = (e.clientX / rect.innerWidth) * 2 - 1;
      pointerPos.current.y = -(e.clientY / rect.innerHeight) * 2 + 1;
      invalidate();
    };

    window.addEventListener('mousemove', handleMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMove);
  }, [invalidate]);

  useFrame((state, delta) => {
    if (!tunnelGroupRef.current) return;

    // Slowly ramp speed up to 110 based on interaction
    const moveStep = delta * 22;

    ringsRef.current.forEach((ring, i) => {
      if (!ring) return;
      ring.position.z += moveStep;
      ring.rotation.z += delta * 0.15 * (i % 2 === 0 ? 1 : -1);

      // Loop ring back to front when it passes the camera
      if (ring.position.z > 5) {
        ring.position.z -= TOTAL_LENGTH;
      }
    });

    // Camera tilt / steering response
    state.camera.position.x = THREE.MathUtils.lerp(
      state.camera.position.x,
      pointerPos.current.x * 1.8,
      0.08
    );
    state.camera.position.y = THREE.MathUtils.lerp(
      state.camera.position.y,
      pointerPos.current.y * 1.4,
      0.08
    );
    state.camera.rotation.z = THREE.MathUtils.lerp(
      state.camera.rotation.z,
      -pointerPos.current.x * 0.35,
      0.08
    );

    invalidate();
  });

  return (
    <>
      <color attach="background" args={['#040508']} />
      <fog attach="fog" args={['#040508', 12, 60]} />
      <ambientLight intensity={0.4} />
      <pointLight position={[0, 0, 2]} intensity={2.5} color="#4B7BFF" distance={20} />
      <pointLight position={[0, 0, -20]} intensity={3.5} color="#FCDD0D" distance={30} />

      <group ref={tunnelGroupRef}>
        {Array.from({ length: RING_COUNT }).map((_, i) => (
          <mesh
            key={i}
            ref={(el) => {
              if (el) ringsRef.current[i] = el;
            }}
            position={[0, 0, -i * RING_SPACING]}
          >
            {/* Decagonal (10-sided) Tunnel Cross-Section matching Vortex Glide specification */}
            <cylinderGeometry args={[4.2, 4.2, 0.4, 10, 1, true]} />
            <meshStandardMaterial
              color={i % 3 === 0 ? '#FCDD0D' : '#4B7BFF'}
              wireframe
              emissive={i % 3 === 0 ? '#FCDD0D' : '#4B7BFF'}
              emissiveIntensity={i % 3 === 0 ? 0.7 : 0.35}
              roughness={0.2}
            />
          </mesh>
        ))}

        {/* Central Core Ray */}
        <lineSegments>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              args={[
                new Float32Array([
                  0, 0, 5, 0, 0, -TOTAL_LENGTH,
                  -2, 0, 5, -2, 0, -TOTAL_LENGTH,
                  2, 0, 5, 2, 0, -TOTAL_LENGTH,
                  0, -2, 5, 0, -2, -TOTAL_LENGTH,
                  0, 2, 5, 0, 2, -TOTAL_LENGTH,
                ]),
                3,
              ]}
            />
          </bufferGeometry>
          <lineBasicMaterial color="#4B7BFF" opacity={0.25} transparent />
        </lineSegments>
      </group>
    </>
  );
}
