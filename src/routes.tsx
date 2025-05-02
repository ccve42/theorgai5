import React from 'react';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import Layout from './Layout';
import HomePage from './pages/HomePage';
import HeroGeometricDemo from './pages/HeroGeometricDemo';
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';

const LanguageRedirect: React.FC = () => {
  // Get browser language
  const browserLang = navigator.language.toLowerCase();
  // Redirect to Japanese if browser language is Japanese, otherwise English
  const targetLang = browserLang.startsWith('ja') ? 'jp' : 'en';
  return <Navigate to={`/${targetLang}`} replace />;
};

const router = createBrowserRouter([
  {
    path: '/',
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