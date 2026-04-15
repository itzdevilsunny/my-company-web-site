import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function Particles({ count = 2000 }) {
  const points = useRef();
  
  // Generate random positions
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 15;
    }
    return pos;
  }, [count]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    points.current.rotation.y = time * 0.05;
    points.current.rotation.x = time * 0.02;
    
    // Subtle mouse reaction
    const { x, y } = state.mouse;
    points.current.position.x = THREE.MathUtils.lerp(points.current.position.x, x * 0.5, 0.1);
    points.current.position.y = THREE.MathUtils.lerp(points.current.position.y, y * 0.5, 0.1);
  });

  return (
    <Points ref={points} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#8B5CF6"
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.4}
      />
    </Points>
  );
}

const ThreeBackground = () => {
  return (
    <div className="fixed inset-0 z-[-1] bg-white pointer-events-none">
       {/* Ambient Gradient */}
       <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(139,92,246,0.05),transparent),radial-gradient(circle_at_bottom_left,rgba(0,0,0,0.02),transparent)]" />
       
       <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <ambientLight intensity={0.5} />
          <Particles />
       </Canvas>
       
       {/* Grain Effect */}
       <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
};

export default ThreeBackground;
