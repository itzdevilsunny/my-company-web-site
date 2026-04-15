import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import AnimatedText from '../ui/AnimatedText';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col lg:flex-row items-center justify-between px-6 lg:px-24 py-20 overflow-hidden">
      {/* Massive Yellow Circle Decoration */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-tertiary rounded-full z-0 opacity-80" />
      
      <div className="relative z-10 w-full lg:w-1/2 flex flex-col items-start gap-8">
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="bg-secondary text-white px-6 py-2 rounded-full font-bold flex items-center gap-2 shadow-pop border-2 border-foreground"
        >
          <Sparkles size={18} />
          <span className="text-sm uppercase tracking-wider">The Agency of the Future</span>
        </motion.div>

        <motion.h1 
          className="font-heading text-6xl lg:text-8xl leading-[1.1] text-foreground tracking-tight"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <AnimatedText 
            text="We Engineer" 
            className="block" 
            from="left" 
            delay={0.2}
          />
          <AnimatedText 
            text="High-Impact" 
            className="text-primary underline decoration-tertiary decoration-8 underline-offset-8 mr-4" 
            from="left" 
            delay={0.5}
          />
          <AnimatedText 
            text="Digital Success" 
            className="block" 
            from="left" 
            delay={0.8}
          />
        </motion.h1>
        
        <motion.p 
          className="text-xl text-muted-foreground max-w-lg leading-relaxed font-sans"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Zorvia develops scalable, high-performance digital ecosystems for visionary brands. 
          We engineer strategic digital experiences designed for global scalability and engagement.
        </motion.p>
        
        <div className="flex flex-col sm:flex-row gap-6 mt-4">
          <motion.button 
            whileHover={{ scale: 1.05, x: -2, y: -2 }}
            whileTap={{ scale: 0.95, x: 2, y: 2 }}
            className="group relative bg-primary text-white px-10 py-5 rounded-full font-extrabold text-xl border-2 border-foreground shadow-pop-lg hover:shadow-[10px_10px_0px_0px_#1E293B] transition-all flex items-center gap-4 active:shadow-pop"
          >
            Start Your Project
            <div className="bg-white text-primary rounded-full p-1 group-hover:rotate-45 transition-transform duration-300">
              <ArrowRight size={24} />
            </div>
          </motion.button>
          
          <motion.button 
            whileHover={{ scale: 1.05, bg: "#FBBF24" }}
            className="px-10 py-5 border-2 border-foreground rounded-full font-bold text-xl hover:shadow-pop transition-all"
          >
            View Work
          </motion.button>
        </div>
      </div>

      <div className="relative w-full lg:w-5/12 aspect-square mt-20 lg:mt-0">
        {/* Dot pattern background for image */}
        <div className="absolute inset-0 bg-dot-grid opacity-50 z-0" />
        
        <motion.div 
          className="relative z-10 w-full h-full bg-quaternary blob-mask border-4 border-foreground shadow-pop-lg overflow-hidden"
          initial={{ scale: 0.5, opacity: 0, rotate: -10 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.4 }}
        >
          <img 
            src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop" 
            alt="Playful Tech"
            className="w-full h-full object-cover mix-blend-multiply opacity-80"
          />
        </motion.div>
        
        {/* Floating Confetti Shapes */}
        <motion.div 
          className="absolute -top-10 -right-10 w-24 h-24 bg-tertiary rounded-full border-2 border-foreground shadow-pop"
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
        />
        <motion.div 
          className="absolute -bottom-10 -left-10 w-20 h-20 bg-secondary rotate-12 border-2 border-foreground shadow-pop"
          animate={{ rotate: [12, 0, 12] }}
          transition={{ repeat: Infinity, duration: 5 }}
        />
      </div>
    </section>
  );
};

export default Hero;
