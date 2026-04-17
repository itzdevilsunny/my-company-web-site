import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Zap, Mail } from 'lucide-react';
import { TwitterIcon, GithubIcon, InstagramIcon } from '../ui/Icons';
import Magnetic from '../ui/Magnetic';

const Footer = () => {

  return (
    <footer className="bg-white border-t-2 border-foreground px-6 lg:px-12 py-12 lg:py-20 relative overflow-hidden">
      {/* Background polka dots overlay */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#000_2px,transparent_2px)] bg-[size:32px_32px] pointer-events-none" />
      
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-24">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-4 mb-8 lg:mb-10">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-9 h-9 lg:w-11 lg:h-11 bg-black text-white rounded-lg lg:rounded-xl flex items-center justify-center font-black text-lg lg:text-xl shadow-pop group-hover:-rotate-12 transition-transform duration-500">
                Z
              </div>
              <span className="font-heading font-black text-2xl lg:text-4xl text-foreground tracking-tighter uppercase italic leading-none">ZORVIA<span className="text-secondary">.</span></span>
            </Link>
          </div>
          
          <p className="text-base lg:text-xl text-muted-foreground font-sans max-w-md mb-8 lg:mb-12 leading-tight font-bold tracking-tight">
            We provide professional digital solutions including website development, frontend design, landing pages, mobile apps, branding, and UI/UX services.
          </p>

          <div className="flex gap-4 lg:gap-6">
            {[
              { Icon: TwitterIcon, color: 'hover:bg-primary', url: 'https://x.com/zorvia02' },
              { Icon: GithubIcon, color: 'hover:bg-secondary', url: 'https://github.com/zorvia02' },
              { Icon: Mail, color: 'hover:bg-tertiary', url: 'mailto:zorvia02@gmail.com' },
              { Icon: InstagramIcon, color: 'hover:bg-quaternary', url: 'https://www.instagram.com/zorvia02?igsh=MTA0b2EwMXA1b29vYg==' }
            ].map(({ Icon, color, url }, i) => (
              <Magnetic key={i} strength={0.4}>
                <motion.a 
                  whileHover={{ y: -5 }}
                  href={url}
                  target={url.startsWith('mailto') ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  className={`w-10 h-10 lg:w-14 lg:h-14 bg-white border-2 border-foreground rounded-xl lg:rounded-2xl flex items-center justify-center shadow-pop text-foreground ${color} hover:text-white transition-all`}
                >
                  <Icon size={18} lg:size={24} strokeWidth={3} />
                </motion.a>
              </Magnetic>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12 lg:col-span-1">
          <div className="flex flex-col gap-4 lg:gap-6">
            <h4 className="font-heading font-black text-[10px] lg:text-sm text-foreground uppercase tracking-[0.3em] mb-2 lg:mb-4 opacity-30">Explore //</h4>
            {[
              { name: 'Services', url: '/#services' },
              { name: 'Portfolio', url: '/portfolio' },
              { name: 'Themes', url: '/designs' },
              { name: 'Plans', url: '/#pricing' }
            ].map((link) => (
              <Link key={link.name} to={link.url} className="text-foreground hover:text-primary font-black text-xs lg:text-sm uppercase tracking-widest transition-colors flex items-center gap-2 group">
                <span className="w-0 group-hover:w-4 transition-all overflow-hidden text-primary">→</span>
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-4 lg:gap-6">
            <h4 className="font-heading font-black text-[10px] lg:text-sm text-foreground uppercase tracking-[0.3em] mb-2 lg:mb-4 opacity-30">Company //</h4>
            {[
              { name: 'About Us', url: '/about' },
              { name: 'Contact', url: '/#contact' },
              { name: 'Careers', url: '/careers' },
              { name: 'Team Portal', url: '/employee-login' }
            ].map((link) => (
              <Link key={link.name} to={link.url} className="text-foreground hover:text-secondary font-black text-xs lg:text-sm uppercase tracking-widest transition-colors flex items-center gap-2 group">
                <span className="w-0 group-hover:w-4 transition-all overflow-hidden text-secondary">→</span>
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="bg-quaternary/10 border-2 border-foreground rounded-[2rem] p-5 lg:p-8 flex flex-col gap-6 lg:gap-8 shadow-pop relative overflow-hidden group">
           <div className="absolute -top-6 -right-6 text-quaternary opacity-10 rotate-12 group-hover:rotate-45 transition-transform duration-1000">
              <Zap size={80} lg:size={120} fill="currentColor" />
           </div>
           
           <div>
              <h4 className="text-xl lg:text-2xl font-heading font-black mb-2 uppercase italic leading-none">Stay Updated //</h4>
              <p className="text-xs lg:text-sm font-bold text-muted-foreground leading-relaxed">
                Get the latest news and design insights from Zorvia.
              </p>
           </div>
           <div className="relative z-10 flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="your@email.com" 
                className="w-full bg-white border-2 border-foreground rounded-full px-6 lg:px-8 py-3 lg:py-4 font-black text-[10px] lg:text-xs uppercase tracking-widest focus:outline-none focus:shadow-pop transition-all"
              />
              <button 
                onClick={() => alert("Subscribing to Zorvia updates...")}
                className="w-full bg-foreground text-white py-4 rounded-full hover:bg-primary transition-all shadow-pop active:shadow-none font-black text-xs uppercase tracking-widest"
              >
                SUBSCRIBE
              </button>
           </div>
        </div>
      </div>

        <div className="mt-16 lg:mt-24 pt-8 lg:pt-10 border-t-2 border-foreground/10 flex flex-col items-center justify-center gap-6 relative z-10">
        
        <div className="flex flex-wrap justify-center gap-6 lg:gap-12 text-[8px] lg:text-[10px] font-black uppercase tracking-[0.4em] text-foreground/40 text-center">
          <Link to="/security" className="hover:text-primary transition-colors">Security Profile</Link>
          <Link to="/privacy" className="hover:text-secondary transition-colors">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-tertiary transition-colors">Terms & Conditions</Link>
          <Link to="/help-desk" className="hover:text-quaternary transition-colors">Help Desk</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
