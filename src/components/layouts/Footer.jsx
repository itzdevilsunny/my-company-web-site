import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Globe, Clock, Zap } from 'lucide-react';
import { TwitterIcon, GithubIcon, LinkedinIcon, InstagramIcon } from '../ui/Icons';
import Magnetic from '../ui/Magnetic';

const Footer = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (offset) => {
    return new Date(time.getTime() + (offset * 3600000)).toLocaleTimeString('en-US', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <footer className="bg-white border-t-4 border-foreground px-6 lg:px-24 py-20 lg:py-32 relative overflow-hidden">
      {/* Background polka dots overlay */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#000_2px,transparent_2px)] bg-[size:32px_32px] pointer-events-none" />
      
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-24">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-4 mb-8 lg:mb-10">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-black text-white rounded-lg lg:rounded-xl flex items-center justify-center font-black text-xl lg:text-2xl shadow-pop group-hover:-rotate-12 transition-transform duration-500">
                Z
              </div>
              <span className="font-heading font-black text-3xl lg:text-5xl text-foreground tracking-tighter uppercase italic leading-none">ZORVIA<span className="text-secondary">.</span></span>
            </Link>
          </div>
          
          <p className="text-lg lg:text-2xl text-muted-foreground font-sans max-w-md mb-8 lg:mb-12 leading-tight font-bold tracking-tight">
            We architect wildly optimistic digital ecosystems for organizations that prioritize high-velocity growth.
          </p>

          <div className="flex gap-4 lg:gap-6">
            {[
              { Icon: TwitterIcon, color: 'hover:bg-primary' },
              { Icon: GithubIcon, color: 'hover:bg-secondary' },
              { Icon: LinkedinIcon, color: 'hover:bg-tertiary' },
              { Icon: InstagramIcon, color: 'hover:bg-quaternary' }
            ].map(({ Icon, color }, i) => (
              <Magnetic key={i} strength={0.4}>
                <motion.a 
                  whileHover={{ y: -5 }}
                  href="#"
                  className={`w-12 h-12 lg:w-16 lg:h-16 bg-white border-2 lg:border-4 border-foreground rounded-xl lg:rounded-2xl flex items-center justify-center shadow-pop text-foreground ${color} hover:text-white transition-all`}
                >
                  <Icon size={20} lg:size={28} strokeWidth={3} />
                </motion.a>
              </Magnetic>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12 lg:col-span-1">
          <div className="flex flex-col gap-4 lg:gap-6">
            <h4 className="font-heading font-black text-[10px] lg:text-sm text-foreground uppercase tracking-[0.3em] mb-2 lg:mb-4 opacity-30">Nodes //</h4>
            {[
              { name: 'Solutions', url: '/#services' },
              { name: 'Ecosystems', url: '/portfolio' },
              { name: 'Designs', url: '/designs' },
              { name: 'Pricing', url: '/#pricing' }
            ].map((link) => (
              <Link key={link.name} to={link.url} className="text-foreground hover:text-primary font-black text-xs lg:text-sm uppercase tracking-widest transition-colors flex items-center gap-2 group">
                <span className="w-0 group-hover:w-4 transition-all overflow-hidden text-primary">→</span>
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-4 lg:gap-6">
            <h4 className="font-heading font-black text-[10px] lg:text-sm text-foreground uppercase tracking-[0.3em] mb-2 lg:mb-4 opacity-30">Identity //</h4>
            {[
              { name: 'Collective', url: '/about' },
              { name: 'Command', url: '/#contact' },
              { name: 'Careers', url: '/careers' },
              { name: 'Employee Portal', url: '/employee-login' }
            ].map((link) => (
              <Link key={link.name} to={link.url} className="text-foreground hover:text-secondary font-black text-xs lg:text-sm uppercase tracking-widest transition-colors flex items-center gap-2 group">
                <span className="w-0 group-hover:w-4 transition-all overflow-hidden text-secondary">→</span>
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="bg-quaternary/10 border-4 border-foreground rounded-[2rem] lg:rounded-[3rem] p-6 lg:p-10 flex flex-col gap-6 lg:gap-8 shadow-pop relative overflow-hidden group">
           <div className="absolute -top-6 -right-6 text-quaternary opacity-10 rotate-12 group-hover:rotate-45 transition-transform duration-1000">
              <Zap size={100} lg:size={140} fill="currentColor" />
           </div>
           
           <div>
              <h4 className="text-2xl lg:text-3xl font-heading font-black mb-2 uppercase italic leading-none">Join Core //</h4>
              <p className="text-xs lg:text-sm font-bold text-muted-foreground leading-relaxed">
                Synchronize with our high-energy intelligence feed for weekly strategic insights.
              </p>
           </div>
           <div className="relative z-10 flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="ACCESS_EMAIL" 
                className="w-full bg-white border-4 border-foreground rounded-full px-6 lg:px-8 py-4 lg:py-5 font-black text-[10px] lg:text-xs uppercase tracking-widest focus:outline-none focus:shadow-pop-lg transition-all"
              />
              <button 
                onClick={() => alert("Synchronizing with Core intelligence feed...")}
                className="w-full bg-foreground text-white py-4 rounded-full hover:bg-primary transition-all shadow-pop active:shadow-none font-black text-xs uppercase tracking-widest"
              >
                SYNCHRONIZE
              </button>
           </div>
        </div>
      </div>

      <div className="mt-20 lg:mt-32 pt-8 lg:pt-12 border-t-4 border-foreground/10 flex flex-col lg:flex-row justify-between items-center gap-10 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 text-center">
          <p className="text-[10px] lg:text-xs font-black uppercase tracking-[0.3em] text-muted-foreground">
            © 2026 ZORVIA ARCHITECTS. HAND-WELDED IN BLR.
          </p>
          <div className="flex items-center gap-4 lg:gap-8 bg-muted/30 px-4 lg:px-6 py-2 rounded-full border border-foreground/5 shadow-inner">
             <div className="flex items-center gap-2">
                <Globe size={10} lg:size={12} className="text-primary" />
                <span className="text-[8px] lg:text-[10px] font-black uppercase tracking-widest">SF: {formatTime(-15)}</span>
             </div>
             <div className="w-1 h-1 bg-foreground/20 rounded-full" />
             <div className="flex items-center gap-2">
                <Clock size={10} lg:size={12} className="text-secondary" />
                <span className="text-[8px] lg:text-[10px] font-black uppercase tracking-widest">BLR: {formatTime(0)}</span>
             </div>
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 lg:gap-12 text-[8px] lg:text-[10px] font-black uppercase tracking-[0.4em] text-foreground/40">
          <Link to="/privacy" className="hover:text-primary transition-colors">Security Profile</Link>
          <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Mesh</Link>
          <Link to="/careers" className="hover:text-primary transition-colors">Terminals</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
