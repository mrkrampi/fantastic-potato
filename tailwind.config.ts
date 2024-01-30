import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'rectangle-spin': {
          '0%': {
            opacity: '1',
            transform: 'rotate(0deg)',
            animationTimingFunction: 'linear',
          },
          '27%': {
            opacity: '0.3',
            transform: 'rotate(400deg)',
            animationTimingFunction: 'linear',
          },
          '100%': {
            opacity: '1',
            transform: 'rotate(360deg)',
          },
        },
        'stepper-item-horizontal-1': {
          '0%': {
            transform: 'translateX(0px)',
            animationTimingFunction: 'linear',
          },
          '60%': {
            transform: 'translateX(0px)',
            animationTimingFunction: 'linear',
          },
          '100%': {
            transform: 'translateX(10vw)',
          },
        },
        'stepper-item-horizontal-2': {
          '0%': {
            transform: 'translateX(0px)',
            animationTimingFunction: 'linear',
          },
          '60%': {
            transform: 'translateX(0px)',
            animationTimingFunction: 'linear',
          },
          '100%': {
            transform: 'translateX(20vw)',
          },
        },
        'stepper-item-horizontal-3': {
          '0%': {
            transform: 'translateX(0px)',
            animationTimingFunction: 'linear',
          },
          '60%': {
            transform: 'translateX(0px)',
            animationTimingFunction: 'linear',
          },
          '100%': {
            transform: 'translateX(30vw)',
          },
        },
        'stepper-item-vertical-1': {
          '0%': {
            transform: 'translateY(0px)',
            animationTimingFunction: 'linear',
          },
          '60%': {
            transform: 'translateY(0px)',
            animationTimingFunction: 'linear',
          },
          '100%': {
            transform: 'translateY(85px)',
          },
        },
        'stepper-item-vertical-2': {
          '0%': {
            transform: 'translateY(0px)',
            animationTimingFunction: 'linear',
          },
          '60%': {
            transform: 'translateY(0px)',
            animationTimingFunction: 'linear',
          },
          '100%': {
            transform: 'translateY(180px)',
          },
        },
        'stepper-item-vertical-3': {
          '0%': {
            transform: 'translateY(0px)',
            animationTimingFunction: 'linear',
          },
          '60%': {
            transform: 'translateY(0px)',
            animationTimingFunction: 'linear',
          },
          '100%': {
            transform: 'translateY(270px)',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'rectangle-spin': 'rectangle-spin 5.5s linear infinite',
        'stepper-1': 'stepper-item-horizontal-1 1s linear forwards',
        'stepper-2': 'stepper-item-horizontal-2 1.5s linear forwards',
        'stepper-3': 'stepper-item-horizontal-3 2.5s linear forwards',
        'mobile-stepper-1': 'stepper-item-vertical-1 1s linear forwards',
        'mobile-stepper-2': 'stepper-item-vertical-2 1.5s linear forwards',
        'mobile-stepper-3': 'stepper-item-vertical-3 2.5s linear forwards',
        'slow-spin': 'spin 25s linear infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
