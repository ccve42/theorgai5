import React from 'react';
import { PhoneCall, FileCheck, Rocket } from 'lucide-react';

const HowItWorksSection: React.FC = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-grain opacity-[0.03] z-0"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-20 w-96 h-96 rounded-full bg-white/[0.02] blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-white/[0.02] blur-3xl pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-16">
            Launch Your AI Assistant in 3 Simple Steps
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="glassmorphism p-8 rounded-xl text-center hover:border-neutral-700 transition-all group">
              <div className="w-16 h-16 rounded-full bg-white/5 border border-neutral-800 flex items-center justify-center mx-auto mb-6 group-hover:border-neutral-700 transition-all">
                <PhoneCall className="w-8 h-8 text-white" />
              </div>
              <div className="text-2xl font-bold text-white mb-2">1</div>
              <h3 className="text-xl font-semibold text-white mb-4">Start with Your Free Call</h3>
              <p className="text-neutral-300">
                Schedule your quick, no-obligation strategy session to discuss your needs and goals.
              </p>
            </div>
            
            <div className="glassmorphism p-8 rounded-xl text-center hover:border-neutral-700 transition-all group">
              <div className="w-16 h-16 rounded-full bg-white/5 border border-neutral-800 flex items-center justify-center mx-auto mb-6 group-hover:border-neutral-700 transition-all">
                <FileCheck className="w-8 h-8 text-white" />
              </div>
              <div className="text-2xl font-bold text-white mb-2">2</div>
              <h3 className="text-xl font-semibold text-white mb-4">Get Your Custom AI Plan</h3>
              <p className="text-neutral-300">
                We analyze your requirements and design the perfect AI assistant setup specifically tailored for your business.
              </p>
            </div>
            
            <div className="glassmorphism p-8 rounded-xl text-center hover:border-neutral-700 transition-all group">
              <div className="w-16 h-16 rounded-full bg-white/5 border border-neutral-800 flex items-center justify-center mx-auto mb-6 group-hover:border-neutral-700 transition-all">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <div className="text-2xl font-bold text-white mb-2">3</div>
              <h3 className="text-xl font-semibold text-white mb-4">Launch & See Results</h3>
              <p className="text-neutral-300">
                We handle the seamless implementation and help optimize your AI for maximum impact and growth.
              </p>
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
    </section>
  );
};

export default HowItWorksSection;