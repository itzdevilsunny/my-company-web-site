import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Activity, BarChart3, Globe, Zap, Users, ShieldCheck, ChevronRight, Bell, Search } from 'lucide-react';

const ModernMockup = ({ theme }) => {
  const primary = theme.styles.primary || '#3b82f6';
  
  return (
    <div className="h-full relative overflow-hidden bg-slate-50 font-sans selection:bg-primary/20">
      {/* 1. Subtle Background Gradients */}
      <div className="absolute inset-0 pointer-events-none">
         <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-primary/5 rounded-full blur-[120px]" />
         <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-indigo-500/5 rounded-full blur-[120px]" />
      </div>

      {/* 2. SaaS Header */}
      <nav className="relative z-10 px-6 md:px-10 py-3 md:py-5 bg-white/80 backdrop-blur-md border-b border-slate-200 flex justify-between items-center">
         <div className="flex items-center gap-10">
            <div className="flex items-center gap-2">
               <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white shadow-lg">
                  <Zap size={18} fill="currentColor" />
               </div>
               <span className="font-black text-xl tracking-tight text-slate-900 uppercase">ZORVIA.X</span>
            </div>
            <div className="hidden lg:flex gap-8 text-sm font-semibold text-slate-500">
               {['Dashboard', 'Systems', 'Inquiries', 'Security'].map(item => (
                 <a key={item} href="#" className="hover:text-primary transition-colors">{item}</a>
               ))}
            </div>
         </div>
          <div className="flex items-center gap-4 md:gap-6">
            <Search className="text-slate-400 hidden sm:block" size={20} />
            <Bell className="text-slate-400" size={20} />
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-slate-100 border-2 border-white shadow-sm overflow-hidden flex items-center justify-center text-slate-400">
               <Users size={18} />
            </div>
          </div>
      </nav>

      {/* 3. Dashboard Interface */}
       <main className="relative z-10 p-6 md:p-10 lg:p-16 grid grid-cols-12 gap-6 md:gap-10">
         {/* Hero / Hero Metrics */}
         <div className="col-span-12 lg:col-span-8 space-y-10">
            <div className="bg-white p-12 rounded-[2rem] border border-slate-200 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 md:p-8">
                   <Sparkles size={80} className="text-primary/5 group-hover:text-primary/10 transition-colors" />
                </div>
               
               <div className="relative z-10">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 rounded-full text-primary text-xs font-bold uppercase tracking-widest mb-8"
                  >
                     <Activity size={12} className="animate-pulse" />
                     Live System Monitoring Active
                  </motion.div>

                   <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-tight mb-6">
                     Exponential growth <br />
                     delivered with <span className="text-primary drop-shadow-sm">precision.</span>
                   </h2>

                  <p className="text-xl text-slate-500 font-medium max-w-xl mb-12 leading-relaxed">
                    Scale your enterprise architecture with high-performance digital solutions, automated workflows, and global security.
                  </p>

                   <div className="flex flex-col sm:flex-row gap-4">
                      <button className="px-6 md:px-10 py-3 md:py-5 bg-primary text-white font-black rounded-2xl shadow-lg shadow-primary/20 hover:scale-105 transition-transform flex items-center justify-center gap-3 group">
                         Deploy Architecture
                         <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                      <button className="px-6 md:px-10 py-3 md:py-5 bg-white border border-slate-200 text-slate-900 font-black rounded-2xl hover:bg-slate-50 transition-colors">
                         View Reports
                      </button>
                   </div>
               </div>
            </div>

            {/* Bottom Metrics Grid */}
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10">
               <div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm flex flex-col justify-between">
                  <div className="flex justify-between items-start mb-6">
                     <div className="p-3 bg-indigo-50 rounded-2xl text-indigo-500">
                        <BarChart3 size={24} />
                     </div>
                     <span className="text-xs font-bold text-green-500">+12.5%</span>
                  </div>
                  <div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Compute Efficiency</div>
                      <div className="text-3xl md:text-4xl font-black text-slate-900 tabular-nums">99.98%</div>
                  </div>
               </div>

               <div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm flex flex-col justify-between">
                  <div className="flex justify-between items-start mb-6">
                     <div className="p-3 bg-emerald-50 rounded-2xl text-emerald-500">
                        <ShieldCheck size={24} />
                     </div>
                     <span className="text-xs font-bold text-slate-400">Secured</span>
                  </div>
                  <div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Active Protocols</div>
                      <div className="text-3xl md:text-4xl font-black text-slate-900 tabular-nums">482</div>
                  </div>
               </div>
            </div>
         </div>

         {/* Sidebar Widget Area */}
         <div className="col-span-12 lg:col-span-4 space-y-10">
            <div className="bg-white p-10 rounded-[2rem] border border-slate-200 shadow-sm">
               <h3 className="text-xl font-black text-slate-900 mb-8 border-b border-slate-100 pb-4">Global Network</h3>
               <div className="space-y-6">
                  {[
                    { country: 'North America', code: 'USA/CAN', status: 'Optimal' },
                    { country: 'European Union', code: 'FRA/DEU', status: 'Optimal' },
                    { country: 'Asia Pacific', code: 'IND/SGP', status: 'Maintenance' },
                  ].map((region, i) => (
                    <div key={i} className="flex justify-between items-center group cursor-pointer hover:bg-slate-50 p-2 rounded-xl transition-all">
                       <div className="flex items-center gap-4">
                          <Globe size={18} className="text-slate-400" />
                          <div>
                             <div className="text-sm font-bold text-slate-900">{region.country}</div>
                             <div className="text-[10px] uppercase font-black tracking-widest text-slate-400">{region.code}</div>
                          </div>
                       </div>
                       <div className={`px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-[0.2em] ${region.status === 'Optimal' ? 'bg-green-50 text-green-500' : 'bg-amber-50 text-amber-500'}`}>
                          {region.status}
                       </div>
                    </div>
                  ))}
               </div>
            </div>

            <div className="bg-primary p-10 rounded-[2rem] text-white shadow-xl shadow-primary/20 relative overflow-hidden group">
               <div className="absolute -bottom-10 -right-10 opacity-20 rotate-12 group-hover:rotate-0 transition-transform">
                  <Zap size={200} fill="currentColor" />
               </div>
               <div className="relative z-10">
                  <h4 className="text-2xl font-black tracking-tight mb-4">Enterprise Plus</h4>
                  <p className="text-sm opacity-80 mb-8 font-medium">Unlock full strategic architecture and global scaling protocols.</p>
                  <button className="w-full py-4 bg-white text-primary font-black rounded-xl text-xs uppercase tracking-widest shadow-lg">
                     Upgrade Plan
                  </button>
               </div>
            </div>
         </div>
      </main>
    </div>
  );
};

export default ModernMockup;
