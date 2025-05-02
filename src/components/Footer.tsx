import React from 'react';
import { Link } from 'react-router-dom';
import { translations } from '../translations';

interface FooterProps {
  lang: 'en' | 'jp';
}

const Footer: React.FC<FooterProps> = ({ lang }) => {
  const t = translations[lang].footer;
  
  return (
    <footer className="bg-black border-t border-neutral-900 py-6 sm:py-8">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-6">
          <Link to={`/${lang}`} className="flex items-center gap-2">
            <div className="w-20 h-20 sm:w-24 sm:h-24 relative">
              <img 
                src="/images/theorgai_white_logo.png" 
                alt="Company Logo" 
                className="w-full h-full object-cover"
              />
            </div>
          </Link>
          <div className="flex flex-wrap gap-4 sm:gap-6 text-sm text-neutral-400">
            <Link to={`/${lang}/terms`} className="py-2 hover:text-white transition-colors">{t.terms}</Link>
            <Link to={`/${lang}/privacy`} className="py-2 hover:text-white transition-colors">{t.privacy}</Link>
            <div className="flex flex-col">
              <span className="uppercase">{t.support}</span>
              <a href={`mailto:${t.email}`} className="py-2 hover:text-white transition-colors">{t.email}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;