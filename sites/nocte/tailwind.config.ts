export default {
  content: ['./src/**/*.{astro,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        body: ['DM Sans', 'system-ui', 'sans-serif'],
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          primary: '#1A1A1A',
          accent: '#C9A96E',
          background: '#F7F5F2',
          'surface-dark': '#111111',
          'text-secondary': '#6B6B6B',
        },
      },
    },
  },
  plugins: [],
}
