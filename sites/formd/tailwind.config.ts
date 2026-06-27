export default {
  content: ['./src/**/*.{astro,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['DM Sans', 'system-ui', 'sans-serif'],
        body: ['DM Sans', 'system-ui', 'sans-serif'],
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          primary: '#0A0A0A',
          accent: '#CC2200',
          surface: '#F5F5F5',
          'surface-dark': '#0A0A0A',
          'text-secondary': '#666666',
          grid: '#E0E0E0',
        },
      },
    },
  },
  plugins: [],
}
