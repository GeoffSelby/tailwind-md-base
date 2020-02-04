/* eslint-disable */

const fs = require('fs');
const path = require('path');
const postcss = require('postcss');
const tailwindcss = require('tailwindcss');
const tailwindRebase = require('./src/index');

test('it generates all the classes', () => {
  const inputPath = path.resolve(`${__dirname}/stubs/input.css`);
  const input = fs.readFileSync(inputPath, 'utf8');

  return postcss(tailwindcss('./tailwind.config.js'))
    .process(input, { from: inputPath })
    .then(result => {
      const expected = fs.readFileSync(
        path.resolve(`${__dirname}/stubs/output.css`),
        'utf8',
      );

      expect(result.css).toBe(expected);
    });
});

test('it generates all classes with a custom wrapper class', () => {
  const inputPath = path.resolve(`${__dirname}/stubs/input.css`);
  const input = fs.readFileSync(inputPath, 'utf8');

  return postcss(
    tailwindcss({
      corePlugins: false,
      theme: {
        rebase: {
          wrapperClass: 'content',
        },
      },
      plugins: [tailwindRebase()],
    }),
  )
    .process(input, { from: inputPath })
    .then(result => {
      const expected = fs.readFileSync(
        path.resolve(`${__dirname}/stubs/output-with-custom-wrapper-class.css`),
        'utf8',
      );

      expect(result.css).toBe(expected);
    });
});

test('it generates all classes without a wrapper class', () => {
  const inputPath = path.resolve(`${__dirname}/stubs/input.css`);
  const input = fs.readFileSync(inputPath, 'utf8');

  return postcss(
    tailwindcss({
      corePlugins: false,
      theme: {
        rebase: {
          wrapperClass: null,
        },
      },
      plugins: [tailwindRebase()],
    }),
  )
    .process(input, { from: inputPath })
    .then(result => {
      const expected = fs.readFileSync(
        path.resolve(`${__dirname}/stubs/output-without-wrapper-class.css`),
        'utf8',
      );

      expect(result.css).toBe(expected);
    });
});

test('it generates all the classes with custom config', () => {
  const inputPath = path.resolve(`${__dirname}/stubs/input.css`);
  const input = fs.readFileSync(inputPath, 'utf8');

  return postcss(
    tailwindcss({
      corePlugins: false,
      theme: {
        rebase: {
          wrapperClass: 'markdown', // overwrite from previous test. don't know why it is still in memory.
          h1: {
            fontSize: '4rem',
          },
          p: {
            marginTop: '4rem',
          },
        },
      },
      plugins: [tailwindRebase()],
    }),
  )
    .process(input, { from: inputPath })
    .then(result => {
      const expected = fs.readFileSync(
        path.resolve(`${__dirname}/stubs/output-with-custom-config.css`),
        'utf8',
      );

      expect(result.css).toBe(expected);
    });
});

test('it generates all the classes with additional elements', () => {
  const inputPath = path.resolve(`${__dirname}/stubs/input.css`);
  const input = fs.readFileSync(inputPath, 'utf8');

  return postcss(
    tailwindcss({
      corePlugins: false,
      theme: {
        rebase: {
          img: {
            width: '100%',
          },
        },
      },
      plugins: [tailwindRebase()],
    }),
  )
    .process(input, { from: inputPath })
    .then(result => {
      const expected = fs.readFileSync(
        path.resolve(`${__dirname}/stubs/output-with-additional-elements.css`),
        'utf8',
      );

      expect(result.css).toBe(expected);
    });
});
