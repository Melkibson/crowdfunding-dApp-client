/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    extend: {
      fontFamily: {
        epilogue: ['Epilogue', 'sans-serif'],
      },
      boxShadow: {
        secondary: '10px 10px 20px rgba(2, 2, 2, 0.25)',
      },
      colors : {
        gray: {
          300:'#b2b3bd',
          400: '#808191',
          500: '#4b5264',
          600: '#3a3a43',
          700: '#2c2f32',
          800: '#1c1c24',
          900: '#13131a',
        },
        lavender: '#8c6dfd',
        green:'#1dc071',
        lightGreen: '#4acd8d'
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
