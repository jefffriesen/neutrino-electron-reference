const Neutrino = require('neutrino');
const pkg = require('./package.json');
const api = new Neutrino(pkg.config.presets);

module.exports = api.custom.eslintrc();
