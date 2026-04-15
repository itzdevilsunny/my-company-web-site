import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const IntakeStepDesign = ({ formData, setFormData }) => {
  return (
    <section className="bg-white border-4 border-foreground rounded-[2.5rem] p-12 shadow-pop relative overflow-hidden">
      <h2 className="text-3xl font-heading font-black mb-10 flex items-center gap-4">
        <span className="p-3 bg-primary text-white rounded-2xl shadow-pop-sm">4</span>
        Visual Identity / डिजाइन पसंद
      </h2>

      <div className="space-y-12">
          <div className="space-y-4">
            <label className="font-heading font-black text-xs uppercase text-muted-foreground tracking-widest">
                Visual Style / डिजाइन का प्रकार?
            </label>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {['Modern', 'Minimal', '3D / Glass', 'Professional', 'Creative'].map(d => (
                <button
                  key={d}
                  onClick={() => setFormData({...formData, designPreference: d.toLowerCase()})}
                  className={`px-4 py-4 border-2 rounded-xl font-heading font-black text-[10px] uppercase transition-all ${formData.designPreference === d.toLowerCase() ? 'bg-primary text-white border-primary shadow-pop-active' : 'bg-muted/10 border-foreground shadow-pop hover:shadow-pop-active'}`}
                >
                  {d}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <label className="font-heading font-black text-xs uppercase text-muted-foreground tracking-widest">Reference Site? / रेफरेंस वेबसाइट?</label>
            <div className="flex gap-6 mb-4">
                {['Yes', 'No'].map(o => (
                  <label key={o} className="flex items-center gap-4 p-5 border-2 border-foreground/10 rounded-2xl cursor-pointer hover:bg-muted/30 transition-all flex-1 group">
                    <input 
                      type="radio" 
                      name="hasRef"
                      className="w-6 h-6 accent-primary" 
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
                    className="w-full bg-muted/20 border-2 border-foreground rounded-2xl px-6 py-4 font-sans font-bold shadow-pop hover:shadow-pop-active focus:shadow-none outline-none"
                    value={formData.referenceUrl}
                    onChange={(e) => setFormData({...formData, referenceUrl: e.target.value})}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
      </div>
    </section>
  );
};

export default IntakeStepDesign;
