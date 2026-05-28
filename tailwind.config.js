/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
  // Disable Tailwind's preflight so its CSS reset never conflicts with MUI.
  corePlugins: {
    preflight: false,
  },
};
