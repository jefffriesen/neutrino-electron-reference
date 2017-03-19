// Jest and tcomb settings can't be in the same file because of ordering
module.exports = neutrino => {
  neutrino.config.module.rule('compile').test(/\.(js|jsx)$/).loader('babel', ({
    options,
  }) => {
    // TODO: create option to use tcomb during runtime. This may run into ordering
    // problems with Jest. Maybe neutrino 5 fixes that?
    // options.plugins = [
    //   require.resolve('babel-plugin-tcomb'),
    //   ...options.plugins,
    // ];

    // Currently only being used during development
    options.env.development.plugins = [
      require.resolve('babel-plugin-tcomb'),
      ...options.plugins,
    ];
    return {options};
  });
};
