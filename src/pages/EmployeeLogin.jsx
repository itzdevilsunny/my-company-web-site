import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShieldCheck, ArrowRight, Lock, User, Sparkles } from 'lucide-react';
import Magnetic from '../components/ui/Magnetic';

const EmployeeLogin = () => {
  const [employeeId, setEmployeeId] = useState('');
  const [accessKey, setAccessKey] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simple verification for demonstration
    // In a real app, this would check against Supabase 'employees' table
    setTimeout(() => {
      if (employeeId.startsWith('ZRV-') && accessKey === 'ZORVIA_TEAM_2026') {
        localStorage.setItem('zorvia_employee_auth', 'true');
        localStorage.setItem('zorvia_employee_id', employeeId);
        navigate('/dashboard'); // Redirect to dashboard or employee portal
      } else {
        alert('Invalid Employee ID or Access Key. Access Denied.');
      }
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6 relative overflow-hidden">
      {/* Playful Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#8B5CF6_1px,transparent_1px)] bg-[size:40px_40px] opacity-5 pointer-events-none" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full p-12 bg-white border-4 border-foreground rounded-[3rem] shadow-pop relative z-10"
      >
        <div className="flex items-center gap-4 mb-12">
          <div className="w-14 h-14 bg-black text-white rounded-2xl flex items-center justify-center font-black text-2xl shadow-pop">
            Z
          </div>
          <div>
            <h1 className="font-heading font-black text-2xl tracking-tighter uppercase italic leading-none">Employee</h1>
            <p className="text-[10px] font-black text-primary uppercase tracking-[0.3em] mt-1">Command Sync</p>
          </div>
        </div>

        <form onSubmit={handleLogin} className="space-y-8">
          <div className="space-y-3">
            <label className="block font-heading text-[10px] uppercase font-black text-muted-foreground tracking-widest pl-2">Employee Identifier</label>
            <div className="relative group">
              <User className="absolute left-5 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors" size={18} />
              <input 
                type="text" 
                placeholder="ZRV-XXXX" 
                value={employeeId}
                onChange={(e) => setEmployeeId(e.target.value.toUpperCase())}
                required
                className="w-full bg-slate-50 border-2 border-foreground rounded-2xl pl-14 pr-6 py-4 font-sans font-bold shadow-pop-sm focus:shadow-none transition-all outline-none"
              />
            </div>
          </div>

          <div className="space-y-3">
            <label className="block font-heading text-[10px] uppercase font-black text-muted-foreground tracking-widest pl-2">Security Access Key</label>
            <div className="relative group">
              <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-secondary transition-colors" size={18} />
              <input 
                type="password" 
                placeholder="••••••••••••" 
                value={accessKey}
                onChange={(e) => setAccessKey(e.target.value)}
                required
                className="w-full bg-slate-50 border-2 border-foreground rounded-2xl pl-14 pr-6 py-4 font-sans font-bold shadow-pop-sm focus:shadow-none transition-all outline-none"
              />
            </div>
          </div>

          <Magnetic strength={0.3}>
            <button 
              type="submit" 
              disabled={isLoading}
              className="w-full py-6 bg-foreground text-white border-4 border-foreground rounded-full font-heading font-black uppercase tracking-widest shadow-pop hover:shadow-pop-active transition-all flex items-center justify-center gap-3 group disabled:opacity-50"
            >
              {isLoading ? (
                <span className="animate-pulse">Authenticating...</span>
              ) : (
                <>
                  Initialize Sync
                  <ArrowRight size={20} strokeWidth={3} className="group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </Magnetic>
        </form>

        <div className="mt-12 pt-8 border-t-2 border-foreground/5 flex flex-col items-center gap-4">
           <div className="flex items-center gap-2 opacity-30">
              <ShieldCheck size={14} />
              <span className="text-[8px] font-black uppercase tracking-widest">Zorvia HQ Security Protocol v4.2.0</span>
           </div>
           <button 
            onClick={() => navigate('/admin')}
            className="text-[10px] font-black uppercase tracking-widest text-primary hover:underline"
           >
            Master Command Portal
           </button>
        </div>
      </motion.div>

      {/* Floating Sparkle Decoration */}
      <div className="absolute top-1/4 right-1/4 animate-bounce delay-100 opacity-20">
         <Sparkles size={40} className="text-secondary" />
      </div>
    </div>
  );
};

export default EmployeeLogin;
