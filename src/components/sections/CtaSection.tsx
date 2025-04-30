import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CtaSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-black/90 to-black">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto glassmorphism p-10 rounded-2xl text-center">
          <h2 className="mb-6">Ready to Grow Your Business?</h2>
          <p className="text-neutral-300 text-lg mb-8 max-w-2xl mx-auto">
            See how our AI solutions can help you capture more leads, delight customers, and reduce costs. Book a personalized demo today.
          </p>
          <Link 
            to="/contact" 
            className="btn-primary inline-flex items-center gap-2"
          >
            Book Your Free Demo
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;