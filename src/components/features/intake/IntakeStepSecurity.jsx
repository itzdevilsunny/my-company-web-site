import React from 'react';
import { ShieldAlert } from 'lucide-react';

const IntakeStepSecurity = ({ formData, setFormData, errors }) => {
  return (
    <section className="bg-white border-4 border-foreground rounded-[2.5rem] p-12 shadow-pop relative overflow-hidden">
      <h2 className="text-3xl font-heading font-black mb-10 flex items-center gap-4">
        <span className="p-3 bg-secondary text-white rounded-2xl shadow-pop-sm">5</span>
        Security Gateway / अंतिम सुरक्षा
      </h2>
      
      <div className="space-y-10">
        <div className="space-y-4">
          <label className="font-heading font-black text-xs uppercase text-muted-foreground tracking-widest">Additional Instructions / अतिरिक्त जानकारी</label>
          <textarea 
            placeholder="Any specific fonts, colors, or technical needs not mentioned earlier..."
            className="w-full bg-muted/20 border-2 border-foreground rounded-2xl px-6 py-4 font-sans font-bold shadow-pop hover:shadow-pop-active focus:shadow-none outline-none min-h-[100px]"
            value={formData.additionalRequirements}
            onChange={(e) => setFormData({...formData, additionalRequirements: e.target.value})}
          />
        </div>

        <div className="mt-12 p-8 bg-muted/30 border-4 border-dashed border-foreground/20 rounded-[2.5rem] relative">
            <div className="flex items-center gap-4 mb-2">
              <ShieldAlert className="text-secondary" />
              <h3 className="font-heading font-black text-sm uppercase tracking-[0.2em]">Strategy Finalization</h3>
            </div>
            <p className="text-xs font-bold opacity-60 leading-relaxed">
              Your identity has already been securely verified via encrypted OTP. Clicking synchronous deploy below will immediately securely link your project blueprint to the Zorvia Cloud Network.
            </p>
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
