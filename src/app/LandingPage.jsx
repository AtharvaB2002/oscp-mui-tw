import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Box } from '@mui/material';
import Hero from '../features/landing/Hero.jsx';
import MarketplaceApps from '../features/landing/MarketplaceApps.jsx';
import WeWorkWith from '../features/landing/WeWorkWith.jsx';

const LandingBelow = lazy(() => import('./LandingBelow.jsx'));

export default function LandingPage() {
  const [belowReady, setBelowReady] = useState(false);

  // Prefetch the lazy chunk during idle time so it's ready when user scrolls.
  useEffect(() => {
    const trigger = () => setBelowReady(true);
    if ('requestIdleCallback' in window) {
      const id = window.requestIdleCallback(trigger, { timeout: 2500 });
      return () => window.cancelIdleCallback(id);
    }
    const t = setTimeout(trigger, 1500);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <Hero />
      <MarketplaceApps />
      <WeWorkWith />

      <Suspense
        fallback={
          <Box
            sx={{ height: 400, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            aria-hidden
          />
        }
      >
        {belowReady && <LandingBelow />}
      </Suspense>
    </>
  );
}
