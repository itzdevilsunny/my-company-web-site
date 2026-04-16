import React, { useState, useMemo, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Sparkles, Layout, CheckCircle2, Search, Monitor, Smartphone, Tablet } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { themes } from '../data/themes';
import Magnetic from '../components/ui/Magnetic';
import MockupRenderer from '../components/features/design-selection/MockupRenderer';

const DesignSelection = () => {
  const navigate = useNavigate();
  const [selectedThemeId, setSelectedThemeId] = useState(() => {
    return localStorage.getItem('zorvia_selected_theme') || themes[0].id;
  });
  const [modeFilter, setModeFilter] = useState('All');
  const [typeFilter, setTypeFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [previewDevice, setPreviewDevice] = useState('desktop');
  const [showFilters, setShowFilters] = useState(false);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }, [selectedThemeId]);

  const selectedTheme = useMemo(() => 
    themes.find(t => t.id === selectedThemeId) || themes[0],
    [selectedThemeId]
  );

  const filteredThemes = useMemo(() => {
    return themes.filter(t => {
      const modeMatch = modeFilter === 'All' || t.mode === modeFilter;
      const typeMatch = typeFilter === 'All' || t.type === typeFilter;
      const searchMatch = t.name.toLowerCase().includes(searchTerm.toLowerCase());
      return modeMatch && typeMatch && searchMatch;
    });
  }, [modeFilter, typeFilter, searchTerm]);

  const handleSelectTheme = () => {
    localStorage.setItem('zorvia_selected_theme', selectedTheme.id);
    navigate('/start-project');
  };

  return (
    <div className="h-screen bg-background text-foreground overflow-hidden flex flex-col font-sans">
      {/* Top Filter Bar */}
      <header className="px-4 lg:px-6 py-2 lg:py-3 border-b border-slate-200 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 lg:gap-6 bg-white/80 backdrop-blur-md z-30 shadow-sm relative">
        <div className="flex items-center justify-between lg:justify-start gap-4 lg:gap-6">
          <div className="flex items-center gap-3 lg:gap-5">
            <Magnetic strength={0.2}>
              <Link to="/" className="flex items-center gap-2 lg:gap-3 px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-500 hover:text-foreground hover:bg-slate-100 transition-all group">
                <ArrowLeft size={14} lg:size={16} className="group-hover:-translate-x-1 transition-transform" />
                <span className="text-[10px] lg:text-[9px] font-black uppercase tracking-widest">Back</span>
              </Link>
            </Magnetic>
            
            <div className="hidden lg:block h-6 w-[1px] bg-slate-200" />

            {/* Mode Filters (Desktop) */}
            <div className="hidden lg:flex items-center gap-4">
                <div className="flex bg-slate-100 p-1 rounded-xl border border-slate-200 shadow-inner">
                  {['All', 'Light', 'Dark'].map(m => (
                    <button
                      key={m}
                      onClick={() => setModeFilter(m)}
                      className={`px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest transition-all ${modeFilter === m ? 'bg-white text-foreground shadow-sm' : 'text-slate-400 hover:text-foreground'}`}
                    >
                      {m}
                    </button>
                  ))}
                </div>
            </div>

            <div className="hidden lg:flex items-center gap-4">
                <div className="flex bg-slate-100 p-1 rounded-xl border border-slate-200 shadow-inner">
                  {['All', 'Sans', 'Serif', 'Mono'].map(t => (
                    <button
                      key={t}
                      onClick={() => setTypeFilter(t)}
                      className={`px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest transition-all ${typeFilter === t ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'text-slate-400 hover:text-foreground'}`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
            </div>
          </div>

          <div className="flex lg:hidden items-center gap-2">
             <button 
               onClick={() => setShowFilters(!showFilters)}
               className={`p-2 rounded-xl border-2 transition-all ${showFilters ? 'bg-primary text-white border-primary' : 'bg-slate-50 border-slate-200 text-slate-500'}`}
             >
                <Search size={16} />
             </button>
             <button
               onClick={handleSelectTheme}
               className="px-5 py-3 bg-foreground text-white rounded-xl font-heading font-black text-[10px] uppercase tracking-widest shadow-pop-sm active:scale-95 transition-all"
             >
                Confirm
             </button>
          </div>
        </div>

        {/* Mobile Filters Dropdown */}
        <AnimatePresence>
           {showFilters && (
             <motion.div 
               initial={{ height: 0, opacity: 0 }}
               animate={{ height: 'auto', opacity: 1 }}
               exit={{ height: 0, opacity: 0 }}
               className="lg:hidden flex flex-col gap-4 overflow-hidden bg-slate-50/50 p-4 rounded-2xl border border-slate-200"
             >
                <div className="flex items-center gap-3 px-4 py-3 bg-white rounded-xl border border-slate-200">
                   <Search size={14} className="text-slate-300" />
                   <input 
                     value={searchTerm}
                     onChange={(e) => setSearchTerm(e.target.value)}
                     placeholder="Search systems..." 
                     className="bg-transparent border-none outline-none text-[10px] font-bold uppercase tracking-widest placeholder:text-slate-300 w-full text-foreground"
                   />
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                   <div className="flex flex-col gap-2">
                      <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest ml-1">Mode //</span>
                      <div className="flex bg-white p-1 rounded-lg border border-slate-200">
                         {['All', 'Light', 'Dark'].map(m => (
                           <button
                             key={m}
                             onClick={() => setModeFilter(m)}
                             className={`flex-1 py-2 rounded text-[9px] font-black uppercase transition-all ${modeFilter === m ? 'bg-slate-100 text-foreground' : 'text-slate-400'}`}
                           >
                             {m}
                           </button>
                         ))}
                      </div>
                   </div>
                   <div className="flex flex-col gap-2">
                      <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest ml-1">Type //</span>
                      <div className="flex bg-white p-1 rounded-lg border border-slate-200">
                         {['All', 'Sans', 'Serif', 'Mono'].map(t => (
                           <button
                             key={t}
                             onClick={() => setTypeFilter(t)}
                             className={`flex-1 py-2 rounded text-[9px] font-black uppercase transition-all ${typeFilter === t ? 'bg-primary text-white' : 'text-slate-400'}`}
                           >
                             {t}
                           </button>
                         ))}
                      </div>
                   </div>
                </div>
             </motion.div>
           )}
        </AnimatePresence>

        <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-3 px-4 py-2 bg-slate-50 rounded-2xl border border-slate-200 focus-within:border-primary/50 transition-all">
               <Search size={12} className="text-slate-300" />
               <input 
                 value={searchTerm}
                 onChange={(e) => setSearchTerm(e.target.value)}
                 placeholder="Search themes..." 
                 className="bg-transparent border-none outline-none text-xs font-bold uppercase tracking-widest placeholder:text-slate-300 w-40 text-foreground"
               />
            </div>

            <Magnetic strength={0.3}>
              <button
                 onClick={handleSelectTheme}
                 className="px-6 py-2.5 bg-primary text-white rounded-full font-heading font-black text-[10px] uppercase tracking-widest shadow-pop hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all flex items-center gap-3 group"
              >
                 Confirm Selection
                 <Layout size={14} className="group-hover:rotate-12 transition-transform" />
              </button>
            </Magnetic>
        </div>
      </header>

      <main className="flex-grow flex flex-col lg:flex-row overflow-hidden relative">
        {/* Sidebar */}
        <aside className="w-full lg:w-[320px] h-auto lg:h-full border-b lg:border-b-0 lg:border-r border-slate-200 bg-white/50 backdrop-blur-sm flex flex-col transition-all z-20 overflow-hidden shrink-0">
          <div className="p-3 lg:p-4 lg:pb-2 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">
             <span>Library // {filteredThemes.length} matches</span>
          </div>
          
          <div className="flex-grow overflow-x-auto lg:overflow-y-auto custom-scrollbar p-3 lg:p-4 flex lg:flex-col gap-3 lg:space-y-3 whitespace-nowrap lg:whitespace-normal no-scrollbar lg:no-scrollbar">
            {filteredThemes.map((theme, index) => (
              <button
                key={theme.id}
                onClick={() => setSelectedThemeId(theme.id)}
                className={`flex-shrink-0 w-[160px] lg:w-full p-2.5 lg:p-3 rounded-lg lg:rounded-xl flex items-center justify-between group transition-all relative overflow-hidden ${
                  selectedThemeId === theme.id 
                    ? 'bg-white border-2 border-foreground shadow-pop-sm translate-x-[-1px] translate-y-[-1px]' 
                    : 'hover:bg-white border-2 border-transparent hover:border-slate-200 lg:hover:translate-x-[-1px] lg:hover:translate-y-[-1px]'
                }`}
              >
                <div className="flex items-center gap-2 lg:gap-3 relative z-10">
                   <div className={`w-8 h-8 lg:w-10 lg:h-10 rounded-lg flex items-center justify-center text-sm lg:text-base shadow-inner border transition-all ${selectedThemeId === theme.id ? 'border-primary/50 bg-primary/10 scale-95' : 'border-slate-100 bg-slate-50 group-hover:bg-slate-100'}`}>
                      {theme.icon}
                   </div>
                   <div className="text-left">
                      <h3 className={`text-[11px] lg:text-xs font-heading font-black mb-0.5 leading-tight tracking-tight ${selectedThemeId === theme.id ? 'text-foreground' : 'text-slate-500 group-hover:text-foreground/90'}`}>{theme.name}</h3>
                      <div className="flex items-center gap-1.5">
                         <span className="text-[7px] lg:text-[7px] font-black uppercase tracking-widest text-primary">{theme.type}</span>
                         <span className="w-0.5 h-0.5 rounded-full bg-slate-200" />
                         <span className="text-[7px] lg:text-[7px] font-black uppercase tracking-widest text-slate-400">{theme.mode}</span>
                      </div>
                   </div>
                </div>

                <div className="hidden lg:block relative z-10 opacity-20 group-hover:opacity-100 transition-all">
                  <span className="text-[8px] font-black tabular-nums text-foreground">{(index + 1).toString().padStart(2, '0')}</span>
                </div>

                {selectedThemeId === theme.id && (
                  <motion.div 
                    layoutId="active-nav-glow"
                    className="absolute inset-0 bg-primary/[0.03] pointer-events-none"
                  />
                )}
              </button>
            ))}
          </div>
        </aside>

        {/* Content Area */}
        <section className="flex-grow relative bg-slate-50/30 flex flex-col overflow-hidden">
          {/* Top Bar for Viewport Toggle (Responsive Width) */}
          <div className="p-3 lg:p-4 border-b border-slate-100 flex justify-center gap-4 lg:gap-6 bg-white/50 backdrop-blur-sm overflow-x-auto">
              {[
                { id: 'desktop', icon: <Monitor size={14} lg:size={16} /> },
                { id: 'tablet', icon: <Tablet size={14} lg:size={16} /> },
                { id: 'mobile', icon: <Smartphone size={14} lg:size={16} /> }
              ].map(d => (
                <button 
                  key={d.id}
                  onClick={() => setPreviewDevice(d.id)}
                  className={`p-2 rounded-lg lg:rounded-xl transition-all ${previewDevice === d.id ? 'bg-white text-primary shadow-pop-sm border-2 border-foreground translate-x-[-1px] translate-y-[-1px]' : 'text-slate-300 hover:text-foreground/50'}`}
                >
                  {d.icon}
                </button>
              ))}
          </div>

          <div 
            ref={scrollContainerRef}
            className="flex-grow p-4 lg:p-10 overflow-y-auto custom-scrollbar flex flex-col items-center"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedTheme.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="w-full max-w-5xl flex flex-col gap-6 lg:gap-10"
              >
                {/* Header Info */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 lg:gap-8 border-b border-slate-100 pb-6 lg:pb-10">
                   <div className="space-y-3 lg:space-y-4">
                      <div className="flex items-center gap-2 lg:gap-3">
                         <span className="px-2 lg:px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-lg text-[8px] lg:text-[9px] font-black uppercase tracking-[0.2em]">{selectedTheme.mode}</span>
                         <span className="px-2 lg:px-3 py-1 bg-slate-100 text-slate-500 border border-slate-200 rounded-lg text-[8px] lg:text-[9px] font-black uppercase tracking-[0.2em]">{selectedTheme.type} System</span>
                      </div>
                      <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-black tracking-tighter italic leading-none text-foreground">
                        {selectedTheme.name}
                      </h2>
                      <p className="text-sm lg:text-base text-slate-500 font-medium max-w-xl leading-relaxed">
                         {selectedTheme.description}
                      </p>
                      {selectedTheme.features && (
                        <div className="flex flex-wrap gap-1.5 lg:gap-2 pt-1">
                           {selectedTheme.features.map(f => (
                             <span key={f} className="px-2 lg:px-2.5 py-0.5 bg-white border border-slate-100 rounded-full text-[7px] lg:text-[8px] font-black uppercase tracking-widest text-slate-400">{f}</span>
                           ))}
                        </div>
                      )}
                   </div>
                   
                </div>

                {/* DYNAMIC REAL MOCKUP CONTAINER */}
                <div 
                  className={`transition-all duration-500 mx-auto w-full overflow-hidden`}
                >
                   <div className="bg-slate-900 border-b border-white/5 px-4 lg:px-6 py-2 lg:py-3 flex items-center justify-between gap-4 rounded-t-2xl lg:rounded-t-3xl shadow-xl">
                      <div className="flex gap-1 lg:gap-1.5">
                         <div className="w-2 h-2 rounded-full bg-[#FF5F57]" />
                         <div className="w-2 h-2 rounded-full bg-[#FFBC2E]" />
                         <div className="w-2 h-2 rounded-full bg-[#28C840]" />
                      </div>
                      <div className="px-4 lg:px-6 py-1 bg-white/5 rounded-lg text-[6px] lg:text-[7px] font-black uppercase tracking-[0.2em] text-white/30 border border-white/10 flex items-center gap-1.5 lg:gap-2">
                        <Sparkles size={8} lg:size={10} className="text-primary" />
                        zorvia.tech/preview/{selectedTheme.id}
                      </div>
                      <div className="w-6 lg:w-10" />
                   </div>

                   <div 
                    className={`min-h-[350px] lg:min-h-[550px] transition-all duration-500 rounded-b-2xl lg:rounded-b-3xl border-x border-b border-slate-200 relative overflow-hidden bg-white shadow-2xl flex items-center justify-center p-4 lg:p-0`}
                   >
                      <div className={`transition-all duration-500 h-full ${
                        previewDevice === 'desktop' ? 'w-full' : previewDevice === 'tablet' ? 'w-[768px]' : 'w-[375px]'
                      } origin-top scale-[0.55] sm:scale-100`}>
                        <MockupRenderer theme={selectedTheme} />
                      </div>
                   </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DesignSelection;
