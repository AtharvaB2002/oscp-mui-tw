import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './app/Layout.jsx';
import LandingPage from './app/LandingPage.jsx';
import B2BWholesalePricingPage from './features/b2b/B2BWholesalePricingPage.jsx';
import { B2B_PATH } from './common/constants';
import { CmsProvider, CmsPage } from './app/cms';
import './index.css';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { index: true, element: <LandingPage /> },
      // Static path is ranked above the `:slug` param route by react-router.
      { path: B2B_PATH.replace(/^\//, ''), element: <B2BWholesalePricingPage /> },
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
