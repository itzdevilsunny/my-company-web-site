import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Command, X, ArrowRight, Zap, Layout, Briefcase, User, MessageSquare } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CommandPalette = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const actions = [
    { id: 'home', title: 'Home', icon: <User size={18} />, category: 'Navigation', shortcut: 'H', url: '/' },
    { id: 'designs', title: 'Theme Gallery', icon: <Layout size={18} />, category: 'Navigation', shortcut: 'D', url: '/designs' },
    { id: 'portfolio', title: 'Portfolio', icon: <Briefcase size={18} />, category: 'Navigation', shortcut: 'P', url: '/portfolio' },
    { id: 'start', title: 'Start Project', icon: <Zap size={18} />, category: 'Action', shortcut: 'S', url: '/start-project' },
    { id: 'contact', title: 'Contact Us', icon: <MessageSquare size={18} />, category: 'Action', shortcut: 'C', url: '/#contact' },
  ];

  const filteredActions = actions.filter(action => 
    action.title.toLowerCase().includes(query.toLowerCase()) || 
    action.category.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    const down = (e) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen((open) => !open);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  const handleAction = (url) => {
    setIsOpen(false);
    if (url.startsWith('/#')) {
        const element = document.getElementById(url.substring(2));
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        } else {
            navigate(url);
        }
    } else {
        navigate(url);
    }
    setQuery('');
  };

  return (
    <>
      {/* Floating Shortcut Trigger */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-10 left-10 z-[100] bg-white border-2 border-foreground shadow-pop p-4 rounded-2xl hover:bg-muted hover:shadow-pop-active transition-all group lg:flex hidden items-center gap-3"
      >
        <Command size={20} className="group-hover:rotate-12 transition-transform" />
        <span className="text-[10px] font-black uppercase tracking-widest flex items-center gap-1.5 pt-0.5">
            Press <kbd className="px-1.5 py-0.5 bg-muted border border-foreground/10 rounded">⌘K</kbd> to search
        </span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 10 }}
              className="relative w-full max-w-2xl bg-white border-4 border-foreground rounded-[2rem] shadow-pop-lg overflow-hidden flex flex-col"
            >
              <div className="p-6 border-b-4 border-foreground flex items-center gap-4 bg-muted/30">
                <Search className="text-foreground/40" />
                <input
                  autoFocus
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Where do we go?"
                  className="bg-transparent border-none outline-none flex-grow font-heading font-black text-2xl placeholder:text-foreground/20 italic"
                />
                <button onClick={() => setIsOpen(false)} className="w-10 h-10 border-2 border-foreground rounded-xl flex items-center justify-center hover:bg-secondary hover:text-white transition-all shadow-pop-sm">
                  <X size={18} />
                </button>
              </div>

              <div className="p-4 max-h-[400px] overflow-y-auto custom-scrollbar">
                {filteredActions.length === 0 ? (
                  <div className="p-10 text-center space-y-4">
                     <p className="font-heading font-black text-xl opacity-20">Zero Results Synchronized.</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {['Navigation', 'Action'].map(category => {
                      const categoryActions = filteredActions.filter(a => a.category === category);
                      if (categoryActions.length === 0) return null;
                      
                      return (
                        <div key={category} className="space-y-2">
                           <div className="px-4 text-[10px] font-black uppercase tracking-[0.3em] text-foreground/30">{category}</div>
                           <div className="grid grid-cols-1 gap-2">
                             {categoryActions.map(action => (
                               <button
                                 key={action.id}
                                 onClick={() => handleAction(action.url)}
                                 className="flex items-center justify-between p-4 rounded-2xl border-2 border-transparent hover:border-foreground hover:bg-muted/50 transition-all group"
                               >
                                 <div className="flex items-center gap-4">
                                   <div className="w-10 h-10 bg-white border-2 border-foreground rounded-xl flex items-center justify-center shadow-pop-sm group-hover:bg-primary group-hover:text-white transition-all group-hover:rotate-6">
                                     {action.icon}
                                   </div>
                                   <span className="font-heading font-black text-lg tracking-tight">{action.title}</span>
                                 </div>
                                 <div className="flex items-center gap-3">
                                   <kbd className="hidden sm:inline-block px-2 py-1 bg-white border-2 border-foreground rounded-lg text-[10px] font-black group-hover:bg-foreground group-hover:text-white transition-all">{action.shortcut}</kbd>
                                   <ArrowRight className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" size={18} />
                                 </div>
                               </button>
                             ))}
                           </div>
                        </div>
                      )
                    })}
                  </div>
                )}
              </div>

              <div className="p-6 bg-muted/30 border-t-4 border-foreground flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-foreground/40">
                <div className="flex gap-4">
                  <span>↓↑ Navigate</span>
                  <span>↵ Select</span>
                </div>
                <span>ZORVIA // ARCHITECT MODE</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style dangerouslySetInnerHTML={{ __html: `
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.1); border-radius: 10px; }
      `}} />
    </>
  );
};

export default CommandPalette;
