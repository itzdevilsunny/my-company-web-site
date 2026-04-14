import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Float } from '@react-three/drei';
import * as THREE from 'three';

function RotatingTorus() {
  const meshRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.x = time * 0.2;
    meshRef.current.rotation.y = time * 0.3;
  });

  return (
    <mesh ref={meshRef}>
      <torusKnotGeometry args={[10, 3, 100, 16]} />
      <meshStandardMaterial color="#7000ff" wireframe opacity={0.3} transparent />
    </mesh>
  );
}

function FloatingParticles() {
  const points = useRef();
  
  useFrame((state) => {
    points.current.rotation.y += 0.001;
    points.current.rotation.x += 0.0005;
  });

  const count = 5000;
  const pos = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    pos[i * 3] = (Math.random() - 0.5) * 50;
    pos[i * 3 + 1] = (Math.random() - 0.5) * 50;
    pos[i * 3 + 2] = (Math.random() - 0.5) * 50;
  }

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={pos.length / 3}
          array={pos}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#00f2ff" transparent opacity={0.6} sizeAttenuation={true} />
    </points>
  );
}

const ThreeBackground = () => {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: -1,
      background: 'radial-gradient(circle at center, #10002b 0%, #050505 100%)'
    }}>
      <Canvas camera={{ position: [0, 0, 20] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} color="#00f2ff" intensity={2} />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
          <RotatingTorus />
        </Float>
        <FloatingParticles />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;
