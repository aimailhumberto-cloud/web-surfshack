/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ocean: {
          50: '#e6f1f8',
          100: '#b3d4e6',
          200: '#80b7d4',
          300: '#4d9ac2',
          400: '#1a7db0',
          500: '#1E3A5F',
          600: '#172e4c',
          700: '#112239',
          800: '#0b1626',
          900: '#050b13',
        },
        sand: {
          50: '#faf8f5',
          100: '#f0ebe3',
          200: '#e6ddd1',
          300: '#dccfbf',
          400: '#D4B896',
          500: '#c4a37a',
          600: '#a88760',
          700: '#7a6147',
          800: '#5c4935',
          900: '#3e3224',
        },
        coral: {
          50: '#ffefed',
          100: '#ffd5d1',
          200: '#ffbbb4',
          300: '#ffa197',
          400: '#ff877a',
          500: '#FF6B5B',
          600: '#e04535',
          700: '#b33528',
          800: '#80261c',
          900: '#4d1310',
        },
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}