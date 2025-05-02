import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { CursorSpotlight } from './components/ui/cursor-spotlight';
import VoiceflowChat from './components/VoiceflowChat';

interface LayoutProps {
  lang: 'en' | 'jp';
}

const Layout: React.FC<LayoutProps> = ({ lang }) => {
  const location = useLocation();
  
  useEffect(() => {
    // Update page title based on language
    const titles = {
      en: 'AI Organization - Solve Problems Others Can\'t with AI',
      jp: 'AI Organization - AIで他の人が解決できない問題を解決する'
    };
    document.title = titles[lang];
    
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [location, lang]);
  
  const showHeader = !location.pathname.endsWith('/terms') && !location.pathname.endsWith('/privacy');
  
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <CursorSpotlight />
      {showHeader && <Header lang={lang} />}
      <main className="flex-grow w-full">
        <Outlet context={{ lang }} />
      </main>
      <Footer lang={lang} />
      <VoiceflowChat />
    </div>
  );
};

export default Layout;