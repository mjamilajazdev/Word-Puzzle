/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.html',
    './src/**/*.jsx',
    './src/**/*.tsx',
  ],
  theme: {
    extend: {
      fontFamily: {
        kaushan: ['Kaushan Script', 'cursive'],
      },
    },
  },
  plugins: [],
}