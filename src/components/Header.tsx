import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
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
    { name: 'Products', id: 'products' },
    { name: 'Case Studies', id: 'case-studies' },
    { name: 'Features', id: 'features' }
  ];
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-2 sm:py-3 bg-black/90 backdrop-blur-md' : 'py-3 sm:py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center gap-1.5 sm:gap-2 text-white font-bold text-lg sm:text-xl"
        >
          <div className="w-20 h-20 sm:w-24 sm:h-24 relative">
            <img 
              src="/images/theorgai_white_logo.png" 
              alt="Company Logo" 
              className="w-full h-full object-cover"
            />
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`px-2 py-1 text-sm font-medium transition-all hover:text-white rounded-md ${
                location.hash === `#${item.id}` ? 'text-white' : 'text-neutral-400'
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
            Book a Demo
          </button>
        </nav>
        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-neutral-300 hover:text-white rounded-md"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <div 
        className={`md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-lg transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-[400px] py-4 border-b border-neutral-800' : 'max-h-0 overflow-hidden py-0 border-none'
        }`}
      >
        <div className="container mx-auto flex flex-col gap-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                setIsMenuOpen(false);
              }}
              className={`py-3 px-4 text-base transition-colors ${
                location.hash === `#${item.id}`
                  ? 'text-white bg-neutral-800/50 rounded-md' 
                  : 'text-neutral-300 hover:text-white'
              }`}
            >
              {item.name}
            </button>
          ))}
          <button
            onClick={() => {
              document.getElementById('booking-calendar')?.scrollIntoView({ behavior: 'smooth' });
              setIsMenuOpen(false);
            }}
            className="mx-4 mt-4 btn-primary text-center"
          >
            Book a Demo
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;