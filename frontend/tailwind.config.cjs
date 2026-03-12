/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#050816',
        surface: '#0B1020',
        surfaceAlt: '#101526',
        primary: '#4F46E5',
        primarySoft: '#6366F1',
        accent: '#22C55E',
        borderSubtle: '#1E2435',
        textPrimary: '#F9FAFB',
        textMuted: '#9CA3AF',
        danger: '#EF4444',
        warning: '#F59E0B'
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