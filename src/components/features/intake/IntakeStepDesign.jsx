import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { themes } from '../../../data/themes';

const IntakeStepDesign = ({ formData, setFormData }) => {
  return (
    <section className="bg-white border-2 border-foreground rounded-2xl p-6 shadow-pop relative overflow-hidden">
      <h2 className="text-xl font-heading font-black mb-6 flex items-center gap-4">
        <span className="p-2 bg-primary text-white rounded-xl shadow-pop-sm">4</span>
        Visual Identity / डिजाइन पसंद
      </h2>

      <div className="space-y-12">
          <div className="space-y-4">
            <label className="font-heading font-black text-xs uppercase text-muted-foreground tracking-widest">
                Select a Design Theme / डिजाइन का प्रकार चुनें ({themes.length} Available)
            </label>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-h-[500px] overflow-y-auto p-2 border-2 border-dashed border-foreground/10 rounded-2xl custom-scrollbar">
              {themes.map(t => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setFormData({...formData, designPreference: t.id})}
                  className={`p-4 border-2 rounded-2xl text-left transition-all relative overflow-hidden group ${formData.designPreference === t.id ? 'bg-primary text-white border-primary shadow-pop-sm scale-95' : 'bg-white border-foreground/20 hover:border-foreground shadow-sm hover:shadow-pop-sm'}`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xl">{t.icon}</span>
                    {formData.designPreference === t.id && (
                      <CheckCircle2 size={16} className="text-white" />
                    )}
                  </div>
                  <h3 className="font-heading font-black text-xs mb-1 uppercase tracking-tight truncate">{t.name}</h3>
                  <p className={`text-[8px] font-bold uppercase tracking-widest opacity-60 ${formData.designPreference === t.id ? 'text-white' : 'text-muted-foreground'}`}>{t.mode}</p>
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <label className="font-heading font-black text-xs uppercase text-muted-foreground tracking-widest">Reference Site? / रेफरेंस वेबसाइट?</label>
            <div className="flex gap-4 mb-4">
                {['Yes', 'No'].map(o => (
                  <label key={o} className="flex items-center gap-4 p-4 border-2 border-foreground/10 rounded-2xl cursor-pointer hover:bg-muted/30 transition-all flex-1 group">
                    <input 
                      type="radio" 
                      name="hasRef"
                      className="w-5 h-5 accent-primary" 
                      checked={formData.hasReference === o.toLowerCase()}
                      onChange={() => setFormData({...formData, hasReference: o.toLowerCase()})}
                    />
                    <div className="flex flex-col">
                      <span className="font-black text-sm">{o}</span>
                      <span className="text-[10px] opacity-50 font-bold uppercase tracking-widest">{o === 'Yes' ? 'I have a link' : 'I trust Zorvia'}</span>
                    </div>
                  </label>
                ))}
            </div>
            <AnimatePresence>
              {formData.hasReference === 'yes' && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                >
                  <input 
                    type="url"
                    placeholder="Paste the reference website URL here..."
                    className="w-full bg-muted/20 border-2 border-foreground rounded-2xl px-6 py-3 font-sans font-bold shadow-pop-sm hover:shadow-pop focus:shadow-none outline-none"
                    value={formData.referenceUrl || ''}
                    onChange={(e) => setFormData({...formData, referenceUrl: e.target.value})}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.1); border-radius: 10px; }
      `}} />
    </section>
  );
};

const CheckCircle2 = ({ size, className }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="3" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

export default IntakeStepDesign;
