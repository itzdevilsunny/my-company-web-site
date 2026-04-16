import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, ShieldAlert, Cpu, Share2, Terminal, Target, Wifi, Activity } from 'lucide-react';

const CyberpunkMockup = ({ theme }) => {
  const [glitchText, setGlitchText] = useState('SYSTEM_OVERRIDE');
  const [hexData, setHexData] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const chars = 'ABCDEF0123456789_X';
      setGlitchText(prev => 
        prev.split('').map(c => Math.random() > 0.9 ? chars[Math.floor(chars.length * Math.random())] : c).join('')
      );
      if (Math.random() > 0.8) setGlitchText('SYSTEM_OVERRIDE');
    }, 150);

    const dataInterval = setInterval(() => {
      setHexData(prev => [
        Math.random().toString(16).slice(2, 10).toUpperCase(),
        ...prev.slice(0, 15)
      ]);
    }, 200);

    return () => {
      clearInterval(interval);
      clearInterval(dataInterval);
    };
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#0D0221] text-[#00FF9F] font-mono selection:bg-[#FF00FF] selection:text-white">
      {/* Background Data Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1A0B2E_1px,transparent_1px),linear-gradient(to_bottom,#1A0B2E_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
      
      {/* Glitch Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-10 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.1),rgba(0,255,0,0.05),rgba(0,0,255,0.1))] bg-[length:100%_4px,5px_100%] animate-pulse" />

      {/* Sidebars */}
      <div className="absolute left-0 top-0 bottom-0 w-32 border-r border-[#00FF9F]/20 bg-black/40 backdrop-blur-md p-4 flex flex-col gap-2 overflow-hidden">
        <div className="text-[8px] opacity-40 mb-4">DATA_STREAM.EXE</div>
        {hexData.map((h, i) => (
          <div key={i} className="text-[10px] opacity-30 hover:opacity-100 transition-opacity whitespace-nowrap">{h}</div>
        ))}
      </div>

      <div className="absolute right-0 top-0 bottom-0 w-48 border-l border-[#FF00FF]/20 bg-black/40 backdrop-blur-md p-6 flex flex-col gap-6">
        <div className="p-4 bg-[#FF00FF]/5 border border-[#FF00FF]/50 relative group">
           <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#FF00FF] flex items-center justify-center">
              <ShieldAlert size={10} className="text-black" />
           </div>
           <h5 className="text-[10px] font-black text-[#FF00FF] mb-2 uppercase tracking-widest">Security Level</h5>
           <div className="h-1 bg-white/10 w-full">
              <motion.div 
                className="h-full bg-[#FF00FF] shadow-[0_0_10px_#FF00FF]" 
                animate={{ width: ['20%', '90%', '40%', '75%'] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
           </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-3 text-[10px] opacity-60">
             <Wifi size={12} /> CONNECTED
          </div>
          <div className="flex items-center gap-3 text-[10px] opacity-60">
             <Target size={12} /> TRACE_ROUTE_DISABLED
          </div>
          <div className="flex items-center gap-3 text-[10px] text-[#FF00FF]">
             <Activity size={12} className="animate-pulse" /> UPLINK_STABLE
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="h-full ml-32 mr-48 p-12 flex flex-col justify-center relative z-10">
        <div className="mb-2 flex items-center gap-4">
           <div className="px-3 py-1 bg-[#00FF9F] text-black font-black text-[10px] skew-x-[-12deg]">CLASSIFIED</div>
           <div className="text-[10px] opacity-40 font-mono tracking-widest">NODE_77 / SECTOR_G</div>
        </div>
        
        <h2 className="text-8xl font-black italic tracking-tighter mb-4 skew-x-[-12deg] relative">
          <span className="relative z-10" style={{ textShadow: `0 0 20px #00FF9F` }}>{glitchText}</span>
          <span className="absolute top-1 left-1 z-0 text-[#FF00FF] opacity-50 blur-[1px] animate-pulse">{glitchText}</span>
        </h2>
        
        <p className="text-[#00FF9F]/80 text-xl max-w-xl leading-relaxed mb-12 border-l-4 border-[#FF00FF] pl-8">
          The future isn't defined by clean lines. It's built in the shadows between the neon and the void. Access the neural core.
        </p>

        <div className="flex gap-8">
           <motion.button 
             whileHover={{ scale: 1.05, x: 5 }}
             className="group relative px-10 py-4 bg-[#00FF9F] text-black font-black uppercase italic tracking-tighter skew-x-[-12deg] shadow-[5px_5px_0px_#FF00FF] hover:shadow-[0_0_30px_#00FF9F] transition-all"
           >
              Establish Link
              <div className="absolute top-0 left-0 w-full h-full border-2 border-white translate-x-1 translate-y-1 opacity-0 group-hover:opacity-100 transition-opacity" />
           </motion.button>
           
           <button className="px-10 py-4 border-2 border-[#FF00FF] text-[#FF00FF] font-black uppercase italic tracking-tighter skew-x-[-12deg] hover:bg-[#FF00FF]/10 transition-colors">
              Intrude System
           </button>
        </div>
      </div>

      {/* Decorative HUD Elements */}
      <div className="absolute bottom-6 left-40 right-56 flex justify-between items-end">
         <div className="flex gap-4">
            {[1,2,3,4].map(i => (
              <div key={i} className={`w-8 h-1 ${i === 3 ? 'bg-[#FF00FF]' : 'bg-white/10'}`} />
            ))}
         </div>
         <div className="flex flex-col items-end">
            <div className="text-[10px] opacity-40 font-mono">LATENCY // 14ms</div>
            <div className="text-[10px] opacity-40 font-mono">ENCRYPT // AES-512</div>
         </div>
      </div>
    </div>
  );
};

export default CyberpunkMockup;


