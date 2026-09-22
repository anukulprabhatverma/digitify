/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: '380px',
      },
      colors: {
        agency: {
          bg: '#08080a',
          surface: '#111114',
          elevated: '#17171c',
          border: '#222228',
          'border-subtle': '#1a1a20',
          muted: '#71717a',
          subtext: '#a1a1aa',
          white: '#ffffff',
          black: '#000000',
        },
        day: {
          bg: '#ffffff',
          surface: '#f9f9fb',
          elevated: '#f4f4f7',
          border: '#e4e4e7',
          'border-subtle': '#eeeeef',
          text: '#09090b',
          subtext: '#52525b',
          muted: '#71717a',
        },
        digitify: {
          purple: '#7928CA',
          'purple-light': '#9d4edd',
          'purple-dim': 'rgba(121, 40, 202, 0.12)',
          'purple-glow': 'rgba(121, 40, 202, 0.25)',
        },
      },
      fontFamily: {
        sans: ['"Inter"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
        display: ['"Space Grotesk"', '"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.03em',
        tight: '-0.02em',
        widest: '0.15em',
        ultra: '0.25em',
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
        'marquee-reverse': 'marqueeReverse 25s linear infinite',
        'pulse-subtle': 'pulseSubtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marqueeReverse: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.4 },
        },
      },
    },
  },
  plugins: [],
}
