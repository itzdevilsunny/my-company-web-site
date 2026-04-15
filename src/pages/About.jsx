import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import MissionVision from '../components/features/MissionVision';
import Team from '../components/features/Team';
import Portfolio from '../components/features/Portfolio';
import TechStack from '../components/features/TechStack';
import TrustSection from '../components/features/TrustSection';
import { Rocket, Target, Sparkles, Code2, Globe, Star, ArrowRight } from 'lucide-react';
import AnimatedText from '../components/ui/AnimatedText';
import Magnetic from '../components/ui/Magnetic';

const AboutHero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const calcX = (amount) => (mousePos.x - window.innerWidth / 2) * amount;
  const calcY = (amount) => (mousePos.y - window.innerHeight / 2) * amount;

  return (
    <section className="px-6 lg:px-24 pt-32 lg:pt-64 pb-20 lg:pb-32 bg-white relative overflow-hidden text-center">
      {/* Decorative background grids */}
      <div className="absolute inset-0 bg-dot-grid opacity-10 pointer-events-none" />
      
      {/* Dynamic Background Elements */}
      <motion.div 
        animate={{ x: calcX(0.05), y: calcY(0.05) }}
        className="absolute top-20 right-[15%] w-48 h-48 bg-tertiary rounded-[3rem] border-4 border-foreground shadow-pop hidden lg:flex items-center justify-center rotate-12"
      >
         <Target size={64} className="text-foreground" />
      </motion.div>
      <motion.div 
        animate={{ x: calcX(-0.03), y: calcY(-0.03), rotate: [0, 360] }}
        transition={{ rotate: { duration: 30, repeat: Infinity, ease: "linear" } }}
        className="absolute bottom-40 left-[10%] w-32 h-32 bg-quaternary border-4 border-foreground rounded-full shadow-pop flex items-center justify-center hidden lg:flex"
      >
        <Star className="text-foreground" size={48} fill="currentColor" />
      </motion.div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: -20 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 6 }}
            className="w-20 h-20 lg:w-28 lg:h-28 bg-secondary text-white rounded-2xl lg:rounded-3xl border-4 border-foreground flex items-center justify-center mb-8 lg:mb-16 shadow-pop-lg"
          >
            <Rocket size={32} lg:size={56} strokeWidth={3} fill="currentColor" />
          </motion.div>
          
          <h1 className="text-4xl sm:text-6xl lg:text-[11rem] font-heading text-foreground tracking-tighter leading-[0.8] mb-8 lg:mb-16 flex flex-col items-center">
            <AnimatedText text="DEFINING THE" from="bottom" />
            <span className="text-primary italic underline decoration-foreground decoration-4 lg:decoration-8 underline-offset-4 lg:underline-offset-8">
               <AnimatedText text="ZORVIA" from="bottom" delay={0.3} />
            </span>
            <AnimatedText text="PARADIGM." from="bottom" delay={0.6} />
          </h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-lg lg:text-4xl text-muted-foreground font-sans max-w-5xl leading-tight font-black tracking-tight"
          >
            Zorvia isn't just an agency; it's a digital architecture laboratory. <br className="hidden lg:block" />
            We engineer wildly optimistic digital ecosystems for global visionaries.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <AboutHero />
      <MissionVision />
      <Team teaser={false} />
      <TechStack />
      <TrustSection />
      
      {/* Bottom CTA to start a project */}
      <section className="px-4 lg:px-24 py-24 lg:py-56 bg-white text-center">
        <div className="max-w-6xl mx-auto p-12 lg:p-32 border-4 border-foreground rounded-[2.5rem] lg:rounded-[4rem] bg-quaternary shadow-pop-lg relative overflow-hidden group">
           <div className="absolute top-10 left-10 text-foreground opacity-5 rotate-12 group-hover:rotate-45 transition-transform duration-1000">
              <Star size={180} fill="currentColor" />
           </div>
           <div className="absolute bottom-10 right-10 text-foreground opacity-5 -rotate-12 group-hover:-rotate-45 transition-transform duration-1000">
              <Sparkles size={180} />
           </div>
           
           <div className="relative z-10 flex flex-col items-center">
              <h2 className="text-4xl lg:text-[7rem] font-heading text-foreground mb-8 lg:mb-16 tracking-tighter leading-none uppercase italic">
                Ready to Build <br /> 
                <span className="text-secondary group-hover:text-primary transition-colors">Wildly Successful?</span>
              </h2>
              
              <Magnetic strength={0.4}>
                <Link to="/start-project" className="w-full sm:w-auto">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto px-10 lg:px-16 py-6 lg:py-8 bg-foreground text-white rounded-full font-heading font-black text-xl lg:text-3xl uppercase tracking-widest shadow-pop-lg hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all flex items-center justify-center gap-4 lg:gap-6"
                  >
                    Let's Get Started 
                    <ArrowRight size={32} lg:size={40} strokeWidth={3} className="group-hover:translate-x-2 transition-transform" />
                  </motion.button>
                </Link>
              </Magnetic>
           </div>
        </div>
      </section>
    </div>
  );
};

export default About;
