import React from 'react';
import { motion } from 'framer-motion';

const TerminalMockup = ({ theme }) => {
  const { styles: s } = theme;
  
  return (
    <div className="h-full flex flex-col font-mono p-8 text-sm md:text-base">
      <div className="flex-grow space-y-2 opacity-80">
        <div className="text-primary">&gt; system.initialize()</div>
        <div className="text-white/40">[OK] Kernal loaded 0.4.2</div>
        <div className="text-primary">&gt; zorvia.deploy({theme.id})</div>
        <div className="text-white/40">Fetching module components...</div>
        <div className="flex gap-2">
          <span className="text-primary">&gt;</span>
          <span className="animate-pulse bg-primary w-2 h-5"></span>
        </div>
      </div>
      <div className="border-t border-primary/20 pt-8 mt-8">
        <h4 className="text-3xl font-black mb-4 tracking-tighter uppercase italic">Recursive Architecture.</h4>
        <p className="opacity-60 mb-8 max-w-sm lowercase">Automated design systems for the next epoch of infrastructure.</p>
        <button className={`px-6 py-3 bg-primary text-black font-black uppercase tracking-widest ${s.radius || ''}`}>EXECUTE_PLAN</button>
      </div>
    </div>
  );
};

export default TerminalMockup;
