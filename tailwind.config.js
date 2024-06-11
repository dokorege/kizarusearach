/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './src/*',
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],

  theme: {
    extend: {
      fontFamily:{
        "VT323": ['VT323', 'monospace'] 
      },
      colors: {
        purple: {
          1000: '#151520'
        },

        red:{
          1000: "#380000",
          'onepiece': "#FD0000"
        }, 
        gray: {
          900: '#202225',
          800: '#2f3136',
          700: '#36393f',
          600: '#4f545c',
          400: '#d4d7dc',
          300: '#e3e5e8',
          200: '#ebedef',
          100: '#f2f3f5',
        },
      },
      spacing: {
        88: '22rem',
        120: '37rem',
        800: '50rem'
      },
    },
  },
  plugins: [],
};