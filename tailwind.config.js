module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: '2rem'
    },
    fontFamily: {
      'sans': ['DM Sans', 'sans-serif']
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#7F369B'
        },
        almostblack: '#191B20',
        offwhite: '#F4F4FF'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
