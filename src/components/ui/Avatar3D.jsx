import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere } from '@react-three/drei';

const Avatar3D = () => {
  const sphereRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (sphereRef.current) {
      sphereRef.current.rotation.y = time * 0.5;
    }
  });

  return (
    <group>
      {/* High-tech abstract sphere/artifact in refined silver/glass */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <Sphere args={[1, 100, 100]} scale={2.5} ref={sphereRef}>
          <MeshDistortMaterial
            color="#ffffff"
            attach="material"
            distort={0.3}
            speed={1.5}
            roughness={0.1}
            metalness={1}
            emissive="#ffffff"
            emissiveIntensity={0.1}
          />
        </Sphere>
      </Float>
      
      {/* Subtle Monochrome Outer Ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[3.8, 0.02, 16, 100]} />
        <meshStandardMaterial color="#ffffff" opacity={0.2} transparent />
      </mesh>
    </group>
  );
};

export default Avatar3D;
