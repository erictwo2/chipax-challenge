module.exports = {
  purge: ['./src/pages/*.{js,jsx,ts,tsx}', './src/pages/**/*.{js,jsx,ts,tsx}', './src/components/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: [require('tailwindcss-textshadow')]
};
