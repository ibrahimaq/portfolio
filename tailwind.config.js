/** @type {import('tailwindcss').Config} */

const colors = ['indigo', 'pink', 'cyan'];

let safeList = [];
const a = colors.forEach(color => {
  const text = `text-${color}-600`
  const bg = `bg-${color}-600`
  const beforeBg = `before:bg-${color}-600`
  const decorationText = `decoration-${color}-600`
  const hoverBg = `hover:bg-${color}-600`
  const proseHeadings = `prose-headings:text-${color}-600`
  const proseLiMarker = `prose-li:marker:text-${color}-600`
  // const duration = 'duration'
  safeList.push(text, bg, beforeBg, hoverBg, proseHeadings, proseLiMarker, decorationText)
})

module.exports = {
  content: [  
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    './src/components/**/*.{js, jsx,ts,tsx}',
    './src/templates/**/*.{js, jsx,ts,tsx}'
  ],
  safelist: safeList,
  theme: {
    extend: {
      colors: (theme) =>  ({
        primary: theme.colors.indigo[600],
        backgroundDark: theme.colors.indigo[900],
        darkFont: theme.colors.zinc[700],
        // OLD COLOURS
        // 'blackBg': '#262932',
        // 'greyBg': '#EBECF0',
        // 'greylightBg': '#F9FAFC',
        // 'greyBg-dark': '#EAECEF',
        // 'white': '#FFFFFF',
        // 'font-greydark': '#545456',
        // 'font-greylight': '#E0E0E0',
        'accent-1': '#5a9eaf',
        'accent-2': '#D96299',
      }),
      boxShadow: {
        '3d': '3px 3px rgba(0, 0, 0, 1)',
        'allRound': '0px 0px 14px 7px rgba(0,0,0,0.1);'
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
              borderLeftColor: theme('colors.accent-2'),
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
              color: theme('colors.accent-1')
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
