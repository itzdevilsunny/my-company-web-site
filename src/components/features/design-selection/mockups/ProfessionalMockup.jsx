import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Building, ChevronRight, BarChart3, Users, FileText } from 'lucide-react';

const ProfessionalMockup = ({ theme }) => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-[#F8FAFC] text-slate-800 font-sans selection:bg-[#1E40AF] selection:text-white border-t-8 border-[#1E40AF]">
      
      {/* Structural Corp Header */}
      <header className="bg-white border-b border-slate-200 px-8 py-4 flex justify-between items-center shadow-sm">
         <div className="flex items-center gap-3">
            <Building className="text-[#1E40AF]" size={24} />
            <span className="font-bold text-xl tracking-tight text-slate-900">ZorviaCorp</span>
         </div>
         <nav className="hidden lg:flex gap-8 text-sm font-medium text-slate-600">
            <span className="text-[#1E40AF] font-semibold border-b-2 border-[#1E40AF] pb-1">Solutions</span>
            <span className="hover:text-[#1E40AF]">Industries</span>
            <span className="hover:text-[#1E40AF]">Insights</span>
            <span className="hover:text-[#1E40AF]">About Us</span>
         </nav>
         <button className="px-5 py-2 bg-[#1E40AF] text-white rounded font-medium text-sm hover:bg-blue-800 transition-colors">
            Contact Sales
         </button>
      </header>

      <main className="p-8 lg:p-16 grid grid-cols-12 gap-12">
         {/* Value Proposition */}
         <div className="col-span-12 lg:col-span-6 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-[#1E40AF] rounded text-xs font-semibold">
               <Briefcase size={14} /> Enterprise Solutions
            </div>
            <h2 className="text-5xl font-bold text-slate-900 leading-tight">
               Delivering Trusted <br/>
               <span className="text-[#1E40AF]">Corporate Excellence.</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
               A balanced, highly professional architecture designed to communicate stability, security, and proven results for global enterprises.
            </p>
            <div className="flex gap-4 pt-4">
               <button className="px-6 py-3 bg-[#1E40AF] text-white rounded font-semibold hover:bg-blue-800 transition-colors flex items-center gap-2">
                  Our Services <ChevronRight size={18} />
               </button>
               <button className="px-6 py-3 bg-white border border-slate-300 text-slate-700 rounded font-semibold hover:bg-slate-50 transition-colors">
                  Read Case Study
               </button>
            </div>
         </div>

         {/* Corporate Metrics */}
         <div className="col-span-12 lg:col-span-6 flex flex-col justify-center gap-6">
            {[
              { icon: BarChart3, title: 'Strategic Analytics', desc: 'Data-driven insights for executive decision making.' },
              { icon: Users, title: 'Global Workforce', desc: 'Unified communication architecture across 40+ countries.' },
              { icon: FileText, title: 'Compliance Protocols', desc: 'Strict adherence to ISO 27001 and GDPR standards.' }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-6 border border-slate-200 rounded shadow-sm flex items-start gap-4 hover:shadow-md hover:border-blue-200 transition-all cursor-pointer"
              >
                 <div className="p-3 bg-blue-50 text-[#1E40AF] rounded">
                    <item.icon size={24} />
                 </div>
                 <div>
                    <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                 </div>
              </motion.div>
            ))}
         </div>
      </main>

    </div>
  );
};

export default ProfessionalMockup;

