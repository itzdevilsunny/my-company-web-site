import React from 'react';
import { motion } from 'framer-motion';
import { Hexagon, Activity, Wallet, ArrowDownUp, ShieldAlert, BarChart2, Repeat } from 'lucide-react';

const Web3Mockup = ({ theme }) => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-[#030712] text-white font-mono selection:bg-[#F59E0B] selection:text-black">
      
      {/* Floating Neon Grid Background */}
      <div className="absolute inset-0 pointer-events-none opacity-20" style={{ backgroundImage: 'radial-gradient(circle at center, #F59E0B 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      {/* Glowing Orbs */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
        className="absolute -top-[20%] -right-[10%] w-[80%] h-[80%] bg-[#F59E0B]/10 rounded-full blur-[100px] pointer-events-none" 
      />

      <div className="relative z-10 h-full p-6 lg:p-12 flex flex-col">
        
        <header className="flex justify-between items-center bg-white/5 backdrop-blur-xl border border-white/10 p-4 rounded-2xl mb-8">
           <div className="flex items-center gap-4">
              <Hexagon size={28} className="text-[#F59E0B]" />
              <span className="font-bold tracking-widest text-lg">ZORV.FI</span>
           </div>
           <div className="hidden lg:flex gap-6 text-sm text-slate-400">
              <span className="text-[#F59E0B] border-b border-[#F59E0B] pb-1">Swap</span>
              <span className="hover:text-white cursor-pointer">Pools</span>
              <span className="hover:text-white cursor-pointer">Stake</span>
           </div>
           <button className="flex items-center gap-2 px-4 py-2 bg-[#F59E0B]/20 border border-[#F59E0B] text-[#F59E0B] rounded-xl hover:bg-[#F59E0B] hover:text-black transition-colors font-bold text-sm">
              <Wallet size={16} /> 0x48f...2A9c
           </button>
        </header>

        <main className="grid grid-cols-12 gap-8 flex-grow">
           
           {/* Left Chart / Data Info */}
           <div className="col-span-12 lg:col-span-7 flex flex-col justify-center">
              <h2 className="text-4xl lg:text-6xl font-bold leading-tight mb-6 tracking-tight">
                 Decentralized <br />
                 <span className="text-[#F59E0B]">Liquidity Protocol.</span>
              </h2>
              <div className="flex items-center gap-6 mb-8 text-sm opacity-80">
                 <div className="flex items-center gap-2"><Activity size={16} className="text-green-500" /> TVL: $2.4B</div>
                 <div className="flex items-center gap-2"><BarChart2 size={16} className="text-[#F59E0B]" /> Vol 24h: $420M</div>
              </div>
              
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md relative overflow-hidden h-64 flex items-end">
                 {/* Fake Chart Lines */}
                 <svg className="absolute inset-0 w-full h-full opacity-50 preserve-3d" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <polyline points="0,100 20,80 40,95 60,40 80,60 100,20" fill="none" stroke="#F59E0B" strokeWidth="2" />
                    <polyline points="0,100 20,80 40,95 60,40 80,60 100,20 100,100 0,100" fill="rgba(245, 158, 11, 0.1)" stroke="none" />
                 </svg>
                 <div className="absolute top-4 left-4 text-xs font-bold text-[#F59E0B]">ZRV-ETH Pair Performance</div>
              </div>
           </div>

           {/* Right Swap Interface */}
           <div className="col-span-12 lg:col-span-5 flex flex-col justify-center">
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="bg-[#0f172a]/60 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-6 shadow-2xl relative"
              >
                 <div className="flex justify-between items-center mb-6">
                    <h3 className="font-bold text-lg">Swap</h3>
                    <ShieldAlert size={18} className="text-slate-500 hover:text-white cursor-pointer" />
                 </div>

                 <div className="space-y-2 mb-6 relative">
                    <div className="bg-black/40 border border-white/5 rounded-2xl p-4">
                       <div className="text-xs text-slate-500 mb-2">You pay</div>
                       <div className="flex justify-between items-center">
                          <input type="text" value="1.5" readOnly className="bg-transparent text-3xl font-bold outline-none w-1/2" />
                          <div className="bg-white/10 px-3 py-1.5 rounded-xl font-bold flex items-center gap-2">
                             <div className="w-5 h-5 rounded-full bg-blue-500" /> ETH
                          </div>
                       </div>
                    </div>
                    
                    <button className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-[#1e293b] border-4 border-[#0f172a] rounded-xl flex items-center justify-center text-slate-300 hover:text-[#F59E0B] transition-colors z-10">
                       <ArrowDownUp size={16} />
                    </button>

                    <div className="bg-black/40 border border-white/5 rounded-2xl p-4">
                       <div className="text-xs text-slate-500 mb-2">You receive</div>
                       <div className="flex justify-between items-center">
                          <input type="text" value="3,420.69" readOnly className="bg-transparent text-3xl font-bold outline-none w-1/2 text-slate-400" />
                          <div className="bg-[#F59E0B]/20 text-[#F59E0B] px-3 py-1.5 rounded-xl font-bold flex items-center gap-2 border border-[#F59E0B]/20">
                             <div className="w-5 h-5 rounded-full bg-[#F59E0B]" /> ZRV
                          </div>
                       </div>
                    </div>
                 </div>

                 <button className="w-full py-4 bg-[#F59E0B] text-black font-black text-lg rounded-xl hover:bg-[#d97706] transition-colors flex justify-center items-center gap-2">
                    Connect Wallet <Wallet size={20} />
                 </button>
              </motion.div>
           </div>
        </main>
      </div>
    </div>
  );
};

export default Web3Mockup;

