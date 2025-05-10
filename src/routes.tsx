import React from 'react';
import { createBrowserRouter, RouterProvider, Navigate, useLocation } from 'react-router-dom';
import Layout from './Layout';
import HomePage from './pages/HomePage';
import HeroGeometricDemo from './pages/HeroGeometricDemo';
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';

const LanguageRedirect: React.FC = () => {
  const location = useLocation();
  // Get browser language
  const browserLang = navigator.language.toLowerCase();
  // Redirect to Japanese if browser language is Japanese, otherwise English
  const targetLang = browserLang.startsWith('ja') ? 'jp' : 'en';
  // Get the path without the leading slash
  const path = location.pathname.substring(1);
  // If path is empty, redirect to home, otherwise append the path
  const targetPath = path ? `/${targetLang}/${path}` : `/${targetLang}`;
  return <Navigate to={targetPath} replace />;
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <LanguageRedirect />,
  },
  {
    path: '/terms',
    element: <LanguageRedirect />,
  },
  {
    path: '/privacy',
    element: <LanguageRedirect />,
  },
  {
    path: '/en',
    element: <Layout lang="en" />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'hero-demo',
        element: <HeroGeometricDemo />,
      },
      {
        path: 'terms',
        element: <TermsPage />,
      },
      {
        path: 'privacy',
        element: <PrivacyPage />,
      },
    ],
  },
  {
    path: '/jp',
    element: <Layout lang="jp" />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'hero-demo',
        element: <HeroGeometricDemo />,
      },
      {
        path: 'terms',
        element: <TermsPage />,
      },
      {
        path: 'privacy',
        element: <PrivacyPage />,
      },
    ],
  },
]);

const Routes: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default Routes;