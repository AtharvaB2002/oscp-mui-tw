// Central image registry.
//
// Every export is a uniform shape: { src, srcSet }.
//   - src    → a single URL, safe for CSS `background-image: url(...)` and as the
//              <img> fallback for browsers that ignore srcSet.
//   - srcSet → a responsive `... 500w, ... 900w` string for <img srcSet>, or
//              undefined when no responsive variants exist (e.g. the feature PNGs).
//
// Responsive WebP variants live in ./optimized and are produced by
// `npm run images:build` (see scripts/). The PNG masters in ./img are the source
// of truth and are NOT shipped directly. Raw PNGs under ./img/features are used
// as-is because the optimize script only processes the top-level img/ folder.

import manifest from './optimized/manifest.json';

// Eagerly import every optimized WebP so Vite fingerprints + emits them, keyed by
// their relative path (e.g. './optimized/homepage-banner-lg.webp' → final URL).
const webpUrls = import.meta.glob('./optimized/*.webp', {
  eager: true,
  import: 'default',
});

// Build a { src, srcSet } pair from the manifest entry for `name`.
function responsive(name) {
  const variants = manifest[name];
  if (!variants || variants.length === 0) {
    throw new Error(`No optimized variants for "${name}". Run: npm run images:build`);
  }
  // Largest first → use as the src fallback and for CSS backgrounds.
  const sorted = [...variants].sort((a, b) => b.width - a.width);
  const url = (v) => webpUrls[`./optimized/${v.file}`];
  return {
    src: url(sorted[0]),
    srcSet: sorted.map((v) => `${url(v)} ${v.width}w`).join(', '),
  };
}

// Wrap a raw (non-optimized) asset URL in the same shape, with no srcSet.
function raw(url) {
  return { src: url, srcSet: undefined };
}

// Raw feature screenshots (live in a subfolder the optimize script doesn't touch).
import featTierPricingUrl from './img/features/Tier-Pricing-B2B-Wholesale-Pricing-1.png';
import featImportExportUrl from './img/features/import-export-img.png';
import featCartDiscountUrl from './img/features/cart-discount-1.png';
import featQuickOrderFormUrl from './img/features/Quick-Order-Form-1.png';
import featTaxDisplayUrl from './img/features/Tax-display-1200x774-1.png';

// Brand / hero
export const oscWhiteLogo = responsive('OSC-White-logo');
export const homepageBanner = responsive('homepage-banner');

// Marketplace app logos
export const wholesaleB2bLogo = responsive('oscp-wholesale-b2b-app-logo');
export const pricingDiscountSuiteLogo = responsive('oscp-pricing-and-discount-suite-app-logo');
export const bundleUpsellLogo = responsive('oscp-bundle-and-upsell-app-logo');
export const shippingDiscountLogo = responsive('oscp-shipping-discount-app-logo');
export const hideShippingPaymentLogo = responsive('oscp-hide-shipping-and-payment-app-logo');
export const swatchesLogo = responsive('oscp-swatches-app-logo');
export const addOnsTierPricingLogo = responsive('oscp-add-ons-tier-pricing-app-logo');

// "We work with" segment images
export const weWorkWithRetail = responsive('we-work-with-retail');
export const weWorkWithAgencies = responsive('we-work-with-agencies');
export const weWorkWithB2b = responsive('we-work-with-b2b');

// Strength stats
export const strengthHappyCustomers = responsive('strength-happy-customers');
export const strengthEstablished = responsive('strength-established');
export const strengthDevelopers = responsive('strength-developers');
export const strengthProjects = responsive('strength-projects');

// B2B page feature screenshots (raw PNG — no responsive variants)
export const featTierPricing = raw(featTierPricingUrl);
export const featImportExport = raw(featImportExportUrl);
export const featCartDiscount = raw(featCartDiscountUrl);
export const featQuickOrderForm = raw(featQuickOrderFormUrl);
export const featTaxDisplay = raw(featTaxDisplayUrl);

// Portfolio
export const portfolioRockher = responsive('portfolio-rockher');
export const portfolioVoylite = responsive('portfolio-voylite');
export const portfolioNewwall = responsive('portfolio-newwall');
export const portfolioVitalife = responsive('portfolio-vitalife');
export const portfolioVitaliving = responsive('portfolio-vitaliving');
export const portfolioMyBongShop = responsive('portfolio-my-bong-shop');
export const portfolioDrivenByStyle = responsive('portfolio-driven-by-style');
export const portfolioRxlabels = responsive('portfolio-rxlabels');
