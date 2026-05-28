import React from 'react';
import OurStrength from '../features/landing/OurStrength.jsx';
import Portfolio from '../features/landing/Portfolio.jsx';
import Testimonials from '../features/landing/Testimonials.jsx';
import Blogs from '../features/landing/Blogs.jsx';
import CTABanner from '../features/landing/CTABanner.jsx';

export default function LandingBelow() {
  return (
    <>
      <OurStrength />
      <Portfolio />
      <Testimonials />
      <Blogs />
      <CTABanner />
    </>
  );
}
