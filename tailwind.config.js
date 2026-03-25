module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        cream: '#F5EEDC',
        'brand-green': '#9DC8A8',
      },
      borderRadius: {
        card: '25px',
        'card-lg': '30px',
        'card-xl': '35px',
      },
      maxWidth: {
        mobile: '430px',
      },
    },
  },
  plugins: [],
};
