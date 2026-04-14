import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="about-page">
      <motion.h2 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }}
      >
        About ZORVIA
      </motion.h2>
      <div className="glass-card">
        <p>
          Zorvia is a cutting-edge digital agency dedicated to pushing the boundaries of what's possible on the web. 
          We specialize in high-performance React applications, stunning 3D experiences, and scalable cloud solutions.
        </p>
      </div>
    </section>
  );
};

export default About;
