'use client';

import React, { useRef, useState, useEffect, useSyncExternalStore } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { sound } from '@/utils/audio';

function subscribeReducedMotion(callback: () => void) {
  if (typeof window === 'undefined') return () => {};
  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  mediaQuery.addEventListener('change', callback);
  return () => mediaQuery.removeEventListener('change', callback);
}

function getReducedMotionSnapshot() {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

export function Blue3DCube() {
  const groupRef = useRef<THREE.Group>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const innerRef = useRef<THREE.Mesh>(null);
  const lightRef = useRef<THREE.PointLight>(null);

  const [hovered, setHovered] = useState(false);
  const [mode, setMode] = useState<0 | 1 | 2>(0); // 0: Solid, 1: Wireframe, 2: Kinetic
  const prefersReducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  );
  const { invalidate } = useThree();

  // Pointer position in normalized coordinates
  const targetRotation = useRef({ x: 0.4, y: 0.5 });
  const lightPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      targetRotation.current.x = 0.4 + y * 0.45;
      targetRotation.current.y = 0.5 + x * 0.65;
      lightPos.current.x = x * 3;
      lightPos.current.y = -y * 3;
      invalidate();
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [invalidate]);

  useFrame((_, delta) => {
    if (!groupRef.current) return;

    if (!prefersReducedMotion) {
      targetRotation.current.y += delta * 0.15;

      if (ring1Ref.current) {
        ring1Ref.current.rotation.x += delta * 0.4;
        ring1Ref.current.rotation.y += delta * 0.2;
      }
      if (ring2Ref.current) {
        ring2Ref.current.rotation.y -= delta * 0.3;
        ring2Ref.current.rotation.z += delta * 0.25;
      }
      if (innerRef.current) {
        innerRef.current.rotation.y -= delta * 0.5;
      }
    }

    // Smooth lerp
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      targetRotation.current.x,
      0.06
    );
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      targetRotation.current.y,
      0.06
    );

    const scale = hovered ? 1.12 : 1.0;
    groupRef.current.scale.lerp(new THREE.Vector3(scale, scale, scale), 0.08);

    if (lightRef.current) {
      lightRef.current.position.set(lightPos.current.x, lightPos.current.y, 3);
    }

    invalidate();
  });

  const handleClick = () => {
    sound.playClick(900, 0.08);
    setMode((prev) => ((prev + 1) % 3) as 0 | 1 | 2);
    invalidate();
  };

  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 8, 6]} intensity={2.0} color="#ffffff" />
      <directionalLight position={[-5, -4, -3]} intensity={1.2} color="#4B7BFF" />
      <pointLight ref={lightRef} position={[0, 0, 3]} intensity={2.5} color="#FCDD0D" distance={8} />

      <group
        ref={groupRef}
        rotation={[0.4, 0.5, 0]}
        onClick={handleClick}
        onPointerOver={() => {
          setHovered(true);
          sound.playClick(1200, 0.03);
          invalidate();
        }}
        onPointerOut={() => {
          setHovered(false);
          invalidate();
        }}
      >
        {/* Core Geometry */}
        {mode !== 1 ? (
          <mesh castShadow receiveShadow>
            <boxGeometry args={[1.6, 1.6, 1.6]} />
            <meshStandardMaterial
              color="#1a1d26"
              roughness={0.3}
              metalness={0.7}
            />
          </mesh>
        ) : (
          <mesh>
            <octahedronGeometry args={[1.3, 0]} />
            <meshStandardMaterial
              color="#FCDD0D"
              wireframe
              emissive="#FCDD0D"
              emissiveIntensity={0.6}
            />
          </mesh>
        )}

        {/* Sharp Golden Brand Edge Chamfers */}
        <lineSegments>
          <edgesGeometry args={[new THREE.BoxGeometry(1.604, 1.604, 1.604)]} />
          <lineBasicMaterial color="#FCDD0D" linewidth={2} />
        </lineSegments>

        {/* Orbital Ring 1 */}
        <mesh ref={ring1Ref}>
          <torusGeometry args={[2.2, 0.018, 16, 64]} />
          <meshStandardMaterial color="#FCDD0D" emissive="#FCDD0D" emissiveIntensity={0.3} metalness={0.8} />
        </mesh>

        {/* Orbital Ring 2 */}
        <mesh ref={ring2Ref} rotation={[Math.PI / 3, 0, 0]}>
          <torusGeometry args={[2.5, 0.012, 16, 64]} />
          <meshStandardMaterial color="#4B7BFF" emissive="#4B7BFF" emissiveIntensity={0.4} metalness={0.8} />
        </mesh>

        {/* Inner Floating Gyro Lattice */}
        <mesh ref={innerRef}>
          <icosahedronGeometry args={[0.7, 0]} />
          <meshBasicMaterial color="#4B7BFF" wireframe opacity={0.6} transparent />
        </mesh>
      </group>
    </>
  );
}
