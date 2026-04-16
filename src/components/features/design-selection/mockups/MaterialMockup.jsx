import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Plus, Search, Menu, MoreVertical, Heart, Share2, MessageCircle } from 'lucide-react';

const MaterialMockup = ({ theme }) => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-[#F3F4F6] text-slate-800 font-sans selection:bg-[#6200EE] selection:text-white">
      {/* 1. App Bar Layer */}
      <motion.header 
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        className="absolute top-0 left-0 w-full h-16 bg-[#6200EE] text-white flex justify-between items-center px-4 z-40 shadow-md"
      >
         <div className="flex items-center gap-4">
            <motion.button whileTap={{ scale: 0.9 }} className="p-2 rounded-full hover:bg-white/10 transition-colors">
               <Menu size={24} />
            </motion.button>
            <span className="text-xl font-medium tracking-wide">Material UI</span>
         </div>
         <div className="flex items-center gap-2">
            <motion.button whileTap={{ scale: 0.9 }} className="p-2 rounded-full hover:bg-white/10 transition-colors">
               <Search size={24} />
            </motion.button>
            <motion.button whileTap={{ scale: 0.9 }} className="p-2 rounded-full hover:bg-white/10 transition-colors">
               <MoreVertical size={24} />
            </motion.button>
         </div>
      </motion.header>

      {/* 2. Main Scrollable Content */}
      <div className="relative z-10 h-full pt-20 pb-24 px-4 overflow-y-auto custom-scrollbar md:px-12 lg:px-24">
         <div className="max-w-4xl mx-auto space-y-6">
            
            {/* Elevation Cards */}
            {[1, 2, 3].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group"
              >
                 <div className="absolute inset-0 bg-[#6200EE]/0 group-hover:bg-[#6200EE]/[0.02] transition-colors pointer-events-none" />
                 
                 {/* Card Header */}
                 <div className="p-4 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#6200EE]/10 flex items-center justify-center text-[#6200EE] font-medium">
                       {String.fromCharCode(65 + i)}
                    </div>
                    <div>
                       <div className="text-sm font-medium text-slate-900">Elevation Layer {i+1}</div>
                       <div className="text-xs text-slate-500">Z-Index Interaction Model</div>
                    </div>
                 </div>

                 {/* Card Media Area */}
                 <div className="w-full h-40 bg-slate-100 flex items-center justify-center p-6 relative overflow-hidden">
                    <div className="absolute inset-0 pattern-grid-lg opacity-5" />
                    <Layers size={48} className="text-slate-300 relative z-10" />
                 </div>

                 {/* Card Content */}
                 <div className="p-4">
                    <p className="text-sm text-slate-600 leading-relaxed">
                       A visual language that synthesizes the classic principles of good design with the innovation and possibility of technology and science. Notice the subtle drop shadows creating deliberate hierarchy.
                    </p>
                 </div>

                 {/* Card Actions */}
                 <div className="p-2 flex justify-between items-center opacity-70">
                    <div className="flex gap-1">
                       <motion.button whileTap={{ scale: 0.9 }} className="p-2 rounded-full hover:bg-slate-100 transition-colors text-slate-600">
                          <Heart size={20} />
                       </motion.button>
                       <motion.button whileTap={{ scale: 0.9 }} className="p-2 rounded-full hover:bg-slate-100 transition-colors text-slate-600">
                          <Share2 size={20} />
                       </motion.button>
                    </div>
                    <motion.button 
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 rounded text-[#6200EE] font-medium text-sm hover:bg-[#6200EE]/10 transition-colors uppercase tracking-wider"
                    >
                       Explore
                    </motion.button>
                 </div>
              </motion.div>
            ))}
         </div>
      </div>

      {/* 3. Floating Action Button (FAB) */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="absolute bottom-8 right-8 w-14 h-14 bg-[#03DAC6] rounded-full shadow-[0_4px_10px_rgba(3,218,198,0.4)] flex items-center justify-center text-slate-900 z-50 group overflow-hidden"
      >
         <Plus size={24} className="relative z-10" />
         <div className="absolute inset-0 bg-white/0 group-hover:bg-white/20 transition-colors z-0" />
      </motion.button>

      <style dangerouslySetInnerHTML={{ __html: `
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
      `}} />
    </div>
  );
};

export default MaterialMockup;

