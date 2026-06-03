import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#020617',
        surface: '#0F172A',
        primary: '#0EA5E9',
        secondary: '#6366F1',
        'text-primary': '#F8FAFC',
        muted: '#94A3B8',
        success: '#10B981',
        danger: '#EF4444',
        border: 'rgba(255,255,255,0.06)',
      },
      fontFamily: {
        syne: ['var(--font-syne)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-gradient': 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(14,165,233,0.15), transparent)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 3s infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4,0,0.6,1) infinite',
        'spin-slow': 'spin 20s linear infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'gradient-x': 'gradient-x 8s ease infinite',
        'border-glow': 'border-glow 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'border-glow': {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
      },
      boxShadow: {
        'glow-blue': '0 0 40px rgba(14,165,233,0.3)',
        'glow-blue-sm': '0 0 20px rgba(14,165,233,0.2)',
        'glow-purple': '0 0 40px rgba(99,102,241,0.3)',
        'glow-green': '0 0 40px rgba(16,185,129,0.3)',
        'glow-red': '0 0 40px rgba(239,68,68,0.2)',
        'card': '0 0 0 1px rgba(255,255,255,0.05), 0 4px 24px rgba(0,0,0,0.4)',
        'card-hover': '0 0 0 1px rgba(14,165,233,0.3), 0 8px 40px rgba(14,165,233,0.15)',
      },
    },
  },
  plugins: [],
}

export default config
