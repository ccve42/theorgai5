import React, { useEffect } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { translations } from '../translations';

interface OutletContext {
  lang: 'en' | 'jp';
}

const TermsPage: React.FC = () => {
  const { lang } = useOutletContext<OutletContext>();
  const t = translations[lang].terms;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">{t.title}</h1>
          
          <div className="space-y-6 text-neutral-300">
            <section>
              <h2 className="text-xl font-semibold mb-4">{t.sections.introduction.title}</h2>
              <p>
                {t.sections.introduction.content}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">{t.sections.useOfServices.title}</h2>
              <p>
                {t.sections.useOfServices.content}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">{t.sections.intellectualProperty.title}</h2>
              <p>
                {t.sections.intellectualProperty.content}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">{t.sections.limitationOfLiability.title}</h2>
              <p>
                {t.sections.limitationOfLiability.content}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">{t.sections.changesToTerms.title}</h2>
              <p>
                {t.sections.changesToTerms.content}
              </p>
            </section>

            <div className="pt-8">
              <Link 
                to="/" 
                className="text-blue-400 hover:text-blue-300 transition-colors"
                onClick={() => window.scrollTo(0, 0)}
              >
                {t.backToHome}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsPage; 