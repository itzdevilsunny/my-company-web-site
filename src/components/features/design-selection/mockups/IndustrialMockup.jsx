import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, HardDrive, Settings, Activity, Shield, AlertTriangle, ChevronRight, Gauge } from 'lucide-react';

const IndustrialMockup = ({ theme }) => {
  return (
    <div className="h-full relative overflow-hidden bg-[#1f2937] text-slate-300 font-mono selection:bg-[#F97316] selection:text-white">
      {/* 1. Structural Overlays (Steel/Rust) */}
      <div className="absolute inset-0 pointer-events-none">
         <div className="absolute top-0 left-0 w-full h-2 bg-[#F97316]" />
         <div className="absolute top-0 right-0 w-8 h-full bg-black/20 border-l border-white/5" />
         <div className="absolute inset-0 opacity-5 pattern-grid-lg" />
      </div>

      {/* 2. Hardware Dashboard Layout */}
      <div className="relative z-10 h-full p-10 lg:p-20 flex flex-col gap-10">
        
        <header className="flex justify-between items-start border-b border-white/10 pb-10">
           <div className="space-y-4">
              <div className="flex items-center gap-3">
                 <div className="w-10 h-10 bg-[#F97316] flex items-center justify-center text-white">
                    <Settings size={20} className="animate-spin-slow" />
                 </div>
                 <div className="flex flex-col">
                    <span className="text-xs font-black uppercase tracking-widest text-[#F97316]">Core Platform</span>
                    <span className="text-2xl font-black tracking-tighter text-white">INDUSTRIAL_CORE</span>
                 </div>
              </div>
              <div className="flex gap-4 text-[10px] font-black uppercase tracking-widest opacity-40">
                 <span>Lat: -34.829</span>
                 <span>Lon: +138.402</span>
                 <span className="text-green-500">Online</span>
              </div>
           </div>

           <div className="hidden lg:flex gap-4">
              {[0, 1, 2].map(i => (
                <div key={i} className="w-12 h-12 border border-white/10 flex items-center justify-center group hover:bg-white/5 cursor-pointer">
                   <Activity size={18} className="opacity-30 group-hover:opacity-100" />
                </div>
              ))}
           </div>
        </header>

        <main className="grid grid-cols-12 gap-10 flex-grow">
           {/* Left Control Panel */}
           <div className="col-span-12 lg:col-span-8 flex flex-col justify-center">
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                className="space-y-8"
              >
                 <div className="inline-flex items-center gap-4 px-4 py-2 border-2 border-[#F97316] text-[#F97316] text-xs font-black uppercase tracking-widest">
                    <AlertTriangle size={14} />
                    Maximum Structural Integrity Required
                 </div>

                 <h2 className="text-7xl lg:text-9xl font-black text-white leading-[0.85] tracking-tighter uppercase grayscale group-hover:grayscale-0 transition-all">
                    BUILT <br />
                    FOR THE <br />
                    <span className="text-[#F97316]">COLOSSAL.</span>
                  </h2>

                  <p className="max-w-xl text-lg font-bold uppercase leading-relaxed opacity-60">
                    High-performance digital architectures designed for rugged environments and massive scale. No decorative excess—only structural perfection.
                  </p>

                  <div className="flex gap-4">
                     <button className="px-10 py-5 bg-[#F97316] text-white font-black uppercase text-xs tracking-widest shadow-[6px_6px_0px_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all flex items-center gap-3">
                        Initialize Build
                        <ChevronRight size={16} strokeWidth={3} />
                     </button>
                     <button className="px-10 py-5 border-2 border-white/20 text-white font-black uppercase text-xs tracking-widest hover:bg-white/5 transition-all">
                        Blueprints
                     </button>
                  </div>
              </motion.div>
           </div>

           {/* Right Technical Stack */}
           <div className="col-span-12 lg:col-span-4 flex flex-col justify-center gap-6">
              {[
                { label: 'CPU_CORE', val: 'QUANTUM_04', icon: Cpu },
                { label: 'STORAGE', val: '800 PB', icon: HardDrive },
                { label: 'SEC_LEVEL', val: 'CLASS_S', icon: Shield },
                { label: 'PRESSURE', val: 'OPTIMAL', icon: Gauge }
              ].map((item, i) => (
                <div key={i} className="p-6 border border-white/5 bg-black/20 flex items-center justify-between group hover:border-[#F97316]/30 transition-all">
                   <div className="flex items-center gap-4">
                      <div className="w-10 h-10 border border-white/10 flex items-center justify-center opacity-40 group-hover:opacity-100 group-hover:text-[#F97316]">
                         <item.icon size={20} />
                      </div>
                      <div>
                         <div className="text-[10px] font-black uppercase tracking-widest opacity-30">{item.label}</div>
                         <div className="text-lg font-black text-white px-1 tracking-tight">{item.val}</div>
                      </div>
                   </div>
                   <div className="w-2 h-10 bg-white/5 relative">
                      <motion.div 
                        initial={{ height: 0 }}
                        animate={{ height: ['20%', '80%', '40%', '90%'] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="absolute bottom-0 left-0 w-full bg-[#F97316]" 
                      />
                   </div>
                </div>
              ))}
           </div>
        </main>

        <footer className="flex justify-between items-end border-t border-white/10 pt-8 opacity-20">
           <div className="text-[10px] font-black uppercase tracking-widest">Property of Zorvia Ind.</div>
           <div className="text-[10px] font-black uppercase tracking-widest flex gap-8">
              <span>Status: NOMINAL</span>
              <span>Node: 0x48f2</span>
           </div>
        </footer>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .animate-spin-slow { animation: spin 8s linear infinite; }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}} />
    </div>
  );
};

export default IndustrialMockup;
