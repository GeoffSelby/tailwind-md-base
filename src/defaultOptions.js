const defaultTheme = require('tailwindcss/resolveConfig')(
  require('tailwindcss/defaultConfig'),
).theme;

module.exports = {
  wrapperClass: 'markdown',

  h1: {
    fontSize: defaultTheme.fontSize['4xl'],
    fontWeight: defaultTheme.fontWeight.bold,
    marginTop: 0,
    marginBottom: defaultTheme.spacing[2],
  },

  h2: {
    fontSize: defaultTheme.fontSize['3xl'],
    fontWeight: defaultTheme.fontWeight.bold,
    marginTop: 0,
    marginBottom: defaultTheme.spacing[2],
  },

  h3: {
    fontSize: defaultTheme.fontSize['2xl'],
    fontWeight: defaultTheme.fontWeight.bold,
    marginTop: 0,
    marginBottom: defaultTheme.spacing[2],
  },

  h4: {
    fontSize: defaultTheme.fontSize.xl,
    fontWeight: defaultTheme.fontWeight.bold,
    marginTop: 0,
    marginBottom: defaultTheme.spacing[2],
  },

  h5: {
    fontSize: defaultTheme.fontSize.lg,
    fontWeight: defaultTheme.fontWeight.bold,
    marginTop: 0,
    marginBottom: defaultTheme.spacing[2],
  },

  h6: {
    fontSize: defaultTheme.fontSize.base,
    fontWeight: defaultTheme.fontWeight.bold,
    marginTop: 0,
    marginBottom: defaultTheme.spacing[2],
  },

  p: {
    marginTop: 0,
    marginBottom: defaultTheme.spacing[4],
  },

  a: {
    color: defaultTheme.colors.blue[500],
    textDecoration: 'none',
    '&:hover': {
      color: defaultTheme.colors.blue[600],
      textDecoration: 'none',
    },
  },

  blockquote: {
    borderColor: defaultTheme.colors.gray[300],
    borderLeftWidth: defaultTheme.borderWidth[4],
    fontWeight: defaultTheme.fontWeight.normal,
    fontStyle: 'italic',
    marginTop: defaultTheme.spacing[8],
    marginBottom: defaultTheme.spacing[8],
    paddingLeft: defaultTheme.spacing[6],
    color: defaultTheme.colors.gray[800],
    fontSize: defaultTheme.fontSize.lg,
  },

  code: {
    backgroundColor: defaultTheme.colors.gray[300],
    paddingLeft: defaultTheme.spacing[2],
    paddingRight: defaultTheme.spacing[2],
    paddingTop: defaultTheme.spacing.px,
    paddingBottom: defaultTheme.spacing.px,
    borderRadius: defaultTheme.borderRadius.default,
    fontSize: defaultTheme.fontSize.sm,
  },

  hr: {
    borderBottomWidth: defaultTheme.borderWidth.default,
    borderColor: defaultTheme.colors.gray[300],
    marginTop: defaultTheme.spacing[12],
    marginBottom: defaultTheme.spacing[12],
    borderRadius: defaultTheme.borderRadius.full,
  },

  ul: {
    listStyleType: defaultTheme.listStyleType.disc,
    listStylePosition: 'inside',
    marginTop: defaultTheme.spacing[4],
    marginBottom: defaultTheme.spacing[4],
  },

  ol: {
    listStyleType: defaultTheme.listStyleType.decimal,
    listStylePosition: 'inside',
    marginTop: defaultTheme.spacing[4],
    marginBottom: defaultTheme.spacing[4],
  },

  table: {
    width: '100%',
    color: defaultTheme.colors.gray[900],
    marginBottom: '1rem',
    padding: 0,
    borderCollapse: 'collapse',
    tr: {
      borderTopWidth: defaultTheme.borderWidth.default,
      borderColor: defaultTheme.colors.gray[700],
      backgroundColor: defaultTheme.colors.white,
      margin: 0,
      padding: 0,
      '&:nth-child(2n)': {
        backgroundColor: defaultTheme.colors.gray[100],
      },
      th: {
        fontWeight: defaultTheme.fontWeight.bold,
        borderWidth: defaultTheme.borderWidth.default,
        borderColor: defaultTheme.colors.gray[700],
        textAlign: 'left',
        margin: 0,
        padding: '6px 13px',
        '&:first-child': {
          marginTop: 0,
        },
        '&:last-child': {
          marginBottom: 0,
        },
      },
      td: {
        borderWidth: defaultTheme.borderWidth.default,
        borderColor: defaultTheme.colors.gray[700],
        textAlign: 'left',
        margin: 0,
        padding: '6px 13px',
        '&:first-child': {
          marginTop: 0,
        },
        '&:last-child': {
          marginBottom: 0,
        },
      },
    },
  },
};
