/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'lg': '1024px',
      },
      fontFamily: {
        sans: ['Taipei Sans TC Beta', 'Roboto', '-apple-system', 'monospace', 'Arial', 'sans-serif'],
      },
      fontSize: {
        base: '14px',
      },
    },
  },
}
