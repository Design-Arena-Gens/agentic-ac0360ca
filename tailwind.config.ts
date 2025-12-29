import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        studioBlue: '#0A1F44',
        studioAccent: '#1F6FEB',
        studioHighlight: '#F5A623'
      },
      boxShadow: {
        spotlight: '0 25px 50px -12px rgba(31, 111, 235, 0.45)'
      },
      backgroundImage: {
        'studio-grid': 'linear-gradient(135deg, rgba(31, 111, 235, 0.12) 0%, rgba(10, 31, 68, 0.75) 65%, rgba(0, 0, 0, 0.85) 100%)'
      }
    }
  },
  plugins: []
};

export default config;
