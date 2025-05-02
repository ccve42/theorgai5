import React, { useEffect } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { translations } from '../translations';

interface OutletContext {
  lang: 'en' | 'jp';
}

const PrivacyPage: React.FC = () => {
  const { lang } = useOutletContext<OutletContext>();
  const t = translations[lang].privacy;

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
              <h2 className="text-xl font-semibold mb-4">{t.sections.informationCollection.title}</h2>
              <p>
                {t.sections.informationCollection.content}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">{t.sections.informationUsage.title}</h2>
              <p>
                {t.sections.informationUsage.content}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">{t.sections.informationSharing.title}</h2>
              <p>
                {t.sections.informationSharing.content}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">{t.sections.dataSecurity.title}</h2>
              <p>
                {t.sections.dataSecurity.content}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">{t.sections.yourRights.title}</h2>
              <p>
                {t.sections.yourRights.content}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">{t.sections.contactUs.title}</h2>
              <p>
                {t.sections.contactUs.content}{' '}
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
                {t.backToHome}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage; 