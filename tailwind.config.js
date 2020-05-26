module.exports = {
  purge: [
    '*.html'
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Karla', 'sans-serif'],
        display: ['Karla', 'sans-serif']
      }
    }
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
  },
  plugins: []
}