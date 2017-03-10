// const merge = require('lodash');

module.exports = neutrino => {
  // When neutrino v5 lands, testPathDirs will be replaced with roots because
  // of Jest is being updated (which has the breaking changes). For now continue
  // to use testPathDirs.
  // neutrino 5 changes: https://github.com/mozilla-neutrino/neutrino-dev/pull/86

  neutrino.custom.jest.testPathDirs = ['src', 'test'];
  // neutrino.custom.jest.roots = ['src', 'test'];
};

// module.exports = neutrino => {
//   neutrino.config.module.rule('lint').loader('eslint', props => merge(props, {
//     options: {
//       rules: {
//         semi: 'off'
//       }
//     }
//   }));
// };
