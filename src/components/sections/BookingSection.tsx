import React from 'react';
import Cal from "@calcom/embed-react";
import { translations } from '../../translations';
import { ElegantShape } from '../ui/shape-landing-hero';

interface BookingSectionProps {
  lang: 'en' | 'jp';
}

const BookingSection: React.FC<BookingSectionProps> = ({ lang }) => {
  const t = translations[lang].booking;

  return (
    <section id="booking-calendar" className="py-20 bg-black scroll-mt-20">
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

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              {t.title}
            </h2>
            <p className="text-xl text-neutral-300 leading-relaxed mb-4 max-w-2xl mx-auto">
              {t.description}
            </p>
          </div>
          
          <div className="glassmorphism rounded-xl overflow-hidden relative">
            {/* Calendar widget container */}
            <div className="h-[600px]">
              <Cal
                calLink="aiorganization/introductory-meeting"
                style={{width:"100%",height:"100%",overflow:"scroll"}}
                config={{
                  layout: "month_view",
                  theme: "dark"
                }}
              />
            </div>
          </div>
          {/* Reassurance text */}
          <div className="text-center mt-4 pb-4">
            <p className="text-neutral-400 text-sm">
              {t.reassurance}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;