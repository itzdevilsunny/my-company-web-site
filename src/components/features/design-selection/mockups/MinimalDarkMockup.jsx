import React from 'react';
import { motion } from 'framer-motion';

const MinimalDarkMockup = ({ theme }) => {
  return (
    <div className="h-full relative overflow-hidden bg-black text-[#EAB308] font-sans selection:bg-[#EAB308] selection:text-black">
      
      {/* 1. Ultimate Minimal Layout */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center p-8 lg:p-20">
        
        <header className="absolute top-16 w-full flex justify-center opacity-30">
           <span className="text-[9px] font-light lowercase tracking-[0.5em] text-[#EAB308]">pure focus</span>
        </header>

        <main className="max-w-2xl">
           <motion.div
             initial={{ opacity: 0, scale: 0.98 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 2, ease: "easeOut" }}
             className="space-y-12"
           >
              <div className="w-[1px] h-24 bg-gradient-to-b from-transparent via-[#EAB308] to-transparent mx-auto opacity-50" />
              
              <h2 className="text-4xl lg:text-6xl font-light tracking-[0.2em] leading-relaxed uppercase text-[#ffffff]">
                 Nothing <br />
                 <span className="text-[#EAB308]">Extra.</span>
              </h2>
              
              <p className="text-sm font-light tracking-widest leading-loose opacity-60 uppercase">
                 Eliminate distraction. Elevate content. The pinnacle of refined digital luxury achieved through absolute restraint.
              </p>

              <div className="pt-12">
                 <motion.button 
                   whileHover={{ opacity: 1, letterSpacing: "0.4em" }}
                   className="pb-2 border-b border-[#EAB308]/30 text-[#EAB308] text-[10px] uppercase font-light tracking-[0.3em] opacity-60 transition-all"
                 >
                    Discover the protocol
                 </motion.button>
              </div>
           </motion.div>
        </main>

        <footer className="absolute bottom-16 w-full flex justify-between px-16 opacity-20">
           <span className="text-[10px] font-light tracking-widest text-white uppercase">V. 1.0</span>
           <span className="text-[10px] font-light tracking-widest text-white uppercase">MMXXVI</span>
        </footer>
      </div>
      
    </div>
  );
};

export default MinimalDarkMockup;
