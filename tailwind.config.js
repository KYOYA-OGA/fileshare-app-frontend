module.exports = {
  purge: ['./src/**/*.{ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        niko: 'Nico Moji',
      },
      colors: {
        yellow: {
          light: '#FFC26D',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
