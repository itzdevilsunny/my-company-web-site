import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Box, Lock, BarChart, Settings, Sliders } from 'lucide-react';

const ModernDarkMockup = ({ theme }) => {
  return (
    <div className="h-full relative overflow-hidden bg-[#0B0F19] text-white font-sans selection:bg-[#3B82F6] selection:text-white">
      
      {/* 1. Ambient Glow Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
         <motion.div 
           animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
           transition={{ duration: 8, repeat: Infinity }}
           className="absolute -top-40 -right-40 w-96 h-96 bg-[#3B82F6] rounded-full blur-[120px]" 
         />
         <motion.div 
           animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.4, 0.2] }}
           transition={{ duration: 10, repeat: Infinity, delay: 1 }}
           className="absolute -bottom-40 -left-20 w-80 h-80 bg-indigo-600 rounded-full blur-[100px]" 
         />
      </div>

      {/* 2. Glassmorphic UI */}
      <div className="relative z-10 h-full p-8 lg:p-16 flex flex-col">
        
        <header className="flex justify-between items-center bg-[#111827]/60 backdrop-blur-md border border-white/10 rounded-2xl p-4 mb-12 shadow-xl">
           <div className="flex items-center gap-3 pl-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#3B82F6] to-indigo-600 flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                 <Zap size={16} fill="white" />
              </div>
              <span className="font-bold tracking-wide">NEXUS</span>
           </div>
           <div className="hidden lg:flex gap-6 text-sm font-medium text-slate-400">
              <span className="text-white">Overview</span>
              <span>Analytics</span>
              <span>Integrations</span>
           </div>
           <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-white/5">
              <Settings size={18} className="text-slate-300" />
           </div>
        </header>

        <main className="grid grid-cols-12 gap-8 flex-grow">
           <div className="col-span-12 lg:col-span-7 flex flex-col justify-center space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#3B82F6]/20 border border-[#3B82F6]/30 rounded-full text-[#3B82F6] text-xs font-semibold w-fit shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                 <Lock size={12} /> Secure Connection Active
              </div>
              <h2 className="text-6xl font-black leading-[1.1] tracking-tight">
                 Supercharge your <br />
                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-cyan-400">digital infrastructure.</span>
              </h2>
              <p className="text-lg text-slate-400 max-w-lg leading-relaxed">
                 Deploy scalable architectures with intelligent routing, real-time analytics, and enterprise-grade security protocols.
              </p>
              <div className="flex gap-4 pt-4">
                 <button className="px-8 py-4 bg-[#3B82F6] hover:bg-blue-500 transition-colors rounded-xl font-bold shadow-[0_0_20px_rgba(59,130,246,0.4)]">
                    Get Started
                 </button>
                 <button className="px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 transition-colors rounded-xl font-bold">
                    View Demo
                 </button>
              </div>
           </div>

           <div className="col-span-12 lg:col-span-5 flex flex-col gap-6 justify-center">
              {[
                { icon: BarChart, title: 'Real-time Telemetry', desc: 'Monitor throughput across all active nodes.', color: 'from-[#3B82F6] to-blue-600' },
                { icon: Shield, title: 'Zero-Trust Security', desc: 'Identity-aware proxies protecting endpoints.', color: 'from-cyan-400 to-[#3B82F6]' },
                { icon: Box, title: 'Edge Caching', desc: 'Sub-10ms response times globally.', color: 'from-indigo-400 to-indigo-600' }
              ].map((feature, i) => (
                <motion.div 
                  key={i}
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-[#111827]/80 backdrop-blur-sm border border-white/10 p-6 rounded-2xl flex items-start gap-4 hover:border-white/20 hover:bg-[#111827] transition-colors cursor-pointer group"
                >
                   <div className={`p-3 rounded-xl bg-gradient-to-br ${feature.color} shadow-lg opacity-80 group-hover:opacity-100 transition-opacity`}>
                      <feature.icon size={20} />
                   </div>
                   <div>
                      <h4 className="font-bold text-white mb-1">{feature.title}</h4>
                      <p className="text-sm text-slate-400 leading-snug">{feature.desc}</p>
                   </div>
                </motion.div>
              ))}
           </div>
        </main>
      </div>
    </div>
  );
};

export default ModernDarkMockup;
