import React from 'react';
import { motion } from 'framer-motion';

const ClayMockup = ({ theme }) => {
  const { styles: s } = theme;
  const primaryColor = s.primary || '#F472B6';
  
  return (
    <div className="h-full flex flex-col items-center justify-center p-12 text-center" style={{ backgroundColor: s.bg || '#FDF2F8' }}>
       <div className="w-40 h-40 rounded-[2.5rem] bg-white mb-12 shadow-[inset_4px_4px_8px_rgba(255,255,255,0.8),inset_-4px_-4px_8px_rgba(0,0,0,0.05),15px_15px_30px_rgba(0,0,0,0.05)] flex items-center justify-center text-5xl">👋</div>
       <h4 className="text-5xl font-black mb-6 tracking-tight" style={{ color: theme.mode === 'Dark' ? '#ffffff' : '#000000' }}>Soft & Friendly.</h4>
       <p className="max-w-xs opacity-60 mb-10 font-medium" style={{ color: theme.mode === 'Dark' ? '#ffffff' : '#000000' }}>Tactile interfaces that feel like objects in your hands.</p>
       <button 
        className="px-10 py-5 rounded-full text-white font-black shadow-[inset_4px_4px_8px_rgba(255,255,255,0.3),inset_-4px_-4px_8px_rgba(0,0,0,0.1),8px_8px_15px_rgba(0,0,0,0.1)] hover:scale-105 active:scale-95 transition-all"
        style={{ backgroundColor: primaryColor }}
       >
        Get Started
       </button>
    </div>
  );
};

export default ClayMockup;
