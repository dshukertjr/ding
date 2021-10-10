module.exports = {
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'party': "url('/img/party.svg')",
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
