import React from 'react';
import { motion } from 'framer-motion';
import Portfolio from '../components/features/Portfolio';
import { ArrowLeft, Sparkles, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';
import Magnetic from '../components/ui/Magnetic';
import AnimatedText from '../components/ui/AnimatedText';

const PortfolioPage = () => {
  return (
    <div className="min-h-screen pt-32 lg:pt-48 pb-20 bg-white relative overflow-hidden">
      {/* Decorative background grids */}
      <div className="absolute inset-0 bg-dot-grid opacity-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -mr-96 -mt-96" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-24 mb-16 lg:mb-24 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 lg:gap-12 mb-12 lg:mb-16">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-primary/20 text-primary border-2 border-primary/30 px-4 lg:px-6 py-1.5 lg:py-2 rounded-full font-black text-[10px] lg:text-xs uppercase tracking-[0.4em] mb-6 lg:mb-8 inline-flex items-center gap-3 shadow-pop-sm"
            >
              <Sparkles size={14} fill="currentColor" /> Strategic Case Studies
            </motion.div>
            
            <h1 className="text-5xl sm:text-7xl lg:text-[10rem] font-heading text-foreground tracking-tighter leading-[0.85] mb-6 lg:mb-10 flex flex-col">
              <AnimatedText text="OUR" from="left" delay={0.1} />
              <AnimatedText text="PREVIOUS" className="text-secondary italic underline decoration-foreground decoration-4 lg:decoration-8 underline-offset-4 lg:underline-offset-8" from="left" delay={0.3} />
              <AnimatedText text="ECOSYSTEMS." from="left" delay={0.5} />
            </h1>
            
            <p className="text-lg lg:text-3xl text-muted-foreground font-sans font-medium max-w-2xl leading-tight tracking-tight mt-6 lg:mt-8">
              A meticulously engineered showcase of the digital products, platforms, and AI architectures we've deployed for visionary organizations.
            </p>
          </div>

          <Magnetic strength={0.3}>
            <Link to="/" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto flex items-center justify-center gap-4 px-8 lg:px-10 py-4 lg:py-5 bg-white border-4 border-foreground rounded-full font-black text-xs lg:text-sm uppercase tracking-widest shadow-pop hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all group"
              >
                <ArrowLeft size={20} lg:size={24} strokeWidth={3} className="group-hover:-translate-x-2 transition-transform" />
                Escape to Home
              </motion.button>
            </Link>
          </Magnetic>
        </div>
      </div>

      <div className="relative z-10">
        <Portfolio teaser={false} />
      </div>

      {/* Global Call to Action */}
      <div className="max-w-7xl mx-auto px-6 lg:px-24 mt-32 lg:mt-56 pb-32">
         <div className="p-12 lg:p-32 bg-foreground rounded-[2.5rem] lg:rounded-[4rem] text-white relative overflow-hidden group shadow-pop-lg">
            <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)]" />
            <div className="relative z-10 flex flex-col items-center text-center">
               <motion.div 
                 initial={{ scale: 0 }}
                 whileInView={{ scale: 1 }}
                 className="w-16 h-16 lg:w-24 lg:h-24 bg-white text-foreground rounded-2xl lg:rounded-3xl flex items-center justify-center mb-8 lg:mb-12 shadow-pop group-hover:-rotate-12 transition-transform duration-500"
               >
                 <Rocket size={32} lg:size={48} fill="currentColor" />
               </motion.div>
               
               <h2 className="text-4xl lg:text-8xl font-heading font-black mb-8 lg:mb-12 leading-none uppercase italic tracking-tighter">
                  Ready to architect <br className="hidden lg:block" /> 
                  the <span className="text-tertiary group-hover:text-foreground transition-colors">Digital Frontier?</span>
               </h2>
               
               <Magnetic strength={0.5}>
                 <Link to="/start-project" className="w-full sm:w-auto">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full sm:w-auto px-8 lg:px-16 py-6 lg:py-8 bg-white text-foreground rounded-full font-heading font-black text-xl lg:text-3xl uppercase tracking-widest shadow-pop-lg hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all flex items-center justify-center gap-4"
                    >
                      Initialize Strategy
                    </motion.button>
                 </Link>
               </Magnetic>
            </div>
         </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
