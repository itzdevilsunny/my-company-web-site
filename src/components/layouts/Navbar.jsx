import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-[90%] lg:w-fit"
    >
      <div className="bg-white/80 backdrop-blur-md border-2 border-foreground shadow-pop rounded-full px-8 py-4 flex items-center gap-12">
        {/* Playful Logo */}
        <Link to="/" className="flex items-center gap-2 group cursor-pointer">
          <div className="w-8 h-8 bg-primary border-2 border-foreground rounded-sm rotate-12 group-hover:rotate-0 transition-transform shadow-pop" />
          <span className="font-heading font-black text-2xl tracking-tighter text-foreground">ZORVIA</span>
        </Link>

        <div className="hidden lg:flex items-center gap-8 font-sans font-bold text-sm uppercase tracking-widest text-foreground/70">
          <Link to="/#services" className="hover:text-primary transition-colors">Services</Link>
          <Link to="/#pricing" className="hover:text-secondary transition-colors">Pricing</Link>
          <Link to="/about" className="hover:text-tertiary transition-colors">About</Link>
          <Link to="/#why-us" className="hover:text-quaternary transition-colors">Why us</Link>
        </div>

        <Link to="/start-project">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-foreground text-white px-6 py-2 rounded-full font-bold shadow-pop hover:shadow-pop-active relative overflow-hidden group"
          >
            <span className="relative z-10">Start Project</span>
            <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </motion.button>
        </Link>
      </div>
    </motion.nav>
  );
};

export default Navbar;
