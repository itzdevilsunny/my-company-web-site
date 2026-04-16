import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Globe } from 'lucide-react';

const BoldTypographyMockup = ({ theme }) => {
  return (
    <div className="h-full relative overflow-hidden bg-black text-white font-sans selection:bg-white selection:text-black">
      
      {/* Immersive Typography Background */}
      <div className="absolute inset-0 flex flex-col justify-between overflow-hidden opacity-10 pointer-events-none select-none mix-blend-overlay">
         <h1 className="text-[5rem] sm:text-[10rem] md:text-[20rem] font-black uppercase leading-[0.7] whitespace-nowrap -ml-10 md:-ml-20">TYPE/FIRST</h1>
         <h1 className="text-[5rem] sm:text-[10rem] md:text-[20rem] font-black uppercase leading-[0.7] whitespace-nowrap ml-5 md:ml-10">CONTENT</h1>
         <h1 className="text-[5rem] sm:text-[10rem] md:text-[20rem] font-black uppercase leading-[0.7] whitespace-nowrap -ml-20 md:-ml-40">DRIVEN.</h1>
      </div>

      <div className="relative z-10 h-full flex flex-col justify-between p-6 md:p-16">
        
        <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 uppercase">
           <span className="font-black text-xl md:text-2xl italic tracking-tighter">ZORVIA.TXT</span>
           <nav className="flex gap-6 md:gap-12 font-black text-[10px] md:text-sm tracking-widest overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0">
              <span className="hover:italic cursor-pointer whitespace-nowrap">Manifesto</span>
              <span className="hover:italic cursor-pointer whitespace-nowrap">Typefaces</span>
              <span className="hover:italic cursor-pointer whitespace-nowrap">Archive</span>
           </nav>
        </header>

        <main className="flex-grow flex flex-col justify-center">
           <motion.div
             initial={{ opacity: 0, y: 50 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, ease: "easeOut" }}
           >
               <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-[9rem] font-black leading-[0.8] tracking-tighter uppercase italic pr-4 md:pr-8">
                  <span className="block border-t-[4px] md:border-t-8 border-white pt-2 w-fit">Form</span>
                  <span className="block text-transparent bg-clip-text" style={{ WebkitTextStroke: '1px white' }}>Follows</span>
                  <span className="block border-b-[4px] md:border-b-8 border-white pb-4 w-fit">Meaning.</span>
               </h2>
           </motion.div>

            <div className="mt-8 md:mt-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
               <p className="max-w-md text-sm md:text-xl font-bold uppercase tracking-tight leading-snug">
                  When the message is vital, strip away the containers. Let the typography do the heavy lifting.
               </p>
               
               <button className="flex items-center gap-4 group">
                  <span className="text-lg md:text-2xl font-black uppercase tracking-widest group-hover:italic transition-all">Read More</span>
                  <div className="w-10 h-10 md:w-16 md:h-16 rounded-full border-2 md:border-4 border-white flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                     <ArrowRight size={20} className="md:w-8 md:h-8" strokeWidth={3} />
                  </div>
               </button>
            </div>
        </main>

        <footer className="flex justify-between uppercase font-black text-[10px] tracking-widest pb-4 border-b-2 border-white/20">
           <div className="flex items-center gap-2">
              <Globe size={14} /> <span>Global Grid Sync</span>
           </div>
           <span>Vol. IV // MMXXVI</span>
        </footer>
      </div>
    </div>
  );
};

export default BoldTypographyMockup;
