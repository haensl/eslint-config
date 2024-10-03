const globals = require('globals');
const haensl = require('./lib');

const config = {
  languageOptions: {
    globals: {
      ...globals.node,
      ...globals.mocha
    }
  }
};

module.exports = [
  ...haensl,
  config
];

