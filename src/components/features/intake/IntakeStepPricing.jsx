import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const IntakeStepPricing = ({ formData, setFormData }) => {
  return (
    <section className="bg-white border-4 border-tertiary rounded-[2.5rem] p-12 shadow-pop relative overflow-hidden">
      <h2 className="text-3xl font-heading font-black mb-10 flex items-center gap-4">
        <span className="p-3 bg-tertiary text-foreground rounded-2xl shadow-pop-sm">3</span>
        Consultation Tier / अपना प्लान चुनें
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { 
            id: 'basic', 
            name: 'Basic', 
            price: '₹2,999', 
            hindi: 'बेसिक प्लान', 
            features: ['1-3 Static Pages', 'Basic UI Design', 'Delivery in 3-5 Days', 'Standard Support']
          },
          { 
            id: 'standard', 
            name: 'Standard', 
            price: '₹5,999', 
            hindi: 'स्टैंडर्ड प्लान', 
            features: ['Multi-page Dynamic Site', 'Advanced UI/UX', 'Database Integration', 'Priority Hosting Setup']
          },
          { 
            id: 'premium', 
            name: 'Premium', 
            price: '₹8,999', 
            hindi: 'प्रीमियम प्लान', 
            features: ['Global Web Application', 'Admin Dashboards', 'Payment Gateway', 'Whitelabel Architecture']
          }
        ].map(plan => (
          <button
            key={plan.id}
            onClick={() => setFormData({...formData, pricingPlan: plan.id})}
            className={`p-8 border-4 rounded-[2rem] text-left transition-all relative overflow-hidden group ${formData.pricingPlan === plan.id ? 'bg-tertiary border-foreground shadow-pop-active scale-[1.02]' : 'bg-white border-foreground/10 shadow-pop hover:shadow-pop-active opacity-70 hover:opacity-100'}`}
          >
            <div className="mb-6">
              <span className="text-[10px] font-black uppercase tracking-tighter opacity-60 bg-foreground/5 px-2 py-1 rounded">{plan.hindi}</span>
              <h3 className="text-3xl font-black mt-2">{plan.name}</h3>
            </div>
            <div className="text-4xl font-black text-foreground mb-6">{plan.price}</div>
            <ul className="space-y-3 mb-8">
              {plan.features.map(f => (
                <li key={f} className="text-[10px] font-bold flex items-center gap-2 opacity-80">
                  <CheckCircle2 size={12} className="text-foreground" /> {f}
                </li>
              ))}
            </ul>
            <div className={`w-10 h-10 rounded-full border-2 border-foreground flex items-center justify-center transition-all ${formData.pricingPlan === plan.id ? 'bg-foreground text-white' : 'bg-white'}`}>
              {formData.pricingPlan === plan.id ? <CheckCircle2 size={24} /> : <div className="w-4 h-4 rounded-full border-2 border-foreground/20" />}
            </div>
          </button>
        ))}
      </div>
    </section>
  );
};

export default IntakeStepPricing;
