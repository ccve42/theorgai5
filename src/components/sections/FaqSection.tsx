import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { translations } from '../../translations';
import { ElegantShape } from '../ui/shape-landing-hero';

interface FaqSectionProps {
  lang: 'en' | 'jp';
}

const FaqSection: React.FC<FaqSectionProps> = ({ lang }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const t = translations[lang].faq;

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-black/90">
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
            <h2 className="text-white text-3xl font-semibold mb-4">{t.title}</h2>
            <p className="text-neutral-300">
              {t.subtitle}
            </p>
          </div>
          
          <div className="space-y-4">
            {t.questions.map((faq, index) => (
              <div 
                key={index}
                className="faq-item glassmorphism rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => handleToggle(index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-black"
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <h3 className="text-white text-xl font-medium">{faq.question}</h3>
                  <ChevronDown 
                    className={`w-5 h-5 text-white transition-transform duration-200 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  className={`answer-wrapper ${openIndex === index ? 'open' : ''}`}
                >
                  <p className="text-neutral-300 px-6 pb-6 pt-6">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16 space-y-4">
            <h3 className="text-white text-2xl font-semibold">{t.cta.title}</h3>
            <p className="text-neutral-300 mb-6">{t.cta.description}</p>
            <div>
              <button
                onClick={() => {
                  const demoSection = document.getElementById('booking-calendar');
                  demoSection?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4"
              >
                {t.cta.button}
              </button>
              <div className="flex items-center justify-center gap-2 mt-4">
                <img
                  src="/images/theorgai_white_logo.png"
                  alt="Company Logo"
                  className="w-10 h-10 object-cover"
                />
                <span className="text-white/80 text-base font-medium">{t.cta.note}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;