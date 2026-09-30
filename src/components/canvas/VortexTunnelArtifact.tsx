'use client';

import React, { useRef, useState, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

export function VortexTunnelArtifact() {
  const tunnelRef = useRef<THREE.Group>(null);
  const [speedMultiplier, setSpeedMultiplier] = useState(1);
  const { invalidate } = useThree();

  const RING_COUNT = 24;
  const RING_SPACING = 1.0;

  // Pre-calculate fixed decagonal ring positions
  const rings = useMemo(() => {
    return Array.from({ length: RING_COUNT }, (_, i) => ({
      id: i,
      initialZ: -i * RING_SPACING,
      obstacleAngle: (i * 1.37) % (Math.PI * 2),
      hasObstacle: i % 3 === 0,
    }));
  }, []);

  useFrame((_, delta) => {
    if (!tunnelRef.current) return;

    const speed = 3.5 * speedMultiplier * delta;

    tunnelRef.current.children.forEach((child) => {
      child.position.z += speed;
      // Loop back to the far horizon when passing the camera
      if (child.position.z > 2) {
        child.position.z -= RING_COUNT * RING_SPACING;
      }
    });

    invalidate();
  });

  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[0, 6, 4]} intensity={1.8} color="#4B7BFF" />
      <pointLight position={[0, 0, -10]} intensity={3} color="#FCDD0D" distance={25} />

      <group
        ref={tunnelRef}
        onPointerOver={() => {
          setSpeedMultiplier(3.0); // Accelerate on hover
          invalidate();
        }}
        onPointerOut={() => {
          setSpeedMultiplier(1.0);
          invalidate();
        }}
      >
        {rings.map((ring) => (
          <group key={ring.id} position={[0, 0, ring.initialZ]}>
            {/* Decagonal Tunnel Perimeter Ring (Facing Z-axis) */}
            <lineSegments rotation={[Math.PI / 2, 0, 0]}>
              <edgesGeometry args={[new THREE.CylinderGeometry(1.6, 1.6, 0.05, 10, 1, true)]} />
              <lineBasicMaterial
                color={ring.id % 4 === 0 ? '#FCDD0D' : '#4B7BFF'}
                linewidth={1.5}
                transparent
                opacity={0.65}
              />
            </lineSegments>

            {/* Neon Speed Obstacle Marker on Tunnel Wall */}
            {ring.hasObstacle && (
              <mesh
                position={[
                  Math.sin(ring.obstacleAngle) * 1.5,
                  Math.cos(ring.obstacleAngle) * 1.5,
                  0,
                ]}
              >
                <boxGeometry args={[0.18, 0.18, 0.18]} />
                <meshStandardMaterial
                  color="#FCDD0D"
                  emissive="#FCDD0D"
                  emissiveIntensity={0.8}
                  roughness={0.2}
                />
              </mesh>
            )}
          </group>
        ))}

        {/* Minimal Player Craft Indicator Facing Forward */}
        <mesh position={[0, -0.65, 0.8]} rotation={[-Math.PI / 2, 0, 0]}>
          <coneGeometry args={[0.18, 0.45, 3]} />
          <meshStandardMaterial
            color="#F2F0EB"
            emissive="#4B7BFF"
            emissiveIntensity={0.3}
            roughness={0.2}
            metalness={0.9}
          />
        </mesh>
      </group>
    </>
  );
}
