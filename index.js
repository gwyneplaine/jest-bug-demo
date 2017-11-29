console.warn('This is the file being tested');
const lodash = require('lodash');

function reverse (array) {
  lodash.flatten(array);
  return lodash.reverse(array);
};

module.exports = reverse;
