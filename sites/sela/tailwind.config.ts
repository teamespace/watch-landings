export default {
  content: ['./src/**/*.{astro,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Lora', 'Georgia', 'serif'],
        body: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          primary: '#1C1C1A',
          accent: '#C4573A',
          'accent-secondary': '#3A7A6E',
          background: '#FAF8F4',
          surface: '#EFEDE8',
          'surface-dark': '#1C1C1A',
          'text-secondary': '#7A7A72',
        },
      },
    },
  },
  plugins: [],
}
