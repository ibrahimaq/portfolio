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
        'greyBg-dark': '#EAECEF',
        'white': '#FFFFFF',
        'font-greydark': '#545456',
        'font-greylight': '#E0E0E0',
        'blue': '#5a9eaf',
        'pink': '#E77AA6',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
          //   maxWidth: '1200px'
          // }
            a: {
              textUnderlineOffset: '4px',
            },
            blockquote: {
              maxWidth: "600px",
              margin: "0 20px",
              backgroundColor: theme('colors.greyBg'),
              borderLeftColor: theme('colors.font-greydark')
            },
            'blockquote p:first-of-type::before': {
              content: '',
            },
            code: {
              margin: '0 5px',
            },
            'code::before': {
              content: '',
            },
            'code::after': {
              content: '',
            },
            'li::marker': {
              color: theme('colors.blue')
            }
            
          
          }
        }
      })
    },
      //  typography: {
      //       DEFAULT: {
      //           css: {
      //             maxWidth: '1200px',
      //               // pre: null,
      //               // code: null,
      //               // 'code::before': null,
      //               // 'code::after': null,
      //               // 'pre code': null,
      //               // 'pre code::before': null,
      //               // 'pre code::after': null,
      //           },  
      //       },
      //   },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
