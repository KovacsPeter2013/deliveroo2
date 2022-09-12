module.exports = {
  content: ["./**/*.tsx",
  './screens/**/*.{html,js}',
  './components/**/*.{html,js}',
  './categories/**/*.{html,js}',
],
  
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: require('tailwind-rn/unsupported-core-plugins'),
}
