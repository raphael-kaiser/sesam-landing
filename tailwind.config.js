/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#f6f7f6',
          100: '#e3e7e3',
          200: '#c7d0c7',
          300: '#a3b2a3',
          400: '#7d917d',
          500: '#5f7560',
          600: '#4a5d4b',
          700: '#3d4c3e',
          800: '#333f34',
          900: '#2c352d',
          950: '#161c16',
        },
        sand: {
          50: '#faf8f6',
          100: '#f5f0ea',
          200: '#ebe0d4',
          300: '#dccab6',
          400: '#c9ae94',
          500: '#bb9778',
          600: '#ad8468',
          700: '#916d58',
          800: '#765a4b',
          900: '#614b3f',
          950: '#332620',
        },
        ocean: {
          50: '#f2f7f9',
          100: '#ddeaf0',
          200: '#bfd7e3',
          300: '#93bbce',
          400: '#5f97b2',
          500: '#447b98',
          600: '#3a6580',
          700: '#34546a',
          800: '#304858',
          900: '#2c3e4b',
          950: '#1a2730',
        },
        warm: {
          white: '#faf9f7',
          gray: '#f5f3f0',
          muted: '#ebe8e4',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Fredoka', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

