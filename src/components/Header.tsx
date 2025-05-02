import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { translations } from '../translations';

interface HeaderProps {
  lang: 'en' | 'jp';
}

const Header: React.FC<HeaderProps> = ({ lang }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const t = translations[lang].header;
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);
  
  const navItems = [
    { name: t.navigation.solution, sectionId: 'solution-section' },
    { name: t.navigation.demo, sectionId: 'assistant-demo' },
    { name: t.navigation.process, sectionId: 'how-it-works' }
  ];
  
  return (
    <header 
      className={`transition-all duration-300 ${
        isScrolled ? 'py-2 sm:py-3 bg-black/90 backdrop-blur-md' : 'py-3 sm:py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link 
          to={`/${lang}`}
          className="flex items-center gap-1.5 sm:gap-2 text-white font-bold text-lg sm:text-xl"
        >
          <div className="w-20 h-20 sm:w-24 sm:h-24 relative">
            <img 
              src="/images/theorgai_white_logo.png" 
              alt={t.logo.alt}
              className="w-full h-full object-cover"
            />
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-8">
          {navItems.map((item) => (
            <button
              key={item.sectionId}
              onClick={() => {
                document.getElementById(item.sectionId)?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`px-2 py-1 text-sm font-medium transition-all hover:text-white rounded-md ${
                location.hash === `#${item.sectionId}` ? 'text-white' : 'text-neutral-400'
              }`}
            >
              {item.name}
            </button>
          ))}
          <button 
            onClick={() => {
              document.getElementById('booking-calendar')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-primary"
          >
            {t.buttons.bookDemo}
          </button>
        </nav>
        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-neutral-300 hover:text-white rounded-md transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={t.menu.toggle}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <div 
        className={`md:hidden fixed inset-0 z-50 transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300 ${
            isMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsMenuOpen(false)}
        />
        
        {/* Menu Content */}
        <div 
          className={`absolute top-0 right-0 w-full max-w-xs h-full bg-black/95 backdrop-blur-lg transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full p-6">
            <div className="flex justify-end mb-8">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 text-neutral-300 hover:text-white rounded-md transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            
            <nav className="flex flex-col gap-4">
              {navItems.map((item, index) => (
                <button
                  key={item.sectionId}
                  onClick={() => {
                    document.getElementById(item.sectionId)?.scrollIntoView({ behavior: 'smooth' });
                    setIsMenuOpen(false);
                  }}
                  className={`py-3 px-4 text-lg transition-all duration-300 ${
                    location.hash === `#${item.sectionId}`
                      ? 'text-white bg-neutral-800/50 rounded-md' 
                      : 'text-neutral-300 hover:text-white hover:bg-neutral-800/30 rounded-md'
                  }`}
                  style={{
                    transitionDelay: `${index * 50}ms`,
                    transform: isMenuOpen ? 'translateX(0)' : 'translateX(20px)',
                    opacity: isMenuOpen ? 1 : 0
                  }}
                >
                  {item.name}
                </button>
              ))}
              
              <button
                onClick={() => {
                  document.getElementById('booking-calendar')?.scrollIntoView({ behavior: 'smooth' });
                  setIsMenuOpen(false);
                }}
                className="mt-6 btn-primary text-center py-3"
                style={{
                  transitionDelay: `${navItems.length * 50}ms`,
                  transform: isMenuOpen ? 'translateX(0)' : 'translateX(20px)',
                  opacity: isMenuOpen ? 1 : 0
                }}
              >
                {t.buttons.bookDemo}
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;