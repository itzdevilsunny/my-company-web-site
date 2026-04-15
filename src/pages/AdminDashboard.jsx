import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { supabaseAdmin as supabase } from '../lib/supabaseAdminClient';
import { themes } from '../data/themes';
import { 
  BarChart3, 
  Users, 
  Layers, 
  RefreshCcw, 
  Trash2, 
  ChevronRight, 
  ShieldCheck, 
  Briefcase, 
  ExternalLink, 
  MessageSquare, 
  Search, 
  Filter, 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  Plus,
  X
} from 'lucide-react';

const ACCESS_KEY = "ZORVIA_HQ_2026";

const AdminDashboard = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [accessKey, setAccessKey] = useState("");
  const [activeTab, setActiveTab] = useState('inquiries'); // inquiries, updates, team, portfolio
  const [employeeId, setEmployeeId] = useState(null);
  
  const [inquiries, setInquiries] = useState([]);
  const [applications, setApplications] = useState([]);
  const [updates, setUpdates] = useState([]);
  const [team, setTeam] = useState([]);
  const [portfolio, setPortfolio] = useState([]);
  
  const [isLoading, setIsLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);

  useEffect(() => {
    const isEmployeeAuth = localStorage.getItem('zorvia_employee_auth') === 'true';
    const storedId = localStorage.getItem('zorvia_employee_id');
    if (isEmployeeAuth) {
      setIsAuthorized(true);
      setEmployeeId(storedId);
    }
  }, []);

  // Form states
  const [teamForm, setTeamForm] = useState({ name: '', role: '', bio: '', image_url: '', theme_color: 'border-primary', linkedin: '', github: '', twitter: '' });
  const [portfolioForm, setPortfolioForm] = useState({ name: '', category: 'Web', description: '', tech_stack: '', demo_url: '', github_url: '', theme_color: 'bg-primary' });

  useEffect(() => {
    if (isAuthorized) {
      fetchData();
    }
  }, [isAuthorized]);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const [inqRes, appRes, updRes, teamRes, portRes] = await Promise.all([
        supabase.from('project_inquiries').select('*').order('created_at', { ascending: false }),
        supabase.from('job_applications').select('*').order('created_at', { ascending: false }),
        supabase.from('strategic_updates').select('*').order('created_at', { ascending: false }),
        supabase.from('team_members').select('*').order('created_at', { ascending: false }),
        supabase.from('portfolio_projects').select('*').order('created_at', { ascending: false })
      ]);

      setInquiries(inqRes.data || []);
      setApplications(appRes.data || []);
      setUpdates(updRes.data || []);
      setTeam(teamRes.data || []);
      setPortfolio(portRes.data || []);
    } catch (err) {
      console.error("Error fetching data:", err);
      setErrorMsg("Cloud synchronization failed. Please verify your connection.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (table, id) => {
    if (!window.confirm("Are you certain you want to purge this record? This action is irreversible.")) return;
    
    try {
      const { error } = await supabase.from(table).delete().eq('id', id);
      if (error) throw error;
      fetchData();
      setSelectedItem(null);
    } catch (err) {
      alert("Purge failed. Check console for details.");
    }
  };

  const handleStatusChange = async (id, newStatus) => {
    try {
      const { error } = await supabase
        .from('project_inquiries')
        .update({ status: newStatus })
        .eq('id', id);
      
      if (error) throw error;
      fetchData();
      if (selectedItem && selectedItem.id === id) {
        setSelectedItem({ ...selectedItem, status: newStatus });
      }
    } catch (err) {
      alert("Status synchronization failed.");
    }
  };

  const handleAddTeam = async (e) => {
    e.preventDefault();
    if (!teamForm.name || !teamForm.role || !teamForm.bio || !teamForm.image_url) {
      alert('Validation Failed: All fields are required.');
      return;
    }
    try {
      const { error } = await supabase.from('team_members').insert([{
        name: teamForm.name,
        role: teamForm.role,
        bio: teamForm.bio,
        image_url: teamForm.image_url,
        theme_color: teamForm.theme_color,
        social_linkedin: teamForm.linkedin,
        social_github: teamForm.github,
        social_twitter: teamForm.twitter
      }]);
      if (error) throw error;
      fetchData();
      setShowAddForm(false);
      setTeamForm({ name: '', role: '', bio: '', image_url: '', theme_color: 'border-primary', linkedin: '', github: '', twitter: '' });
    } catch(err) {
      alert('Error adding team member.');
    }
  };

  const handleAddPortfolio = async (e) => {
    e.preventDefault();
    if (!portfolioForm.name || !portfolioForm.description || !portfolioForm.tech_stack) {
      alert('Validation Failed: Project identity and blueprints required.');
      return;
    }
    try {
      const techStackArray = portfolioForm.tech_stack.split(',').map(s => s.trim()).filter(Boolean);
      const { error } = await supabase.from('portfolio_projects').insert([{
        name: portfolioForm.name,
        category: portfolioForm.category,
        description: portfolioForm.description,
        tech_stack: techStackArray,
        demo_url: portfolioForm.demo_url,
        github_url: portfolioForm.github_url,
        theme_color: portfolioForm.theme_color
      }]);
      if (error) throw error;
      fetchData();
      setShowAddForm(false);
      setPortfolioForm({ name: '', category: 'Web', description: '', tech_stack: '', demo_url: '', github_url: '', theme_color: 'bg-primary' });
    } catch(err) {
      alert('Error adding portfolio project.');
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (accessKey === ACCESS_KEY) {
      setIsAuthorized(true);
    } else {
      alert("Access Denied: Invalid Security Key.");
    }
  };

  if (!isAuthorized) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-6 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-black to-black">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full p-12 bg-[#0A0A0A] border-4 border-foreground rounded-[3rem] shadow-pop relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-8 opacity-20">
             <ShieldCheck size={120} className="text-primary" />
          </div>
          <h2 className="text-3xl font-heading font-black mb-8 tracking-tighter text-white">ZORVIA<br/>COMMAND CENTER</h2>
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block font-heading text-[10px] uppercase font-black text-muted-foreground tracking-widest mb-3">Master Access Key</label>
              <input 
                type="password"
                value={accessKey}
                onChange={(e) => setAccessKey(e.target.value)}
                autoFocus
                className="w-full bg-black border-2 border-foreground rounded-2xl px-6 py-4 font-sans font-bold text-white shadow-pop focus:shadow-none transition-all outline-none"
                placeholder="••••••••••••"
              />
            </div>
            <button 
              type="submit"
              className="w-full py-5 bg-primary text-white font-heading font-black uppercase tracking-widest rounded-2xl shadow-pop hover:shadow-pop-active transition-all"
            >
              Initialize Access
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  const getActiveData = () => {
    if (activeTab === 'inquiries') return inquiries;
    if (activeTab === 'applications') return applications;
    if (activeTab === 'updates') return updates;
    if (activeTab === 'team') return team;
    if (activeTab === 'portfolio') return portfolio;
    return [];
  };

  const filteredItems = getActiveData().filter(item => 
    Object.values(item).some(val => String(val).toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-muted/30 flex flex-col lg:flex-row p-4 lg:p-8 gap-6 lg:gap-8">
      {/* Mobile Sidebar Toggle */}
      <div className="lg:hidden flex items-center justify-between bg-white border-2 border-foreground p-4 rounded-2xl shadow-pop">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-black text-white rounded-lg flex items-center justify-center font-black">Z</div>
          <span className="font-heading font-black uppercase text-sm tracking-tight">HQ Command</span>
        </div>
        <button 
          onClick={() => setShowMobileSidebar(!showMobileSidebar)}
          className="p-2 border-2 border-foreground rounded-lg bg-primary text-white"
        >
          {showMobileSidebar ? <X size={20} /> : <BarChart3 size={20} />}
        </button>
      </div>

      {/* Sidebar Navigation */}
      <aside className={`
        ${showMobileSidebar ? 'flex' : 'hidden'} lg:flex 
        fixed lg:relative inset-0 z-[60] lg:z-auto
        flex-col w-full lg:w-80 shrink-0 gap-8
        bg-muted/95 lg:bg-transparent p-6 lg:p-0
        overflow-y-auto lg:overflow-visible
      `}>
        <div className="lg:hidden absolute top-6 right-6">
           <button onClick={() => setShowMobileSidebar(false)} className="p-2 bg-white border-2 border-foreground rounded-full shadow-pop">
              <X size={24} />
           </button>
        </div>
        <div className="p-8 bg-white border-4 border-foreground rounded-[2.5rem] shadow-pop mb-8">
           <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white shadow-pop-sm">
                 <ShieldCheck size={24} />
              </div>
              <div>
                 <h1 className="font-heading font-black text-lg tracking-tight">{employeeId ? "Staff Portal" : "Admin Portal"}</h1>
                 <p className="text-[10px] font-black text-primary uppercase tracking-widest">{employeeId || "Master Control"}</p>
              </div>
           </div>

           <nav className="space-y-2">
              <button 
                onClick={() => { setActiveTab('inquiries'); setShowAddForm(false); }}
                className={`w-full flex items-center gap-3 px-6 py-4 rounded-2xl font-heading font-black text-xs uppercase transition-all ${activeTab === 'inquiries' ? 'bg-foreground text-white shadow-pop' : 'hover:bg-muted'}`}
              >
                <Layers size={18} /> Project Inquiries
              </button>
              <button 
                onClick={() => { setActiveTab('applications'); setShowAddForm(false); }}
                className={`w-full flex items-center gap-3 px-6 py-4 rounded-2xl font-heading font-black text-xs uppercase transition-all ${activeTab === 'applications' ? 'bg-foreground text-white shadow-pop' : 'hover:bg-muted'}`}
              >
                <Briefcase size={18} /> Job Applications
              </button>
              <button 
                onClick={() => { setActiveTab('updates'); setShowAddForm(false); }}
                className={`w-full flex items-center gap-3 px-6 py-4 rounded-2xl font-heading font-black text-xs uppercase transition-all ${activeTab === 'updates' ? 'bg-foreground text-white shadow-pop' : 'hover:bg-muted'}`}
              >
                <RefreshCcw size={18} /> Strategic Updates
              </button>
              <button 
                onClick={() => { setActiveTab('team'); setShowAddForm(false); }}
                className={`w-full flex items-center gap-3 px-6 py-4 rounded-2xl font-heading font-black text-xs uppercase transition-all ${activeTab === 'team' ? 'bg-foreground text-white shadow-pop' : 'hover:bg-muted'}`}
              >
                <Users size={18} /> Team Roster
              </button>
              <button 
                onClick={() => { setActiveTab('portfolio'); setShowAddForm(false); }}
                className={`w-full flex items-center gap-3 px-6 py-4 rounded-2xl font-heading font-black text-xs uppercase transition-all ${activeTab === 'portfolio' ? 'bg-foreground text-white shadow-pop' : 'hover:bg-muted'}`}
              >
                <Briefcase size={18} /> Portfolio Assets
              </button>
              
              <button 
                onClick={() => {
                  localStorage.removeItem('zorvia_employee_auth');
                  localStorage.removeItem('zorvia_employee_id');
                  setIsAuthorized(false);
                }}
                className="w-full flex items-center gap-3 px-6 py-4 rounded-2xl font-heading font-black text-[10px] uppercase text-red-500 hover:bg-red-500 hover:text-white transition-all border-2 border-dashed border-red-500/20 mt-12 group"
              >
                <Trash size={16} className="group-hover:rotate-12 transition-transform" /> 
                Decommission Session
              </button>
           </nav>
        </div>

        <div className="p-8 bg-foreground text-white border-4 border-foreground rounded-[2.5rem] shadow-pop">
           <h3 className="font-heading font-black uppercase text-[10px] tracking-widest mb-6 opacity-60">Fleet Overview</h3>
           <div className="space-y-6">
              <div className="flex justify-between items-end">
                 <div>
                    <p className="text-2xl font-heading font-black text-primary">{inquiries.length}</p>
                    <p className="text-[8px] font-black uppercase">Inquiries</p>
                 </div>
                 <div className="text-right">
                    <p className="text-2xl font-heading font-black text-secondary">{updates.length}</p>
                    <p className="text-[8px] font-black uppercase">Updates</p>
                 </div>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden flex">
                 <div className="h-full bg-primary" style={{ width: `${(inquiries.length / (inquiries.length + updates.length || 1)) * 100}%` }} />
                 <div className="h-full bg-secondary" style={{ width: `${(updates.length / (inquiries.length + updates.length || 1)) * 100}%` }} />
              </div>
              <div className="pt-4 border-t border-white/10 flex justify-between">
                  <div>
                    <p className="text-lg font-heading font-black text-white">{team.length}</p>
                    <p className="text-[8px] font-black uppercase opacity-60">Team</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-heading font-black text-white">{portfolio.length}</p>
                    <p className="text-[8px] font-black uppercase opacity-60">Projects</p>
                  </div>
              </div>
           </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-grow flex flex-col items-start w-full">
        {errorMsg && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            className="w-full bg-red-50 border-2 border-red-200 p-4 mb-6 rounded-2xl flex items-center justify-between text-red-600 font-bold text-sm"
          >
             <div className="flex items-center gap-3">
                <AlertCircle size={18} />
                {errorMsg}
             </div>
             <button onClick={() => setErrorMsg(null)} className="p-1 hover:bg-red-100 rounded-full transition-all">
                <X size={16} />
             </button>
          </motion.div>
        )}
        <div className="mb-8 flex flex-col md:flex-row gap-4 items-center justify-between w-full">
           <div className="relative flex-grow max-w-xl w-full group">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors" size={20} />
              <input 
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder={`Search ${activeTab}...`}
                className="w-full bg-white border-2 border-foreground rounded-[2rem] pl-16 pr-6 py-4 font-sans font-bold shadow-pop focus:shadow-none transition-all outline-none"
              />
           </div>
           
           <div className="flex gap-4">
             {(activeTab === 'team' || activeTab === 'portfolio') && (
               <button 
                 onClick={() => setShowAddForm(!showAddForm)} 
                 className={`px-6 py-4 border-2 border-foreground rounded-2xl font-heading font-black text-xs uppercase flex items-center gap-2 transition-all shadow-pop hover:shadow-none hover:translate-y-1 ${showAddForm ? 'bg-secondary text-white' : 'bg-primary text-white'}`}
               >
                 <Plus size={16} /> Add {activeTab === 'team' ? 'Member' : 'Project'}
               </button>
             )}
             <button 
               onClick={fetchData} 
               className="p-4 bg-white border-2 border-foreground rounded-2xl shadow-pop hover:shadow-none hover:translate-y-1 transition-all"
             >
                <RefreshCcw size={20} className={isLoading ? "animate-spin" : ""} />
             </button>
           </div>
        </div>

        {showAddForm && activeTab === 'team' && (
          <form onSubmit={handleAddTeam} className="w-full bg-white border-4 border-foreground rounded-[3rem] p-8 mb-8 shadow-pop-lg grid grid-cols-2 gap-6">
            <h3 className="col-span-2 text-2xl font-heading font-black">Add Team Member</h3>
            <input type="text" placeholder="Name" required value={teamForm.name} onChange={(e)=>setTeamForm({...teamForm, name: e.target.value})} className="p-4 border-2 border-foreground rounded-xl" />
            <input type="text" placeholder="Role" required value={teamForm.role} onChange={(e)=>setTeamForm({...teamForm, role: e.target.value})} className="p-4 border-2 border-foreground rounded-xl" />
            <input type="url" placeholder="Image URL" required value={teamForm.image_url} onChange={(e)=>setTeamForm({...teamForm, image_url: e.target.value})} className="col-span-2 p-4 border-2 border-foreground rounded-xl" />
            <textarea placeholder="Bio" required value={teamForm.bio} onChange={(e)=>setTeamForm({...teamForm, bio: e.target.value})} className="col-span-2 p-4 border-2 border-foreground rounded-xl" rows="3"></textarea>
            <input type="text" placeholder="LinkedIn URL" value={teamForm.linkedin} onChange={(e)=>setTeamForm({...teamForm, linkedin: e.target.value})} className="p-4 border-2 border-foreground rounded-xl" />
            <input type="text" placeholder="GitHub URL" value={teamForm.github} onChange={(e)=>setTeamForm({...teamForm, github: e.target.value})} className="p-4 border-2 border-foreground rounded-xl" />
            <input type="text" placeholder="Twitter URL" value={teamForm.twitter} onChange={(e)=>setTeamForm({...teamForm, twitter: e.target.value})} className="p-4 border-2 border-foreground rounded-xl" />
            <select value={teamForm.theme_color} onChange={(e)=>setTeamForm({...teamForm, theme_color: e.target.value})} className="p-4 border-2 border-foreground rounded-xl appearance-none">
              <option value="border-primary">Primary Color</option>
              <option value="border-secondary">Secondary Color</option>
              <option value="border-tertiary">Tertiary Color</option>
              <option value="border-quaternary">Quaternary Color</option>
            </select>
            <button type="submit" className="p-4 bg-primary text-white border-2 border-foreground rounded-xl font-heading font-black uppercase">Save Member</button>
          </form>
        )}

        {showAddForm && activeTab === 'portfolio' && (
          <form onSubmit={handleAddPortfolio} className="w-full bg-white border-4 border-foreground rounded-[3rem] p-8 mb-8 shadow-pop-lg grid grid-cols-2 gap-6">
            <h3 className="col-span-2 text-2xl font-heading font-black">Add Portfolio Project</h3>
            <input type="text" placeholder="Project Name" required value={portfolioForm.name} onChange={(e)=>setPortfolioForm({...portfolioForm, name: e.target.value})} className="p-4 border-2 border-foreground rounded-xl" />
            <select value={portfolioForm.category} onChange={(e)=>setPortfolioForm({...portfolioForm, category: e.target.value})} className="p-4 border-2 border-foreground rounded-xl appearance-none">
              <option value="Web">Web</option>
              <option value="App">App</option>
              <option value="AI">AI</option>
            </select>
            <textarea placeholder="Description" required value={portfolioForm.description} onChange={(e)=>setPortfolioForm({...portfolioForm, description: e.target.value})} className="col-span-2 p-4 border-2 border-foreground rounded-xl" rows="3"></textarea>
            <input type="text" placeholder="Tech Stack (comma separated)" required value={portfolioForm.tech_stack} onChange={(e)=>setPortfolioForm({...portfolioForm, tech_stack: e.target.value})} className="col-span-2 p-4 border-2 border-foreground rounded-xl" />
            <input type="url" placeholder="Demo URL" value={portfolioForm.demo_url} onChange={(e)=>setPortfolioForm({...portfolioForm, demo_url: e.target.value})} className="p-4 border-2 border-foreground rounded-xl" />
            <input type="url" placeholder="GitHub URL" value={portfolioForm.github_url} onChange={(e)=>setPortfolioForm({...portfolioForm, github_url: e.target.value})} className="p-4 border-2 border-foreground rounded-xl" />
            <select value={portfolioForm.theme_color} onChange={(e)=>setPortfolioForm({...portfolioForm, theme_color: e.target.value})} className="p-4 border-2 border-foreground rounded-xl appearance-none">
              <option value="bg-primary">Primary Color</option>
              <option value="bg-secondary">Secondary Color</option>
              <option value="bg-tertiary">Tertiary Color</option>
              <option value="bg-quaternary">Quaternary Color</option>
            </select>
            <button type="submit" className="p-4 bg-primary text-white border-2 border-foreground rounded-xl font-heading font-black uppercase">Save Project</button>
          </form>
        )}

        <div className="w-full bg-white border-4 border-foreground rounded-[3rem] shadow-pop overflow-hidden">
           <div className="overflow-x-auto w-full">
              <table className="w-full text-left border-collapse">
                 <thead>
                    <tr className="bg-muted/30 border-b-2 border-foreground">
                       <th className="px-8 py-6 font-heading font-black text-[10px] uppercase tracking-widest">
                         {activeTab === 'team' || activeTab === 'portfolio' ? 'Identifier' : activeTab === 'applications' ? 'Candidate' : 'Technological Lead'}
                       </th>
                       <th className="px-8 py-6 font-heading font-black text-[10px] uppercase tracking-widest">
                         {activeTab === 'team' ? 'Role' : activeTab === 'portfolio' ? 'Category' : activeTab === 'applications' ? 'Role Applied' : 'Contact Identity'}
                       </th>
                       <th className="px-8 py-6 font-heading font-black text-[10px] uppercase tracking-widest">
                         {activeTab === 'team' || activeTab === 'portfolio' ? 'Details' : activeTab === 'applications' ? 'Team' : 'Category'}
                       </th>
                       <th className="px-8 py-6 font-heading font-black text-[10px] uppercase tracking-widest min-w-[150px]">
                         {activeTab === 'team' || activeTab === 'portfolio' ? 'Links' : activeTab === 'applications' ? 'Phone' : 'Deployment Status'}
                       </th>
                       <th className="px-8 py-6 font-heading font-black text-[10px] uppercase tracking-widest">Time Sync</th>
                       <th className="px-8 py-6 font-heading font-black text-[10px] uppercase tracking-widest">Actions</th>
                    </tr>
                 </thead>
                 <tbody>
                    <AnimatePresence mode="popLayout">
                    {filteredItems.map((item) => (
                       <motion.tr 
                         key={item.id}
                         layout
                         initial={{ opacity: 0 }}
                         animate={{ opacity: 1 }}
                         exit={{ opacity: 0, scale: 0.95 }}
                         className="border-b border-foreground/5 hover:bg-muted/20 transition-colors group cursor-pointer"
                         onClick={() => activeTab === 'inquiries' || activeTab === 'updates' || activeTab === 'applications' ? setSelectedItem(item) : null}
                       >
                          <td className="px-8 py-6">
                             <p className="font-heading font-black tracking-tight">{item.name || (activeTab === 'updates' ? "Strategic Update" : "N/A")}</p>
                          </td>
                          <td className="px-8 py-6">
                             <p className="font-sans font-bold text-sm text-muted-foreground whitespace-nowrap">
                               {activeTab === 'team' ? item.role : activeTab === 'portfolio' ? item.category : activeTab === 'applications' ? item.role : item.email}
                             </p>
                          </td>
                          <td className="px-8 py-6">
                             {activeTab === 'team' || activeTab === 'portfolio' ? (
                                <p className="text-xs font-medium text-muted-foreground line-clamp-1 max-w-[200px]">{item.bio || item.description}</p>
                             ) : activeTab === 'applications' ? (
                                <span className="px-4 py-1.5 bg-secondary border-2 border-foreground/10 rounded-full text-[9px] font-black uppercase tracking-widest whitespace-nowrap text-white">
                                   {item.team || "N/A"}
                                </span>
                             ) : (
                                <span className="px-4 py-1.5 bg-quaternary border-2 border-foreground/10 rounded-full text-[9px] font-black uppercase tracking-widest whitespace-nowrap">
                                   {item.project_type || "Update"}
                                </span>
                             )}
                          </td>
                          <td className="px-8 py-6">
                             {activeTab === 'inquiries' ? (
                                <div className="flex items-center gap-2">
                                   <div className={`w-2 h-2 rounded-full ${item.status === 'contacted' ? 'bg-secondary' : item.status === 'active' ? 'bg-primary' : 'bg-muted-foreground'}`} />
                                   <p className="text-[10px] font-black uppercase opacity-60">{item.status || 'new'}</p>
                                </div>
                             ) : activeTab === 'applications' ? (
                                <p className="text-xs font-bold opacity-60">{item.phone}</p>
                             ) : activeTab === 'team' || activeTab === 'portfolio' ? (
                                <span className="text-xs font-bold text-primary max-w-xs block truncate pr-4 text-ellipsis overflow-hidden">Active</span>
                             ) : (
                                <span className="text-[10px] font-black uppercase opacity-40">N/A</span>
                             )}
                          </td>
                          <td className="px-8 py-6">
                             <p className="text-xs font-bold opacity-60 whitespace-nowrap">
                                {new Date(item.created_at).toLocaleDateString()}
                             </p>
                          </td>
                          <td className="px-8 py-6">
                             <button 
                               onClick={(e) => { 
                                 e.stopPropagation(); 
                                 const tableMapping = { 'inquiries': 'project_inquiries', 'applications': 'job_applications', 'updates': 'strategic_updates', 'team': 'team_members', 'portfolio': 'portfolio_projects' };
                                 handleDelete(tableMapping[activeTab], item.id); 
                               }}
                               className="p-2 text-muted-foreground hover:text-secondary hover:bg-secondary/10 rounded-lg transition-colors border-2 border-transparent hover:border-secondary"
                             >
                                <Trash2 size={16} />
                             </button>
                          </td>
                       </motion.tr>
                    ))}
                    </AnimatePresence>
                 </tbody>
              </table>
              {filteredItems.length === 0 && !isLoading && (
                 <div className="py-20 text-center">
                    <MessageSquare size={48} className="mx-auto mb-4 text-muted-foreground opacity-20" />
                    <p className="font-heading font-black text-muted-foreground uppercase text-xs tracking-widest">Zero Data Synchronized</p>
                 </div>
              )}
           </div>
        </div>
      </main>

      {/* Detail View Modal for Inquiries, Applications & Updates */}
      <AnimatePresence>
         {selectedItem && (activeTab === 'inquiries' || activeTab === 'updates' || activeTab === 'applications') && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 lg:p-12">
               <motion.div 
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 exit={{ opacity: 0 }}
                 onClick={() => setSelectedItem(null)}
                 className="absolute inset-0 bg-black/60 backdrop-blur-md"
               />
               <motion.div 
                 initial={{ scale: 0.9, opacity: 0, y: 20 }}
                 animate={{ scale: 1, opacity: 1, y: 0 }}
                 exit={{ scale: 0.9, opacity: 0, y: 20 }}
                 className="relative w-full max-w-4xl bg-white border-4 border-foreground rounded-[3rem] shadow-pop overflow-hidden flex flex-col max-h-full"
               >
                  <div className="p-8 lg:p-12 overflow-y-auto">
                     <div className="flex justify-between items-start mb-12">
                        <div>
                           <p className="text-primary font-black text-[10px] uppercase tracking-[0.4em] mb-4">// Intelligence Detail</p>
                           <h2 className="text-4xl font-heading font-black tracking-tighter leading-none">{selectedItem.name || (activeTab === 'updates' ? "System Update" : "Candidate")}</h2>
                           <p className="text-lg font-sans font-bold text-muted-foreground mt-4">{selectedItem.email}</p>
                           <div className="flex gap-4 mt-2">
                              <span className="text-[10px] font-black uppercase opacity-40">ID: {selectedItem.id}</span>
                              <span className="text-[10px] font-black uppercase opacity-40">Timestamp: {new Date(selectedItem.created_at).toLocaleString()}</span>
                           </div>
                        </div>
                        <button 
                          onClick={() => setSelectedItem(null)}
                          className="w-12 h-12 flex items-center justify-center rounded-full bg-muted hover:bg-foreground hover:text-white transition-all border-2 border-foreground"
                        >
                           <ChevronRight className="rotate-180" />
                        </button>
                     </div>

                     <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                        {activeTab === 'inquiries' ? (
                           <>
                              <div className="space-y-8">
                                 <div>
                                    <label className="block text-[8px] font-black uppercase text-secondary tracking-widest mb-2">Project Vision</label>
                                    <p className="font-sans font-medium leading-relaxed bg-muted/30 p-6 border-2 border-foreground/5 rounded-2xl whitespace-pre-wrap">
                                       {selectedItem.project_description || "No project blueprint provided."}
                                    </p>
                                 </div>
                                 <div className="grid grid-cols-2 gap-4">
                                    <div className="p-4 bg-muted/20 border-2 border-foreground rounded-2xl shadow-pop-sm">
                                       <label className="block text-[8px] font-black uppercase opacity-40 mb-1">Timeline</label>
                                       <p className="text-xs font-black uppercase">{selectedItem.project_timeline || "TBD"}</p>
                                    </div>
                                    <div className="p-4 bg-muted/20 border-2 border-foreground rounded-2xl shadow-pop-sm">
                                       <label className="block text-[8px] font-black uppercase opacity-40 mb-1">Pricing Tier</label>
                                       <p className="text-xs font-black uppercase">{selectedItem.pricing_plan || "Custom"}</p>
                                    </div>
                                    <div className="p-4 bg-muted/20 border-2 border-foreground rounded-2xl shadow-pop-sm">
                                       <label className="block text-[8px] font-black uppercase opacity-40 mb-1">Budget Bracket</label>
                                       <p className="text-xs font-black uppercase">{selectedItem.budget || "N/A"}</p>
                                    </div>
                                 </div>
                              </div>
                              <div className="space-y-6">
                                 <div className="p-6 bg-muted/10 border-2 border-foreground/10 rounded-2xl">
                                    <label className="block text-[8px] font-black uppercase opacity-40 mb-3">Project Specifics</label>
                                    <div className="space-y-4">
                                       <div>
                                          <p className="text-[10px] uppercase font-black opacity-60">Category</p>
                                          <p className="font-sans font-bold text-sm bg-muted/20 px-3 py-1 rounded inline-block">{selectedItem.project_type || "N/A"}</p>
                                       </div>
                                       <div>
                                          <p className="text-[10px] uppercase font-black opacity-60">Design Style</p>
                                          <p className="font-sans font-bold text-sm italic">
                                             {themes.find(t => t.id === (selectedItem.aesthetic || selectedItem.design_preference))?.name || selectedItem.aesthetic || selectedItem.design_preference || "Standard Protocol"}
                                          </p>
                                       </div>
                                       <div>
                                          <p className="text-[10px] uppercase font-black opacity-60">Reference URL</p>
                                          {selectedItem.reference_url ? (
                                             <a href={selectedItem.reference_url} target="_blank" rel="noopener noreferrer" className="font-sans font-bold text-sm text-primary underline underline-offset-4 overflow-hidden break-all">
                                                {selectedItem.reference_url}
                                             </a>
                                          ) : (
                                             <p className="font-sans font-bold text-sm opacity-40 italic">None Provided</p>
                                          )}
                                       </div>
                                       <div>
                                          <p className="text-[10px] uppercase font-black opacity-60">Additional Requirements & Meta</p>
                                          <p className="font-sans text-sm p-3 bg-muted/20 rounded-xl leading-relaxed whitespace-pre-wrap">
                                             {selectedItem.additional_requirements || "No specific overrides requested."}
                                          </p>
                                       </div>
                                    </div>
                                 </div>

                                 <div className="p-6 border-2 border-foreground rounded-2xl">
                                    <label className="block text-[8px] font-black uppercase opacity-40 mb-4">Targeting Details</label>
                                    <div className="space-y-3 font-sans text-xs font-bold">
                                       <p className="flex justify-between"><span>Phone:</span> <span>{selectedItem.phone || "N/A"}</span></p>
                                       <p className="flex justify-between"><span>Method:</span> <span>{selectedItem.contact_method || "Email"}</span></p>
                                       <p className="flex justify-between items-start gap-4"><span>Address:</span> <span className="text-right opacity-60">{selectedItem.address || "Digital Nomad"}</span></p>
                                    </div>
                                 </div>

                                 <div className="flex gap-4">
                                    <button 
                                      onClick={() => handleStatusChange(selectedItem.id, 'contacted')}
                                      className="flex-grow py-4 border-4 border-foreground rounded-2xl font-heading font-black text-[10px] uppercase tracking-widest hover:bg-secondary hover:text-white transition-all shadow-pop-sm"
                                    >
                                       Mark Contacted
                                    </button>
                                    <button 
                                      onClick={() => handleStatusChange(selectedItem.id, 'active')}
                                      className="flex-grow py-4 bg-primary text-white border-4 border-foreground rounded-2xl font-heading font-black text-[10px] uppercase tracking-widest shadow-pop-sm hover:shadow-none transition-all"
                                    >
                                       Activate Project
                                    </button>
                                    <button 
                                      onClick={() => {
                                        if (window.confirm("Permanent deletion of intelligence record?")) {
                                          handleDelete('project_inquiries', selectedItem.id);
                                          setSelectedItem(null);
                                        }
                                      }}
                                      className="p-4 border-4 border-foreground rounded-2xl hover:bg-red-500 hover:text-white transition-all"
                                      title="Purge Record"
                                    >
                                       <Trash2 size={20} />
                                    </button>
                                 </div>
                              </div>
                           </>
                        ) : activeTab === 'applications' ? (
                           <>
                              <div className="space-y-8">
                                 <div>
                                    <label className="block text-[8px] font-black uppercase text-secondary tracking-widest mb-2">Cover Note</label>
                                    <p className="font-sans font-medium leading-relaxed bg-muted/30 p-6 border-2 border-foreground/5 rounded-2xl whitespace-pre-wrap">
                                       {selectedItem.message || "No cover note provided."}
                                    </p>
                                 </div>
                                 <div className="grid grid-cols-2 gap-4">
                                    <div className="p-4 bg-muted/20 border-2 border-foreground rounded-2xl shadow-pop-sm">
                                       <label className="block text-[8px] font-black uppercase opacity-40 mb-1">Role Applied</label>
                                       <p className="text-xs font-black uppercase">{selectedItem.role || "TBD"}</p>
                                    </div>
                                    <div className="p-4 bg-muted/20 border-2 border-foreground rounded-2xl shadow-pop-sm">
                                       <label className="block text-[8px] font-black uppercase opacity-40 mb-1">Team</label>
                                       <p className="text-xs font-black uppercase">{selectedItem.team || "N/A"}</p>
                                    </div>
                                    <div className="p-4 bg-muted/20 border-2 border-foreground rounded-2xl shadow-pop-sm">
                                       <label className="block text-[8px] font-black uppercase opacity-40 mb-1">Location</label>
                                       <p className="text-xs font-black uppercase">{selectedItem.location || "Remote"}</p>
                                    </div>
                                 </div>
                              </div>
                              <div className="space-y-6">
                                 <div className="p-6 bg-muted/10 border-2 border-foreground/10 rounded-2xl">
                                    <label className="block text-[8px] font-black uppercase opacity-40 mb-3">Professional Assets</label>
                                    <div className="space-y-4">
                                       <div>
                                          <p className="text-[10px] uppercase font-black opacity-60">Portfolio URL</p>
                                          {selectedItem.portfolio_url ? (
                                             <a href={selectedItem.portfolio_url} target="_blank" rel="noopener noreferrer" className="font-sans font-bold text-sm text-primary underline underline-offset-4 overflow-hidden break-all flex items-center gap-2">
                                                {selectedItem.portfolio_url} <ExternalLink size={12} />
                                             </a>
                                          ) : (
                                             <p className="font-sans font-bold text-sm opacity-40 italic">None Provided</p>
                                          )}
                                       </div>
                                       <div>
                                          <p className="text-[10px] uppercase font-black opacity-60">Resume / LinkedIn</p>
                                          {selectedItem.resume_url ? (
                                             <a href={selectedItem.resume_url} target="_blank" rel="noopener noreferrer" className="font-sans font-bold text-sm text-primary underline underline-offset-4 overflow-hidden break-all flex items-center gap-2">
                                                {selectedItem.resume_url} <ExternalLink size={12} />
                                             </a>
                                          ) : (
                                             <p className="font-sans font-bold text-sm opacity-40 italic">None Provided</p>
                                          )}
                                       </div>
                                    </div>
                                 </div>

                                 <div className="p-6 border-2 border-foreground rounded-2xl">
                                    <label className="block text-[8px] font-black uppercase opacity-40 mb-4">Candidate Contact</label>
                                    <div className="space-y-3 font-sans text-xs font-bold">
                                       <p className="flex justify-between"><span>Phone:</span> <span>{selectedItem.phone || "N/A"}</span></p>
                                       <p className="flex justify-between"><span>Email:</span> <span>{selectedItem.email || "N/A"}</span></p>
                                    </div>
                                 </div>

                                 <div className="flex justify-end">
                                    <button 
                                      onClick={() => {
                                        if (window.confirm("Purge job application record?")) {
                                          handleDelete('job_applications', selectedItem.id);
                                          setSelectedItem(null);
                                        }
                                      }}
                                      className="flex items-center gap-3 px-8 py-4 bg-red-50 text-red-600 border-4 border-red-200 rounded-2xl font-heading font-black text-[10px] uppercase tracking-widest hover:bg-red-600 hover:text-white hover:border-red-600 transition-all shadow-pop-sm"
                                    >
                                       <Trash2 size={16} />
                                       Purge Application
                                    </button>
                                 </div>
                              </div>
                           </>
                        ) : (
                           <div className="col-span-2 flex flex-col gap-8">
                              <div>
                                 <label className="block text-[8px] font-black uppercase text-secondary tracking-widest mb-4">Update Log</label>
                                 <p className="text-xl font-sans font-medium leading-relaxed p-8 bg-muted border-2 border-foreground/5 rounded-3xl whitespace-pre-wrap">
                                    {selectedItem.update_note}
                                 </p>
                              </div>
                              <div className="flex justify-end">
                                 <button 
                                   onClick={() => {
                                     if (window.confirm("Purge strategic update?")) {
                                       handleDelete('strategic_updates', selectedItem.id);
                                       setSelectedItem(null);
                                     }
                                   }}
                                   className="flex items-center gap-3 px-8 py-4 bg-red-50 text-red-600 border-4 border-red-200 rounded-2xl font-heading font-black text-[10px] uppercase tracking-widest hover:bg-red-600 hover:text-white hover:border-red-600 transition-all shadow-pop-sm"
                                 >
                                    <Trash2 size={16} />
                                    Purge Update
                                 </button>
                              </div>
                           </div>
                        )}
                     </div>
                  </div>
               </motion.div>
            </div>
         )}
      </AnimatePresence>
    </div>
  );
};

export default AdminDashboard;
