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
          primary: '#111111',
          accent: '#2D4A3E',
          warm: '#E8C97E',
          surface: '#F4F4F0',
          'text-secondary': '#888888',
          error: '#D94F3D',
        },
      },
    },
  },
  plugins: [],
}
