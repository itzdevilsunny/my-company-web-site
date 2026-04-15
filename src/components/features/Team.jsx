import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Loader2, AlertCircle, ArrowRight } from 'lucide-react';
import { LinkedinIcon, TwitterIcon, GithubIcon } from '../ui/Icons';
import { supabase } from '../../lib/supabaseClient';

const Team = ({ teaser = false }) => {
  const [team, setTeam] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const { data, error } = await supabase
          .from('team_members')
          .select('*')
          .order('created_at', { ascending: true }); // Keep original insertion order
        
        if (error) throw error;
        setTeam(data || []);
      } catch (err) {
        console.error("Error fetching team data:", err);
        setError("Failed to load human intelligence roster.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchTeam();
  }, []);

  const displayTeam = teaser ? team.slice(0, 3) : team;

  return (
    <section className="px-6 lg:px-12 py-16 lg:py-24 bg-white relative overflow-hidden" id="team">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-secondary font-black text-xs uppercase tracking-[0.4em] mb-4"
          >
            // Human Intelligence
          </motion.div>
          <h2 className="text-3xl lg:text-5xl font-heading text-foreground tracking-tighter leading-none mb-4">
            Meet the <span className="text-primary italic">Zorvians.</span>
          </h2>
          <p className="text-muted-foreground font-sans max-w-xl mx-auto font-medium">
            The collective of innovators, engineers, and designers building the future of digital products.
          </p>
        </div>

        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <Loader2 className="animate-spin text-primary mb-4" size={48} />
            <p className="font-heading font-black text-[10px] uppercase tracking-widest text-muted-foreground">Decoding Roster...</p>
          </div>
        ) : error ? (
          <div className="flex flex-col items-center justify-center py-20 text-secondary">
            <AlertCircle size={48} className="mb-4" />
            <p className="font-heading font-black text-xs uppercase tracking-widest">{error}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
            {displayTeam.map((member, i) => (
              <motion.div 
                key={member.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div className={`p-6 bg-white border-2 border-foreground rounded-3xl shadow-pop hover:shadow-pop transition-all flex flex-col items-center text-center h-full`}>
                  <div className={`w-24 h-24 rounded-2xl border-2 ${member.theme_color} shadow-pop mb-6 overflow-hidden group-hover:rotate-6 transition-transform flex-shrink-0 bg-muted`}>
                    <img src={member.image_url} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                  
                  <h3 className="text-xl font-heading font-black mb-1">{member.name}</h3>
                  <p className="text-primary font-black text-[10px] uppercase tracking-widest mb-4">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground text-xs font-bold leading-relaxed mb-8 flex-grow">
                    {member.bio}
                  </p>

                  <div className="flex gap-4">
                    {member.social_linkedin && member.social_linkedin !== '#' && (
                      <a href={member.social_linkedin} className="w-10 h-10 border-2 border-foreground rounded-xl flex items-center justify-center hover:bg-muted transition-colors shadow-pop-sm">
                        <LinkedinIcon size={16} />
                      </a>
                    )}
                    {member.social_github && member.social_github !== '#' && (
                       <a href={member.social_github} className="w-10 h-10 border-2 border-foreground rounded-xl flex items-center justify-center hover:bg-muted transition-colors shadow-pop-sm">
                         <GithubIcon size={16} />
                       </a>
                    )}
                    {member.social_twitter && member.social_twitter !== '#' && (
                       <a href={member.social_twitter} className="w-10 h-10 border-2 border-foreground rounded-xl flex items-center justify-center hover:bg-muted transition-colors shadow-pop-sm">
                         <TwitterIcon size={16} />
                       </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
            
            {teaser && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -10 }}
                className="hidden lg:flex"
              >
                <button 
                  onClick={() => window.location.href = '/about'}
                  className="w-full p-6 border-2 border-foreground border-dashed rounded-3xl flex flex-col items-center justify-center text-center hover:bg-muted transition-all group h-full"
                >
                  <div className="w-16 h-16 bg-muted rounded-2xl flex items-center justify-center mb-6 border-2 border-foreground group-hover:bg-primary group-hover:text-white transition-colors">
                    <Mail size={32} />
                  </div>
                  <h3 className="text-xl font-heading font-black mb-2 tracking-tight">Meet the Full Team</h3>
                  <p className="text-xs font-bold opacity-60">Architects, Developers & Designers</p>
                </button>
              </motion.div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Team;

