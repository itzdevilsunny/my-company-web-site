import React, { useState, useMemo, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Sparkles, Layout, Search, Monitor, Smartphone, Tablet, SlidersHorizontal, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { themes } from '../data/themes';
import Magnetic from '../components/ui/Magnetic';
import MockupRenderer from '../components/features/design-selection/MockupRenderer';

// Natural widths the mockups were designed for
const NATURAL_WIDTHS = { desktop: 1280, tablet: 768, mobile: 375 };
const NATURAL_HEIGHT = 3000;

const DesignSelection = () => {
  const navigate = useNavigate();
  const [selectedThemeId, setSelectedThemeId] = useState(
    () => localStorage.getItem('zorvia_selected_theme') || themes[0].id
  );
  const [modeFilter, setModeFilter]   = useState('All');
  const [typeFilter, setTypeFilter]   = useState('All');
  const [searchTerm, setSearchTerm]   = useState('');
  const [previewDevice, setPreviewDevice] = useState('desktop');
  const [showFilters, setShowFilters] = useState(false);

  // Scaling refs
  const previewWrapRef = useRef(null);
  const [scale, setScale] = useState(1);

  const selectedTheme = useMemo(
    () => themes.find(t => t.id === selectedThemeId) || themes[0],
    [selectedThemeId]
  );

  const filteredThemes = useMemo(() =>
    themes.filter(t => {
      const modeMatch  = modeFilter === 'All' || t.mode === modeFilter;
      const typeMatch  = typeFilter === 'All' || t.type === typeFilter;
      const searchMatch = t.name.toLowerCase().includes(searchTerm.toLowerCase());
      return modeMatch && typeMatch && searchMatch;
    }),
    [modeFilter, typeFilter, searchTerm]
  );

  // Recalculate scale whenever device or container size changes
  const recalcScale = useCallback(() => {
    if (!previewWrapRef.current) return;
    const containerW = previewWrapRef.current.offsetWidth;
    const natural    = NATURAL_WIDTHS[previewDevice];
    setScale(Math.min(1, containerW / natural));
  }, [previewDevice]);

  useEffect(() => {
    recalcScale();
    window.addEventListener('resize', recalcScale);
    return () => window.removeEventListener('resize', recalcScale);
  }, [recalcScale]);

  const handleSelectTheme = () => {
    localStorage.setItem('zorvia_selected_theme', selectedTheme.id);
    navigate('/start-project');
  };

  const naturalW  = NATURAL_WIDTHS[previewDevice];
  const scaledH   = NATURAL_HEIGHT * scale;

  return (
    <div className="h-[100dvh] bg-background text-foreground flex flex-col font-sans overflow-hidden">

      {/* ── Compact Top Bar ── */}
      <header className="shrink-0 px-3 lg:px-6 py-2 border-b border-slate-200 bg-white/95 backdrop-blur-md z-30 shadow-sm">
        <div className="flex items-center gap-2">

          {/* Back */}
          <Link
            to="/"
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-500 hover:text-foreground transition-all group shrink-0"
          >
            <ArrowLeft size={13} className="group-hover:-translate-x-0.5 transition-transform" />
            <span className="text-[9px] font-black uppercase tracking-widest">Back</span>
          </Link>

          {/* Desktop mode/type filters */}
          <div className="hidden lg:flex items-center gap-2 flex-1">
            <div className="h-4 w-px bg-slate-200 mx-1" />
            <div className="flex bg-slate-100 p-0.5 rounded-xl border border-slate-200">
              {['All','Light','Dark'].map(m => (
                <button key={m} onClick={() => setModeFilter(m)}
                  className={`px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest transition-all ${modeFilter === m ? 'bg-white text-foreground shadow-sm' : 'text-slate-400 hover:text-foreground'}`}>
                  {m}
                </button>
              ))}
            </div>
            <div className="flex bg-slate-100 p-0.5 rounded-xl border border-slate-200">
              {['All','Sans','Serif','Mono'].map(t => (
                <button key={t} onClick={() => setTypeFilter(t)}
                  className={`px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest transition-all ${typeFilter === t ? 'bg-primary text-white shadow-sm' : 'text-slate-400 hover:text-foreground'}`}>
                  {t}
                </button>
              ))}
            </div>
            {/* Desktop search */}
            <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 rounded-xl border border-slate-200 focus-within:border-primary/40 ml-auto">
              <Search size={11} className="text-slate-300 shrink-0" />
              <input value={searchTerm} onChange={e => setSearchTerm(e.target.value)}
                placeholder="Search themes..."
                className="bg-transparent outline-none text-[10px] font-bold uppercase tracking-widest placeholder:text-slate-300 w-32 text-foreground" />
            </div>
          </div>

          {/* Spacer on mobile */}
          <div className="flex-1 lg:hidden" />

          {/* Mobile filter toggle */}
          <button onClick={() => setShowFilters(!showFilters)}
            className={`lg:hidden p-2 rounded-lg border transition-all ${showFilters ? 'bg-primary text-white border-primary' : 'bg-slate-50 border-slate-200 text-slate-500'}`}>
            {showFilters ? <X size={13} /> : <SlidersHorizontal size={13} />}
          </button>

          {/* Confirm */}
          <button onClick={handleSelectTheme}
            className="px-3 sm:px-4 py-1.5 bg-foreground text-white rounded-xl font-heading font-black text-[9px] uppercase tracking-widest shadow-pop-sm active:scale-95 transition-all flex items-center gap-1.5 shrink-0">
            <span className="hidden xs:inline sm:inline">Confirm</span>
            <Layout size={11} />
          </button>
        </div>

        {/* Mobile collapsible filters */}
        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.18 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="pt-2 flex flex-col gap-1.5">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 rounded-xl border border-slate-200">
                  <Search size={11} className="text-slate-300 shrink-0" />
                  <input value={searchTerm} onChange={e => setSearchTerm(e.target.value)}
                    placeholder="Search..."
                    className="bg-transparent outline-none text-[10px] font-bold uppercase tracking-widest placeholder:text-slate-300 w-full text-foreground" />
                </div>
                <div className="grid grid-cols-2 gap-1.5">
                  <div>
                    <p className="text-[7px] font-black text-slate-400 uppercase tracking-widest mb-1 px-0.5">Mode</p>
                    <div className="flex bg-white p-0.5 rounded-lg border border-slate-200">
                      {['All','Light','Dark'].map(m => (
                        <button key={m} onClick={() => setModeFilter(m)}
                          className={`flex-1 py-1 rounded text-[8px] font-black uppercase transition-all ${modeFilter === m ? 'bg-slate-100 text-foreground' : 'text-slate-400'}`}>
                          {m}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-[7px] font-black text-slate-400 uppercase tracking-widest mb-1 px-0.5">Type</p>
                    <div className="flex bg-white p-0.5 rounded-lg border border-slate-200">
                      {['All','Sans','Serif','Mono'].map(t => (
                        <button key={t} onClick={() => setTypeFilter(t)}
                          className={`flex-1 py-1 rounded text-[8px] font-black uppercase transition-all ${typeFilter === t ? 'bg-primary text-white' : 'text-slate-400'}`}>
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ── Body ── */}
      <main className="flex-1 flex flex-col lg:flex-row overflow-hidden min-h-0">

        {/* ── Theme List ── 
            Mobile: single compact horizontal row (no label row above it)
            Desktop: full vertical sidebar
        */}
        <aside className="shrink-0 lg:w-[280px] xl:w-[300px] border-b lg:border-b-0 lg:border-r border-slate-200 bg-white/70 flex flex-col min-h-0">

          {/* Count — desktop only */}
          <div className="hidden lg:flex px-4 py-2 border-b border-slate-100 bg-slate-50/80 shrink-0">
            <span className="text-[8px] font-black uppercase tracking-[0.25em] text-slate-400">
              Library // {filteredThemes.length} matches
            </span>
          </div>

          {/* Cards */}
          <div className="
            flex flex-row lg:flex-col
            gap-1.5 p-2
            overflow-x-auto lg:overflow-x-hidden
            overflow-y-hidden lg:overflow-y-auto
            snap-x snap-mandatory lg:snap-none
            no-scrollbar lg:flex-1 lg:min-h-0
          ">
            {/* Mobile count badge inline */}
            <div className="lg:hidden shrink-0 flex items-center px-1">
              <span className="text-[7px] font-black uppercase tracking-widest text-slate-400 whitespace-nowrap">
                {filteredThemes.length} themes
              </span>
            </div>

            {filteredThemes.map((theme, index) => (
              <button
                key={theme.id}
                onClick={() => setSelectedThemeId(theme.id)}
                className={`
                  snap-start shrink-0
                  w-[130px] sm:w-[144px] lg:w-full
                  p-2 lg:p-3 rounded-xl
                  flex items-center gap-2 lg:justify-between
                  transition-all relative overflow-hidden text-left border-2
                  ${selectedThemeId === theme.id
                    ? 'bg-white border-foreground shadow-pop-sm -translate-x-px -translate-y-px'
                    : 'border-transparent hover:bg-white hover:border-slate-200'}
                `}
              >
                <div className="flex items-center gap-1.5 min-w-0">
                  <div className={`
                    w-6 h-6 lg:w-8 lg:h-8 rounded-lg shrink-0
                    flex items-center justify-center text-xs shadow-inner border
                    ${selectedThemeId === theme.id ? 'border-primary/40 bg-primary/10' : 'border-slate-100 bg-slate-50'}
                  `}>
                    {theme.icon}
                  </div>
                  <div className="min-w-0">
                    <p className={`text-[9px] lg:text-[10px] font-heading font-black leading-tight tracking-tight truncate ${selectedThemeId === theme.id ? 'text-foreground' : 'text-slate-500'}`}>
                      {theme.name}
                    </p>
                    <div className="flex items-center gap-1">
                      <span className="text-[5px] lg:text-[6px] font-black uppercase tracking-widest text-primary">{theme.type}</span>
                    </div>
                  </div>
                </div>
                <span className="hidden lg:block text-[8px] font-black tabular-nums text-slate-300 shrink-0">
                  {(index + 1).toString().padStart(2, '0')}
                </span>
                {selectedThemeId === theme.id && (
                  <motion.div layoutId="active-card-hl"
                    className="absolute inset-0 bg-primary/[0.03] pointer-events-none rounded-xl" />
                )}
              </button>
            ))}
          </div>
        </aside>

        {/* ── Preview Pane ── */}
        <section className="flex-1 flex flex-col min-h-0 overflow-hidden bg-slate-50/40">

          {/* Device toggle — very compact */}
          <div className="shrink-0 px-3 py-1 border-b border-slate-100 bg-white/70 flex items-center justify-end">
            <div className="flex items-center gap-2 ml-auto">
              {[
                { id: 'desktop', icon: <Monitor size={12} /> },
                { id: 'tablet',  icon: <Tablet   size={12} /> },
                { id: 'mobile',  icon: <Smartphone size={12} /> },
              ].map(d => (
                <button key={d.id} onClick={() => setPreviewDevice(d.id)}
                  className={`p-1.5 rounded-lg transition-all ${
                    previewDevice === d.id
                      ? 'bg-white text-primary shadow-pop-sm border-2 border-foreground -translate-x-px -translate-y-px'
                      : 'text-slate-300 hover:text-slate-500'
                  }`}>
                  {d.icon}
                </button>
              ))}
            </div>
          </div>

          {/* Scrollable area */}
          <div className="flex-1 overflow-y-auto overflow-x-hidden no-scrollbar p-3 sm:p-4 lg:p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedTheme.id}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.22 }}
                className="w-full max-w-5xl mx-auto flex flex-col gap-4 lg:gap-8"
              >
                {/* Theme info — hidden on mobile to reduce congestion */}
                <div className="hidden lg:flex flex-col gap-2 pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 bg-primary/10 text-primary border border-primary/20 rounded-lg text-[8px] font-black uppercase tracking-widest">
                      {selectedTheme.mode}
                    </span>
                    <span className="px-2 py-0.5 bg-slate-100 text-slate-500 border border-slate-200 rounded-lg text-[8px] font-black uppercase tracking-widest">
                      {selectedTheme.type} System
                    </span>
                  </div>
                  <h2 className="text-4xl lg:text-5xl font-heading font-black tracking-tighter italic leading-none">
                    {selectedTheme.name}
                  </h2>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed max-w-lg">
                    {selectedTheme.description}
                  </p>
                  {selectedTheme.features && (
                    <div className="flex flex-wrap gap-1.5">
                      {selectedTheme.features.map(f => (
                        <span key={f} className="px-2 py-0.5 bg-white border border-slate-100 rounded-full text-[7px] font-black uppercase tracking-widest text-slate-400">{f}</span>
                      ))}
                    </div>
                  )}
                </div>

                {/* ── Browser chrome + scaled mockup ── */}
                <div className="w-full rounded-xl lg:rounded-2xl border border-slate-200 shadow-xl overflow-hidden">
                  {/* Browser toolbar */}
                  <div className="bg-slate-900 px-3 lg:px-5 py-2 flex items-center justify-between gap-2 shrink-0">
                    <div className="flex gap-1 shrink-0">
                      <div className="w-2 h-2 rounded-full bg-[#FF5F57]" />
                      <div className="w-2 h-2 rounded-full bg-[#FFBC2E]" />
                      <div className="w-2 h-2 rounded-full bg-[#28C840]" />
                    </div>
                    <div className="flex-1 max-w-xs mx-auto px-2 py-0.5 bg-white/5 rounded text-[7px] font-mono uppercase tracking-widest text-white/30 border border-white/10 flex items-center gap-1 justify-center truncate">
                      <Sparkles size={6} className="text-primary shrink-0" />
                      <span className="truncate">zorvia.tech/preview/{selectedTheme.id}</span>
                    </div>
                    <div className="w-8 shrink-0" />
                  </div>

                  {/* ── Scaled mockup viewport ── */}
                  <div
                    ref={previewWrapRef}
                    className="w-full bg-white overflow-y-auto overflow-x-hidden no-scrollbar"
                    style={{ height: scaledH || 500 }}
                  >
                    <div
                      style={{
                        width: naturalW,
                        height: NATURAL_HEIGHT,
                        transform: `scale(${scale})`,
                        transformOrigin: 'top center',
                        margin: '0 auto'
                      }}
                    >
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
