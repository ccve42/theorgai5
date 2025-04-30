import { ArrowRight } from 'lucide-react';

export function Cta() {
  return (
    <div className="flex mt-12">
      <button
        onClick={() => {
          const demoSection = document.getElementById('booking-calendar');
          demoSection?.scrollIntoView({ behavior: 'smooth' });
        }}
        className="btn-primary inline-flex items-center gap-3 text-lg px-8 py-4"
      >
        Book Your Free Demo
        <ArrowRight className="w-5 h-5" />
      </button>
    </div>
  );
}

export default Cta;