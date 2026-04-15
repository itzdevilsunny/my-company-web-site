import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Command, X, ArrowRight, Zap, Layout, Briefcase, User, MessageSquare, Send } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { sendMessageToMistral } from '../../lib/mistral';

const CommandPalette = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Namaste! I am the Zorvia Architect. I help visionary clients build the future. Need to see our work or start your own revolution?' }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const navigate = useNavigate();
  const chatEndRef = React.useRef(null);

  useEffect(() => {
    if (chatEndRef.current) {
        chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping]);

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

    const handleOpen = () => setIsOpen(true);
    
    document.addEventListener('keydown', down);
    window.addEventListener('open-command-palette', handleOpen);
    return () => {
        document.removeEventListener('keydown', down);
        window.removeEventListener('open-command-palette', handleOpen);
    };
  }, []);

  const handleSendMessage = async () => {
    if (!query.trim()) return;

    const userMessage = { role: 'user', content: query };
    setMessages(prev => [...prev, userMessage]);
    setQuery('');
    setIsTyping(true);

    try {
        const response = await sendMessageToMistral([...messages, userMessage]);
        if (response.error) {
            setMessages(prev => [...prev, { role: 'assistant', content: `System Error: ${response.error}` }]);
        } else {
            // Sanitize response to remove markdown artifacts (asterisks)
            const cleanContent = response.content.replace(/\*\*/g, '').replace(/\*/g, '');
            setMessages(prev => [...prev, { ...response, content: cleanContent }]);
        }
    } catch (error) {
        setMessages(prev => [...prev, { role: 'assistant', content: 'Apologies, my synaptic link is flickering. Please try again.' }]);
    } finally {
        setIsTyping(false);
    }
  };

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
        className="fixed bottom-10 right-10 z-[100] bg-white border-2 border-foreground shadow-pop p-4 rounded-2xl hover:bg-muted hover:shadow-pop-active transition-all group lg:flex hidden items-center gap-3"
      >
        <div className="w-10 h-10 bg-primary text-white rounded-xl flex items-center justify-center shadow-pop-sm group-hover:rotate-12 transition-transform">
            <Zap size={20} fill="currentColor" />
        </div>
        <span className="text-[10px] font-black uppercase tracking-widest flex items-center gap-1.5 pt-0.5">
            Press <kbd className="px-1.5 py-0.5 bg-muted border border-foreground/10 rounded">⌘K</kbd> to talk to AI
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
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white shrink-0">
                    <Zap size={16} fill="currentColor" />
                </div>
                <input
                  autoFocus
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && query.trim()) {
                        handleSendMessage();
                    }
                  }}
                  placeholder="Ask Zorvia Architect anything..."
                  className="bg-transparent border-none outline-none flex-grow font-heading font-black text-2xl placeholder:text-foreground/20 italic"
                />
                <button onClick={() => setIsOpen(false)} className="w-10 h-10 border-2 border-foreground rounded-xl flex items-center justify-center hover:bg-secondary hover:text-white transition-all shadow-pop-sm">
                  <X size={18} />
                </button>
              </div>

              <div className="flex-grow p-4 overflow-y-auto custom-scrollbar flex flex-col gap-4 max-h-[450px]">
                {messages.map((msg, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10, x: msg.role === 'user' ? 10 : -10 }}
                    animate={{ opacity: 1, y: 0, x: 0 }}
                    className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}
                  >
                    <div className={`max-w-[85%] p-4 rounded-2xl font-sans text-sm leading-relaxed border-2 ${
                        msg.role === 'user' 
                        ? 'bg-foreground text-white border-foreground rounded-tr-none shadow-pop-sm' 
                        : 'bg-muted/50 text-foreground border-foreground rounded-tl-none'
                    }`}>
                      {msg.content}
                    </div>
                  </motion.div>
                ))}

                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center gap-2 p-4 text-foreground/40 italic text-xs font-black uppercase tracking-widest"
                  >
                    <div className="flex gap-1">
                        <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1 }} className="w-1.5 h-1.5 bg-primary rounded-full" />
                        <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="w-1.5 h-1.5 bg-primary rounded-full" />
                        <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="w-1.5 h-1.5 bg-primary rounded-full" />
                    </div>
                    Architect is processing...
                  </motion.div>
                )}

                {messages.length === 1 && !isTyping && (
                    <div className="mt-4 space-y-3">
                        <p className="px-2 text-[10px] font-black uppercase tracking-[0.3em] text-foreground/30">Suggested Navigation</p>
                        <div className="flex flex-wrap gap-2">
                            {actions.map(action => (
                                <button
                                    key={action.id}
                                    onClick={() => handleAction(action.url)}
                                    className="px-4 py-2 bg-white border-2 border-slate-200 rounded-full text-[10px] font-black uppercase tracking-widest hover:border-foreground hover:bg-muted transition-all shadow-pop-sm flex items-center gap-2"
                                >
                                    {action.icon}
                                    {action.title}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
                <div ref={chatEndRef} />
              </div>

              <div className="p-4 bg-muted/30 border-t-4 border-foreground flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-foreground/40">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1.5">
                    <Send size={12} /> ENTER to send
                  </span>
                  <span>ESC to close</span>
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
