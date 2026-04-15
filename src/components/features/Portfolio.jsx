import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Code2, Cpu, Globe, Smartphone, Loader2, AlertCircle, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from '../ui/Icons';
import AnimatedText from '../ui/AnimatedText';
import { supabase } from '../../lib/supabaseClient';
import { Link } from "react-router-dom";

const Portfolio = ({ teaser = false }) => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Web', 'App', 'AI'];

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data, error } = await supabase
          .from('portfolio_projects')
          .select('*')
          .order('created_at', { ascending: true });

        if (error) throw error;
        setProjects(data || []);
      } catch (err) {
        console.error("Error fetching portfolios:", err);
        setError("Failed to load strategic portfolio assets.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const filteredProjects = teaser
    ? projects.slice(0, 2)
    : filter === 'All'
      ? projects
      : projects.filter(p => p.category === filter);

  return (
    <section className="px-4 lg:px-12 py-16 lg:py-24 bg-white relative overflow-hidden" id="portfolio">
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#1E293B_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 lg:mb-16 gap-6 lg:gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-primary font-black text-[10px] lg:text-xs uppercase tracking-[0.3em] mb-3 lg:mb-4"
            >
              // Case Studies & Proofs
            </motion.div>
            <h2 className="text-3xl lg:text-5xl font-heading text-foreground tracking-tighter leading-none">
              Strategic <span className="text-secondary italic">Portfolio.</span>
            </h2>
          </div>

          {!teaser && !isLoading && !error && (
            <div className="flex bg-muted p-1 lg:p-2 rounded-xl lg:rounded-2xl border-2 border-foreground shadow-pop overflow-x-auto max-w-full hide-scrollbar">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-4 lg:px-6 py-1.5 lg:py-2 rounded-lg lg:rounded-xl font-heading font-black text-[10px] lg:text-xs uppercase transition-all whitespace-nowrap ${filter === cat ? 'bg-foreground text-white' : 'hover:bg-foreground/5'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}
        </div>

        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <Loader2 className="animate-spin text-secondary mb-4" size={32} lg:size={48} />
            <p className="font-heading font-black text-[8px] lg:text-[10px] uppercase tracking-widest text-muted-foreground">Parsing Infrastructure...</p>
          </div>
        ) : error ? (
          <div className="flex flex-col items-center justify-center py-20 text-secondary">
            <AlertCircle size={32} lg:size={48} className="mb-4" />
            <p className="font-heading font-black text-[10px] lg:text-xs uppercase tracking-widest">{error}</p>
          </div>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((p) => (
                <motion.div
                  key={p.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="group relative"
                >
                  <div className={`p-5 lg:p-7 border-2 border-foreground rounded-2xl lg:rounded-3xl bg-white shadow-pop hover:shadow-pop transition-all h-full flex flex-col`}>
                    <div className="flex justify-between items-start mb-6 lg:mb-8">
                      <div className={`p-2 lg:p-3 ${p.theme_color} border-2 border-foreground rounded-lg lg:rounded-xl shadow-pop transform -rotate-3 group-hover:rotate-0 transition-transform`}>
                        {p.category === 'AI' ? <Cpu className="text-white" size={18} lg:size={20} /> : p.category === 'Web' ? <Globe className="text-white" size={18} lg:size={20} /> : <Smartphone className="text-white" size={18} lg:size={20} />}
                      </div>
                      <div className="flex gap-2 lg:gap-3">
                        {p.github_url && p.github_url !== '#' && (
                          <a href={p.github_url} className="w-8 h-8 lg:w-10 lg:h-10 border-2 border-foreground rounded-lg flex items-center justify-center hover:bg-muted transition-colors shadow-pop">
                            <GithubIcon size={16} lg:size={18} />
                          </a>
                        )}
                        {p.demo_url && p.demo_url !== '#' && (
                          <a href={p.demo_url} className="w-8 h-8 lg:w-10 lg:h-10 border-2 border-foreground rounded-lg flex items-center justify-center bg-foreground text-white hover:bg-primary transition-colors shadow-pop">
                            <ExternalLink size={16} lg:size={18} />
                          </a>
                        )}
                      </div>
                    </div>

                    <h3 className="text-xl lg:text-2xl font-heading font-black mb-2 lg:mb-3 tracking-tight group-hover:text-primary transition-colors">{p.name}</h3>
                    <p className="text-xs lg:text-sm text-muted-foreground font-sans font-medium mb-4 lg:mb-6 leading-relaxed">
                      {p.description}
                    </p>

                    <div className="mt-auto flex flex-wrap gap-2">
                      {(p.tech_stack || []).map(t => (
                        <span key={t} className="px-3 lg:px-4 py-1 lg:py-1.5 bg-muted border-2 border-foreground/10 rounded-full text-[8px] lg:text-[10px] font-black uppercase tracking-widest">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {teaser && !isLoading && (
          <div className="mt-12 lg:mt-16 text-center">
            <Link to="/portfolio" className="w-full sm:w-auto inline-block">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 lg:px-10 py-4 lg:py-5 bg-foreground text-white border-2 border-foreground rounded-full font-heading font-black text-xs lg:text-base uppercase tracking-[0.2em] shadow-pop hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
              >
                View Full Portfolio
              </motion.button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
