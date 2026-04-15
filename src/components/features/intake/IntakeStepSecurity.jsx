import React from 'react';
import { ShieldAlert } from 'lucide-react';

const IntakeStepSecurity = ({ formData, setFormData, errors }) => {
  return (
    <section className="bg-white border-2 border-foreground rounded-2xl p-6 shadow-pop relative overflow-hidden">
      <h2 className="text-xl font-heading font-black mb-6 flex items-center gap-4">
        <span className="p-2 bg-secondary text-white rounded-xl shadow-pop-sm">5</span>
        Final Details / अंतिम विवरण
      </h2>
      
      <div className="space-y-10">
        <div className="space-y-4">
          <label className="font-heading font-black text-xs uppercase text-muted-foreground tracking-widest">Additional Instructions / अतिरिक्त जानकारी</label>
          <textarea 
            placeholder="Any specific fonts, colors, or technical needs not mentioned earlier..."
            className="w-full bg-muted/20 border-2 border-foreground rounded-xl px-6 py-3 font-sans font-bold shadow-pop hover:shadow-pop-active focus:shadow-none outline-none min-h-[100px]"
            value={formData.additionalRequirements}
            onChange={(e) => setFormData({...formData, additionalRequirements: e.target.value})}
          />
        </div>


        {/* Anti-Bot Honeypot */}
        <div style={{ display: 'none', visibility: 'hidden' }}>
            <input 
              type="text" 
              name="website_url" 
              value={formData.website_url} 
              onChange={(e) => setFormData({...formData, website_url: e.target.value})} 
            />
        </div>
      </div>
    </section>
  );
};

export default IntakeStepSecurity;
