import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          night: '#04245F',
          blue: '#0A3A85',
          green: '#0C7829',
          orange: '#FF4F00',
          'orange-strong': '#FF4F00',
          'orange-hover': '#0A3A85',
          muted: '#4A5A7A',
          border: '#D9DFEA',
        },
      },
      fontFamily: {
        sans: ['Montserrat', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config
