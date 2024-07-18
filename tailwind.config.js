/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '790px',
      lg: '1020px',
      xl: '1440px',
    },
    extend: {
      colors:{
        red:'hsl(14, 86%, 42%)',
        green:'hsl(159, 69%, 38%)',
        rose_50:'hsl(24, 45%, 98%);',
        rose_100: 'hsl(13, 29%, 94%)',
        rose_300: 'rgb(201, 174, 166)',
        rose_400: 'hsl(7, 20%, 60%)',
        rose_500:' hsl(12, 20%, 44%)',
        rose_900: 'hsl(14, 65%, 9%)',
      },
      boxShadow:{
        '2xl':'box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px'
      },
      fontFamily: {
        'sans': ["Red Hat Text", "sans-serif"]
      }
    },
  },
  plugins: [],
}