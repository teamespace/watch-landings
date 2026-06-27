export default {
  content: ['./src/**/*.{astro,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
        body: ['Space Grotesk', 'system-ui', 'sans-serif'],
        sans: ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          primary: '#0D0D0D',
          accent: '#3B5E3A',
          'surface-mid': '#EDEDEA',
          'surface-dark': '#1A1A18',
          warm: '#B07D45',
          'text-secondary': '#5A5A5A',
        },
      },
    },
  },
  plugins: [],
}
