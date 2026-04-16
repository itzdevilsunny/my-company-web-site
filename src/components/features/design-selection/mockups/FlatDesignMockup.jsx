import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, CheckCircle, Search, Mail, ArrowRight } from 'lucide-react';

const FlatDesignMockup = ({ theme }) => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-[#ECF0F1] text-[#2C3E50] font-sans selection:bg-[#3498DB] selection:text-white">
      
      {/* 2D Geometric Vectors */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
         <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#3498DB] rounded-full opacity-10" />
         <div className="absolute top-40 -left-20 w-40 h-40 bg-[#E74C3C] rounded-full opacity-10" />
         <div className="absolute bottom-20 right-40 w-60 h-60 bg-[#F1C40F] opacity-10 rotate-45" />
      </div>

      <div className="relative z-10 h-full flex flex-col p-8 lg:p-16">
        
        <header className="flex justify-between items-center bg-[#3498DB] text-white p-6 rounded-lg mb-12 shadow-[0_8px_0_#2980B9]">
           <div className="flex items-center gap-3">
              <Cloud size={28} fill="currentColor" />
              <span className="text-2xl font-bold tracking-wide">FLATCLOUD</span>
           </div>
           <nav className="hidden lg:flex gap-8 font-semibold">
              <span className="border-b-4 border-white pb-1">Features</span>
              <span className="opacity-80 hover:opacity-100 transition-opacity">Pricing</span>
              <span className="opacity-80 hover:opacity-100 transition-opacity">About</span>
           </nav>
           <button className="px-6 py-2 bg-white text-[#3498DB] font-bold rounded shadow-[0_4px_0_#BDC3C7] active:transform active:translate-y-1 active:shadow-[0_0_0_#BDC3C7] transition-all">
              Login
           </button>
        </header>

        <main className="grid grid-cols-12 gap-12 flex-grow items-center">
           <div className="col-span-12 lg:col-span-6 space-y-8">
              <h2 className="text-6xl font-black leading-tight text-[#2C3E50]">
                 Keep it simple. <br />
                 <span className="text-[#3498DB]">Communicate clearly.</span>
              </h2>
              <p className="text-xl text-[#7F8C8D] font-medium leading-relaxed">
                 Eliminate unnecessary details. Flat design ensures your message reaches the user instantly, without visual noise or complex rendering.
              </p>
              
              <div className="space-y-4 font-bold text-[#2C3E50]">
                 {['Extremely Fast Loading', 'Highly Accessible 2D Focus', 'Crisp Edge Geometry'].map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                       <CheckCircle size={24} className="text-[#2ECC71] fill-[#2ECC71]/20" />
                       <span>{feature}</span>
                    </div>
                 ))}
              </div>

              <div className="pt-4 flex gap-4">
                 <button className="px-8 py-4 bg-[#E74C3C] text-white font-bold text-lg rounded shadow-[0_6px_0_#C0392B] hover:bg-[#c0392b] active:transform active:translate-y-[6px] active:shadow-none transition-all flex items-center gap-2">
                    Get Free Trial <ArrowRight size={20} />
                 </button>
              </div>
           </div>

           <div className="col-span-12 lg:col-span-6 flex flex-col gap-6">
              <div className="bg-white p-8 rounded shadow-[0_8px_0_#BDC3C7] space-y-6">
                 <h3 className="text-2xl font-bold flex items-center gap-3">
                    <Search className="text-[#3498DB]" /> Query Database
                 </h3>
                 <input type="text" placeholder="Enter keyword..." className="w-full bg-[#ECF0F1] p-4 rounded font-bold text-[#2C3E50] border-2 border-[#BDC3C7] outline-none focus:border-[#3498DB] transition-colors" />
                 <button className="w-full py-4 bg-[#2ECC71] text-white font-bold rounded shadow-[0_6px_0_#27AE60] hover:bg-[#27AE60] active:transform active:translate-y-[6px] active:shadow-none transition-all">
                    Search Now
                 </button>
              </div>

              <div className="bg-[#2C3E50] text-white p-6 rounded shadow-[0_8px_0_#2b333a] flex items-center justify-between">
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#E67E22] rounded flex items-center justify-center">
                       <Mail size={24} />
                    </div>
                    <div>
                       <div className="font-bold text-lg">Inbox Status</div>
                       <div className="text-[#BDC3C7] text-sm font-semibold">2 New Messages</div>
                    </div>
                 </div>
                 <button className="px-4 py-2 bg-[#34495E] rounded font-bold hover:bg-[#3d566e] transition-colors">Open</button>
              </div>
           </div>
        </main>
      </div>
    </div>
  );
};

export default FlatDesignMockup;

