/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FAF8F5',
          100: '#F5F0EB',
          200: '#EBE0D5',
        },
        blush: {
          50: '#FDF7F7',
          100: '#F8ECEC',
          200: '#EFCACA',
          300: '#E4A8A8',
          500: '#C86D6D',
        },
        rose: {
          500: '#B85252',
          600: '#A13D3D',
        },
        sage: {
          50: '#F4F6F4',
          100: '#E5EAE5',
          200: '#C7D4C7',
          500: '#7B9B7B',
          700: '#4A6B4A',
          800: '#2D442D',
          900: '#1C2B1C',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
