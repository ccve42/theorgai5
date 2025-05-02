import { ArrowRight } from 'lucide-react';
import { translations } from '../translations';

interface CtaProps {
  lang: 'en' | 'jp';
}

export function Cta({ lang }: CtaProps) {
  const t = translations[lang].booking;
  
  return (
    <div className="flex mt-12">
      <button
        onClick={() => {
          const demoSection = document.getElementById('booking-calendar');
          demoSection?.scrollIntoView({ behavior: 'smooth' });
        }}
        className="btn-primary inline-flex items-center gap-3 text-lg px-8 py-4"
      >
        {t.button}
        <ArrowRight className="w-5 h-5" />
      </button>
    </div>
  );
}

export default Cta;