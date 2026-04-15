import React from 'react';
import { motion } from 'framer-motion';

const CyberpunkMockup = ({ theme }) => {
  const { styles: s } = theme;
  
  return (
    <div className="h-full relative overflow-hidden p-12 flex flex-col bg-[#0D0221] text-white">
       <div className="absolute top-0 right-0 p-4 font-mono text-[8px] opacity-30">CORP_SEC // 8823-X</div>
       <div className="mt-auto relative z-10">
          <h4 className="text-6xl font-black italic tracking-tighter mb-4 skew-x-[-12deg]" style={{ color: s.primary, textShadow: `0 0 20px ${s.primary}` }}>SYSTEM_OVERRIDE</h4>
          <div className="h-2 w-full bg-white/5 relative mb-8">
             <div className="absolute top-0 left-0 h-full w-2/3 shadow-[0_0_10px_#FF00FF]" style={{ backgroundColor: '#FF00FF' }} />
          </div>
          <div className="flex gap-4">
             <button className="px-8 py-3 bg-[#FF00FF] text-black font-black uppercase italic tracking-tighter skew-x-[-12deg]">Intrude</button>
             <button className="px-8 py-3 border border-[#FF00FF] text-[#FF00FF] font-black uppercase italic tracking-tighter skew-x-[-12deg]">Scan</button>
          </div>
       </div>
       {/* Scanlines overlay effect */}
       <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
    </div>
  );
};

export default CyberpunkMockup;
