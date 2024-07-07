/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      container: {
        center: true
      },
      colors: {
        greenLighter: 'hsl(148, 38%, 91%)',
        greenMedium: 'hsl(169, 82%, 27%)',
        redInvalid: 'hsl(0, 66%, 54%)'
      },
      fontFamily: {
        karla: ['Karla', 'sans-serif']
      }
    }
  },
  plugins: []
}
