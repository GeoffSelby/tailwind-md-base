const withCSS = require('@zeit/next-css');
const withMDX = require('@zeit/next-mdx')();

module.exports = withCSS(
  withMDX({
    pageExtensions: ['js', 'jsx', 'mdx'],
  }),
);
