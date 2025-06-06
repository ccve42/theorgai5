import React from 'react';
import { Bot, Phone, Clock, TrendingUp, Heart } from 'lucide-react';
import { useOutletContext } from 'react-router-dom';
import { translations } from '../../translations';
import { ElegantShape } from '../ui/shape-landing-hero';

interface OutletContext {
  lang: 'en' | 'jp';
}

const SolutionSection: React.FC = () => {
  const { lang } = useOutletContext<OutletContext>();
  const t = translations[lang].solution;

  return (
    <section id="solution-section" className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />
      <div className="absolute inset-0 bg-grain opacity-[0.03] z-0"></div>
      
      <div className="absolute inset-0 overflow-hidden">
        <ElegantShape
          delay={0.3}
          width={600}
          height={140}
          rotate={12}
          gradient="from-indigo-500/[0.15]"
          className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
        />
        <ElegantShape
          delay={0.5}
          width={500}
          height={120}
          rotate={-15}
          gradient="from-rose-500/[0.15]"
          className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
        />
        <ElegantShape
          delay={0.4}
          width={300}
          height={80}
          rotate={-8}
          gradient="from-violet-500/[0.15]"
          className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
        />
      </div>
      
      <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-white/[0.02] blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-white/[0.02] blur-3xl pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-8">
            {t.title}
          </h2>
          
          <div className="glassmorphism p-8 sm:p-10 rounded-2xl mb-12 max-w-3xl mx-auto">
            <p className="text-xl text-neutral-300 leading-relaxed mb-12">
              {t.description}
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
              <div className="flex flex-col items-center gap-4 p-6 bg-black/40 rounded-xl border border-neutral-800">
                <Bot className="w-8 h-8 text-white" />
                <p className="text-white text-sm">{t.features[0]}</p>
              </div>
              <div className="flex flex-col items-center gap-4 p-6 bg-black/40 rounded-xl border border-neutral-800">
                <Phone className="w-8 h-8 text-white" />
                <p className="text-white text-sm">{t.features[1]}</p>
              </div>
              <div className="flex flex-col items-center gap-4 p-6 bg-black/40 rounded-xl border border-neutral-800 md:col-span-1 col-span-2">
                <Clock className="w-8 h-8 text-white" />
                <p className="text-white text-sm">{t.features[2]}</p>
              </div>
            </div>
            
            <div className="space-y-4 text-left mb-10">
              {t.benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-black/40 rounded-xl border border-neutral-800 hover:border-neutral-700 transition-all">
                  {index === 0 && <Bot className="w-6 h-6 text-white flex-shrink-0" />}
                  {index === 1 && <Clock className="w-6 h-6 text-white flex-shrink-0" />}
                  {index === 2 && <TrendingUp className="w-6 h-6 text-white flex-shrink-0" />}
                  {index === 3 && <Heart className="w-6 h-6 text-white flex-shrink-0" />}
                  {index === 4 && <TrendingUp className="w-6 h-6 text-white flex-shrink-0" />}
                  <p className="text-white">{benefit}</p>
                </div>
              ))}
            </div>
            
            <button
              onClick={() => {
                document.getElementById('booking-calendar')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-primary inline-flex items-center gap-3 text-lg px-8 py-4"
            >
              {translations[lang].booking.button}
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