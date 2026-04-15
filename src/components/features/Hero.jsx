import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedText from '../ui/AnimatedText';
import Magnetic from '../ui/Magnetic';

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Parallax effects
  const calcX = (amount) => (mousePos.x - window.innerWidth / 2) * amount;
  const calcY = (amount) => (mousePos.y - window.innerHeight / 2) * amount;

  return (
    <section className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center lg:justify-between px-6 lg:px-24 pt-48 lg:pt-32 pb-20 lg:py-20 overflow-hidden">
      {/* Massive Yellow Circle Decoration with Parallax */}
      <motion.div 
        animate={{ 
          x: calcX(0.02),
          y: calcY(0.02)
        }}
        className="absolute top-[-5%] left-[-5%] lg:top-[-10%] lg:left-[-10%] w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] bg-tertiary rounded-full z-0 opacity-80" 
      />
      
      <div className="relative z-10 w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left gap-6 lg:gap-8">
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="bg-secondary text-white px-4 lg:px-6 py-2 rounded-full font-bold flex items-center gap-2 shadow-pop border-2 border-foreground"
        >
          <Sparkles size={16} className="lg:size-[18px]" />
          <span className="text-[10px] lg:text-sm uppercase tracking-wider">The Agency of the Future</span>
        </motion.div>

        <motion.h1 
          className="font-heading text-5xl sm:text-6xl lg:text-8xl leading-[1.1] text-foreground tracking-tight"
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
            className="text-primary underline decoration-tertiary decoration-4 lg:decoration-8 underline-offset-4 lg:underline-offset-8 mr-2 lg:mr-4" 
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
          className="text-lg lg:text-xl text-muted-foreground max-w-lg leading-relaxed font-sans"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Zorvia develops scalable, high-performance digital ecosystems for visionary brands. 
          We engineer strategic digital experiences designed for global scalability and engagement.
        </motion.p>
        
        <div className="flex flex-col sm:flex-row items-center gap-4 lg:gap-6 mt-4 w-full sm:w-auto">
          <Magnetic strength={0.3}>
            <Link to="/start-project" className="w-full sm:w-auto">
              <motion.button 
                whileHover={{ scale: 1.05, x: -2, y: -2 }}
                whileTap={{ scale: 0.95, x: 2, y: 2 }}
                className="group relative w-full sm:w-auto bg-primary text-white px-8 lg:px-10 py-4 lg:py-5 rounded-full font-extrabold text-lg lg:text-xl border-2 border-foreground shadow-pop-lg hover:shadow-[10px_10px_0px_0px_#1E293B] transition-all flex items-center justify-center gap-4 active:shadow-pop"
              >
                Start Your Project
                <div className="bg-white text-primary rounded-full p-1 group-hover:rotate-45 transition-transform duration-300">
                  <ArrowRight size={20} className="lg:size-[24px]" />
                </div>
              </motion.button>
            </Link>
          </Magnetic>
          
          <Magnetic strength={0.2}>
            <Link to="/portfolio" className="w-full sm:w-auto">
              <motion.button 
                whileHover={{ scale: 1.05, bg: "#FBBF24" }}
                className="w-full sm:w-auto px-8 lg:px-10 py-4 lg:py-5 border-2 border-foreground rounded-full font-bold text-lg lg:text-xl hover:shadow-pop transition-all bg-white"
              >
                View Work
              </motion.button>
            </Link>
          </Magnetic>
        </div>
      </div>

      <div className="relative w-full lg:w-5/12 aspect-square mt-16 lg:mt-0 max-w-[400px] lg:max-w-none">
        {/* Dot pattern background for image */}
        <div className="absolute inset-0 bg-dot-grid opacity-50 z-0" />
        
        <motion.div 
          className="relative z-10 w-full h-full bg-quaternary blob-mask border-4 border-foreground shadow-pop-lg overflow-hidden"
          initial={{ scale: 0.5, opacity: 0, rotate: -10 }}
          animate={{ 
            scale: 1, 
            opacity: 1, 
            rotate: 0,
            borderRadius: ["40% 60% 70% 30% / 40% 50% 60% 60%", "60% 40% 30% 70% / 60% 40% 60% 40%", "40% 60% 70% 30% / 40% 50% 60% 60%"]
          }}
          transition={{ 
            type: "spring", 
            stiffness: 100, 
            delay: 0.4,
            borderRadius: { repeat: Infinity, duration: 8, ease: "easeInOut" }
          }}
        >
          <img 
            src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2232&auto=format&fit=crop" 
            alt="High-Impact Digital Engineering"
            className="w-full h-full object-cover mix-blend-multiply opacity-90 contrast-125 grayscale-[20%]"
          />
        </motion.div>
        
        {/* Floating Confetti Shapes with Parallax */}
        <motion.div 
          animate={{ 
            y: [0, -20, 0],
            x: calcX(0.05),
            translateY: calcY(0.05)
          }}
          transition={{ 
            y: { repeat: Infinity, duration: 4 },
          }}
          className="absolute -top-6 -right-6 lg:-top-10 lg:-right-10 w-16 h-16 lg:w-24 lg:h-24 bg-tertiary rounded-full border-2 border-foreground shadow-pop"
        />
        <motion.div 
          animate={{ 
            rotate: [12, 0, 12],
            x: calcX(-0.04),
            y: calcY(-0.04)
          }}
          transition={{ 
            rotate: { repeat: Infinity, duration: 5 },
          }}
          className="absolute -bottom-6 -left-6 lg:-bottom-10 lg:-left-10 w-12 h-12 lg:w-20 lg:h-20 bg-secondary rotate-12 border-2 border-foreground shadow-pop"
        />
      </div>
    </section>
  );
};

export default Hero;
