/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./posts/**/*.md",
    "./build.js",
    "./*.html"
  ],
  theme: {
    extend: {
      colors: {
        abyss: '#0d1117',
        steel: '#161b22',
        steelLight: '#21262d',
        steelBorder: '#30363d',
        neonCyan: '#58a6ff',
        brightBlue: '#1f6feb',
        mintGreen: '#3fb950',
        alertRed: '#f85149',
        alertOrange: '#d29922'
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif']
      }
    },
  },
  plugins: [],
}
