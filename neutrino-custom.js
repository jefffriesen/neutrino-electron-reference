// When neutrino v5 lands, testPathDirs will be replaced with roots because
// of Jest is being updated (which has the breaking changes). For now continue
// to use testPathDirs.
// neutrino 5 changes: https://github.com/mozilla-neutrino/neutrino-dev/pull/86
module.exports = neutrino => {
  neutrino.custom.jest.testPathDirs = ['src', 'test'];
  // neutrino.custom.jest.roots = ['src', 'test'];
};

// Attempt to add tcomb runtime type checking. Waiting for neutrino v5 because
// he overhauled the neutrino object
// neutrino.custom.plugins = ['babel-plugin-tcomb'];
// console.log('neutrino.config: ', neutrino.config);
// console.log('neutrino.config: ', neutrino.getWebpackOptions());
