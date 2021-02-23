module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'primary' : ['Open Sans']
      },
      colors: {
        'primary' : '#FBE8A6',
        'secondary' : '#F4976C',
        'tertiary' : '#303C6C',
        'quaternary' : '#B4DFE5',
        'quinary' : '#D2FDFF',
      },
      minHeight: {
        '75': '18.75rem',
        '100' : '25rem',
        '200' : '50rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
