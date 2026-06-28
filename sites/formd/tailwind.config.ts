export default {
  content: ['./src/**/*.{astro,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['DM Sans', 'system-ui', 'sans-serif'],
        body: ['DM Sans', 'system-ui', 'sans-serif'],
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      fontSize: {
        'display-xl': ['clamp(3rem, 6.5vw, 5.5rem)', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        'display-lg': ['clamp(2.25rem, 4.5vw, 3.75rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-md': ['clamp(1.5rem, 2.5vw, 2.25rem)', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        'label': ['0.6875rem', { lineHeight: '1.3', letterSpacing: '0.08em' }],
        'body-sm': ['0.875rem', { lineHeight: '1.6' }],
        'body': ['0.9375rem', { lineHeight: '1.6' }],
      },
      letterSpacing: {
        'label': '0.08em',
        'wide-caps': '0.12em',
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
      transitionTimingFunction: {
        'formd': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [],
}
