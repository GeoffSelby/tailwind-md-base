const tailwindMdBase = require('../src/index');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    extend: {
      colors: {
        code: '#2e3440',
      },
    },
    markdownBase: {
      h1: {
        color: defaultTheme.colors.gray[800],
      },
      h2: {
        color: defaultTheme.colors.gray[800],
      },
      h3: {
        color: defaultTheme.colors.gray[800],
      },
      h4: {
        color: defaultTheme.colors.gray[800],
      },
      pre: {
        marginBottom: defaultTheme.spacing[10],
        '& > div > pre': {
          marginBottom: defaultTheme.spacing[0],
        },
        '& > code': {
          backgroundColor: 'transparent',
        },
      },
    },
  },
  variants: {},
  plugins: [tailwindMdBase()],
};
