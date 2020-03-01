const merge = require('lodash/merge');
const defaultOptions = require('./defaultOptions');

const resolveOptions = userOptions => {
  return merge(defaultOptions, userOptions);
};

module.exports = () => ({ addBase, theme }) => {
  const addBaseStyles = (wrapperClass, elem, values) => {
    const wrapper = wrapperClass ? `.${wrapperClass} ` : '';

    addBase({
      [`${wrapper}${elem}`]: values,
    });
  };

  const registerComponents = () => {
    const options = resolveOptions(theme('markdownBase'));
    const wrapper = options.wrapperClass;
    const elems = Object.keys(options).reduce((object, key) => {
      if (key !== 'wrapperClass') {
        object[key] = options[key];
      }
      return object;
    }, {});

    Object.keys(elems).forEach(key => {
      addBaseStyles(wrapper, key, elems[key]);
    });
  };

  registerComponents();
};
