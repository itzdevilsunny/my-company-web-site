import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const ModernMockup = ({ theme }) => {
  const { styles: s } = theme;
  const isLight = theme.mode === 'Light';
  
  return (
    <div className="h-full flex flex-col p-16" style={{ backgroundColor: s.bg, color: isLight ? '#000000' : '#ffffff' }}>
       <div className="space-y-4 mb-20">
          <div 
            className="w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-lg"
            style={{ backgroundColor: s.primary, boxShadow: `0 10px 20px -5px ${s.primary}40` }}
          >
             <Sparkles size={20} />
          </div>
          <h4 className="text-6xl font-black tracking-tighter leading-tight">Precision <br /> engineering.</h4>
       </div>
       <div className="mt-auto grid grid-cols-2 gap-12">
          <div className="space-y-4">
             <p className="opacity-50 text-base leading-relaxed">Scaling your vision with high-performance digital architectures.</p>
             <button 
                className={`px-8 py-3 text-white font-black uppercase text-xs tracking-widest ${s.radius || 'rounded-xl'}`}
                style={{ backgroundColor: s.primary }}
             >
                Request Demo
             </button>
          </div>
          <div className="flex items-end justify-end">
             <div className="text-8xl font-black opacity-5 tabular-nums">01</div>
          </div>
       </div>
    </div>
  );
};

export default ModernMockup;
