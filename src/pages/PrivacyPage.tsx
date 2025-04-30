import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const PrivacyPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="space-y-6 text-neutral-300">
            <section>
              <h2 className="text-xl font-semibold mb-4">1. Information We Collect</h2>
              <p>
                We collect information that you provide directly to us, including but not limited to your name, email address, company information, and any other information you choose to provide when using our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">2. How We Use Your Information</h2>
              <p>
                We use the information we collect to provide, maintain, and improve our services, to communicate with you, and to protect AI Organization and our users. We may also use the information for research and analytics purposes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">3. Information Sharing</h2>
              <p>
                We do not sell or rent your personal information to third parties. We may share your information with service providers who perform services on our behalf, in compliance with our privacy policy and applicable laws.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">4. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">5. Your Rights</h2>
              <p>
                You have the right to access, correct, or delete your personal information. You may also have the right to object to or restrict certain processing of your information.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">6. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at{' '}
                <a href="mailto:support@theorgai.com" className="text-blue-400 hover:text-blue-300">
                  support@theorgai.com
                </a>
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

export default PrivacyPage; 