import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg:        '#080B14',
        surface:   '#0D1120',
        surface2:  '#111827',
        border:    '#1C2337',
        teal:      '#2DD4BF',
        violet:    '#8B5CF6',
        'text-strong': '#E2E8F0',
        'text-muted':  '#475569',
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        mono:    ['JetBrains Mono', 'monospace'],
        sans:    ['Inter', 'sans-serif'],
      },
      animation: {
        'float-up': 'floatUp var(--dur, 20s) linear infinite',
        scanline:   'scanline 10s linear infinite',
      },
      keyframes: {
        floatUp: {
          '0%':   { transform: 'translateY(0)',      opacity: '0' },
          '8%':   {                                  opacity: '1' },
          '92%':  {                                  opacity: '1' },
          '100%': { transform: 'translateY(-105vh)', opacity: '0' },
        },
        scanline: {
          '0%':   { transform: 'translateY(-4px)' },
          '100%': { transform: 'translateY(100vh)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
