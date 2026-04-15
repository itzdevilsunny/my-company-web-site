import React from 'react';
import { motion } from 'framer-motion';
import { Target, Compass, Sparkles } from 'lucide-react';

const MissionVision = () => {
  return (
    <section className="px-6 lg:px-12 py-16 lg:py-24 bg-white relative overflow-hidden" id="mission-vision">
      <div className="absolute inset-0 bg-dot-grid opacity-20" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ y: -5, rotate: -1 }}
            className="p-8 lg:p-10 bg-white border-2 border-foreground rounded-3xl shadow-pop hover:shadow-pop transition-all relative overflow-hidden group"
          >
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 rounded-full group-hover:scale-150 transition-transform duration-700" />
            <div className="w-14 h-14 bg-primary border-2 border-foreground rounded-2xl flex items-center justify-center mb-8 shadow-pop transform -rotate-6 group-hover:rotate-0 transition-transform">
              <Target size={28} className="text-white" />
            </div>
            
            <h3 className="text-2xl lg:text-3xl font-heading font-black mb-4 tracking-tight">Our <span className="text-primary italic">Mission.</span></h3>
            <p className="text-base lg:text-lg text-muted-foreground font-sans font-medium leading-relaxed">
              To empower businesses with innovative digital solutions that are fast, scalable, and user-friendly. We bridge the gap between complex problems and elegant code.
            </p>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ y: -5, rotate: 1 }}
            className="p-8 lg:p-10 bg-white border-2 border-foreground rounded-3xl shadow-pop hover:shadow-pop transition-all relative overflow-hidden group"
          >
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-secondary/10 rounded-full group-hover:scale-150 transition-transform duration-700" />
            <div className="w-14 h-14 bg-secondary border-2 border-foreground rounded-2xl flex items-center justify-center mb-8 shadow-pop transform rotate-6 group-hover:rotate-0 transition-transform">
              <Compass size={28} className="text-white" />
            </div>
            
            <h3 className="text-2xl lg:text-3xl font-heading font-black mb-4 tracking-tight">Our <span className="text-secondary italic">Vision.</span></h3>
            <p className="text-base lg:text-lg text-muted-foreground font-sans font-medium leading-relaxed">
              To become a leading tech-driven company known for creativity, performance, and innovation. We aim to set the global standard for modern software development.
            </p>
          </motion.div>
        </div>
        
        {/* Decorative Quote or Highlight */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-12 p-6 bg-quaternary/10 border-2 border-foreground border-dashed rounded-3xl flex flex-col md:flex-row items-center gap-6 text-center md:text-left"
        >
          <div className="w-12 h-12 bg-white border-2 border-foreground rounded-xl flex items-center justify-center shadow-pop transform rotate-6 shrink-0">
            <Sparkles className="text-quaternary" size={20} />
          </div>
          <p className="text-base font-heading font-black text-foreground max-w-2xl">
            "Innovation is not just about technology; it's about solving human problems in the most elegant way possible."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionVision;
