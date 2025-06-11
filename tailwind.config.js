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
        'bastl-blue': {
          50: '#f0f7ff',
          100: '#e0f0ff',
          200: '#b9dfff',
          300: '#7cc3ff',
          400: '#36a5ff',
          500: '#0088ff',
          600: '#0066ff',
          700: '#0052cc',
          800: '#0044a3',
          900: '#003380',
        },
        'bastl-gray': {
          50: '#f8f9fa',
          100: '#f1f3f5',
          200: '#e9ecef',
          300: '#dee2e6',
          400: '#ced4da',
          500: '#adb5bd',
          600: '#868e96',
          700: '#495057',
          800: '#343a40',
          900: '#212529',
        },
        'bastl-accent': {
          50: '#fff0f6',
          100: '#ffe3ee',
          200: '#ffc6dd',
          300: '#ff99bb',
          400: '#ff6699',
          500: '#ff3377',
          600: '#ff0055',
          700: '#cc0044',
          800: '#990033',
          900: '#660022',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
} 