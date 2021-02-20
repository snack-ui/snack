const pkg = require('./package.json');

const banner = `
/*!
 * ${pkg.name} - v${pkg.version}
 * ${pkg.description}
 * ${pkg.homepage}
 *
 * Copyright (c) 2017 ${pkg.author}
 * Released under ${pkg.license} License
 */
`;

module.exports = ctx => ({
  map: ctx.options.map,
  plugins: {
    'postcss-header': {
      header: banner,
    },
  }
})
