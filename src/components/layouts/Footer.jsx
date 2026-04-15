import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { TwitterIcon, GithubIcon, LinkedinIcon, InstagramIcon } from '../ui/Icons';

const Footer = () => {
  return (
    <footer className="bg-background border-t-[3px] border-foreground px-6 lg:px-24 py-20 relative overflow-hidden">
      {/* Background polka dots overlay */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#1E293B_2px,transparent_2px)] bg-[size:32px_32px]" />
      
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-4 gap-20">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-primary border-[3px] border-foreground rounded-lg -rotate-12 shadow-pop" />
            <span className="font-heading font-black text-4xl text-foreground tracking-tighter">ZORVIA<span className="text-secondary">.</span></span>
          </div>
          <p className="text-xl text-muted-foreground font-sans max-w-sm mb-10 leading-relaxed font-medium">
            Building wildly optimistic digital ecosystems for the next generation of visionary brands.
          </p>
          <div className="flex gap-4">
            {[
              { Icon: TwitterIcon, color: 'hover:bg-[#1DA1F2]' },
              { Icon: GithubIcon, color: 'hover:bg-[#333]' },
              { Icon: LinkedinIcon, color: 'hover:bg-[#0077b5]' },
              { Icon: InstagramIcon, color: 'hover:bg-[#E4405F]' }
            ].map(({ Icon, color }, i) => (
              <motion.a 
                key={i}
                whileHover={{ y: -8, rotate: 10, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="#"
                className={`w-14 h-14 bg-white border-[3px] border-foreground rounded-2xl flex items-center justify-center shadow-pop text-foreground ${color} hover:text-white transition-all`}
              >
                <Icon size={24} strokeWidth={2.5} />
              </motion.a>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6 font-sans">
          <h4 className="font-heading font-black text-xl text-foreground uppercase tracking-widest mb-4">The Library</h4>
          {['Services Catalog', 'Process Deck', 'Case Studies', 'Open Roles'].map((link) => (
            <a key={link} href="#" className="text-muted-foreground hover:text-primary font-bold transition-colors flex items-center gap-2 group">
              <span className="w-0 group-hover:w-4 transition-all overflow-hidden text-primary">→</span>
              {link}
            </a>
          ))}
        </div>

        <div className="bg-quaternary/10 border-[3px] border-foreground rounded-[32px] p-8 flex flex-col gap-6 shadow-pop relative overflow-hidden group">
           <div className="absolute -top-4 -right-4 text-quaternary opacity-20 rotate-12 group-hover:rotate-45 transition-transform duration-700">
              <Sparkles size={100} />
           </div>
           
           <h4 className="text-2xl font-heading font-black mb-4">Strategic Insights</h4>
           <p className="text-muted-foreground font-sans mb-8">
              Stay ahead of the curve. Get curated industry insights delivered to your inbox.
            </p>
           <div className="relative z-10">
              <input 
                type="email" 
                placeholder="your@email.com" 
                className="w-full bg-white border-[3px] border-foreground rounded-full px-6 py-4 font-bold focus:outline-none focus:placeholder:opacity-0 focus:shadow-pop-lg transition-all"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-foreground text-white p-3 rounded-full hover:bg-secondary hover:scale-110 transition-all shadow-pop active:shadow-none">
                <ArrowRight size={20} strokeWidth={3} />
              </button>
           </div>
        </div>
      </div>

      <div className="mt-20 pt-10 border-t-[3px] border-foreground flex flex-col lg:flex-row justify-between items-center gap-6 text-sm font-black text-muted-foreground uppercase tracking-widest relative z-10">
        <p>© 2026 Zorvia Digital. Hand-Constructed with Love.</p>
        <div className="flex gap-10">
          <a href="#" className="hover:text-foreground">Privacy</a>
          <a href="#" className="hover:text-foreground">Terms</a>
          <a href="#" className="hover:text-foreground">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
