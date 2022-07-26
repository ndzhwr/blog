const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    // colors : {
    //   'grayish' : '#c4c4c4' 
    // },
    screens: {
      'msm' : '0px',
      'xs': '475px',
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        main: ['roboto'],
        mine : ['poppins']
      },
    },
    plugins: [],
  }
}