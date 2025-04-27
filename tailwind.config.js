// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['IBM Plex Mono', 'monospace'],
      },
      colors: {
        gray: {
          900: 'rgb(28, 27, 27)',
          800: 'rgb(54, 54, 54)',
          700: 'rgb(96, 95, 95)',
          600: 'rgb(137, 137, 137)',
        },
        green: {
          500: 'rgb(116, 194, 92)',
          600: 'rgb(53, 165, 19)',
          700: 'rgb(9, 103, 9)',
          900: 'rgb(6, 56, 6)',
        },
      },
    },
  },
  plugins: [],
}