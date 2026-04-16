import React from 'react';
import { motion } from 'framer-motion';
import { LayoutGrid, Database, Server, Settings, Search, Bell, ChevronDown, List, Filter } from 'lucide-react';

const EnterpriseMockup = ({ theme }) => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-white text-slate-800 font-sans selection:bg-slate-800 selection:text-white flex border border-slate-300 shadow-xl">
      
      {/* Enterprise Sidebar */}
      <aside className="w-64 bg-slate-50 border-r border-slate-200 flex flex-col hidden lg:flex">
         <div className="h-14 border-b border-slate-200 px-4 flex items-center gap-2 font-bold text-slate-900">
            <LayoutGrid size={18} className="text-slate-500" /> Zorvia Scale
         </div>
         <div className="p-4 flex-grow space-y-1">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 mt-4 ml-2">Infrastructure</div>
            {[
              { icon: Database, name: 'Databases', active: true },
              { icon: Server, name: 'Compute Nodes' },
              { icon: Settings, name: 'Config Maps' }
            ].map((item, i) => (
              <div key={i} className={`flex items-center gap-3 px-3 py-2 text-sm font-medium rounded cursor-pointer ${item.active ? 'bg-slate-200 text-slate-900' : 'text-slate-600 hover:bg-slate-100'}`}>
                 <item.icon size={16} /> {item.name}
              </div>
            ))}
         </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-grow flex flex-col">
         {/* Topnav */}
         <header className="h-14 border-b border-slate-200 bg-white px-4 flex justify-between items-center bg-slate-50">
            <div className="flex items-center gap-2 text-sm text-slate-600 font-medium">
               <span className="hover:text-slate-900 cursor-pointer">Infrastructure</span>
               <ChevronDown size={14} className="opacity-50 -rotate-90" />
               <span className="text-slate-900 font-bold">Databases</span>
            </div>
            <div className="flex items-center gap-4 text-slate-500">
               <Search size={18} className="hover:text-slate-900 cursor-pointer" />
               <Bell size={18} className="hover:text-slate-900 cursor-pointer" />
               <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-700">AZ</div>
            </div>
         </header>

         {/* Data View */}
         <main className="p-6 bg-slate-50 flex-grow overflow-auto">
            <div className="flex justify-between items-center mb-6">
               <h1 className="text-2xl font-bold text-slate-900">Production Databases</h1>
               <div className="flex gap-2">
                  <button className="px-3 py-1.5 border border-slate-300 bg-white text-slate-700 text-sm font-medium rounded flex items-center gap-2 shadow-sm">
                     <Filter size={14} /> Filter
                  </button>
                  <button className="px-3 py-1.5 bg-slate-900 text-white text-sm font-medium rounded shadow-sm">
                     Create New DB
                  </button>
               </div>
            </div>

            {/* Data Table */}
            <div className="bg-white border border-slate-200 rounded shadow-sm overflow-hidden">
               <div className="grid grid-cols-5 border-b border-slate-200 bg-slate-50 p-3 text-xs font-bold text-slate-500 uppercase tracking-wider">
                  <div className="col-span-2">Resource Name</div>
                  <div>Status</div>
                  <div>Region</div>
                  <div className="text-right">Actions</div>
               </div>
               
               {[
                 { name: 'prod-cluster-alpha', status: 'Running', region: 'us-east-1' },
                 { name: 'analytics-replica', status: 'Syncing', region: 'eu-west-2' },
                 { name: 'legacy-archive', status: 'Stopped', region: 'us-west-1' }
               ].map((row, i) => (
                 <div key={i} className="grid grid-cols-5 border-b border-slate-100 p-3 text-sm text-slate-700 items-center hover:bg-slate-50 transition-colors">
                    <div className="col-span-2 font-medium flex items-center gap-2">
                       <Database size={16} className="text-slate-400" /> {row.name}
                    </div>
                    <div>
                       <span className={`px-2 py-0.5 rounded text-xs font-bold ${row.status === 'Running' ? 'bg-green-100 text-green-700' : row.status === 'Syncing' ? 'bg-blue-100 text-blue-700' : 'bg-slate-100 text-slate-600'}`}>
                          {row.status}
                       </span>
                    </div>
                    <div className="text-slate-500">{row.region}</div>
                    <div className="text-right">
                       <button className="text-slate-400 hover:text-slate-900"><List size={16} /></button>
                    </div>
                 </div>
               ))}
            </div>
         </main>
      </div>

    </div>
  );
};

export default EnterpriseMockup;

