import React from 'react';
import { ArrowRight } from 'lucide-react';

const ProblemSection: React.FC = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-grain opacity-[0.03] z-0"></div>
      
      <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-white/[0.02] blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-white/[0.02] blur-3xl pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-12">
            Missed Leads? High Costs? Frustrated Customers?
          </h2>
          
          <div className="glassmorphism p-8 sm:p-10 rounded-2xl mb-12 max-w-3xl mx-auto">
            <p className="text-xl text-neutral-300 leading-relaxed mb-8">
              Leads vanish after hours. Support teams struggle with response times. Sales opportunities slip away to competitors. Traditional support costs drain your resources.
            </p>
            
            <p className="text-2xl text-white font-medium mb-10">
              Stop the leaks. Our AI Assistants work 24/7 – capturing every lead, giving instant perfect answers, and slashing your support costs.
            </p>
            
            <button
              onClick={() => {
                document.getElementById('booking-section')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4"
            >
              Book Your Free Call
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;