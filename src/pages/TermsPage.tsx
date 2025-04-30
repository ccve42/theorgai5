import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const TermsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Terms & Conditions</h1>
          
          <div className="space-y-6 text-neutral-300">
            <section>
              <h2 className="text-xl font-semibold mb-4">1. Introduction</h2>
              <p>
                Welcome to AI Organization. By accessing and using our website and services, you agree to be bound by these Terms and Conditions. Please read them carefully before using our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">2. Use of Services</h2>
              <p>
                Our services are intended for business use. You agree to use our services only for lawful purposes and in accordance with these Terms. You are responsible for maintaining the confidentiality of your account information.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">3. Intellectual Property</h2>
              <p>
                All content, features, and functionality of our services are owned by AI Organization and are protected by international copyright, trademark, and other intellectual property laws.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">4. Limitation of Liability</h2>
              <p>
                AI Organization shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">5. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. We will notify users of any material changes by posting the new Terms on our website.
              </p>
            </section>

            <div className="pt-8">
              <Link 
                to="/" 
                className="text-blue-400 hover:text-blue-300 transition-colors"
                onClick={() => window.scrollTo(0, 0)}
              >
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsPage; 