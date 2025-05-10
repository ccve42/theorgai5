import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useOutletContext } from 'react-router-dom';
import { translations } from '../../translations';
import { ElegantShape } from '../ui/shape-landing-hero';

interface OutletContext {
  lang: 'en' | 'jp';
}

const ProblemSection: React.FC = () => {
  const { lang } = useOutletContext<OutletContext>();
  const t = translations[lang].problem;

  return (
    <section className="py-24 bg-black relative overflow-x-hidden">
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
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-12">
            {t.title}
          </h2>
          
          <div className="glassmorphism p-6 sm:p-10 rounded-2xl mb-12 max-w-3xl mx-auto">
            <p className="text-xl text-neutral-300 leading-relaxed mb-8">
              {t.description}
            </p>
            
            <p className="text-2xl text-white font-medium mb-10">
              {t.solution}
            </p>
            
            <button
              onClick={() => {
                document.getElementById('booking-calendar')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4"
            >
              {t.cta}
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;