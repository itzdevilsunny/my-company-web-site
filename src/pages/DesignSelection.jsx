import React, { useState, useMemo } from 'react';
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
      <header className="px-8 py-4 border-b border-slate-200 flex items-center justify-between gap-6 bg-white/80 backdrop-blur-md z-30 shadow-sm">
        <div className="flex items-center gap-6">
          <Magnetic strength={0.2}>
            <Link to="/" className="flex items-center gap-3 px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-500 hover:text-foreground hover:bg-slate-100 transition-all group">
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
              <span className="text-[10px] font-black uppercase tracking-widest">Back to Site</span>
            </Link>
          </Magnetic>
          
          <div className="h-6 w-[1px] bg-slate-200" />

          {/* Mode Filters */}
          <div className="flex items-center gap-4">
              <div className="flex bg-slate-100 p-1 rounded-xl border border-slate-200 shadow-inner">
                {['All', 'Light', 'Dark'].map(m => (
                  <button
                    key={m}
                    onClick={() => setModeFilter(m)}
                    className={`px-4 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${modeFilter === m ? 'bg-white text-foreground shadow-sm scale-95' : 'text-slate-400 hover:text-foreground'}`}
                  >
                    {m}
                  </button>
                ))}
              </div>
          </div>

          <div className="flex items-center gap-4">
              <div className="flex bg-slate-100 p-1 rounded-xl border border-slate-200 shadow-inner">
                {['All', 'Sans', 'Serif', 'Mono'].map(t => (
                  <button
                    key={t}
                    onClick={() => setTypeFilter(t)}
                    className={`px-4 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${typeFilter === t ? 'bg-primary text-white shadow-lg shadow-primary/20 scale-95' : 'text-slate-400 hover:text-foreground'}`}
                  >
                    {t}
                  </button>
                ))}
              </div>
          </div>
        </div>

        <div className="flex items-center gap-8">
            <div className="flex items-center gap-4 px-6 py-2.5 bg-slate-50 rounded-2xl border border-slate-200 focus-within:border-primary/50 transition-all">
               <Search size={14} className="text-slate-300" />
               <input 
                 value={searchTerm}
                 onChange={(e) => setSearchTerm(e.target.value)}
                 placeholder="Search themes..." 
                 className="bg-transparent border-none outline-none text-[10px] font-bold uppercase tracking-widest placeholder:text-slate-300 w-48 text-foreground"
               />
            </div>

            <Magnetic strength={0.3}>
              <button
                 onClick={handleSelectTheme}
                 className="px-8 py-3 bg-primary text-white rounded-full font-heading font-black text-xs uppercase tracking-widest shadow-[0_8px_20px_-4px_rgba(139,92,246,0.3)] hover:shadow-[0_12px_25px_-4px_rgba(139,92,246,0.5)] transition-all flex items-center gap-3 group"
              >
                 Confirm Selection
                 <Layout size={16} className="group-hover:rotate-12 transition-transform" />
              </button>
            </Magnetic>
        </div>
      </header>

      <main className="flex-grow flex overflow-hidden relative">
        {/* Sidebar */}
        <aside className="w-[380px] border-r border-slate-200 bg-white/50 backdrop-blur-sm flex flex-col transition-all z-20">
          <div className="p-6 pb-2 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
             <span>System Library // {filteredThemes.length} matches</span>
          </div>
          
          <div className="flex-grow overflow-y-auto custom-scrollbar p-4 space-y-3">
            {filteredThemes.map((theme, index) => (
              <button
                key={theme.id}
                onClick={() => setSelectedThemeId(theme.id)}
                className={`w-full p-4 rounded-2xl flex items-center justify-between group transition-all relative overflow-hidden ${
                  selectedThemeId === theme.id 
                    ? 'bg-white border-2 border-foreground shadow-[4px_4px_0px_0px_#1E293B] translate-x-[-2px] translate-y-[-2px]' 
                    : 'hover:bg-white border-2 border-transparent hover:border-slate-200 hover:translate-x-[-1px] hover:translate-y-[-1px]'
                }`}
              >
                <div className="flex items-center gap-4 relative z-10">
                   <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl shadow-inner border transition-all ${selectedThemeId === theme.id ? 'border-primary/50 bg-primary/10 scale-95' : 'border-slate-100 bg-slate-50 group-hover:bg-slate-100'}`}>
                      {theme.icon}
                   </div>
                   <div className="text-left">
                      <h3 className={`text-sm font-heading font-black mb-0.5 leading-tight tracking-tight ${selectedThemeId === theme.id ? 'text-foreground' : 'text-slate-500 group-hover:text-foreground/90'}`}>{theme.name}</h3>
                      <div className="flex items-center gap-2">
                         <span className="text-[7px] font-black uppercase tracking-widest text-primary">{theme.type}</span>
                         <span className="w-1 h-1 rounded-full bg-slate-200" />
                         <span className="text-[7px] font-black uppercase tracking-widest text-slate-400">{theme.mode}</span>
                      </div>
                   </div>
                </div>

                <div className="relative z-10 opacity-20 group-hover:opacity-100 transition-all">
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
          {/* Top Bar for Viewport Toggle */}
          <div className="p-4 border-b border-slate-100 flex justify-center gap-6 bg-white/50 backdrop-blur-sm">
              {[
                { id: 'desktop', icon: <Monitor size={16} /> },
                { id: 'tablet', icon: <Tablet size={16} /> },
                { id: 'mobile', icon: <Smartphone size={16} /> }
              ].map(d => (
                <button 
                  key={d.id}
                  onClick={() => setPreviewDevice(d.id)}
                  className={`p-2 rounded-xl transition-all ${previewDevice === d.id ? 'bg-white text-primary shadow-pop-sm border-2 border-foreground translate-x-[-1px] translate-y-[-1px]' : 'text-slate-300 hover:text-foreground/50'}`}
                >
                  {d.icon}
                </button>
              ))}
          </div>

          <div className="flex-grow p-12 lg:p-20 overflow-y-auto custom-scrollbar flex flex-col items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedTheme.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="w-full max-w-6xl flex flex-col gap-12"
              >
                {/* Header Info */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border-b border-slate-100 pb-12">
                   <div className="space-y-4">
                      <div className="flex items-center gap-3">
                         <span className="px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-lg text-[9px] font-black uppercase tracking-[0.2em]">{selectedTheme.mode}</span>
                         <span className="px-3 py-1 bg-slate-100 text-slate-500 border border-slate-200 rounded-lg text-[9px] font-black uppercase tracking-[0.2em]">{selectedTheme.type} System</span>
                      </div>
                      <h2 className="text-6xl lg:text-8xl font-heading font-black tracking-tighter italic leading-none text-foreground">
                        {selectedTheme.name}
                      </h2>
                      <p className="text-xl text-slate-500 font-medium max-w-xl leading-relaxed">
                         {selectedTheme.description}
                      </p>
                      {selectedTheme.features && (
                        <div className="flex flex-wrap gap-2 pt-2">
                           {selectedTheme.features.map(f => (
                             <span key={f} className="px-3 py-1 bg-white border border-slate-100 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-400">{f}</span>
                           ))}
                        </div>
                      )}
                   </div>
                   
                   <div className="w-px h-24 bg-slate-100 hidden md:block" />
                   
                   <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                         <div className="text-[8px] font-black text-slate-300 uppercase mb-2">Typography</div>
                         <div className={`text-lg transition-all text-foreground ${selectedTheme.styles.font}`}>{selectedTheme.type} Stack</div>
                      </div>
                      <div className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                         <div className="text-[8px] font-black text-slate-300 uppercase mb-2">Core Token</div>
                         <div className="flex items-center gap-2">
                            <div className="w-4 h-4 rounded-full border border-slate-200" style={{ backgroundColor: selectedTheme.styles.primary }} />
                            <span className="text-xs uppercase font-mono tracking-tighter text-foreground">{selectedTheme.styles.primary}</span>
                         </div>
                      </div>
                   </div>
                </div>

                {/* DYNAMIC REAL MOCKUP CONTAINER */}
                <div 
                  className={`transition-all duration-500 mx-auto ${
                    previewDevice === 'desktop' ? 'w-full' : previewDevice === 'tablet' ? 'w-[768px]' : 'w-[375px]'
                  }`}
                >
                   <div className="bg-slate-900 border-b border-white/5 px-6 py-4 flex items-center justify-between gap-4 rounded-t-[2.5rem] shadow-xl">
                      <div className="flex gap-1.5">
                         <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                         <div className="w-2.5 h-2.5 rounded-full bg-[#FFBC2E]" />
                         <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
                      </div>
                      <div className="px-6 py-1 bg-white/5 rounded-lg text-[7px] font-black uppercase tracking-[0.3em] text-white/30 border border-white/10 flex items-center gap-2">
                        <Sparkles size={10} className="text-primary" />
                        zorvia.tech/preview/{selectedTheme.id}
                      </div>
                      <div className="w-10" />
                   </div>

                   <div 
                    className={`min-h-[650px] transition-all duration-500 rounded-b-[2.5rem] border-x border-b border-slate-200 relative overflow-hidden bg-white shadow-2xl`}
                   >
                      <MockupRenderer theme={selectedTheme} />
                   </div>
                </div>

                {/* Technical Meta Detail Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-20 border-t border-slate-100">
                   <div className="space-y-4">
                      <div className="w-10 h-10 rounded-xl bg-violet-50 flex items-center justify-center border-2 border-primary/20">
                         <Sparkles className="text-primary" size={16} />
                      </div>
                      <h5 className="font-heading font-black text-xl text-foreground">Architectural Integrity</h5>
                      <p className="text-slate-400 text-sm leading-relaxed">The {selectedTheme.name} system is engineered to maintain visual consistency across all possible component permutations.</p>
                   </div>
                   <div className="space-y-4">
                      <div className="w-10 h-10 rounded-xl bg-pink-50 flex items-center justify-center border-2 border-secondary/20">
                         <CheckCircle2 className="text-secondary" size={16} />
                      </div>
                      <h5 className="font-heading font-black text-xl text-foreground">Runtime Optimized</h5>
                      <p className="text-slate-400 text-sm leading-relaxed">Lightweight CSS variables and modern layout engines ensure sub-100ms LCP scores for this specific archetype.</p>
                   </div>
                   <div className="space-y-4">
                      <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center border-2 border-emerald-500/20">
                         <Monitor className="text-emerald-500" size={16} />
                      </div>
                      <h5 className="font-heading font-black text-xl text-foreground">Cross-Canvas Logic</h5>
                      <p className="text-slate-400 text-sm leading-relaxed">Hardware-accelerated layout transitions maintain 60FPS even when switching between complex design primitives.</p>
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
