const Neutrino = require('neutrino');
const pkg = require('./package.json');
const api = new Neutrino(pkg.config.presets);

console.log('==== eslintrc ====')
console.log(api.custom.eslintrc())

module.exports = api.custom.eslintrc();
