import React from 'react';
import { Bot, Phone, Clock, TrendingUp, Heart } from 'lucide-react';

const SolutionSection: React.FC = () => {
  return (
    <section id="solution-section" className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-grain opacity-[0.03] z-0"></div>
      
      <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-white/[0.02] blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-white/[0.02] blur-3xl pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-8">
            Unlock 24/7 Growth with AI Chat & Voice Assistants
          </h2>
          
          <div className="glassmorphism p-8 sm:p-10 rounded-2xl mb-12 max-w-3xl mx-auto">
            <p className="text-xl text-neutral-300 leading-relaxed mb-12">
              Our AI Assistants combine powerful Chat and Voice capabilities to handle customer inquiries instantly. They work tirelessly to qualify leads and deliver consistent, accurate support around the clock.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
              <div className="flex flex-col items-center gap-4 p-6 bg-black/40 rounded-xl border border-neutral-800">
                <Bot className="w-8 h-8 text-white" />
                <p className="text-white text-sm">AI Chat Assistant</p>
              </div>
              <div className="flex flex-col items-center gap-4 p-6 bg-black/40 rounded-xl border border-neutral-800">
                <Phone className="w-8 h-8 text-white" />
                <p className="text-white text-sm">Voice Assistant</p>
              </div>
              <div className="flex flex-col items-center gap-4 p-6 bg-black/40 rounded-xl border border-neutral-800 md:col-span-1 col-span-2">
                <Clock className="w-8 h-8 text-white" />
                <p className="text-white text-sm">24/7 Availability</p>
              </div>
            </div>
            
            <div className="space-y-4 text-left mb-10">
              <div className="flex items-center gap-3 p-4 bg-black/40 rounded-xl border border-neutral-800 hover:border-neutral-700 transition-all">
                <Bot className="w-6 h-6 text-white flex-shrink-0" />
                <p className="text-white">✅ Capture Every Lead, 24/7</p>
              </div>
              <div className="flex items-center gap-3 p-4 bg-black/40 rounded-xl border border-neutral-800 hover:border-neutral-700 transition-all">
                <Clock className="w-6 h-6 text-white flex-shrink-0" />
                <p className="text-white">✅ Slash Response Times Dramatically</p>
              </div>
              <div className="flex items-center gap-3 p-4 bg-black/40 rounded-xl border border-neutral-800 hover:border-neutral-700 transition-all">
                <TrendingUp className="w-6 h-6 text-white flex-shrink-0" />
                <p className="text-white">✅ Reduce Operational Costs Significantly</p>
              </div>
              <div className="flex items-center gap-3 p-4 bg-black/40 rounded-xl border border-neutral-800 hover:border-neutral-700 transition-all">
                <Heart className="w-6 h-6 text-white flex-shrink-0" />
                <p className="text-white">✅ Boost Customer Satisfaction & Loyalty</p>
              </div>
              <div className="flex items-center gap-3 p-4 bg-black/40 rounded-xl border border-neutral-800 hover:border-neutral-700 transition-all">
                <TrendingUp className="w-6 h-6 text-white flex-shrink-0" />
                <p className="text-white">✅ Scale Support Instantly, On Demand</p>
              </div>
            </div>
            
            <button
              onClick={() => {
                document.getElementById('booking-calendar')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-primary inline-flex items-center gap-3 text-lg px-8 py-4"
            >
              Book Your Free Call
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;