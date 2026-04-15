import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import MissionVision from '../components/features/MissionVision';
import Team from '../components/features/Team';
import Portfolio from '../components/features/Portfolio';
import TechStack from '../components/features/TechStack';
import TrustSection from '../components/features/TrustSection';
import { Rocket, Target, Sparkles, Code2, Globe } from 'lucide-react';

const AboutHero = () => {
  return (
    <section className="px-6 lg:px-24 pt-48 pb-20 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] -mr-64 -mt-64" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-[80px] -ml-32 -mb-32" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-20 h-20 bg-foreground text-white rounded-3xl flex items-center justify-center mb-8 shadow-pop rotate-12"
          >
            <Rocket size={40} />
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl lg:text-9xl font-heading text-foreground tracking-tighter leading-none mb-8"
          >
            Defining the <br />
            <span className="text-primary italic">Zorvia Effect.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl text-muted-foreground font-sans max-w-3xl leading-relaxed font-medium"
          >
            Zorvia is a modern web development company focused on delivering scalable, high-performance, and visually stunning digital solutions. We combine creativity, technology, and innovation to build impactful products for businesses and startups.
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
    <div className="about-page">
      <AboutHero />
      <MissionVision />
      <Team teaser={false} />
      <Portfolio teaser={false} />
      <TechStack />
      <TrustSection />
      
      {/* Bottom CTA to start a project */}
      <section className="px-6 lg:px-24 py-32 bg-white text-center">
        <div className="max-w-4xl mx-auto p-16 border-4 border-foreground rounded-[3rem] bg-quaternary shadow-pop relative overflow-hidden group">
           <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
           
           <div className="relative z-10">
              <h2 className="text-4xl lg:text-6xl font-heading text-foreground mb-8 tracking-tighter">Ready to Build Something <br /><span className="text-primary italic">Wildly Successful?</span></h2>
              <button 
                onClick={() => window.location.href = '/start-project'}
                className="px-12 py-6 bg-foreground text-white rounded-full font-heading font-black uppercase tracking-[0.2em] shadow-pop hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
              >
                Let's Get Started
              </button>
           </div>
        </div>
      </section>
    </div>
  );
};

export default About;
