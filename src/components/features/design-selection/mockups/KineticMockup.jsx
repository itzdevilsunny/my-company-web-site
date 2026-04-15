import React from 'react';
import { motion } from 'framer-motion';

const KineticMockup = ({ theme }) => {
  const { styles: s } = theme;
  
  return (
    <div className="h-full flex flex-col justify-center bg-[#09090B] text-[#FAFAFA] overflow-hidden relative">
      {/* Background Marquee Effect */}
      <div className="absolute inset-0 flex flex-col justify-around opacity-5 pointer-events-none">
        {[1, 2, 3, 4].map(i => (
          <motion.div 
            key={i}
            animate={{ x: i % 2 === 0 ? [0, -1000] : [-1000, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="text-[20vh] font-black whitespace-nowrap uppercase italic"
          >
            KINETIC ENERGY KINETIC ENERGY KINETIC ENERGY
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 p-12 space-y-8">
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="border-l-8 border-[#DFE104] pl-8"
        >
          <h4 className="text-8xl font-black italic tracking-tighter leading-none uppercase">
            Motion <br/> is the <br/> <span className="text-[#DFE104]">Protocol.</span>
          </h4>
        </motion.div>

        <p className="max-w-md text-xl font-bold uppercase tracking-tight opacity-60">
          Fluid architecture for a world in constant flux. High-velocity design systems.
        </p>

        <div className="flex gap-4">
          <button className="px-10 py-5 bg-[#DFE104] text-black font-black uppercase italic tracking-tighter hover:scale-105 transition-transform">
            Initialize
          </button>
          <button className="px-10 py-5 border-2 border-white/20 text-white font-black uppercase italic tracking-tighter hover:bg-white/5 transition-colors">
            Blueprint
          </button>
        </div>
      </div>

      {/* Floating Meta Data */}
      <div className="absolute bottom-12 right-12 text-right font-mono text-xs space-y-1 opacity-40">
        <div>CORE_VELOCITY // 99.8%</div>
        <div>LATENCY // 12ms</div>
        <div>STATUS // ACCELERATING</div>
      </div>
    </div>
  );
};

export default KineticMockup;
