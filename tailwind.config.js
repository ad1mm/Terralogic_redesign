/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Brand palette derived from the TerraLogic logo
        navy: {
          DEFAULT: '#143350',
          50: '#f1f5f9',
          100: '#dbe3ec',
          200: '#b9c8d9',
          600: '#1b4067',
          700: '#173a5b',
          800: '#102a42',
          900: '#0c2032',
          950: '#081726',
        },
        moss: {
          DEFAULT: '#4f8d3a',
          light: '#6aa852',
          dark: '#3d7330',
        },
        ember: {
          DEFAULT: '#df8326',
          light: '#ec9a44',
          dark: '#c06f1b',
        },
        sky: {
          DEFAULT: '#2f8ecb',
          light: '#56a6da',
        },
        paper: {
          // Cool, faintly blue-tinted off-whites — ties the light sections to the navy palette
          DEFAULT: '#edf1f6',
          warm: '#e4ebf3',
          soft: '#f6f8fb',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['"Hanken Grotesk"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        container: '1240px',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(20, 51, 80, 0.04), 0 12px 32px -12px rgba(20, 51, 80, 0.16)',
        lift: '0 24px 60px -24px rgba(20, 51, 80, 0.28)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'dash': {
          '0%': { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' },
        },
        'marquee': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'float-slow': 'float-slow 6s ease-in-out infinite',
        'spin-slow': 'spin-slow 38s linear infinite',
        'marquee': 'marquee 32s linear infinite',
      },
    },
  },
  plugins: [],
}
