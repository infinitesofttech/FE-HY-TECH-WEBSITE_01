/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#000000',
          dark: '#111111',
          orange: '#F96400',
          'orange-hover': '#E05A00',
          'orange-light': '#FFF5EE',
        },
        surface: {
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#EAEAEA',
        }
      }
    },
  },
  plugins: [],
}
