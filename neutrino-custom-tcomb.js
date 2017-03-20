// const util = require('util');

// Jest and tcomb settings can't be in the same file because of ordering
module.exports = neutrino => {
  neutrino.config.devtool('source-map');

  neutrino.config.module.rule('compile').test(/\.(js|jsx)$/).loader('babel', ({
    options,
  }) => {
    // Currently only checking types during development
    options.env.development.plugins = [
      require.resolve('babel-plugin-tcomb'),
      ...options.plugins,
    ];
    return {options};
  });

  // Output the full neutrino object for debugging
  // console.log(util.inspect(neutrino, {showHidden: false, depth: null}));
};
