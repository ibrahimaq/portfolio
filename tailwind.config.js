/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [  
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    './src/components/**/*.{js, jsx,ts,tsx}',
    './src/templates/**/*.{js, jsx,ts,tsx}'
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
        'blue-accent': '#5a9eaf',
        // 'pink': '#E77AA6',
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
              // maxWidth: "600px",
              margin: "0 20px",
              backgroundColor: theme('colors.pink.50'),
              borderLeftColor: theme('colors.pink.500'),
              paddingTop: '1px',
              paddingBottom: '1px',
              paddingRight: '15px',
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
              color: theme('colors.pink.500')
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
