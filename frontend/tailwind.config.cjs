/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#050816',
        surface: '#0B1020',
        surfaceAlt: '#101526',
        primar
      },
      fontFamily: {
        sans: ['system-ui', 'ui-sans-serif', 'Inter', 'sans-serif']
      },
      boxShadow: {
        card: '0 18px 45px rgba(15,23,42,0.45)'
      }
    }
  },
  plugins: []
};
