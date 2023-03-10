/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize:{
        'NavbarFont':'1.7em'
      },
      boxShadow:{
        'Main':'0 0 0.75em 0.0625em hsl(0deg 0% 67% / 70%)',
        'NavShadow':'0px 0px 43px -8px #FFF'
      },
      textShadow: {
        'default': '0 0 0.42857em #e30613',
     },
     backgroundImage:{
      'Main':'url(../assets/Images/PageBackground.png)'
     },
      fontFamily:{
        'Poppins':['Poppins', 'sans-serif'],
        'Pixelated':['VT323','monospace'],
        'Eczar':['Eczar','sans-serif'],
        'Catamaran':['Catamaran','sans-serif'],
        'Redaction':['Redaction','sans-serif']
      },
      dropShadow:{
        'default':'0px 5px 18px #FFFFFF'
      }
      ,
      screens:{
        xs:'480px',
        sm:'768px',
        md:'1162px'
      },
    },
  },
  plugins: []
} 