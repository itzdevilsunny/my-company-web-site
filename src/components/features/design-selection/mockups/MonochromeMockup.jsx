import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Plus, Maximize, ArrowUpRight, Copy } from 'lucide-react';

const MonochromeMockup = ({ theme }) => {
  return (
    <div className="h-full relative overflow-hidden bg-white text-black font-sans selection:bg-black selection:text-white">
      
      {/* 1. Fine Structure Lines */}
      <div className="absolute inset-0 pointer-events-none">
         <div className="absolute top-20 left-0 w-full h-[1px] bg-black" />
         <div className="absolute top-0 left-20 h-full w-[1px] bg-black" />
         <div className="absolute top-0 right-20 h-full w-[1px] bg-black" />
      </div>

      {/* 2. Layout */}
      <div className="relative z-10 h-full flex flex-col p-8 lg:p-20 pt-28 border-[8px] border-black m-8">
        
        <header className="flex justify-between items-end mb-16">
           <h1 className="text-4xl font-black uppercase tracking-tighter mix-blend-difference text-white bg-black px-4 py-2">
              MNCRM
           </h1>
           <div className="flex gap-4">
              <Plus size={24} className="text-black" />
              <Maximize size={24} className="text-black" />
           </div>
        </header>

        <main className="flex-grow flex flex-col justify-center">
           <motion.div
             initial={{ opacity: 0, x: -20 }}
             animate={{ opacity: 1, x: 0 }}
             className="max-w-2xl space-y-8"
           >
              <h2 className="text-5xl lg:text-[5.5rem] font-black leading-[0.85] tracking-tighter uppercase border-l-[12px] border-black pl-8 break-words">
                 Absolute <br />
                 Contrast.
              </h2>
              <p className="text-2xl font-medium tracking-tight border-b-2 border-black inline-block pb-1">
                 Clarity through subtraction.
              </p>
              
              <div className="flex gap-4 pt-8">
                 <button className="px-10 py-5 bg-black text-white font-black uppercase tracking-widest text-xs hover:bg-white hover:text-black border-2 border-black transition-colors flex items-center gap-2">
                    Execute <ArrowUpRight size={18} />
                 </button>
                 <button className="px-10 py-5 bg-white text-black font-black uppercase tracking-widest text-xs border-2 border-black hover:bg-black hover:text-white transition-colors flex items-center gap-2">
                    Documentation <Copy size={18} />
                 </button>
              </div>
           </motion.div>
        </main>

        <footer className="mt-12 flex justify-between items-center text-xs font-black uppercase tracking-widest border-t-[4px] border-black pt-4">
           <span>Sys. Architecture</span>
           <span>v4.0.99</span>
        </footer>
      </div>
      
    </div>
  );
};

export default MonochromeMockup;
