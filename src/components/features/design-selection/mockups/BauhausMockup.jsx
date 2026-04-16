import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Shapes, Layers, Hash, Command, Circle, Square, Triangle } from 'lucide-react';

const BauhausMockup = ({ theme }) => {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans relative overflow-hidden text-black selection:bg-black selection:text-white">
      {/* 1. Geometric Background Architecture */}
      <div className="absolute inset-0 pointer-events-none">
         <div className="absolute top-0 right-0 w-[40%] h-full bg-[#E6192E] border-l-8 border-black opacity-10" />
         <motion.div 
           animate={{ scale: [1, 1.1, 1], x: [0, 20, 0] }}
           transition={{ duration: 10, repeat: Infinity }}
           className="absolute -top-10 -left-10 w-64 h-64 bg-[#FFE100] rounded-full border-4 border-black mix-blend-multiply opacity-40" 
         />
         <motion.div 
           animate={{ rotate: 360 }}
           transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
           className="absolute bottom-20 left-40 w-48 h-48 border-[12px] border-[#0055A4] mix-blend-multiply opacity-30" 
         />
      </div>

      {/* 2. Strict Grid Frame */}
      <div className="relative z-10 h-full flex divide-x-8 divide-black border-l-8 border-r-8 border-black">
        
        {/* Navigation Sidebar */}
        <aside className="w-24 flex flex-col divide-y-8 divide-black bg-white">
           {[Circle, Square, Triangle, Hash].map((Icon, i) => (
             <div key={i} className="flex-grow flex items-center justify-center group hover:bg-black transition-colors cursor-pointer">
                <Icon size={24} className="group-hover:text-white transition-colors" />
             </div>
           ))}
        </aside>

        {/* Main Composition */}
        <section className="flex-grow flex flex-col divide-y-8 divide-black bg-white">
           {/* Top Section */}
           <div className="flex-grow grid grid-cols-12 divide-x-8 divide-black">
              <div className="col-span-8 p-16 flex flex-col justify-center gap-8 relative overflow-hidden bg-white/50 backdrop-blur-sm">
                 <div className="flex items-center gap-4 border-b-4 border-black pb-4 w-fit">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em]">Structural Core 1926/2026</span>
                 </div>

                 <h2 className="text-8xl font-black uppercase tracking-tighter leading-[0.8] mb-4">
                    FORM <br /> 
                    FOLLOWS <br />
                    FUNCTION.
                 </h2>

                 <p className="max-w-md text-lg font-bold uppercase leading-tight tracking-tight opacity-100 border-l-8 border-[#E6192E] pl-6 py-2">
                    A rejection of decorative excess. We build digital architectures that prioritize structural integrity and mathematical clarity above all.
                 </p>
                 
                 <div className="flex gap-4 mt-8">
                    <motion.button 
                      whileHover={{ scale: 1.02, backgroundColor: '#0055A4', color: '#fff' }}
                      className="px-12 py-5 bg-black text-white font-black uppercase text-sm tracking-widest transition-all"
                    >
                       Initialize Build
                    </motion.button>
                 </div>
              </div>

              <div className="col-span-4 bg-[#FFE100]/20 flex flex-col divide-y-8 divide-black">
                 <div className="flex-grow flex items-center justify-center p-12 hover:bg-[#FFE100] transition-colors group">
                    <div className="w-24 h-24 bg-[#E6192E] border-4 border-black group-hover:rotate-45 transition-transform" />
                 </div>
                 <div className="flex-grow flex items-center justify-center p-12 hover:bg-[#0055A4] transition-colors group">
                    <div className="w-24 h-24 bg-white border-4 border-black rounded-full group-hover:scale-75 transition-transform" />
                 </div>
              </div>
           </div>

           {/* Bottom Info Bar */}
           <div className="h-48 grid grid-cols-1 md:grid-cols-4 divide-x-8 divide-black">
              {[
                { label: 'ELEMENT', val: 'CIRCLE', color: '#E6192E' },
                { label: 'BALANCE', val: 'ASYMMETRIC', color: '#0055A4' },
                { label: 'RATIO', val: 'GOLDEN', color: '#FFE100' },
                { label: 'STATUS', val: 'STABLE', color: '#000000' }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center justify-center p-6 gap-2 group hover:bg-slate-50 transition-colors">
                   <div className="w-4 h-4" style={{ backgroundColor: item.color }} />
                   <span className="text-[8px] font-black uppercase opacity-40">{item.label}</span>
                   <span className="text-sm font-black uppercase tracking-widest">{item.val}</span>
                </div>
              ))}
           </div>
        </section>

        {/* Constructivist Right Border */}
        <aside className="w-48 bg-[#0055A4]/10 hidden lg:flex flex-col divide-y-8 divide-black text-center">
           {[...Array(6)].map((_, i) => (
             <div key={i} className="flex-grow flex items-center justify-center font-black text-3xl opacity-10 hover:opacity-100 transition-opacity">
                0{i+1}
             </div>
           ))}
        </aside>
      </div>

      {/* 3. Global Perspective Grid (Subtle) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] pattern-grid-lg" />
    </div>
  );
};

export default BauhausMockup;


