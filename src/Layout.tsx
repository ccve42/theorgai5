import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { CursorSpotlight } from './components/ui/cursor-spotlight';
import VoiceflowChat from './components/VoiceflowChat';

const Layout: React.FC = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Update page title
    document.title = 'AI Organization - Solve Problems Others Can\'t with AI';
    
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [location]);
  
  const showHeader = !['/terms', '/privacy'].includes(location.pathname);
  
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <CursorSpotlight />
      {showHeader && <Header />}
      <main className="flex-grow w-full">
        <Outlet />
      </main>
      <Footer />
      <VoiceflowChat />
    </div>
  );
};

export default Layout;