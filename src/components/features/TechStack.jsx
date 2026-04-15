import React from 'react';
import { motion } from 'framer-motion';

const technologies = [
  { name: 'React', level: 'Core', color: 'bg-primary', icon: 'https://cdn.simpleicons.org/react/ffffff' },
  { name: 'Node.js', level: 'Runtime', color: 'bg-quaternary', icon: 'https://cdn.simpleicons.org/nodedotjs/ffffff' },
  { name: 'MongoDB', level: 'Database', color: 'bg-secondary', icon: 'https://cdn.simpleicons.org/mongodb/ffffff' },
  { name: 'AWS', level: 'Cloud', color: 'bg-tertiary', icon: 'https://cdn.simpleicons.org/amazonwebservices/ffffff' },
  { name: 'Python', level: 'AI/DL', color: 'bg-foreground', icon: 'https://cdn.simpleicons.org/python/ffffff' }
];

const TechStack = () => {
  return (
    <section className="px-6 lg:px-24 py-32 bg-background relative overflow-hidden" id="tech-stack">
      {/* Background neon glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-quaternary font-black text-xs uppercase tracking-[0.4em] mb-4"
            >
              // The Innovation Stack
          </motion.div>
            <h2 className="text-5xl lg:text-7xl font-heading text-foreground tracking-tighter leading-none mb-8">
              Engineered <br />
              <span className="text-secondary italic">for Performance.</span>
            </h2>
            <p className="text-xl text-muted-foreground font-sans font-medium mb-12 max-w-lg leading-relaxed">
              We leverage cloud-native technologies to build systems that are fast, secure, and inherently scalable.
            </p>
            
            <div className="flex flex-wrap gap-4">
              {['Scalable', 'Cloud-Native', 'AI-Ready', 'High Performance'].map((tag) => (
                <span key={tag} className="px-5 py-2 bg-white border-2 border-foreground rounded-full text-xs font-black uppercase tracking-widest shadow-pop-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {technologies.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.5, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ 
                   delay: i * 0.1,
                   duration: 0.5,
                   type: "spring",
                   bounce: 0.4
                }}
                whileHover={{ y: -10, rotate: i % 2 === 0 ? 5 : -5 }}
                className="group relative"
              >
                <div className={`p-8 bg-white border-4 border-foreground rounded-[2rem] shadow-pop hover:shadow-pop-lg transition-all flex flex-col items-center justify-center text-center`}>
                  <div className={`w-16 h-16 ${tech.color} border-2 border-foreground rounded-2xl flex items-center justify-center mb-6 shadow-pop transform -rotate-3 group-hover:rotate-0 transition-transform`}>
                    <img src={tech.icon} alt={tech.name} className="w-8 h-8 object-contain" />
                  </div>
                  <h3 className="font-heading font-black text-xl mb-1">{tech.name}</h3>
                  <span className="text-[10px] font-black uppercase tracking-widest opacity-40">{tech.level}</span>
                </div>
              </motion.div>
            ))}
            
            {/* Playful placeholder for "And More" */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="p-8 border-4 border-foreground border-dashed rounded-[2rem] flex flex-col items-center justify-center text-center hover:bg-muted transition-colors cursor-help"
            >
              <span className="text-4xl mb-2">⚡</span>
              <span className="text-[10px] font-black uppercase tracking-widest opacity-60">+ 20 More</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
