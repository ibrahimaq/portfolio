/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [  
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    './src/components/**/*.{js, jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'blackBg': '#262932',
        'greyBg': '#EBECF0',
        'greylightBg': '#F9FAFC',
        'white': '#FFFFFF',
        'font-greydark': '#545456',
        'font-greylight': '#E0E0E0',
        'blue': '5a9eaf',
        'pink': '#E77AA6',
      }
      // typography: {
      //       DEFAULT: {
      //           css: {
      //               pre: null,
      //               code: null,
      //               'code::before': null,
      //               'code::after': null,
      //               'pre code': null,
      //               'pre code::before': null,
      //               'pre code::after': null,
      //           },  
      //       },
      //   },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
