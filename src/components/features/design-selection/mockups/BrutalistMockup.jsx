import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Star, Zap, Layout, Shapes, Layers, Hash, Command } from 'lucide-react';

const BrutalistMockup = ({ theme }) => {
  return (
    <div className="h-full bg-white flex flex-col font-heading selection:bg-black selection:text-[#FFD600]">
      {/* 1. Massive Architectural Header */}
      <div className="border-b-4 border-black p-6 md:p-12 bg-[#FFD600] flex justify-between items-center relative overflow-hidden group">
         <div className="absolute top-0 left-0 w-full h-full pattern-max-dots opacity-10 group-hover:opacity-20 transition-opacity" />
         
         <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
               <div className="w-10 h-10 bg-black flex items-center justify-center -rotate-12 transition-transform group-hover:rotate-12">
                  <Star size={20} className="text-[#FFD600] animate-pulse" />
               </div>
               <span className="text-sm font-black uppercase tracking-widest bg-white px-2 py-0.5 border-2 border-black shadow-[4px_4px_0px_#000]">Issue #048</span>
            </div>
            <h4 className="text-5xl sm:text-6xl md:text-8xl font-black uppercase leading-[0.85] italic tracking-tighter text-black">
               RAW<br />POWER.
            </h4>
         </div>

         <div className="relative z-10 hidden lg:block">
            <div className="w-48 h-48 border-4 border-black bg-white -rotate-6 flex flex-col items-center justify-center p-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:rotate-0 transition-transform">
               <Zap size={48} className="mb-4" />
               <div className="text-[10px] font-black uppercase text-center leading-tight">100% Structural<br />Integrity</div>
            </div>
         </div>
      </div>

      {/* 2. Three-Column Content Grid */}
      <div className="flex-grow grid grid-cols-1 md:grid-cols-3 divide-x-4 divide-y-4 md:divide-y-0 divide-black">
         {[
            { title: 'BRUTAL LOGIC', icon: Shapes, desc: 'Functional purity over decorative excess.' },
            { title: 'HARD EDGES', icon: Layers, desc: 'Defined boundaries for precise communication.' },
            { title: 'STARK CONTRAST', icon: Hash, desc: 'Maximum visibility across all canvases.' }
         ].map((f, i) => (
            <div key={i} className={`p-6 lg:p-10 flex flex-col justify-between group transition-colors hover:bg-slate-50 relative overflow-hidden`}>
               <div className="absolute bottom-0 right-0 p-4 font-black opacity-5 group-hover:opacity-10 transition-opacity flex flex-col items-end">
                  <Command size={48} />
                  <span className="text-4xl italic tracking-tighter">0{i+1}</span>
               </div>

               <div className="relative z-10">
                  <div className="w-12 h-12 border-2 border-black flex items-center justify-center mb-6 bg-white group-hover:bg-[#FFD600] group-hover:rotate-12 transition-all">
                     <f.icon size={20} />
                  </div>
                  <h5 className="text-2xl md:text-3xl lg:text-4xl font-black uppercase leading-none tracking-tighter mb-4">{f.title}</h5>
                  <p className="text-lg font-bold uppercase leading-tight max-w-[200px]">{f.desc}</p>
               </div>
               
               <motion.button 
                 whileHover={{ x: 5 }}
                 className="flex items-center gap-2 font-black uppercase tracking-widest text-[10px] md:text-sm mt-8 md:mt-12 bg-black text-white px-4 py-2 w-fit border-2 border-black group-hover:shadow-[4px_4px_0px_#FFD600] transition-all"
               >
                  Read Protocol
                  <ArrowUpRight size={14} md:size={16} />
               </motion.button>
            </div>
         ))}
      </div>

      {/* 3. Footer Bar */}
      <div className="border-t-4 border-black p-6 md:p-8 flex flex-col md:flex-row justify-between items-center gap-6 bg-white">
         <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
               <div className="w-3 h-3 bg-[#FFD600] border-2 border-black" />
               <span className="text-[10px] font-black uppercase tracking-widest">Structural Build 4.8</span>
            </div>
            <div className="flex items-center gap-3">
               <div className="w-3 h-3 bg-black" />
               <span className="text-[10px] font-black uppercase tracking-widest">Protocol Active</span>
            </div>
         </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <button className="h-12 md:h-14 px-4 md:px-8 bg-[#FFD600] border-4 border-black text-black font-black uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all flex items-center justify-center gap-3 text-xs md:text-base">
               Initialize System
               <Layout size={18} />
            </button>
            <button className="h-12 md:h-14 px-4 md:px-8 bg-black border-4 border-black text-white font-black uppercase shadow-[4px_4px_0px_0px_rgba(255,214,0,1)] md:shadow-[8px_8px_0px_0px_rgba(255,214,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all flex items-center justify-center text-xs md:text-base">
               Deep Scan
            </button>
         </div>
      </div>
    </div>
  );
};

export default BrutalistMockup;
