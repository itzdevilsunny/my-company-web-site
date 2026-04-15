import React from 'react';
import { motion } from 'framer-motion';
import { Circle, Crosshair, Plus, Minus, Move, LayoutGrid } from 'lucide-react';

const SwissMockup = ({ theme }) => {
  return (
    <div className="h-full relative overflow-hidden bg-white text-black font-sans selection:bg-[#E6192E] selection:text-white">
      {/* 1. Global Red Highlight Pattern */}
      <div className="absolute top-0 right-0 w-[40%] h-full bg-[#E6192E]/[0.03] border-l border-black/5" />

      {/* 2. Structured Layout */}
      <div className="relative z-10 h-full p-12 lg:p-24 flex flex-col">
        
        {/* Header Grid */}
        <header className="grid grid-cols-12 border-b border-black pb-8 mb-16">
           <div className="col-span-12 lg:col-span-6 flex flex-col gap-2">
              <span className="text-[10px] font-black uppercase tracking-[0.4em]">International Protocol Edition</span>
              <div className="flex items-center gap-4">
                 <div className="w-6 h-6 bg-[#E6192E] flex items-center justify-center text-white">
                    <Plus size={14} strokeWidth={4} />
                 </div>
                 <h1 className="text-3xl font-black uppercase tracking-tighter">SWISS_GRID.V10</h1>
              </div>
           </div>
           <div className="col-span-12 lg:col-span-6 flex justify-end items-end text-[9px] font-black uppercase tracking-widest gap-12 opacity-40">
              <div className="flex flex-col gap-1">
                 <span>Ref: 01.A2</span>
                 <span>Loc: Zurich/CH</span>
              </div>
              <div className="flex flex-col gap-1">
                 <span>Status: Optimal</span>
                 <span>Sync: 99.8%</span>
              </div>
           </div>
        </header>

        {/* Main Composition */}
        <main className="grid grid-cols-12 gap-12 flex-grow">
           {/* Section 01: The Statement */}
           <section className="col-span-12 lg:col-span-7 flex flex-col justify-center">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="space-y-10"
              >
                 <div className="flex items-center gap-4 border-l-4 border-black pl-8">
                    <span className="text-xs font-black uppercase tracking-[0.2em] opacity-40">Section 01 / Abstract</span>
                 </div>

                 <h2 className="text-8xl lg:text-[10rem] font-black leading-[0.8] tracking-[-0.06em] uppercase">
                    MODULAR <br />
                    PRECISION <br />
                    <span className="text-[#E6192E]">ABOVE ALL.</span>
                 </h2>

                 <p className="max-w-md text-xl font-bold leading-tight uppercase tracking-tight">
                    Objective clarity is not an option; it is the fundamental requirement for strategic communication in a complex digital environment.
                 </p>

                 <div className="flex gap-4">
                    <button className="px-12 py-5 bg-black text-white font-black uppercase text-xs tracking-widest hover:bg-[#E6192E] transition-all">
                       Initialize Build
                    </button>
                    <button className="px-12 py-5 border border-black text-black font-black uppercase text-xs tracking-widest hover:bg-black hover:text-white transition-all">
                       Specifications
                    </button>
                 </div>
              </motion.div>
           </section>

           {/* Section 02: Structural Data */}
           <section className="col-span-12 lg:col-span-5 flex flex-col justify-center border-l border-black/10 pl-12 gap-12">
              <div className="space-y-4">
                 <span className="text-[10px] font-black uppercase tracking-widest opacity-40 leading-none">Structural Integrity</span>
                 <div className="w-full h-2 bg-black/5 relative">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: '82%' }}
                      transition={{ duration: 1.5, ease: "circOut" }}
                      className="absolute top-0 left-0 h-full bg-[#E6192E]" 
                    />
                 </div>
                 <div className="flex justify-between font-black text-[10px]">
                    <span>82% EFFICIENCY</span>
                    <span className="opacity-40">TARGET: 100%</span>
                 </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                 {[
                   { label: 'ELEMENTS', icon: LayoutGrid, val: '048' },
                   { label: 'NODES', icon: Crosshair, val: '12K' },
                   { label: 'VECTORS', icon: Move, val: 'INF' },
                   { label: 'RATIO', icon: Circle, val: '1:1.6' }
                 ].map((mod, i) => (
                   <div key={i} className="p-6 border border-black flex flex-col justify-between group hover:bg-black hover:text-white transition-all cursor-pointer">
                      <mod.icon size={20} className="mb-8" />
                      <div>
                         <div className="text-[8px] font-black uppercase tracking-widest mb-1 opacity-40">{mod.label}</div>
                         <div className="text-2xl font-black uppercase tracking-tighter">{mod.val}</div>
                      </div>
                   </div>
                 ))}
              </div>

              <div className="bg-[#E6192E] p-8 text-white flex flex-col gap-4">
                 <div className="flex items-center gap-2">
                    <Minus size={16} strokeWidth={4} />
                    <span className="text-[10px] font-black uppercase tracking-widest">Protocol Sync</span>
                 </div>
                 <p className="text-sm font-black uppercase tracking-tight leading-tight">
                    Current system architecture is synchronized with Zurich mainframes. Absolute clarity achieved.
                 </p>
              </div>
           </section>
        </main>

        <footer className="mt-16 pt-8 border-t border-black flex justify-between items-end">
           <div className="flex gap-4 items-center">
              <div className="w-12 h-12 bg-black text-white flex items-center justify-center font-black text-xs">Z</div>
              <div className="text-[9px] font-black uppercase tracking-widest opacity-40">
                 Zorvia International <br /> Architectural Unit
              </div>
           </div>
           <div className="text-[10px] font-black uppercase tracking-[0.4em]">2026 // ALL RIGHTS RESERVED</div>
        </footer>
      </div>
    </div>
  );
};

export default SwissMockup;
