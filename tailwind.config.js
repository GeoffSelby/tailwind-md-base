const tailwindRebase = require('./src/index');

module.exports = {
  corePlugins: false,
  plugins: [tailwindRebase()],
};
