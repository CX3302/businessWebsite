/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'funeral-black': '#1a1a1a',
        'funeral-gray': '#2d2d2d',
        'funeral-light-gray': '#f8f8f8',
        'funeral-white': '#ffffff',
        'bastl-dark': '#1a1a1a',
        'bastl-gray': '#2d2d2d',
      },
      fontFamily: {
        'manrope': ['Manrope', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 