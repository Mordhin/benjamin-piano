module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'banner': "url('./assets/synth-banner.jpg')",
      },
      colors: {
        primary: {
          100: "#da1e37",
          400: "#c71f37",
          700: "#b21e35",
          900: "#85182a"
        }
      },
      container: {
        padding: {
          DEFAULT: '4rem',
          sm: '8rem',
          lg: '16rem',
          xl: '20rem',
          '2xl': '24rem',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
