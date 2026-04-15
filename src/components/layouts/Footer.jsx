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
    <footer className="bg-white border-t-4 border-foreground px-6 lg:px-24 py-32 relative overflow-hidden">
      {/* Background polka dots overlay */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#000_2px,transparent_2px)] bg-[size:32px_32px] pointer-events-none" />
      
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-4 gap-24">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-4 mb-10">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 bg-black text-white rounded-xl flex items-center justify-center font-black text-2xl shadow-pop group-hover:-rotate-12 transition-transform duration-500">
                Z
              </div>
              <span className="font-heading font-black text-5xl text-foreground tracking-tighter uppercase italic">ZORVIA<span className="text-secondary">.</span></span>
            </Link>
          </div>
          
          <p className="text-2xl text-muted-foreground font-sans max-w-md mb-12 leading-tight font-bold tracking-tight">
            We architect wildly optimistic digital ecosystems for organizations that prioritize high-velocity growth.
          </p>

          <div className="flex gap-6">
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
                  className={`w-16 h-16 bg-white border-4 border-foreground rounded-2xl flex items-center justify-center shadow-pop text-foreground ${color} hover:text-white transition-all`}
                >
                  <Icon size={28} strokeWidth={3} />
                </motion.a>
              </Magnetic>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-2 gap-12 lg:col-span-1">
          <div className="flex flex-col gap-6">
            <h4 className="font-heading font-black text-sm text-foreground uppercase tracking-[0.3em] mb-4 opacity-30">Nodes //</h4>
            {[
              { name: 'Solutions', url: '/#services' },
              { name: 'Ecosystems', url: '/portfolio' },
              { name: 'Designs', url: '/designs' },
              { name: 'Pricing', url: '/#pricing' }
            ].map((link) => (
              <Link key={link.name} to={link.url} className="text-foreground hover:text-primary font-black text-sm uppercase tracking-widest transition-colors flex items-center gap-2 group">
                <span className="w-0 group-hover:w-4 transition-all overflow-hidden text-primary">→</span>
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-6">
            <h4 className="font-heading font-black text-sm text-foreground uppercase tracking-[0.3em] mb-4 opacity-30">Identity //</h4>
            {[
              { name: 'Collective', url: '/about' },
              { name: 'Command', url: '/#contact' },
              { name: 'Careers', url: '/careers' },
              { name: 'Employee Portal', url: '/employee-login' }
            ].map((link) => (
              <Link key={link.name} to={link.url} className="text-foreground hover:text-secondary font-black text-sm uppercase tracking-widest transition-colors flex items-center gap-2 group">
                <span className="w-0 group-hover:w-4 transition-all overflow-hidden text-secondary">→</span>
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="bg-quaternary/10 border-4 border-foreground rounded-[3rem] p-10 flex flex-col gap-8 shadow-pop relative overflow-hidden group">
           <div className="absolute -top-6 -right-6 text-quaternary opacity-10 rotate-12 group-hover:rotate-45 transition-transform duration-1000">
              <Zap size={140} fill="currentColor" />
           </div>
           
           <h4 className="text-3xl font-heading font-black mb-2 uppercase italic">Join Core //</h4>
           <p className="text-sm font-bold text-muted-foreground leading-relaxed">
              Synchronize with our high-energy intelligence feed for weekly strategic insights.
            </p>
           <div className="relative z-10">
              <input 
                type="email" 
                placeholder="ACCESS_EMAIL" 
                className="w-full bg-white border-4 border-foreground rounded-full px-8 py-5 font-black text-xs uppercase tracking-widest focus:outline-none focus:shadow-pop-lg transition-all"
              />
              <button 
                onClick={() => alert("Synchronizing with Core intelligence feed...")}
                className="absolute right-3 top-3 bottom-3 bg-foreground text-white px-6 rounded-full hover:bg-primary transition-all shadow-pop active:shadow-none font-black text-xs"
              >
                SYNC
              </button>
           </div>
        </div>
      </div>

      <div className="mt-32 pt-12 border-t-4 border-foreground/10 flex flex-col lg:flex-row justify-between items-center gap-10 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <p className="text-xs font-black uppercase tracking-[0.3em] text-muted-foreground">
            © 2026 ZORVIA ARCHITECTS. HAND-WELDED IN BLR.
          </p>
          <div className="flex items-center gap-8 bg-muted/30 px-6 py-2 rounded-full border border-foreground/5 shadow-inner">
             <div className="flex items-center gap-2">
                <Globe size={12} className="text-primary" />
                <span className="text-[10px] font-black uppercase tracking-widest">SF: {formatTime(-15)}</span>
             </div>
             <div className="w-1 h-1 bg-foreground/20 rounded-full" />
             <div className="flex items-center gap-2">
                <Clock size={12} className="text-secondary" />
                <span className="text-[10px] font-black uppercase tracking-widest">BLR: {formatTime(0)}</span>
             </div>
          </div>
        </div>
        
        <div className="flex gap-12 text-[10px] font-black uppercase tracking-[0.4em] text-foreground/40">
          <Link to="/privacy" className="hover:text-primary transition-colors">Security Profile</Link>
          <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Mesh</Link>
          <Link to="/careers" className="hover:text-primary transition-colors">Terminals</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
