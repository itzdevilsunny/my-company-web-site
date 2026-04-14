import React from 'react';
import { motion } from 'framer-motion';
import { Code, Smartphone, Palette, BrainCircuit, Cloud } from 'lucide-react';
import './Services.css';

const servicesData = [
  { icon: <Code size={40} />, title: 'Web Development', desc: 'High-performance, scalable modern websites.' },
  { icon: <Smartphone size={40} />, title: 'App Development', desc: 'Seamless mobile experiences for iOS & Android.' },
  { icon: <Palette size={40} />, title: 'UI/UX Design', desc: 'Stunning, user-centric interfaces.' },
  { icon: <BrainCircuit size={40} />, title: 'AI Solutions', desc: 'Smart automation and intelligent features.' },
  { icon: <Cloud size={40} />, title: 'Cloud & Backend', desc: 'Robust, secure, and scalable infrastructure.' }
];

const Services = () => {
  return (
    <section id="services" className="services">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        What We Offer
      </motion.h2>

      <div className="services-grid">
        {servicesData.map((service, index) => (
          <motion.div 
            key={index} 
            className="service-card glass-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, borderColor: 'var(--primary-color)' }}
          >
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
