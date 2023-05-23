/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'media',
  mode: 'jit',
  plugins: [],
  theme: {
    fontFamily: {
      display: ['"IBM Plex Mono"', 'Menlo', 'monospace'],
      body: ['"IBM Plex Mono"', 'Menlo', 'monospace'],
    },
    container: {
      center: true,
    },
  },
}
