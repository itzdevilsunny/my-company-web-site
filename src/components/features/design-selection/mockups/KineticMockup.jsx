import React from 'react';
import { motion } from 'framer-motion';
import { Zap, ArrowRight, Activity, Cpu, Wind, FastForward, Repeat } from 'lucide-react';

const KineticMockup = ({ theme }) => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-[#09090B] text-[#FAFAFA] font-sans selection:bg-[#DFE104] selection:text-black">
      {/* 1. High-Velocity Background Marquees */}
      <div className="absolute inset-0 flex flex-col justify-between py-20 opacity-[0.03] pointer-events-none">
        {[1, 2, 3, 4, 5].map(i => (
          <motion.div 
            key={i}
            animate={{ x: i % 2 === 0 ? [-2000, 0] : [0, -2000] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="text-[25vh] font-black whitespace-nowrap uppercase italic tracking-tighter"
          >
            KINETIC PROTOCOL ACCELERATE MOTION ENERGY FAST FORWARD
          </motion.div>
        ))}
      </div>

      {/* 2. Main Interface */}
      <div className="relative z-10 h-full p-12 lg:p-24 flex flex-col justify-center">
        
        <header className="absolute top-12 left-12 flex items-center gap-6">
           <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#DFE104] flex items-center justify-center text-black skew-x-[-12deg]">
                 <Zap size={18} fill="currentColor" />
              </div>
              <span className="font-black italic text-xl tracking-tighter uppercase">KINETIC_V2</span>
           </div>
           <div className="h-[1px] w-24 bg-white/20" />
           <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest opacity-40">
              <Activity size={12} />
              <span>Flow State: ACTIVE</span>
           </div>
        </header>

        <div className="space-y-12 max-w-5xl">
           <motion.div
             initial={{ x: -200, skewX: 20, opacity: 0 }}
             animate={{ x: 0, skewX: -12, opacity: 1 }}
             transition={{ type: "spring", damping: 10 }}
             className="bg-[#DFE104] text-black p-4 inline-block shadow-[20px_20px_0px_rgba(223,225,4,0.1)]"
           >
              <h2 className="text-8xl lg:text-[10rem] font-black italic tracking-tighter leading-[0.85] uppercase">
                MOTION <br />
                IS THE <br />
                ARCHITECTURE.
              </h2>
           </motion.div>

           <div className="flex flex-col lg:flex-row items-start lg:items-center gap-12">
              <p className="max-w-md text-xl font-bold uppercase tracking-tight opacity-70 italic border-l-4 border-white/20 pl-8">
                Fluid digital systems designed for a world that never stops moving. High-velocity performance for modern scale.
              </p>

              <div className="flex gap-4">
                 <motion.button 
                   whileHover={{ skewX: -15, x: 10 }}
                   className="px-12 py-6 bg-[#DFE104] text-black font-black uppercase italic tracking-tighter shadow-[10px_10px_0px_rgba(255,255,255,0.1)] hover:shadow-none transition-all flex items-center gap-3"
                 >
                    Initialize System
                    <ArrowRight size={20} strokeWidth={3} />
                 </motion.button>
                 
                 <motion.button 
                   whileHover={{ skewX: -15 }}
                   className="px-12 py-6 border-2 border-white/40 text-white font-black uppercase italic tracking-tighter hover:bg-white/10 transition-all"
                 >
                    Specifications
                 </motion.button>
              </div>
           </div>
        </div>

        {/* 3. Kinetic Data Grid */}
        <div className="mt-24 grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl">
           {[
             { label: 'VELOCITY', val: '1,240 GB/S', icon: Wind },
             { label: 'LATENCY', val: '< 0.01 MS', icon: FastForward },
             { label: 'STABILITY', val: 'ELASTIC', icon: Repeat },
             { label: 'CORES', val: 'QUANTUM', icon: Cpu }
           ].map((stat, i) => (
             <motion.div 
               key={i}
               whileHover={{ y: -5, backgroundColor: 'rgba(255,255,255,0.05)' }}
               className="p-6 border border-white/10 flex flex-col gap-4 group cursor-pointer"
             >
                <stat.icon className="text-[#DFE104] opacity-50 group-hover:opacity-100 transition-opacity" size={24} />
                <div>
                   <div className="text-[10px] font-black uppercase tracking-widest opacity-40">{stat.label}</div>
                   <div className="text-xl font-black italic tracking-tighter">{stat.val}</div>
                </div>
             </motion.div>
           ))}
        </div>
      </div>

      {/* Decorative Blur */}
      <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-[#DFE104]/5 rounded-full blur-[150px]" />
    </div>
  );
};

export default KineticMockup;

