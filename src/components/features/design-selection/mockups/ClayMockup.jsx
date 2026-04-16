import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Bell, Heart, Smile, Sparkles, MessageCircle, Share, Send } from 'lucide-react';

const ClayMockup = ({ theme }) => {
  const primary = theme.styles.primary || '#F472B6';
  
  return (
    <div className="min-h-screen relative overflow-hidden bg-[#FDF2F8] font-sans selection:bg-[#F472B6] selection:text-white">
      {/* 1. Playful Background Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          animate={{ y: [0, -40, 0], rotate: [0, 15, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 left-20 w-32 h-32 bg-[#FBCFE8] rounded-full blur-2xl opacity-60"
        />
        <motion.div 
          animate={{ x: [0, 50, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute bottom-40 right-40 w-64 h-64 bg-[#DBEAFE] rounded-full blur-3xl opacity-60"
        />
      </div>

      {/* 2. Main Interface Container */}
      <div className="relative z-10 h-full p-12 lg:p-20 flex flex-col items-center justify-center text-center">
        
        {/* Floating Emote Object */}
        <motion.div
          animate={{ 
            y: [0, -15, 0],
            rotate: [-5, 5, -5]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="w-32 h-32 bg-white rounded-[2.5rem] mb-12 flex items-center justify-center text-5xl
                     shadow-[15px_15px_30px_rgba(0,0,0,0.05),-10px_-10px_20px_#ffffff,inset_5px_5px_10px_#ffffff,inset_-5px_-5px_10px_rgba(0,0,0,0.02)]"
        >
          <Smile className="text-pink-400" size={56} />
        </motion.div>

        <div className="max-w-2xl space-y-8">
          <div className="flex justify-center gap-3">
             <div className="px-5 py-2 bg-white rounded-full text-xs font-black uppercase tracking-widest text-[#F472B6] 
                             shadow-[inset_2px_2px_4px_#ffffff,inset_-2px_-2px_4px_rgba(0,0,0,0.02),4px_4px_8px_rgba(0,0,0,0.05)]">
                Soft Protocol 4.0
             </div>
          </div>

          <h2 className="text-7xl lg:text-8xl font-black tracking-tight text-[#1E293B] leading-[0.9]">
            Interfaces you can <br />
            <span className="text-[#F472B6]">actually feel.</span>
          </h2>

          <p className="text-xl lg:text-2xl font-bold text-[#64748B] max-w-lg mx-auto">
            Tactile, bouncy, and delightfully squishy. Digital objects that behave like physical matter.
          </p>

          <div className="flex flex-wrap justify-center gap-6 pt-4">
             <motion.button 
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
               transition={{ type: "spring", stiffness: 400, damping: 10 }}
               className="h-16 px-12 bg-[#F472B6] text-white font-black rounded-3xl shadow-[0_10px_20px_rgba(244,114,182,0.3),inset_5px_5px_10px_rgba(255,255,255,0.3),inset_-5px_-5px_10px_rgba(0,0,0,0.1)]"
             >
                Start Bouncing
             </motion.button>

             <motion.button 
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
               className="h-16 px-12 bg-white text-[#1E293B] font-black rounded-3xl shadow-[10px_10px_20px_rgba(0,0,0,0.05),-5px_-5px_15px_#ffffff,inset_2px_2px_5px_#ffffff,inset_-2px_-2px_5px_rgba(0,0,0,0.02)]"
             >
                Learn More
             </motion.button>
          </div>
        </div>

        {/* Floating UI Elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
           <motion.div 
             animate={{ x: [-20, 20, -20], y: [0, -30, 0] }}
             transition={{ duration: 7, repeat: Infinity }}
             className="absolute top-[15%] left-[10%] w-24 h-24 bg-white rounded-3xl flex items-center justify-center
                        shadow-[10px_10px_20px_rgba(0,0,0,0.03),inset_3px_3px_6px_#ffffff,inset_-3px_-3px_6px_rgba(0,0,0,0.01)]"
           >
              <Heart className="text-pink-400" fill="currentColor" size={32} />
           </motion.div>

           <motion.div 
             animate={{ x: [20, -20, 20], y: [0, 40, 0] }}
             transition={{ duration: 9, repeat: Infinity }}
             className="absolute bottom-[20%] right-[15%] w-48 h-16 bg-white rounded-full flex items-center px-6 gap-4
                        shadow-[10px_10px_20px_rgba(0,0,0,0.03),inset_3px_3px_6px_#ffffff,inset_-3px_-3px_6px_rgba(0,0,0,0.01)]"
           >
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                 <Bell size={16} className="text-blue-500" />
              </div>
              <div className="h-2 w-24 bg-blue-50 rounded-full" />
           </motion.div>
        </div>
      </div>

      {/* Bubble Control Bar */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-4 p-4 bg-white/40 backdrop-blur-xl rounded-[2.5rem] border border-white/40
                      shadow-[0_20px_40px_rgba(0,0,0,0.05)]">
         {[MessageCircle, Share, Send, Sparkles].map((Icon, i) => (
           <motion.button
             key={i}
             whileHover={{ scale: 1.1, y: -5 }}
             className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#64748B]
                        shadow-[5px_5px_10px_rgba(0,0,0,0.02),-5px_-5px_10px_#ffffff,inset_2px_2px_4px_#ffffff,inset_-2px_-2px_4px_rgba(0,0,0,0.01)]"
           >
              <Icon size={24} />
           </motion.button>
         ))}
      </div>
    </div>
  );
};

export default ClayMockup;

