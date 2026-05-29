import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './app/Layout.jsx';
import LandingPage from './app/LandingPage.jsx';
import { CmsProvider, CmsPage } from './app/cms';
import './index.css';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: ':slug', element: <CmsPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CmsProvider>
      <RouterProvider router={router} />
    </CmsProvider>
  </React.StrictMode>
);
