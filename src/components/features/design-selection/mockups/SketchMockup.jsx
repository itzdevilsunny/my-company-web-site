import React from 'react';
import { motion } from 'framer-motion';
import { Edit3, Ruler, MousePointer2, ChevronRight, Share2, CornerRightDown, Star, Highlighter } from 'lucide-react';

const SketchMockup = ({ theme }) => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-[#E7EEF6] text-[#2C4872] font-mono selection:bg-[#B1C9E8] selection:text-[#2C4872]">
      {/* 1. Blueprint / Graph Paper Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#B1C9E8_1px,transparent_1px),linear-gradient(to_bottom,#B1C9E8_1px,transparent_1px)] bg-[size:30px_30px] opacity-30" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#B1C9E8_2px,transparent_2px),linear-gradient(to_bottom,#B1C9E8_2px,transparent_2px)] bg-[size:150px_150px] opacity-40" />

      {/* 2. Main Content Container */}
      <div className="relative z-10 h-full p-12 lg:p-20 flex flex-col">
        {/* Hand-drawn Header */}
        <header className="flex justify-between items-center mb-16">
          <div className="flex items-center gap-4">
            <div className="p-2 border-2 border-[#2C4872] rounded-[15px_5px_12px_8px] rotate-3 bg-white">
              <Ruler size={24} />
            </div>
            <div>
              <h1 className="text-2xl font-black uppercase tracking-tighter leading-none italic">ZORVIA_BLUEPRINT</h1>
              <span className="text-[10px] uppercase font-bold opacity-50">Rev. 2026.4 // Engineering Draft</span>
            </div>
          </div>
          <div className="flex gap-10 items-center">
             <div className="flex flex-col items-end">
                <span className="text-[8px] font-bold uppercase opacity-30 italic">Project Coordinator</span>
                <span className="text-sm font-black italic underline decoration-wavy decoration-[#FFD600]">K. S. Verma</span>
             </div>
             <div className="w-12 h-12 border-2 border-[#2C4872] flex items-center justify-center rounded-[8px_15px_5px_12px]">
                <Share2 size={20} />
             </div>
          </div>
        </header>

        {/* Hero Section with Annotations */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center flex-grow">
          <div className="lg:col-span-12 relative">
             <div className="absolute -top-12 -left-4 rotate-[-15deg] bg-[#FFD600] px-4 py-1 text-black text-[10px] font-black uppercase shadow-sm">
                In Draft Phase
             </div>

             <motion.h2 
               initial={{ opacity: 0, x: -20 }}
               animate={{ opacity: 1, x: 0 }}
               className="text-7xl lg:text-9xl font-black leading-[0.85] tracking-tight uppercase italic mb-8"
             >
                Sketch it. <br />
                <span className="text-white drop-shadow-[2px_2px_0px_#2C4872] relative">
                  Verify it.
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="absolute -bottom-2 left-0 h-4 bg-[#FFD600]/40 -z-10"
                  />
                </span>
             </motion.h2>

             <div className="relative max-w-2xl mb-12">
                <p className="text-2xl font-bold leading-snug">
                  The infrastructure of the future isn't designed on polished screens. It starts as a rough idea, a scribble on a napkin, a blueprint for global scaling.
                </p>
                <div className="absolute top-0 -right-24 hidden xl:block">
                   <div className="flex flex-col items-center gap-2">
                      <CornerRightDown className="rotate-90 opacity-40" />
                      <span className="text-[10px] font-black italic opacity-40 uppercase whitespace-nowrap">Check structural logic here</span>
                   </div>
                </div>
             </div>

             <div className="flex gap-8 items-center">
                <motion.button 
                  whileHover={{ scale: 1.05, rotate: 1 }}
                  className="px-10 py-5 bg-white border-2 border-[#2C4872] rounded-[12px_5px_15px_8px] font-black uppercase text-sm shadow-[8px_8px_0px_#2C4872] active:shadow-none active:translate-x-1 active:translate-y-1 transition-all flex items-center gap-4 group"
                >
                   Finalize Framework
                   <Edit3 size={18} className="group-hover:rotate-12 transition-transform" />
                </motion.button>
                <button className="flex items-center gap-4 text-sm font-black uppercase underline decoration-2 decoration-offset-4 decoration-[#2C4872]">
                   View Grid Analysis
                   <ChevronRight size={18} />
                </button>
             </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-12 right-12 flex flex-col gap-6 items-end">
           <div className="p-6 border-2 border-[#2C4872] bg-white rounded-[20px_40px_15px_30px] rotate-3 relative max-w-xs shadow-sm">
              <div className="absolute -top-4 -right-2 text-[#2C4872]">
                 <Star size={32} fill="currentColor" strokeWidth={0} />
              </div>
              <Highlighter className="text-[#FFD600] mb-2" size={24} />
              <p className="text-[11px] font-black leading-tight bg-[#FFD600]/20 p-2 italic">
                Note: Ensure all vertex points are aligned to the global Zorvia coordinate system before pushing to production.
              </p>
           </div>
           
           <div className="flex gap-4 opacity-40">
              <p className="text-[10px] font-black uppercase">Scale 1:100</p>
              <p className="text-[10px] font-black uppercase">Paper: ISO-2026</p>
           </div>
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.03] scale-150">
           <MousePointer2 size={400} />
        </div>
      </div>
    </div>
  );
};

export default SketchMockup;

