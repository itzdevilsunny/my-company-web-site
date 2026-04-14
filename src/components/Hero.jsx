import React from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import Avatar3D from './Avatar3D';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          ZORVIA – Building <span className="highlight">Future-Ready</span> Digital Experiences
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          We design, develop and deliver high-performance websites, apps, and scalable digital solutions.
        </motion.p>
        
        <motion.div 
          className="hero-ctas"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <button className="neon-button">🚀 Get Started</button>
          <button className="outline-button">📩 Contact Us</button>
        </motion.div>
      </div>

      <div className="hero-visual">
        <Canvas camera={{ position: [0, 0, 10] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Avatar3D />
        </Canvas>
      </div>
    </section>
  );
};

export default Hero;
