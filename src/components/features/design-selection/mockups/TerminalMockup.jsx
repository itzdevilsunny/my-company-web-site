import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Terminal as TerminalIcon, Cpu, Database, Activity, HardDrive, Network, Lock, Code } from 'lucide-react';

const TerminalMockup = ({ theme }) => {
  const [logs, setLogs] = useState([
    '[INIT] ZORVIA_CORE_OS REV: 4.8.x',
    '[OK] MOUNTING NEURAL_DRIVE... DONE',
    '[OK] ESTABLISHING SECURE_TUNNEL... DONE',
    '[INFO] FETCHING GLOBAL_ARCHETYPES...',
  ]);
  const logEndRef = useRef(null);

  useEffect(() => {
    const logMessages = [
      '[OK] DESIGN_SYSTEM::BAUHAUS LOADED',
      '[OK] DESIGN_SYSTEM::MAXIMALISM LOADED',
      '[WARN] LATENCY SPIKE IN SECTOR_D',
      '[OK] CLEANING CACHE FILES...',
      '[INFO] USER_CONNECTED: ADMIN_01',
      '[OK] COMPILING ASSETS...',
      '[OK] REFRESHING_STATE...',
      '[INFO] KERNEL_UPLINK::STABLE',
    ];

    const interval = setInterval(() => {
      setLogs(prev => [...prev, logMessages[Math.floor(Math.random() * logMessages.length)]].slice(-15));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    logEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  return (
    <div className="min-h-screen bg-black text-[#00FF00] font-mono p-6 md:p-12 flex flex-col relative overflow-hidden selection:bg-[#00FF00] selection:text-black">
      {/* 1. Header with System Vitals */}
      <div className="flex flex-col sm:flex-row justify-between items-start gap-8 mb-8 md:mb-12 border-b border-[#00FF00]/20 pb-8 relative z-10 font-sans md:font-mono">
        <div className="space-y-2">
          <pre className="text-[6px] sm:text-[8px] md:text-[10px] leading-tight text-[#00FF00] font-bold overflow-hidden">
{` ███████╗ ██████╗ ██████╗ ██╗   ██╗██╗ █████╗ 
 ╚══███╔╝██╔═══██╗██╔══██╗██║   ██║██║██╔══██╗
   ███╔╝ ██║   ██║██████╔╝██║   ██║██║███████║
  ███╔╝  ██║   ██║██╔══██╗╚██╗ ██╔╝██║██╔══██║
 ███████╗╚██████╔╝██║  ██║ ╚████╔╝ ██║██║  ██║
 ╚══════╝ ╚═════╝ ╚═╝  ╚═╝  ╚═══╝  ╚═╝╚═╝  ╚═╝`}
          </pre>
          <div className="text-[8px] md:text-[10px] bg-[#00FF00]/10 px-2 py-1 inline-block">VERSION_STABLE_4.8.2</div>
        </div>

        <div className="grid grid-cols-1 xs:grid-cols-2 gap-x-4 md:gap-x-8 gap-y-4 w-full sm:w-auto">
           <div className="flex items-center gap-3">
              <Cpu size={14} className="opacity-50" />
              <div className="space-y-1 grow sm:grow-0">
                 <div className="text-[8px] opacity-40 uppercase">CPU Usage</div>
                 <div className="h-1 w-full sm:w-20 bg-[#00FF00]/10 overflow-hidden">
                    <motion.div 
                      className="h-full bg-[#00FF00]" 
                      animate={{ width: ['20%', '65%', '45%', '80%', '30%'] }} 
                      transition={{ duration: 5, repeat: Infinity }}
                    />
                 </div>
              </div>
           </div>
           <div className="flex items-center gap-3">
              <Database size={14} className="opacity-50" />
              <div className="space-y-1 grow sm:grow-0">
                 <div className="text-[8px] opacity-40 uppercase">Mem Heap</div>
                 <div className="h-1 w-full sm:w-20 bg-[#00FF00]/10 overflow-hidden">
                    <motion.div 
                      className="h-full bg-[#00FF00]" 
                      animate={{ width: ['40%', '50%', '48%', '55%', '42%'] }} 
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                 </div>
              </div>
           </div>
           <div className="flex items-center gap-3">
              <Activity size={12} className="opacity-50" />
              <div className="space-y-1">
                 <div className="text-[8px] opacity-40 uppercase">Network</div>
                 <div className="text-[9px] md:text-[10px] font-bold">1.2 GB/S</div>
              </div>
           </div>
           <div className="flex items-center gap-3">
              <Lock size={12} className="opacity-50" />
              <div className="space-y-1">
                 <div className="text-[8px] opacity-40 uppercase">Security</div>
                 <div className="text-[9px] md:text-[10px] font-bold text-white bg-[#00FF00]/20 px-1">ENCRYPTED</div>
              </div>
           </div>
        </div>
      </div>

      {/* 2. Main content split */}
      <div className="flex-grow flex flex-col lg:flex-row gap-6 md:gap-12 relative z-10 overflow-y-auto lg:overflow-hidden no-scrollbar">
         {/* Terminal Output */}
         <div className="flex-grow flex flex-col border border-[#00FF00]/10 bg-black/50 p-4 md:p-6 min-h-[200px] lg:min-h-0">
            <div className="flex items-center justify-between mb-4 opacity-40 border-b border-[#00FF00]/10 pb-2">
               <div className="flex items-center gap-2">
                  <TerminalIcon size={12} />
                  <span className="text-[9px] md:text-[10px] uppercase tracking-widest">Main Terminal Console</span>
               </div>
               <div className="hidden sm:flex gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00FF00]/20" />
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00FF00]/20" />
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00FF00]/20" />
               </div>
            </div>
            <div className="flex-grow overflow-hidden text-[10px] md:text-xs space-y-1 font-mono">
               {logs.map((log, i) => (
                 <motion.div 
                  initial={{ opacity: 0, x: -5 }}
                  animate={{ opacity: 1, x: 0 }}
                  key={i} 
                  className={log.includes('WARN') ? 'text-yellow-400' : ''}
                 >
                   <span className="opacity-30 mr-2">[{new Date().toLocaleTimeString()}]</span>
                   {log}
                 </motion.div>
               ))}
               <div className="flex items-center gap-2">
                  <span className="opacity-30 mr-2">[{new Date().toLocaleTimeString()}]</span>
                  <span>zorvia@host:~$</span>
                  <motion.div 
                    animate={{ opacity: [0, 1] }} 
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className="w-2 h-3 md:h-4 bg-[#00FF00]" 
                  />
               </div>
               <div ref={logEndRef} />
            </div>
         </div>

         {/* Command Shortcuts */}
         <div className="w-full lg:w-72 flex flex-col gap-3 md:gap-4 shrink-0 pb-6 lg:pb-0">
            <div className="text-[8px] md:text-[10px] font-black opacity-30 uppercase tracking-[0.2em] mb-1">Operational Protocol</div>
            {[
              { label: 'Access Core', cmd: 'run zorvia_core', icon: HardDrive },
              { label: 'Sync Galaxy', cmd: 'net sync --all', icon: Network },
              { label: 'Build Logic', cmd: 'npm exec build', icon: Code },
              { label: 'Clear Logs', cmd: 'rm -rf ./logs', icon: Database },
            ].map((item, i) => (
              <motion.button
                key={i}
                whileHover={{ x: 5, backgroundColor: 'rgba(0, 255, 0, 0.05)' }}
                className="w-full p-3 md:p-4 border border-[#00FF00]/10 flex items-center justify-between group transition-all bg-black/20"
              >
                <div className="flex items-center gap-3">
                   <item.icon size={14} md:size={16} className="opacity-40 group-hover:opacity-100" />
                   <div className="text-left">
                      <div className="text-[9px] md:text-[10px] font-bold text-white">{item.label}</div>
                      <div className="text-[8px] md:text-[9px] opacity-30 font-mono tracking-tighter">CMD: {item.cmd}</div>
                   </div>
                </div>
                <div className="text-[10px] opacity-10 group-hover:opacity-50 transition-opacity">::0{i+1}</div>
              </motion.button>
            ))}
         </div>
      </div>

      {/* 3. Global scanline and flicker effect */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] animate-pulse" />
    </div>
  );
};

export default TerminalMockup;


