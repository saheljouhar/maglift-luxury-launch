
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

const GridPlane = () => {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = -Math.PI / 2;
      meshRef.current.position.y = -2;
    }
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[20, 20, 20, 20]} />
      <meshBasicMaterial 
        wireframe
        transparent
        opacity={0.8}
        color="#1e293b"
      />
    </mesh>
  );
};

const FloatingCube = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.5;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial
        roughness={0.5}
        metalness={0.1}
        color="#1e293b"
      />
    </mesh>
  );
};

export const ChromeGrid = () => {
  return (
    <div className="w-full h-64 relative">
      <Canvas camera={{ position: [0, 5, 10], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <GridPlane />
        <FloatingCube position={[-3, 2, 0]} />
        <FloatingCube position={[3, 1, -2]} />
        <FloatingCube position={[0, 3, 1]} />
      </Canvas>
    </div>
  );
};
