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
      {/* Representing the "Founder Avatar" as a high-tech abstract sphere/artifact since we don't have a 3D model file */}
      <Float speed={5} rotationIntensity={2} floatIntensity={5}>
        <Sphere args={[1, 100, 100]} scale={2.5} ref={sphereRef}>
          <MeshDistortMaterial
            color="#00f2ff"
            attach="material"
            distort={0.4}
            speed={2}
            roughness={0}
            metalness={1}
            emissive="#7000ff"
            emissiveIntensity={0.5}
          />
        </Sphere>
      </Float>
      
      {/* Decorative Outer Ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[3.5, 0.05, 16, 100]} />
        <meshStandardMaterial color="#ff00c8" emissive="#ff00c8" emissiveIntensity={2} />
      </mesh>
    </group>
  );
};

export default Avatar3D;
