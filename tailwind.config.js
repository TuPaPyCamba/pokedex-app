/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'PokeGray': '#EDEFF2',
      },
      width: {
        '50w': '50%',
        '55w': '55%',
        '60w': '60%',
        '70w': '70%',
        '80w': '80%',
        '85w': '85%',
        '90w': '90%',
        '95w': '95%',
        '100w' : '100%'
      },
      gridTemplateRows: {
        'layout': 'auto 1fr auto'
      },
      screens: {
        '360': '360px',
        '600': '600px',
        '700' : '700px',
        '850' : '850px',
        '900' : '900px',
        '1000': '1000px',
        '1150': '1150px',
        "1400": "1400px"
      }, 
    },
  },
  plugins: [],
}

