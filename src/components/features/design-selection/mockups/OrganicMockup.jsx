import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Wind, Sun, Sprout, Droplets, Flower2, Bird, Cloud } from 'lucide-react';

const OrganicMockup = ({ theme }) => {
  return (
    <div className="h-full relative overflow-hidden bg-[#F2F2EB] text-[#2D3A3A] font-serif selection:bg-[#8BA888] selection:text-white">
      {/* 1. Fluid Background Blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/4 -left-1/4 w-[800px] h-[800px] bg-[#D8E2DC] rounded-full blur-[100px] opacity-40"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, -45, 0],
            x: [0, -30, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-[#EAE4E9] rounded-full blur-[80px] opacity-50"
        />
      </div>

      {/* 2. Soft Grain Texture Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.4] mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />

      {/* 3. Delicate Layout */}
      <div className="relative z-10 h-full flex flex-col p-12 lg:p-20">
        <header className="flex justify-between items-center mb-24">
           <div className="flex items-center gap-3">
              <div className="w-10 h-10 border border-[#2D3A3A]/20 rounded-full flex items-center justify-center italic font-bold">Z</div>
              <span className="text-sm tracking-[0.3em] uppercase font-light">Zorvia Botanical</span>
           </div>
           <div className="hidden md:flex gap-12 text-xs uppercase tracking-widest font-light">
              {['Garden', 'Cycles', 'Flora', 'Essence'].map(item => (
                <a key={item} href="#" className="hover:text-[#8BA888] transition-colors relative group">
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#8BA888] group-hover:w-full transition-all duration-300" />
                </a>
              ))}
           </div>
        </header>

        <main className="flex-grow grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
           <div className="space-y-12">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-4 text-[#8BA888]"
              >
                 <Leaf size={24} />
                 <span className="text-xs uppercase tracking-[0.4em] font-medium">Sustainable Logic Protocol</span>
              </motion.div>

              <h2 className="text-7xl lg:text-8xl font-medium leading-[0.95] tracking-tight italic">
                A digital garden grown from <span className="text-[#8BA888]">pure intention.</span>
              </h2>

              <p className="text-xl lg:text-2xl font-light leading-relaxed max-w-lg opacity-80">
                Reshaping technology to inhale data and exhale meaningful human experiences. Soft, fluid, and inherently connected.
              </p>

              <div className="flex flex-wrap gap-8 items-center">
                 <motion.button 
                   whileHover={{ scale: 1.02, y: -2 }}
                   className="px-12 py-5 bg-[#2D3A3A] text-[#F2F2EB] rounded-full text-sm uppercase tracking-widest font-medium shadow-xl hover:bg-[#8BA888] transition-all"
                 >
                    Plant a Seed
                 </motion.button>
                 <button className="flex items-center gap-3 text-sm uppercase tracking-widest font-bold group">
                    View the Canopy
                    <Wind size={20} className="group-hover:translate-x-2 transition-transform" />
                 </button>
              </div>
           </div>

           {/* Organic Cards Area */}
           <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                 {[
                   { icon: Sprout, title: 'Growth', color: '#D8E2DC' },
                   { icon: Droplets, title: 'Fluidity', color: '#EAE4E9' },
                   { icon: Flower2, title: 'Beauty', color: '#FAD2E1' },
                   { icon: Bird, title: 'Freedom', color: '#E2ECE9' }
                 ].map((card, i) => (
                   <motion.div
                     key={i}
                     initial={{ opacity: 0, scale: 0.9 }}
                     animate={{ opacity: 1, scale: 1 }}
                     transition={{ delay: i * 0.1 }}
                     className="aspect-square bg-white/40 backdrop-blur-md border border-white/40 p-8 flex flex-col items-center justify-center text-center gap-4 group hover:bg-white/60 transition-all rounded-[4rem]"
                   >
                      <div className="w-16 h-16 rounded-full flex items-center justify-center mb-2" style={{ backgroundColor: card.color }}>
                         <card.icon className="text-[#2D3A3A]/60 group-hover:scale-110 transition-transform" size={28} />
                      </div>
                      <h5 className="text-lg font-medium italic">{card.title}</h5>
                      <span className="text-[10px] uppercase tracking-widest opacity-40">Module {i + 1}</span>
                   </motion.div>
                 ))}
              </div>
              
              {/* Decorative Floating Elements */}
              <div className="absolute -top-10 -right-10 animate-bounce duration-[4s]">
                 <Cloud className="text-[#8BA888]/20" size={64} />
              </div>
           </div>
        </main>

        <footer className="mt-24 pt-8 border-t border-[#2D3A3A]/10 flex justify-between items-center opacity-60">
           <div className="flex gap-8 text-[10px] uppercase tracking-widest font-bold">
              <span>Status: Thriving</span>
              <span>PH Balance: Perfect</span>
           </div>
           <div className="flex items-center gap-2">
              <Sun size={14} />
              <span className="text-[10px] uppercase font-bold tracking-widest">Optimized for Daylight</span>
           </div>
        </footer>
      </div>
    </div>
  );
};

export default OrganicMockup;
