import React from 'react';
import { motion } from 'framer-motion';
import Portfolio from '../components/features/Portfolio';
import { ArrowLeft, Sparkles, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';
import Magnetic from '../components/ui/Magnetic';
import AnimatedText from '../components/ui/AnimatedText';

const PortfolioPage = () => {
  return (
    <div className="min-h-screen pt-24 lg:pt-32 pb-16 bg-white relative overflow-hidden">
      {/* Decorative background grids */}
      <div className="absolute inset-0 bg-dot-grid opacity-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -mr-96 -mt-96" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-12 lg:mb-16 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 lg:gap-10 mb-8 lg:mb-12">
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-6xl lg:text-8xl font-heading text-foreground tracking-tighter leading-[0.85] mb-6 lg:mb-8 flex flex-col">
              <AnimatedText text="OUR" from="left" delay={0.1} />
              <AnimatedText text="PREVIOUS" className="text-secondary italic underline decoration-foreground decoration-4 underline-offset-4" from="left" delay={0.3} />
              <AnimatedText text="ECOSYSTEMS." from="left" delay={0.5} />
            </h1>
            
            <p className="text-base lg:text-xl text-muted-foreground font-sans font-medium max-w-xl leading-relaxed mt-4 lg:mt-6">
              A meticulously engineered showcase of the digital products, platforms, and AI architectures we've deployed for visionary organizations.
            </p>
          </div>

          <Magnetic strength={0.3}>
            <Link to="/" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto flex items-center justify-center gap-4 px-6 lg:px-8 py-3 lg:py-4 bg-white border-2 border-foreground rounded-full font-black text-[10px] lg:text-xs uppercase tracking-widest shadow-pop hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all group"
              >
                <ArrowLeft size={16} lg:size={20} strokeWidth={3} className="group-hover:-translate-x-2 transition-transform" />
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
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-20 lg:mt-32 pb-24">
         <div className="p-8 lg:p-16 bg-foreground rounded-3xl lg:rounded-[3rem] text-white relative overflow-hidden group shadow-pop">
            <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)]" />
            <div className="relative z-10 flex flex-col items-center text-center">
               <motion.div 
                 initial={{ scale: 0 }}
                 whileInView={{ scale: 1 }}
                 className="w-16 h-16 lg:w-24 lg:h-24 bg-white text-foreground rounded-2xl lg:rounded-3xl flex items-center justify-center mb-8 lg:mb-12 shadow-pop group-hover:-rotate-12 transition-transform duration-500"
               >
                 <Rocket size={32} lg:size={48} fill="currentColor" />
               </motion.div>
               
               <h2 className="text-3xl lg:text-6xl font-heading font-black mb-6 lg:mb-10 leading-none uppercase italic tracking-tighter">
                  Ready to architect <br className="hidden lg:block" /> 
                  the <span className="text-tertiary group-hover:text-foreground transition-colors">Digital Frontier?</span>
               </h2>
               
               <Magnetic strength={0.5}>
                 <Link to="/start-project" className="w-full sm:w-auto">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full sm:w-auto px-8 lg:px-12 py-4 lg:py-6 bg-white text-foreground rounded-full font-heading font-black text-lg lg:text-2xl uppercase tracking-widest shadow-pop hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all flex items-center justify-center gap-4"
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
