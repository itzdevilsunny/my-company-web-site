import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Target, Rocket, Lightbulb, Shield } from 'lucide-react';
import './WhyUs.css';

const reasons = [
  { icon: <Zap size={32}/>, title: 'Fast Delivery', desc: 'We ship products at lightning speed without compromising quality.' },
  { icon: <Target size={32}/>, title: 'Client-Focused', desc: 'Your vision is our priority — we build exactly what you need.' },
  { icon: <Rocket size={32}/>, title: 'Modern Tech Stack', desc: 'React, Node.js, MongoDB, AWS — always up-to-date technology.' },
  { icon: <Lightbulb size={32}/>, title: 'Creative & Scalable', desc: 'We blend innovation with architecture built to grow.' },
  { icon: <Shield size={32}/>, title: 'Secure & Reliable', desc: 'Security-first approach with 99.9% uptime guarantee.' },
];

const WhyUs = () => {
  return (
    <section className="whyus">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Why Zorvia?
      </motion.h2>
      <div className="whyus-grid">
        {reasons.map((r, i) => (
          <motion.div
            key={i}
            className="whyus-card glass-card"
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ scale: 1.04 }}
          >
            <div className="whyus-icon">{r.icon}</div>
            <h3>{r.title}</h3>
            <p>{r.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyUs;
