import React, { useState, useMemo, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Sparkles, Layout, CheckCircle2, Search, Monitor, Smartphone, Tablet, SlidersHorizontal, X } from 'lucide-react';
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
  const cardListRef = useRef(null);

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
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

  // Scale the preview mockup based on device and container width
  const getPreviewContainerClass = () => {
    if (previewDevice === 'mobile') return 'max-w-[375px]';
    if (previewDevice === 'tablet') return 'max-w-[768px]';
    return 'w-full';
  };

  return (
    <div className="h-[100dvh] bg-background text-foreground flex flex-col font-sans overflow-hidden">

      {/* ── Top Nav Bar ── */}
      <header className="px-3 sm:px-4 lg:px-6 py-2 border-b border-slate-200 bg-white/90 backdrop-blur-md z-30 shadow-sm shrink-0">
        <div className="flex items-center justify-between gap-2">

          {/* Left: Back + brand */}
          <div className="flex items-center gap-2 min-w-0">
            <Link
              to="/"
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-500 hover:text-foreground hover:bg-slate-100 transition-all group shrink-0"
            >
              <ArrowLeft size={13} className="group-hover:-translate-x-0.5 transition-transform" />
              <span className="text-[9px] font-black uppercase tracking-widest">Back</span>
            </Link>

            {/* Desktop mode + type filters inline */}
            <div className="hidden lg:flex items-center gap-3 ml-2">
              <div className="h-5 w-px bg-slate-200" />
              <div className="flex bg-slate-100 p-0.5 rounded-xl border border-slate-200">
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
              <div className="flex bg-slate-100 p-0.5 rounded-xl border border-slate-200">
                {['All', 'Sans', 'Serif', 'Mono'].map(t => (
                  <button
                    key={t}
                    onClick={() => setTypeFilter(t)}
                    className={`px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest transition-all ${typeFilter === t ? 'bg-primary text-white shadow-sm' : 'text-slate-400 hover:text-foreground'}`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right: search (desktop) + filter toggle (mobile) + confirm */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Desktop search */}
            <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 bg-slate-50 rounded-xl border border-slate-200 focus-within:border-primary/50 transition-all">
              <Search size={11} className="text-slate-300 shrink-0" />
              <input
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                placeholder="Search themes..."
                className="bg-transparent border-none outline-none text-[10px] font-bold uppercase tracking-widest placeholder:text-slate-300 w-32 text-foreground"
              />
            </div>

            {/* Mobile filter toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`lg:hidden p-2 rounded-lg border transition-all ${showFilters ? 'bg-primary text-white border-primary' : 'bg-slate-50 border-slate-200 text-slate-500'}`}
            >
              {showFilters ? <X size={14} /> : <SlidersHorizontal size={14} />}
            </button>

            {/* Confirm button — compact on mobile */}
            <button
              onClick={handleSelectTheme}
              className="px-3 sm:px-5 py-2 bg-foreground text-white rounded-xl font-heading font-black text-[9px] sm:text-[10px] uppercase tracking-widest shadow-pop-sm active:scale-95 transition-all flex items-center gap-1.5"
            >
              <span className="hidden sm:inline">Confirm Selection</span>
              <span className="sm:hidden">Confirm</span>
              <Layout size={11} />
            </button>
          </div>
        </div>

        {/* Mobile filters panel */}
        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="pt-2 pb-1 flex flex-col gap-2">
                {/* Search */}
                <div className="flex items-center gap-2 px-3 py-2 bg-slate-50 rounded-xl border border-slate-200">
                  <Search size={12} className="text-slate-300 shrink-0" />
                  <input
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                    placeholder="Search systems..."
                    className="bg-transparent border-none outline-none text-[10px] font-bold uppercase tracking-widest placeholder:text-slate-300 w-full text-foreground"
                  />
                </div>
                {/* Mode + Type in grid */}
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex flex-col gap-1">
                    <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest px-1">Mode //</span>
                    <div className="flex bg-white p-0.5 rounded-lg border border-slate-200">
                      {['All', 'Light', 'Dark'].map(m => (
                        <button
                          key={m}
                          onClick={() => setModeFilter(m)}
                          className={`flex-1 py-1.5 rounded text-[8px] font-black uppercase transition-all ${modeFilter === m ? 'bg-slate-100 text-foreground' : 'text-slate-400'}`}
                        >
                          {m}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest px-1">Type //</span>
                    <div className="flex bg-white p-0.5 rounded-lg border border-slate-200">
                      {['All', 'Sans', 'Serif', 'Mono'].map(t => (
                        <button
                          key={t}
                          onClick={() => setTypeFilter(t)}
                          className={`flex-1 py-1.5 rounded text-[8px] font-black uppercase transition-all ${typeFilter === t ? 'bg-primary text-white' : 'text-slate-400'}`}
                        >
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

      {/* ── Main Body ── */}
      <main className="flex-1 flex flex-col lg:flex-row overflow-hidden min-h-0">

        {/* ── Sidebar / Theme Carousel ──
            Mobile: horizontal snap scroll row at top
            Desktop: vertical scrolling sidebar
        */}
        <aside className="shrink-0 lg:w-[300px] xl:w-[320px] border-b lg:border-b-0 lg:border-r border-slate-200 bg-white/60 backdrop-blur-sm flex flex-col min-h-0">
          {/* Count bar */}
          <div className="px-3 py-1.5 border-b border-slate-100 bg-slate-50/80 shrink-0">
            <span className="text-[8px] font-black uppercase tracking-[0.25em] text-slate-400">
              Library // {filteredThemes.length} matches
            </span>
          </div>

          {/* Cards — horizontal on mobile, vertical on desktop */}
          <div
            ref={cardListRef}
            className="
              flex flex-row lg:flex-col
              gap-2 p-2 lg:p-3
              overflow-x-auto lg:overflow-x-hidden
              overflow-y-hidden lg:overflow-y-auto
              snap-x snap-mandatory lg:snap-none
              no-scrollbar
              lg:flex-1 lg:min-h-0
            "
          >
            {filteredThemes.map((theme, index) => (
              <button
                key={theme.id}
                onClick={() => setSelectedThemeId(theme.id)}
                className={`
                  snap-start shrink-0
                  w-[148px] sm:w-[160px] lg:w-full
                  p-2.5 lg:p-3 rounded-xl
                  flex items-center gap-2 lg:gap-3 lg:justify-between
                  transition-all relative overflow-hidden text-left
                  ${selectedThemeId === theme.id
                    ? 'bg-white border-2 border-foreground shadow-pop-sm -translate-x-px -translate-y-px'
                    : 'border-2 border-transparent hover:bg-white hover:border-slate-200'}
                `}
              >
                <div className="flex items-center gap-2 min-w-0">
                  <div className={`
                    w-8 h-8 lg:w-9 lg:h-9 rounded-lg shrink-0
                    flex items-center justify-center text-sm shadow-inner border transition-all
                    ${selectedThemeId === theme.id ? 'border-primary/40 bg-primary/10' : 'border-slate-100 bg-slate-50'}
                  `}>
                    {theme.icon}
                  </div>
                  <div className="text-left min-w-0">
                    <h3 className={`text-[10px] lg:text-[11px] font-heading font-black leading-tight tracking-tight truncate ${selectedThemeId === theme.id ? 'text-foreground' : 'text-slate-500'}`}>
                      {theme.name}
                    </h3>
                    <div className="flex items-center gap-1">
                      <span className="text-[7px] font-black uppercase tracking-widest text-primary">{theme.type}</span>
                      <span className="w-0.5 h-0.5 rounded-full bg-slate-300 shrink-0" />
                      <span className="text-[7px] font-black uppercase tracking-widest text-slate-400">{theme.mode}</span>
                    </div>
                  </div>
                </div>

                {/* Index number — desktop only */}
                <span className="hidden lg:block text-[8px] font-black tabular-nums text-slate-300 shrink-0">
                  {(index + 1).toString().padStart(2, '0')}
                </span>

                {selectedThemeId === theme.id && (
                  <motion.div
                    layoutId="active-card-highlight"
                    className="absolute inset-0 bg-primary/[0.03] pointer-events-none rounded-xl"
                  />
                )}
              </button>
            ))}
          </div>
        </aside>

        {/* ── Preview Content Area ── */}
        <section className="flex-1 flex flex-col min-h-0 overflow-hidden bg-slate-50/40">

          {/* Device toggle bar */}
          <div className="shrink-0 px-3 py-1.5 border-b border-slate-100 bg-white/60 backdrop-blur-sm flex items-center justify-center gap-3">
            {[
              { id: 'desktop', icon: <Monitor size={13} /> },
              { id: 'tablet',  icon: <Tablet  size={13} /> },
              { id: 'mobile',  icon: <Smartphone size={13} /> },
            ].map(d => (
              <button
                key={d.id}
                onClick={() => setPreviewDevice(d.id)}
                className={`p-1.5 rounded-lg transition-all ${
                  previewDevice === d.id
                    ? 'bg-white text-primary shadow-pop-sm border-2 border-foreground -translate-x-px -translate-y-px'
                    : 'text-slate-300 hover:text-slate-500'
                }`}
              >
                {d.icon}
              </button>
            ))}
          </div>

          {/* Scrollable content */}
          <div
            ref={scrollContainerRef}
            className="flex-1 overflow-y-auto overflow-x-hidden no-scrollbar p-3 sm:p-5 lg:p-8"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedTheme.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="w-full max-w-5xl mx-auto flex flex-col gap-5 lg:gap-8"
              >
                {/* Theme meta header */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 pb-4 border-b border-slate-100">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="px-2 py-0.5 bg-primary/10 text-primary border border-primary/20 rounded-lg text-[8px] font-black uppercase tracking-widest">
                        {selectedTheme.mode}
                      </span>
                      <span className="px-2 py-0.5 bg-slate-100 text-slate-500 border border-slate-200 rounded-lg text-[8px] font-black uppercase tracking-widest">
                        {selectedTheme.type} System
                      </span>
                    </div>
                    <h2 className="text-2xl sm:text-4xl lg:text-5xl font-heading font-black tracking-tighter italic leading-none text-foreground">
                      {selectedTheme.name}
                    </h2>
                    <p className="text-sm text-slate-500 font-medium leading-relaxed max-w-lg">
                      {selectedTheme.description}
                    </p>
                    {selectedTheme.features && (
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {selectedTheme.features.map(f => (
                          <span
                            key={f}
                            className="px-2 py-0.5 bg-white border border-slate-100 rounded-full text-[7px] font-black uppercase tracking-widest text-slate-400"
                          >
                            {f}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* ── Browser Chrome + Mockup ── */}
                <div className="w-full overflow-hidden rounded-2xl border border-slate-200 shadow-xl">
                  {/* Browser top bar */}
                  <div className="bg-slate-900 px-3 sm:px-5 py-2 flex items-center justify-between gap-3 rounded-t-2xl">
                    <div className="flex gap-1.5 shrink-0">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#FFBC2E]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
                    </div>
                    <div className="flex-1 max-w-xs mx-auto px-3 py-1 bg-white/5 rounded-md text-[7px] sm:text-[8px] font-black uppercase tracking-widest text-white/30 border border-white/10 flex items-center gap-1.5 justify-center truncate">
                      <Sparkles size={7} className="text-primary shrink-0" />
                      <span className="truncate">zorvia.tech/preview/{selectedTheme.id}</span>
                    </div>
                    <div className="w-10 shrink-0" />
                  </div>

                  {/* Mockup viewport — scales with device selector */}
                  <div className="bg-white flex items-start justify-center overflow-hidden min-h-[260px] sm:min-h-[340px] lg:min-h-[480px]">
                    <div
                      className={`
                        transition-all duration-500 w-full h-full
                        ${previewDevice === 'mobile'  ? 'max-w-[375px]'  : ''}
                        ${previewDevice === 'tablet'  ? 'max-w-[768px]'  : ''}
                        ${previewDevice === 'desktop' ? 'max-w-full'     : ''}
                      `}
                      style={{
                        minHeight: previewDevice === 'mobile' ? 600 : previewDevice === 'tablet' ? 500 : 480
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
