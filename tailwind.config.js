/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'selector',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif']
      },
      backgroundImage: {
        'github-background': "url('./src/presentation/assets/github-background.svg')"
      }
    }
  },
  plugins: []
}
