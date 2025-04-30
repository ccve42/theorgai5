import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export function Cta() {
  return (
    <div className="flex mt-12">
      <Link 
        to="/contact" 
        className="btn-primary inline-flex items-center gap-3 text-lg px-8 py-4"
      >
        Book Your Free Demo
        <ArrowRight className="w-5 h-5" />
      </Link>
    </div>
  );
}

export default Cta;