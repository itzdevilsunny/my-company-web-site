import React from 'react';
import { motion } from 'framer-motion';
import Magnetic from '../ui/Magnetic';

const technologies = [
  { name: 'React', level: 'Core', color: 'bg-primary', icon: 'https://cdn.simpleicons.org/react/ffffff', delay: 0 },
  { name: 'Node.js', level: 'Runtime', color: 'bg-quaternary', icon: 'https://cdn.simpleicons.org/nodedotjs/ffffff', delay: 0.1 },
  { name: 'MongoDB', level: 'Database', color: 'bg-secondary', icon: 'https://cdn.simpleicons.org/mongodb/ffffff', delay: 0.2 },
  { name: 'Next.js', level: 'Framework', color: 'bg-foreground', icon: 'https://cdn.simpleicons.org/nextdotjs/ffffff', delay: 0.3 },
  { name: 'AWS', level: 'Cloud', color: 'bg-tertiary', icon: 'https://cdn.simpleicons.org/amazonwebservices/ffffff', delay: 0.4 },
  { name: 'Python', level: 'AI/DL', color: 'bg-[#3776AB]', icon: 'https://cdn.simpleicons.org/python/ffffff', delay: 0.5 }
];

const TechStack = () => {
  return (
    <section className="px-6 lg:px-12 py-24 lg:py-32 bg-white relative overflow-hidden" id="tech-stack">
      {/* Background neon glow */}
      <div className="absolute left-0 top-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none translate-x-1/2 translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-primary font-black text-sm uppercase tracking-[0.5em] mb-6 flex items-center gap-4"
            >
              <span className="w-12 h-1 bg-primary" /> The Innovation Stack
            </motion.div>
            <h2 className="text-4xl lg:text-6xl font-heading text-foreground tracking-tighter leading-[0.85] mb-8">
              Future-Proof <br />
              <span className="text-secondary italic underline decoration-foreground decoration-4 underline-offset-4">Architectures.</span>
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground font-sans font-medium mb-10 max-w-xl leading-relaxed">
              We leverage cloud-native technologies to build systems that aren't just fast, they're <span className="text-foreground font-black italic underline decoration-quaternary/40 underline-offset-4 decoration-4">unstoppable.</span>
            </p>
            
            <div className="flex flex-wrap gap-4">
              {['Scalable', 'Cloud-Native', 'AI-Ready', 'Edge Computing'].map((tag) => (
                <Magnetic key={tag} strength={0.1}>
                  <span className="px-6 py-3 bg-white border-2 border-foreground rounded-full text-xs font-black uppercase tracking-widest shadow-pop-sm hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-default">
                    {tag}
                  </span>
                </Magnetic>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            {technologies.map((tech, i) => (
              <Magnetic key={tech.name} strength={0.4}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 30 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: tech.delay, type: "spring", stiffness: 100 }}
                  className="group relative"
                >
                  <div className={`p-6 bg-white border-2 border-foreground rounded-3xl shadow-pop hover:shadow-pop transition-all flex flex-col items-center justify-center text-center h-full relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 p-3 opacity-10 font-mono text-[8px] uppercase font-black">{tech.level}</div>
                    <div className={`w-14 h-14 ${tech.color} border-2 border-foreground rounded-2xl flex items-center justify-center mb-5 shadow-pop transform -rotate-3 group-hover:rotate-0 transition-all duration-500`}>
                      <img src={tech.icon} alt={tech.name} className="w-7 h-7 object-contain" />
                    </div>
                    <h3 className="font-heading font-black text-xl mb-1 tracking-tighter">{tech.name}</h3>
                    <div className="w-6 h-1 bg-foreground/10 rounded-full group-hover:w-12 transition-all" />
                  </div>
                </motion.div>
              </Magnetic>
            ))}
            
            <Magnetic strength={0.4}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                className="p-6 border-2 border-foreground border-dashed rounded-3xl flex flex-col items-center justify-center text-center hover:bg-quaternary/10 transition-colors cursor-help group h-full shadow-pop-sm hover:shadow-pop transition-all"
              >
                <div className="text-4xl mb-4 group-hover:rotate-12 transition-transform">🚀</div>
                <span className="text-[10px] font-black uppercase tracking-widest text-foreground">+ 24 More</span>
              </motion.div>
            </Magnetic>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
