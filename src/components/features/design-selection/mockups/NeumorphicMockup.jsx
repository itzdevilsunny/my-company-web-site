import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Power, Settings, Volume2, Shield, Activity, Lock, Cpu, Menu } from 'lucide-react';

const NeumorphicMockup = ({ theme }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [isPressed, setIsPressed] = useState(false);

  // Precision Neumorphic Shadows (Light Source: Top-Left)
  const outerShadow = "12px 12px 24px #bebebe, -12px -12px 24px #ffffff";
  const innerShadow = "inset 8px 8px 16px #bebebe, inset -8px -8px 16px #ffffff";
  const smallOuter = "6px 6px 12px #bebebe, -6px -6px 12px #ffffff";
  const smallInner = "inset 4px 4px 8px #bebebe, inset -4px -4px 8px #ffffff";

  return (
    <div className="h-full relative overflow-hidden bg-[#e0e0e0] text-[#444444] font-sans selection:bg-slate-300">
      
      {/* 1. Header with Soft Controls */}
      <nav className="p-12 flex justify-between items-center relative z-10">
         <div className="flex items-center gap-6">
            <div 
              className="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300"
              style={{ boxShadow: smallOuter }}
            >
               <Menu size={24} />
            </div>
            <div className="flex flex-col">
               <span className="text-xs uppercase tracking-[0.3em] font-black opacity-40">System Node</span>
               <span className="text-xl font-black tracking-tighter opacity-80">NEUMO_CENTRAL</span>
            </div>
         </div>

         <div className="flex gap-6">
            <button 
              onClick={() => setIsPressed(!isPressed)}
              className="w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 text-red-500"
              style={{ boxShadow: isPressed ? smallInner : smallOuter }}
            >
               <Power size={24} className={isPressed ? "opacity-30" : "opacity-100"} />
            </button>
         </div>
      </nav>

      {/* 2. Main Terminal / Dashboard */}
      <div className="px-12 lg:px-20 grid grid-cols-12 gap-12 items-start relative z-10">
         
         {/* Center Information Area */}
         <div className="col-span-12 lg:col-span-8">
            <div 
              className="p-16 rounded-[4rem] mb-12 flex flex-col items-center text-center transition-all duration-500"
              style={{ boxShadow: outerShadow }}
            >
               <div 
                 className="w-24 h-24 rounded-full mb-8 flex items-center justify-center text-[#444444]"
                 style={{ boxShadow: smallInner }}
               >
                  <Activity size={32} />
               </div>
               
               <h2 className="text-7xl font-black tracking-tighter mb-6">
                 Pure structural <br /> 
                 <span className="opacity-40">logic in focus.</span>
               </h2>
               
               <p className="max-w-md text-xl font-medium opacity-60 leading-relaxed mb-12 italic">
                 A sophisticated interaction model where interface elements are extruded from the background material itself.
               </p>

               <div className="flex gap-8">
                  <button 
                    className="px-12 py-5 rounded-full font-black uppercase text-xs tracking-[0.2em] transition-all"
                    style={{ boxShadow: smallOuter }}
                  >
                     Primary Access
                  </button>
                  <button 
                    className="w-16 h-16 rounded-full flex items-center justify-center transition-all"
                    style={{ boxShadow: smallOuter }}
                  >
                     <Settings size={20} />
                  </button>
               </div>
            </div>

            {/* Inset Stats Panel */}
            <div 
              className="p-10 rounded-[3rem] grid grid-cols-3 gap-8"
              style={{ boxShadow: innerShadow }}
            >
               {[
                 { icon: Lock, val: "0.2s" },
                 { icon: Volume2, val: "MAX" },
                 { icon: Shield, val: "ON" }
               ].map((stat, i) => (
                 <div key={i} className="flex flex-col items-center gap-2 opacity-50">
                    <stat.icon size={20} />
                    <span className="text-[10px] font-black uppercase tracking-widest">{stat.val}</span>
                 </div>
               ))}
            </div>
         </div>

         {/* Sidebar Controls */}
         <div className="col-span-12 lg:col-span-4 space-y-12">
            <div className="text-center">
               <span className="text-[10px] font-black uppercase tracking-[0.5em] opacity-40">Control Matrix</span>
            </div>

            <div className="grid grid-cols-1 gap-8">
               {[0, 1, 2].map(i => (
                 <button
                   key={i}
                   onClick={() => setActiveTab(i)}
                   className="p-10 rounded-[3rem] transition-all duration-300 flex items-center gap-8 group"
                   style={{ boxShadow: activeTab === i ? innerShadow : outerShadow }}
                 >
                    <div 
                      className="w-12 h-12 rounded-2xl flex items-center justify-center transition-all"
                      style={{ boxShadow: activeTab === i ? smallOuter : smallInner }}
                    >
                       {i === 0 ? <Cpu size={20} /> : i === 1 ? <Activity size={20} /> : <Settings size={20} />}
                    </div>
                    <div className="text-left">
                       <div className="text-[10px] font-black uppercase tracking-widest opacity-40">Profile_0{i+1}</div>
                       <div className="text-lg font-black tracking-tight">{['Neural', 'Kinetic', 'Logic'][i]} Link</div>
                    </div>
                 </button>
               ))}
            </div>
         </div>
      </div>

      {/* Decorative Shadows */}
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-white/20 rounded-full blur-3xl opacity-50" />
    </div>
  );
};

export default NeumorphicMockup;
