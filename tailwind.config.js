/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'media',
  mode: 'jit',
  plugins: [require('@tailwindcss/typography'), require('./plugins/animation-delay')],
  theme: {
    extend: {
      animation: {
        pong: 'pong 2s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
      keyframes: {
        pong: { '50%, 75%': { transform: 'scale(2.5)' }, '75%, 100%': { opacity: 0 } },
      },
    },
    fontFamily: {
      display: ['"IBM Plex Mono"', 'Menlo', 'monospace'],
      body: ['"IBM Plex Mono"', 'Menlo', 'monospace'],
    },
    container: {
      center: true,
    },
  },
}
