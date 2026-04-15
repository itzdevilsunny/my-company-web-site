import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Menu, X, Globe, Terminal, Cpu } from 'lucide-react';
import Magnetic from '../ui/Magnetic';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', url: '/#services', color: 'hover:text-primary' },
    { name: 'Works', url: '/portfolio', color: 'hover:text-secondary' },
    { name: 'Designs', url: '/designs', color: 'hover:text-quaternary' },
    { name: 'About', url: '/about', color: 'hover:text-tertiary' },
  ];

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-4 lg:top-8 left-1/2 -translate-x-1/2 z-50 w-[95%] lg:w-fit transition-all duration-500`}
      >
        <div className={`bg-white/90 backdrop-blur-xl border-2 border-foreground shadow-pop rounded-full px-4 lg:px-10 py-2 lg:py-5 flex items-center justify-between lg:justify-start gap-4 lg:gap-16 transition-all ${scrolled ? 'scale-95 opacity-90' : 'scale-100'}`}>
          {/* Playful Logo & Status */}
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2 lg:gap-3 group cursor-pointer">
              <div className="w-8 h-8 lg:w-10 lg:h-10 bg-black text-white rounded-lg lg:rounded-xl flex items-center justify-center font-black text-base lg:text-xl shadow-pop group-hover:-rotate-12 transition-transform duration-500">
                Z
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-black text-lg lg:text-3xl tracking-tighter text-foreground uppercase italic leading-none">ZORVIA</span>
                <div className="hidden xs:flex items-center gap-2 mt-1">
                   <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_#22c55e]" />
                   <span className="text-[8px] lg:text-[9px] font-black uppercase tracking-[0.2em] text-muted-foreground whitespace-nowrap">STATUS: SYNCED // BLR-SF</span>
                </div>
              </div>
            </Link>
          </div>

          <div className="hidden lg:flex items-center gap-10 font-sans font-black text-xs uppercase tracking-[0.2em] text-foreground">
            {navLinks.map((link) => (
              <Magnetic key={link.name} strength={0.25}>
                <Link to={link.url} className={`${link.color} transition-colors px-2 py-1 block`}>
                  {link.name}
                </Link>
              </Magnetic>
            ))}
          </div>

          <div className="flex items-center gap-2 lg:gap-4">
            <Link to="/start-project" className="hidden xs:block">
              <Magnetic strength={0.3}>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-foreground text-white px-4 lg:px-8 py-2 lg:py-3 rounded-full font-black shadow-pop hover:shadow-none hover:translate-x-1 hover:translate-y-1 relative overflow-hidden group whitespace-nowrap border-2 border-foreground"
                >
                  <span className="relative z-10 text-[10px] lg:text-xs uppercase tracking-widest italic">Start Project</span>
                  <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </motion.button>
              </Magnetic>
            </Link>

            <Magnetic strength={0.1}>
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden w-10 h-10 lg:w-12 lg:h-12 border-2 border-foreground rounded-lg lg:rounded-xl flex items-center justify-center bg-white shadow-pop hover:bg-muted transition-colors z-50 pointer-events-auto"
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </Magnetic>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-[100] bg-white flex flex-col p-12 overflow-hidden"
          >
             {/* Background pattern */}
             <div className="absolute inset-0 bg-dot-grid opacity-20 pointer-events-none" />
             
             <div className="flex justify-between items-center mb-24 relative z-10">
                <span className="font-heading text-4xl font-black text-foreground italic uppercase underline decoration-primary decoration-8">Menu //</span>
                <Magnetic strength={0.2}>
                  <button 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-16 h-16 border-4 border-foreground rounded-full flex items-center justify-center bg-white shadow-pop"
                  >
                    <X size={32} />
                  </button>
                </Magnetic>
             </div>

             <div className="flex flex-col gap-8 relative z-10">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link 
                      to={link.url} 
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="font-heading font-black text-7xl text-foreground tracking-tighter flex items-center gap-6 group uppercase italic"
                    >
                      <span className="text-xl font-sans text-muted-foreground opacity-30 mt-6">{String(i + 1).padStart(2, '0')}</span>
                      <span className="group-hover:text-primary transition-colors group-hover:translate-x-4 duration-500">{link.name}</span>
                    </Link>
                  </motion.div>
                ))}
             </div>

             <div className="mt-auto relative z-10">
                <div className="flex flex-col gap-8 lg:flex-row lg:items-center justify-between">
                   <div className="flex gap-12">
                      <div className="flex flex-col gap-2">
                        <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Location</span>
                        <span className="font-bold text-sm">BLR // SF // DXB</span>
                      </div>
                      <div className="flex flex-col gap-2">
                        <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Contact</span>
                        <span className="font-bold text-sm">STRATEGY@ZORVIA.AGENCY</span>
                      </div>
                   </div>
                   
                   <Link to="/start-project" onClick={() => setIsMobileMenuOpen(false)} className="w-full lg:w-fit">
                      <button className="w-full lg:w-fit px-12 py-6 bg-secondary text-white border-4 border-foreground rounded-full font-heading font-black text-2xl uppercase tracking-tighter shadow-pop-lg hover:shadow-pop transition-all group overflow-hidden relative">
                        <span className="relative z-10">Initialize Growth</span>
                        <div className="absolute inset-0 bg-foreground translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                      </button>
                   </Link>
                </div>
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
