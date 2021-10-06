module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#da1e37",
          400: "#c71f37",
          700: "#b21e35",
          900: "#85182a"
        }
      },
      backgroundImage: {
        'banner': "url('./assets/synth-banner.jpg')",
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
