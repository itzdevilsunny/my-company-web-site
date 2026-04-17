import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Magnetic from '../ui/Magnetic';

const technologies = [
  // Featured (Initial View)
  { name: 'React', level: 'Frontend', color: 'bg-[#61DAFB]', icon: 'https://cdn.simpleicons.org/react/ffffff', featured: true },
  { name: 'Node.js', level: 'Backend', color: 'bg-[#339933]', icon: 'https://cdn.simpleicons.org/nodedotjs/ffffff', featured: true },
  { name: 'MongoDB', level: 'Database', color: 'bg-[#47A248]', icon: 'https://cdn.simpleicons.org/mongodb/ffffff', featured: true },
  { name: 'Next.js', level: 'Fullstack', color: 'bg-[#000000]', icon: 'https://cdn.simpleicons.org/nextdotjs/ffffff', featured: true },
  { name: 'AWS', level: 'Cloud', color: 'bg-[#FF9900]', icon: 'https://cdn.simpleicons.org/amazonwebservices/ffffff', featured: true },
  { name: 'Python', level: 'AI/Scripts', color: 'bg-[#3776AB]', icon: 'https://cdn.simpleicons.org/python/ffffff', featured: true },
  
  // The "+ 24 More" (Hidden initially)
  { name: 'TypeScript', level: 'Language', color: 'bg-[#3178C6]', icon: 'https://cdn.simpleicons.org/typescript/ffffff' },
  { name: 'Tailwind', level: 'Styling', color: 'bg-[#06B6D4]', icon: 'https://cdn.simpleicons.org/tailwindcss/ffffff' },
  { name: 'PostgreSQL', level: 'Database', color: 'bg-[#4169E1]', icon: 'https://cdn.simpleicons.org/postgresql/ffffff' },
  { name: 'Docker', level: 'DevOps', color: 'bg-[#2496ED]', icon: 'https://cdn.simpleicons.org/docker/ffffff' },
  { name: 'Kubernetes', level: 'DevOps', color: 'bg-[#326CE5]', icon: 'https://cdn.simpleicons.org/kubernetes/ffffff' },
  { name: 'Firebase', level: 'BaaS', color: 'bg-[#FFCA28]', icon: 'https://cdn.simpleicons.org/firebase/ffffff' },
  { name: 'Redis', level: 'Cache', color: 'bg-[#DC382D]', icon: 'https://cdn.simpleicons.org/redis/ffffff' },
  { name: 'GraphQL', level: 'API', color: 'bg-[#E10098]', icon: 'https://cdn.simpleicons.org/graphql/ffffff' },
  { name: 'Vite', level: 'Build Tool', color: 'bg-[#646CFF]', icon: 'https://cdn.simpleicons.org/vite/ffffff' },
  { name: 'Framer', level: 'Animation', color: 'bg-[#0055FF]', icon: 'https://cdn.simpleicons.org/framer/ffffff' },
  { name: 'Three.js', level: '3D/Webgl', color: 'bg-[#000000]', icon: 'https://cdn.simpleicons.org/threedotjs/ffffff' },
  { name: 'Stripe', level: 'Payments', color: 'bg-[#008CDD]', icon: 'https://cdn.simpleicons.org/stripe/ffffff' },
  { name: 'Clerk', level: 'Auth', color: 'bg-[#6C47FF]', icon: 'https://cdn.simpleicons.org/clerk/ffffff' },
  { name: 'Supabase', level: 'BaaS', color: 'bg-[#3ECF8E]', icon: 'https://cdn.simpleicons.org/supabase/ffffff' },
  { name: 'Vercel', level: 'Hosting', color: 'bg-[#000000]', icon: 'https://cdn.simpleicons.org/vercel/ffffff' },
  { name: 'Git', level: 'VCS', color: 'bg-[#F05032]', icon: 'https://cdn.simpleicons.org/git/ffffff' },
  { name: 'Figma', level: 'Design', color: 'bg-[#F24E1E]', icon: 'https://cdn.simpleicons.org/figma/ffffff' },
  { name: 'Postman', level: 'Testing', color: 'bg-[#FF6C37]', icon: 'https://cdn.simpleicons.org/postman/ffffff' },
  { name: 'Prisma', level: 'ORM', color: 'bg-[#2D3748]', icon: 'https://cdn.simpleicons.org/prisma/ffffff' },
  { name: 'Redux', level: 'State', color: 'bg-[#764ABC]', icon: 'https://cdn.simpleicons.org/redux/ffffff' },
  { name: 'Jest', level: 'Testing', color: 'bg-[#C21325]', icon: 'https://cdn.simpleicons.org/jest/ffffff' },
  { name: 'Cypress', level: 'E2E', color: 'bg-[#17202C]', icon: 'https://cdn.simpleicons.org/cypress/ffffff' },
  { name: 'Sentry', level: 'Monitor', color: 'bg-[#362D59]', icon: 'https://cdn.simpleicons.org/sentry/ffffff' },
  { name: 'Algolia', level: 'Search', color: 'bg-[#003DFF]', icon: 'https://cdn.simpleicons.org/algolia/ffffff' },
  { name: 'Cloudflare', level: 'Security', color: 'bg-[#F38020]', icon: 'https://cdn.simpleicons.org/cloudflare/ffffff' },
  { name: 'Netlify', level: 'Hosting', color: 'bg-[#00C7B7]', icon: 'https://cdn.simpleicons.org/netlify/ffffff' },
  { name: 'Playwright', level: 'Testing', color: 'bg-[#2EAD33]', icon: 'https://cdn.simpleicons.org/playwright/ffffff' },
  { name: 'FastAPI', level: 'Backend', color: 'bg-[#05998B]', icon: 'https://cdn.simpleicons.org/fastapi/ffffff' },
  { name: 'Rust', level: 'Systems', color: 'bg-[#000000]', icon: 'https://cdn.simpleicons.org/rust/ffffff' },
];

const TechStack = () => {
  const [showAll, setShowAll] = React.useState(false);
  const displayedTech = showAll ? technologies : technologies.filter(t => t.featured);

  return (
    <section className="px-6 lg:px-12 py-24 lg:py-32 bg-white relative overflow-hidden" id="tech-stack">
      {/* Background neon glow */}
      <div className="absolute left-0 top-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none translate-x-1/2 translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          <div className="relative sticky top-32">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-primary font-black text-sm uppercase tracking-[0.5em] mb-6 flex items-center gap-4"
            >
              <span className="w-12 h-1 bg-primary" /> The Innovation Stack
            </motion.div>
            <h2 className="text-4xl lg:text-6xl font-heading text-foreground tracking-tighter leading-[0.85] mb-8">
              Future-Proof <br />
              <span className="text-secondary italic underline decoration-foreground decoration-4 underline-offset-4">Architectures.</span>
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground font-sans font-medium mb-10 max-w-xl leading-relaxed">
              We leverage cloud-native technologies to build systems that aren't just fast, they're <span className="text-foreground font-black italic underline decoration-quaternary/40 underline-offset-4 decoration-4">unstoppable.</span>
            </p>
            
            <div className="flex flex-wrap gap-4">
              {['Scalable', 'Cloud-Native', 'AI-Ready', 'Edge Computing'].map((tag) => (
                <Magnetic key={tag} strength={0.1}>
                  <span className="px-6 py-3 bg-white border-2 border-foreground rounded-full text-xs font-black uppercase tracking-widest shadow-pop-sm hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-default">
                    {tag}
                  </span>
                </Magnetic>
              ))}
            </div>
          </div>

          <div>
             <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 lg:gap-8 mb-12">
               <motion.div layout className="contents">
                 <AnimatePresence mode="popLayout">
                   {displayedTech.map((tech) => (
                     <Magnetic key={tech.name} strength={0.4}>
                       <motion.div
                         layout
                         initial={{ opacity: 0, scale: 0.8 }}
                         animate={{ opacity: 1, scale: 1 }}
                         exit={{ opacity: 0, scale: 0.8 }}
                         transition={{ duration: 0.3 }}
                         className="group relative"
                       >
                         <div className={`p-5 lg:p-7 bg-white border-2 border-foreground rounded-[2rem] shadow-pop hover:shadow-pop transition-all flex flex-col items-center justify-center text-center h-full relative overflow-hidden`}>
                           <div className="absolute top-0 right-0 p-3 opacity-10 font-mono text-[8.5px] uppercase font-black tracking-tighter">{tech.level}</div>
                           <div className={`w-12 h-12 lg:w-14 lg:h-14 ${tech.color} border-2 border-foreground rounded-2xl flex items-center justify-center mb-4 lg:mb-5 shadow-pop transform -rotate-3 group-hover:rotate-0 transition-all duration-500`}>
                             <img src={tech.icon} alt={tech.name} className="w-6 h-6 lg:w-7 lg:h-7 object-contain" />
                           </div>
                           <h3 className="font-heading font-black text-xs lg:text-lg mb-1 tracking-tighter leading-none">{tech.name}</h3>
                           <div className="w-6 h-1 bg-foreground/10 rounded-full group-hover:w-16 transition-all" />
                         </div>
                       </motion.div>
                     </Magnetic>
                   ))}
                 </AnimatePresence>
               </motion.div>
             </div>

             <div className="flex justify-center">
                <Magnetic strength={0.2}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowAll(!showAll)}
                    className="flex flex-col items-center gap-3 px-10 py-8 border-2 border-foreground border-dashed rounded-[2.5rem] hover:bg-quaternary/5 transition-all group"
                  >
                    <div className={`w-12 h-12 rounded-2xl border-2 border-foreground flex items-center justify-center bg-white shadow-pop transition-all ${showAll ? 'rotate-180' : 'group-hover:rotate-12'}`}>
                      {showAll ? '↑' : '🚀'}
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground">
                      {showAll ? 'Show Featured Stack' : '+ 24 More Specialist Tools'}
                    </span>
                  </motion.button>
                </Magnetic>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
