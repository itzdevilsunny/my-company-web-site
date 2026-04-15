import React from 'react';
import { ShieldAlert, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

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

        {/* Terms & Conditions Checkbox */}
        <div className="pt-6 border-t border-slate-100">
           <label className="flex items-start gap-4 cursor-pointer group">
              <div className="relative flex items-center mt-1">
                 <input 
                   type="checkbox" 
                   required
                   checked={formData.agreedToTerms}
                   onChange={(e) => setFormData({...formData, agreedToTerms: e.target.checked})}
                   className="peer h-6 w-6 cursor-pointer appearance-none rounded-lg border-2 border-foreground bg-white transition-all checked:bg-primary checked:border-primary"
                 />
                 <CheckCircle2 className="absolute h-4 w-4 text-white opacity-0 peer-checked:opacity-100 left-1 transition-opacity pointer-events-none" strokeWidth={4} />
              </div>
              <div className="flex-1">
                 <span className="text-[10px] lg:text-xs font-black uppercase tracking-widest text-foreground group-hover:text-primary transition-colors">
                    I agree to the <Link to="/terms" className="underline underline-offset-4" onClick={(e) => e.stopPropagation()}>Terms of Service</Link> and <Link to="/privacy" className="underline underline-offset-4" onClick={(e) => e.stopPropagation()}>Privacy Policy</Link> / मैं सेवा की शर्तों और गोपनीयता नीति से सहमत हूँ
                 </span>
                 {errors.agreedToTerms && (
                   <div className="mt-2 text-[9px] font-black text-secondary uppercase tracking-widest">
                      * You must acknowledge the terms to proceed.
                   </div>
                 )}
              </div>
           </label>
        </div>
      </div>
    </section>
  );
};

export default IntakeStepSecurity;
