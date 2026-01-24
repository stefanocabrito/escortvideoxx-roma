/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./client/index.html",
    "./client/src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#C41E7E',
        secondary: '#DC143C',
        dark: '#333333',
        light: '#F5F5F5',
      },
    },
  },
  plugins: [],
}
