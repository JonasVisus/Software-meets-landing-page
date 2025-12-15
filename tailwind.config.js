/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f5ef',
          100: '#ccebe0',
          200: '#99d7c1',
          300: '#66c3a2',
          400: '#33af83',
          500: '#00321F',
          600: '#002919',
          700: '#002014',
          800: '#00170e',
          900: '#000e09',
          950: '#000503',
          DEFAULT: '#00321F',
        },
        secondary: {
          50: '#f5f7f6',
          100: '#e8edea',
          200: '#d4ddd8',
          300: '#b5c5bc',
          400: '#8fa69a',
          500: '#6f897c',
          600: '#587064',
          700: '#485a52',
          800: '#3c4b44',
          900: '#2d3832',
          950: '#1a211d',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        softwaresolutions: {
          'primary': '#00321F',
          'primary-content': '#ffffff',
          'secondary': '#6f897c',
          'secondary-content': '#ffffff',
          'accent': '#009b64',
          'accent-content': '#ffffff',
          'neutral': '#1a211d',
          'neutral-content': '#e8edea',
          'base-100': '#ffffff',
          'base-200': '#f5f7f6',
          'base-300': '#e8edea',
          'base-content': '#1a211d',
          'info': '#009b64',
          'success': '#16a34a',
          'warning': '#f59e0b',
          'error': '#ef4444',
        },
      },
    ],
    darkTheme: false,
    base: true,
    styled: true,
    utils: true,
    logs: false,
  },
}
