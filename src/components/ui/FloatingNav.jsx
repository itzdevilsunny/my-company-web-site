import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Magnetic from './Magnetic';

const FloatingNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Hide on pages that have their own specific navigation paradigms
  const isNoChromePage = ['/admin', '/dashboard', '/zorvia-hq', '/employee-login'].includes(location.pathname);

  if (isNoChromePage) return null;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="fixed bottom-8 left-8 z-[90] flex items-center gap-3"
    >
      <Magnetic strength={0.2}>
        <button
          onClick={() => navigate(-1)}
          className="w-12 h-12 lg:w-14 lg:h-14 bg-white/90 backdrop-blur-xl border-2 border-foreground rounded-full flex items-center justify-center shadow-pop text-foreground hover:bg-foreground hover:text-white transition-all group active:translate-y-1 active:shadow-none"
          title="Go Back"
        >
          <ArrowLeft size={20} strokeWidth={2.5} className="group-hover:-translate-x-1 transition-transform duration-300" />
        </button>
      </Magnetic>
      
      <Magnetic strength={0.2}>
        <button
          onClick={() => navigate(1)}
          className="w-12 h-12 lg:w-14 lg:h-14 bg-white/90 backdrop-blur-xl border-2 border-foreground rounded-full flex items-center justify-center shadow-pop text-foreground hover:bg-foreground hover:text-white transition-all group active:translate-y-1 active:shadow-none"
          title="Go Forward"
        >
          <ArrowRight size={20} strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform duration-300" />
        </button>
      </Magnetic>
    </motion.div>
  );
};

export default FloatingNav;
