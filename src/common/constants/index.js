// Route for the dedicated OSCP B2B Wholesale Pricing app page.
export const B2B_PATH = '/shopify-b2b-wholesale-pricing-app';

export const navLinks = [
  { label: 'Magento', href: '#magento' },
  // `dropdown: true` marks the Shopify item as a mega-menu trigger rather than
  // a plain anchor — both Header (desktop) and MobileNavDrawer (mobile) special-case it.
  { label: 'Shopify', href: '#shopify', dropdown: true },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Blogs', href: '#blogs' },
  { label: 'About Us', href: '#about' },
];

// Shared data for the Shopify mega-menu, consumed by both the desktop and mobile
// versions so the two stay in sync. `to` → internal router link, `href` → anchor.
// `icon` is a lucide-react icon name resolved in ShopifyNav.
export const shopifyServices = [
  { label: 'Shopify Store Setup', href: '#shopify-store-setup', icon: 'Store' },
  { label: 'Theme Design & Customization', href: '#shopify-theme', icon: 'Paintbrush' },
  { label: 'Custom App Development', href: '#shopify-app-development', icon: 'Code2' },
  { label: 'Store Migration', href: '#shopify-migration', icon: 'ArrowLeftRight' },
  { label: 'Speed Optimization', href: '#shopify-speed', icon: 'Gauge' },
  { label: 'Maintenance & Support', href: '#shopify-support', icon: 'Wrench' },
];

export const shopifyApps = [
  { label: 'OSCP Wholesale B2B', to: B2B_PATH, icon: 'Tag' },
  { label: 'OSCP Pricing & Discount Suite', href: '#', icon: 'Tags' },
  { label: 'OSCP Bundle & Upsell', href: '#', icon: 'Layers' },
  { label: 'OSCP Shipping Discount', href: '#', icon: 'Truck' },
  { label: 'OSCP Hide Shipping & Payment', href: '#', icon: 'EyeOff' },
  { label: 'OSCP Swatches', href: '#', icon: 'Palette' },
  { label: 'OSCP Add-Ons Tier Pricing', href: '#', icon: 'BarChart3' },
];

export const CIRCUIT_PATTERN =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240' viewBox='0 0 240 240'><g fill='none' stroke='%2300A4BD' stroke-width='0.8' opacity='0.35'><path d='M0 40h60v40h60v40h60v40h60'/><path d='M40 0v40h40v60h40v60h40v60'/><path d='M200 0v60h-40v60h-40v60h-40v60'/><path d='M0 200h40v-40h60v-40h60v-40h80'/></g><g fill='%2300A4BD' opacity='0.55'><circle cx='60' cy='40' r='2.2'/><circle cx='120' cy='80' r='2.2'/><circle cx='180' cy='120' r='2.2'/><circle cx='40' cy='100' r='2.2'/><circle cx='160' cy='160' r='2.2'/><circle cx='200' cy='60' r='2.2'/></g></svg>\")";
    


